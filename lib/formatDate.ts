const weekdays: Array<string> = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
]

type dateData = {
    weekday: string,
    monthDay: string
}

export default function(date: string): dateData {
    let [year, month, day] = date.split('-').map(x => parseInt(x))
    month -= 1

    const dateObj = new Date(year, month, day)
    return {
        weekday: weekdays[dateObj.getDay()],
        monthDay: `${dateObj.getMonth() + 1}/${dateObj.getDate()}`
    }
}