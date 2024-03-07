// import React from 'react'

import { useEffect, useState } from "react"
import { Editor } from "./edit"
// import { useHistory } from 'react-router-dom';
// import { Link } from "react-router-dom";



export const Home = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [open, setOpen] = useState(false)

    // const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://italent2.demo.lithium.com/api/2.0/search?q= select id,subject, body from messages where is_solution=true");
            const jsonData = await response.json();
            setData(jsonData.data.items)
        }
        fetchData()
    }, [])

    const buttonhandle = (id) => {
        const filtered = data.filter(item => item.id === id);
        setFilterData(filtered)
        setOpen(true)
    }
    console.log(filterData, "filter")


    return (
        <div className="main-dev" >
            {open === false &&
                <div className="min-w-36">
                    <h1 className="text-center p-6 font-semibold">Khoros data</h1>
                    {data.map((items: any, index) => (
                        <div key={index} className="border-2 p-6 rounded-md shadow-md min-h-11 flex justify-between h-24">
                            <p className="text-sm">{items.subject}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300" onClick={() => buttonhandle(items.id)}>
                                edit
                            </button>
                        </div>
                    ))}
                </div>
            }
            {open === true && <div>
                <Editor filterData={filterData} setOpen={setOpen} />
            </div>

            }
        </div>
    )
}
