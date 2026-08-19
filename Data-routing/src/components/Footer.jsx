import {
  FaCode,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] px-5 pt-16 text-white md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company */}

        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6657f5]">
              <FaCode />
            </div>

            <h2 className="text-2xl font-bold">
              Code<span className="text-[#8b7fff]">Wave</span>
            </h2>
          </div>

          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            We create modern websites and digital products that help businesses
            grow.
          </p>

          <div className="mt-6 flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, index) => {
                return (
                  <button
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#6657f5]"
                  >
                    <Icon />
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* Links */}

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">
            <a href="/" className="transition hover:text-white">
              Home
            </a>

            <a href="/about" className="transition hover:text-white">
              About Us
            </a>

            <a href="/services" className="transition hover:text-white">
              Services
            </a>

            <a href="/projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Services */}

        <div>
          <h3 className="text-lg font-bold">Our Services</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">
            <p>Web Development</p>
            <p>App Development</p>
            <p>UI/UX Design</p>
            <p>E-commerce</p>
            <p>Backend Development</p>
          </div>
        </div>

        {/* Newsletter */}

        <div>
          <h3 className="text-lg font-bold">Newsletter</h3>

          <p className="mt-5 leading-7 text-slate-400">
            Subscribe to receive the latest news and updates.
          </p>

          <div className="mt-5 flex overflow-hidden rounded-xl bg-white">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 text-sm text-slate-800 outline-none"
            />

            <button className="bg-[#6657f5] px-5 font-semibold">Send</button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-6 text-sm text-slate-400 sm:flex-row">
        <p>© 2026 CodeWave. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
