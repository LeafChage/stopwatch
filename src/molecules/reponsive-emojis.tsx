import type { FC } from "react"
import { Emoji } from "../atoms/emoji";

export const ResponsiveEmojis: FC<{
    min: number,
    max: number,
    borderSize: "mobile"
    type: "running" | "walking" | "none"
}> = ({ type, min, max, borderSize }) => {
    if (type === "none") return <span></span>

    const emojis = [];
    for (let i = 0; i < min; i++) {
        emojis.push(<Emoji key={i} type={type} />);
    }
    for (let i = min; i < max; i++) {
        emojis.push(<span key={i} className={`is-hidden-${borderSize}`}><Emoji type={type} /></span>);
    }
    return <span >
        {emojis}
    </span >
}
