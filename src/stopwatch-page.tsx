import type { FC } from "react"
import { use, useRef } from 'react';
import { TimestampContextProvider } from './contexts/timestamps';
import { Modal, ModalButton } from './molecules/modal';
import { TimestampHistoryWithContext } from './organisms/timestamp-history-with-context';
import { NavbarWithItems } from './molecules/navbar-with-items';
import { FullHeightHero, HeroBody, HeroHead } from "./atoms/bulma";
import { StopwatchBody } from "./organisms/stopwatch-body";
import { IoNewspaper } from "react-icons/io5";
import { ToggleWalkButton } from "./molecules/toggle-walk-button";
import { DesignContext, DesignHandleContext } from "./contexts/config";

export const StopwatchPage: FC = () => {
    const historyRef = useRef<HTMLDivElement>(null);

    const { isShowingImage } = use(DesignContext)
    const { toggleImage } = use(DesignHandleContext)
    return <TimestampContextProvider>
        <FullHeightHero>
            <HeroHead>
                <NavbarWithItems>
                    <div className="buttons">
                        <ModalButton ref={historyRef}> <IoNewspaper size={50} /> </ModalButton>
                        <ToggleWalkButton on={isShowingImage} onClick={toggleImage} />
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
