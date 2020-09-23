import React from 'react'
import InputMatch from './InputMatch'
import PatternDisplay from './PatternDisplay'
import About from './About'

const SimpleSection = props => {
    const {title, pattern, about, placeholder} = props.section
    return (
        <div>
            <h2>{title}</h2>
            <InputMatch pattern={pattern} placeholder={placeholder}/>
            <PatternDisplay pattern={pattern}/>
            <About content={about} />

        </div>
    )
}

export default SimpleSection