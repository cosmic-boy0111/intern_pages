
import React from 'react'



const repeat = ({title,p1,p2,p3,p4=""}) =>{
    return(
        <div className="description">
                        <div className="version">
                            <p className='title'>{title}</p>
                            <p>{p1}</p>
                            <p>{p2}</p>
                        </div>
                        <div className="desc">
                            <p>{p3}</p>
                            <p>{p4}</p>
                        </div>
                    </div>
    )
}

export default repeat;