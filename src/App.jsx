import { createSignal, onCleanup, onMount, For } from "solid-js";
import { motion, useInView } from "framer-motion";
import aboutImg from "@assets/about.png";
import bigLogo from "@assets/big_logo.png";
import serv1 from "@assets/serv1.png";
import serv2 from "@assets/serv2.png";
import serv3 from "@assets/serv3.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mail from "@assets/mail.png";

import stat1 from "@assets/stats/1.png";
import stat2 from "@assets/stats/2.png";
import stat3 from "@assets/stats/3.png";
import stat4 from "@assets/stats/4.png";

import team1 from "@assets/team/1.png";
import team2 from "@assets/team/Vondee.jpg";
import team3 from "@assets/team/Dotse.jpeg";
import team4 from "@assets/team/Michael.jpg";
import team5 from "@assets/team/jona.png";
import team6 from "@assets/team/Timothy.jpg";
import {
  Brain,
  Shield,
  Award,
  Heart,
  Lightbulb,
  Users,
  ArrowLeft,
  ArrowRight,
} from "lucide-solid";

function App() {
  const [testimonialIndex, setTestimonialIndex] = createSignal(0);
  const [email, setEmail] = createSignal("");
  const [testimonials, setTestimonials] = createSignal([
    {
      text: "Results-driven mechanical engineer and entrepreneur with experience in engineering, human resources, and business management.Proven track record of driving business growth, improving operational efficiency, and leading high- performing teams.",
      author: "ISAIAH BAJI",
      image: team1,
      role: "Managing Director",
    },
    {
      text: "A versatile and skilled software developer, known for her ability to blend technical expertise with creative problem-solving. Her proficiency in backend and frontend development, combined with her knowledge of cybersecurity and application deployment, positions her as a valuable asset in any development team, capable of driving innovation and delivering high-quality software solutions.",
      author: "Priscilla Bonsu",
      // image: team2,
      role: "Director",
    },
    {
      text: "A dynamic Creative Director with a diverse portfolio spanning technical, analytical, and creative domains. His expertise lies in seamlessly integrating innovation, strategy, and execution to deliver exceptional results across industries. With specialized skills in Networking & Cybersecurity, Web Design & Development, Data Analysis, UI/UX & Graphic Design, IT Consulting, and Photography & Videography, Valdes is a versatile leader known for providing innovative and effective solutions.",
      author: "Victor Valdes Vondee",
      image: team2,
      role: "",
    },
    {
      text: "A dedicated professional with a strong foundation in Quality Assurance and Data Analysis. His ability to integrate testing expertise with data-driven decision-making allows him to contribute significantly to the success of projects and organizations. With a focus on delivering quality results and actionable insights, Timothy is well-equipped to address the evolving needs of the technology landscape.",
      author: "Timothy Awenlemai Awarika",
      image: team6,
      role: "",
    },
    {
      text: "A skilled engineer specialising in mobile and backend development, with a focus on creating efficient and high-performance applications. Osafo-Osei’s dedication to best practices in software engineering ensures the reliability and scalability of the systems he develops. His expertise in mobile and backend development positions him as a valuable contributor to any development team, capable of driving innovation and delivering high-quality applications.",
      author: "George Jonathan Osafo-Osei",
      image: team5,
      role: "",
    },
    {
      text: "A skilled Full Stack Developer with expertise in Java, Golang, JavaScript, and Flutter/Dart. He excels in building robust web and mobile applications, seamlessly integrating frontend and backend technologies to create user-friendly experiences.",
      author: "Benjamin Dotse",
      image: team3,
      role: "",
    },
    {
      text: "A talented Frontend Developer who combines his skills in React and React Native with a focus on cybersecurity. His ability to create responsive, user-centered applications while prioritizing security makes him a valuable contributor to any development team.",
      author: "Michael Tornyie",
      image: team4,
      role: "",
    },
  ]);


  onMount(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => {
        if (prev === testimonials().length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 7000);
    onCleanup(() => clearInterval(interval));
  });
  const AnimatedCounter = ({ targetNumber }) => {
    const [number, setNumber] = createSignal(0);
    let ref;

    const startAnimation = () => {
      let start = 0;
      const duration = 2000;
      const step = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        setNumber(Math.floor(progress * targetNumber));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame((timestamp) => {
        start = timestamp;
        step(timestamp);
      });
    };

    onMount(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect(); // Stop observing once animation starts
          }
        },
        { threshold: 0.1 }
      );

      if (ref) {
        observer.observe(ref);
      }

      onCleanup(() => observer.disconnect());
    });

    return (
      <div ref={ref}>
        <p class="text-3xl md:text-4xl font-black">{number()}</p>
      </div>
    );
  };
  

  return (
    <div class="bg-white">
      <Header />
      {/* Hero Section */}
      <main
        id="welcome"
        class="flex flex-col items-center justify-between text-center pt-[150px] pb-16 md:flex-row sm:justify-between  "
      >
        {/* Text Content */}
        <div class=" order-2 w-full md:w-[50%] md:order-1 max-w-lg flex flex-col justify-center items-center ">
          <p class="text-[3rem] md:text-[4rem] font-bold font-lato">
            Welcome to
          </p>
          <div class=" flex flex-col justify-center items-center ">
            <p class="text-primary text-[5rem] mt-[-2rem] md:mt-[-3rem] font-bold font-lato md:text-[7rem]">
              Beckstec
            </p>
            <p class="mt-[-2rem] md:mt-[-2.5rem] w-full text-right text-gray-800 font-lato text-2xl">
              solutions
            </p>
          </div>
          <p class="mt-2 text-gray-800 text-2xl font-lato italic">
            ...solutions in the digital era
          </p>
        </div>

        {/* Logo */}
        <div class="w-full flex justify-center items-center md:w-[50%] mb-3 md:mt-0 order-1 ">
          <img
            src={bigLogo}
            alt="Logo"
            class="md:h-[350px] md:w-[350px] h-[220px] w-[220px]"
            loading="lazy"
          />
        </div>
      </main>

      {/* About Us Section */}
      <section
        id="about"
        class="bg-primary text-white px-8 py-16 md:flex md:items-center md:justify-around"
      >
        {/* <div class="grid grid-cols-2 grid-center gap-4 md:w-1/2"> */}
        <img src={aboutImg} alt="about image" loading="lazy" />
        {/* </div> */}
        <div class="mt-8 md:mt-0 md:w-1/2 md:pl-8">
          <h3 class="text-3xl font-bold mb-4">About us</h3>
          <p class="text-lg text-left leading-relaxed font-lato">
            Beckstec Solutions is a dynamic and progressive technology company
            based in East Legon, Ghana. We are dedicated to empowering
            businesses with cutting-edge IT solutions that drive growth,
            innovation, and efficiency. With a passion for excellence and a
            commitment to customer satisfaction, we deliver tailored services
            and products that meet the unique needs of our clients. Established
            to bridge the gap between technology and business needs, we have
            become a trusted partner for organizations across various
            industries.
          </p>
          <p class="text-lg leading-relaxed mt-4">
            We are proud to have worked with esteemed clients such as:
          </p>
          {/* <p class="text-lg leading-relaxed mt-4">
            We are proud to have worked with esteemed clients such as:
          </p> */}
          <ul class="list-disc pl-5 mt-2">
            <li>Ministry of Foreign Affairs and Regional Integration</li>
            <li>Zhongmei Engineering Group Limited</li>
          </ul>
          {/* <a href="#more" class="inline-block mt-4 text-white underline hover:text-gray-200">More About Us →</a> */}
        </div>
      </section>

      {/* Software Development Services Section */}
      <section id="services" class="px-[10px] md:px-[120px] py-16">
        <h3 class="text-3xl font-bold mb-4">Our Services</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-6 rounded-md shadow-md">
            <img
              src={serv1}
              class="mb-4"
              alt="Software Development"
              loading="lazy"
            />
            <h4 class="text-xl font-bold my-2">Software Development</h4>
            <p class="text-gray-600 mt-2">
              We create online platforms where businesses can sell products or
              services to customers. we design user-friendly interfaces,
              integrating secure payment gateways, managing product catalogs,
              and optimizing the website for performance and SEO.
            </p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
          <div class="border p-6 rounded-md shadow-md">
            <img
              src={serv2}
              class="mb-4"
              alt="Digital Marketing"
              loading="lazy"
            />
            <h4 class="text-xl font-bold my-2">Digital Marketing</h4>
            <p class="text-gray-600 mt-2">
              We build and maintain websites. It includes frontend development
              (creating user interfaces), backend development (server-side logic
              and databases), and full-stack development (combining both).
            </p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
          <div class="border p-6 rounded-md shadow-md">
            <img src={serv3} class="mb-4" alt="Cybersecurity" loading="lazy" />
            <h4 class="text-xl my-2 font-bold">Cybersecurity</h4>
            <ol class="text-gray-600 mt-2">
              <li>Physical Security Integration</li>
              <li>Application Security</li>
              <li>Digital Forensics</li>
              <li>Cloud Security</li>
              <li>Vulnerability Assessment and Penetration Testing (VAPT)</li>
            </ol>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section */}
      <section
        id="digital-services"
        class="px-[10px] md:px-[120px] py-16 bg-gray-50"
      >
        {/* <h3 class="text-5xl font-bold text-black mb-8">Digital Marketing Services</h3> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-6 rounded-md shadow-md">
            <h4 class="text-xl font-bold">Software Consulting</h4>
            <p class="text-gray-600 mt-2">
              {" "}
              Offering strategic guidance to align IT infrastructure with
              long-term objectives.
            </p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
          <div class="border p-6 rounded-md shadow-md">
            <h4 class="text-xl font-bold">Data Analysis </h4>
            <p class="text-gray-600 mt-2">
              Transforming raw data into actionable insights for informed
              decision-making.
            </p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
          <div class="border p-6 rounded-md shadow-md">
            <h4 class="text-xl font-bold">
              Suppliers of IT Equipment and Accessories
            </h4>
            <p class="text-gray-600 mt-2">
              Offering high-quality IT products to support your infrastructure.
            </p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
        </div>
      </section>

      <div class="">
        {/* Tools & Technologies Section */}
        {/* <section class="py-10 bg-gray-100">
          <h2 class="text-3xl font-bold text-center mb-8">Tools & Technologies</h2>
          <div class="flex justify-center space-x-4">
            {["HTML5", "PHP", ".Net", "Angular.js", "Node.js", "Laravel"].map(
              (tech) => (
                <div class="text-center">
                  <div class="h-12 w-12 mb-2 bg-gray-300 rounded"></div>
                  <p>{tech}</p>
                </div>
              )
            )}
          </div>
        </section> */}

        {/*Team Section */}
        <section id="team" class="py-10 bg-primary text-white">
          <div class="flex md:justify-around flex-col md:text-left text-center w-full justify-center md:flex-row mb-8 px-[10px] md:px-[120px]">
            <div class="flex flex-col items-center md:w-[40%] w-full justify-center">
              <p class="font-light text-lg mb-2"></p>
              <h2 class="text-4xl md:text-5xl font-bold my-2">
                Our Team 
              </h2>
              <div class="flex justify-center md:justify-start gap-5 mt-5">
                <div
                  onclick={() => {
                    setTestimonialIndex((prev) => {
                      if (prev === 0) {
                        return testimonials().length - 1;
                      }
                      return prev - 1;
                    });
                  }}
                  class="hover:cursor-pointer w-12 h-12 rounded-full opacity-30 bg-black flex justify-center items-center"
                >
                  <ArrowLeft class="w-6 h-6 text-white" />
                </div>
                <div
                  onclick={() => {
                    setTestimonialIndex((prev) => {
                      if (prev === testimonials().length - 1) {
                        return 0;
                      }
                      return prev + 1;
                    });
                  }}
                  class="hover:cursor-pointer w-12 h-12 rounded-full opacity-30 bg-black flex justify-center items-center "
                >
                  <ArrowRight class="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div class="max-w-xl w-full flex flex-col justify-between my-5 mx-auto bg-white text-black rounded-lg py-12 p-6 shadow">
              <p class="mb-4 font-semibold text-base text-left">
                {testimonials()[testimonialIndex()].text}
              </p>
              <div class="flex  items-center ">
                {/* Image */}
                <div class="flex h-[3.5rem] w-[3.5rem] items-center bg-gray-300 rounded-full mr-4">
                  <img
                    class="h-full w-full rounded-full  "
                    src={testimonials()[testimonialIndex()].image}
                    alt="Profile"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 class="font-bold">
                    {testimonials()[testimonialIndex()].author}
                  </h3>
                  <p class="text-sm">
                    {testimonials()[testimonialIndex()].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Section */}
          <section class="w-full relative flex py-[30px] justify-center">
            <div class="py-10 w-[90%] md:w-[70%] text-gray-700 rounded-xl m-auto absolute z-20 bg-gray-100">
              <div class="grid grid-cols-2 md:flex justify-around items-center text-center">
                <div class="flex flex-col items-center">
                  <img src={stat1} alt="" srcset="" loading="lazy" />
                  <AnimatedCounter targetNumber={2} />
                  <p class="text-sm">Years of Services</p>
                </div>
                <div class="flex flex-col items-center">
                  <img src={stat2} alt="" srcset="" loading="lazy" />
                  <AnimatedCounter targetNumber={1} />
                  <p class="text-sm">Global Offices</p>
                </div>
                <div class="flex flex-col items-center">
                  <img src={stat3} alt="" srcset="" loading="lazy" />
                  <div class="flex">
                    <AnimatedCounter targetNumber={90} />
                    <span class="text-3xl md:text-4xl font-black">%</span>
                  </div>
                  <p class="text-sm">Customer Retention</p>
                </div>
                <div class="flex flex-col items-center">
                  <img src={stat4} alt="" srcset="" loading="lazy" />
                  <div class="flex">
                    <AnimatedCounter targetNumber={5} />
                    <span class="text-3xl md:text-4xl font-black">+</span>
                  </div>
                  <p class="text-sm">Projects</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

      <div class="">
        {/* Our DNA Section */}
        <div class="max-w-7xl pt-[300px] md:pt-[200px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold mb-2 md:mb-6">Our DNA</h1>

          <div class="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Dotted line background */}
            <div
              class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent 
                      [mask-image:linear-gradient(90deg,transparent,white_4px,transparent_0)] [mask-size:8px_100%] [mask-repeat:repeat]"
            />

            {/* Value Cards */}
            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Brain class="w-8 h-8 text-orange-600" />
              </div>
              <h2 class="text-xl font-semibold mb-2">Adaptability</h2>
              <p class="text-gray-600">
                Adapting to the strings of trends with our novel bag of
                strategies.
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Shield class="w-8 h-8 text-orange-600" />
              </div>
              <h2 class="text-xl font-semibold mb-2">Integrity</h2>
              <p class="text-gray-600">
                We uphold transparency, honesty, and ethical practices.
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Award class="w-8 h-8 text-orange-600" />
              </div>
              <h2 class="text-xl font-semibold mb-2">Excellence</h2>
              <p class="text-gray-600">
                we always strive for the highest standards of quality in every
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Heart class="w-8 h-8 text-orange-600" />
              </div>
              <h2 class="text-xl font-semibold mb-2">
                Customer-Centric Approach
              </h2>
              <p class="text-gray-600">
                we Prioritise our clients' needs and deliver solutions that
                exceed their expectations
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Lightbulb class="w-8 h-8 text-orange-600" />
              </div>
              <h2 class="text-xl font-semibold mb-2">Innovation</h2>
              <p class="text-gray-600">
                We Embrace creativity to solve challenges and deliver
                exceptional solutions.
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Users class="w-8 h-8 text-orange-600" />
              </div>
              <h2 class="text-xl font-semibold mb-2">Collaboration</h2>
              <p class="text-gray-600">
                We foster teamwork to achieve shared success.
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div class="bg-[url('@assets/BG.png')] bg-no-repeat bg-center bg-cover from-orange-400 to-orange-500 rounded-xl p-8 lg:p-12">
            <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <img src={mail} alt="Newsletter" class="w-32 h-auto" />
              <div class="md:pl-12 text-center md:text-left text-white">
                <h2 class="text-3xl font-bold mb-6">
                  Subscribe to our newsletter and get the latest updated.
                </h2>
                <form
                  onSubmit={() => {}}
                  class="flex flex-col sm:flex-row gap-4 items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-lg"
                >
                  <input
                    type="email"
                    placeholder="Your work email address"
                    value={email()}
                    onChange={(e) => setEmail(e.target.value)}
                    class="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                    required
                  />
                  <button
                    type="submit"
                    class="bg-primary hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        {/* Join Our Team Section */}
        <section class="py-20 pt-[50px] md:pt-[100px] text-center bg-gray-50">
          <h2 class="text-5xl md:text-5xl font-bold mb-4">Join Our Team</h2>
          <p class="text-gray-600 text-lg font-normal md:text-xl mb-8">
            Ready for a new challenge? join our innovative team and be part of
            something amazing!
          </p>
          <button class="px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary">
            Careers →
          </button>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>

      {/* Floating Button */}
      <div class="fixed z-50 md:origin-center md:rotate-[270deg] right-4 md:right-[-2rem] bottom-4 md:bottom-auto md:top-1/2 transform md:-translate-y-1/2">
        <a
          href="#welcome"
          class="block bg-black text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-gray-800"
        >
          Get a Quote →
        </a>
      </div>
    </div>
  );
}

export default App;
