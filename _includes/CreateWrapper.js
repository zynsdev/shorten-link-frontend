import React, { useState } from 'react'
import s from './CreateWrapper.scss'
import {RiLinksFill} from 'react-icons/ri'
import {VscLoading} from 'react-icons/vsc'
import {createLink, isValidUrl} from '../utils'

export default function CreateWrapper() {
    const [root, setRoot] = useState("")
    const [slug, setSlug] = useState("")
    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState({text: "", status: "GREEN"})
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        if (!isValidUrl(root)) return setMsg({text: "URL không hợp lệ", status: "RED"})
        const res = await createLink({root, slug})
        console.log(res.data)
        res.data.status == "GREEN"
        ? setMsg({
            text: `Link đã rút gọn: ${window.location.hostname}/${res.data.link.slug}`,
            status: res.data.status
        })
        : setMsg({
            text: res.data.msg,
            status: res.data.status
        })
        setLoading(false)
    }

    return (
        <div className={s.CreateWrapper}>
            <div className={s.Basic}>
                <RiLinksFill className={s.Icon} />
                <input 
                    className={s.Root} 
                    placeholder={"Dán link cần rút gọn vào đây "}
                    value={root}
                    onChange={(e)=>setRoot(e.target.value)}
                />
                {
                    loading
                    ? <button> <VscLoading className={s.Loading}/> </button>
                    : <button onClick={()=>handleSubmit()}>Rút gọn </button>
                }
            </div>
                {msg && <div className={msg.status=="GREEN" ? s.GREEN : s.RED}>{msg.text}</div>}
            <hr/> 
            <button 
                className={s.Toggle}
                onClick={() => setShow(!show)}
            >Tùy chọn</button>
            <div className={s.Option}>
                <label htmlFor="custom">Custom link: </label>
                <input 
                    className={s.CustomLink}
                    placeholder={"Bỏ trống để tạo link ngẫu nhiên"}
                    id="custom"
                    value={slug}
                    onChange={(e)=>setSlug(e.target.value)}
                />
            </div>
        </div>
    )
}
