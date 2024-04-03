import React from 'react';

const ModuleComponent = ({ module }) => {
  return (
    <div className="p-8 text-white bg-gray-900 rounded-lg shadow-xl">
      {module.chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex} className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">{chapter.title}</h2>
          {chapter.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">{section.title}</h3>
              <p className="text-lg leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      ))}
      <div className="text-center">
        <button className="px-6 py-2 text-white transition duration-300 ease-in-out bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Take Quiz
        </button>
      </div>
    </div>
  );
};

export default ModuleComponent;
