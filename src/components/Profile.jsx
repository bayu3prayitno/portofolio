import React from "react";
import { MapPin, Mail, Phone, Heart, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { personalData } from "../data/portfolioData";

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="profile" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Personal Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Location
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {personalData.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Mail className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {personalData.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Phone className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {personalData.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Motto */}
              <motion.div
                variants={itemVariants}
                className="card p-8 bg-gradient-to-r from-primary-500 to-blue-600 text-white"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Life Motto</h3>
                    <blockquote className="text-lg italic">
                      "{personalData.motto}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>

              {/* Quote Section */}
              <motion.div
                variants={itemVariants}
                className="card p-8 border-l-4 border-primary-500"
              >
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-2">
                      "Stay hungry, stay foolish."
                    </blockquote>
                    <cite className="text-gray-500 dark:text-gray-400 text-sm">
                      - Steve Jobs
                    </cite>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bio & Description */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  My Story
                </h3>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Saya adalah mahasiswa aktif semester 6 Program Studi
                    Teknologi Rekayasa Komputer di Politeknik Negeri Semarang.
                    Selama menempuh pendidikan, saya telah mempelajari berbagai
                    aspek teknis dalam bidang komputer, baik dari sisi Hardware
                    maupun Software, yang membentuk fondasi kuat dalam pemahaman
                    teknologi informasi.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Saya memiliki minat yang luas dalam bidang Pengembangan
                    Software, Networking, dan Embedded System. Ketertarikan ini
                    mendorong saya untuk terus belajar, bereksperimen, dan
                    mengasah kemampuan melalui berbagai proyek, baik individu
                    maupun kolaboratif, guna memperdalam pemahaman dan
                    keterampilan praktis di bidang tersebut.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Selain itu, saya juga sangat antusias terhadap perkembangan
                    teknologi terkini, khususnya yang berbasis Internet of
                    Things (IoT) dan Kecerdasan Buatan (AI). Saya berkomitmen
                    untuk menerapkan pengetahuan yang saya miliki pada tantangan
                    nyata, serta berkontribusi dalam pengembangan solusi
                    inovatif yang berdampak positif di dunia industri dan
                    masyarakat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
