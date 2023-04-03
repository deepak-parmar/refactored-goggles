export default function Card(props) {
  const cardBackgroundStyles = props.bgImg
    ? {
        backgroundImage: `url(/work/${props.bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: props.bgPosition ? props.bgPosition : "center",
      }
    : { backgroundColor: "gray" };

  return (
    <div className="group" style={cardBackgroundStyles}>
      <div className="h-full flex flex-col gap-4 lg:flex-row items-stretch justify-between p-8 bg-black/60 backdrop-blur-xl">
        {/* bg-black/60 backdrop-blur-xl */}

        <div>
          {/* short description */}
          <div className="text-gray-200 text-sm font-space-mono font-light tracking-wider leading-none uppercase">
            {props.desc}
          </div>

          {/* project title */}
          <div className="text-3xl font-anton font-medium tracking-wider leading-none pt-3 pb-12 uppercase">
            {props.title}
          </div>

          <div className="flex flex-wrap gap-1 text-gray-200">
            {/* project tools */}
            <span className="text-sm font-space-mono font-medium leading-none tracking-wide uppercase flex flex-wrap gap-1">
              {/* display tools seperated by middot */}
              {props.tools.map((tool) => (
                <>
                  {tool}
                  {tool !== props.tools[props.tools.length - 1] ? (
                    <span>·</span>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </span>
          </div>
        </div>

        <div className="self-end lg:invisible flex group-hover:visible">
          {/* source code link if provided */}
          {props.source ? (
            <CardLink
              key={props.title + "source"}
              href={props.source}
              label={props.title}
              type="source"
            />
          ) : (
            <></>
          )}

          {/* live link */}
          <CardLink
            key={props.title + "live"}
            href={props.live}
            label={props.title}
            type="live"
          />
        </div>
      </div>
    </div>
  );
}

function CardLink(props) {
  const iconUrl = `/icons/${
    props.type == "live" ? "arrow-up-right" : "code"
  }.svg`;

  const label =
    props.type == "live"
      ? `Visit ${props.label} live`
      : `View ${props.label} source code`;
  return (
    <a
      className={`h-10 w-10 flex justify-center items-center transition-[border] border border-transparent hover:border-white/50 focus:bg-white/10`}
      href={props.href}
      target="_blank"
      title={label}
      aria-label={label}
    >
      <img src={iconUrl} width={24} height={24} alt={label} />
    </a>
  );
}
