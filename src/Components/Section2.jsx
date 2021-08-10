import React from 'react'
import './css/Section2.css'
import Card from './Card'

const Section2 = () => {
    return (
        <>
        <div className='section2_upper'>
            <h3>Developes Tools</h3>
        </div>
        
        <div className='section2'>
            <div className="section2_body">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        </>
    )
}

export default Section2
