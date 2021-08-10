import React,{useState} from 'react'
import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section3 from './Components/Section3'
import logo from './Components/images/undraw_connected_world_wuay.svg'
import Section4 from './Components/Section4'

const Page3 = () => {

    const header_text = 'Connected Risk API';

    return (
        <div>
            <Header fix={true}/>
            <Section1 header_text={header_text} logo={logo} pt={'8rem'} h={'93vh'}/>
            <Section4 />
        </div>
    )
}

export default Page3
