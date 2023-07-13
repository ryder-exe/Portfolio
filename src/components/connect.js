import './stylesheets/connect.css'
import { BsInstagram , BsLinkedin, BsDiscord, BsGithub, BsTwitter, BsBehance } from "react-icons/bs";
import { BiUser , BiLogoGmail, BiPhone, BiMessage } from "react-icons/bi";
function connect(){
    return(
        <div className="connectconatiner" id='contact'>
            <div className='connecttext'>Connect with me</div>
            <div className='c-maincontent'>
                <div className='socialconatiner'>
                    <h2>Follow My <span>Socials</span></h2>
                    <div className='minitabcontainer'>
                        <a href=''><div className='minitab instabox'><BsInstagram className='icon'/></div></a>
                        <a href=''><div className='minitab linkbox'><BsLinkedin className='icon'/></div></a>
                        <a href=''><div className='minitab discordbox'><BsDiscord className='icon'/></div></a>
                        <a href=''><div className='minitab githubbox'><BsGithub className='icon'/></div></a>
                        <a href=''><div className='minitab twitterbox'><BsTwitter className='icon'/></div></a>
                        <a href=''><div className='minitab behancebox'><BsBehance className='icon'/></div></a>
                    </div>
                </div>
                <div className='messageconatiner'>
                    <form action=''>
                       <div className='area'>
                        <div className='formicon'><BiUser/></div>
                        <input type='text' placeholder='Full Name' required></input>
                       </div>
                       <div className='area'>
                        <div className='formicon'><BiLogoGmail/></div>
                        <input type='text' placeholder='Email' required></input>
                       </div>
                       <div className='area'>
                        <div className='formicon'><BiPhone/></div>
                        <input type='text' placeholder='Phone Number' required></input>
                       </div>
                       <div className='area'>
                        <div className='formicon'><BiMessage/></div>
                        <textarea placeholder='message' required></textarea>
                       </div>
                       <div className='formbutton'>
                        <input type='submit' value={"Send"}></input>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect;