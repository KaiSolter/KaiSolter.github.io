import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';
import './General.css'


//page works but could use better styling
function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_gpwk94t', 'template_x4vh4gj', formData, 'acqC_i250ED-NdGyO')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsModalOpen(true);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setErrorMessage('Failed to send message, please try again later.');
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <h1 className="black-text">Contact Me!</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="label">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="textarea"
                    />
                </div>
                <button type="submit" className="button">Send Message</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Thank you for your message! We will get back to you soon.</p>
                        <button onClick={closeModal} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contacts;
