import React from 'react';
import {useState} from 'react'
function Fetch(){
    const [data, setData] = useState([])

        const fetchNumerals = async () => {
            const response = await fetch('/api/converter')
            const data = await response.json()
            setData(data)
        }
    
        return (
            <div>
                <button onClick={fetchNumerals}>Load data</button>
                {
                    data.map(data => {
                        return (
                            <div key={data.roman}>
                                {data.roman} {data.number}
                            </div>
                        )
                    })
                }
            </div>
        )
}

export default Fetch;