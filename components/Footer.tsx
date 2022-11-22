import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-separator flex flex-col justify-center items-center gap-2 sm:flex-row sm:justify-between">
      <div>© 2022 Victor Jimvid</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="mailto:victor@jimvid.com">Email</Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/victor-jimvid-11a375163/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Jimvid/"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
