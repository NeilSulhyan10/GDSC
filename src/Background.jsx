import bg1 from "./assets/2.png";

export default function Background() {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` , height:'1500px'}}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{marginTop:'50%',}}>
          <h1
            className="font-bold text-5xl sm:text-6xl md:text-9xl text-white mb-2 tracking-wide animate-bounce"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            G-Verse
          </h1>
          <h2
            className="font-bold text-5xl sm:text-6xl md:text-9xl text-blue-500 mb-2 tracking-wide animate-pulse"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            2.0
          </h2>
          <p className="text-lg sm:text-xl md:text-4xl text-gray-700 mb-4 animate-fadeIn delay-2000">
            Join us for an exciting tech adventure!
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-green-600 mt-10 animate-bounce">
            Scroll down to watch Teaser
          </p>
        </div>
      </div>
    </>
  );
}
