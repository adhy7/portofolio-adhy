import React from "react";
import ingglishApp from "../assets/portfolio/ingglishApp.png";
import ingglishApp2 from "../assets/portfolio/ingglishApp2.png";
import ingglishApp3 from "../assets/portfolio/ingglishApp3.png";
import ingglishApp4 from "../assets/portfolio/ingglishApp4.png";
import coffeApp from "../assets/portfolio/coffeApp.png";
import coffeApp2 from "../assets/portfolio/coffeApp2.png";
import coffeApp3 from "../assets/portfolio/coffeApp3.png";
import coffeApp4 from "../assets/portfolio/coffeApp4.png";
import alquranApp from "../assets/portfolio/alquranApp.png";
import alquranApp2 from "../assets/portfolio/alquranApp2.png";
import alquranApp3 from "../assets/portfolio/alquranApp3.png";
import alquranApp4 from "../assets/portfolio/alquranApp4.png";
import listrikApp from "../assets/portfolio/listrikApp.png";
import listrikApp2 from "../assets/portfolio/listrikApp2.png";
import listrikApp3 from "../assets/portfolio/listrikApp3.png";
import listrikApp4 from "../assets/portfolio/listrikApp4.png";
import absenApp1 from "../assets/portfolio/absen1.png";
import absenApp2 from "../assets/portfolio/absen2.png";
import absenApp3 from "../assets/portfolio/absen3.png";
import absenApp4 from "../assets/portfolio/absen4.png";
import absenApp5 from "../assets/portfolio/absen5.png";
import absenApp6 from "../assets/portfolio/absen6.png";
import absenApp7 from "../assets/portfolio/absen7.png";
import absenApp8 from "../assets/portfolio/absen8.png";
import absenApp9 from "../assets/portfolio/absen9.png";
import forgotPassword from "../assets/portfolio/forgotPassword.jpg";
import recipes from "../assets/portfolio/recipes1.png";
import recipes2 from "../assets/portfolio/recipes2.png";
import recipes3 from "../assets/portfolio/recipes3.png";

const Portofolio = () => {
  const portfolios = [
    {
      id: 1,
      src: [
        absenApp1,
        absenApp2,
        absenApp3,
        absenApp4,
        absenApp5,
        absenApp6,
        absenApp7,
        absenApp8,
        absenApp9,
        forgotPassword,
      ],
      Text: "Aplikasi mobile untuk absensi, dibangun dengan menggunakan Flutter dan terintegrasi dengan Firebase untuk manajemen data pengguna.",
      Technologies: ["Flutter", "Firebase", "Riverpod"],
      Api: "",
    },
    {
      id: 2,
      src: [coffeApp, coffeApp2, coffeApp3, coffeApp4],
      Text: "Tampilan UI/UX coffee shop yang menawan, dirancang dengan sentuhan modern.",
      Technologies: ["Flutter", "Riverpod"],
      Api: "",
    },
    {
      id: 3,
      src: [alquranApp, alquranApp2, alquranApp3, alquranApp4],
      Text: "Aplikasi mobile untuk membaca ayat Al-Quran di mana pun Anda berada. Dibangun dengan memastikan pengalaman pengguna yang optimal.",
      Technologies: ["Flutter", "Riverpod", "Hive"],
      Api: "https://api.quran.gading.dev/",
    },
    {
      id: 4,
      src: [listrikApp, listrikApp2, listrikApp3, listrikApp4],
      Text: "Aplikasi mobile inovatif untuk menghitung pengeluaran listrik setiap perangkat di rumah. Dirancang dengan antarmuka pengguna yang ramah.",
      Technologies: ["Flutter"],
      Api: "",
    },
    {
      id: 5,
      src: [ingglishApp, ingglishApp2, ingglishApp3, ingglishApp4],
      Text: "Aplikasi mobile yang menarik untuk belajar seluruh tenses dengan fitur quiz dan minigame interaktif. Dibuat dengan teknologi terbaru untuk memastikan pembelajaran yang efektif.",
      Technologies: ["Flutter", "Riverpod", "SharedPreference"],
      Api: "",
    },
    {
      id: 6,
      src: [recipes, recipes2, recipes3],
      Text: "Aplikasi mobile berisi resep makanan berbagai jenis, dirancang dengan antarmuka yang intuitif.",
      Technologies: ["Flutter"],
      Api: "https://www.themealdb.com/api.php",
    },
  ];
  return (
    <div
      id="portofolio"
      name="portofolio"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portofolio
          </p>
          <p className="py-6">
            Aplikasi yang pernah saya buat. Untuk melihat lebih lanjut tentang kode
            aplikasi, Anda dapat mengunjungi repositori GitLab saya yang
            terdapat di sidebar sebelah kiri layar.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, Text, Technologies, Api }) => (
            <>
              <div className="shadow-md p-2 shadow-gray-600 rounded-lg">
                <div
                  key={id}
                  className={`grid gap-2 ${
                    src.length > 4 ? "sm:grid-cols-4" : "sm:grid-cols-2"
                  } shadow-md shadow-gray-600 rounded-lg`}
                >
                  {src.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      //className={`max-sm:hover:scale-105 rounded-md duration-200 ${ src.length > 4 ? hover:scale-[2] : hover:scale-[2]}`}
                      className={`max-sm:hover:scale-105 rounded-md duration-200 ${
                        src.length > 4 ? "hover:scale-[4]" : "hover:scale-[2]"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center flex-col">
                  <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-600 text-white rounded-md">
                    {Text}
                  </button>
                  <p className="text-sm text-white">
                    <span className="font-bold">Dibuat dengan:</span>{" "}
                    {Technologies.join(", ")}
                  </p>
                  {Api && (
                    <p className="text-sm text-white">
                      <span className="font-bold">API dengan:</span> {Api}
                    </p>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
