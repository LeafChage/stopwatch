import './App.css'
import { ConfigContext } from './contexts/config';
import { NotificationProvider } from './contexts/notification';
import { StopwatchPage } from './stopwatch-page';

function App() {
    return (
        <ConfigContext value={{ isShowingImage: true }}>
            <NotificationProvider lifetimeMs={2000}>
                <StopwatchPage />
            </NotificationProvider>
        </ConfigContext >
    )
}

export default App
