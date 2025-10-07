import type { FC } from "react";
import { WalkButton, WalkOutlineButton } from "../atoms/icon-buttons";

export const ToggleWalkButton: FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    { on: boolean }
> = (props) => {
    return props.on ?
        <WalkOutlineButton button={props} icon={{ size: 50, }} /> :
        <WalkButton button={props} icon={{ size: 50, }} />
}
