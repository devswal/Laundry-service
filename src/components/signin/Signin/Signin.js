import React,{useState} from 'react'
import Header from '../../signin/Header/Header'
import './Signin.css'
import { Link ,useNavigate} from 'react-router-dom'
import facebook from '../../../images/facebook/facebook.png'
import insta from '../../../images/instagram/instagram.png'
import linkedin from '../../../images/linkedin/linkedin.png'

const Signin = ({setusername,setemail}) => {
  const navigate = useNavigate();

  const [text, settext] = useState('');
  const [password, setpassword] = useState('');
  const [msg,setmsg] = useState("");

  const uploadPost = async (e) => {

  const formData = new FormData();
  formData.append("text",text)
  formData.append("password",password)
  console.log(text,password,formData);

  const res = await fetch("http://localhost:8080/signin/login", {
    method: 'POST',
    headers:{
      "Content-type": "application/json",
    },
    body : JSON.stringify({text,password})
  })
  
  const response = await res.json()
  console.log(response.status);
  if(response.status==="failed"){
    setmsg("user doesn't exist")
  }
  else if(response.status==="oopps!!"){
    setmsg("Check your password")
  }
  else{
    setusername(response.name);
    setemail(response.email)
    console.log(response.name,response.email);
    navigate('/order')
  }
  }
  return (
    <div className='signin'>
      <Header/>
      <div className='signin__body'>
        <div className='signin__left'>
          <div className='signin__left__content'>
            <p>Laundry</p>
            <p>Service</p>
            <h4>Doorstep Wash & Dryclean Service</h4>
            <h5>Don't have an account?</h5>
            <Link to='/register'>
            <button className='reg__login__btn'>Register</button>
            </Link>
          </div>
        </div>
        <div className='signin__right'>
          <div className='signin__right__content'>
              <p>SIGN IN</p>
            <div className='text_field'>
              <label>Moblie/Email</label><br/>
              <input type="text" required value={text} onChange={(e)=>settext(e.target.value)}/>
            </div>
          <div className='text_field'>
              <label>Password</label><br/>
              <input type="text" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
          </div>
            <h5>Forgot password?</h5>
            <div className='msg'>{msg}</div>
            {/* <Link to='/create'> */}
            <div id='btn-'>
            <Link to ='/order'>
            <button className='sign__reg__btn' onClick={uploadPost}>SignIn</button>
            </Link>
            </div>
            
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className='signin__footer'>
            <div className='signin_topfooter'>
                <p>Now Refer & Earn ₹500 for every referral*</p>
                <p className='reff'>* Terms and conditions will be applied</p>
            </div>
            <div className='signin__midfooter'>
              <div className='about'>
                <h3>ABOUT US</h3>
                <p>Doorstep Wash & Dryclean Service</p>
              </div>
              <div className='-home'>
                <h4>home</h4>
                <p>Signin</p>
                <p>Register</p>
              </div>
              <div className='pricing'>
              <h4>pricing</h4>
              </div>
              <div className='career'>
              <h4>career</h4>
              <p>Blog</p>
              <p>Create</p>
              </div>
              <div className='contact'>
              <h4>contact</h4>
              </div>
              <div className='socialmedia'>
                <h3>SOCIAL MEDIA</h3>
                <div className='logo'>
                  <img src={facebook} alt="" />
                  <img src={insta} alt=""/>
                  <img src={linkedin} alt=""/>
                </div>
              </div>
            </div>
            <div className='signin__botfooter'>
              <h5>2022 ©️ Laundry</h5>
            </div>
          </div>
    </div>
  )
}

export default Signin
