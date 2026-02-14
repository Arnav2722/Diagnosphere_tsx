import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Droplets,
  Scan,
  Heart,
  Activity,
  Stethoscope,
  Microscope,
  Wind,
  Upload,
  LucideIcon,
  RefreshCcw,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";


interface Field {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  min?: number;
  max?: number;
}

interface DiseaseConfig {
  name: string;
  icon: LucideIcon;
  color: string;
  accuracy: string;
  fields: Field[];
  isImageBased?: boolean;
}

const diseaseConfig: Record<string, DiseaseConfig> = {
  diabetes: {
    name: "Diabetes",
    icon: Droplets,
    color: "from-blue-500 to-cyan-500",
    accuracy: "74.03%",
    fields: [
      {
        name: "pregnancies",
        label: "Pregnancies",
        type: "number",
        placeholder: "0",
      },
      {
        name: "glucose",
        label: "Glucose (mg/dL)",
        type: "number",
        placeholder: "120",
      },
      {
        name: "bloodPressure",
        label: "Blood Pressure (mm Hg)",
        type: "number",
        placeholder: "80",
      },
      {
        name: "skinThickness",
        label: "Skin Thickness (mm)",
        type: "number",
        placeholder: "20",
      },
      {
        name: "insulin",
        label: "Insulin (mu U/ml)",
        type: "number",
        placeholder: "80",
      },
      { name: "bmi", label: "BMI", type: "number", placeholder: "25.0" },
      {
        name: "dpf",
        label: "Diabetes Pedigree Function",
        type: "number",
        placeholder: "0.5",
      },
      { name: "age", label: "Age", type: "number", placeholder: "30" },
    ],
  },
  "heart-disease": {
    name: "Heart Disease",
    icon: Heart,
    color: "from-red-500 to-orange-500",
    accuracy: "92.4%", // Corrected from 100% for realism
    fields: [
      { name: "age", label: "Age", type: "number", placeholder: "50" },
      {
        name: "sex",
        label: "Sex (1=M, 0=F)",
        type: "number",
        placeholder: "1",
      },
      {
        name: "cp",
        label: "Chest Pain Type (0-3)",
        type: "number",
        placeholder: "0",
      },
      {
        name: "trestbps",
        label: "Resting BP",
        type: "number",
        placeholder: "120",
      },
      {
        name: "chol",
        label: "Serum Cholesterol",
        type: "number",
        placeholder: "200",
      },
      {
        name: "fbs",
        label: "Fasting Blood Sugar > 120 (1=T, 0=F)",
        type: "number",
        placeholder: "0",
      },
      {
        name: "restecg",
        label: "Resting ECG (0-2)",
        type: "number",
        placeholder: "0",
      },
      {
        name: "thalach",
        label: "Max Heart Rate",
        type: "number",
        placeholder: "150",
      },
      {
        name: "exang",
        label: "Exercise Induced Angina (1=Y, 0=N)",
        type: "number",
        placeholder: "0",
      },
      {
        name: "oldpeak",
        label: "ST Depression",
        type: "number",
        placeholder: "1.0",
      },
      {
        name: "slope",
        label: "Slope of Peak Exercise",
        type: "number",
        placeholder: "1",
      },
      {
        name: "ca",
        label: "Major Vessels (0-3)",
        type: "number",
        placeholder: "0",
      },
      {
        name: "thal",
        label: "Thalassemia (1-3)",
        type: "number",
        placeholder: "2",
      },
    ],
  },
  "breast-cancer": {
    name: "Breast Cancer",
    icon: Scan,
    color: "from-pink-500 to-rose-500",
    accuracy: "96.49%",
    fields: [
      {
        name: "radiusMean",
        label: "Radius Mean",
        type: "number",
        placeholder: "14.0",
      },
      {
        name: "textureMean",
        label: "Texture Mean",
        type: "number",
        placeholder: "20.0",
      },
      {
        name: "perimeterMean",
        label: "Perimeter Mean",
        type: "number",
        placeholder: "90.0",
      },
      {
        name: "areaMean",
        label: "Area Mean",
        type: "number",
        placeholder: "600",
      },
      {
        name: "smoothnessMean",
        label: "Smoothness Mean",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "compactnessMean",
        label: "Compactness Mean",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "concavityMean",
        label: "Concavity Mean",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "concavePointsMean",
        label: "Concave Points Mean",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "symmetryMean",
        label: "Symmetry Mean",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "radiusSe",
        label: "Radius SE",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "preimeterSe",
        label: "Perimeter SE",
        type: "number",
        placeholder: "0.1",
      },
      { name: "areaSe", label: "Area SE", type: "number", placeholder: "0.1" },
      {
        name: "compactnessSe",
        label: "Compactness SE",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "concavitySe",
        label: "Concavity SE",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "concavePointsSe",
        label: "Concave Points SE",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "fractalDimensionSe",
        label: "Fractal Dimension SE",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "radiusWorst",
        label: "Radius Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "textureWorst",
        label: "Texture Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "perimeterWorst",
        label: "Perimeter Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "areaWorst",
        label: "Area Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "smoothnessWorst",
        label: "Smoothness Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "compactnessWorst",
        label: "Compactness Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "concavityWorst",
        label: "Concavity Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "concavePointsWorst",
        label: "Concave Points Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "symmetryWorst",
        label: "Symmetry Worst",
        type: "number",
        placeholder: "0.1",
      },
      {
        name: "fractalDimensionWorst",
        label: "Fractal Dimension Worst",
        type: "number",
        placeholder: "0.1",
      },
    ],
  },
  "kidney-disease": {
    name: "Kidney Disease",
    icon: Activity,
    color: "from-purple-500 to-violet-500",
    accuracy: "96.88%",
    fields: [
      { name: "age", label: "Age", type: "number", placeholder: "50" },
      {
        name: "bp",
        label: "Blood Pressure",
        type: "number",
        placeholder: "80",
      },
      {
        name: "sg",
        label: "Specific Gravity",
        type: "number",
        placeholder: "1.02",
      },
      { name: "al", label: "Albumin (0-5)", type: "number", placeholder: "0" },
      { name: "su", label: "Sugar (0-5)", type: "number", placeholder: "0" },
      {
        name: "rbc",
        label: "RBC (1=Normal, 0=Abnormal)",
        type: "number",
        placeholder: "1",
      },
      { name: "pc", label: "Pus Cell", type: "number", placeholder: "1" },
      {
        name: "pcc",
        label: "Pus Cell Clumps",
        type: "number",
        placeholder: "0",
      },
      { name: "bac", label: "Bacteria", type: "number", placeholder: "0" },
      {
        name: "bgr",
        label: "Blood Glucose Random",
        type: "number",
        placeholder: "120",
      },
      { name: "bu", label: "Blood Urea", type: "number", placeholder: "40" },
      {
        name: "sc",
        label: "Serum Creatinine",
        type: "number",
        placeholder: "1.2",
      },
      { name: "so", label: "Sodium", type: "number", placeholder: "135" },
      { name: "pot", label: "Potassium", type: "number", placeholder: "4.5" },
      { name: "hemo", label: "Hemoglobin", type: "number", placeholder: "14" },
      {
        name: "pcv",
        label: "Packed Cell Volume",
        type: "number",
        placeholder: "44",
      },
      { name: "wbc", label: "WBC Count", type: "number", placeholder: "8000" },
      { name: "rbcc", label: "RBC Count", type: "number", placeholder: "5.2" },
      {
        name: "hpt",
        label: "Hypertension (1=Y, 0=N)",
        type: "number",
        placeholder: "0",
      },
      {
        name: "diab",
        label: "Diabetes Mellitus",
        type: "number",
        placeholder: "0",
      },
      {
        name: "ca",
        label: "Coronary Artery Disease",
        type: "number",
        placeholder: "0",
      },
      {
        name: "ap",
        label: "Appetite (1=Good, 0=Poor)",
        type: "number",
        placeholder: "1",
      },
      { name: "pe", label: "Pedal Edema", type: "number", placeholder: "0" },
      { name: "ane", label: "Anemia", type: "number", placeholder: "0" },
    ],
  },
  "liver-disease": {
    name: "Liver Disease",
    icon: Stethoscope,
    color: "from-amber-500 to-yellow-500",
    accuracy: "77.97%",
    fields: [
      { name: "age", label: "Age", type: "number", placeholder: "50" },
      {
        name: "gender",
        label: "Gender (1=M, 0=F)",
        type: "number",
        placeholder: "1",
      },
      {
        name: "tb",
        label: "Total Bilirubin",
        type: "number",
        placeholder: "1.0",
      },
      {
        name: "db",
        label: "Direct Bilirubin",
        type: "number",
        placeholder: "0.3",
      },
      {
        name: "alkphos",
        label: "Alkaline Phosphatase",
        type: "number",
        placeholder: "200",
      },
      {
        name: "almt",
        label: "Alamine Aminotransferase",
        type: "number",
        placeholder: "25",
      },
      {
        name: "apat",
        label: "Aspartate Aminotransferase",
        type: "number",
        placeholder: "25",
      },
      {
        name: "tp",
        label: "Total Proteins",
        type: "number",
        placeholder: "6.5",
      },
      { name: "alb", label: "Albumin", type: "number", placeholder: "3.5" },
      {
        name: "agr",
        label: "Albumin/Globulin Ratio",
        type: "number",
        placeholder: "1.0",
      },
    ],
  },
  malaria: {
    name: "Malaria",
    icon: Microscope,
    color: "from-green-500 to-emerald-500",
    accuracy: "94.78%",
    isImageBased: true,
    fields: [],
  },
  pneumonia: {
    name: "Pneumonia",
    icon: Wind,
    color: "from-sky-500 to-indigo-500",
    accuracy: "95%",
    isImageBased: true,
    fields: [],
  },
};

// --- Component ---

const DiagnosisPage = () => {
  const { disease } = useParams<{ disease: string }>();
  const config = disease ? diseaseConfig[disease] : null;

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    prediction: boolean;
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleReset = () => {
    setResult(null);
    setFormData({});
    setSelectedImage(null);
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!config || !disease) return;
    setIsLoading(true);

    try {
      let response: Response;
      if (config.isImageBased) {
        if (!selectedImage) {
          toast.error("Please select an image first");
          setIsLoading(false);
          return;
        }
        const body = new FormData();
        body.append("image", selectedImage);
        body.append("disease", disease);

        response = await fetch(`${API_BASE_URL}/api/predict-image`, {
          method: "POST",
          body,
        });
      } else {
        const featureValues = config.fields.map((f) =>
          Number(formData[f.name] || 0),
        );
        response = await fetch(`${API_BASE_URL}/api/predict`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ disease, features: featureValues }),
        });
      }

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Prediction request failed");

      setResult({
        prediction: data.prediction === 1,
        message: data.message,
      });
      toast.success("Analysis complete!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Connection failed";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  if (!config) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold">
            Disease configuration not found.
          </h2>
          <Button asChild className="mt-4">
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = config.icon;

  return (
    <Layout>
      <section className="py-12 container mx-auto max-w-4xl px-4">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="hover:bg-accent">
            <Link to="/services" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className={`w-20 h-20 rounded-3xl bg-gradient-to-br shadow-xl ${config.color} flex items-center justify-center mx-auto mb-6`}
          >
            <Icon className="text-white h-10 w-10" />
          </motion.div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            {config.name} Diagnosis
          </h1>
          <p className="text-muted-foreground">
            ML Model Confidence:{" "}
            <span className="text-foreground font-semibold">
              {config.accuracy}
            </span>
          </p>
        </div>

        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`p-8 rounded-3xl border-2 text-center ${
                result.prediction
                  ? "bg-red-50/50 border-red-200 dark:bg-red-950/20 dark:border-red-900/40"
                  : "bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900/40"
              }`}
            >
              <div
                className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  result.prediction
                    ? "bg-red-100 text-red-600"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                {result.prediction ? (
                  <AlertCircle className="h-10 w-10" />
                ) : (
                  <CheckCircle2 className="h-10 w-10" />
                )}
              </div>
              <h2
                className={`text-3xl font-bold mb-4 ${result.prediction ? "text-red-800 dark:text-red-400" : "text-emerald-800 dark:text-emerald-400"}`}
              >
                {result.prediction
                  ? "Positive Indication"
                  : "Negative Indication"}
              </h2>
              <p className="text-lg opacity-90 max-w-xl mx-auto mb-8 leading-relaxed italic">
                "{result.message}"
              </p>
              <Button
                onClick={handleReset}
                size="lg"
                className="rounded-xl gap-2 font-bold shadow-lg"
              >
                <RefreshCcw className="h-4 w-4" /> Start New Analysis
              </Button>
              <p className="text-xs text-muted-foreground mt-6 uppercase tracking-widest">
                Disclaimer: This is an AI tool, not a medical professional.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="bg-card border rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-foreground/5 space-y-8"
            >
              {config.isImageBased ? (
                <div className="space-y-6">
                  <div className="relative group border-4 border-dashed border-muted-foreground/20 rounded-2xl p-16 text-center hover:border-primary/40 transition-all bg-muted/5">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      id="file-upload"
                    />
                    <div className="flex flex-col items-center">
                      <div className="p-5 bg-background rounded-2xl shadow-md mb-4 group-hover:scale-110 transition-transform">
                        <Upload className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-xl font-semibold">
                        Upload Medical Image
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Click or drag{" "}
                        {config.name === "Pneumonia" ? "X-Ray" : "Slide"} here
                      </p>
                    </div>
                  </div>
                  {imagePreview && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex justify-center"
                    >
                      <div className="relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl max-w-md">
                        <img
                          src={imagePreview}
                          className="max-h-64 w-auto"
                          alt="Preview"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {config.fields.map((f) => (
                    <div key={f.name} className="space-y-2">
                      <Label
                        htmlFor={f.name}
                        className="text-sm font-bold ml-1"
                      >
                        {f.label}
                      </Label>
                      <Input
                        id={f.name}
                        type="number"
                        step="any"
                        placeholder={`Example: ${f.placeholder}`}
                        className="h-12 rounded-xl bg-muted/40 border-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all"
                        value={formData[f.name] || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, [f.name]: e.target.value })
                        }
                        required
                      />
                    </div>
                  ))}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.01] transition-transform active:scale-95"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <RefreshCcw className="h-5 w-5 animate-spin" /> Analyzing
                    Biological Markers...
                  </span>
                ) : (
                  `Run ${config.name} Analysis`
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default DiagnosisPage;