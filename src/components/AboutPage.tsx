const AboutPage = () => {
  return (
    <div id="about" className="tentang mt-32 py-10">
      <div className="container xl:w-2/3 lg:w-3/4 md:w-5/6 sm:w-full mx-auto bg-zinc-800 p-10 rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
        <p className="text-lg text-white/75 mb-6 ">
          Saya adalah seorang frontend developer dengan pengalaman dalam mengembangkan aplikasi web yang responsif dan menarik menggunakan teknologi terbaru. Saya memiliki keahlian dalam HTML, CSS, JavaScript, dan berbagai framework seperti
          React JS, Next JS, Tailwind CSS, dan Bootstrap. Selain itu, saya juga memiliki pengalaman dalam menggunakan Node JS untuk pengembangan backend dan GitHub untuk manajemen kode. Saya juga memiliki kemampuan desain menggunakan Figma
          dan Canva.
        </p>
        <p className="text-lg text-white/75 mb-19">
          Saya selalu bersemangat untuk belajar dan mengembangkan keterampilan saya dalam dunia pengembangan web. Saya percaya bahwa dengan kerja keras dan dedikasi, saya dapat mencapai tujuan saya sebagai seorang frontend developer yang
          sukses.
        </p>

        <div className="flex items-center justify-between gap-10">
          <div>
            <h1 className="text-4xl font-bold">
              45<span className="text-2xl text-violet-500">+</span>
            </h1>
            <p className="text-lg text-white/75">Proyek Selesai</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              100<span className="text-2xl text-violet-500">+</span>
            </h1>
            <p className="text-lg text-white/75">Klien Puas</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              3<span className="text-2xl text-violet-500">+</span>
            </h1>
            <p className="text-lg text-white/75">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
