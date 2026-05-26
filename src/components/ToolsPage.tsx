import { listTools } from "../data";

const ToolsPage = () => {
  return (
    <div className="tools mt-32 justify-center items-center text-center">
      <h2 className="text-3xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
        Tools yang saya gunakan
      </h2>
      <p className=" text-lg text-white/75 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        Saya memiliki pengalaman dalam menggunakan berbagai tools dan <br /> teknologi untuk mengembangkan aplikasi web yang responsif dan menarik.
      </p>
      <div className="tools-box mt-14 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {listTools.map((tool) => (
          <div key={tool.id} className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt={tool.nama} className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
            <div>
              <h3 className="font-bold">{tool.nama}</h3>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
