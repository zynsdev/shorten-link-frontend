import axios from 'axios'
import React, { useEffect } from 'react'

export default function RedirectRoot() {

    const redirectToRoot = async () => {
        const slug = window.location.pathname.toString().slice(1)
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/links/${slug}`)        
        if (res.data.status == "GREEN") {
            let url = res.data.link.root;
            if (url.slice(0, 8) != 'https://') url = 'https://' + url;
            window.location.href = url;
            return;
        } else {
            return alert("Đường dẫn này không tồn tại")
        }
    }

    useEffect(() => {
        redirectToRoot();
    }, [])

    return (
        <div><center>Redirect...</center></div>
    )
}
