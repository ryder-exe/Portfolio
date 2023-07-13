import './stylesheets/navbar.css'
import { BiMenu , BiX } from "react-icons/bi";
import { HashLink } from 'react-router-hash-link';
import {  Link} from 'react-router-dom';
function navbar() {

    
    function show(){
        document.getElementById('navcontent').style.top="0";
    }
    function hide(){
        document.getElementById('navcontent').style.top="-100vh";
    }
    return(
       <div className='Navbar'>
         <div className='PcNavbar'>
            <div className='logoholder'>PORTFOLIO</div>
            <BiMenu className='navicon' onClick={show}/>
            <div className='navcontent' id='navcontent'>
                <BiX className='navicon cancel'onClick={hide}/>
                <ul>
                    <li><HashLink smooth to="#about" className='hyperlinkclr'>About</HashLink></li>
                    <li><Link to='/projectinfo' className='linktext'>Project</Link></li>
                    <li><Link to='/album' className='linktext'>Gallery</Link></li>
                    <li><HashLink smooth to="#contact" className='hyperlinkclr'>ContactMe</HashLink></li>
                </ul>
            </div>
         </div>
         <div className='MobileNavbar'>
        
         </div>
       </div>
    )
}

export default navbar;