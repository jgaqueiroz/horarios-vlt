import { useMemo } from "react";
import { buildRow, findNextIndex, nowHHMM, toMinutes } from "../lib/time";
import { headers, legs, saturdayCut, starts } from "../data/timetables";

type Direction = keyof typeof legs;

interface Props {
  direction: Direction;
  saturdayOn: boolean; // se true, exibe (ou destaca) linhas “de sábado”
}

export function Timetable({ direction, saturdayOn }: Props) {
  const cols = headers[direction];
  const offsets = legs[direction];
  const base = starts[direction];

  // gera todas as linhas a partir dos “starts” + offsets
  const rows = useMemo(
    () => base.map((s) => buildRow(s, Array.from(offsets))),
    [base, offsets]
  );

  // encontra “próximo horário” com base na primeira coluna (origem)
  const now = nowHHMM();
  const nowMin = toMinutes(now);
  const nextIdx = useMemo(() => findNextIndex(rows.map(r => r[0]), nowMin), [rows, nowMin]);

  return (
    <div className="table-wrapper" role="region" aria-label={`Horários ${direction}`}>
      <table>
        <thead>
          <tr>
            <th scope="col" className="trip-number"></th>
            {cols.map((c) => (
              <th key={c} scope="col">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const weekdayOnly = i > saturdayCut[direction];
            const shouldDim = saturdayOn && weekdayOnly;
            const isNext = nextIdx === i;

            return (
              <tr
                key={i}
                className={`${shouldDim ? "dim-saturday" : ""} ${isNext ? "highlight-row" : ""}`}
              >
                <td className="trip-number">{i + 1}</td>
                {r.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
