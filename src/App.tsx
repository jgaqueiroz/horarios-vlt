import React, { useState } from "react";
import "./index.css";
import { Menu } from "./components/Menu";
import { Timetable } from "./components/Timetable";

type Direction = "CAJ-CBO" | "CBO-CAJ" | "CAJ-CDO" | "CDO-CAJ";

export default function App() {
  const [direction, setDirection] = useState<Direction>("CAJ-CBO");
  const [saturdayOn, setSaturdayOn] = useState(false);

  return (
    <div className="mainwrapper">
      <Menu
        direction={direction}
        setDirection={setDirection}
        saturdayOn={saturdayOn}
        setSaturdayOn={setSaturdayOn}
      />

      <div className="top">
        <div className="stations">
        </div>
      </div>

      <Timetable direction={direction} saturdayOn={saturdayOn} />
    </div>
  );
}
