import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Input, InputGroup, InputLeftElement, Textarea, Button } from "@chakra-ui/react";
import { BsEnvelope } from 'react-icons/bs';
import { GiPositionMarker } from 'react-icons/gi';
import { HiOutlinePhone } from 'react-icons/hi';
import './contactus.css';

const Contactus = () => {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        window.open(`mailto:mastertech@gmail.com?subject=Sample&body=${body}`);
    };

    const Line = useRef(null);
    const text = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (Line.current) {
                Line.current.classList.add('lineon');
            }
            if (text.current) {
                text.current.classList.add('titleon');
            }
        }, 5);

        return () => {};
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <div className='heading'>
            <h1 className ='title' ref={text}>Contact</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7973686173527!2d80.36228957458336!3d7.487612892524434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a1e3c23e7d9%3A0xdb375bda40e1050!2sMC%20PLAZA!5e0!3m2!1sen!2slk!4v1717609910644!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <div className="contactUs">
                <div className="card-contact">
                    <div className="sendMsg">
                        <h4>Send Us A Message</h4>
                        <div className="inputContact">
                            <InputGroup width="450px">
                                <InputLeftElement pointerEvents="none" children={<BsEnvelope className='envelope' color="white" />} />
                                <Input value={email} onChange={e => setEmail(e.target.value)} type="text" color="white" placeholder="Your Email Address" />
                            </InputGroup>
                        </div>
                        <div className="textAreaCnt">
                            <Textarea value={body} onChange={e => setBody(e.target.value)} width="450px" color="white" placeholder="How Can We Help" height="200px" />
                        </div>
                        <div className="contentContact">
                            <Button onClick={handleSubmit} borderRadius="90px" backgroundColor="#03e9f4" size="180px" className="contactBtn">Submit</Button>
                        </div>
                    </div>
                    <div className="showAdrss">
                        <div className="box">
                            <div className="iconCtn"><GiPositionMarker opacity="0.8" /></div>
                            <div className="adressCtn">
                                <h3>Address</h3>
                                <p>MC Plaza, 12, 2nd Floor, Kurunegala 60000</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconCtn"><HiOutlinePhone opacity="0.8" /></div>
                            <div className="adressCtn">
                                <h3>Tel No:</h3>
                                <p className="infoCtn">0371234567</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconCtn"><BsEnvelope opacity="0.8" /></div>
                            <div className="adressCtn">
                                <h3>E-Mail</h3>
                                <p className="infoCtn">info@Mastertech.lk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactus;
