import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+94 775386486'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'hakeem786fazli@gmail.com'} text2={'hakeem.2019501@iit.ac.lk'} title={'Email'}/>
                    <ContactItem icon={location} text1={'23A, Amarasekara Mawatha, Colombo 05,'} text2={'Sri Lanka'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
