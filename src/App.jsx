import React from "react";
import bg1 from "./assets/2.png";
import bg2 from "./assets/3.png";
import Logo2 from "./assets/logo2.png";
import Background from "./Background.jsx";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col items-center justify-center">
        <Background />

        <section
          id="video"
          className="w-full flex justify-center items-center mb-4 px-4"
        >
          <iframe
            className="w-full max-w-sm sm:max-w-md md:max-w-4xl rounded-lg shadow-xl border-4 border-yellow-500"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9SWGZsVSxKs?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <img
          src={bg2}
          alt=""
          className="w-full sm:w-full md:w-full h-auto animate-spin-slow"
        />
      </div>

      <div className="bg-black py-6 text-center">
        <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-8">
          Click Below to RSVP for GIM
        </h3>
        <a
          href="https://gdg.community.dev/events/details/google-gdg-on-campus-walchand-college-of-engineering-sangli-india-presents-g-verse-20/"
          className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition duration-300 text-lg font-semibold shadow-md"
        >
          RSVP Now
        </a>

        <div className="mt-8 mb-8">
          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
            Click Below to Download The GDSC Quiz App
          </h3>
          <h6 className="text-white mb-6 text-sm">(It is Mandatory)</h6>
          <a
            href="/GDSC/G-Verse.apk" download 
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 text-lg font-semibold shadow-md"
          >
            Download App
          </a>
        </div>

        <div className="mt-8 mb-8">
          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-8">
            Click Below to Join GDSC Community Whatsapp Group
          </h3>
          <a
            href="https://chat.whatsapp.com/JVFMO1MLQnAAJCeSMra4JF"
            className="px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-white-600 transition duration-300 text-lg font-semibold shadow-md"
          >
            Join Group
          </a>
        </div>
      </div>

      <div className="footer-container py-3 md:py-12 flex justify-start flex-wrap items-center bg-black">
        <div className="GDSC-details px-5 flex flex-col space-y-3">
          <a className="GDSC-logo" href="/">
            <img
              alt="GDSC"
              src={Logo2}
              width="225"
              height="225"
              decoding="async"
              data-nimg="1"
              className="w-16 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-20 object-cover"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </a>
          <div className="GDSC-Powered-by font-bold text-lg text-white">
            GDSC-WCE powered by Google Developer Student Club
          </div>
          <a
            target="_blank"
            className="WCE-address text-white"
            href="https://www.google.com/maps/place/Walchand+College+of+Engineering/@16.8457387,74.5992688,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc1237f52c65db5:0xa3535676176ded0a!8m2!3d16.8457387!4d74.6014575"
          >
            <span className="capitalize line-1">
              Walchand College of Engineering,
            </span>
            <br />
            <span className="capitalize line-2">
              Sangli, Maharashtra, 416416
            </span>
            <br />
            <span className="capitalize line-3">India.</span>
            <br />
          </a>
          <div className="social-links flex space-x-3">
            <a
              target="_blank"
              href="https://www.instagram.com/gdsc_wce/?hl=en"
            >
              <i className="fab fa-instagram text-white w-6 h-6" />
            </a>
            <a target="_blank" href="/#">
              <i className="fab fa-twitter text-white w-6 h-6" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCrwdrer13mWACqFNR8y6vgA"
            >
              <i className="fab fa-youtube text-white w-6 h-6" />
            </a>
            <a target="_blank" href="https://github.com/gdscwce">
              <i className="fab fa-github text-white w-6 h-6" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/gdsc-wce/mycompany/"
            >
              <i className="fab fa-linkedin text-white w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
