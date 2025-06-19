import React from 'react';

const skills = [
  { name: '.Net', level: 3, weightage: 20 },
  { name: 'Java', level: 3, weightage: 20 },
  { name: 'HTML', level: 3, weightage: 20 },
  { name: 'CSS', level: 3, weightage: 20 },
  { name: 'Java Script', level: 3, weightage: 20 },
];

const Skill = () => {
  return (
    <div className="p-6 space-y-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="border border-gray-300 focus:ring-0 focus:outline-none rounded-md p-4 shadow-sm bg-white"
        >
          <h3 className="text-[13px] font-semibold text-gray-800">{skill.name}</h3>
          <p className="text-[10px] text-gray-600">Level : {skill.level}</p>
          <p className="text-[10px] text-gray-600">Weightage(%) : {skill.weightage}</p>
        </div>
      ))}
    </div>
  );
};

export default Skill;
