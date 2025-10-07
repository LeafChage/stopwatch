import { use, useRef, type ComponentProps, type FC } from 'react'
import { StopWatchCondition, useStopwatch } from '../hooks/interval';
import { TimeText } from '../atoms/time';
import { ResponsiveEmojis } from '../molecules/reponsive-emojis';
import { Modal, ModalButton } from '../molecules/modal';
import { DesignContext } from '../contexts/config';
import { TimestampFormWithContext } from '../organisms/timestamp-form-with-context';
import { PlayButton, RefreshButton, StopButton } from '../atoms/icon-buttons';
import { IoSave } from "react-icons/io5";

const emojiType = (condition: StopWatchCondition, showing: boolean): ComponentProps<typeof ResponsiveEmojis>["type"] => {
    if (!showing) {
        return "none"
    }
    return condition === "running" ? "running" : "walking"
}

export const StopwatchBody: FC = ({ }) => {
    const stopwatch = useStopwatch()
    const { isShowingImage } = use(DesignContext)

    const ref = useRef<HTMLDivElement>(null);

    const emoji = <ResponsiveEmojis
        type={emojiType(stopwatch.condition, isShowingImage)}
        min={1}
        max={3}
        borderSize="mobile"
    />
    return <>
        <div className="container has-text-centered">
            <p className="title is-size-0-tablet is-size-1-mobile">
                {emoji}
                <TimeText ms={stopwatch.currentMs} />
                {emoji}
            </p>
            <p>
                <PlayButton icon={{ size: 50 }} button={{ hidden: !StopWatchCondition.playable(stopwatch.condition), onClick: stopwatch.start }} />
                <PlayButton icon={{ size: 50 }} button={{ hidden: !StopWatchCondition.replayable(stopwatch.condition), onClick: stopwatch.restart }} />
                <ModalButton ref={ref} hidden={!StopWatchCondition.refreshable(stopwatch.condition)}> <IoSave size={50} /> </ModalButton>
                <StopButton icon={{ size: 50 }} button={{ hidden: !StopWatchCondition.stoppable(stopwatch.condition), onClick: stopwatch.pause }} />
                <RefreshButton icon={{ size: 50 }} button={{ hidden: !StopWatchCondition.refreshable(stopwatch.condition), onClick: stopwatch.reset }} />
            </p>
        </div>
        <Modal ref={ref} >
            <TimestampFormWithContext ms={stopwatch.currentMs} />
        </Modal>
    </>
}



