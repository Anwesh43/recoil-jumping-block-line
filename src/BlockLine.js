import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const BlockLine = ({props}) => {
    const {start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()
    return <div>
        <Block w = {w} h = {h} onClick = {start}/>
        <Line w = {w} h = {h}/>
    </div>
}

export default BlockLine 