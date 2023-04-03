export default function Header() {
  return (
    <header className="fixed bg-zinc-950 ml-10 z-10 w-full h-14 px-2.5 flex flex-col justify-center border-b">
      <h1
        className="font-anton text-4xl/none text-white/90 uppercase antialiased flex"
        aria-label="Deepak Parmar"
      >
        <span>D</span>
        <span>e</span>
        <span>e</span>
        <span>p</span>
        <span className="-ml-1">/\</span>
        <span>k</span>
        <span>&nbsp;</span>
        <span>P</span>
        <span className="-ml-1">/\</span>
        <span>r</span>
        <span>m</span>
        <span>/\</span>
        <span>r</span>
      </h1>
    </header>
  );
}
