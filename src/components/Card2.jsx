export default function Card(props) {
  // const cardBackgroundStyles = props.bgImg
  //   ? {
  //       backgroundImage: `url(/work/${props.bgImg})`,
  //       backgroundSize: "cover",
  //       backgroundPosition: props.bgPosition ? props.bgPosition : "center",
  //     }
  //   : { backgroundColor: "gray" };

  return (
    <div className="group bg-zinc-950">
      <div className="w-full flex flex-col gap-4 lg:flex-row items-stretch justify-between p-8">
        <div className="w-full">
          {/* short description */}
          <div className="text-gray-200 font-space-mono font-light tracking-wider leading-none uppercase">
            {props.desc}
          </div>

          {/* project title */}
          <div className="text-3xl/none font-anton font-medium tracking-wider pt-2.5 pb-10 uppercase">
            {props.title}
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-wrap gap-1 text-gray-200">
              {/* project tools */}
              <span className="text-sm leading-none font-space-mono font-medium tracking-wide uppercase flex flex-wrap gap-1">
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

            <div className="lg:invisible flex group-hover:visible">
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
      </div>
    </div>
  );
}

function CardLink(props) {
  const label =
    props.type == "live"
      ? `Visit ${props.label} live`
      : `View ${props.label} source code`;

  const iconUrl = `${import.meta.env.BASE_URL}icons/${
    props.type == "live" ? "arrow-up-right" : "code"
  }.svg`;

  const classes =
    "w-10 h-10 flex justify-center items-center transition-[border] border border-transparent hover:border-white/50 focus:bg-white/10";

  return (
    <a
      className={classes}
      href={props.href}
      target="_blank"
      title={label}
      role="link"
      aria-label={label}
      style={{
        background: `url(${iconUrl}) no-repeat center center`,
      }}
    />
  );
}
