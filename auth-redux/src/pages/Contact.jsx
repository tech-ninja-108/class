import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

const Contact = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    alert("Message sent successfully");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Heading */}
      <section className="bg-gray-950 px-5 py-20 text-center text-white">
        <p className="font-semibold text-blue-400">Contact Us</p>

        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          We Would Love To Help
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          Have a question or need support? Send us a message and our team will
          contact you.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        {/* Contact Details */}
        <div className="rounded-3xl bg-blue-600 p-8 text-white sm:p-10">
          <p className="font-semibold text-blue-100">Contact Information</p>

          <h2 className="mt-3 text-3xl font-black">
            Let’s Talk About Your Query
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Our support team is available to answer your product, order and
            payment-related questions.
          </p>

          <div className="mt-10 space-y-7">
            <ContactInfo
              icon={<FiPhone />}
              title="Phone"
              value="+91 98765 43210"
            />

            <ContactInfo
              icon={<FiMail />}
              title="Email"
              value="support@shopnest.com"
            />

            <ContactInfo
              icon={<FiMapPin />}
              title="Address"
              value="Bhopal, Madhya Pradesh, India"
            />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="rounded-3xl bg-white p-7 shadow-sm sm:p-10"
        >
          <h2 className="text-3xl font-black text-gray-900">
            Send Us A Message
          </h2>

          <p className="mt-2 text-gray-500">
            Fill the form below and we will reply soon.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-medium text-gray-700">
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter message subject"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-medium text-gray-700">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <button className="mt-6 flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Send Message
            <FiSend />
          </button>
        </form>
      </section>
    </main>
  );
};

const ContactInfo = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
        {icon}
      </div>

      <div>
        <p className="text-sm text-blue-200">{title}</p>
        <p className="mt-1 font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default Contact;
