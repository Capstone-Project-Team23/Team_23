import React, { Children, useState } from 'react'
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

async function getAllData() {
    const querySnapshot = await getDocs(collection(db, 'Professional'));
    querySnapshot.forEach((doc) => {
        const fetchedService = doc.data().Service
        if(fetchedService === chosenService) {
          //  console.log(doc.data().Service)
          tempArray.push(doc.data())
           
        }
        
    })

    
}

getAllData();
//setFilteredCards(tempArray)
  return (
    <div>This is service by
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
       
       
        tempArray.map(card => (
            <Card service= {card.Service} />
            
        ))
       
        }


    </div>
  )
}

export default FilterService