import { useEffect, useMemo, useState } from "react";
import "./index.css";
import { Menu } from "./components/Menu";
import { Timetable } from "./components/Timetable";
import { DIRECTIONS } from "./data/order";

type Direction = "CAJ-CBO" | "CBO-CAJ" | "CAJ-CDO" | "CDO-CAJ";

export default function App() {
  const [direction, setDirection] = useState<Direction>("CAJ-CBO");
  const [saturdayOn, setSaturdayOn] = useState(false);

  const theme = (direction === "CAJ-CBO" || direction === "CBO-CAJ")
    ? "theme-red" : "theme-blue";

  const activeIndex = useMemo(
    () => DIRECTIONS.indexOf(direction),
    [direction]
  );

  const themeColor = useMemo(
    () => (direction === "CAJ-CBO" || direction === "CBO-CAJ") ? "#b10f0f" : "#141f75",
    [direction]
  );

  useEffect(() => {
    const setMeta = (name: string, content: string) => {
      let m = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };

    setMeta("theme-color", themeColor);
    setMeta("msapplication-TileColor", themeColor);
    setMeta("apple-mobile-web-app-status-bar-style", themeColor);
  }, [themeColor]);

  return (
    <div className={`mainwrapper ${theme}`}>
      {/* SLIDER */}
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="polite"
        >
          {DIRECTIONS.map((dir) => (
            <section
              key={dir}
              className="slide"
              aria-hidden={dir !== direction}
            >
              {/* cada slide tem sua própria área scrollável e thead sticky */}
              <Timetable direction={dir} saturdayOn={saturdayOn} />
            </section>
          ))}
        </div>
      </div>

      {/* MENU FIXO NO RODAPÉ */}
      <Menu
        direction={direction}
        setDirection={setDirection}
        saturdayOn={saturdayOn}
        setSaturdayOn={setSaturdayOn}
      />
    </div>
  );
}
