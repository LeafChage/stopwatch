import type { FC } from "react";
import type { IconBaseProps } from "react-icons";
import {
    IoPlayCircle,
    IoStopCircle,
    IoRefreshCircle,
    IoWalk,
    IoWalkOutline,
} from "react-icons/io5";


const generateIconButton = (Icon: FC): FC<{ button: React.ButtonHTMLAttributes<HTMLButtonElement>, icon: IconBaseProps }> => {
    return (props) => {
        return <button {...props.button}>
            <Icon {...props.icon} />
        </button>
    }
};

export const PlayButton = generateIconButton(IoPlayCircle)
export const StopButton = generateIconButton(IoStopCircle)
export const RefreshButton = generateIconButton(IoRefreshCircle)
export const WalkButton = generateIconButton(IoWalk)
export const WalkOutlineButton = generateIconButton(IoWalkOutline)
