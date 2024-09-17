// src/CirclesDiagram.js
import React from "react";

const CirclesDiagram = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center">

        {/* Outer Circle - Now in the position of the Inner Circle */}
        <div className="relative bg-green-400 rounded-full w-60 h-60 flex flex-col justify-center items-center text-white overflow-hidden">
          <div className="absolute top-2 text-center text-lg font-bold">
            Outer Circle
          </div>
          <div className="text-5xl font-bold mt-8">3</div>
          <div className="text-center text-sm mt-2 px-4 overflow-scroll max-h-40">
            <strong>Healthy Non-Sexual Behaviors to Practice:</strong>
            <ul className="list-disc text-left pl-4">
              <li><strong>Exercise:</strong> Joining a local gym or going for daily runs, walk in the park.</li>
              <li><strong>Hobbies:</strong> scripture study, watching spritual shows uplifting shows  .</li>
              <li><strong>Career development:</strong> Enrolling in online courses to develop new skills.</li>
              <li><strong>Building relationships:</strong> Scheduling family dinners or coffee outings with friends going to recover group meeting and activitys.</li>
            <li><strong>meditation</strong> Scheduling 30 minuets of meditation each day </li>
            </ul>
          </div>
        </div>

        {/* Middle Circle */}
        <div className="absolute bg-yellow-400 rounded-full w-60 h-60 flex flex-col justify-center items-center text-white left-48 top-48 overflow-hidden">
          <div className="absolute top-2 text-center text-lg font-bold">
            Middle Circle
          </div>
          <div className="text-5xl font-bold mt-8">2</div>
          <div className="text-center text-sm mt-2 px-4 overflow-scroll max-h-40">
            <strong>Gray Area Behaviors:</strong>
            <ul className="list-disc text-left pl-4">
              <li><strong>Flirting:</strong> Light conversation without crossing boundaries.</li>
              <li><strong>Non-explicit social media:</strong> Browsing social media without sexual content.</li>
              <li><strong>Mild media:</strong> Watching romantic comedies with suggestive content.</li>
              <li><strong>Romantic fantasies:</strong> Thinking about dating without sexual intent.</li>
            </ul>
          </div>
        </div>

        {/* Inner Circle - Now in the position of the Outer Circle */}
        <div className="absolute bg-red-400 rounded-full w-60 h-60 flex flex-col justify-center items-center text-white left-96 top-96 overflow-hidden">
          <div className="absolute top-2 text-center text-lg font-bold">
            Inner Circle
          </div>
          <div className="text-5xl font-bold mt-8">1</div>
          <div className="text-center text-sm mt-2 px-4 overflow-scroll max-h-40">
            <strong>Sex Addiction Behaviors to Abstain From:</strong>
            <ul className="list-disc text-left pl-4">
              <li><strong>Pornography:</strong> Visiting explicit porn websites.</li>
              <li><strong>Casual hookups:</strong> Using strip clubs phone sex .</li>
              <li><strong>Excessive masturbation:</strong> Disrupting daily life with frequent sessions especally at night after work and on my days off.</li>
              <li><strong>Sexual fantasies:</strong> Continuous interference in daily life such as objectifing women at the gym at work watching tv movies .</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CirclesDiagram;

















