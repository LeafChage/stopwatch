import type { FC } from "react";
import { TimeText } from "./atoms/time";
import type { TimestampLog } from "./model/timestamp-log";

export const TimestampHistoryTable: FC<{ logs: TimestampLog }> = ({ logs }) => {
    const lines = [];
    for (const [key, v] of logs) {
        lines.push(<tr key={key}>
            <td>{v.label}</td>
            <td><TimeText ms={v.ts} /></td>
            <td> <button className="button is-small is-danger">delete</button> </td>
        </tr>)
    }

    return <table className="table is-fullwidth">
        <thead>
            <tr>
                <th><abbr title="label">Label</abbr></th>
                <th><abbr title="Timestamp">Ts</abbr></th>
                <th><abbr title="Delete"></abbr></th>
            </tr>
        </thead>
        <tfoot>
        </tfoot>
        <tbody>
            {lines}
        </tbody>
    </table>
}
