import type { FC } from "react"
import Running from '../assets/run.gif';
import Walking from '../assets/walk.gif';

export const Emoji: FC<{
    type: "running" | "walking"
}> = ({ type }) => {
    switch (type) {
        case "running":
            return <img src={Running} />
        case "walking":
            return <img src={Walking} />
    }
}
