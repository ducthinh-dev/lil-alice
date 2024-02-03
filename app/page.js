import Link from "next/link";

export default function Main() {
  return (
    <>
      <div className="styles.grid">
        <Link href="/hello/AliceSayHi">
          <h1 className="text-xl font-bold">welcome to alice home</h1>
        </Link>
        <a className="styles.car">
          <h2>get to know alice</h2>
          <p className="line-through">everything you should know about</p>
        </a>
      </div>
      <div className="grid">
        <Link href="/hello/AliceSayHi/savage">click here</Link>
      </div>
    </>
  );
}
