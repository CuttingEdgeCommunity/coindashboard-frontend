import Home from "./components/Home/Home"
import Dashbord from "./components/Dashbord/Dashbord"
import { useState } from "react"
import LightImage from "./img/brightness.png"
import DarkImage from "./img/moon.png"

function App() {
    const [coinName, setCoinName] = useState("Bitcoin")
    const [isDark, setIsDark] = useState(true)

    return (
        <div className={isDark ? "dark":"light"}>
            <header className="flex justify-between px-8 py-4 text-xl font-semibold border-b dark:border-gray-600 shadow-sm dark:bg-gray-800 dark:text-white">
                <h1>
                    C<span className="text-red-600">Dashboard</span>
                </h1>
                <div
                    onClick={()=> setIsDark(!isDark)}
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
                <Home setCoinName={setCoinName} />
                <Dashbord coinName={coinName.toLowerCase()} />
            </main>
        </div>
    )
}

export default App
