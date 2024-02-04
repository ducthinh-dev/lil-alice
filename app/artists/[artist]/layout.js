import Link from "next/link";

export default function ArtistLayout({ children }) {
  return (
    <>
      {children}
      <Link href="/" className="">🔙</Link>
    </>
  );
}
