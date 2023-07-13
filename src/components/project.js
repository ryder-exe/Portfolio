import './stylesheets/project.css'
import Projectimage from '../assests/bgi.png'
import { Parallax } from 'react-parallax';
import a1 from '../assests/unknown.png';
import a2 from '../assests/pngtree-application-form-on-paper-sheet-png-image_4982296.png';
import a3 from '../assests/wave_.png';
import a4 from '../assests/image.png';
import a5 from '../assests/WhatsApp Image 2023-07-05 at 15.24.23.jpg';
import {  Link} from 'react-router-dom';
function project(){
    const projectlist = [
        {
            image: a5,
            Name: "Notebit",
            about: "NoteBit, a go-to platform for BIT students seeking past year question papers. Our mission is to simplify exam preparation by providing an extensive collection of previous question papers.  Join us today and take a step towards achieving your academic goals."
        },
        {
            image: a2,
            Name: "DAF",
            about: "DAF (Dynamic Application Form) is user interactive Application form comtain real time editing and payments integrated."
        },
        {
            image: a3,
            Name: "Welcome Bot",
            about: "I made a Discord Welcome Bot for Discord guild that always welcome a new member whenever he/she join the server."
        },
        {
            image: a1,
            Name: "FiveM Racing App",
            about: "I created the Racing Ui and Application using Js and Lua for Most famous FiveM roleplay server Velocity Roleplay now know as Soulcity."
        },
        {
            image: a4,
            Name: "Admin DashBoard Panel",
            about: "Created Advanced Admin Panel, You can integrated panel with your website and Discord bot. Now currenty using as a Notbit Admin Panel."
        },
        {
            image: a2,
            Name: "Prakrida Registration Form",
            about: "Created Registration Form for Prakrida 2023."
        },
    ];
    return(
       <div className='projectcontainer'>
            <Parallax  bgImage={Projectimage} bgImageAlt="the cat" strength={1000}>
                <div className='project-contain'>
                    <div className='text-contain'>
                        PROJECTS
                        <h6>Scroll To see More Projects</h6>
                    </div>
                </div>
            </Parallax>

            <div className='projectholder' id='project'>
                <h1 className='iop'>Projects Lists</h1>
                <div className='pbox-holder'>
                    {
                        projectlist.map((data)=>
                        <div className='pbox'>
                        <img src={data.image}></img>
                        <h3>{data.Name}</h3>
                        <p>{data.about}</p>
                        </div>
                        )
                    }
                </div>
                <div className='buttonholder'>
                </div>
            </div>
       </div>
    )
}

export default project;