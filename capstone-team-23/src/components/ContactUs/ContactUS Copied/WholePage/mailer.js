import React from 'react';
import emailjs from 'emailjs-com';
import InputField from '../../../Reusable Components/InputFields/InputField';
import Label from '../../../Reusable Components/Label/Label';
import Button from '../../../Reusable Components/Buttons/Button';
import {style, styleHeader, labelStyle, Hed, textAreaStyle, textAreaStyle_Mobile} from '../../ContactUsForm/formstyle'

const emailState = {
    email: '',
    error: '',
    success: ''
   
}

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_bxg8eko','template_2bbdjvw',e.target,'6fWIBg3S27AV3LeUU'
    ).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
}

class Mailer extends React.Component {

    constructor(){
        super();
        this.state = emailState;
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            email : e.target.value
        });
    }

    emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid",
                success: ""
            });

        
            return false;
        }

        else if(this.state.email || regex.test(this.state.email) === true) {
            console.log("Inside Else");
           this.setState({
               success: "Thanks for reaching us.",
               error: ""
              
           });
           return false;
           
          
        }
        return true;
    }

    onSubmit(){
        if(this.emailValidation()){
            console.log(this.state);
            this.setState(emailState);
        }
    }

   
    render(){
    return ( <div>

        <form onSubmit={sendEmail}>

            <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Full Name" />
            <InputField type="text" name="name" placeholder="John Cena" width="250px" />

            <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Email" />
            <InputField type="text" name="user_email" value={this.state.email} onChange={this.onChange}  placeholder="John Cena" width="250px" />
            <span className="text-danger">{this.state.error}</span>
            

            <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Message" />
            <textarea style={window.innerWidth<480? textAreaStyle_Mobile :textAreaStyle} name="message" row="4"></textarea>
          
            <Button buttonText="Send" width="250px" onClick={()=>this.onSubmit()} style={
             {
                width:"16rem",
                marginTop:"1rem"
             }} />

<span className="text-success">{this.state.success}</span>
             
        </form>
        </div>
    );
}
}


export default Mailer;



// import emailjs from 'emailjs-com';

// const Mailer = () => {

//     function sendEmail(e){
//         e.preventDefault();

//         emailjs.sendForm('service_bxg8eko','template_2bbdjvw',e.target,'6fWIBg3S27AV3LeUU'
//         ).then(res => {
//             console.log(res);
//         }).catch(err => console.log(err));
//     }

//     return ( <
//         div>

//         <h1> Contact Form</h1>
//         <form onSubmit={sendEmail}>
//             <label>Name:</label>
//             <input type="text" name="name" required />

//             <label>Email:</label>
//             <input type="text" name="user_email" required />

//             <label>Message:</label>
//             <textarea name="message" row="4"/>

//             <input type='submit' value='Send' />
//         </form>
//         </div>
//     );
// }

// export default Mailer;