import React, { useState, useEffect } from "react";
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
import absenApp1 from "../assets/portfolio/absen/absen1.jpeg";
import absenApp2 from "../assets/portfolio/absen/absen2.jpeg";
import absenApp3 from "../assets/portfolio/absen/Absen3.jpeg";
import absenApp4 from "../assets/portfolio/absen/Absen4.jpeg";
import absenApp5 from "../assets/portfolio/absen/Absen5.jpeg";
import absenApp6 from "../assets/portfolio/absen/Absen6.jpeg";
import absenApp7 from "../assets/portfolio/absen/Absen7.jpeg";
import absenApp8 from "../assets/portfolio/absen/Absen8.jpeg";
import absenApp9 from "../assets/portfolio/absen/Absen9.jpeg";
import recipes from "../assets/portfolio/recipes1.png";
import recipes2 from "../assets/portfolio/recipes2.png";
import recipes3 from "../assets/portfolio/recipes3.png";
import { MdClose } from "react-icons/md";
import se from "../assets/expense/sa.png";
import se1 from "../assets/expense/sa1.png";
import se2 from "../assets/expense/sa2.png";
import se3 from "../assets/expense/sa3.png";
import se4 from "../assets/expense/sa4.png";
import se5 from "../assets/expense/sa5.png";
import se6 from "../assets/expense/sa6.png";
  

const Portofolio = () => {

  const [selectedImage, setSelectedImage] = useState(null);
 
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => document.removeEventListener("keydown", handleEsc);
  }, [selectedImage]);

  const portfolios = [
    {
      id: 1,
      title: "Absensi App",
      src: [absenApp1, absenApp2, absenApp3, absenApp4, absenApp5, absenApp6, absenApp7, absenApp8, absenApp9],
      Text: "Aplikasi mobile untuk absensi dan request izin, sakit atau cuti, dibangun dengan Flutter dan terintegrasi dengan backend .NET serta database SQL Server.",
      Technologies: ["Flutter", "SQL Server", ".NET"],
      Api: "",
    },
    {
      id: 2,
      title: "Simpli Expense",
      src: [se, se1, se2, se3, se4, se5, se6],
      Text: "Aplikasi pengelola keuangan pribadi yang membantu pengguna mencatat pemasukan, pengeluaran, mengatur anggaran, transaksi berulang, serta mencapai target keuangan melalui antarmuka yang modern dan mudah digunakan.",
      Technologies: ["Flutter", "Riverpod", "Supabase", "Firebase Analytics", "RevenueCat"],
      Api: "",
    },
    {
      id: 3,
      title: "Al-Quran App",
      src: [alquranApp, alquranApp2, alquranApp3, alquranApp4],
      Text: "Aplikasi mobile untuk membaca ayat Al-Quran di mana pun Anda berada, dengan pengalaman pengguna yang optimal.",
      Technologies: ["Flutter", "Riverpod", "Hive"],
      Api: "https://api.quran.gading.dev/",
    },
    {
      id: 4,
      title: "Kalkulator Listrik",
      src: [listrikApp, listrikApp2, listrikApp3, listrikApp4],
      Text: "Aplikasi mobile inovatif untuk menghitung pengeluaran listrik setiap perangkat di rumah.",
      Technologies: ["Flutter"],
      Api: "",
    },
    {
      id: 5,
      title: "Ingglish App",
      src: [ingglishApp, ingglishApp2, ingglishApp3, ingglishApp4],
      Text: "Aplikasi mobile untuk belajar seluruh tenses dengan fitur quiz dan minigame interaktif.",
      Technologies: ["Flutter", "Riverpod", "SharedPreference"],
      Api: "",
    },
    {
      id: 6,
      title: "Recipes App",
      src: [recipes, recipes2, recipes3],
      Text: "Aplikasi mobile berisi resep makanan berbagai jenis, dirancang dengan antarmuka yang intuitif.",
      Technologies: ["Flutter"],
      Api: "https://www.themealdb.com/api.php",
    },
    {
      id: 7,
      title: "Coffee Shop UI",
      src: [coffeApp, coffeApp2, coffeApp3, coffeApp4],
      Text: "Tampilan UI/UX coffee shop yang menawan, dirancang dengan sentuhan modern.",
      Technologies: ["Flutter", "Riverpod"],
      Api: "",
    },
  ];

  return (
    <div
      id="portofolio"
      name="portofolio"
      className=" w-full bg-[#111827] text-white py-20"
    > 
    
      <div className="max-w-screen-xl  mx-auto flex flex-col justify-center w-full">
        
        <div className="pb-10">
          <p className="font-['JetBrains_Mono'] text-sm text-[#13b9fd] tracking-widest mb-2">
            // 02
          </p>
          <p className="font-['Sora'] text-4xl font-bold">Portofolio</p>
          <p className="pt-4 text-gray-400 max-w-xl">
            Aplikasi yang pernah saya buat. Untuk kode lengkapnya, kunjungi
            repositori GitLab saya di sidebar sebelah kiri layar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolios.map(({ id, title, src, Text, Technologies, Api }) => (
            <div
              key={id}
              className="bg-[#131b2e] border border-white/5 rounded-2xl p-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="rounded-xl border-[6px] border-[#1f2a44] overflow-hidden bg-black/30">
                <div
                  className={`grid gap-1 ${src.length > 4 ? "grid-cols-4" : "grid-cols-2"}`}
                >
                  {src.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${title} screenshot ${index + 1}`} 
                      onClick={() => setSelectedImage(image)}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="font-['Sora'] font-semibold text-lg">{title}</p>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">{Text}</p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {Technologies.map((t) => (
                    <span
                      key={t}
                      className="font-['JetBrains_Mono'] text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[#13b9fd]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {Api ? <p className="text-xs text-gray-500 mt-2 font-['JetBrains_Mono'] break-all">
                    API: {Api}
                  </p> : (
                  <p className="text-xs text-gray-500 mt-2 font-['JetBrains_Mono'] break-all">
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)} // klik area luar gambar = tutup
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <MdClose size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            onClick={(e) => e.stopPropagation()} // [BARU] klik gambar itu sendiri tidak menutup modal
            className="max-w-full max-h-[85vh] rounded-lg border border-white/10 shadow-2xl object-contain"
          />
        </div>
      )}
    </div>

    
  );
};

export default Portofolio;
