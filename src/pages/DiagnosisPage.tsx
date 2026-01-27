import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Droplets, 
  Scan, 
  Heart, 
  Activity, 
  Stethoscope, 
  Microscope, 
  Wind,
  AlertCircle,
  CheckCircle,
  Upload,
  Info
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const diseaseConfig: Record<string, {
  name: string;
  icon: any;
  color: string;
  bgColor: string;
  accuracy: string;
  fields: { name: string; label: string; type: string; placeholder: string; min?: number; max?: number }[];
  isImageBased?: boolean;
}> = {
  "diabetes": {
    name: "Diabetes",
    icon: Droplets,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500",
    accuracy: "74.03%",
    fields: [
      { name: "pregnancies", label: "Pregnancies", type: "number", placeholder: "0", min: 0, max: 20 },
      { name: "glucose", label: "Glucose (mg/dL)", type: "number", placeholder: "120", min: 0, max: 300 },
      { name: "bloodPressure", label: "Blood Pressure (mm Hg)", type: "number", placeholder: "80", min: 0, max: 200 },
      { name: "skinThickness", label: "Skin Thickness (mm)", type: "number", placeholder: "20", min: 0, max: 100 },
      { name: "insulin", label: "Insulin (mu U/ml)", type: "number", placeholder: "80", min: 0, max: 900 },
      { name: "bmi", label: "BMI", type: "number", placeholder: "25.0", min: 0, max: 70 },
      { name: "dpf", label: "Diabetes Pedigree Function", type: "number", placeholder: "0.5", min: 0, max: 3 },
      { name: "age", label: "Age", type: "number", placeholder: "30", min: 1, max: 120 },
    ]
  },
  "heart-disease": {
    name: "Heart Disease",
    icon: Heart,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500",
    accuracy: "100%",
    fields: [
      { name: "age", label: "Age", type: "number", placeholder: "50", min: 1, max: 120 },
      { name: "sex", label: "Sex (0=Female, 1=Male)", type: "number", placeholder: "1", min: 0, max: 1 },
      { name: "cp", label: "Chest Pain Type (0-3)", type: "number", placeholder: "1", min: 0, max: 3 },
      { name: "trestbps", label: "Resting Blood Pressure", type: "number", placeholder: "120", min: 0, max: 250 },
      { name: "chol", label: "Cholesterol (mg/dl)", type: "number", placeholder: "200", min: 0, max: 600 },
      { name: "fbs", label: "Fasting Blood Sugar > 120 (0/1)", type: "number", placeholder: "0", min: 0, max: 1 },
      { name: "restecg", label: "Resting ECG (0-2)", type: "number", placeholder: "0", min: 0, max: 2 },
      { name: "thalach", label: "Max Heart Rate", type: "number", placeholder: "150", min: 0, max: 250 },
      { name: "exang", label: "Exercise Induced Angina (0/1)", type: "number", placeholder: "0", min: 0, max: 1 },
      { name: "oldpeak", label: "ST Depression", type: "number", placeholder: "1.0", min: 0, max: 10 },
    ]
  },
  "breast-cancer": {
    name: "Breast Cancer",
    icon: Scan,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500",
    accuracy: "96.49%",
    fields: [
      { name: "radiusMean", label: "Radius Mean", type: "number", placeholder: "14.0", min: 0, max: 30 },
      { name: "textureMean", label: "Texture Mean", type: "number", placeholder: "20.0", min: 0, max: 50 },
      { name: "perimeterMean", label: "Perimeter Mean", type: "number", placeholder: "90.0", min: 0, max: 200 },
      { name: "areaMean", label: "Area Mean", type: "number", placeholder: "600", min: 0, max: 3000 },
      { name: "smoothnessMean", label: "Smoothness Mean", type: "number", placeholder: "0.1", min: 0, max: 1 },
      { name: "compactnessMean", label: "Compactness Mean", type: "number", placeholder: "0.1", min: 0, max: 1 },
    ]
  },
  "kidney-disease": {
    name: "Kidney Disease",
    icon: Activity,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500",
    accuracy: "96.88%",
    fields: [
      { name: "age", label: "Age", type: "number", placeholder: "50", min: 1, max: 120 },
      { name: "bp", label: "Blood Pressure (mm/Hg)", type: "number", placeholder: "80", min: 0, max: 200 },
      { name: "sg", label: "Specific Gravity", type: "number", placeholder: "1.02", min: 1, max: 1.03 },
      { name: "al", label: "Albumin (0-5)", type: "number", placeholder: "0", min: 0, max: 5 },
      { name: "su", label: "Sugar (0-5)", type: "number", placeholder: "0", min: 0, max: 5 },
      { name: "bu", label: "Blood Urea", type: "number", placeholder: "40", min: 0, max: 400 },
      { name: "sc", label: "Serum Creatinine", type: "number", placeholder: "1.2", min: 0, max: 20 },
      { name: "hemo", label: "Hemoglobin", type: "number", placeholder: "14", min: 0, max: 20 },
    ]
  },
  "liver-disease": {
    name: "Liver Disease",
    icon: Stethoscope,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500",
    accuracy: "77.97%",
    fields: [
      { name: "age", label: "Age", type: "number", placeholder: "50", min: 1, max: 120 },
      { name: "gender", label: "Gender (0=Female, 1=Male)", type: "number", placeholder: "1", min: 0, max: 1 },
      { name: "tb", label: "Total Bilirubin", type: "number", placeholder: "1.0", min: 0, max: 100 },
      { name: "db", label: "Direct Bilirubin", type: "number", placeholder: "0.3", min: 0, max: 50 },
      { name: "alkphos", label: "Alkaline Phosphatase", type: "number", placeholder: "200", min: 0, max: 3000 },
      { name: "sgpt", label: "SGPT (ALT)", type: "number", placeholder: "25", min: 0, max: 2000 },
      { name: "sgot", label: "SGOT (AST)", type: "number", placeholder: "25", min: 0, max: 5000 },
      { name: "tp", label: "Total Proteins", type: "number", placeholder: "6.5", min: 0, max: 15 },
    ]
  },
  "malaria": {
    name: "Malaria",
    icon: Microscope,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500",
    accuracy: "94.78%",
    isImageBased: true,
    fields: []
  },
  "pneumonia": {
    name: "Pneumonia",
    icon: Wind,
    color: "from-sky-500 to-indigo-500",
    bgColor: "bg-sky-500",
    accuracy: "95%",
    isImageBased: true,
    fields: []
  },
};

const DiagnosisPage = () => {
  const { disease } = useParams<{ disease: string }>();
  const config = disease ? diseaseConfig[disease] : null;
  
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ prediction: boolean; confidence: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!config) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold mb-4">Disease Not Found</h1>
            <Button asChild>
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = config.icon;

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to Python backend
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock result - in production, this would come from your Python backend
    const mockResult = {
      prediction: Math.random() > 0.5,
      confidence: 0.7 + Math.random() * 0.25
    };
    
    setResult(mockResult);
    setIsLoading(false);
    
    toast.success("Analysis complete!");
  };

  const resetForm = () => {
    setFormData({});
    setResult(null);
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <Layout>
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild>
              <Link to="/services" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
            </Button>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center mx-auto mb-4`}
              >
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                {config.name} Detection
              </h1>
              <p className="text-muted-foreground">
                Model Accuracy: <span className="text-primary font-semibold">{config.accuracy}</span>
              </p>
            </motion.div>

            {/* Result Display */}
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`mb-8 p-6 rounded-2xl border ${
                  result.prediction 
                    ? "bg-destructive/10 border-destructive/30" 
                    : "bg-success/10 border-success/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  {result.prediction ? (
                    <AlertCircle className="h-12 w-12 text-destructive" />
                  ) : (
                    <CheckCircle className="h-12 w-12 text-success" />
                  )}
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {result.prediction ? "Positive Indication" : "Negative Indication"}
                    </h3>
                    <p className="text-muted-foreground">
                      Confidence: {(result.confidence * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      {result.prediction 
                        ? "Based on the provided data, there are indications that warrant further medical evaluation. Please consult with a healthcare professional for proper diagnosis."
                        : "Based on the provided data, no significant indications were found. However, regular health check-ups are still recommended."}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <Button onClick={resetForm} variant="outline">
                    New Analysis
                  </Button>
                  <Button variant="hero">
                    Book Doctor Appointment
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Form */}
            {!result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {config.isImageBased ? (
                    // Image Upload
                    <div className="space-y-4">
                      <Label>Upload {config.name === "Malaria" ? "Cell Image" : "Chest X-Ray"}</Label>
                      <div
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                          imagePreview ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                        }`}
                      >
                        {imagePreview ? (
                          <div className="space-y-4">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="max-h-64 mx-auto rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                setSelectedImage(null);
                                setImagePreview(null);
                              }}
                            >
                              Remove Image
                            </Button>
                          </div>
                        ) : (
                          <label className="cursor-pointer block">
                            <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                            <p className="text-muted-foreground mb-2">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PNG, JPG up to 10MB
                            </p>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Form Fields
                    <div className="grid md:grid-cols-2 gap-4">
                      {config.fields.map((field) => (
                        <div key={field.name} className="space-y-2">
                          <Label htmlFor={field.name}>{field.label}</Label>
                          <Input
                            id={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            min={field.min}
                            max={field.max}
                            step="any"
                            value={formData[field.name] || ""}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            required
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isLoading || (config.isImageBased && !selectedImage)}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Run Diagnosis"
                    )}
                  </Button>
                </form>
              </motion.div>
            )}

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20"
            >
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> This is a frontend demo. 
                  To connect to your Python ML backend, update the form submission to call your 
                  Flask API endpoint. Store your Python files in a <code className="px-1.5 py-0.5 rounded bg-secondary">backend/</code> folder.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiagnosisPage;
