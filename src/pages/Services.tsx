import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Droplets, 
  Scan, 
  Heart, 
  Activity, 
  Stethoscope, 
  Microscope, 
  Wind,
  Brain,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const diseases = [
  { 
    name: "Diabetes", 
    icon: Droplets, 
    accuracy: "74.03%", 
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    slug: "diabetes",
    model: "Random Forest, Logistic Regression",
    description: "Predict diabetes based on glucose levels, BMI, age, and other health indicators.",
    features: ["Glucose Level", "Blood Pressure", "BMI", "Age", "Insulin"]
  },
  { 
    name: "Breast Cancer", 
    icon: Scan, 
    accuracy: "96.49%", 
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    slug: "breast-cancer",
    model: "SVM, Decision Tree",
    description: "Analyze cell features to detect malignant or benign breast tumors.",
    features: ["Cell Radius", "Texture", "Perimeter", "Area", "Smoothness"]
  },
  { 
    name: "Heart Disease", 
    icon: Heart, 
    accuracy: "100%", 
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    slug: "heart-disease",
    model: "Random Forest, SVM",
    description: "Evaluate cardiovascular health using key vital signs and test results.",
    features: ["Chest Pain", "Blood Pressure", "Cholesterol", "Heart Rate", "ECG"]
  },
  { 
    name: "Kidney Disease", 
    icon: Activity, 
    accuracy: "96.88%", 
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    slug: "kidney-disease",
    model: "Decision Tree, Random Forest",
    description: "Detect chronic kidney disease through blood and urine analysis markers.",
    features: ["Blood Pressure", "Albumin", "Sugar", "Blood Urea", "Creatinine"]
  },
  { 
    name: "Liver Disease", 
    icon: Stethoscope, 
    accuracy: "77.97%", 
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    slug: "liver-disease",
    model: "Logistic Regression, SVM",
    description: "Assess liver function using enzyme levels and protein ratios.",
    features: ["Bilirubin", "Proteins", "Albumin", "Enzymes", "A/G Ratio"]
  },
  { 
    name: "Malaria", 
    icon: Microscope, 
    accuracy: "94.78%", 
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    slug: "malaria",
    model: "CNN (Deep Learning)",
    description: "Analyze cell images to detect malaria parasites with high accuracy.",
    features: ["Cell Image", "Parasite Detection", "Cell Morphology"]
  },
  { 
    name: "Pneumonia", 
    icon: Wind, 
    accuracy: "95%", 
    color: "from-sky-500 to-indigo-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    slug: "pneumonia",
    model: "CNN (Deep Learning)",
    description: "Detect pneumonia from chest X-ray images using deep learning.",
    features: ["Chest X-Ray", "Lung Opacity", "Consolidation Detection"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              ML-Powered Diagnostics
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Diagnosis
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select from our range of AI-powered diagnostic tools. Each model is 
              trained on extensive medical datasets for accurate predictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {diseases.map((disease) => (
              <motion.div key={disease.name} variants={itemVariants}>
                <Link
                  to={`/diagnosis/${disease.slug}`}
                  className={`group block p-6 md:p-8 rounded-2xl bg-card border ${disease.borderColor} hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div
                      className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${disease.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <disease.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                          {disease.name} Detection
                        </h3>
                        <span className={`px-3 py-1 rounded-full ${disease.bgColor} text-xs font-semibold`}>
                          {disease.accuracy} Accuracy
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {disease.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {disease.features.slice(0, 4).map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                        {disease.features.length > 4 && (
                          <span className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                            +{disease.features.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Model: {disease.model}
                        </span>
                        <span className="flex items-center gap-2 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                          Start Test <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <Info className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These predictions are based on machine learning models and should not replace 
                  professional medical advice. While our models achieve high accuracy rates, 
                  they are meant for preliminary screening only. Always consult with a qualified 
                  healthcare professional for proper diagnosis and treatment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
