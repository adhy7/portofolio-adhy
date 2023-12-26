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
      Text: "Aplikasi mobile untuk absensi. Dibuat menggunakan flutter + firebase",
    },
    {
      id: 2,
      src: [coffeApp, coffeApp2, coffeApp3, coffeApp4],
      Text: "Tampilan UI/UX coffe shop",
    },
    {
      id: 3,
      src: [alquranApp, alquranApp2, alquranApp3, alquranApp4],
      Text: "Aplikasi mobile untuk membaca ayat alquran dimanapun",
    },
    {
      id: 4,
      src: [listrikApp, listrikApp2, listrikApp3, listrikApp4],
      Text: "Aplikasi mobile untuk menghitung pengeluaran listrik setiap barang yang anda gunakan di rumah.",
    },
    {
      id: 5,
      src: [ingglishApp, ingglishApp2, ingglishApp3, ingglishApp4],
      Text: "Aplikasi mobile untuk belajar seluruh tenses dengan fitur quiz dan minigame.",
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
            Aplikasi yang pernah saya buat. Bila ingin melihat kode aplikasi
            silahkan buka gitlab saya pada sidebar di kiri layar.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, Text }) => (
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
                <div className="flex items-center justify-center">
                  <button className="w1/2 px-6 py-3 m-4  duration-200 hover:scale-105">
                    {Text}
                  </button>
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
