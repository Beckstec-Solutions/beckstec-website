import logo from "@assets/logo.png";
import insta from "@assets/social/insta.png";
import fb from "@assets/social/fb.png";
import twi from "@assets/social/twi.png";
import lin from "@assets/social/lin.png";
import whatsapp from "@assets/social/whatsapp.png";
import { useLocation, useNavigate } from "@solidjs/router";

function Footer() {
  const SmoothScrollLink = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = () => {
      setTimeout(() => {
        const target = document.getElementById(props.to);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    };

    const handleClick = (e) => {
      e.preventDefault();

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToSection, 500);
      } else {
        scrollToSection();
      }
    };

    return (
      <a href={`#${props.to}`} onClick={handleClick} class={props.class}>
        {props.children}
      </a>
    );
  };
  return (
    <footer id="contact" class="bg-gray-100 w-full ">
      <div class="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img src={logo} alt="logo" class="h-12 w-12" />
          <p class="text-sm text-gray-700">
            Beckstec Solutions is a dynamic and progressive technology company
            based in East Legon, Ghana. We are dedicated to empowering
            businesses with cutting-edge IT solutions that drive growth,
            innovation, and efficiency.
          </p>
          <div class="flex space-x-4 mt-4">
            <a href="" target="blank">
              <div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
                <img src={fb} alt="Facebook" />
              </div>
            </a>
            <a href="https://x.com/Beckstec_2024" target="blank">
              <div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
                <img src={twi} alt="Twitter" class="w-[46%]" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/beckstecsolutions?igsh=cGhoZDEyYmxzMmFq&utm_source=qr"
              target="blank"
            >
              <div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
                <img src={insta} alt="Instagram" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/beckstec-solutions/"
              target="blank"
            >
              <div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
                <img src={lin} alt="LinkedIn" />
              </div>
            </a>
            <a href="https://wa.me/233530509163" target="blank">
              <div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
                <img src={whatsapp} alt="WhatsApp" class="w-[46%]" />
              </div>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <div class="text-lg font-semibold mb-4">Quick Links</div>
          <ul class="text-gray-600 space-y-2">
            <li>
              <SmoothScrollLink to="about" class="hover:text-primary">
                About us
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="services" class="hover:text-primary">
                Our services
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="team" class="hover:text-primary">
                Our Team
              </SmoothScrollLink>
            </li>
            {/* <li>
              <SmoothScrollLink to="" class="hover:text-primary">
                Blogs
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="" class="hover:text-primary">
                Case Study
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="" class="hover:text-primary">
                Testimonials
              </SmoothScrollLink>
            </li> */}
            {/* <li>
							Careers <span class="text-orange-500 text-sm font-semibold">we're hiring</span>
						</li> */}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <div class="text-lg font-semibold mb-4">Services</div>
          <ul class="text-gray-600 space-y-2">
            <li>
              <a
                href="/Services/Software-Development"
                class="hover:text-primary"
              >
                Software Development
              </a>
            </li>
            <li>
              <a
                href="/Services/Data-Analytics"
                class="hover:text-primary"
              >
                Data Analysis
              </a>
            </li>
            <li>
              <a
                href="/Services/Cybersecurity"
                class="hover:text-primary"
              >
                Cybersecurity
              </a>
            </li>
            <li>
              <a
                href="/Services/IT-Consulting"
                class="hover:text-primary"
              >
                IT Consulting
              </a>
            </li>
            <li>
              <a
                href="/Services/Digital-Marketing"
                class="hover:text-primary"
              >
                Marketing and Advertisement
              </a>
            </li>
            <li>
              <a
                href="/Services/Suppliers-of-IT-Equipment-and-Accessories"
                class="hover:text-primary"
              >
                Suppliers of IT Equipment and Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <div class="text-lg font-semibold mb-4">Reach Us</div>
          <ul class="text-gray-600 space-y-2">
            <li>📧 info@beckstec.org</li>
            <li>📞 +233 530 509 163</li>
            <li>📞 +233 547 605 037</li>
            <li>📍 IPS Road 76, ARS Roundabout, East Legon</li>
          </ul>
        </div>
      </div>

      <div class="bg-primary flex md:flex-row flex-col-reverse gap-2 md:gap-0 justify-between px-[80px] text-white py-4 text-center">
        <p>
          Copyright © {new Date().getFullYear()} Beckstec Solutions. All Rights
          Reserved.
        </p>
        <p class="text-md mt-1">
          <a href="" class="hover:underline">
            Terms & Conditions{" "}
          </a>{" "}
          |
          <a href="" class="hover:underline">
            {" "}
            Privacy Policy{" "}
          </a>{" "}
          |
          <a href="" class="hover:underline">
            {" "}
            Disclaimer
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
