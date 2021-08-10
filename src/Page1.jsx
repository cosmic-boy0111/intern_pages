import React from 'react'
import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import logo from './Components/images/undraw_revenue_3osh.svg'

const Page1 = () => {

  const header_text =  'Lorem lorem';

  return (
    <>
      <Header />
      <Section1 header_text={header_text} logo={logo}/>
      <Section2 />
    </>
  )
}

export default Page1