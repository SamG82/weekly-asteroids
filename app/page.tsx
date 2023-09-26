import Image from 'next/image'
import styles from '@/styles/index.module.scss'
import DayCard from '@/components/day-card'
import { fetchWeeklyData } from '@/lib/asteroid'

export default async function Home() {
  const asteroidData: WeeklyAsteroidData = await fetchWeeklyData()
  
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.spacer}/>
        <h1>Weekly Asteroids</h1>
        <Image className={styles.logo} width={100} height={100} src="/logo.svg" alt=""/>
      </div>
      
      <h2 className={styles.subheading}>View <span>{asteroidData.weekCount}</span> asteroids expected to approach Earth in the next week.</h2>
      <div className={styles.weeklylist}>
        {Object.keys(asteroidData.days).sort().map((date, idx) => {
          return <DayCard key={idx} date={date} asteroidCount={asteroidData.days[date].length}/>
        })}
      </div>
    </main>
  )
}
