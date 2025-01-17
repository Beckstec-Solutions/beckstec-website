import { createSignal } from "solid-js";
import bigLogo from "./assets/big_logo.png";
import aboutImg from "./assets/about.png";
import serv1 from "./assets/serv1.png";
import serv2 from "./assets/serv2.png";
import serv3 from "./assets/serv3.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

import next from "./assets/next.png";
import prev from "./assets/prev.png";
import stat1 from "./assets/stats/1.png";
import stat2 from "./assets/stats/2.png";
import stat3 from "./assets/stats/3.png";
import stat4 from "./assets/stats/4.png";

import team1 from "./assets/team/1.png";

function App() {
  const [testimonialIndex, setTestimonialIndex] = createSignal(0);
  const [testimonials, setTestimonials] = createSignal([
    {
      text: "Results-driven mechanical engineer and entrepreneur with experience in engineering, human resources, and business management.Proven track record of driving business growth, improving operational efficiency, and leading high- performing teams.",
      author: "ISAIAH BAJI",
      image: team1,
      role: "MANAGING DIRECTOR",
    },

  ]);


  return (
    <div class="bg-white">
      <Header />
      {/* Hero Section */}
      <main class="md:[150px] xl:px-[250px] flex flex-col items-center justify-center text-center px-4 pt-[150px] pb-16 md:flex-row md:justify-between">
        {/* Text Content */}
        <div class="max-w-lg">
          <p class="text-7xl md:text-[4rem] font-bold">
            Welcome to
          </p>
          <p class="text-primary text-[5rem] font-bold md:text-[6rem]">
            Beckstec
          </p>
          <p class="mt-2 text-gray-600 text-2xl">...solutions in the digital era</p>
        </div>

        {/* Logo */}
        <div class="mt-8 md:mt-0">
          <img src={bigLogo} alt="Logo" class="md:h-[350px] md:w-[350px] h-[220px] w-[220px]" />
        </div>
      </main>

      {/* About Us Section */}
      <section id="about" class="bg-primary text-white px-8 py-16 md:flex md:items-center md:justify-around">
        {/* <div class="grid grid-cols-2 grid-center gap-4 md:w-1/2"> */}
        <img src={aboutImg} alt="about image" />
        {/* </div> */}
        <div class="mt-8 md:mt-0 md:w-1/2 md:pl-8">
          <h3 class="text-3xl font-bold mb-4">About us</h3>
          <p class="text-lg leading-relaxed">
            Beckstec Solutions is a dynamic and progressive technology company based in East Legon, Ghana. We are dedicated to empowering businesses with cutting-edge IT solutions that drive growth, innovation, and efficiency. With a passion for excellence and a commitment to customer satisfaction, we deliver tailored services and products that meet the unique needs of our clients. Established to bridge the gap between technology and business needs, we have become a trusted partner for organizations across various industries.
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
        <h3 class="text-5xl font-bold mb-8">Our Services</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-6 rounded-md shadow-md">
            <img src={serv1} class="mb-4" alt="Software Development" />
            <h4 class="text-xl font-bold my-2">Software Development</h4>
            <p class="text-gray-600 mt-2">We create online platforms where businesses can sell products or services to customers. we design user-friendly interfaces, integrating secure payment gateways, managing product catalogs, and optimizing the website for performance and SEO.</p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
          <div class="border p-6 rounded-md shadow-md">
            <img src={serv2} class="mb-4" alt="Digital Marketing" />
            <h4 class="text-xl font-bold my-2">Digital Marketing</h4>
            <p class="text-gray-600 mt-2">We build and maintain websites. It includes frontend development (creating user interfaces), backend development (server-side logic and databases), and full-stack development (combining both).</p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
          <div class="border p-6 rounded-md shadow-md">
            <img src={serv3} class="mb-4" alt="Cybersecurity" />
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
      <section id="digital-services" class="px-[10px] md:px-[120px] py-16 bg-gray-50">
        {/* <h3 class="text-5xl font-bold text-black mb-8">Digital Marketing Services</h3> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-6 rounded-md shadow-md">
            <h4 class="text-xl font-bold">Software Consulting</h4>
            <p class="text-gray-600 mt-2"> Offering strategic guidance to align IT infrastructure with long-term objectives.</p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
          <div class="border p-6 rounded-md shadow-md">
            <h4 class="text-xl font-bold">Data Analysis </h4>
            <p class="text-gray-600 mt-2">Transforming raw data into actionable insights for informed decision-making.</p>
            {/* <a href="#" class="text-primary mt-4 inline-block">Explore →</a> */}
          </div>
          <div class="border p-6 rounded-md shadow-md">
            <h4 class="text-xl font-bold">Suppliers of IT Equipment and Accessories</h4>
            <p class="text-gray-600 mt-2">Offering high-quality IT products to support your infrastructure.</p>
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
            <div class="flex flex-col items- md:w-[40%] w-full justify-start">
              <p class="font-light text-lg mb-2"></p>
              <h2 class="text-4xl md:text-7xl font-bold my-2">Our Team
                At Beckstec
                Solutions</h2>
              <div class="flex justify-center md:justify-start gap-5 mt-5">
                <div onclick={() => {
                  setTestimonialIndex((prev) => {
                    if (prev === 0) {
                      return testimonials().length - 1
                    }
                    return prev - 1
                  })
                }} class="hover:cursor-pointer w-12 h-12 rounded-full opacity-30 bg-black flex justify-center items-center">
                  <img src={prev} alt="previous" class="" />
                </div>
                <div onclick={
                  () => {
                    setTestimonialIndex((prev) => {
                      if (prev === testimonials().length - 1) {
                        return 0
                      }
                      return prev + 1
                    })
                  }
                } class="hover:cursor-pointer w-12 h-12 rounded-full opacity-30 bg-black flex justify-center items-center ">
                  <img src={next} alt="next" />
                </div>
              </div>
            </div>

            <div class="max-w-xl w-full flex flex-col justify-between my-5 mx-auto bg-white text-black rounded-lg py-12 p-6 shadow">
              <p class="mb-4 font-semibold text-xl text-left">{testimonials()[testimonialIndex()].text}</p>
              <div class="flex items-center">
                {/* Image */}
                <img class="h-10 w-10 bg-gray-300 rounded-full mr-4" src={testimonials()[testimonialIndex()].image} alt="" />
                <div>
                  <h3 class="font-bold">{testimonials()[testimonialIndex()].author}</h3>
                  <p class="text-sm">{testimonials()[testimonialIndex()].role}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Section */}
          <section class="w-full relative flex py-[30px] justify-center">
            <div class="py-10 w-[90%] md:w-[70%] text-gray-700 rounded-xl m-auto absolute z-20 bg-gray-100">
              <div class="grid grid-cols-2 md:flex justify-around items-center text-center">
                <div class="flex flex-col items-center">
                  <img src={stat1} alt="" srcset="" />
                  <p class="text-3xl md:text-4xl font-black">2</p>
                  <p class="text-sm">Years of Services</p>
                </div>
                <div class="flex flex-col items-center">
                  <img src={stat2} alt="" srcset="" />
                  <p class="text-3xl md:text-4xl font-black">1</p>
                  <p class="text-sm">Global Offices</p>
                </div>
                <div class="flex flex-col items-center">
                  <img src={stat3} alt="" srcset="" />
                  <p class="text-3xl md:text-4xl font-black">90%</p>
                  <p class="text-sm">Customer Retention</p>
                </div>
                <div class="flex flex-col items-center">
                  <img src={stat4} alt="" srcset="" />
                  <p class="text-3xl md:text-4xl font-black">5+</p>
                  <p class="text-sm">Projects</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

      <div class="">
        {/* Join Our Team Section */}
        <section class="py-20 pt-[220px] md:pt-[160px] text-center bg-gray-50">
          <h2 class="text-5xl md:text-7xl font-bold mb-4">Join Our Team</h2>
          <p class="text-gray-600 text-lg font-light md:text-xl mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button class="px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary">
            Careers →
          </button>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>

      {/* Floating Button */}
      <div class="fixed z-50 md:origin-center md:rotate-[270deg] right-4 md:right-0 bottom-4 md:bottom-auto md:top-1/2 transform md:-translate-y-1/2">
        <a
          href="#quote"
          class="block bg-black text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-gray-800"
        >
          Get a Quote →
        </a>
      </div>
    </div>


  );
}

export default App;
