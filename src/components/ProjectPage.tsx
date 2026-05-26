import { listProyek } from "../data";

const ProjectPage = () => {
  return (
    <div className="proyek mt-32 py-10" id="projects">
      <h1 className="text-center text-3xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
        Proyek Saya
      </h1>
      <p className="text-center text-lg text-white/75 mb-6" data-aos-duration="1000" data-aos-delay="200">
        Berikut adalah beberapa proyek yang telah saya kerjakan.
      </p>
      <div className="proyek-box grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 cursor-pointer">
        {listProyek.map((proyek) => (
          <div key={proyek.id} className="bg-zinc-800 p-4 rounded-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
            <img src={proyek.gambar} alt={proyek.nama} className="w-full h-48 object-cover rounded-md mb-4" loading="lazy" />
            <h3 className="text-xl font-bold mb-2">{proyek.nama}</h3>
            <p className="text-white/75 mb-4">{proyek.desk}</p>
            <div className="tools flex flex-wrap gap-2">
              {proyek.tools.map((tool, index) => (
                <p key={index} className="py-1 px-3 bg-zinc-700 rounded-full text-sm text-white/75">
                  {tool}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
