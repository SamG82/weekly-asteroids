import { fetchWeeklyData } from '@/lib/asteroid'
import AsteroidList from '@/components/asteroid-list'
import type { Metadata } from 'next'
import styles from '@/styles/asteroid.module.scss'
import formatDate from '@/lib/formatDate'
import Link from 'next/link'

type Params = {
    params: {
        date: string
    }
}

export async function generateMetadata({ params: { date } }: Params): Promise<Metadata> {
    return {
        title: date,
        description: `Approaching asteroids on ${date}`
    }
}

export default async function DateInfo({ params: { date } }: Params) {
    const data: WeeklyAsteroidData = await fetchWeeklyData()
    const formattedDate = formatDate(date)
    return (
        <div className={styles['date-info']}>
            <div className={styles['main']}>
                <div className={styles['heading-text']}>
                    <Link href="/">Home</Link>
                    <h1 className={styles['date']}>{formattedDate.weekday} {formattedDate.monthDay}</h1>
                </div>
                <AsteroidList asteroids={data.days[date]}/>
            </div>
        </div>
    )
}