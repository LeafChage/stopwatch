import { createContext, useState, type FC, type PropsWithChildren } from "react"
import { Notification } from "../atoms/notification";

type Notify = (text: string) => void;
export const NotificationContext = createContext<Notify>(() => { throw "fetal, not defined Notify " });

export const NotificationProvider: FC<PropsWithChildren<{
    lifetimeMs: number
}>> = ({ children, lifetimeMs }) => {
    const [items, setItems] = useState<{ [key: number]: string }>({});

    const notify = (text: string) => {
        const ts = Date.now();
        setItems((states) => ({ ...states, [ts]: text }));
        setTimeout(() => {
            setItems((states) => {
                delete states[ts];
                return ({ ...states })
            });
        }, lifetimeMs)
    }

    const notifications = []
    for (const [key, item] of Object.entries(items)) {
        notifications.push(
            <div key={key} style={{
                position: "absolute",
                width: "100%",
                zIndex: 100
            }}>
                <Notification color={"info"} >{item}</Notification>
            </div>
        )
    }
    return <NotificationContext value={notify}>
        {notifications}
        {children}
    </NotificationContext>
}

