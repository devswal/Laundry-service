import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Create from '../Create/Create'
import './Home.css'

const Home = ({username,email}) => {
  console.log(username,email);
  return (
    <div className='create'>
      <Header username={username}  />
      <div className='create__content'>
        <Sidebar/>
        <Create email={email}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
