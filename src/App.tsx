import './App.css'
import { DesignContext, DesignHandleContext } from './contexts/config';
import { NotificationProvider } from './contexts/notification';
import { useToggle } from './hooks/toggle';
import { StopwatchPage } from './stopwatch-page';

function App() {
    const [isShowingImage, toggleImage] = useToggle(false);
    return (
        <DesignHandleContext value={{ toggleImage }}>
            <NotificationProvider lifetimeMs={2000}>
                <DesignContext value={{ isShowingImage }}>
                    <StopwatchPage />
                </DesignContext >
            </NotificationProvider>
        </DesignHandleContext>
    )
}

export default App
