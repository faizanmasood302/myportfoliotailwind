import Image from "next/image";
import picture from "/public/prof.jpeg";
import picture1 from "/public/project1.jpeg";
import picture2 from "/public/project2.jpeg";

export default function Home() {
  return (
    <main className="m-5 bg-purple-900 text-white relative overflow-hidden">
      <section id="home" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <Image
                src={picture}
                alt="profile"
                width={200}
                height={200}
                className="rounded-full mb-4 sm:mb-0 sm:mr-4 md:mr-8 lg:mr-12 transition-transform duration-300 border-4 border-transparent hover:border-white hover:shadow-lg hover:scale-105 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 animate-slow-flip"
              />
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold mb-2">Hello, I&apos;m Faizan</h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">I am a web developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 flex justify-center flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">About Me</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            I&apos;m a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies like React, Next.js, and Tailwind CSS, I bring ideas to life through clean, efficient code. When I&apos;m not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming my next big project.
          </p>
        </div>
      </section>

      <section id="skills">
        <div className="mb-60 mt-60 flex justify-center flex-col items-center">
          <h1 className="text-4xl font-bold">My Skills</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              'C', 'C#', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'Next.js', 'React', 'Bootstrap'
            ].map((skill, index) => (
              <div key={index} className="bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <span className="text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="project">
        <div className="mb-20 flex justify-center flex-col items-center">
          <h2 className="text-4xl font-bold mb-3">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 p-3 rounded-lg hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <Image src={picture1} alt="Project 1" className="hover:bg-white rounded-lg mb-3 w-full h-32 object-cover transition-all duration-300" />
              <h3 className="text-lg font-semibold mb-1">Bakery demo website</h3>
              <p className="text-xs mb-1">A fully responsive website for practice.</p>
              <a href="https://demo-bakery-responsive-website.vercel.app/" className="text-white hover:underline text-sm transition-colors duration-300">View on vercel</a>
            </div>
            <div className="bg-white bg-opacity-10 p-3 rounded-lg hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <Image src={picture2} alt="Project 2" className="hover:bg-white rounded-lg mb-3 w-full h-32 object-cover transition-all duration-300" />
              <h3 className="text-lg font-semibold mb-1">Construction demo website</h3>
              <p className="text-xs mb-1">A fully responsive website for practice.</p>
              <a href="https://construction-web-demo.vercel.app/" className="text-white hover:underline text-sm transition-colors duration-300">View on vercel</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
