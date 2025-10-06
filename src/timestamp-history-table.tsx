import type { FC } from "react";
import { TimeText } from "./atoms/time";
import type { TimestampLog } from "./model/timestamp-log";

export const TimestampHistoryTable: FC<{
    logs: TimestampLog,
    onDelete: (id: string) => void
}> = ({ logs, onDelete }) => {
    const lines = [];
    let sum = 0;
    for (const [key, v] of Object.entries(logs)) {
        sum += v.ts;
        lines.push(<tr key={key}>
            <td>{v.label}</td>
            <td><TimeText ms={v.ts} /></td>
            <td>{v.createdAt}</td>
            <td>
                <button className="button is-small is-danger" onClick={() => onDelete(key)}>
                    delete
                </button>
            </td>
        </tr>)
    }

    return <table className="table is-fullwidth">
        <thead>
            <tr>
                <th><abbr title="label">label</abbr></th>
                <th><abbr title="Timestamp">timestamp</abbr></th>
                <th><abbr title="Created">created</abbr></th>
                <th><abbr title="Delete"></abbr></th>
            </tr>
        </thead>
        <tbody> {lines} </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <th><TimeText ms={sum} /></th>
                <th></th>
                <th></th>
            </tr>
        </tfoot>
    </table>;
}
