import emailjs from 'emailjs-com';

const Mailer = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_bxg8eko','template_2bbdjvw',e.target,'6fWIBg3S27AV3LeUU'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    return ( <
        div>

        <h1> Contact Form</h1>
        <form onSubmit={sendEmail}>
            <label>Name:</label>
            <input type="text" name="name" required />

            <label>Email:</label>
            <input type="text" name="user_email" required />

            <label>Message:</label>
            <textarea name="message" row="4"/>

            <input type='submit' value='Send' />
        </form>
        </div>
    );
}

export default Mailer;