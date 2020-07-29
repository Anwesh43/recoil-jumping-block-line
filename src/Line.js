import React from 'react'
import {useStyle} from './hooks'
import {styleState} from './atoms'
import {useRecoilValue} from 'recoil'

const Line = ({w, h}) => {
    const scale = useRecoilValue(styleState)
    const {lineStyle} = useStyle(w, h, scale)
    return (<div style = {lineStyle()}>
    </div>)
}

export default Line 