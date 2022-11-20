import React, { Children, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import initializeAuthentication from '../../firebase/firebase-init'
import db from '../../firebase/firestore'
import { doc, onSnapshot, collection, query, where,addDoc, getDocs } from "firebase/firestore";
import Card from '../Reusable Components/Card/Card';
import Navbar from '../Reusable Components/Navbar/Navbar';
import ContactProfessional from '../ContactProfessional/ContactProfessional';
import Header from '../Reusable Components/Header/Header';
import { Link } from 'react-router-dom';
import Button from '../Reusable Components/Buttons/Button';
import { useDispatch } from "react-redux";
import {chooseService} from '../../redux/actions/ChooseServiceAction'
//import {} from 'firebase/auth'

function FilterService() {
 initializeAuthentication()
 let dispatch = useDispatch();
  const chosenService = useSelector(state => state.chooseService)
  const [filteredCards, setFilteredCards ]= useState([{}]);
  const [contactBtn, setContactBtn] = useState(false)
  const [contactName, setContactName] = useState("Professional")
  const [contactEmail, setContactEmail] = useState("Email")
  const tempArray = []
//   const arrOfServices = ['Grass Cutting', 'Plumbing', 'Home Cleaning', 'Window Cleaning', 'Electrical Service' , 'Landscapping' , 'General Construction', 'Pest Control', 'Laundry' , 'Welding', 'Home Repairs'] 
//   const arrOfNames = ['Deep', 'Anchal', 'Jeel', 'Parth', 'Shukla', 'Aman', 'Shreya', 'John'] 
//   const [rand, setRand] = useState(0);


useEffect(async function getAllData() {
  const querySnapshot = await getDocs(collection(db, 'Professional'));
  querySnapshot.forEach((doc) => {
      const fetchedService = doc.data().Service
      if(fetchedService === chosenService) {
        //  console.log(doc.data().Service)
        tempArray.push(doc.data())
      }
      
  })
  setFilteredCards(tempArray)
},  [])



  return (
    <div>

      {contactBtn ? <ContactProfessional profMail={contactEmail} name={contactName} /> : ""}
      {
        console.log(contactBtn)
      }
      <div className="d-flex flex-row flex-wrap justify-content-center card-container" style={{marginTop:"5rem"}} >
      <Navbar name1="Contact Us" name2="About Us" route1="/contactus" route2="/about" profileShow={true} />

      {
        filteredCards.map(m => (
          <>

          {/* <Card forCustDash={false} service={m.Name + "-" +m.Service} ImageSrc={"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} /> */}

          <div class="card card-con" style={{width: "18rem" , margin:'1rem'}  }>
        <img class="card-img-top" src={"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}  alt="Card image cap"/>
        <div class="card-body mx-auto">
          <h5 class="card-title"> <Header text={m.Name + "-" +m.Service} style={{fontSize:"1.5rem"}} /> </h5>
          <Link to={'/filterService'} 
          onClick={() => dispatch(chooseService(m.Service))}><Button onClick={() =>{
           setContactBtn(true)
           setContactName(m.Name + " for " + m.Service)
           setContactEmail(m.Name+"@fixitnowmailservice.com")
          }} buttonText="Contact Professional" style={{padding:".5rem", marginLeft:"-1rem"}}/></Link>
        </div>
      </div> 
      </>
        ))
        
      }
      </div>
        {/* <button className='btn btn-danger' onClick={() => {
            // const docRef = addDoc(collection(db, "Professional"), {
            //     Name: "Ada",
            //   });
            setRand(Math.floor(Math.random() * 11))
            const temp = {
                Name : arrOfNames[Math.floor(Math.random() * 8)],
                Service:arrOfServices[rand]
            }
            const docRef = addDoc(collection(db, 'Professional'), temp )
        }}> Click</button> */

        
        }



    </div>
  )
}

export default FilterService