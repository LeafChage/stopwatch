import type { FC } from "react";
import { Timestamp } from "../model/timestamp";

export const TimeText: FC<{ ms: number }> = ({ ms }) => {
    return <span>{Timestamp.fmt(ms)}</span>
}
