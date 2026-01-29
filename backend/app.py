
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os
from PIL import Image
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def load_pkl(filename):
    path = os.path.join(BASE_DIR, "models", filename)
    if not os.path.exists(path):
        raise FileNotFoundError(f"Model file {filename} not found in /models directory")
    with open(path, "rb") as f:
        return pickle.load(f)


@app.route("/api/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        disease = data.get("disease")
        features_list = data.get("features")

        if not features_list:
            return jsonify({"message": "No features provided"}), 400

        features = np.array(features_list).reshape(1, -1)

        model_map = {
            "diabetes": "diabetes.pkl",
            "heart-disease": "heart.pkl",
            "breast-cancer": "breast_cancer.pkl",
            "kidney-disease": "kidney.pkl",
            "liver-disease": "liver.pkl",
        }

        if disease not in model_map:
            return jsonify({"message": f"Unsupported disease type: {disease}"}), 400

        model = load_pkl(model_map[disease])
        prediction = int(model.predict(features)[0])

        return jsonify(
            {
                "prediction": prediction,
                "message": (
                    "Positive indication found. Please consult a doctor."
                    if prediction == 1
                    else "No significant indicators found."
                ),
            }
        )
    except Exception as e:
        return jsonify({"message": f"Server Error: {str(e)}"}), 500


@app.route("/api/predict-image", methods=["POST"])
def predict_image():
    try:
        if "image" not in request.files:
            return jsonify({"message": "No image uploaded"}), 400

        # We need the disease type from the form data to know which model to use
        disease = request.form.get("disease")
        file = request.files["image"]
        img = Image.open(file)

        if img.mode != "RGB":
            img = img.convert("RGB")

        if disease == "malaria":
            img = img.resize((36, 36))
            img_array = np.asarray(img).reshape((1, 36, 36, 3)).astype(np.float64)
            model_path = os.path.join(BASE_DIR, "models", "malaria.h5")
            model = load_model(model_path)
            pred = int(np.argmax(model.predict(img_array)[0]))
            msg = "Infection detected" if pred == 1 else "Clear"

        elif disease == "pneumonia":
            # Note: Verify the input size (150 or 224) required by your specific pneumonia.h5 model
            img = img.resize((150, 150))
            img_array = np.asarray(img).reshape((1, 150, 150, 3))
            img_array = (
                img_array / 255.0
            )  # Normalization is usually required for X-rays

            model_path = os.path.join(
                BASE_DIR, "models/output/models/", "vgg16_pneumonia.h5"
            )
            model = load_model(model_path)

            prediction = model.predict(img_array)[0][0]
            # Pneumonia models often return a probability (0 to 1)
            pred = 1 if prediction > 0.5 else 0
            msg = "Pneumonia detected" if pred == 1 else "Lungs appear clear"

        else:
            return jsonify({"message": "Invalid image-based disease type"}), 400

        return jsonify({"prediction": pred, "message": msg})
    except Exception as e:
        return jsonify({"message": f"Image processing error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
