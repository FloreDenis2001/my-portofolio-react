import React from 'react'
import { BiLogoGmail, BiLogoInstagram, BiLogoWhatsapp } from 'react-icons/bi'

const Contact = () => {


    return (
        <section id='contact'>
            <span className='contact__subtitle'>Get in touch</span>
            <h1>Contact Me</h1>

            <div className="contact__container">
                <div className="contact__content ">


                    <div className="contact__info">

                        <div className="contact__card">
                            <BiLogoGmail className='contact__icon' />
                            <h3 className='contact__card__title'>Email</h3>
                            <span className='contact__card__data'>floredenis907@gmail.com</span>
                            <a href="mailto:floredenis907@gmail.com" className='btn__text'>Send a message</a>
                        </div>
                        <div className="contact__card">
                            <BiLogoWhatsapp className='contact__icon' />
                            <h3 className='contact__card__title'>Whatsapp</h3>
                            <span className='contact__card__data'>+40 751 389 111</span>
                            <a href="https://api.whatsapp.com/send?phone=40751389111" className='btn__text'>Send a message</a>
                        </div>
                        <div className="contact__card">
                            <BiLogoInstagram className='contact__icon' />
                            <h3 className='contact__card__title'>Instagram</h3>
                            <span className='contact__card__data'>isdenisg</span>
                            <a href="https://www.instagram.com/isdenisg/" className='btn__text'>Send a message</a>
                        </div>



                    </div>
                </div>


                <div className="contact__content">


                    <form  method="POST" className="contact__form"  action="https://formsubmit.co/floredenis907@gmail.com" >
                        <input className="contact__form__input" type="text" id="first-name" name="name" placeholder="Nume" required />

                        <input className="contact__form__input " type="text" id="email" name="email" placeholder="Email" required />

                        <input className="contact__form__input" type="tel" id="phone" name="phone" placeholder="Telefon" required />

                        <input type="hidden" id="_subject" name="_subject" value="New email from a client" required />

                        <textarea className="contact__form__textarea" name="message" id="message" placeholder="Mesajul tau" required></textarea>

                        <button type="submit" className="btn btn__primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact