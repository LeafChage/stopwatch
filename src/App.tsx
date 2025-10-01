import './App.css'
import { A } from './A';
import { ConfigContext } from './contexts/config';

function App() {
    return (
        <ConfigContext value={{ isShowingImage: true }}>
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <A />
                </div>
            </section>
        </ConfigContext >
    )
}


export default App
