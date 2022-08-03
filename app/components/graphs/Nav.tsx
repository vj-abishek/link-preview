import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.body.classList.contains("dark"));
  }, [dark]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDark(document.body.classList.toggle("dark"));
  };
  return (
    <div className="w-full flex justify-between p-4 sticky top-0 bg-blue-500 dark:bg-slate-800 shadow-xl">
      <Link to="/">
        <h1 className="uppercase text-xl text-white pl-4 font-bold">
          Link Preview
        </h1>
      </Link>
      <button className="mr-10" onClick={handleClick}>
        {typeof document !== "undefined" && dark ? "🌞" : "🌙"}
      </button>
    </div>
  );
}
