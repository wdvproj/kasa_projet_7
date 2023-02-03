import { createContext, useState, useEffect } from 'react'

export const DatasContext = createContext()

export const DatasProvider = ({ children }) => {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/datas/logements.json')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((datas) => {
                setLogements(datas)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <DatasContext.Provider value={logements}>
            {children}
        </DatasContext.Provider>
    )
}
