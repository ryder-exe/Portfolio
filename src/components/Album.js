import Projectimage from '../assests/p.png'
import changeimg from '../assests/paper-texture.jpg'
import { Parallax } from 'react-parallax';
import './stylesheets/gallery.css'
import React , { useState } from 'react';
import i1 from '../assests/20230126_150750(0).jpg'
import i2 from '../assests/20221015_131706.jpg'
import i3 from '../assests/20230507_174420.jpg'
import i4 from '../assests/WhatsApp Image 2023-07-04 at 04.07.54.jpg'
import { BsInstagram } from "react-icons/bs";
import { BiMenu , BiX} from "react-icons/bi";
import Footer from './footer'
import { Link } from 'react-router-dom';
function Album(){
    const [fix , setFix] = useState(false);

    function setfixed(){
        if(window.scrollY >= 700){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    function show(){
        document.getElementById('g-itemholder').style.top="0";
    }
    function hide(){
        document.getElementById('g-itemholder').style.top="-100vh";
    }

    window.addEventListener("scroll", setfixed)
    // console.log(window.scrollY);
    return(
        <div className="galleryconatiner">
            <Parallax className='praimg' bgImage={Projectimage} bgImageAlt="the cat" strength={500} bgImageStyle={{height: '100vh', maxWidth: '100%'}}>
                <div className='project-contain'>
                    <div className={fix ? 'galleryNavbar fix' : 'galleryNavbar'}>
                        <div className='g-logoholder'>
                            Portfolio
                        </div>
                        <BiMenu className='showlogo logof' onClick={show}/>
                        <div className='g-itemholder' id='g-itemholder'>
                            <ul>
                                <BiX className='cancellogo logof' onClick={hide}/>
                                <li><Link to='/' className={fix ? 'p t' : 'p'}>Home</Link></li>
                                <li><Link to='/projectinfo' className={fix ? 'p t' : 'p'}>project</Link></li>
                                <li><Link to='/' className={fix ? 'p t' : 'p'}>About</Link></li>
                                <li><Link to='/' className={fix ? 'p t' : 'p'}>ContactMe</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='gallery-contain'>
                         Gallery
                    </div>
                </div>
            </Parallax>
            <div className='galleryinnercon'>
                <div className='g-innercontent'>
                    <div className='leftshow'>
                        
                    </div>
                    <div className='rightshow'>
                        <img src={i1}></img>
                        <img src={i2}></img>
                        <img src={i3}></img>
                        <img src={i4}></img>
                        <div className='follow'>For more picture follow me on insta <BsInstagram className='glogo'/></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Album;