import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer
        className="relative bg-primary bg-no-repeat bg-bottom bg-contain pt-20 pb-10"
        style={{
          backgroundImage: "url('../src/assets/footerbg.png')", 
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 ml-44">
            
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Memix</h2>
              <p className="text-gray-800 text-[14px]">
                Transform meetings into clear, actionable insights and stay
                focused on what truly matters.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-medium mb-4 text-2xl">Quick Links</h3>
              <ul className="space-y-2 text-gray-700 ml-2">
                <li>
                  <a href="#about" className="hover:text-purple-600 transition text-xl">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-purple-600 transition text-xl">
                    Features
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setOpen(true)}
                    className="hover:text-purple-600 transition text-xl"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Social / Personal Links */}
            <div>
              <h3 className="font-medium mb-4 text-2xl ">Connect</h3>
              <ul className="space-y-2 text-gray-700 ml-2">
                <li>
                  <a
                    href="https://github.com/indecisivenitin"
                    target="_blank"
                    className="hover:text-purple-600 transition text-xl"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://portfolio-nitin31.netlify.app/"
                    target="_blank"
                    className="hover:text-purple-600 transition text-xl"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t mt-10 pt-6 text-center text-sm text-gray-800">
            © {new Date().getFullYear()} Memix. All rights reserved.
            <p>Made with 🧡 by Nitin..</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-primary rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Contact Us</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <button
                type="submit"
                className="w-full bg-accent text-white py-2  hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}