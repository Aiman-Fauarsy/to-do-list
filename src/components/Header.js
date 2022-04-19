import IMG1 from './assets/memo-emoji.png';
import './style/header.css'
const Header=()=>{
    return(
         <div className="container header__container">
             
               <img src={IMG1} alt="logo" />
                 <span className='logo-text'>To Do List</span>
             
         </div>
    )
}

export default Header;