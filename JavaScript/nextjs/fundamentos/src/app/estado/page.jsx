"use client"
import React, { useState } from 'react'
import Layout from "@/components/Layout"
import styles from '../../components/style.module.css'

export default function Estado() {
    const [number, setNumber] = useState(3)

    const Incrementar = () => {
        setNumber(prevNumber => prevNumber + 1)
    }

    return (
        <Layout titulo='Componente com estado'>
            <div>results: {number}</div>
            <button onClick={Incrementar} className={styles.buttonStandard}>Incrementar</button>
        </Layout>
    )
}