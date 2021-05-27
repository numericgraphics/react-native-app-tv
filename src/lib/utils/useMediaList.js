import { useState, useEffect } from 'react'

function useMediaList (rowData) {
    const [mediaList, setMediaList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (Array.isArray(rowData)) {
            setMediaList(rowData[0].mediaList)
        } else {
            setMediaList(rowData.items || rowData.mediaList || rowData.topics)
        }
        setLoading(false)
    }, [])

    return [mediaList, loading]
}

export { useMediaList }
