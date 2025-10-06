export type LabeledTimestamp = {
  ts: number,
  createdAt: string,
  label: string,
};

type Self = LabeledTimestamp;
export const LabeledTimestamp = {
  new: (label: string, ts: number): Self => {
    return { label, ts, createdAt: (new Date()).toLocaleString() }
  },
} as const;


