import type { FC } from "react"
import type { StopWatch } from "../hooks/interval"
import { PlayButton, RefreshButton, StopButton } from "../atoms/icon-buttons"

export const StateButton: FC<Omit<StopWatch, "currentMs">> = (props) => {
    switch (props.condition) {
        case 'initialized':
            return <>
                <PlayButton icon={{ size: 50 }} button={{ onClick: props.start }} />
            </>
        case 'running':
            return <>
                <StopButton icon={{ size: 50 }} button={{ onClick: props.pause }} />
            </>
        case 'pausing':
            return <>
                <PlayButton icon={{ size: 50 }} button={{ onClick: props.restart }} />
                <RefreshButton icon={{ size: 50 }} button={{ onClick: props.reset }} />
            </>
    }
}
