// Horários iniciais (apenas a 1ª partida; as demais serão calculadas)
export const starts = {
  "CAJ-CBO": [
    "05:35",
    "06:19",
    "07:10",
    "08:01",
    "08:52",
    "09:43",
    "10:34",
    "11:25",
    "12:16",
    "13:07",
    "13:58",
    "14:49",
    "15:40",
    "16:31",
    "17:25",
    "18:13",
    "19:04",
    "19:55",
    "20:46",
  ],
  "CBO-CAJ": [
    "05:26",
    "06:10",
    "07:01",
    "07:52",
    "08:43",
    "09:34",
    "10:25",
    "11:16",
    "12:07",
    "12:58",
    "13:49",
    "14:40",
    "15:31",
    "16:22",
    "17:16",
    "18:04",
    "18:55",
    "19:46",
  ],
  "CAJ-CDO": [
    "05:54",
    "07:28",
    "09:10",
    "10:52",
    "12:34",
    "14:16",
    "15:58",
    "17:44",
    "19:22",
  ],
  "CDO-CAJ": [
    "05:20",
    "06:53",
    "08:35",
    "10:17",
    "11:59",
    "13:41",
    "15:23",
    "17:10",
    "18:47",
    "20:09",
  ],
} as const;

// Tempos de trajeto entre estações (minutos)
export const legs = {
  "CAJ-CBO": [6 + 1, 5 + 2, 5 + 1, 10 + 1, 4], // CAJ→ANG→PON→PCA→SIN→CBO
  "CBO-CAJ": [4 + 1, 10 + 1, 5 + 2, 5 + 1, 6], // CBO→SIN→PCA→PON→ANG→CAJ
  "CAJ-CDO": [13 + 2, 8 + 1, 7], // CAJ→MAF→JOL→CDO
  "CDO-CAJ": [7 + 1, 8 + 2, 13], // CDO→JOL→MAF→CAJ
} as const;

// Índices a partir dos quais as viagens são “de sábado”
export const saturdayCut = {
  "CAJ-CBO": 11,
  "CBO-CAJ": 12,
  "CAJ-CDO": 4,
  "CDO-CAJ": 5,
} as const;

// Siglas das estações por direção
export const headers: Record<keyof typeof legs, string[]> = {
  "CAJ-CBO": ["CAJ", "ANG", "PON", "PCA", "SIN", "CBO"],
  "CBO-CAJ": ["CBO", "SIN", "PCA", "PON", "ANG", "CAJ"],
  "CAJ-CDO": ["CAJ", "MAF", "JOL", "CDO"],
  "CDO-CAJ": ["CDO", "JOL", "MAF", "CAJ"],
};
