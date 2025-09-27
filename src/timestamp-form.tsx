import type { FC } from "react";
import { TimeText } from "./atoms/time";

export const TimestampForm: FC<{ timestamp: number }> = ({ timestamp }) => {
    return <>
        <div className="field">
            <label className="label">Timestamp</label>
            <div className="control">
                <p><TimeText ms={timestamp} /></p>
            </div>
        </div>
        <div className="field">
            <label className="label">Label</label>
            <div className="control">
                <input className="input" type="text" placeholder="type a name of the timestamp" />
            </div>
        </div>
    </>
}
