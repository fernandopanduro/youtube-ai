import Link from "next/link";
import Logo from "./logo";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 fixed top-0 left-0 z-50">
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href={"/"}> Home</Link>
          </li>
          <li>
            <Link href={"/youtube"}>Youtube AI</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
