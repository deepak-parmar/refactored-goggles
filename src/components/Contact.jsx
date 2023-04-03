export default function Contact() {
  const styles = "bg-zinc-950 text-3xl p-8";

  return (
    <form className="h-full grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-[1px] bg-white">
      <input
        className={styles}
        type="email"
        name=""
        id=""
        placeholder="Email"
      />
      <input className={styles} type="text" placeholder="Name" />
      <textarea
        className={"col-span-full " + styles}
        name=""
        id=""
        rows="8"
        placeholder="Message..."
      ></textarea>
      <button className={styles} type="reset">RESET</button>
      <button className={styles} type="submit">SEND</button>
    </form>
  );
}
