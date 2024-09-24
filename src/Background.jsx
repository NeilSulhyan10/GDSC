import bg1 from "./assets/2.png";

export default function Background() {
  return (
    <>
      <img
          src={bg1}
          alt=""
          className="w-full sm:w-full md:w-full h-auto animate-spin-slow"
        />
    </>
  );
}
