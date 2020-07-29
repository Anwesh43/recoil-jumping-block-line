import {useState, useEffect} from 'react'
import {useRecoilState} from 'recoil'
import {scaleState} from './atoms'
export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useRecoilState(scaleState)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            if (!animated) {
                let currScale = scale 
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}