'use client'
import { useState } from 'react'
import Asteroid from '@/components/asteroid'
import styles from '@/styles/asteroid.module.scss'

type Props = {
    asteroids: Asteroid[]
}

export default function AsteroidList({asteroids}: Props) {
    const [selected, setSelected] = useState<number>(0)

    return (
        <div className={styles['asteroid-list']}>
            <div className={styles['asteroid-list-sidebar']}>
            {asteroids.map((asteroid, idx) => {
                const className = idx === selected
                ? styles['asteroid-button-active'] : styles['asteroid-button']
                return <button key={idx} className={className} onClick={() => setSelected(idx)}>{asteroid.name}</button>
            })}
            </div>
            <Asteroid data={asteroids[selected]}/>
        </div>
    )
}