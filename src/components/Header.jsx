import { createSignal, onMount } from "solid-js";
import logo from "@assets/logo.png";
import logoText from "@assets/logotext.png";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "@solidjs/router";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);
  const [showNavbar, setShowNavbar] = createSignal(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY < lastScrollY || window.scrollY === 0) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    lastScrollY = window.scrollY;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
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
    <>
      {/* Navbar */}
      <header class=" z-50 flex items-center justify-between w-full py-2 border-b-[0.2rem] border-orange-700 bg-white  px-[10px] md:px-[50px]">
        <a href="http:/">
          <div class="flex items-center">
            <img
              src={logo}
              alt="Beckstec Logo"
              class="h-10 w-10 md:h-16 md:w-16"
            />
            <img src={logoText} alt="Logo text" class="h-10 md:h-12" />
          </div>
        </a>
        <nav class="hidden md:flex space-x-4">
          <SmoothScrollLink to="about" class="text-gray-700 hover:text-primary">
            About us
          </SmoothScrollLink>
          <SmoothScrollLink
            to="services"
            class="text-gray-700 hover:text-primary"
          >
            Our services
          </SmoothScrollLink>
          <SmoothScrollLink
            to="contact"
            class="text-gray-700 hover:text-primary"
          >
            Contact us
          </SmoothScrollLink>
          <SmoothScrollLink
            to="team"
            class="text-gray-700 font-bold hover:text-primary"
          >
            Our Team
          </SmoothScrollLink>
        </nav>
        <button
          class="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Side Drawer */}
      <div
        class={`fixed top-0 right-0 h-full w-[80%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          mobileMenuOpen() ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          class="absolute top-4 right-4 text-gray-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav class="flex flex-col p-6 text-xl space-y-4">
          <div class="flex items-center">
            <img src={logo} alt="Beckstec Logo" class="h-16 w-16" />
            <img src={logoText} alt="Logo text" class="h-12" />
          </div>
          <SmoothScrollLink
            to="about"
            class="text-gray-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            About us
          </SmoothScrollLink>
          <SmoothScrollLink
            to="services"
            class="text-gray-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our services
          </SmoothScrollLink>
          <SmoothScrollLink
            to="contact"
            class="text-gray-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact us
          </SmoothScrollLink>
          <SmoothScrollLink
            to="team"
            class="text-gray-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Team
          </SmoothScrollLink>
        </nav>
      </div>

      {/* Overlay */}
      {mobileMenuOpen() && (
        <div
          class="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
