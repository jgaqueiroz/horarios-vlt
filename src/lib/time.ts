/** soma minutos a uma string "HH:mm" e devolve "HH:mm" */
export function addMinutes(hhmm: string, minutes: number): string {
  const [hh, mm] = hhmm.split(":").map(Number);
  const base = new Date(2000, 0, 1, hh, mm, 0);
  base.setMinutes(base.getMinutes() + minutes);
  const H = String(base.getHours()).padStart(2, "0");
  const M = String(base.getMinutes()).padStart(2, "0");
  return `${H}:${M}`;
}

/** expande uma linha: [t0] + offsets → [t0,t1,t2,...] */
export function buildRow(start: string, offsets: number[]): string[] {
  return offsets.reduce<string[]>((cols, mins) => {
    cols.push(addMinutes(cols.at(-1)!, mins));
    return cols;
  }, [start]);
}

/** dado um horário "HH:mm", retorna minutos desde 00:00 (para comparar) */
export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** pega o próximo horário >= agora (em minutos), senão null */
export function findNextIndex(times: string[], nowMinutes: number): number | null {
  for (let i = 0; i < times.length; i++) {
    if (toMinutes(times[i]) >= nowMinutes) return i;
  }
  return null;
}

/** devolve HH:mm da hora local atual */
export function nowHHMM(): string {
  const d = new Date();
  const H = String(d.getHours()).padStart(2, "0");
  const M = String(d.getMinutes()).padStart(2, "0");
  return `${H}:${M}`;
}
