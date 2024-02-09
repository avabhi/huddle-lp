
import logo from '../logo.svg'
import '../App.css'

const Header = () => {
  return (
    <div className='logo'>
        <div className='logo-section'>
          <img className='img-logo' src={logo} alt="logo" />
          </div>
        <div className='try'>Try it free</div>
        </div>
  )
}

export default Header