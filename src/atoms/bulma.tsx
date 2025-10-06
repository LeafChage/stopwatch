import type { FC, PropsWithChildren } from "react"

export const FullHeightHero: FC<PropsWithChildren> = ({ children }) =>
    <section className="hero is-fullheight">
        {children}
    </section>

export const HeroHead: FC<PropsWithChildren> = ({ children }) =>
    <div className="hero-head">
        {children}
    </div>

export const HeroBody: FC<PropsWithChildren> = ({ children }) => {
    return <div className="hero-body">
        {children}
    </div>
}
