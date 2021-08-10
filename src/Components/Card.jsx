import React from 'react'
import './css/Card.css'
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import {NavLink} from 'react-router-dom'
function Card() {

    const func = () =>{
        document.getElementById('info').style.fontSize = '18px';
    }
    const func2 = () =>{
        document.getElementById('info').style.fontSize = '16px';
    }

    return (
        <div className="card" onMouseOver={()=>func()} onMouseOut={()=>func2()}>
            <span> <WarningRoundedIcon fontSize="large"/> </span>
            <h4>Risk</h4>
            <h3>Connected Risk API</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea soluta ab iusto? Iure adipisci iusto ea. Saepe, ut nisi?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, enim.</p>
            <div>
                <NavLink to="/page2" className='Page2'>View API <ChevronRightRoundedIcon fontSize="large"/></NavLink>
            </div>
        </div>
    )
}

export default Card
