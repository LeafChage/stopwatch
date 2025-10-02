import { type FC, type PropsWithChildren } from "react";
import { Color } from "../bulma";

const colorAttribute = (
    color: Color,
    isLight: boolean
): string => {
    const attribute = Color.attribute(color)
    if (isLight) {
        return attribute + " is-light"
    }
    return attribute
}

export const Notification: FC<PropsWithChildren<{
    color: Color,
    isLight?: boolean
}>> = ({ children, color, isLight = false }) => {
    return <div className={`notification ${colorAttribute(color, isLight)}`}>
        {children}
    </div>
}
