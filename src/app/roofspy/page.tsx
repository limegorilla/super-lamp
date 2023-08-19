import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import noise from "~/assets/images/noise.svg";
import roofDown from "~/assets/images/me-roof-down.jpeg";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function RoofSpyPage() {
  const res: {
    roofStatus: "up" | "down" | "unknown";
    lastUpdated: Date;
  } = {
    roofStatus: "down",
    lastUpdated: new Date(new Date().getHours() - 1),
  };

  // Check if lastUpdated is within the last 24h
  const date = new Date();

  return (
    <div className="grid h-screen w-screen place-items-center">
      {res.roofStatus === "down" ? (
        <Image
          fill
          className="object-cover"
          src={roofDown}
          alt="Liam has had his roof down today!"
        />
      ) : (
        <div className="absolute h-full w-full flex-grow overflow-hidden rounded bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-400 via-yellow-500 to-blue-400">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={noise}
            fill
            className="absolute inset-0 object-cover opacity-25 brightness-100 contrast-150"
            alt={""}
          />
        </div>
      )}
      <div className="z-10 m-10 flex max-w-lg flex-col gap-5 rounded-xl bg-primary/10 p-10 text-primary-foreground backdrop-blur">
        <span className="font-medium flex text-lg items-center">
          <MagnifyingGlassIcon className="h-5 w-5" />
          RoofSpy
        </span>
        <h1
          className="text-5xl"
          dangerouslySetInnerHTML={{
            __html:
              res.roofStatus == "down"
                ? "Liam <em>has</em> had his roof down today!"
                : "Sadly it doesn't look like Liam's had his roof down <em>(yet)</em> today",
          }}
        />
        <div>
          <h2 className="text-2xl">What is this?</h2>
          <p>
            Powered by an early demo of CarKit - an exploratory system for
            connecting previous-generation cars to modern systems - this is a
            slapped together &quot;reporting&quot; tool to see if I have my roof
            down. Nothing more, nothing less.
          </p>
          <h2 className="mt-2 text-2xl">How does this work?</h2>
          <p>
            Inside my car, intercepting commands for the control unit for my
            MX-5&apos;s roof is a low-powered Raspberry Pi. That keeps track of
            my roof&apos;s state, and relays it via Bluetooth to my phone when
            connected. My phone then sends that data to a server, which is what
            you&apos;re seeing here.
            <br />
            Jank? Yes. :)
          </p>
        </div>
        <p className="font-mono">
          This request: {date.toLocaleDateString()} {date.toLocaleTimeString()}
          <br />
          Last updated: {res.lastUpdated.toLocaleDateString()}{" "}
          {res.lastUpdated.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
