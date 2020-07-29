import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import Block from './Block'
import Line from './Line'

const BlockLine = ({props}) => {
    const {start} = useAnimatedScale(0.01, 30)
    const {w, h} = useDimension()
    return <React.Fragment>
        <Block w = {w} h = {h} onClick = {start}/>
        <Line w = {w} h = {h}/>
    </React.Fragment>
}

export default BlockLine 