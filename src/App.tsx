import React, { useMemo } from "react";
import "./index.css";
import { Menu } from "./components/Menu";
import { Timetable } from "./components/Timetable";
import { DIRECTIONS } from "./data/order";

type Direction = "CAJ-CBO" | "CBO-CAJ" | "CAJ-CDO" | "CDO-CAJ";

export default function App() {
  const [direction, setDirection] = React.useState<Direction>("CAJ-CBO");
  const [saturdayOn, setSaturdayOn] = React.useState(false);

  const theme = (direction === "CAJ-CBO" || direction === "CBO-CAJ")
    ? "theme-red" : "theme-blue";

  const activeIndex = useMemo(
    () => DIRECTIONS.indexOf(direction),
    [direction]
  );

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
