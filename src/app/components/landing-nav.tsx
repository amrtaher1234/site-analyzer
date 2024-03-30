import config from "../config";

export default function LandingNav() {
  return (
    <div className="navbar px-6">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">{config.appName}</span>
      </div>
      <div className="flex gap-2">
        <a className="link ">Home</a>
        <a href="#try-it-out" className="link ">
          Try it out
        </a>
      </div>
    </div>
  );
}
