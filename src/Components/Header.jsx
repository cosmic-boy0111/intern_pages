import React from 'react'
import './css/Header.css'
import logo from './images/mb_logo.png'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { NavLink } from 'react-router-dom';

const Header = ({fix}) => {
    return (
        <div className="header" style={{
            position:fix?'fixed':'relative',
            top:'0'
        }}>
            <div className="header_nav">
                <div className="logo">
                    <img src={logo} alt="img" />
                    <div className="logo_info">
                        <h2>MeriBachat</h2>
                        <p>Developer Community</p>
                    </div>
                </div>
                <div className="search">
                    
                </div>
                <div className="nav">
                    <div className="nav_comp find col">
                        <SearchRoundedIcon/>
                    </div>
                    <NavLink to="/" className="nav_comp col" activeClassName="col">APIs</NavLink>
                    <NavLink to="/" className="nav_comp col" activeClassName="col">UseCase</NavLink>
                    <NavLink to="/" className="nav_comp col" activeClassName="col">Tools</NavLink>
                    <NavLink to="/" className="nav_comp col" activeClassName="col">Login</NavLink>
                    <div className="animation start-apis"></div>
                </div>
            </div>
        </div>
    )
}

export default Header
