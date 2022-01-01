import React, { useState } from "react";
import { Jumbotron } from 'react-bootstrap'
import { dispayMillis} from '../../utils/time'
import './new-year.css'
import { Fireworks, useFireworks } from 'fireworks-js/dist/react'
import Sound  from 'react-sound';
import { soundManager } from 'soundmanager2';


/**
 * 
 * @param {Object} props 
 * @param {Object} props.contents
 * @param {Number} props.year
 * @returns 
 */
const NewYear = ({contents, year}) => {
    let newYearMillis = (new Date(`Jan 01 ${year} 00:00:00`)).valueOf()
    let [millisLeft, setMillistLeft] = useState(newYearMillis - Date.now().valueOf())
    let [isNewYear, setIsNewYear] = useState(false)
    let [soundStatus, setSoundStatus] = useState(Sound.status.STOPPED)
    let running = false
    run()
    soundManager.setup({ignoreMobileRestrictions: true});
    function run() {
        running = true;
        update()
    }
    
    function update() {
        setTimeout(() => {
            if (running) {
              if(millisLeft <= 0 && !isNewYear) {
                setIsNewYear(true)
                startFireworks()
              }
              setMillistLeft(newYearMillis - Date.now().valueOf()) 
              update()
            }
        }, 1000);
    }

    const { enabled, options, setEnabled, setOptions } = useFireworks({
        initialStart: false,
        initialOptions: {
          "hue": {
            "min": 0,
            "max": 360
        },
        "delay": {
            "min": 50,
            "max": 100
        },
        "rocketsPoint": 50,
        "opacity": 0.5,
        "speed": 5,
        "acceleration": 1.01,
        "friction": 0.96,
        "gravity":2.5,
        "particles": 100,
        "trace": 1,
        "explosion": 2,
        "autoresize": true,
        "brightness": {
            "min": 14,
            "max": 75,
            "decay": {
                "min": 0.00900000000000001,
                "max": 0.045
            }
        },
        "boundaries": {
            "visible": false
        },
        "sound": {
            "enabled": true,
            "files": [
                "https://fireworks.js.org/sounds/explosion0.mp3",
                "https://fireworks.js.org/sounds/explosion1.mp3",
                "https://fireworks.js.org/sounds/explosion2.mp3"
            ],
            "volume": {
                "min": 10,
                "max": 70
            }
        },
        }
      })

      const startFireworks = () => {
       setEnabled(true)
       setTimeout(() => {
          setOptions({
            ...options,
            delay: {
              min: 1,
              max: 100
            },
          })
       }, 10_000);
       setSoundStatus(Sound.status.PLAYING)
      }

      const style = {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
      }

    return(
    <div>
    <Sound   
      url="/sounds/auld_lang_syne.mp3"
      playStatus={soundStatus}
      volume={100}
    />
        <Jumbotron style={{'zIndex': 100}} className={'jumbotron'} >
            <h1 className={'year'}>{!isNewYear? year -1 : year}</h1>
            <div className={'wrapper'}>
            <p>{dispayMillis((millisLeft))}</p>
            <p className={'small'}>{'ddd:hh:mm:ss'}</p>
            <p className={'song-credit'} >Music: Auld Lang Syne by Alexander Nakarada (www.serpentsoundstudios.com)</p>
            </div>
           
        </Jumbotron>    
     
        { <Fireworks enabled={enabled} options={options} style={style} />}

    </div>    
    
    )
} 


export default NewYear;