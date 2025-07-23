import React, { useState } from "react";
import { Code, Lightbulb, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("technical");

  const categories = [
    "all",
    ...new Set(skills.technical.map((skill) => skill.category)),
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills.technical
      : skills.technical.filter((skill) => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const SkillBadge = ({ skill, index }) => {
    const categoryColors = {
      Programming:
        "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      Frontend:
        "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      Backend:
        "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      Database:
        "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      Tools: "from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700",
      Styling:
        "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
      Cloud: "from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700",
    };

    const colorClass =
      categoryColors[skill.category] ||
      "from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700";

    return (
      <motion.div
        variants={itemVariants}
        className={`bg-gradient-to-r ${colorClass} text-white px-4 py-3 rounded-xl text-center font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform cursor-pointer group relative overflow-hidden`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative z-10">
          <div className="font-semibold text-sm mb-1">{skill.name}</div>
          <div className="text-xs opacity-80 group-hover:opacity-100 transition-opacity">
            {skill.category}
          </div>
        </div>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </motion.div>
    );
  };

  const SoftSkillBadge = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3 rounded-full text-center font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
    >
      {skill}
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-dark-900 p-1 rounded-lg shadow-lg">
              <button
                onClick={() => setActiveTab("technical")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === "technical"
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-500"
                }`}
              >
                <Code size={20} />
                <span>Technical Skills</span>
              </button>
              <button
                onClick={() => setActiveTab("soft")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === "soft"
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-500"
                }`}
              >
                <Lightbulb size={20} />
                <span>Soft Skills</span>
              </button>
            </div>
          </div>

          {/* Technical Skills */}
          {activeTab === "technical" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mr-4">
                  <Filter size={20} />
                  <span className="font-medium">Filter by category:</span>
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? "bg-primary-500 text-white"
                        : "bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-dark-700"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              {/* Skills Badge Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredSkills.map((skill, index) => (
                  <SkillBadge key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Soft Skills */}
          {activeTab === "soft" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skills.soft.map((skill, index) => (
                <SoftSkillBadge key={skill} skill={skill} index={index} />
              ))}
            </motion.div>
          )}

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-primary-500 to-blue-600 text-white">
              <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Saya percaya pada pentingnya pembelajaran berkelanjutan dan
                senantiasa mengikuti perkembangan teknologi terkini. Keahlian
                saya terus berkembang seiring dengan eksplorasi terhadap
                berbagai kerangka kerja, alat, dan metodologi baru. Hal ini saya
                lakukan untuk dapat menghadirkan solusi yang lebih baik dan
                tetap relevan dalam lanskap teknologi yang terus berubah.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
