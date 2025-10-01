import type { FC, FormEventHandler } from "react";
import { Timestamp } from "./model/timestamp";

export const TimestampForm: FC<{
    timestamp: number,
    onSave: (values: { timestamp: number, label: string }) => void
}> = ({ timestamp, onSave }) => {
    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const label = (form.get("label") || "") as string;
        onSave({ timestamp, label })
    };
    return <form onSubmit={onSubmit}>
        <div className="field">
            <label className="label">Timestamp</label>
            <div className="control">
                <input className="input" readOnly disabled value={Timestamp.fmt(timestamp)} />
            </div>
        </div>
        <div className="field">
            <label className="label">Label</label>
            <div className="control">
                <input className="input" name="label" type="text" placeholder="type a name of the timestamp" />
            </div>
        </div>
        <div className="field">
            <input type="submit" className="button" value="save" />
        </div>
    </form>
}
