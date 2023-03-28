import React,{useState} from 'react'
import Header from '../../signin/Header/Header'
import './Register.css'
import {Link,useNavigate} from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [name, setname] = useState('');
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');
    const [msg,setmsg] = useState("");
    const [phone,setphone] = useState();
    const [pincode,setpincode] = useState();
    const [state,setstate] = useState("");
    const [district,setdistrict] = useState("");
    const [address,setaddress] = useState("");
    const [agreement, setAgreement] = useState(false);

    const handleChange = (event) => {
      setAgreement(event.target.checked);
    }
  
    const uploadPost = async (e) => {
      e.target.preventDefault();

    const formData = new FormData();
    formData.append("name",name)
    formData.append("email",email)
    formData.append("password",password)
    console.log(formData);
    const res = await fetch("http://localhost:8080/signin/register",{
      method: 'POST',
      headers:{
        "Content-type": "application/json",
      },
      body : JSON.stringify({name,email,password,phone,state,district,address,pincode})
    })
    const response = await res.json()
    if(response.status === "Failed-user"){
        setmsg("User already exists")
    }
    if(response.status === "success"){
      navigate('/order')
  }
}
    
  return (
    <div className='reg'>
      <Header/>
      <div className='reg__body'>
        <div className='reg__left'>
          <div className='reg__left__content'>
            <p>Laundry</p>
            <p>Service</p>
            <h4>Doorstep Wash & Dryclean Service</h4>
            <h5>Already have an account</h5>
            <Link to ='/'>
            <button className='sign__btn'>Sign In</button>
            </Link>
          </div>
          {/* <div className='sign_reg_btn'></div> */}
        </div>
        <div className='reg__right'>
          <div className='reg__right__content'>
              <p>Register</p>
            <div className='reg__inputs'>
              <div className='text_field'>
              <label>Name</label><br/>
              <input type="text" required value={name} onChange={(e)=>setname(e.target.value)}/>
              </div>
            <div className='text_field'>
              <label>Email</label><br/>
              <input type="text" required value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className='text_field'>
              <label>Phone</label><br/>
              <input type="text" required value={phone} onChange={(e)=>setphone(e.target.value)}/>
            </div>
            <div className='text_field'>
              <label>State</label><br/>
              <input type="text" required value={state} onChange={(e)=>setstate(e.target.value)}/>
            </div>
            <div className='text_field'>
              <label>District</label><br/>
              <input type="text" required value={district} onChange={(e)=>setdistrict(e.target.value)}/>
            </div>
            <div className='text_field'>
              <label>Address</label><br/>
              <input type="text" required value={address} onChange={(e)=>setaddress(e.target.value)}/>
            </div>
            <div className='text_field'>
              <label>Pincode</label><br/>
              <input type="text" required value={pincode} onChange={(e)=>setpincode(e.target.value)}/>
            </div>
            <div className='text_field'>
              <label>Password</label><br/>
              <input type="text" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            </div>
            {msg}
            <div className='checck'>
            <input type="checkbox" 
               name="agreement"
              onChange={handleChange}></input>
            <span>I agree to Terms & Condition receiving marketing and promotional materials</span>
            </div>
            
            {/* {checked} */}
            {/* <Link to='/login'> */}
            <Link to="/order">
            <div id='btn'><button className='reg__btn' disabled={!agreement} onClick={uploadPost}>Register</button></div>
      </Link>
           
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className='reg__footer'>
            <div className='reg_topfooter'>
                <h3>Now Refer & Earn ₹500 for every referral*</h3>
                <p className='reff'>* Terms and conditions will be applied</p>
            </div>
            <div className='reg__midfooter'>
              <div className='about'>
                <h3>ABOUT US</h3>
                <p>Doorstep Wash & Dryclean Service</p>
              </div>
              <div className='home'>
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
              </div>

            </div>
            <div className='reg__botfooter'>
              <h5>2022 ©️ Laundry</h5>
            </div>
          </div>
    </div>
  )
}

export default Register
