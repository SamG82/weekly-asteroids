'use-client'
import formatDate from '@/lib/formatDate'
import styles from '@/styles/asteroid.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    data: Asteroid
}

const numStr = (data: number): string => {
    return Math.round(data).toLocaleString()
}

export default function Asteroid({data}: Props) {
    return (
        <div className={styles['asteroid']}>
            <div className={styles['asteroid-name']}>
                <div className={styles['spacer']}></div>
                <h1>{data.name}</h1>
                <Image src="/asteroid.svg" width={100} height={100}alt=""></Image>
            </div>
            <div className={styles['asteroid-features']}>
                <div className={styles['feature']}>
                    <Image src="/size.svg" height={100} width={100} alt=""/>
                    <h1>{numStr(data.diameterMin)} - {numStr(data.diameterMax)} ft</h1>
                </div>
                <div className={styles['feature']}>
                    <Image src="/velocity.svg" height={100} width={100} alt=""/>
                    <h1>{numStr(data.velocity)} mph</h1>
                </div>
            </div>
            <div className={styles['approach-details']}>
                <div className={styles['approach-time-label']}>
                    <div className={styles['spacer']}></div>
                    <h2>Approach time</h2>
                    <Image src="/time.svg" height={100} width={100} alt=""/>
                </div>
                <div className={styles['time']}>
                    {data.hazardous &&
                        <div className={styles['spacer']}></div>
                    }
                    <h2 className={styles['time']} >{data.approachDate.split(' ')[1]}</h2>
                    {data.hazardous &&
                        <Image
                        style={{display: data.hazardous ? 'block' : 'none'}}
                        title="Potentially hazardous"
                        src="/hazardous.svg" width={100} height={100} alt=""/>
                    }
                </div>
            </div>
        </div>
    )
}
