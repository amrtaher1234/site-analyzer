import DemoForm from "./components/demo-form";
import LandingNav from "./components/landing-nav";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <LandingNav />
      <main className="prose lg:prose-lg md:max-w-3xl lg:max-w-5xl mx-auto bg-base-100 py-8 lg:py-24 pt-20">
        <section className="text-center">
          <h1>
            Peak Performance in Content and{" "}
            <span className="relative whitespace-nowrap ">
              Search Rankings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 absolute -right-8 top-4 text-success">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </span>
          </h1>
          <p>
            Welcome to ContentClimber, where your content doesn't just rise—it soars. As
            your ultimate ally in the digital marketplace, ContentClimber is designed to
            elevate your content and search query performance beyond the reach of your
            competitors. Embrace the ascent to unparalleled visibility and engagement with
            our state-of-the-art SaaS platform.
          </p>

          <ul className="p-2  list-none text-sm">
            <li className="flex gap-1">
              <CheckIcon className="h-6 w-6 text-success" />
              So easy that you provide your content description
            </li>
            <li className="flex gap-1">
              <CheckIcon className="h-6 w-6 text-success" />
              Provide search queries you are targetting{" "}
            </li>
            <li className="flex gap-1">
              <CheckIcon className="h-6 w-6 text-success" />
              Boom! A modified content that will rank you higher among your competitors{" "}
            </li>
          </ul>

          <video
            controls
            src="https://poopup.co/feature_1.mp4"
            loop
            autoPlay
            muted
            className="w-[300px] h-auto m-auto mb-10 rounded-lg"
          />

          {/* <button className="btn btn-accent btn-wide group ">
            Try it out{" "}
            <ArrowLongRightIcon className="h-5 w-5 hover:scale-125 transition" />
          </button> */}
        </section>

        <h2 id="try-it-out">Try it out!</h2>
        <DemoForm />
      </main>
    </>
  );
}
