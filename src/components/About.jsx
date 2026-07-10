import React from "react";


const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full mt-20 mb-20 bg-[#0b1220] text-white flex items-center"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-[220px_1fr] gap-10 w-full">
        <div>
          <p className="font-['JetBrains_Mono'] text-sm text-[#13b9fd] tracking-widest mb-2">
            // 01
          </p>
          <p className="font-['Sora'] text-4xl font-bold">About</p>
        </div>

        <div className="bg-[#131b2e] border border-white/5 rounded-2xl p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-gray-300">
            Saya adalah seorang Software Developer yang memiliki ketertarikan dalam
            membangun aplikasi web dan mobile yang modern, cepat, dan mudah digunakan.
            Saya percaya bahwa aplikasi yang baik tidak hanya memiliki tampilan yang
            menarik, tetapi juga kode yang bersih, arsitektur yang terstruktur, dan
            performa yang optimal. Saya selalu berusaha mempelajari teknologi baru dan
            terus meningkatkan kemampuan untuk menciptakan solusi yang memberikan nilai
            bagi pengguna.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
