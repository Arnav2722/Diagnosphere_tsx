import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Users,
  Award,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const team = [
  {
    name: "Arnav Sharma",
    role: "Aspiring ML Engineer",
    bio: "BCA Graduate from Christ University, Delhi NCR Campus. Passionate about AI and healthcare.",
    avatar: "SC",
  },
  {
    name: "Jahnvi Sharma",
    role: "Aspiring Python Developer",
    bio: "1st year BCA student at VIPS, Delhi. Enthusiastic about coding and problem-solving.",
    avatar: "JW",
  },
];

const values = [
  {
    icon: Brain,
    title: "Innovation",
    description:
      "Leveraging cutting-edge ML technologies to advance healthcare diagnostics.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description:
      "Rigorous model training and validation to ensure reliable predictions.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Making advanced diagnostics available to everyone, everywhere.",
  },
  {
    icon: Award,
    title: "Trust",
    description:
      "Transparent methodologies and continuous improvement of our models.",
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Diagnosphere
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to democratize healthcare diagnostics using the
              power of artificial intelligence and machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                Empowering Health Through Technology
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While humans are prone to errors, machines can provide
                  consistent, data-driven insights. MediDiag harnesses this
                  potential to assist in early disease detection, potentially
                  saving lives through timely intervention.
                </p>
                <p>
                  Our platform utilizes multiple machine learning algorithms
                  including Random Forest, Decision Trees, Logistic Regression,
                  SVM, and deep learning CNNs for image-based diagnoses.
                </p>
                <p>
                  Trained on extensive datasets from Kaggle and UCI ML
                  repositories, our models achieve accuracy rates of up to 100%
                  for certain conditions, making them valuable tools for
                  preliminary health screening.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <value.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-display font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Technology Stack
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
              Built with Modern Technologies
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { name: "Python", category: "Backend" },
              { name: "Flask", category: "Framework" },
              { name: "Scikit-learn", category: "ML" },
              { name: "TensorFlow", category: "Deep Learning" },
              { name: "React", category: "Frontend" },
              { name: "TypeScript", category: "Language" },
              { name: "Tailwind CSS", category: "Styling" },
              { name: "Firebase", category: "Database" },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
              >
                <div className="font-display font-semibold">{tech.name}</div>
                <div className="text-xs text-muted-foreground">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
              Meet the Experts
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {member.name}
                </h3>
                <div className="text-primary text-sm mb-2">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {/* <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
