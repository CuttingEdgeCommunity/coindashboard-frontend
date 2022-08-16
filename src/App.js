import Home from "./components/Home/Home"
import Dashbord from "./components/Dashbord/Dashbord"
import { useState } from "react"

function App() {
    const [coinName, setCoinName] = useState("bitcoin")
    const [toggleMode, setToggleMode] = useState("dark")

    const handleToggleMode = () => {
        if (toggleMode === "dark") {
            document.getElementsByTagName("html")[0].className = "light"
            setToggleMode("light")
        } else {
            document.getElementsByTagName("html")[0].className = "dark"
            setToggleMode("dark")
        }
    }

    return (
        <>
            <header className="flex justify-between px-8 py-4 text-xl font-semibold border-b dark:border-gray-600 shadow-sm dark:bg-gray-800 dark:text-white">
                <h1>
                    C<span className="text-red-600">Dashboard</span>
                </h1>
                <div
                    onClick={handleToggleMode}
                    className="cursor-pointer text-sm"
                >
                    {toggleMode === "dark" ? "Light mode" : "Dark mode"}
                </div>
            </header>
            <main>
                <Home setCoinName={setCoinName} />
                <Dashbord coinName={coinName} />
            </main>
        </>
    )
}

export default App
