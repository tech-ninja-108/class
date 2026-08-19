import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#f8f9ff] px-5 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <p className="font-semibold text-[#6657f5]">Contact us</p>

          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Let&apos;s start a conversation
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
            Have a project idea or question? Send us a message and our team will
            contact you.
          </p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
          {/* Contact Details */}

          <div className="bg-gradient-to-br from-[#6657f5] to-[#8f6df8] p-8 text-white sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-white/70">
              Contact information
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              We would love to hear from you.
            </h2>

            <p className="mt-4 max-w-md leading-7 text-white/75">
              Contact our team for website development, mobile applications and
              other digital services.
            </p>

            <div className="mt-10 flex flex-col gap-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-white/60">Phone number</p>
                  <h3 className="mt-1 font-semibold">+91 98765 43210</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-white/60">Email address</p>
                  <h3 className="mt-1 font-semibold">hello@codewave.com</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-white/60">Office address</p>
                  <h3 className="mt-1 font-semibold">
                    Bhopal, Madhya Pradesh, India
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => {
                  return (
                    <button
                      key={index}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition hover:bg-white hover:text-[#6657f5]"
                    >
                      <Icon />
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* Contact Form */}

          <div className="p-8 sm:p-12">
            <form className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-[#6657f5] focus:ring-2 focus:ring-[#6657f5]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-[#6657f5] focus:ring-2 focus:ring-[#6657f5]/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-[#6657f5] focus:ring-2 focus:ring-[#6657f5]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Service
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-500 outline-none transition focus:border-[#6657f5]">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>UI/UX Design</option>
                  <option>Backend Development</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-[#6657f5] focus:ring-2 focus:ring-[#6657f5]/10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-xl bg-[#6657f5] px-7 py-4 font-semibold text-white transition hover:bg-[#5546e8]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
