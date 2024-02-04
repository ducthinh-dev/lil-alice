import Link from "next/link";

export default function Main() {
  return (
    <>
      <h1>alice&#39;s home </h1>
      <div className="font-mono">
        <Link href="/artists/0001">
          <h3>21 Savage</h3>
        </Link>
        <Link href="/artists/0002">
          <h3>Post Malone</h3>
        </Link>
        <Link href="/artists/0003">
          <h3>Metro Boomin</h3>
        </Link>
      </div>
    </>
  );
}
