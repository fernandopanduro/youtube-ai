import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 fixed top-0 left-0 z-50 backdrop-blur-md border-b border-zinc-200">
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"/"}> Home</Link>
          </li>
          <li>
            <Link href={"/youtube"}>Youtube AI</Link>
          </li>
          <li>
            <Button>Login</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
