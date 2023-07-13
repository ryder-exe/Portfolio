import './stylesheets/footer.css'
import { BiCopyright , BiHeart} from "react-icons/bi";

function footer(){
    return(
        <div className="footer">
            <div className='footer-maintext'>Thanks For Visiting</div>
            <div className='footer-innertext'>Copyright<BiCopyright className='footericon'/> 2023 All Right Reserved | Design and Created By Faiz <BiHeart className='footericon heart'/> </div>
        </div>
    )
}

export default footer;