import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Shield,
  Clock,
  Users,
  Activity,
  Heart,
  Droplets,
  Stethoscope,
  Microscope,
  Wind,
  Scan,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
// import heroBg from "@/assets/hero-bg.jpg";

const diseases = [
  {
    name: "Diabetes",
    icon: Droplets,
    accuracy: "74.03%",
    color: "from-blue-500 to-cyan-500",
    slug: "diabetes",
  },
  {
    name: "Breast Cancer",
    icon: Scan,
    accuracy: "96.49%",
    color: "from-pink-500 to-rose-500",
    slug: "breast-cancer",
  },
  {
    name: "Heart Disease",
    icon: Heart,
    accuracy: "100%",
    color: "from-red-500 to-orange-500",
    slug: "heart-disease",
  },
  {
    name: "Kidney Disease",
    icon: Activity,
    accuracy: "96.88%",
    color: "from-purple-500 to-violet-500",
    slug: "kidney-disease",
  },
  {
    name: "Liver Disease",
    icon: Stethoscope,
    accuracy: "77.97%",
    color: "from-amber-500 to-yellow-500",
    slug: "liver-disease",
  },
  {
    name: "Malaria",
    icon: Microscope,
    accuracy: "94.78%",
    color: "from-green-500 to-emerald-500",
    slug: "malaria",
  },
  {
    name: "Pneumonia",
    icon: Wind,
    accuracy: "95%",
    color: "from-sky-500 to-indigo-500",
    slug: "pneumonia",
  },
];

const stats = [
  { value: "7+", label: "Disease Types", icon: Brain },
  { value: "95%", label: "Avg Accuracy", icon: Shield },
  { value: "24/7", label: "Available", icon: Clock },
  { value: "10K+", label: "Predictions", icon: Users },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
// fkhbifob

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 z-10" />
          {/* <img
            src={heroBg}
            alt="Medical technology background"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          /> */}
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Brain className="h-4 w-4" />
                AI-Powered Medical Diagnostics
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your Health,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Diagnosed
              </span>{" "}
              with AI Precision
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Advanced machine learning models analyze your medical data to
              detect diseases early. Get accurate predictions for diabetes,
              heart disease, cancer, and more.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">
                  Start Diagnosis
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Comprehensive Disease Detection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our ML models are trained on extensive medical datasets to provide
              accurate predictions for various health conditions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {diseases.map((disease, index) => (
              <motion.div key={disease.name} variants={itemVariants}>
                <Link
                  to={`/diagnosis/${disease.slug}`}
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${disease.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <disease.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {disease.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Detection
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {disease.accuracy} Accuracy
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Start Prediction <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Simple 3-Step Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Enter Your Data",
                description:
                  "Fill in your medical parameters such as blood pressure, glucose levels, etc.",
                icon: "📝",
              },
              {
                step: "02",
                title: "AI Analysis",
                description:
                  "Our ML models analyze your data using advanced algorithms trained on medical datasets.",
                icon: "🤖",
              },
              {
                step: "03",
                title: "Get Results",
                description:
                  "Receive instant predictions and recommendations. Book a doctor consultation if needed.",
                icon: "📊",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-6">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-card border border-border shadow-2xl shadow-primary/5"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Check Your Health?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get started with our AI-powered diagnostics today. It's fast,
              accurate, and could potentially save your life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
