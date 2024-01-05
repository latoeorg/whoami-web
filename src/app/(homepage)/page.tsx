"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="container flex-1 flex flex-col justify-center">
      <section className="max-w-[800px]">
        <p className="border inline-block mb-4 px-2 py-1 rounded-lg text-sm">
          👋 Sugeng rawuh!
        </p>

        <h2 className="text-2xl md:text-5xl font-bold">
          API Provider for your{" "}
          <Typewriter
            options={{
              strings: ["Personal Website", "Portfolio"],
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
          />
        </h2>

        <p className="text-muted-foreground text-lg mt-5">
          Created an API Provider for your website,{" "}
          <span className="hidden md:inline">
            enabling smooth integration with external services for dynamic
            content
          </span>{" "}
          and enhanced user experience.
        </p>

        <div className="mt-10">
          <Link href={"/"}>
            <p className="group text-lg">
              <span className="me-2">{">"}</span>
              <span className="group-hover:underline">Get Started!</span>
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
