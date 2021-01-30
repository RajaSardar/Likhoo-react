import React from 'react';
import _home from "../../assets/icons/home.svg";
import _book from "../../assets/icons/book.svg";
import _writingTool from "../../assets/icons/writing-tool.svg";
import _headphone from "../../assets/icons/headphones.svg";
import _study from "../../assets/icons/study.svg";
import _menu from "../../assets/icons/menu.svg";
import _user from "../../assets/icons/user.svg";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="lko-nav-desktop">
                <Link to="/" className="lko-nav-logo">Likhoo</Link>
                <ul className="lko-nav-ul1 lko-nav-ul">
                    <li><Link to="/"><span className="lko-svg-icon"><img src={_home} alt="Likhoo_Home" /></span>Home</Link>
                    </li>
                    <li><Link to="/read"><span className="lko-svg-icon"><img src={_book} alt="Likhoo_Read" /></span>Reading</Link>
                    </li>
                    <li>
                        <Link to="/write"><span className="lko-svg-icon">
                            <img
                                src={_writingTool}
                                alt="Likhoo_write"
                            />
                        </span>Write</Link>
                    </li>
                    <li><Link to="/audio"><span className="lko-svg-icon"><img src={_headphone} alt="Likhoo_audio" /></span>Listen</Link></li>
                    <li><Link to="/learn"><span className="lko-svg-icon"><img src={_study} alt="Likhoo_learn" /></span>Learn</Link></li>
                </ul>
                <ul className="lko-nav-ul2">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>

            </nav>

            <nav className="lko-nav-mobile-header">
                <ul className="lko-nav-mobile-header-ul">
                    <li><Link to=""><span className="lko-svg-icon"><img src={_menu} alt="Likhoo_menu" /></span></Link></li>
                    <li><Link to="/">Likhoo</Link></li>
                    <li><Link to="/login"><span className="lko-svg-icon"><img src={_user} alt="Likhoo_user" /></span></Link></li>
                </ul>
            </nav>

            <nav className="lko-nav-mobile">
                <ul className="lko-nav-ul">
                    <li><Link to="/"><span className="lko-svg-icon"><img src={_home} alt="Likhoo_Home" /></span>Home</Link>
                    </li>
                    <li><Link to="/read"><span className="lko-svg-icon"><img src={_book} alt="Likhoo_Read" /></span>Reading</Link>
                    </li>
                    <li><Link to="/write"><span className="lko-svg-icon"><img src={_writingTool} alt="Likhoo_write" /></span>Write</Link>
                    </li>
                    <li><Link to="/audio"><span className="lko-svg-icon"><img src={_headphone} alt="Likhoo_audio" /></span>Listen</Link>
                    </li>
                    <li><Link to="/learn"><span className="lko-svg-icon"><img src={_study} alt="Likhoo_learn" /></span>Learn</Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;