import { createSignal, onCleanup, onMount, For } from "solid-js";
import { IoArrowForward } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import aboutImg from "@assets/about.png";
import bigLogo from "@assets/big_logo.png";
import { MoveRight } from "lucide-solid";
import serv1 from "@assets/icon1.png";
import serv2 from "@assets/icon2.png";
import serv3 from "@assets/icon3.png";
import serv4 from "@assets/icon4.png";
import serv5 from "@assets/icon5.png";
import serv6 from "@assets/icon6.png";
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
import background from "@assets/welcome.jpg";
import background2 from "@assets/about.png";
import background3 from "@assets/mission.png";
import vector from "@assets/vector.png";
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
  const [position, setPosition] = createSignal(100);

  let animationFrame;

  const moveText = () => {
    setPosition((prev) => (prev <= -100 ? 100 : prev - 0.2))
    animationFrame = requestAnimationFrame(moveText);
  };

  moveText();

  onCleanup(() => cancelAnimationFrame(animationFrame));
  const [testimonials, setTestimonials] = createSignal([
    {
      text: "Results-driven mechanical engineer and entrepreneur with experience in engineering, human resources, and business management.Proven track record of driving business growth, improving operational efficiency, and leading high- performing teams.",
      author: "Isaiah Baji",
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
  const SmoothScrollLink = (props) => {
    const scrollToSection = (e) => {
      e.preventDefault();
      const target = document.getElementById(props.to);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    return (
      <a href={`#${props.to}`} onclick={scrollToSection} class={props.class}>
        {props.children}
      </a>
    );
  };

  return (
    <div class="bg-white">
      {/* Hero Section */}
      <main id="welcome" class="flex text-center  relative w-full h-[100%]">
        <img
          src={background}
          alt="Background Image"
          loading="lazy"
          srcset=""
          class="w-[100%] h-[100%]"
        />
        <div class="flex flex-col flex-wrap absolute items-center top-[20%] md:top-[10%] w-full justify-center text-start text-[1.2rem] md:text-[2.5rem] md:w-[50%] font-bold text-white md:pl-10">
          <div class="flex justify-start !pl-5 text-start items-center w-full">
            Transforming
          </div>
          <div class="flex justify-start !pl-5 text-start items-center w-full">
            Businesses,
          </div>
          <div class="flex justify-start !pl-5 text-start items-center w-full">
            Empowering growth
          </div>
          <div class="flex justify-start !pl-5 text-start items-center w-full">
            Through IT Solutions
          </div>
        </div>
        <div
          class="w-full items-center justify-start text-[1rem] md:text-[1.5rem] p-2 text-white absolute bottom-3 italic  md:bottom-5"
          style={{ transform: `translateX(${position()}%)` }}
        >
          ...Solutions in the digital era
        </div>
      </main>

      {/* About Us Section */}
      <section id="about" class="flex text-center  relative w-full h-[100%]">
        <img
          src={background2}
          alt="Background Image"
          loading="lazy"
          srcset=""
          class="w-[100%] h-[100%]"
        />
        <div class="md:w-[40%] gap-2 absolute right-2 text-white w-[94%] flex flex-col !h-[100%]   justify-center items-center">
          <div class="flex w-full justify-center items-center text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-white">
            About Us
          </div>
          <div class="flex w-[100%] items-center text-left p-2 lg:p-5 bg-[#05162293] text-[0.7rem] md:text-[1rem]  lg:text-[1.5rem] font-bold">
            {/* <div class="flex w-[100%] items-center text-left p-2 lg:p-5 bg-[#07304be4] text-[0.7rem] md:text-[1rem]  lg:text-[1.5rem] font-bold"> */}
            Beckstec Solutions is your trusted partner in business innovation
            and growth. We deliver cutting-edge solutions, expertise, and
            support to help businesses thrive in today's fast-paced landscape.
            At Beckstec Solutions, our experienced and highly motivated team,
            many of whom have a personal stake in the company, specify, design,
            manage, install, train, and support comprehensive solutions that are
            uniquely customized to meet the distinct needs of our clients.
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section
        id="mission"
        class="flex text-center  relative w-full lg:h-[90vh] h-[100%]"
      >
        <img
          src={background3}
          alt="Background Image"
          loading="lazy"
          srcset=""
          class="w-[100%] h-[100%]"
        />
      </section>

      {/* Software Development Services Section */}
      <section
        id="services"
        class="px-[1rem] bg-[url('/src/assets/servicesbg1.jpg')] bg-cover bg-center bg-no-repeat md:px-[2rem] py-8"
      >
        <div class=" w-full justify-center text-center items-center text-white p-3 text-[2rem] font-bold">
          Our Services
        </div>
        <div class="flex flex-col md:flex-row w-full justify-center items-center gap-6">
          <div class="border-2 border-[#D85A03] w-full md:w-[23%] h-[23rem] lg:h-[25rem] p-6 relative rounded-md">
            <div class="flex justify-center itcem w-[3rem] h-[3rem]">
              <img
                src={serv1}
                class="w-[100%] h-[100%]"
                alt="Software Development"
                loading="lazy"
              />
            </div>
            <div class="text-[1.2rem] flex justify-start items-center p-2 text-white font-bold my-2">
              Software Development
            </div>
            <div class="flex justify-start items-center w-full text-white">
              We create online platforms where businesses can sell products or
              services to customers. we design user-friendly interfaces,
              integrating secure payment gateways, managing product catalogs,
              and optimizing the website for performance and SEO.
            </div>
            <div class="flex justify-start items-center absolute bottom-[1rem]">
              <a
                href="/Services/Software-Development"
                class="text-primary hover:underline justify-start text-[0.9rem] items-center flex gap-1 font-bold mt-4 "
              >
                Explore <MoveRight class="w-[1rem]" />
              </a>
            </div>
          </div>
          <div class="border-2 border-[#138B44] w-full md:w-[23%] relative h-[20rem] lg:h-[25rem] p-6 rounded-md shadow-md">
            <div class="flex justify-center itcem w-[3rem] h-[3rem]">
              <img
                src={serv2}
                class="w-[100%] h-[100%]"
                alt="Digital Marketing"
                loading="lazy"
              />
            </div>
            <div class="text-[1.2rem] flex justify-start items-center p-2 text-white font-bold my-2">
              Data Analysis
            </div>
            <div class="flex justify-start items-center w-full text-white">
              Transforming raw data into actionable insights for informed
              decision-making.
            </div>
            <div class="flex justify-start items-center absolute bottom-[1rem]">
              <a
                href="/Services/Data-Analytics"
                class="text-[#138B44] hover:underline justify-start text-[0.9rem] items-center flex gap-1 font-bold mt-4 "
              >
                Explore <MoveRight class="w-[1rem]" />
              </a>
            </div>
          </div>
          <div class="border-2 border-[#898E07] w-full md:w-[23%] relative h-[20rem] lg:h-[25rem] p-6 rounded-md shadow-md">
            <div class="flex justify-center itcem w-[3rem] h-[3rem]">
              <img
                src={serv3}
                class="w-[100%] h-[100%]"
                alt="Cybersecurity"
                loading="lazy"
              />
            </div>
            <div class="text-[1.2rem] flex justify-start items-center p-2 text-white font-bold my-2">
              Cybersecurity
            </div>
            <div class="flex justify-start items-center w-full text-white">
              we provides comprehensive cybersecurity services designed to
              protect businesses from digital threats, ensuring data
              confidentiality, integrity, and availability.
            </div>
            <div class="flex justify-start items-center absolute bottom-[1rem]">
              <a
                href="/Services/Cybersecurity"
                class="text-[#898E07] hover:underline justify-start text-[0.9rem] items-center flex gap-1 font-bold mt-4 "
              >
                Explore <MoveRight class="w-[1rem]" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services 2"
        class="px-[1rem] bg-[url('src/assets/servicesbg2.png')] bg-cover bg-center bg-no-repeat md:px-[2rem] py-8"
      >
        <div class="flex flex-col md:flex-row w-full justify-center items-center gap-6">
          <div class="border-2 border-[#FFB6B6] w-full md:w-[23%] relative h-[20rem] lg:h-[25rem] p-6 rounded-md">
            <div class="flex justify-center itcem w-[3rem] h-[3rem]">
              <img
                src={serv4}
                class="w-[100%] h-[100%]"
                alt="Software Development"
                loading="lazy"
              />
            </div>
            <div class="text-[1.2rem] flex justify-start items-center p-2 text-white font-bold my-2">
              IT Consulting
            </div>
            <div class="flex justify-start items-center w-full text-white">
              Offering strategic guidance to align IT infrastructure with
              long-term objectives.
            </div>
            <div class="flex justify-start items-center absolute bottom-[1rem]">
              <a
                href="/Services/IT-Consulting"
                class="text-[#FFB6B6] hover:underline justify-start text-[0.9rem] items-center flex gap-1 font-bold mt-4 "
              >
                Explore <MoveRight class="w-[1rem]" />
              </a>
            </div>
          </div>
          <div class="border-2 border-[#FFFFFF] w-full md:w-[23%] relative h-[20rem] lg:h-[25rem] p-6 rounded-md shadow-md">
            <div class="flex justify-center itcem w-[3rem] h-[3rem]">
              <img
                src={serv5}
                class="w-[100%] h-[100%]"
                alt="Digital Marketing"
                loading="lazy"
              />
            </div>
            <div class="text-[1.2rem] flex justify-start items-center p-2 text-white font-bold my-2">
              Marketing and Advertisement
            </div>
            <div class="flex justify-start items-center w-full text-white">
              Amplifying your brand’s reach through expert digital marketing
              strategies.
            </div>
            <div class="flex justify-start items-center absolute bottom-[1rem]">
              <a
                href="/Services/Digital-Marketing"
                class="text-[#FFFFFF] hover:underline justify-start text-[0.9rem] items-center flex gap-1 font-bold mt-4 "
              >
                Explore <MoveRight class="w-[1rem]" />
              </a>
            </div>
          </div>
          <div class="border-2 border-[#138B44] w-full relative md:w-[23%] h-[20rem] lg:h-[25rem] p-6 rounded-md shadow-md">
            <div class="flex justify-center itcem w-[3rem] h-[3rem]">
              <img
                src={serv6}
                class="w-[100%] h-[100%]"
                alt="Cybersecurity"
                loading="lazy"
              />
            </div>
            <div class="text-[1.2rem] flex justify-start items-center p-2 text-white font-bold my-2">
              Suppliers of IT Equipment and Accessories
            </div>
            <div class="flex justify-start items-center w-full text-white">
              Offering high-quality IT products to support your infrastructure.
            </div>
            <div class="flex justify-start items-center absolute bottom-[1rem]">
              <a
                href="/Services/Suppliers-of-IT-Equipment-and-Accessories"
                class="text-[#138B44] hover:underline justify-start text-[0.9rem] items-center flex gap-1 font-bold mt-4 "
              >
                Explore <MoveRight class="w-[1rem]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="">
        {/*Team Section */}
        <section id="team" class="py-10 bg-primary text-white">
          <div class="flex md:justify-around flex-col md:text-left text-center w-full justify-center md:flex-row mb-8 px-[10px] md:px-[120px]">
            <div class="flex flex-col items-center md:w-[40%] w-full justify-center">
              <p class="font-light text-lg mb-2"></p>
              <div class="text-4xl md:text-5xl font-bold my-2">Our Team</div>
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

            <div class="max-w-xl w-[90%] flex flex-col justify-between relative my-5 mx-auto bg-white text-black rounded-lg py-12 px-12 shadow">
              <p class="mb-4 font-semibold text-base text-left">
                {testimonials()[testimonialIndex()].text}
              </p>
              <div class="flex  items-center ">
                {/* Image */}
                <div class="flex h-[3rem] w-[3rem] lg:h-[4.5rem] lg:w-[4.5rem] shadow-md absolute top-7 left-[-1rem] lg:left-[-2rem] items-center bg-gray-300 rounded-full mr-4">
                  <img
                    class="h-full w-full rounded-full  "
                    src={testimonials()[testimonialIndex()].image}
                    alt="Profile"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div class="font-bold text-[#138B44] w-full text-start">
                    {testimonials()[testimonialIndex()].author}
                  </div>
                  <div class="text-sm w-full text-start">
                    {testimonials()[testimonialIndex()].role}
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center !w-[3rem] !h-[3rem] absolute bottom-[-1.5rem] right-10">
                <img
                  src={vector}
                  class="w-[100%] h-[100%]"
                  alt="Software Development"
                  loading="lazy"
                />
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
          <div class="text-4xl font-bold mb-2 md:mb-6">Our DNA</div>

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
              <div class="text-xl font-semibold mb-2">Adaptability</div>
              <p class="text-gray-600">
                Adapting to the strings of trends with our novel bag of
                strategies.
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Shield class="w-8 h-8 text-orange-600" />
              </div>
              <div class="text-xl font-semibold mb-2">Integrity</div>
              <p class="text-gray-600">
                We uphold transparency, honesty, and ethical practices.
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Award class="w-8 h-8 text-orange-600" />
              </div>
              <div class="text-xl font-semibold mb-2">Excellence</div>
              <p class="text-gray-600">
                we always strive for the highest standards of quality in every
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Heart class="w-8 h-8 text-orange-600" />
              </div>
              <div class="text-xl font-semibold mb-2">
                Customer-Centric Approach
              </div>
              <p class="text-gray-600">
                we Prioritise our clients' needs and deliver solutions that
                exceed their expectations
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Lightbulb class="w-8 h-8 text-orange-600" />
              </div>
              <div class="text-xl font-semibold mb-2">Innovation</div>
              <p class="text-gray-600">
                We Embrace creativity to solve challenges and deliver
                exceptional solutions.
              </p>
            </div>

            <div class="relative bg-white p-6 rounded-lg text-center z-10">
              <div class="mx-auto w-16 h-16 mb-4 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <Users class="w-8 h-8 text-orange-600" />
              </div>
              <div class="text-xl font-semibold mb-2">Collaboration</div>
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
                <div class="text-3xl font-bold mb-6">
                  Subscribe to our newsletter and get the latest updated.
                </div>
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
          <div class="text-5xl md:text-5xl font-bold mb-4">Join Our Team</div>
          <p class="text-gray-600 text-lg font-normal md:text-xl mb-8">
            Ready for a new challenge? join our innovative team and be part of
            something amazing!
          </p>
          <button class="px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary">
            Careers →
          </button>
        </section>
      </div>

      {/* Floating Button */}
      <div class="fixed z-50 md:origin-center md:rotate-[270deg] right-4 md:right-[-2rem] bottom-4 md:bottom-auto md:top-1/2 transform md:-translate-y-1/2">
        <SmoothScrollLink
          to="welcome"
          class="block bg-white text-primary shadow-md text-sm font-semibold py-2 px-4 rounded-md hover:bg-gray-800"
        >
          Get a Quote →
        </SmoothScrollLink>
      </div>
    </div>
  );
}

export default App;
