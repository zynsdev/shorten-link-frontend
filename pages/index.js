import React from 'react'
import CreateWrapper from '../_includes/CreateWrapper'
import Layout from '../_layouts/Layout'
import s from './index.scss'

export default function Home() {
    return (
        <Layout>            
            <h1 className={s.Title}>Zyns Shorten Link</h1>
            <CreateWrapper />
        </Layout>
    )
} 
