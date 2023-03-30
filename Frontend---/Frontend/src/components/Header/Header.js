import { Link, } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
      <div className='create_header'>
        <div className='create__header__heading'>
        <Link to="/order">
        <button className='laundry-button'>LAUNDRY</button>
            </Link>
           
        </div>
        <div className='create_header_nav'>
            <h4 id='nav_features'>Pricing</h4>
            <h4 id='nav_features'>Career</h4>
            
            <div className='link'>
            <Link to="/">
            <h3 id='username' >SignOut</h3>
            </Link>
            </div>
        </div>
      </div>
  )
}

export default Header
