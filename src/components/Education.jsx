import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-blue-600"></div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 border-4 border-white dark:border-dark-900 rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-primary-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-primary-500 font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      {edu.IPK && (
                        <div className="text-right">
                          <span className="text-sm text-gray-500 dark:text-gray-400">IPK</span>
                          <p className="text-lg font-semibold text-gray-200 dark:text-white">
                            {edu.IPK}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Period */}
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Award className="w-5 h-5 text-primary-500" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Key Achievements
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achieveIndex) => (
                            <li
                              key={achieveIndex}
                              className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <GraduationCap className="w-12 h-12 text-primary-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
