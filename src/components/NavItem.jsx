import { Link, useLocation } from "react-router-dom";

export const textDirectionStyle = {
  writingMode: "vertical-lr",
  textOrientation: "mixed",
  textShadow: ".2px 0px rgba(255,255,255, 1)"
};

export default function NavLink(props) {
  const linkStyles =
    "font-italiana p-5 tracking-wider uppercase antialiased flex justify-center items-center";
  // w-full

  return props.href ? (
    <a
      href={props.href}
      target="_blank"
      className={linkStyles}
      style={textDirectionStyle}
    >
      <span className="leading-[0]">{props.label}</span>
    </a>
  ) : (
    <Link
      to={props.to}
      className={linkStyles}
      style={{
        ...textDirectionStyle,
        ...(useLocation().pathname == props.to
          ? {
              backgroundColor: "white",
              color: "black",
              fontWeight: 600,
              textShadow: ".6px 0px rgba(0, 0, 0, 1)",
            }
          : { backgroundColor: "transparent", color: "white" }),
      }}
    >
      <span className="leading-[0]">{props.label}</span>
    </Link>
  );
}
