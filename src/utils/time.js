import _ from 'lodash'

const dayInMillis = 86400000
const hourInMillis = 3600000
const minuteInMillis = 60000
const secondInMillis  = 1000


export const isWithinSecond = (millis) => millis< secondInMillis
export const isWithinMinute = (millis) => millis< secondInMillis
export const isWithinHour = (millis) => millis< secondInMillis

/**
 * @param {number} millis
 */
export const formatMillis = (millis) => {
    const formatted = {
        millis: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0
    }
    millis = Math.abs(millis)
    formatted.days  = Math.floor(millis/dayInMillis)
    millis -= formatted.days * dayInMillis
    formatted.hours = Math.floor(millis /  hourInMillis)
    millis -= formatted.hours * hourInMillis
    formatted.minutes = Math.floor(millis / minuteInMillis)
    millis -= formatted.minutes * minuteInMillis
    formatted.seconds = Math.floor(millis/ secondInMillis)
    millis -= formatted.seconds * secondInMillis
    formatted.millis = millis

    return formatted
}

/**
 * Display millis in format `ddd:hh:mm:ss`
 * 
 * @param {number}  millis
 */
export const  dispayMillis = (millis) => {
    const { days, hours, minutes, seconds} = formatMillis(millis)
    return `${formatTime(days, 2)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
}

const formatTime = (num, count=1) => {
    if (num < (10 * count)) {
        return `${_.repeat('0', count)}${num}`
    } else {
        return `${num}`
    }
}