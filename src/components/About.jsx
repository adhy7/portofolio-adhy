import React from "react";

const About = () => {
  return (
    <div id="about" name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl ">
        Saya adalah seorang Mobile Developer yang kreatif dan berkomitmen tinggi untuk memberikan pengalaman pengguna yang luar biasa. Dengan keahlian mendalam dalam HTML, CSS, JavaScript dan flutter saya memiliki kemampuan untuk mengubah desain menjadi antarmuka yang responsif dan menarik. Saya selalu bersemangat untuk menghadirkan solusi inovatif dalam pengembangan web/mobile, dan saya memiliki pemahaman yang kuat tentang tren terbaru dalam teknologi.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
