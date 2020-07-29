import {scaleState} from './atoms'
import React from 'react'
import {useRecoilValue} from 'recoil'
import {useStyle} from './hooks'

const Block = ({w, h, onClick}) => {
    const scale = useRecoilValue(scaleState)
    const {blockStyle} = useStyle(w, h, scale)
    return (<div onClick = {onClick} style = {blockStyle()}>
    </div>)
}

export default Block 