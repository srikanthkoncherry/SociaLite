import { Search } from "@material-ui/icons";
import './Searchbar.css'
import { useState } from "react";
import { allUsersNames } from "../../apiCalls";

export default function Searchbar() {
    const [input, setInput] = useState('')
    const [options, setOptions] = useState([])
    const [allNames, setAllNames] = useState([])

    const handleOnChange = async (e) => {
        setInput(e.target.value)
        console.log("handling change ", input)
        if (input.length == 1) {
            console.log("fetching all names")
            let names = await allUsersNames()
            setAllNames(names)
        }
        console.log("all data", allNames)
        if (input && allNames.length > 0) {
            let newOptions = allNames.filter((username) => {
                username.toLowerCase().startsWith(input.toLowerCase())
            })
            console.log("new Options", newOptions)
            setOptions(newOptions)

        }
    }

    const handleOptionClick = (e) => {
        console.log('Option event', e)

    }

    const optionToiv = (option) => {
        return (
            <button key={option} className='optionButton' onClick={handleOptionClick} >
                {option}
            </button>
        )
    }

    const handleSearch = () => { }
    return (
        <div className="searchbar">
            <Search className="searchIcon" onClick={handleSearch} />
            <input
                placeholder="Search for Friends, posts or videos"
                className="searchInput"
                value={input}
                type="text"
                onChange={handleOnChange}
            />

            {options.length > 0 &&
                <div>
                    SEARCHHHHH
                    {options.map(optionToiv)}
                </div>
            }
        </div>
    )
}