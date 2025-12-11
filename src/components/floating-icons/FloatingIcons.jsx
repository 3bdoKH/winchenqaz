import React from 'react'
import './FloatingIcons.css'
import whatsapp from '../../media/whatsapp.svg'
import phone from '../../media/phone.svg'
const FloatingIcons = () => {
    return (
        <div className='floating-icons'>
            <div className='floating-icon' onClick={() => window.open('https://wa.me/+2001055888893', '_blank')}>
                <img src={whatsapp} alt="" />
            </div>
            <div className='floating-icon phone' onClick={() => window.open('tel:01055888893', '_blank')}>
                <img src={phone} alt="" />
            </div>
        </div>
    )
}

export default FloatingIcons
