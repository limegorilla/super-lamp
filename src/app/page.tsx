import Link from "next/link";
import noise from "~/assets/images/noise.svg";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import FadeImage from "~/components/FadeImage";

export default function RootPage() {
  return (
    <>
      <header className="relative flex h-screen flex-col flex-wrap p-2 lg:flex-row">
        <div className="bg-white px-3 py-5 lg:absolute lg:z-10 lg:m-20 lg:max-w-[500px] lg:rounded-b-lg lg:p-5">
          <div className="h-24 lg:h-32" />
          <h1 className="mb-1 text-6xl font-medium lg:text-7xl">
            <span className="whitespace-nowrap">&lt;HelloWorld/&gt;</span>{" "}
            <span className="whitespace-nowrap">I&apos;m Liam</span>
          </h1>
          <p>
            Creating next-generation experiences accross the web &amp; mobile.
          </p>
        </div>
        <div className="relative flex-grow overflow-hidden rounded bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-400 via-yellow-500 to-blue-400 lg:mt-20">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={noise}
            fill
            className="absolute inset-0 object-cover opacity-25 brightness-100 contrast-150"
            alt={""}
          />
        </div>
      </header>

      {/* Featured */}
      <div className="p-5">
        <h2 className="text-3xl">Featured</h2>
        <h3>Hey ma - I made my own CLI!</h3>
        <h3>Content management - it&apos;s a ballache</h3>
        <h3>My toolkit - Q3 2023</h3>
      </div>

      {/* Projects */}
      <div className="p-5">
        <h2>My Work</h2>
        {/*  */}

        <div className="flex h-96 w-full justify-center rounded-lg">
          {" "}
          <FadeImage />
        </div>

        {/*  */}
        <h3>Xpence</h3>
        <h3>The Shore Group - Websites</h3>
        <h3>@limegorilla/ui</h3>
        <h3>nothorror</h3>
        <h3>super-lamp</h3>
      </div>
    </>
  );
}
