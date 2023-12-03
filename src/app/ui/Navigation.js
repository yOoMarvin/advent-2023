"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center pb-16 pt-4">
      <ul className="flex space-x-8 rounded-md bg-neutral-50 px-2 py-3">
        <li>
          <Link
            href="/"
            className={`nav__tab ${pathname == "/" ? "nav__tab--active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/advent-of-css"
            className={`nav__tab ${
              pathname == "/advent-of-css" ? "nav__tab--active" : ""
            }`}
          >
            Advent of CSS
          </Link>
        </li>
        <li>
          <Link
            href="/react-holiday"
            className={`nav__tab ${
              pathname == "/react-holiday" ? "nav__tab--active" : ""
            }`}
          >
            React Holiday
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
