import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="mb-4 w-44 h-44 object-contain"
      />
      <h1 className="font-semibold font-title text-amber-800 text-center text-xl md:text-4xl uppercase tracking-widest">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
