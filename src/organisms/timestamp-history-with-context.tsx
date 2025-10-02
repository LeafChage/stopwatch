import { use, type FC } from "react";
import { TimestampContext } from "../contexts/timestamps";
import { NotificationContext } from "../contexts/notification";
import { TimestampHistoryTable } from "../timestamp-history-table";

export const TimestampHistoryWithContext: FC<{}> = () => {
    const ctx = use(TimestampContext);
    const notify = use(NotificationContext);
    const onDelete = (id: string) => {
        ctx.remove(id);
        notify(`success to remove this timestamp: ${id}`);
    }
    return <TimestampHistoryTable logs={ctx.logs} onDelete={onDelete} />
};
