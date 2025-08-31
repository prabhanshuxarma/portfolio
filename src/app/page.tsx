import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Skills from './components/skills';
import SwiperPortfolio from "./components/SwiperPortfolio";

export default function HomePage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl bg-white  p-4 lg:p-14">
        <Image
          src="/images/profile-pic.jpg"
          alt="About Us Img"
          width={80}
          height={80}
          className="w-20 h-20 mb-9 rounded-full"
        />
        <h1 className="text-4xl font-bold leading-tight my-5 text-dark">
          <small className="text-2xl font-light block mb-2">
            Interface Designer & Developer
          </small>
          Bridging Design & Development
        </h1>
        <p className="w-md-3/4 leading-loose font-light text-sm text-zinc-600">
          <strong className="font-bold">Prabhanshu Sharma</strong> – a passionate <strong>UI Designer & Developer</strong> with <strong>11+ years of experience</strong> crafting clean, modern, and responsive user interfaces. Proficient in <strong>HTML, CSS, SCSS, Bootstrap, Tailwind CSS, and JavaScript</strong>, with a strong eye for detail and design. Skilled in <strong>Figma</strong> and <strong>Photoshop</strong>, I specialize in transforming ideas into engaging, <strong>user-friendly digital experiences</strong>. Currently sharpening my expertise in <strong>React.js</strong> to build dynamic, interactive web applications.</p>
        <div className="flex gap-6 mt-6">
          <Link className="text-xl text-zinc-600 transition-all hover:text-dark" href="https://www.linkedin.com/in/prabhanshu-sharma/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link className="text-xl text-zinc-600 transition-all hover:text-dark" href="https://github.com/prabhanshuxarma" target="_blank">
            <FaGithub />
          </Link>
          <Link  href="https://themeforest.net/user/balthemes" target="_blank">
                    <Image
                    src="/images/themeforest-icon.png"
                    alt="About Us Img"
                    width={23}
                    height={19}
                    className="grayscale"    
                  />
          </Link>
        </div>
      </div>
      <div className="work-skills py-5 relative before:content-[''] before:absolute before:w-full before:top-0 before:left-0 before:right-0 before:bg-white before:max-w-7xl before:h-full before:mx-auto">
        <SwiperPortfolio />
      </div>

      <div className="mx-auto max-w-7xl bg-white p-4 lg:p-14 flex flex-wrap">
        <div className="md:w-[65%] md:pr-16">
          <h2 className="text-md font-bold text-dark mb-8">
            Professional Experience
          </h2>
          <div className="space-y-10">
          <div className="relative ">
            <h3 className="text-md font-semibold text-dark">
              Sr. UI Designer and Developer
            </h3>
            <p className="text-sm my-3 mt-2 text-dark italic">
              Appinop Technologies Pvt. Ltd. | May 2025 – Present
            </p>
            <ul className="list-disc ml-5 mt-2 font-light text-sm text-zinc-600">
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">
                Designning application screens and landing pages.
              </li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">
                Designed and arranged interface components.
              </li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">
                Collaborated with tech teams to align design with development.
              </li>
              
            </ul>
          </div>

          <div className="relative ">
            <h3 className="text-md font-semibold text-dark">
              Sr. UI Developer
            </h3>
            <p className="text-sm my-3 mt-2 text-dark italic">
              Ubuy Technologies Pvt. Ltd. | June 2021 – Sept 2024
            </p>
            <ul className="list-disc ml-5 mt-2 font-light text-sm text-zinc-600">
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Design and arrange interface components, preparing assets for production.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Develop designs for varying browser and device demands.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Collaborate with technical teams to balance design and technical requirements.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Plan and conduct user research to support UX design projects.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Improve user experience through A/B testing and UX testing.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Manage online content with SEO best practices to enhance search rankings.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Ensure timely project completion through effective planning and deadline management.</li>
            </ul>
          </div>

          <div className="relative ">
            <h3 className="text-md font-semibold text-dark">
              Freelancer UI Developer
            </h3>
            <p className="text-sm my-3 mt-2 text-dark italic">
              Self-employed | Dec 2019 – Jun 2021
            </p>
            <ul className="list-disc ml-5 mt-2 font-light text-sm text-zinc-600">
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Developed highly effective, responsive web pages for mobile, tablet, and desktop.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Managed web project planning and strategic direction for clients.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Delivered clean, efficient code while adhering to project scopes and performance requirements.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Planned websites and applications to optimize multimedia showcases.</li>
              <li className="my-2 text-xs lg:text-sm lg:leading-loose">Improved UX through continuous testing and iteration.</li>
            </ul>
          </div>
          </div>
        </div>
        <div className="md:w-[35%] w-full">
          <Skills/>
        </div>
      </div>
    </div>
  );
}
