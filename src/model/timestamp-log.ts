import { v4 as uuid } from "uuid";
import type { LabeledTimestamp } from "./labeled-timestamp";

export type TimestampLog = Map<string, LabeledTimestamp>;

type Self = TimestampLog;
export const TimestampLog = {
  new: (): Self => new Map(),
  add: (self: Self, ts: LabeledTimestamp): Self => self.set(uuid(), ts),
  remove: (self: Self, id: string): boolean => self.delete(id),
  json: (self: Self): string => JSON.stringify(self),
  parse: (json: string): Self => JSON.parse(json) as Self,
} as const;


