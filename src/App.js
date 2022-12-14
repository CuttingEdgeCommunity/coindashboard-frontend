import Home from "./components/Home/Home"
import Dashbord from "./components/Dashbord/Dashbord"
import { useEffect, useState } from "react"
import LightImage from "./img/brightness.png"
import DarkImage from "./img/moon.png"

function App() {
    const [coinSymbol, setCoinSymbol] = useState("")
    const [isDark, setIsDark] = useState(
        JSON.parse(window.sessionStorage.getItem("isDark"))
    )
    useEffect(() => {
        window.sessionStorage.setItem("isDark", isDark)
    }, [isDark])

    return (
        <div id="App" className={isDark ? "dark" : "light"}>
            <header className="flex justify-between px-8 py-3 text-xl font-semibold border-b dark:border-gray-600 shadow-sm dark:bg-gray-800 dark:text-white">
                <h1 className="text-4xl font-Poppins">
                    C<span className="text-red-600 inline-block">D</span>
                    <span className="text-xl font-normal">ashboard</span>
                </h1>
                <div
                    id="modeChange"
                    onClick={() => setIsDark(!isDark)}
                    className="cursor-pointer text-sm mr-12"
                >
                    {isDark ? (
                        <img src={LightImage} className="h-8" alt="Light" />
                    ) : (
                        <img src={DarkImage} className="h-8" alt="Dark" />
                    )}
                </div>
            </header>
            <main>
                <Home setCoinSymbol={setCoinSymbol} />
                {coinSymbol &&<Dashbord coinSymbol={coinSymbol} />}
            </main>
            <footer className="flex justify-center px-8 py-4 text-xl border-t dark:border-gray-600 shadow-sm dark:bg-gray-800 dark:text-white">
                <h6 className="text-gray-600 dark:text-white text-xs">
                    <p>
                        Powered by
                        <a href="https://www.coingecko.com/"> Coingecko API </a> &
                        <a href="https://coinmarketcap.com/"> CoinMarketCap</a>
                    </p>
                </h6>
            </footer>
        </div>
    )
}

export default App
