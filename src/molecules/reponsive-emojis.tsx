import type { FC } from "react"
import { Emoji } from "../atoms/emoji";

export const ResponsiveEmojis: FC<{
    min: number,
    max: number,
    borderSize: "mobile"
    type: "running" | "walking"
}> = ({ type, min, max, borderSize }) => {
    const emojis = [];
    for (let i = 0; i < min; i++) {
        emojis.push(<Emoji key={i} type={type} />);
    }
    for (let i = min; i < max; i++) {
        emojis.push(<span className={`is-hidden-${borderSize}`}><Emoji key={1} type={type} /></span>);
    }
    return <span>
        {emojis}
    </span >
}
