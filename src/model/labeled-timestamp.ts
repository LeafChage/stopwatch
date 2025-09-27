export type LabeledTimestamp = {
  ts: number,
  label: string,
};

type Self = LabeledTimestamp;
export const LabeledTimestamp = {
  new: (label: string, ts: number): Self => {
    return { label, ts }
  },
} as const;


