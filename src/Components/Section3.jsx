import { Height } from '@material-ui/icons'
import React,{useState} from 'react'
import './css/Section3.css'
import {NavLink,useHistory} from 'react-router-dom'

const Section3 = (props) => {

    const history = useHistory();

    const [stay, setStay] = useState('overview')
    const set = () => {
        setStay('overview')
        history.push('/page2')
    }
    const set2 = () =>{
        setStay('quickstart')
        history.push('/page3')
    }

    return (
        <>
        <div className='section3_first'>
            <div className="section3_nav">
                <NavLink to="/page2" className="col2" onClick={()=>set()}>Overview</NavLink>
                <NavLink to="/page3" className="col2" onClick={()=>set2()}>Quickstart</NavLink>
                <a href="#" className="col2" onClick={()=>setStay('documentation')}>Documentation</a>
                <a href="#" className="col2" onClick={()=>setStay('downloads')}>Downloads</a>
                <div className={`animation start-${stay}`}></div>
            </div>
        </div>
        <div className="line">
        </div>
        <div className="overview">
            <div className="section3_body">
                <div className='section3_info'>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus quae autem inventore voluptates ipsum repudiandae voluptate totam eligendi culpa?</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptatibus, ut libero voluptatem quia doloremque ipsa vel, quaerat molestiae maxime iusto at, consequatur minima sit obcaecati nemo. Sed eligendi ut obcaecati autem consequatur doloribus odit, quas nemo ipsum quisquam maxime!</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div style={{lineHeight:'1.7rem'}} >
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div style={{lineHeight:'1.7rem',margin:'0'}} >
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit ab voluptatem aliquid ipsum dolorum quidem totam officiis iusto adipisci.</p>
                    </div>
                </div>
                <div className="blank">

                </div>
            </div>
        </div>
        </>
    )
}

export default Section3
