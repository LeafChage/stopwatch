import './App.css'
import { A } from './A';
import { ConfigContext } from './contexts/config';
import { NotificationProvider } from './contexts/notification';
import { TimestampContextProvider } from './contexts/timestamps';
import { useRef } from 'react';
import { Modal, ModalButton } from './molecules/modal';
import { TimestampHistoryWithContext } from './organisms/timestamp-history-with-context';

function App() {
    const historyRef = useRef<HTMLDivElement>(null);
    return (
        <ConfigContext value={{ isShowingImage: true }}>
            <NotificationProvider lifetimeMs={2000}>
                <TimestampContextProvider>
                    <section className="hero is-fullheight">
                        <div className="hero-head">
                            <nav className="navbar">
                                <div className="container">
                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <div className="buttons">
                                                <ModalButton ref={historyRef}>History</ModalButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="hero-body">
                            <A />
                        </div>
                    </section>
                    <Modal ref={historyRef} >
                        <TimestampHistoryWithContext />
                    </Modal>
                </TimestampContextProvider>
            </NotificationProvider>
        </ConfigContext >
    )
}

export default App
