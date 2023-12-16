const Home = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
        <img
          className="lg:w-3/12 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://i.pravatar.cc/500?img=3"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            DEBARSHI DAS
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Hi, I am a software engineer having more than 3 years of
            professional experience. I had completed my Masters in Computer
            Applications from the Jorhat Engineering College, Assam. Currently,
            I am working as a software developer at the National Informatics
            Center (NIC), Assam state unit. Apart from software development, I
            have interest in IOT & Robotics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
