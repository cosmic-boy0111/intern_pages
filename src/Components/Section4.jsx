import { Height } from '@material-ui/icons'
import React,{useState} from 'react'
import './css/Section3.css'
import Section2 from './Section2'
import {NavLink,useHistory} from 'react-router-dom'
import './css/Section4.css'
import Repeat from './Section4SubPage'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';


const Section4 = (props) => {



    const history = useHistory();

    const [stay, setStay] = useState('quickstart')
    const [stay2, setStay2] = useState('req')
    const [col, setCol] = useState(true)
    const [show, setShow] = useState(true)
    const set = () => {
        setStay('overview')
        history.push('/page2')
    }
    const set2 = () =>{
        setStay('quickstart')
        history.push('/page3')
    }

    const RunThis = () =>{
        setShow(false)
        document.getElementById('float').style.height = '10vh'
        document.getElementById('float_btn').style.display = 'none'
        document.getElementById('float_btn2').style.display = 'block'
    
    }
    const RunThis2 = () =>{
        setShow(true)
        document.getElementById('float').style.height = '73vh'
        document.getElementById('float_btn').style.display = 'block'
        document.getElementById('float_btn2').style.display = 'none'
    }

    const func1 = () =>{
        setCol(true)
        setStay2('req')
    }

    const func2 = () =>{
        setCol(false)
        setStay2('res')
    }


    return (
        <>
        <div className='section3_first'>
            <div className="section3_nav">
                <NavLink to="/page2" className="col2" onClick={()=>set()}>Overview</NavLink>
                <NavLink to="/page3" className="col2" onClick={()=>set2()}>Quickstart</NavLink>
                <a href='/page3' className="col2" onClick={()=>setStay('documentation')}>Documentation</a>
                <a href='/page3' className="col2" onClick={()=>setStay('downloads')}>Downloads</a>
                <div className={`animation start-${stay}`}></div>
            </div>
        </div>
        <div className="line">
        </div>
        <div className="overview">
            <div className="quickstart">
                <div className="quickstart_body">
                    <div className='details'> 
                        <h2>Use Case</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident harum molestias voluptate obcaecati adipisci ea et explicabo ducimus quis nemo.</p>
                    </div>
                    <div className='details'> 
                        <h2>Request Attributes</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident harum molestias voluptate obcaecati adipisci ea et explicabo ducimus quis nemo.</p>
                    </div>
                    <h2 className='after_details'>Head</h2>
                    <Repeat title={'Version'} p1={'String'} p2={'Optional'} p3={'Version Of API'} p4={'Example:V1'}/>
                    <Repeat title={'Version'} p1={'String'} p2={'Optional'} p3={'Version Of API'} p4={'Example:V1'}/>
                    <Repeat title={'Version'} p1={'String'} p2={'Optional'} p3={'Version Of API'} p4={'Example:V1'}/>
                    <Repeat title={'Version'} p1={'String'} p2={'Optional'} p3={'Version Of API'} p4={'Example:V1'}/>
                    <div className="details"></div>
                    <h2 className='after_details'>Body</h2>
                    <Repeat title={'RequestType'} p1={'String'} p2={'mandatory'} p3={'Lorem ipsum dolor, sit amet consectetur '} p4={'sit amet consectetur adipisicing elit. Provident harum molestias voluptate obcaecati adipisci ea et explicabo ducimus quis nemo.'}/>
                    <Repeat title={'RequestType'} p1={'String'} p2={'mandatory'} p3={'Lorem ipsum dolor, sit amet consectetur '} p4={'sit amet consectetur adipisicing elit. Provident harum molestias voluptate obcaecati adipisci ea et explicabo ducimus quis nemo.'}/>
                    <Repeat title={'RequestType'} p1={'String'} p2={'mandatory'} p3={'Lorem ipsum dolor, sit amet consectetur '} p4={'sit amet consectetur adipisicing elit. Provident harum molestias voluptate obcaecati adipisci ea et explicabo ducimus quis nemo.'}/>
                    <Repeat title={'RequestType'} p1={'String'} p2={'mandatory'} p3={'Lorem ipsum dolor, sit amet consectetur '} p4={'sit amet consectetur adipisicing elit. Provident harum molestias voluptate obcaecati adipisci ea et explicabo ducimus quis nemo.'}/>
                </div>
            </div>
        </div>
        <div className="floating_div" id="float">
            <div id='float_btn' onClick={()=>RunThis()}>
                <ExpandMoreRoundedIcon />
            </div>
            <div id='float_btn2' onClick={()=>RunThis2()}>
                <ExpandLessRoundedIcon />
            </div>
            <div className='div1' style={{
                display:show?'flex':'none'
            }}>
                <span>Staging</span>
                <span style={{
                    opacity:'0.7'
                }}>Production</span>
            </div>
            <div className="float_nav" style={{
                display:show?'block':'none'
            }}>
                <a href="#" onMouseOver={()=>func1()} style={{
                    color:col?'white':'black'
                }}>Request</a>
                <a href="#" onMouseOver={()=>func2()} style={{
                    color:col?'black':'white'
                }}>Response</a>
                <div className={`animation start-${stay2}`}></div>
            </div>
        </div>
        </>
    )
}

export default Section4
