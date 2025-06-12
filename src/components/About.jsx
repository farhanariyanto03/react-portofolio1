import React from "react";

const About = () => {
  return (
    <div className="relative h-screen bg-black">
      {/* Section 2: Muncul dari bawah, menutupi Section 1 */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">Section 2</h1>
    </div>
  );
};

export default About;
