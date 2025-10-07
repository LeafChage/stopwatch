import { type FC, type PropsWithChildren, type RefObject } from "react"

export const changeModalState = (ref: RefObject<HTMLDivElement | null>, to: "open" | "close") => () => {
    if (!ref.current) return
    switch (to) {
        case "open":
            ref.current.className = "modal is-active"
            return
        case "close":
            ref.current.className = "modal"
            return
    }
}

export const Modal: FC<PropsWithChildren<{ ref: RefObject<HTMLDivElement | null> }>> = ({ ref, children }) => {
    const close = changeModalState(ref, "close");
    return <div ref={ref} className="modal">
        <div className="modal-background" onClick={close}></div>
        <div className="modal-content">
            {children}
        </div>
        <button className="modal-close is-large" aria-label="close"
            onClick={close}
        ></button>
    </div>
}

export const ModalButton: FC<PropsWithChildren<{
    ref: RefObject<HTMLDivElement | null>
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">
>> = ({ ref, children, ...props }) => {
    const open = changeModalState(ref, "open");
    const buttonProps = { ...props, onClick: open }
    return <button {...buttonProps}>{children}</button>
}

