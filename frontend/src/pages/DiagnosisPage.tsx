// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   Droplets,
//   Scan,
//   Heart,
//   Activity,
//   Stethoscope,
//   Microscope,
//   Wind,
//   Upload,
//   LucideIcon,
// } from "lucide-react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";

// // Define strict types for our configuration
// interface Field {
//   name: string;
//   label: string;
//   type: string;
//   placeholder: string;
//   min?: number;
//   max?: number;
// }

// interface DiseaseConfig {
//   name: string;
//   icon: LucideIcon;
//   color: string;
//   accuracy: string;
//   fields: Field[];
//   isImageBased?: boolean;
// }

// const diseaseConfig: Record<string, DiseaseConfig> = {
//   diabetes: {
//     name: "Diabetes",
//     icon: Droplets,
//     color: "from-blue-500 to-cyan-500",
//     accuracy: "74.03%",
//     fields: [
//       {
//         name: "pregnancies",
//         label: "Pregnancies",
//         type: "number",
//         placeholder: "0",
//       },
//       { name: "glucose", label: "Glucose", type: "number", placeholder: "120" },
//       {
//         name: "bloodPressure",
//         label: "Blood Pressure",
//         type: "number",
//         placeholder: "80",
//       },
//       {
//         name: "skinThickness",
//         label: "Skin Thickness",
//         type: "number",
//         placeholder: "20",
//       },
//       { name: "insulin", label: "Insulin", type: "number", placeholder: "80" },
//       { name: "bmi", label: "BMI", type: "number", placeholder: "25.0" },
//       {
//         name: "dpf",
//         label: "Diabetes Pedigree Function",
//         type: "number",
//         placeholder: "0.5",
//       },
//       { name: "age", label: "Age", type: "number", placeholder: "30" },
//     ],
//   },
//   "heart-disease": {
//     name: "Heart Disease",
//     icon: Heart,
//     color: "from-red-500 to-orange-500",
//     accuracy: "100%",
//     fields: [
//       { name: "age", label: "Age", type: "number", placeholder: "50" },
//       {
//         name: "sex",
//         label: "Sex (1=M, 0=F)",
//         type: "number",
//         placeholder: "1",
//       },
//       {
//         name: "cp",
//         label: "Chest Pain Type",
//         type: "number",
//         placeholder: "0",
//       },
//       {
//         name: "trestbps",
//         label: "Resting BP",
//         type: "number",
//         placeholder: "120",
//       },
//       {
//         name: "chol",
//         label: "Cholesterol",
//         type: "number",
//         placeholder: "200",
//       },
//       {
//         name: "fbs",
//         label: "Fasting BS > 120",
//         type: "number",
//         placeholder: "0",
//       },
//       {
//         name: "restecg",
//         label: "Resting ECG",
//         type: "number",
//         placeholder: "0",
//       },
//       {
//         name: "thalach",
//         label: "Max Heart Rate",
//         type: "number",
//         placeholder: "150",
//       },
//       {
//         name: "exang",
//         label: "Exercise Angina",
//         type: "number",
//         placeholder: "0",
//       },
//       {
//         name: "oldpeak",
//         label: "ST Depression",
//         type: "number",
//         placeholder: "1.0",
//       },
//       { name: "slope", label: "ST Slope", type: "number", placeholder: "1" },
//       {
//         name: "ca",
//         label: "Major Vessels (0-3)",
//         type: "number",
//         placeholder: "0",
//       },
//       {
//         name: "thal",
//         label: "Thalassemia (1-3)",
//         type: "number",
//         placeholder: "2",
//       },
//     ],
//   },
//   "breast-cancer": {
//     name: "Breast Cancer",
//     icon: Scan,
//     color: "from-pink-500 to-rose-500",
//     accuracy: "96.49%",
//     fields: [
//       {
//         name: "radiusMean",
//         label: "Radius Mean",
//         type: "number",
//         placeholder: "14.0",
//       },
//       {
//         name: "textureMean",
//         label: "Texture Mean",
//         type: "number",
//         placeholder: "20.0",
//       },
//       {
//         name: "perimeterMean",
//         label: "Perimeter Mean",
//         type: "number",
//         placeholder: "90.0",
//       },
//       {
//         name: "areaMean",
//         label: "Area Mean",
//         type: "number",
//         placeholder: "600",
//       },
//       {
//         name: "smoothnessMean",
//         label: "Smoothness Mean",
//         type: "number",
//         placeholder: "0.1",
//       },
//       {
//         name: "compactnessMean",
//         label: "Compactness Mean",
//         type: "number",
//         placeholder: "0.1",
//       },
//     ],
//   },
//   "kidney-disease": {
//     name: "Kidney Disease",
//     icon: Activity,
//     color: "from-purple-500 to-violet-500",
//     accuracy: "96.88%",
//     fields: [
//       { name: "age", label: "Age", type: "number", placeholder: "50" },
//       {
//         name: "bp",
//         label: "Blood Pressure",
//         type: "number",
//         placeholder: "80",
//       },
//       {
//         name: "sg",
//         label: "Specific Gravity",
//         type: "number",
//         placeholder: "1.02",
//       },
//       { name: "al", label: "Albumin (0-5)", type: "number", placeholder: "0" },
//       { name: "su", label: "Sugar (0-5)", type: "number", placeholder: "0" },
//       { name: "bu", label: "Blood Urea", type: "number", placeholder: "40" },
//       {
//         name: "sc",
//         label: "Serum Creatinine",
//         type: "number",
//         placeholder: "1.2",
//       },
//       { name: "hemo", label: "Hemoglobin", type: "number", placeholder: "14" },
//     ],
//   },
//   "liver-disease": {
//     name: "Liver Disease",
//     icon: Stethoscope,
//     color: "from-amber-500 to-yellow-500",
//     accuracy: "77.97%",
//     fields: [
//       { name: "age", label: "Age", type: "number", placeholder: "50" },
//       {
//         name: "gender",
//         label: "Gender (1=M, 0=F)",
//         type: "number",
//         placeholder: "1",
//       },
//       {
//         name: "tb",
//         label: "Total Bilirubin",
//         type: "number",
//         placeholder: "1.0",
//       },
//       {
//         name: "db",
//         label: "Direct Bilirubin",
//         type: "number",
//         placeholder: "0.3",
//       },
//       {
//         name: "alkphos",
//         label: "Alkaline Phosphatase",
//         type: "number",
//         placeholder: "200",
//       },
//       { name: "sgpt", label: "SGPT (ALT)", type: "number", placeholder: "25" },
//       { name: "sgot", label: "SGOT (AST)", type: "number", placeholder: "25" },
//       {
//         name: "tp",
//         label: "Total Proteins",
//         type: "number",
//         placeholder: "6.5",
//       },
//     ],
//   },
//   malaria: {
//     name: "Malaria",
//     icon: Microscope,
//     color: "from-green-500 to-emerald-500",
//     accuracy: "94.78%",
//     isImageBased: true,
//     fields: [],
//   },
//   pneumonia: {
//     name: "Pneumonia",
//     icon: Wind,
//     color: "from-sky-500 to-indigo-500",
//     accuracy: "95%",
//     isImageBased: true,
//     fields: [],
//   },
// };

// const DiagnosisPage = () => {
//   const { disease } = useParams<{ disease: string }>();
//   const config = disease ? diseaseConfig[disease] : null;

//   const [formData, setFormData] = useState<Record<string, string>>({});
//   const [result, setResult] = useState<{
//     prediction: boolean;
//     message: string;
//   } | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       let response: Response;
//       if (config?.isImageBased) {
//         if (!selectedImage) return;
//         const body = new FormData();
//         body.append("image", selectedImage);
//         response = await fetch("http://localhost:5000/api/predict-image", {
//           method: "POST",
//           body,
//         });
//       } else {
//         const featureValues = config?.fields.map((f) =>
//           Number(formData[f.name] || 0),
//         );
//         response = await fetch("http://localhost:5000/api/predict", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ disease, features: featureValues }),
//         });
//       }

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Prediction failed");

//       setResult({
//         prediction: data.prediction === 1,
//         message: data.message,
//       });
//       toast.success("Analysis complete!");
//     } catch (err: unknown) {
//       const errorMessage =
//         err instanceof Error ? err.message : "Backend Connection Failed";
//       toast.error(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!config)
//     return <div className="p-20 text-center">Disease config not found.</div>;

//   const Icon = config.icon;

//   return (
//     <Layout>
//       <section className="py-16 container mx-auto max-w-3xl">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="mb-8"
//         >
//           <Button variant="ghost" asChild>
//             <Link to="/services" className="gap-2">
//               <ArrowLeft className="h-4 w-4" />
//               Back to Services
//             </Link>
//           </Button>
//         </motion.div>

//         <div className="text-center mb-8">
//           <div
//             className={`w-16 h-16 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center mx-auto mb-4`}
//           >
//             <Icon className="text-white h-8 w-8" />
//           </div>
//           <h1 className="text-3xl font-bold">{config.name} Analysis</h1>
//         </div>

//         {result ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className={`p-6 rounded-xl border ${
//               result.prediction
//                 ? "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-900/50 dark:text-red-200"
//                 : "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:border-green-900/50 dark:text-green-200"
//             }`}
//           >
//             <h2 className="text-xl font-bold mb-2">
//               {result.prediction
//                 ? "Positive Indication"
//                 : "Negative Indication"}
//             </h2>
//             <p className="opacity-90">{result.message}</p>
//             <Button
//               onClick={() => {
//                 setResult(null);
//                 setFormData({});
//                 setSelectedImage(null);
//                 setImagePreview(null);
//               }}
//               variant={result.prediction ? "destructive" : "default"}
//               className="mt-4"
//             >
//               New Test
//             </Button>
//           </motion.div>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="space-y-6 p-8 bg-card border rounded-2xl shadow-sm"
//           >
//             {config.isImageBased ? (
//               <div className="text-center border-2 border-dashed p-8 rounded-xl hover:bg-accent/50 transition-colors">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="hidden"
//                   id="file-upload"
//                 />
//                 <label
//                   htmlFor="file-upload"
//                   className="cursor-pointer flex flex-col items-center"
//                 >
//                   <Upload className="h-10 w-10 mb-2 text-muted-foreground" />
//                   <span className="text-sm font-medium">
//                     Click to upload image
//                   </span>
//                 </label>
//                 {imagePreview && (
//                   <img
//                     src={imagePreview}
//                     className="mt-4 max-h-48 mx-auto rounded-lg shadow-md"
//                     alt="Preview"
//                   />
//                 )}
//               </div>
//             ) : (
//               <div className="grid md:grid-cols-2 gap-4">
//                 {config.fields.map((f) => (
//                   <div key={f.name} className="space-y-2">
//                     <Label htmlFor={f.name}>{f.label}</Label>
//                     <Input
//                       id={f.name}
//                       type="number"
//                       step="any"
//                       placeholder={f.placeholder}
//                       onChange={(e) =>
//                         setFormData({ ...formData, [f.name]: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//             <Button type="submit" className="w-full" disabled={isLoading}>
//               {isLoading ? "Running Analysis..." : "Run Diagnosis"}
//             </Button>
//           </form>
//         )}
//       </section>
//     </Layout>
//   );
// };

// export default DiagnosisPage;

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
  Upload,
  LucideIcon,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Define strict types for our configuration
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
      { name: "glucose", label: "Glucose", type: "number", placeholder: "120" },
      {
        name: "bloodPressure",
        label: "Blood Pressure",
        type: "number",
        placeholder: "80",
      },
      {
        name: "skinThickness",
        label: "Skin Thickness",
        type: "number",
        placeholder: "20",
      },
      { name: "insulin", label: "Insulin", type: "number", placeholder: "80" },
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
    accuracy: "100%",
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
        label: "Chest Pain Type",
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
        label: "Cholesterol",
        type: "number",
        placeholder: "200",
      },
      {
        name: "fbs",
        label: "Fasting BS > 120",
        type: "number",
        placeholder: "0",
      },
      {
        name: "restecg",
        label: "Resting ECG",
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
        label: "Exercise Angina",
        type: "number",
        placeholder: "0",
      },
      {
        name: "oldpeak",
        label: "ST Depression",
        type: "number",
        placeholder: "1.0",
      },
      { name: "slope", label: "ST Slope", type: "number", placeholder: "1" },
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
      { name: "bu", label: "Blood Urea", type: "number", placeholder: "40" },
      {
        name: "sc",
        label: "Serum Creatinine",
        type: "number",
        placeholder: "1.2",
      },
      { name: "hemo", label: "Hemoglobin", type: "number", placeholder: "14" },
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
      { name: "sgpt", label: "SGPT (ALT)", type: "number", placeholder: "25" },
      { name: "sgot", label: "SGOT (AST)", type: "number", placeholder: "25" },
      {
        name: "tp",
        label: "Total Proteins",
        type: "number",
        placeholder: "6.5",
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

  // Uses local 5000 for dev, environment variable for Render production
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let response: Response;
      if (config?.isImageBased) {
        if (!selectedImage || !disease) return;
        const body = new FormData();
        body.append("image", selectedImage);
        // CRITICAL: Send disease type so Flask knows which model to use
        body.append("disease", disease);

        response = await fetch(`${API_BASE_URL}/api/predict-image`, {
          method: "POST",
          body,
        });
      } else {
        const featureValues = config?.fields.map((f) =>
          Number(formData[f.name] || 0),
        );
        response = await fetch(`${API_BASE_URL}/api/predict`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ disease, features: featureValues }),
        });
      }

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Prediction failed");

      setResult({
        prediction: data.prediction === 1,
        message: data.message,
      });
      toast.success("Analysis complete!");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Backend Connection Failed";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!config)
    return <div className="p-20 text-center">Disease config not found.</div>;

  const Icon = config.icon;

  return (
    <Layout>
      <section className="py-16 container mx-auto max-w-3xl">
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

        <div className="text-center mb-8">
          <div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center mx-auto mb-4`}
          >
            <Icon className="text-white h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold">{config.name} Analysis</h1>
        </div>

        {result ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-6 rounded-xl border ${
              result.prediction
                ? "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-900/50 dark:text-red-200"
                : "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:border-green-900/50 dark:text-green-200"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">
              {result.prediction
                ? "Positive Indication"
                : "Negative Indication"}
            </h2>
            <p className="opacity-90">{result.message}</p>
            <Button
              onClick={() => {
                setResult(null);
                setFormData({});
                setSelectedImage(null);
                setImagePreview(null);
              }}
              variant={result.prediction ? "destructive" : "default"}
              className="mt-4"
            >
              New Test
            </Button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-card border rounded-2xl shadow-sm"
          >
            {config.isImageBased ? (
              <div className="text-center border-2 border-dashed p-8 rounded-xl hover:bg-accent/50 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="h-10 w-10 mb-2 text-muted-foreground" />
                  <span className="text-sm font-medium">
                    Click to upload{" "}
                    {config.name === "Pneumonia" ? "X-Ray" : "Image"}
                  </span>
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    className="mt-4 max-h-48 mx-auto rounded-lg shadow-md"
                    alt="Preview"
                  />
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {config.fields.map((f) => (
                  <div key={f.name} className="space-y-2">
                    <Label htmlFor={f.name}>{f.label}</Label>
                    <Input
                      id={f.name}
                      type="number"
                      step="any"
                      placeholder={f.placeholder}
                      onChange={(e) =>
                        setFormData({ ...formData, [f.name]: e.target.value })
                      }
                      required
                    />
                  </div>
                ))}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Running Analysis..." : "Run Diagnosis"}
            </Button>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default DiagnosisPage;
