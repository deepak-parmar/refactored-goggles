import projects from "../projects.json";
import Card from "./Card2";

export default function Work() {
  return (
    <>
      {/* <div className="p-4">
        <h2 className="font-italiana text-3xl leading-none tracking-widest uppercase">
          Welcome, browse some of my work down below...
        </h2>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-[1px] bg-white">
        {/* grid grid-cols-1 md:grid-cols-2 gap-4 p-4 */}
        {/* table-auto border-collapse divide-y */}
        {/* col-span-full  */}
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            desc={project.desc}
            live={project.live}
            source={project.source}
            bgImg={project.bgImg}
            tools={project.tools}
            bgPosition={project.bgPosition ? project.bgPosition : undefined}
          />
        ))}
      </div>
    </>
  );
}
