import { type FC, type PropsWithChildren, type RefObject } from "react"

export const Modal: FC<PropsWithChildren<{ ref: RefObject<HTMLDivElement | null> }>> = ({ ref, children }) => {
    return <div ref={ref} className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
            {children}
        </div>
        <button className="modal-close is-large" aria-label="close"
            onClick={() => {
                if (ref.current) {
                    ref.current.className = "modal"
                }
            }}
        ></button>
    </div>
}

export const ModalButton: FC<PropsWithChildren<{
    ref: RefObject<HTMLDivElement | null>
    className?: string
}>> = ({ ref, children, className }) => {
    return <button className={className} onClick={() => {
        if (ref.current) {
            ref.current.className = "modal is-active"
        }
    }}>{children}</button>
}
