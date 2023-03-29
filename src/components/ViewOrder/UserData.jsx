import { useState } from "react"
import CancelPopup from "../CancelPopup/CancelPopup";
import shirtimg from "../../images/shirt.jpg";
import tshirtimg from "../../images/t-shirt.jpg";
import trousersimg from "../../images/trousers.jpg";
import jeansimg from "../../images/jeans.jpg";
import joggersimg from "../../images/joggers.jpg";
import boxersimg from "../../images/boxers.jpg";

const product =  [{src:shirtimg,alt:"shirt",text:"Shirts",desc:"Lorem Ipsum is simply dummy text of the",key:1},
                  {src:tshirtimg,alt:"tshirt",text:"T-shirts",desc:"Lorem Ipsum is simply dummy text of the",key:2},
                  {src:jeansimg,alt:"jeans",text:"Jeans",desc:"Lorem Ipsum is simply dummy text of the",key:3},
                  {src:trousersimg,alt:"trouser",text:"Trouser",desc:"Lorem Ipsum is simply dummy text of the",key:4},
                  {src:joggersimg,alt:"joggers",text:"Joggers",desc:"Lorem Ipsum is simply dummy text of the",key:5},
                  {src:boxersimg,alt:"boxers",text:"Boxers",desc:"Lorem Ipsum is simply dummy text of the",key:6},]
 

const UserData = ({users}) => {
    const [clothesCount,setClothesCount] =useState(
        {
          shirt:{quantity:0,wash:[]},
          tshirt:{quantity:0,wash:[]},
          jeans:{quantity:0,wash:[]},
          trouser:{quantity:0,wash:[]},
          joggers:{quantity:0,wash:[]},
          boxers:{quantity:0,wash:[]}
        }) 
  const [showSummary, setShowSummary] = useState(false)
  const openModal = () =>{
    setShowSummary(!showSummary)
  }  
    return (
        <>
            {
                users.map((curUser) => {
                    // const {id, name, email} = curUser;
                    // const {street, city, zipcode} = curUser.address;

                    return <>
                        <tr key={curUser.orderID}>
                            <td>{curUser.orderID}</td>
                            <td>{curUser.orderDate}</td>
                             <td>{curUser.store}</td> 
                             <td>{curUser.city}</td> 
                             <td>{curUser.phone}</td>
                            <td>{curUser.totalItems}</td>
                            <td>{curUser.price}</td>
                            <td>{curUser.status}</td>
                            <td> <button onClick={()=>openModal()} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <svg fill="#fffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 42 42" enable-background="new 0 0 42 42" >
<path d="M15.3,20.1c0,3.1,2.6,5.7,5.7,5.7s5.7-2.6,5.7-5.7s-2.6-5.7-5.7-5.7S15.3,17,15.3,20.1z M23.4,32.4
	C30.1,30.9,40.5,22,40.5,22s-7.7-12-18-13.3c-0.6-0.1-2.6-0.1-3-0.1c-10,1-18,13.7-18,13.7s8.7,8.6,17,9.9
	C19.4,32.6,22.4,32.6,23.4,32.4z M11.1,20.7c0-5.2,4.4-9.4,9.9-9.4s9.9,4.2,9.9,9.4S26.5,30,21,30S11.1,25.8,11.1,20.7z"/>
</svg>

  </button></td>
                        </tr>
                        {showSummary && <CancelPopup clothesCount={clothesCount} showModal={showSummary} setShowModal={setShowSummary} />}
                    </>
                })

            }
        </>
    )
}
export default UserData;


