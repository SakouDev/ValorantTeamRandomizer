'use client'
import React from 'react'
import styles from './input.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function InputValorant({ data, setData, index }: any) {

    const HandleChange = (e: any) => {
        const { name, value } = e.target
        setData(...data, data[name] = {name : value})
    }


    return (

    )
}
