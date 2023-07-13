import { Parallax } from 'react-parallax';
import Projectimage from '../assests/bgi.png'
import './stylesheets/projectinfo.css';
import React , { useState } from 'react';
import a1 from '../assests/unknown.png';
import a2 from '../assests/pngtree-application-form-on-paper-sheet-png-image_4982296.png';
import a3 from '../assests/wave_.png';
import a5 from '../assests/WhatsApp Image 2023-07-05 at 15.24.23.jpg';
import Footer from './footer';
import { BsGlobe, BsGithub } from "react-icons/bs";
import { BiMenu , BiX} from "react-icons/bi";
import { Link } from 'react-router-dom';
function Projinfo(){
    const [fix , setFix] = useState(false);

    function setfixed(){
        if(window.scrollY >= 700){
            setFix(true)
        }else{
            setFix(false)
        }
    }

    
    function show(){
        document.getElementById('pitem').style.top="0";
    }
    function hide(){
        document.getElementById('pitem').style.top="-100vh";
    }

    window.addEventListener("scroll", setfixed)
    // console.log(window.scrollY);

    const list = [
        {
            name: "Notebit",
            about: "NoteBit, a go-to platform for BIT students seeking past year question papers. Our mission is to simplify exam preparation by providing an extensive collection of previous question papers.  Join us today and take a step towards achieving your academic goals.",
            tech: "PHP, Ajax , MySQL, JsMap",
            image: a5,
            icon: <BsGlobe/>,
            link: "https://notebit.co.in/"
        },
        {
            name: "Dynamic Application Form",
            about: "DAF (Dynamic Application Form) is user interactive Application form comtain real time editing and payments integrated.",
            tech: "React, Nodejs, MonoDB",
            image: a2,
            icon: <BsGithub/>,
            link: "https://github.com/"
        },
        {
            name: "wave Welcome Bot",
            about: "I made a Discord Welcome Bot for Discord guild that always welcome a new member whenever he/she join the server.",
            tech: "Discord.jsv13, Nodejs, MongoDB",
            image: a3,
            icon: <BsGithub/>,
            link: "https://github.com/"
        },
        {
            name: "FiveM Racing App",
            about: "I created the Racing Ui and Application using Js and Lua for Most famous FiveM roleplay server Velocity Roleplay now know as Soulcity.",
            tech: "Lua, Next.js, Nodejs",
            image: a1,
            icon: <BsGithub/>,
            link: "https://github.com/"
        },
    ];
    return(
        <div className="projectinfocontainer">
            <Parallax  bgImage={Projectimage} bgImageAlt="the" strength={500}>
                <div className='projectinfo-contain'>
                    <div className={fix ? 'pnav fixed' : 'pnav'}>
                        <div className="plogo">
                            Portfolio
                        </div>
                        <BiMenu className='pr-svg' onClick={show}/>
                        <div className='pitem' id='pitem'>
                            <BiX className='pr-cancel' onClick={hide}/>
                            <ul>
                                <li><Link to='/' className='o'>Home</Link></li>
                                <li><Link to='/' className='o'>About</Link></li>
                                <li><Link to='/album' className='o'>Gallery</Link></li>
                                <li><Link to='/' className='o'>ContactMe</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-contain'>
                        PROJECTS
                    </div>
                </div>
            </Parallax>

            <div className='projectholdermore'>
                <div className='projectmain'>
                    {
                        list.map((data)=>
                        <div className='pr-box'>
                            <img src={data.image}></img>
                            <div className='pr-inner'>
                                <h1>{data.name}</h1>
                                <p>{data.about}</p>
                                <h4>Techonogy Used : <span>{data.tech}</span></h4>
                                <div className='pr-icon'><a href={data.link}>{data.icon}</a></div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Projinfo;