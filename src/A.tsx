import { useRef, type FC } from 'react'
import { useStopwatch } from './hooks/interval';
import { TimeText } from './atoms/time';
import { TimestampForm } from './timestamp-form';
import { StateButton } from './organisms/state-button';
import { ResponsiveEmojis } from './molecules/reponsive-emojis';
import { Modal, ModalButton } from './molecules/modal';
import { TimestampHistoryTable } from './timestamp-history-table';
import { Developing } from './atoms/developing';

export const A: FC = ({ }) => {
    const stopwatch = useStopwatch()

    const ref = useRef<HTMLDivElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);
    return <>
        <div className="container has-text-centered">
            <p className="title is-size-0-tablet is-size-1-mobile">
                <ResponsiveEmojis
                    type={stopwatch.condition === "running" ? "running" : "walking"}
                    min={1}
                    max={1}
                    borderSize="mobile"
                />
                <TimeText ms={stopwatch.currentMs} />
                <ResponsiveEmojis
                    type={stopwatch.condition === "running" ? "running" : "walking"}
                    min={1}
                    max={1}
                    borderSize="mobile"
                />
            </p>
            <p>
                <StateButton {...stopwatch} />
            </p>
            <ModalButton ref={ref} className="button">save</ModalButton>
            <ModalButton ref={historyRef} className="button">history</ModalButton>
        </div>
        <Modal ref={ref} >
            <Developing />
            <TimestampForm timestamp={stopwatch.currentMs} />
        </Modal >
        <Modal ref={historyRef} >
            <Developing />
            <TimestampHistoryTable logs={new Map([
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C001", { label: "あのときの01", ts: 1000100 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C002", { label: "あのときの02", ts: 1000200 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C003", { label: "あのときの03", ts: 1000300 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C004", { label: "あのときの04", ts: 1000400 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C006", { label: "あのときの06", ts: 1000600 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C007", { label: "あのときの07", ts: 1000700 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C008", { label: "あのときの08", ts: 1000800 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C009", { label: "あのときの09", ts: 1000900 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C000", { label: "あのときの00", ts: 1000000 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C011", { label: "あのときの11", ts: 1001100 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C012", { label: "あのときの12", ts: 1001200 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C013", { label: "あのときの13", ts: 1001300 }],
                ["0CCA5198-F6A2-4BB4-9505-4D5394B4C014", { label: "あのときの14", ts: 1001400 }],
            ])} />
        </Modal >
    </>
}



