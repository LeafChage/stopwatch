import type { FC } from "react"
import { useRef } from 'react';
import { TimestampContextProvider } from './contexts/timestamps';
import { Modal, ModalButton } from './molecules/modal';
import { TimestampHistoryWithContext } from './organisms/timestamp-history-with-context';
import { NavbarWithItems } from './molecules/navbar-with-items';
import { FullHeightHero, HeroBody, HeroHead } from "./atoms/bulma";
import { StopwatchBody } from "./organisms/stopwatch-body";

export const StopwatchPage: FC = () => {
    const historyRef = useRef<HTMLDivElement>(null);

    return <TimestampContextProvider>
        <FullHeightHero>
            <HeroHead>
                <NavbarWithItems>
                    <div className="buttons">
                        <ModalButton ref={historyRef}>History</ModalButton>
                    </div>
                </NavbarWithItems>
            </HeroHead>
            <HeroBody>
                <StopwatchBody />
            </HeroBody>
        </FullHeightHero>
        <Modal ref={historyRef} >
            <TimestampHistoryWithContext />
        </Modal>
    </TimestampContextProvider>
}
