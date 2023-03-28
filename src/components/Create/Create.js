import React, { useState } from "react";
import "./Create.css";
import shirtimg from "../../images/shirt.jpg";
import tshirtimg from "../../images/t-shirt.jpg";
import trousersimg from "../../images/trousers.jpg";
import jeansimg from "../../images/jeans.jpg";
import joggersimg from "../../images/joggers.jpg";
import boxersimg from "../../images/boxers.jpg";
import wash from "../../images/washing-machine/washing-machine.png";
import iron from "../../images/ironing/ironing.png";
import towel from "../../images/towel/towel.png";
import chemical from "../../images/Screen 6/bleach-1.png";
import Summary from "../SummaryPopup/SummaryPopup";

const product =  [{src:shirtimg,alt:"shirt",text:"Shirts",desc:"Lorem Ipsum is simply dummy text of the",key:1},
                  {src:tshirtimg,alt:"tshirt",text:"T-shirts",desc:"Lorem Ipsum is simply dummy text of the",key:2},
                  {src:jeansimg,alt:"jeans",text:"Jeans",desc:"Lorem Ipsum is simply dummy text of the",key:3},
                  {src:trousersimg,alt:"trouser",text:"Trouser",desc:"Lorem Ipsum is simply dummy text of the",key:4},
                  {src:joggersimg,alt:"joggers",text:"Joggers",desc:"Lorem Ipsum is simply dummy text of the",key:5},
                  {src:boxersimg,alt:"boxers",text:"Boxers",desc:"Lorem Ipsum is simply dummy text of the",key:6},]
 

const Create = ({ email }) => {
   //.............................product type...............................
   const [clothesCount,setClothesCount] =useState(
    {
      shirt:{quantity:0,wash:[]},
      tshirt:{quantity:0,wash:[]},
      jeans:{quantity:0,wash:[]},
      trouser:{quantity:0,wash:[]},
      joggers:{quantity:0,wash:[]},
      boxers:{quantity:0,wash:[]}
    }) 
  const [shirt, setshirt] = useState(0);
  const [jeans, setjeans] = useState(0);
  const [trousers, settrousers] = useState(0);
  const [boxers, setboxers] = useState(0);
  const [tshirt, settshirt] = useState(0);
  const [joggers, setjoggers] = useState(0);
  //...........................Wash type......................................
  const [shirtwash, setshirtwash] = useState([]);
  const [jeanwash, setjeanwash] = useState([]);
  const [trouserswash, settrouserwash] = useState([]);
  const [boxerswash, setboxerswash] = useState([]);
  const [tshirtwash, settshirtwash] = useState([]);
  const [joggerswash, setjoggerswash] = useState([]);
  const [proceed, setProceed] = useState(false);
  const [success, setsuccess] = useState(false);
  

  return (
    <>
    <div className="create__body">
      <div className="create__topheader">
        <div className="create__text">
          <p>Create Order</p>
        </div>
        <div className="create__search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.051"
            height="14.553"
            viewBox="0 0 14.051 14.553"
          >
            <path
              id="search"
              d="M14.821,13.256l-3.464-3.6a5.874,5.874,0,1,0-4.5,2.1,5.813,5.813,0,0,0,3.366-1.063l3.49,3.63a.766.766,0,1,0,1.1-1.063ZM6.86,1.533A4.343,4.343,0,1,1,2.517,5.876,4.348,4.348,0,0,1,6.86,1.533Z"
              transform="translate(-0.984)"
              fill="#a0a0a0"
            />
          </svg>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="th">ProductTypes</th>
            <th className="th">Quantity</th>
            <th className="th">Wash Type</th>
            <th className="th">Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((each)=>(
            <tr key={each.key}>
            <td className="product">
              <div className="image">
                <img
                  src={each.src}
                  alt={each.alt.quantity}
                  width="50px"
                  height="50px"
                ></img>
              </div>
              <div className="img__text">
                <h4>{each.text}</h4>
                <p>{each.desc}</p>
              </div>
            </td>
            <td className="quantity">
              {console.log(clothesCount[each.alt].quantity)}
              <input
                type="text"
                size="2"
                value={clothesCount[each.alt].quantity}
                onChange={(e) => {
                  setClothesCount({...clothesCount,[each.alt]:{quantity:e.target.value}})
                }}
              ></input>
            </td>
            <td>
              <div className="washtype">
                <div
                  className="washing"
                  onClick={(e) => {
                    let data = clothesCount[each.alt].quantity+1;
                    let wash = [ ...clothesCount[each.alt].wash,"Washing"]
                    const ClothesData = [...new Set(wash)];
                    setClothesCount({...clothesCount,[each.alt]:{quantity:data,wash:ClothesData}})
                  }}
                >
                  <img src={wash} alt="wash"></img>
                </div>
                <div className="iron">
                  <img
                    src={iron}
                    alt="wash"
                    onClick={(e) => {
                      // let data = clothesCount[each.alt.quantity]+1;
                      // setClothesCount({...clothesCount,[each.alt.quantity]:data})
                      // setshirtwash([...shirtwash, "Ironing "])
                      let data = clothesCount[each.alt].quantity+1;
                      let wash = [...clothesCount[each.alt].wash,"Ironing"];
                      const ClothesData = [...new Set(wash)];
                      setClothesCount({...clothesCount,[each.alt]:{quantity:data,wash:ClothesData}})
                    }}
                  ></img>
                </div>
                <div className="towel">
                  <img
                    src={towel}
                    alt="wash"
                    onClick={(e) => {
                      // let data = clothesCount[each.alt.quantity]+1;
                      // setClothesCount({...clothesCount,[each.alt.quantity]:data})
                      // setshirtwash([...shirtwash, "DryWash "])
                      let data = clothesCount[each.alt].quantity+1;
                      let wash = [...clothesCount[each.alt].wash,"Ironing"];
                      const ClothesData = [...new Set(wash)];
                      setClothesCount({...clothesCount,[each.alt]:{quantity:data,wash:ClothesData}})
                    }}
                  ></img>
                </div>
                <div className="chemical">
                  <img
                    src={chemical}
                    alt="wash"
                    onClick={(e) =>{
                      // let data = clothesCount[each.alt.quantity]+1;
                      // setClothesCount({...clothesCount,[each.alt.quantity]:data})
                      // setshirtwash([...shirtwash, "ChemicalWash "])
                      let data = clothesCount[each.alt].quantity+1;
                      let wash = [...clothesCount[each.alt].wash,"Ironing"];
                      const ClothesData = [...new Set(wash)];
                      setClothesCount({...clothesCount,[each.alt]:{quantity:data,wash:ClothesData}})
                    }}
                  ></img>
                </div>
              </div>
            </td>
            <td className="price">
              {!clothesCount[each.alt].quantity > 0 ? (
                <div>&#8212;</div>
              ) : (
                <div className="price__details">
                  <div>
                    {console.log(clothesCount[each.alt.quantity])}
                    {clothesCount[each.alt].quantity} X 10 ={" "}
                    <span className="create_blue">{clothesCount[each.alt].quantity * 10}</span>
                  </div>
                  <div>
                    <button className="proceed-btn">reset</button>
                  </div>
                </div>
              )}
            </td>
          </tr>
          ))}      
          {/* <tr>
            <td className="product">
              <div className="image">
                <img
                  src={tshirtimg}
                  alt="tshirt"
                  width="50px"
                  height="50px"
                ></img>
              </div>
              <div className="img__text">
                <h4>T-shirts</h4>
                <p>Lorem Ipsum is simply dummy text of the</p>
              </div>
            </td>
            <td className="quantity">
              <input
                type="text"
                size="2"
                value={tshirt}
                onChange={(e) => {
                  settshirt(e.target.value);
                }}
              ></input>
            </td>
            <td>
              <div className="washtype">
                <div
                  className="washing"
                  onClick={(e) => settshirtwash([...tshirtwash, "Washing  "])}
                >
                  <img src={wash} alt="wash"></img>
                </div>
                <div className="iron">
                  <img
                    src={iron}
                    alt="wash"
                    onClick={(e) => settshirtwash([...tshirtwash, "Ironing  "])}
                  ></img>
                </div>
                <div className="towel">
                  <img
                    src={towel}
                    alt="wash"
                    onClick={(e) => settshirtwash([...tshirtwash, "DryWash  "])}
                  ></img>
                </div>
                <div className="chemical">
                  <img
                    src={chemical}
                    alt="wash"
                    onClick={(e) =>
                      settshirtwash([...tshirtwash, "ChemicalWash  "])
                    }
                  ></img>
                </div>
              </div>
            </td>
            <td className="price">
              {!tshirt > 0 ? (
                <div>&#8212;</div>
              ) : (
                <div className="price__details">
                  <div>
                    {tshirt} X 20 ={" "}
                    <span className="create_blue">{tshirt * 10}</span>
                  </div>
                  <div>
                    <button className="proceed-btn">reset</button>
                  </div>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td className="product">
              <div className="image">
                <img
                  src={jeansimg}
                  alt="jeans"
                  width="50px"
                  height="50px"
                ></img>
              </div>
              <div className="img__text">
                <h4>Jeans</h4>
                <p>Lorem Ipsum is simply dummy text of the</p>
              </div>
            </td>
            <td className="quantity">
              <input
                type="text"
                size="2"
                value={jeans}
                onChange={(e) => {
                  setjeans(e.target.value);
                }}
              ></input>
            </td>
            <td>
              <div className="washtype">
                <div
                  className="washing"
                  onClick={(e) => setjeanwash([...jeanwash, "Washing  "])}
                >
                  <img src={wash} alt="wash"></img>
                </div>
                <div className="iron">
                  <img
                    src={iron}
                    alt="wash"
                    onClick={(e) => setjeanwash([...jeanwash, "Ironing  "])}
                  ></img>
                </div>
                <div className="towel">
                  <img
                    src={towel}
                    alt="wash"
                    onClick={(e) => setjeanwash([...jeanwash, "DryWash  "])}
                  ></img>
                </div>
                <div className="chemical">
                  <img
                    src={chemical}
                    alt="wash"
                    onClick={(e) =>
                      setjeanwash([...jeanwash, "ChemicalWash  "])
                    }
                  ></img>
                </div>
              </div>
            </td>
            <td className="price">
              {!jeans > 0 ? (
                <div>&#8212;</div>
              ) : (
                <div className="price__details">
                  <div>
                    {jeans} X 10 ={" "}
                    <span className="create_blue">{jeans * 10}</span>
                  </div>
                  <div>
                    <button className="proceed-btn">reset</button>
                  </div>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td className="product">
              <div className="image">
                <img
                  src={joggersimg}
                  alt="joggers"
                  width="50px"
                  height="50px"
                ></img>
              </div>
              <div className="img__text">
                <h4>Joggers</h4>
                <p>Lorem Ipsum is simply dummy text of the</p>
              </div>
            </td>
            <td className="quantity">
              <input
                type="text"
                size="2"
                value={joggers}
                onChange={(e) => {
                  setjoggers(e.target.value);
                }}
              ></input>
            </td>
            <td>
              <div className="washtype">
                <div
                  className="washing"
                  onClick={(e) => setjoggerswash([...joggerswash, "Washing  "])}
                >
                  <img src={wash} alt="wash"></img>
                </div>
                <div className="iron">
                  <img
                    src={iron}
                    alt="wash"
                    onClick={(e) =>
                      setjoggerswash([...joggerswash, "Ironing  "])
                    }
                  ></img>
                </div>
                <div className="towel">
                  <img
                    src={towel}
                    alt="wash"
                    onClick={(e) =>
                      setjoggerswash([...joggerswash, "DryWash  "])
                    }
                  ></img>
                </div>
                <div className="chemical">
                  <img
                    src={chemical}
                    alt="wash"
                    onClick={(e) =>
                      setjoggerswash([...joggerswash, "ChemicalWash  "])
                    }
                  ></img>
                </div>
              </div>
            </td>
            <td className="price">
              {!joggers > 0 ? (
                <div>&#8212;</div>
              ) : (
                <div className="price__details">
                  <div>
                    {joggers} X 30 ={" "}
                    <span className="create_blue">{joggers * 10}</span>
                  </div>
                  <div>
                    <button className="proceed-btn">reset</button>
                  </div>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td className="product">
              <div className="image">
                <img
                  src={boxersimg}
                  alt="boxers"
                  width="50px"
                  height="50px"
                ></img>
              </div>
              <div className="img__text">
                <h4>Boxers</h4>
                <p>Lorem Ipsum is simply dummy text of the</p>
              </div>
            </td>
            <td className="quantity">
              <input
                type="text"
                size="2"
                value={boxers}
                onChange={(e) => {
                  setboxers(e.target.value);
                }}
              ></input>
            </td>
            <td>
              <div className="washtype">
                <div
                  className="washing"
                  onClick={(e) => setboxerswash([...boxerswash, "Washing  "])}
                >
                  <img src={wash} alt="wash"></img>
                </div>
                <div className="iron">
                  <img
                    src={iron}
                    alt="wash"
                    onClick={(e) => setboxerswash([...boxerswash, "Ironing  "])}
                  ></img>
                </div>
                <div className="towel">
                  <img
                    src={towel}
                    alt="wash"
                    onClick={(e) => setboxerswash([...boxerswash, "DryWash  "])}
                  ></img>
                </div>
                <div className="chemical">
                  <img
                    src={chemical}
                    alt="wash"
                    onClick={(e) =>
                      setboxerswash([...boxerswash, "ChemicalWash  "])
                    }
                  ></img>
                </div>
              </div>
            </td>
            <td className="price">
              {!boxers > 0 ? (
                <div>&#8212;</div>
              ) : (
                <div className="price__details">
                  <div>
                    {boxers} X 10 ={" "}
                    <span className="create_blue">{boxers * 10}</span>
                  </div>
                  <div>
                    <button className="proceed-btn">reset</button>
                  </div>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td className="product">
              <div className="image">
                <img
                  src={trousersimg}
                  alt="trousers"
                  width="50px"
                  height="50px"
                ></img>
              </div>
              <div className="img__text">
                <h4>Trousers</h4>
                <p>Lorem Ipsum is simply dummy text of the</p>
              </div>
            </td>
            <td className="quantity">
              <input
                type="text"
                size="2"
                value={trousers}
              ></input>
            </td>
            <td>
              <div className="washtype">
                <div className="washing">
                  <img src={wash} alt="wash"></img></div>
                <div className="iron">
                  <img
                    src={iron}
                    alt="wash"></img></div>
                <div className="towel">
                  <img src={towel} alt="wash"></img>
                </div>
                <div className="chemical">
                  <img src={chemical} alt="wash"></img>
                </div> </div></td>
            <td className="price">
              {!trousers > 0 ? (
                <div>__</div>
              ) : (<div className="price__details"><div>
                    {trousers} X 10 ={" "}
                    <span className="create_blue">{trousers * 10}</span>
                  </div>
                  <div>
                    <button className="proceed-btn">reset</button>
                  </div>
                </div>
          
          )}
          
          </td></tr> */}
          </tbody></table>
      <div className="btns">
        <button className="cancel-btn">Cancel</button>
        <button className="proceed-btn" onClick= {(e)=> setProceed(true)}>proceed
       
        </button>
      </div>
      
    </div>
    {proceed && <Summary clothesCount={clothesCount} showModal={proceed} setShowModal={setProceed}/>}
    </>
  )};
export default Create;
