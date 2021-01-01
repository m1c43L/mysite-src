import React, { useEffect, useState } from "react";
import Fireworks from 'react-native-fireworks'
import { Jumbotron } from 'react-bootstrap'
import _ from 'lodash'
import './_2021.css'




const _2021 = ({contents}) => {
    let newYearMillis = (new Date("Jan 01 2021 00:00:00")).valueOf()
    let [millisLeft, setMillistLeft] = useState(newYearMillis - Date.now().valueOf())
    const [innerWidth, setInnerWidth] = useState(0)
    const [innerHeight, setInnerHeight] = useState(0)
    let running = false

    const dayInMillis = 86400000
    const hourInMillis = 3600000
    const minuteInMillis = 60000
    const secondInMillis  = 1000

    function run() {
        running = true;
        update()
    }
    
    function update() {
        setTimeout(() => {
            if (running) {
                setMillistLeft(newYearMillis - Date.now().valueOf()) 
                update()
            }
        }, 1000);
    }

    useEffect(() => {
         run()
    }, [])

    useEffect(() => {
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
    }, [millisLeft])

    function getMetas  (left) {
        const formatted = {
            millis: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0
        }
        left = Math.abs(left)
        formatted.days  = Math.floor(left/dayInMillis)
        left -= formatted.days * dayInMillis
        formatted.hours = Math.floor(left /  hourInMillis)
        left -= formatted.hours * hourInMillis
        formatted.minutes = Math.floor(left / minuteInMillis)
        left -= formatted.minutes * minuteInMillis
        formatted.seconds = Math.floor(left/ secondInMillis)
        left -= formatted.seconds * secondInMillis
        formatted.millis = left

        return formatted
    }

    function formatted() {
        const timeMeta = getMetas(millisLeft)
        return `${formatTime(timeMeta.days, 2)}:${formatTime(timeMeta.hours)}:${formatTime(timeMeta.minutes)}:${formatTime(timeMeta.seconds)}`
    }

    function formatTime (num, count=1) {
        if (num < (10 * count)) {
            return `${_.repeat('0', count)}${num}`
        } else {
            return `${num}`
        }
    }

    return(
    <div>
        <Jumbotron>
            <h1 style={{'fontSize': innerWidth > 1000? '150px': '75px'}}>{millisLeft > 0?"2020" : "2021"}</h1>
            <div className={'wrapper'}>
            <p>{formatted()}</p>
            <p className={'small'}>{'ddd:hh:mm:ss'}</p>
            </div>
           
        </Jumbotron>    
        
        {millisLeft <= 0? <Fireworks
            speed={3}
            density={8}
            colors={['#ff0','#ff3','#cc0','#ff4500','#ff6347', '#0000FF', '#FF00FF', '#00FFFF']}
            height={innerHeight - Math.min((innerHeight * 0.20), 200)}
            width={innerWidth - Math.min((innerWidth * 0.20), 200)}
            zIndex={1}
            circular={true}
        />: ''}
        
        
    </div>    
    )
} 


export default _2021;