import React from 'react'
import './css/Section1.css'

const Section1 = (props) => {
    return (
        <div className="section1" id='section1' style={{
            paddingTop:`${props.pt}`,
            height:`${props.h}`
        }}>
            <div className="section1_body">
                <div className="section1_info">
                    <h1>{props.header_text}</h1>
                    <span className='info' id='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti inventore, porro assumenda pariatur tempora eaque mollitia dolores debitis molestias tempore.</span>
                </div>
                    <img src={props.logo} alt="" />
            </div>
        </div>
    )
}

export default Section1
