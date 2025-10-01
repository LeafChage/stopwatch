import { createContext, useEffect, useState, type FC, type PropsWithChildren } from "react"
import { TimestampLog } from "../model/timestamp-log";
import { LabeledTimestamp } from "../model/labeled-timestamp";

const TimestampRepository = {
    key: "stopwatch.timestamps",
    load: (): TimestampLog | null => {
        const s = localStorage.getItem(TimestampRepository.key);
        if (s !== null) {
            return TimestampLog.parse(s);
        } else {
            return null;
        }
    },
    save: (logs: TimestampLog): void => {
        const json = TimestampLog.json(logs);
        localStorage.setItem(TimestampRepository.key, json);
    }
} as const;

type TimestampController = {
    logs: TimestampLog
    add: (ts: LabeledTimestamp) => void
    remove: (id: string) => void
};

export const TimestampContext = createContext<TimestampController>({
    logs: TimestampLog.init(),
    add: (_) => { throw "not prepare" },
    remove: (_) => { throw "not prepare" },
});

export const TimestampContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [logs, setLogs] = useState<TimestampLog>({});
    useEffect(() => {
        setLogs(() => TimestampRepository.load() ?? {});
    }, [])

    const add = (ts: LabeledTimestamp) => {
        const newLogs = TimestampLog.add(logs, ts);
        TimestampRepository.save(newLogs)
        setLogs({ ...newLogs });
    }

    const remove = (id: string) => {
        if (TimestampLog.remove(logs, id)) {
            TimestampRepository.save(logs)
            setLogs({ ...logs });
        }
    }
    return <TimestampContext value={{
        logs,
        add,
        remove,
    }}>
        {children}
    </TimestampContext>
}
