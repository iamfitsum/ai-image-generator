import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      {/* TODO: Left */}
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />

        <div>
          <h1 className="font-bold">
            The VIBE <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL-E 2, ChatGPT & Microsoft Azure!
          </h2>
        </div>
      </div>

      {/* TODO: Right */}
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href="https://portfolio-nextjs-git-main-iamfitsum.vercel.app/"
          className="px-2 font-light text-right"
          target="_blank"
          rel="noreferrer"
        >
          Check Out My Other Builds!
        </Link>
        <Link
          href="https://github.com/iamfitsum"
          className="px-2 font-light"
          target="_blank"
          rel="noreferrer"
        >
          Github Profile
        </Link>
      </div>
    </header>
  );
}

export default Header;
