import NavLink, { textDirectionStyle } from "./NavItem";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-full w-10 flex flex-col justify-between items-center border-r">
      <div
        className="font-italiana text-right lg:text-left text-white uppercase text-lg/[0] tracking-widest antialiased pt-2.5"
        // pt-[4.3rem]
        style={{
          ...textDirectionStyle,
          // textShadow: "0.2px 0px rgb(255, 255, 255)",
        }}
      >
        Web Developer
      </div>

      <div className="flex flex-col flex-wrap justify-end items-center">
        <NavLink to="/" label="work" />
        <NavLink to="/contact" label="contact" />
        <NavLink
          href="https://drive.google.com/file/d/18a8BgLMiYk_olOXKbND3d5xOsMabaD3b/view"
          label="résumé"
        />

        {/* <span className="my-1.5" /> */}

        {/* <a
          className="py-3 px-2"
          href="https://www.linkedin.com/in/deepak-prmr/"
          target="_blank"
          aria-label="LinkedIn profile"
        >
          <img src="/icons/linkedin.svg" width={24} height={24} alt="" />
        </a>

        <a
          className="py-3 px-2"
          href="https://github.com/deepak-parmar/"
          target="_blank"
          aria-label="GitHub profile"
        >
          <img src="/icons/github.svg" width={24} height={24} alt="" />
        </a> */}
      </div>
    </nav>
  );
}
