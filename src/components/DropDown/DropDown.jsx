import { useEffect } from "react"
import { useState } from "react"

function DropDown({ setSortParam }) {
    const [value, setValue] = useState("rank")
    const handleSelect = (e) => {
        setValue(e.target.value)
    }
    useEffect(() => {
        setSortParam(value)
    }, [value])

    return (
        <label className="text-gray-700 flex" htmlFor="animals">
            <p className="mr-3 hidden md:block text-gray-800 dark:text-white text-xl">
                Sort by
            </p>
            <select
                className="block w-32 md:w-52 text-sm dark:bg-gray-800 text-gray-800 dark:text-white px-3 border-b border-gray-300 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                name="animals"
                value={value}
                defaultValue="rank"
                onChange={handleSelect}
            >
                <option value="rank">Market Rank</option>
                <option value="prices">Price</option>
                <option value="hour">Hourly PCT</option>
                <option value="day">Daily PCT</option>
                <option value="week">Weekly PCT</option>
            </select>
        </label>
    )
}

export default DropDown
