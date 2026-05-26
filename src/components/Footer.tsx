const Footer = () => {
  return (
    <div className="footer mt-32 py-10 flex md:flex-row flex-col gap-6 md:gap-0 justify-between w-full items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="menu flex items-center sm:gap-8 gap-4">
        <a href="" target="_blank" rel="noopener noreferrer">
          Beranda
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          Tentang
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          Proyek
        </a>
      </div>
      <div className="social-icons flex gap-4">
        <a href="">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="">
          <i className="ri-whatsapp-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
