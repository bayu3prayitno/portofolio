import React, { useState } from 'react';
import { Trophy, BookOpen, Users, Calendar, Award, Download, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { activities } from '../data/portfolioData';

const Activities = () => {
  const [filter, setFilter] = useState('all');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activityTypes = ['all', ...new Set(activities.map(activity => activity.type))];
  
  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filter);

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'competition':
        return Trophy;
      case 'training':
        return BookOpen;
      case 'organization':
        return Users;
      case 'seminar':
        return Calendar;
      default:
        return Award;
    }
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'competition':
        return 'from-yellow-500 to-orange-500';
      case 'training':
        return 'from-blue-500 to-indigo-500';
      case 'organization':
        return 'from-green-500 to-emerald-500';
      case 'seminar':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const ActivityCard = ({ activity, index }) => {
    const Icon = getTypeIcon(activity.type);
    
    return (
      <motion.div
        variants={itemVariants}
        className="card overflow-hidden group cursor-pointer"
        onClick={() => setSelectedActivity(activity)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Activity Image */}
        <div className="relative overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/400x300/6366f1/ffffff?text=${encodeURIComponent(activity.title)}`;
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
          
          {/* Type Badge */}
          <div className={`absolute top-4 left-4 bg-gradient-to-r ${getTypeColor(activity.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {activity.type}
          </div>
          
          {/* Date Badge */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {activity.date}
          </div>
        </div>

        {/* Activity Content */}
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`p-2 bg-gradient-to-r ${getTypeColor(activity.type)} rounded-lg`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
              {activity.title}
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {activity.description}
          </p>

          {/* Certificate Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {activity.certificate ? (
                <>
                  <Award className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">Certified</span>
                </>
              ) : (
                <>
                  <Award className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">No Certificate</span>
                </>
              )}
            </div>
            
            {activity.certificate && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(activity.certificate, '_blank');
                }}
                className="flex items-center space-x-1 text-primary-500 hover:text-primary-600 transition-colors duration-200"
              >
                <Download size={16} />
                <span className="text-sm font-medium">Certificate</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="activities" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Activities & Achievements</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mr-4">
              <Filter size={20} />
              <span className="font-medium">Filter by type:</span>
            </div>
            {activityTypes.map((type) => {
              const Icon = type === 'all' ? Filter : getTypeIcon(type);
              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filter === type
                      ? 'bg-primary-500 text-white'
                      : 'bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-dark-700'
                  }`}
                >
                  <Icon size={16} />
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </button>
              );
            })}
          </div>

          {/* Activities Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredActivities.map((activity, index) => (
              <ActivityCard key={activity.id} activity={activity} index={index} />
            ))}
          </motion.div>

          {/* Activity Modal */}
          {selectedActivity && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-dark-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x300/6366f1/ffffff?text=${encodeURIComponent(selectedActivity.title)}`;
                    }}
                  />
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
                  >
                    ×
                  </button>
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${getTypeColor(selectedActivity.type)} text-white px-4 py-2 rounded-full font-medium`}>
                    {selectedActivity.type}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedActivity.title}
                    </h3>
                    <span className="text-lg font-semibold text-primary-500">
                      {selectedActivity.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedActivity.description}
                  </p>
                  
                  {selectedActivity.certificate ? (
                    <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Award className="w-6 h-6 text-green-500" />
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-400">
                            Certificate Available
                          </h4>
                          <p className="text-sm text-green-600 dark:text-green-300">
                            Click to download certificate
                          </p>
                        </div>
                      </div>
                      <a
                        href={selectedActivity.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                      >
                        <Download size={16} />
                        <span>Download</span>
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
                      <Award className="w-6 h-6 text-gray-400" />
                      <div>
                        <h4 className="font-semibold text-gray-600 dark:text-gray-400">
                          No Certificate
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          This activity did not provide a certificate
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
