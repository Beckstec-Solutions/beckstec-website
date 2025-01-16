
import logo from "../assets/logo.png";
import insta from "../assets/social/insta.png";
import fb from "../assets/social/fb.png";
import twi from "../assets/social/twi.png";
import lin from "../assets/social/lin.png";

function Footer() {
	return (
		<footer id="contact" class="bg-gray-100">
			<div class="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* About Section */}
				<div>

					<img src={logo} alt="logo" class="h-12 w-12" />
					<p class="text-sm text-gray-700">
						Beckstec Solutions is a dynamic and progressive technology company based in East Legon, Ghana. We are dedicated to empowering businesses with cutting-edge IT solutions that drive growth, innovation, and efficiency.
					</p>
					<div class="flex space-x-4 mt-4">
						<a href="">
							<div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
								<img src={fb} alt="Facebook" />
							</div>
						</a>
						<a href="">
							<div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
								<img src={twi} alt="Twitter" />
							</div>
						</a>
						<a href="">
							<div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
								<img src={insta} alt="Instagram" />
							</div>
						</a>
						<a href="">
							<div class="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary-light bg-gray-300">
								<img src={lin} alt="LinkedIn" />
							</div>
						</a>
					</div>
				</div>


				{/* Quick Links Section */}
				<div>
					<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
					<ul class="text-gray-600 space-y-2">
						<li>About Us</li>
						<li>Blogs</li>
						<li>Case Study</li>
						<li>Testimonials</li>
						<li>
							Careers <span class="text-orange-500 text-sm font-semibold">we're hiring</span>
						</li>
					</ul>
				</div>

				{/* Services Section */}
				<div>
					<h3 class="text-lg font-semibold mb-4">Services</h3>
					<ul class="text-gray-600 space-y-2">
						<li>Creatives</li>
						<li>Digital Marketing</li>
						<li>Mobile Apps</li>
						<li>Accelerators</li>
						<li>Contact Us</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h3 class="text-lg font-semibold mb-4">Reach Us</h3>
					<ul class="text-gray-600 space-y-2">
						<li>📧 info@beckstecsolutions.biz</li>
						<li>📞 +233 530 509 163</li>
						<li>📞 +233 547 605 037</li>
						<li>📍 IPS Road 76, ARS Roundabout, East Legon</li>
					</ul>
				</div>
			</div>

			<div class="bg-primary flex md:flex-row flex-col-reverse gap-2 md:gap-0 justify-between px-[80px] text-white py-4 text-center">
				<p>
					Copyright © {new Date().getFullYear()} Beckstec Solutions. All Rights Reserved.
				</p>
				<p class="text-md mt-1">
					<a href="" class="hover:underline">Terms & Conditions </a> |
					<a href="" class="hover:underline"> Privacy Policy </a> |
					<a href="" class="hover:underline"> Disclaimer</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;