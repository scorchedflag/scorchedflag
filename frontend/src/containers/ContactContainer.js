import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import '../style/ContactContainer.css'

class ContactContainer extends React.Component {
    // all this might work if i configured a backend -- not sure about axios, never used before. 
    //  would need to set up an API to store emails and use nodemailer to set up email service to gmail.
    
    state = {
        name: '',
        email: '',
        message: '',
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        let data = {
            name: this.state.customer_name,
            email: this.state.customer_email,
            message: this.state.customer_message
        }

        axios.post('API_URI', data)
        .then(res => {
            this.setState({sent: true}, this.resetForm())
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
        })
    }

    render() {
        return (
            <div className='contact-container'>
                <NavBar />
                <form className='contact-form' onSubmit={ (e) => this.handleSubmit(e)}>
                    <input className='name-input' type='text' name='customer-name' placeholder='Enter Your Name' onChange={ (e) => this.handleChange(e)} value={this.props.customer_name}/>
                    <input className='email-input' type='text' name='customer-email' placeholder='Enter Your Email Address' onChange={ (e) => this.handleChange(e)} value={this.props.customer_email}/>
                    <textarea className='message-input' type='text' name='customer-message' placeholder='Enter Your Message' onChange={ (e) => this.handleChange(e)} value={this.props.customer_message}/>
                    <input className='submit-contact' type='submit' name='submit' />
                </form>
            </div>
        )
    }
}

export default ContactContainer