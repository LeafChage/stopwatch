import { v4 as uuid } from "uuid";
import type { LabeledTimestamp } from "./labeled-timestamp";

export type TimestampLog = { [key: string]: LabeledTimestamp };

type Self = TimestampLog;
export const TimestampLog = {
  init: (): Self => ({}),
  add: (self: Self, ts: LabeledTimestamp): Self => {
    self[uuid()] = ts;
    return self
  },
  remove: (self: Self, id: string): boolean => {
    if (id in self) {
      delete self[id]
      return true;
    }
    return false;
  },
  json: (self: Self): string => JSON.stringify(self),
  parse: (json: string): Self => JSON.parse(json) as Self,
} as const;


