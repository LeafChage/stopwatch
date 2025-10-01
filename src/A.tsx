import { use, useRef, type ComponentProps, type FC } from 'react'
import { useStopwatch, type StopWatchCondition } from './hooks/interval';
import { TimeText } from './atoms/time';
import { TimestampForm } from './timestamp-form';
import { StateButton } from './organisms/state-button';
import { ResponsiveEmojis } from './molecules/reponsive-emojis';
import { Modal, ModalButton } from './molecules/modal';
import { TimestampHistoryTable } from './timestamp-history-table';
import { ConfigContext } from './contexts/config';
import { TimestampContext, TimestampContextProvider } from './contexts/timestamps';

const emojiType = (condition: StopWatchCondition, showing: boolean): ComponentProps<typeof ResponsiveEmojis>["type"] => {
    if (!showing) {
        return "none"
    }
    return condition === "running" ? "running" : "walking"
}

export const A: FC = ({ }) => {
    const stopwatch = useStopwatch()
    const config = use(ConfigContext);

    const ref = useRef<HTMLDivElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);

    const InnerTimestampForm: FC<{ ms: number }> = ({ ms }) => {
        const ctx = use(TimestampContext);
        return <TimestampForm timestamp={ms} onSave={(v) => {
            ctx.add({ label: v.label, ts: v.timestamp });
        }} />
    };
    const InnerTimestampHistoryTable: FC<{}> = () => {
        const ctx = use(TimestampContext);
        const onDelete = (id: string) => {
            ctx.remove(id);
        }
        return <TimestampHistoryTable logs={ctx.logs} onDelete={onDelete} />
    };
    return <>
        <div className="container has-text-centered">
            <p className="title is-size-0-tablet is-size-1-mobile">
                <ResponsiveEmojis
                    type={emojiType(stopwatch.condition, config.isShowingImage)}
                    min={1}
                    max={3}
                    borderSize="mobile"
                />
                <TimeText ms={stopwatch.currentMs} />
                <ResponsiveEmojis
                    type={emojiType(stopwatch.condition, config.isShowingImage)}
                    min={1}
                    max={3}
                    borderSize="mobile"
                />
            </p>
            <p>
                <StateButton {...stopwatch} />
            </p>
            <ModalButton ref={ref} className="button">save</ModalButton>
            <ModalButton ref={historyRef} className="button">history</ModalButton>
        </div>
        <TimestampContextProvider>
            <Modal ref={ref} >
                <InnerTimestampForm ms={stopwatch.currentMs} />
            </Modal>
            <Modal ref={historyRef} >
                <InnerTimestampHistoryTable />
            </Modal>
        </TimestampContextProvider>
    </>
}



