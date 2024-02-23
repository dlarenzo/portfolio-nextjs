import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            {" "}
            Hey I'm LaRenzo DeGraffenreidt
          </h1>
          <p className="text-[#ADB7BE] text-lg lf:text-xl">
            I am a Full Stack Developer, I have a passion for creating and
            developing applications. I am a problem solver and I love to learn
            new things. I am a team player and I love to work with others to
            create amazing things.
          </p>
        </div>
      </div>
      <div className="col-span-5">
        <img
          src="/images/myWink35.gif"
          alt="LaRenzo DeGraffenreidt"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
