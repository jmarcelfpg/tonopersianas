import Call from '@material-ui/icons/Call';
import Home from '@material-ui/icons/Home';
import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from './Logo_black_t67_256x256.png';
import "./ToolBar.css"

export default class ToolBar extends React.Component {
    public render() {
        return (
            <div className="tool-bar">
                <img className="tool-bar-logo" src={logo} onClick={this.onCLick} />
                <div className="tool-bar-ContentWrapper">
                    <h1 className="tool-bar-title"> TOÑO PERSIANAS </h1>        
                    <ul className="tool-bar-navigation">
                        <li><a target="blank" href="https://www.facebook.com/tonopersianas/"><img src="/icons/social-media/facebook/drawable-hdpi/ic_facebook_box_black_36dp.png" alt="" /></a></li>
                        <li><a target="blank" href="https://www.youtube.com/channel/UC-AZfbJeJtBmMqg6EMoJNbg"><img src="/icons/social-media/youtube/drawable-hdpi/ic_youtube_black_36dp.png" alt="" /></a></li>
                        <li><a target="blank" href="https://www.instagram.com/explore/locations/671096006432615/tono-persianas"><img src="/icons/social-media/instagram/drawable-hdpi/ic_instagram_black_36dp.png" alt="" /></a></li>
                    </ul>
                    <ul className="tool-bar-navigation">
                        <Link to="/"><Home/></Link>
                        <Link to="/contact"><Call/></Link>
                    </ul>
                    {/* <nav className="tool-bar-navigation">
                        <a href="#" >Home</a>
                        <a href="#" >Productos</a>
                        <a href="#" >Contacto</a>
                    </nav> */}
                    <div className="burger-icon">
                        <div className="burger-container">
                            <span className="burger-bun-top" />
                            <span className="burger-filling" />
                            <span className="burger-bun-bot" />
                        </div>

                        <nav role="navigation">
                            <div id="menuToggle">
                                <input type="checkbox" />

                                <span />
                                <span />
                                <span />

                                <ul id="menu">
                                    <a className="menuLink" href="#"><li>Home</li></a>
                                    <a className="menuLink" href="#"><li>Nosotros</li></a>
                                    <a className="menuLink" href="#"><li>Info</li></a>
                                    <a className="menuLink" href="#"><li>Contacto</li></a>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
        )
    }
    private onCLick() {
        alert('clicked');
    }
}