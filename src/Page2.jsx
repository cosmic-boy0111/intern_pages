import React,{useState} from 'react'
import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section3 from './Components/Section3'
import logo from './Components/images/undraw_connected_world_wuay.svg'

const Page2 = () => {

    const header_text = 'Connected Risk API';
    // const [fix, setFix] = useState(false)

    return (
        <div>
            <Header fix={false}/>
            <Section1 header_text={header_text} logo={logo} pt={'0'} h={'65vh'}/>
            <Section3 />
        </div>
    )
}

export default Page2
