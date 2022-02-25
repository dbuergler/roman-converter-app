import React from 'react';
import {useState} from 'react'

function Converter(){

    const [romanNumerals, setRomanNumerals] = useState([])

    const fetchNumerals = async () => {
        const response = await fetch('/api/converter')
        const data = await response.json()
        setRomanNumerals(data)
    }

    return (
        <div>
            <button onClick={fetchNumerals}>Load data</button>
            {
                romanNumerals.map(romanNumeral => {
                    return (
                        <div key={romanNumeral.number}>
                            {romanNumeral.number} {romanNumeral.roman}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Converter;