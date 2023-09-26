import Link from 'next/link'
import styles from '@/styles/index.module.scss'
import Image from 'next/image'
import formatDate from '@/lib/formatDate'

type Props = {
    date: string,
    asteroidCount: number,
}

export default function DayCard({date, asteroidCount}: Props) {
    const { weekday, monthDay } = formatDate(date)
    return (
        <Link href={`/days/${date}`} className={styles['day-card']}>
            <div className={styles['day-card-date']}>
                <h2>{weekday}</h2>
                <h2>{monthDay}</h2>
            </div>
            <div className={styles['asteroid-count']}>
                <div className={styles['spacer']}></div>
                <h2>{asteroidCount}</h2>
                <Image src='/asteroid.svg' height={100} width={100} alt=''/>
            </div>
        </Link>
    )
}