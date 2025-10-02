import { use, type FC } from "react";
import { TimestampContext } from "../contexts/timestamps";
import { NotificationContext } from "../contexts/notification";
import { TimestampForm } from "../timestamp-form";

export const TimestampFormWithContext: FC<{ ms: number }> = ({ ms }) => {
    const ctx = use(TimestampContext);
    const notify = use(NotificationContext);
    return <TimestampForm timestamp={ms} onSave={(v) => {
        ctx.add({ label: v.label, ts: v.timestamp });
        notify(`success to save this timestamp: ${v.label}`);
    }} />
};
