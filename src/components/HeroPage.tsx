import DataImage from "../data";

const HeroPage = () => {
  return (
    <div className="hero grid md:grid-cols-2 md:items-center gap-10 py-20 xl:gap-0 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        <div className="flex items-center gap-4 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.FotoBatik} alt="Data Image" className="w-10 rounded-md" loading="lazy" />
          <blockquote className="text-lg font-medium text-white">"Membangun masa depan dengan kode, satu baris pada satu waktu."</blockquote>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Halo, Saya Evan Akbarudin
          <br />
          Saya Seorang Frontend Developer
        </h1>
        <p className="text-lg text-gray-600 mb-6 mt-6">Saya memiliki pengalaman dalam mengembangkan aplikasi web yang responsif dan menarik menggunakan teknologi terbaru.</p>

        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#contact" className="bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition-colors">
            Download CV <i className="ri-download-line"></i>
          </a>
          <a href="#projects" className="ml-4 bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors">
            Lihat Proyek <i className="ri-arrow-down-line"></i>
          </a>
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        <img src={DataImage.FotoBatik} alt="Foto Batik" className="w-100 rounded-2xl md:ml-auto" loading="lazy" />
      </div>
    </div>
  );
};

export default HeroPage;
