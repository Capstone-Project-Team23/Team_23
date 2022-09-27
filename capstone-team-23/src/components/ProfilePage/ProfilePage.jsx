import React from 'react'
import './ProfilePage.css'
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
import { useState } from 'react';

export default function ProfilePage() {

    const [disabled, setDisabled] = useState(true)
    const [name, setName] = useState("John Smith")
    const [mobile, setMobile] = useState("905-456(2902)")
    const [email, setEmail] = useState("mail@example.com")
    const [address, setAddress] = useState("Bay Area, San Francisco, CA")

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
    const handleSaveClick = (e) => {
        const pushObj = {
            name,email,mobile,address
        }
        console.log(pushObj)
    }
  return (
    <section>
      <MDBContainer className="py-5">
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
                  <MDBInput id='form1' type='text' value={email} disabled={disabled} onChange={handleEmailEdit}/>
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