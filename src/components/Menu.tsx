type Direction = "CAJ-CBO" | "CBO-CAJ" | "CAJ-CDO" | "CDO-CAJ";

interface Props {
  direction: Direction;
  setDirection: (d: Direction) => void;
  saturdayOn: boolean;
  setSaturdayOn: (v: boolean) => void;
}

export function Menu({
  direction,
  setDirection,
  saturdayOn,
  setSaturdayOn,
}: Props) {
  const btn = (label: string, value: Direction, color?: "red" | "blue") => {
    const selected = direction === value;
    const className = "menu" + (selected ? " menuSelected" : "");
    const style =
      color === "blue" && selected
        ? { backgroundColor: "#141f75", color: "white" }
        : undefined;

    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => setDirection(value)}
        aria-pressed={selected}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="menufooter">
      <div className="menu-row">
        {btn("CBO", "CAJ-CBO")}
        {btn("CAJ", "CBO-CAJ")}
        {btn("TIP", "CAJ-CDO", "blue")}
        {btn("CJS", "CDO-CAJ", "blue")}
        <button
          type="button"
          className={"menu" + (saturdayOn ? " menuSelected" : "")}
          onClick={() => setSaturdayOn(!saturdayOn)}
          aria-pressed={saturdayOn}
          aria-label="Ativar filtro de sábado (menos viagens)"
          title="Ativar filtro de sábado (menos viagens)"
        >
          SÁB
        </button>
      </div>
    </div>
  );
}
