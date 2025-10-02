import type { FC } from "react";
import { TimeText } from "./atoms/time";
import type { TimestampLog } from "./model/timestamp-log";
import { Notification } from "./atoms/notification";

export const TimestampHistoryTable: FC<{
    logs: TimestampLog,
    onDelete: (id: string) => void
}> = ({ logs, onDelete }) => {
    const lines = [];
    for (const [key, v] of Object.entries(logs)) {
        lines.push(<tr key={key}>
            <td>{v.label}</td>
            <td><TimeText ms={v.ts} /></td>
            <td>
                <button className="button is-small is-danger" onClick={() => onDelete(key)}>
                    delete
                </button>
            </td>
        </tr>)
    }

    return lines.length === 0 ? <Notification color={"primary"}>There're not records. You can create record history.</Notification>
        : (<table className="table is-fullwidth">
            <thead>
                <tr>
                    <th><abbr title="label">Label</abbr></th>
                    <th><abbr title="Timestamp">Ts</abbr></th>
                    <th><abbr title="Delete"></abbr></th>
                </tr>
            </thead>
            <tbody>
                {lines}
            </tbody>
        </table>)
}
