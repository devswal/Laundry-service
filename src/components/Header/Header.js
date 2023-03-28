import { Link, } from 'react-router-dom'
import './Header.css'

const Header = ({username}) => {
  console.log(username);
  return (
      <div className='create_header'>
        <div className='create__header__heading'>
        <Link to="/order">
        <button className='laundry-button'>LAUNDRY</button>
            </Link>
           
        </div>
        <div className='create_header_nav'>
            <h4>Pricing</h4>
            <h4>Career</h4>
            
            <div className='link'>
            <Link to="/">
            <h3 id='username' >{username}</h3>
            </Link>
            </div>
        </div>
      </div>
  )
}

export default Header
