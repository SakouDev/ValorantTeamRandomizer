"use client"
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import ViperPhoenixJettBackground from '../../../public/ViperPhoenixJettBackground.png'
import Valorant_Logo from '../../../public/Valorant_logo_black.svg'
import Image from 'next/image'
import Modal from '@/components/Modal/modal'

export default function page() {

	const searchParams = useSearchParams()
	const numberOfPlayer: any = searchParams.get('numberOfPlayer')

	const [formData, setFormData]: any = useState([])
	const [Team1, setTeam1]: any = useState([])
	const [Team2, setTeam2]: any = useState([])
	const [Loading, setLoading] = useState(true)
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		console.log(formData)
	}, [formData])

	useEffect(() => {
		for (let i = 0; i != numberOfPlayer; i++) {
			formData.push({ name: '' })
		}
		setLoading(false)
	}, [])

	const handleSubmit = () => {
		setTeam1([])
		setTeam2([])
		formData.sort(() => Math.random() - 0.5)
		for (let index = 0; index < formData.length; index++) {
			if(index >= formData.length/2){
				setTeam1((Team1:any) => [...Team1, formData[index]])
			}else{
				setTeam2((Team2:any) => [...Team2, formData[index]])
			}
		}
		console.log("ICI",formData[0])
		console.log("Team1", Team1)
		console.log("Team2", Team2)
		setShowModal(true)
	}


	return (
		<div className={styles.containerPage}>
			<div className={styles.left}>
				{formData.map((element: any, index: number) => {
					return (
						<div key={index}>
							<h2>Player {index + 1}</h2>
							<div className={styles.container}>
								<div className={styles.imgGroup}>
									<div className={styles.imgBorder}></div>
									<input name={index.toString()} className={styles.image} onChange={e => element.name = e.target.value} />
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<div className={styles.right}>
				<div className={styles.btnPosition}>
					<button className={styles.btn} onClick={handleSubmit}>
						<span className={styles.btn__inner}>
							<span className={styles.btn__slide}></span>
							<span className={styles.btn__content}>Start</span>
						</span>
					</button>
				</div>
				<div className={styles.TitleAgents} >
					<Image layout="fill" src={Valorant_Logo} alt='ValorantLogo' />
				</div>
				<div className={styles.ImageAgents}>
					<Image layout="fill" src={ViperPhoenixJettBackground} alt='Agents' />
				</div>
			</div>

			{showModal &&//*
				<Modal onClose={() => setShowModal(false)}>
					<div className={styles.containerPage}>
						<div className={styles.leftModal}>
							<h1 className={styles.titleModal}>Team 1</h1>
							<ul className={styles.ListContainerModal}>
								{Team1.map((element: any, i: number) => (
									<li className={styles.listElementModal} key={i}>{element.name}</li>
								))}
							</ul>
						</div>
						<div className={styles.rightModal}>
							<h1 className={styles.titleModal}>Team 2</h1>
							<ul className={styles.ListContainerModal}>
								{Team2!.map((element: any, i: number) => (
									<li className={styles.listElementModal} key={i}>{element.name}</li>
								))}
							</ul>
						</div>
					</div>
				</Modal>
			}



		</div>
	)
}
