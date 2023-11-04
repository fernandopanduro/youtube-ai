import Link from "next/link";
import Logo from "./logo";
import { ToggleTheme } from "./toggle-theme";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full px-6 py-3 lg:px-8 fixed top-0 left-0 z-50 backdrop-blur-md border-b border-zinc-200/50">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <ToggleTheme />
            </li>
            {/* <li>
              <Button>
                <a
                  href="https://youtube-ai.ck.page/396aedec66"
                  target="_blank"
                  rel="noopener noreferrer">
                  Get Access
                </a>
              </Button>
            </li> */}
            {/* <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/youtube"}>Youtube AI</Link>
            </li>
            <li>
              <Button>
                <Link href={"/sign-in"}>Login</Link>
              </Button>
            </li>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
