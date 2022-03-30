import React, { Children, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import initializeAuthentication from '../../firebase/firebase-init'
import db from '../../firebase/firestore'
import { doc, onSnapshot, collection, query, where,addDoc, getDocs } from "firebase/firestore";
import Card from '../Reusable Components/Card/Card';
//import {} from 'firebase/auth'

function FilterService() {
 initializeAuthentication()
  const chosenService = useSelector(state => state.chooseService)
  const [filteredCards, setFilteredCards ]= useState([{}]);
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
      <div className="d-flex flex-row flex-wrap justify-content-center card-container" >
      {
        filteredCards.map(m => (
          <Card service={m.Name + "-" +m.Service} ImageSrc={"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} />
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