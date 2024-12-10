import Link from "next/link";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="kanji">
        Kanji List
      </Link>
    </nav>
  );
}
