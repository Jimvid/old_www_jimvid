import Link from "next/link";
import Icon from "./Icon";

export default function Header() {
  return (
    <div className="flex justify-between mb-separator">
      <Link href="/" className="cursor-pointer">
        <a>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="26"
              height="26"
              rx="3"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M9.98002 9.10443L12.4353 15.0119C12.9487 16.2471 14.6997 16.2434 15.208 15.0061L17.6314 9.10635C17.7084 8.91879 17.8911 8.79633 18.0939 8.79633H19.0025C19.3565 8.79633 19.5984 9.15407 19.4666 9.48258L15.2742 19.927C15.1981 20.1166 15.0144 20.2408 14.8102 20.2408H12.6915C12.4875 20.2408 12.304 20.1169 12.2277 19.9277L8.01755 9.48326C7.88509 9.15465 8.12699 8.79633 8.48129 8.79633H9.51831C9.72032 8.79633 9.90249 8.91789 9.98002 9.10443Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </a>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/snippets">
              <a>Snippets</a>
            </Link>
          </li>
          <li>|</li>
          <li>
            <a
              href="https://github.com/Jimvid/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="github.svg" />
            </a>
          </li>
          <li>
            <a href="mailto:victor@jimvid.com">
              <Icon icon="email.svg" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
