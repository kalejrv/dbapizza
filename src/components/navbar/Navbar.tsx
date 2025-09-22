import { Link } from "react-router-dom";
import { useScreenMobile } from "../../hooks";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

export const Navbar = (): JSX.Element => {
  const { mobile } = useScreenMobile();

  return (
    <nav className="w-full p-2 xl:px-0 flex justify-between items-center">
      <Link to="/" className="text-3xl text-red-500 font-logo font-bold">DBAPizza</Link>

      {mobile ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  );
};
