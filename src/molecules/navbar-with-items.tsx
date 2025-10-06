import type { FC, PropsWithChildren } from "react";

export const NavbarWithItems: FC<PropsWithChildren> = ({ children }) => {
    return <nav className="navbar">
        <div className="container">
            <div className="navbar-end">
                <div className="navbar-item">
                    {children}
                </div>
            </div>
        </div>
    </nav>
}
