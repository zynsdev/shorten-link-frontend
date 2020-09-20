import React, { useEffect, useState } from 'react'
import s from './HotLink.scss'
import axios from 'axios'

export default function HotLink() {

    const [listLink, setListLink] = useState()

    const getData = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/links?size=10`)
        setListLink(res.data)
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h2 className={s.Title}>Link mới nóng hổi</h2>
            <table className={s.HotLink}>
                <thead>
                    <tr>
                        <th>Shorten Link</th>                    
                        <th>Lượt Click</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listLink && listLink.map((el,i) => 
                            <tr key={i}>
                                <th><a href={el.slug}>{`${window.location.hostname}/${el.slug}`}</a></th>                            
                                <th>{el.cntClick}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
