const FormContactPage = () => {
  return (
    <div>
      <div className="contact mt-32 justify-center items-center " id="contact">
        <h1 className="text-center text-3xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
          Kontak
        </h1>
        <p className="text-lg text-white/75 mb-6 mt-6 text-center " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, <br /> jangan ragu untuk menghubungi saya melalui email atau media sosial saya.
        </p>
        <form
          action="https://formsubmit.co/evanakbarudin088@gmail.com"
          method="POST"
          className="contact-form mt-14 items-center gap-4 bg-zinc-800 p-10 w-fit mx-auto rounded-lg"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="flex flex-col gap-6">
            <div className="">
              <label htmlFor="name" className=" text-white/75 mb-3">
                Nama
              </label>
              <input type="text" id="name" placeholder="Masukan Nama" className="w-full max-w-md border border-zinc-600 p-4 rounded-md bg-zinc-800 text-white" required />
            </div>
            <div>
              <label htmlFor="email" className=" text-white/75 mb-3">
                Email
              </label>
              <input type="email" id="email" placeholder="Masukan Email" className="w-full max-w-md p-3 rounded-md bg-zinc-800 border border-zinc-600 text-white" required />
            </div>
            <div>
              <label htmlFor="message" className=" text-white/75 mb-3">
                Pesan
              </label>
              <textarea id="message" placeholder="Masukan Pesan" cols={45} rows={7} className="w-full max-w-md p-3 rounded-md bg-zinc-800 border border-zinc-600 text-white h-32" required></textarea>
            </div>
            <button type="submit" className="bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition-colors cursor-pointer">
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContactPage;
