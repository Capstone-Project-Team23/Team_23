import emailjs from 'emailjs-com';
import InputField from '../../../Reusable Components/InputFields/InputField';
import Label from '../../../Reusable Components/Label/Label';
import Button from '../../../Reusable Components/Buttons/Button';
import {style, styleHeader, labelStyle, Hed, textAreaStyle, textAreaStyle_Mobile} from '../../ContactUsForm/formstyle'

const Mailer = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_bxg8eko','template_2bbdjvw',e.target,'6fWIBg3S27AV3LeUU'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    return ( <div>

        <form onSubmit={sendEmail}>

            <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Full Name" />
            <InputField type="text" name="name" placeholder="John Cena" width="250px" />

            <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Email" />
            <InputField type="text" name="user_email" placeholder="John Cena" width="250px" />

            <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Message" />
            <textarea style={window.innerWidth<480? textAreaStyle_Mobile :textAreaStyle} name="message" row="4"></textarea>

            <Button buttonText="Send" width="250px" style={
             {
                width:"16rem",
                marginTop:"1rem"
             }} />

            {/* <InputField type="submit" name="user_email" width="250px" style={
             {
                width:"16rem",
                marginTop:"1rem"
             }}/> */}
           
         {/* <input type='submit' value='Send' /> */}
        </form>
        </div>
    );
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