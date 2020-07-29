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

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
}

const maxScale = (scale, i, n) => Math.max(0, scale - i / n)

const divideScale = (scale, i, n) => Math.min(1 / n, maxScale(scale, i, n)) * n  

export const useStyle = (w, h, scale) => {
    const sf = Math.sin(Math.PI * scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const fixedY = 0.9 * h 
    const size = Math.min(w, h) / 10
    const position = 'absolute'
    const x = w * sf 
    const y = fixedY - size + (fixedY - size) * 0.5 * (sf2 - sf1) 
    const background = 'indigo'
    const blockX = (w - size) * sf 
    return {
        lineStyle() {
            const left = `0px`
            const top = `${fixedY}px`
            const width = `${x}px`
            const height = `${size / 8}px`
            return {
                position, 
                left,
                top, 
                background, 
                width, 
                height 
            }
        },
        blockStyle() {
            const left = `${blockX}px`
            const top = `${y}px`
            const width = `${size}px`
            const height = `${size}px`
            return {
                position, 
                left, 
                top, 
                width, 
                height, 
                background 
            }
        }
    }
}