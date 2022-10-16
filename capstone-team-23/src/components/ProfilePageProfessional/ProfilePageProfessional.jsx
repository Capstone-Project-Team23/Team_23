import React from 'react'
import './ProfilePage.css'
import { doc, onSnapshot, collection, query, where,addDoc, getDocs,setDoc, getDoc } from "firebase/firestore";
import db from '../../firebase/firestore'
import Navbar from '../Reusable Components/Navbar/Navbar';
import { getAuth } from "firebase/auth";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
   MDBInput
} from 'mdb-react-ui-kit';
import Button from '../Reusable Components/Buttons/Button';
import Header from '../Reusable Components/Header/Header';
import { useState, useEffect } from 'react';
import Notification from '../Notification/Notification';
import ServiceCheckBox from '../ServiceCheckBox/ServiceCheckBox';
import { MDBCheckbox } from 'mdb-react-ui-kit';
export default function ProfilePageProfessional() {

  const arrOfServices = [
    { Name: "Electrical Services", Path: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" },
    { Name: "General Construction", Path: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80" },
    { Name: "Grass Cutting", Path: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jhc3MlMjBjdXR0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { Name: "Home Cleaning", Path: "https://images.unsplash.com/photo-1538944570562-2c9cb7857097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { Name: "Home Repair", Path: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { Name: "Landscapping", Path: "https://images.unsplash.com/photo-1455243629161-1f993797f78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { Name: "Laundry", Path: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { Name: "Pest Control", Path: "https://images.unsplash.com/photo-1572731561221-96d988d74dc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVzdCUyMGNvbnRyb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { Name: "Plumbing", Path: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { Name: "Welding", Path: "https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { Name: "Window Cleaning", Path: "https://images.unsplash.com/photo-1534350752840-1b1b71b4b4fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZG93JTIwY2xlYW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
  ]


  const auth = getAuth();
    const [disabled, setDisabled] = useState(true)
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState(auth.currentUser.email)
    const [address, setAddress] = useState("")
    const [experience, setExperience] = useState("")
    const [services, setServices] = useState([])
    const [isClicked, setClicked] = useState(false)
    console.log(auth)

    //getting all the data from the database all the customer profiles
 useEffect(async function getAllData() {
  // const querySnapshot = await getDocs(collection(db, 'CustomerProfiles'));
  // querySnapshot.forEach((doc) => {
  //     console.log(doc.data())
  //     setName(doc.data().name)
  //     setEmail(doc.data().email)
  //     setAddress(doc.data().address)
  //     setMobile(doc.data().mobile)
  // })

  const docRef = doc(db, "ProfessionalProfiles", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data())
     if(docSnap.data().name === undefined) {
      setName("")
     }else {
      setName(docSnap.data().name)
     }
     if(docSnap.data().address === undefined) {
      setAddress("")
     }else {
      setAddress(docSnap.data().address)
     }
     if(docSnap.data().mobile === undefined) {
      setMobile("")
     }else {
      setMobile(docSnap.data().mobile)
     }
     if(docSnap.data().experience === undefined) {
      setExperience("")
     }else {
      setExperience(docSnap.data().experience)
     }
     if(docSnap.data().services === undefined) {
      setServices("")
     }else {
      setServices(docSnap.data().services)
      console.log(services)
     } 

     
 
},  [])
    const style = {
        padding:"8px",
        width:"110px",
        color: "rgba(29, 33, 78, 1)"
      }

    const handleEditClick = () => {
        setDisabled(false)
    }
    const handleNameEdit = (e) => {
        setName(e.target.value)
    }
    const handleEmailEdit = (e) => {
        setEmail(e.target.value)
    }
    const handlePhoneEdit = (e) => {
        setMobile(e.target.value)
    }
    const handleAddressEdit = (e) => {
        setAddress(e.target.value)
    }
    const handleExperienceEdit = (e) => {
      setExperience(e.target.value)
  }
  const handleServicesEdit = (e) => {
    setServices(e.target.value)
}
  const showCheck = (e) => {
    return services.includes(e.target.value)
}
const handleCheck = (e) => {
   if(e.target.checked === true) {
      setServices([...services, e.target.value])
      console.log(services)
   }else {
   const  serviceTemp = services.filter(item => item !== e.target.value)
    setServices(serviceTemp)
    console.log(services)
   }
}
    const handleSaveClick = (e) => {

      //removing duplicates from the services array
    //   const uniqueServices = services.filter(function(item, pos) {
    //     return services.indexOf(item) == pos;
    // })

        const pushObj = {
            name,email:auth.currentUser.email,mobile,address,experience,services
        }
        const uid = auth.currentUser.uid
        const docRef =  setDoc(doc(db, "ProfessionalProfiles", uid ),pushObj, { merge: true });
        console.log( docRef)
        console.log(pushObj)
        alert("data is saved")
        setDisabled(true)
    }
  return (
    <section>
        <Navbar name1="Dashboard" name2="Logout" route1="/ProfessionalDashboard" route2="/" profileShow={false} />
        {/* <Notification /> */}
      <MDBContainer className="py-5 whole-container">
        {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Customer Profile</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                 <Button buttonText="Edit"  style={style} onClick={handleEditClick}  ><MDBBtn className='Followbtn'></MDBBtn> </Button> 
                 <Button buttonText="Save" disabled={disabled} style={style} onClick={handleSaveClick}> <MDBBtn outline className="ms-1"></MDBBtn></Button> 
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                
              </MDBCardBody>
            </MDBCard> */}
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                 <Header text="Full Name">   <MDBCardText></MDBCardText> </Header>
                  </MDBCol>
                  <MDBCol sm="9">
                     {/*This is form input trying and testing*/}
                  {/* <Header text="John Smith" style={{fontWeight:'100'}}>   <MDBCardText></MDBCardText> </Header> */}
                  <MDBInput id='form1' type='text' value={name} disabled={disabled} onChange={handleNameEdit}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                  <Header text="Email">   <MDBCardText></MDBCardText> </Header>
                  </MDBCol>
                  <MDBCol sm="9">
                  {/* <Header text="mail@example.com" style={{fontWeight:'100'}}>   <MDBCardText></MDBCardText> </Header> */}
                  <MDBInput id='form1' type='text' value={email} disabled={true} onChange={handleEmailEdit}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                  <Header text="Phone">   <MDBCardText></MDBCardText> </Header>
                  </MDBCol>
                  <MDBCol sm="9">
                  {/* <Header text="(097) 234-5678" style={{fontWeight:'100'}}>   <MDBCardText></MDBCardText> </Header> */}
                  <MDBInput id='form1' type='text' value={mobile} disabled={disabled} onChange={handlePhoneEdit}/>
                  </MDBCol>
                </MDBRow>
                <hr />
              
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                  <Header text="Address">   <MDBCardText></MDBCardText> </Header>
                  </MDBCol>
                  <MDBCol sm="9">
                  {/* <Header text="Bay Area, San Francisco, CA" style={{fontWeight:'100'}}>   <MDBCardText></MDBCardText> </Header> */}
                  <MDBInput id='form1' type='text' value={address} disabled={disabled} onChange={handleAddressEdit}/>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="3">
                  <Header text="Experience in years ">   <MDBCardText></MDBCardText> </Header>
                  </MDBCol>
                  <MDBCol sm="9">
                  {/* <Header text="Bay Area, San Francisco, CA" style={{fontWeight:'100'}}>   <MDBCardText></MDBCardText> </Header> */}
                  <MDBInput id='form1' type='text' value={experience} disabled={disabled} onChange={handleExperienceEdit}/>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="3">
                  <Header text="Provided Services">   <MDBCardText></MDBCardText> </Header>
                  </MDBCol>
                  <MDBCol sm="9">
                  {/* <Header text="Bay Area, San Francisco, CA" style={{fontWeight:'100'}}>   <MDBCardText></MDBCardText> </Header> */}
                  {/* <MDBInput id='form1' type='text' value={services} disabled={disabled} onChange={handleServicesEdit}/> */}
                  
                    {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Default checkbox' /> */}
                    {
        
                        arrOfServices.map(service => {
                            
                          return(
                          <MDBCheckbox name='' value={service.Name} id='' label={service.Name} disabled={disabled} onChange={handleCheck}
                          checked={services.includes(service.Name)} /> )
                        })
                      
                    }
                     
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            {/* <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}