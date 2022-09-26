import React from 'react'
import  { useEffect, useState } from 'react'
import Navbar from '../Reusable Components/Navbar/Navbar'
import Card from './RequestCard/Card'
import img from './RequestCard/man.png'
import { doc, onSnapshot, collection, query, where,addDoc, getDocs } from "firebase/firestore";
import db from '../../firebase/firestore'
import CardHeader from 'react-bootstrap/esm/CardHeader';

function ProfessionalDashboard() {
  ///getting all the requests from the firestore db
  const tempArray = []
  const [filteredCards, setFilteredCards ]= useState([{}]);
  useEffect(async function getAllData() {
    const querySnapshot = await getDocs(collection(db, 'Requests'));
    querySnapshot.forEach((doc) => {
          //  console.log(doc.data().Service)
          tempArray.push(doc.data())
        
        
    })
    setFilteredCards(tempArray)
  },  [])
  return (
    <div>
      <Navbar name1="Contact Us" name2="About Us" route1="/contactus" route2="/about" profileShow={true} />
      <div style={{marginTop:"10rem"}}>
    <Card key="1" Name={"FixItNow"} New={"New"} location={"info.location"}  
    src={img} description={"This is the test"} service={"Plumbing"} Budget={"$3000"} postedAt={"3 Weeks Ago"} />

 {filteredCards.map(card =>     <Card key="1" Name={"FixItNow"} New={"New"} location={card.location}  
    src={img} description={card.description} service={card.service} Budget={"$"+card.budget} postedAt={"3 Weeks Ago"} />)}
</div>
    </div>
  )
}

export default ProfessionalDashboard