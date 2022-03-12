import logoStylish from '../../assets/logo/stylish-logo.png';
import './style.css'

export default function LogoBrand() {
    
    return (
        <div className="logo-container">
              <img alt="logo" className="logo" src={logoStylish}></img>
        </div>
      
    )
}