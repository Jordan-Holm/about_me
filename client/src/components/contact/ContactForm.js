import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Container, Row, Modal } from 'react-bootstrap';
import { cardContainer } from '../shared/Style';

const ContactForm = () => {

    const form = useRef();
    const [show, setShow] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm(
            'service_bt7sggk', 
            'template_pd77bbk', 
            form.current, 
            'KDyVRO2fxgFnLULtg'
        )
        .then((result) => {
            console.log(result.text);;
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <Container as={cardContainer}>
        <Form ref={form} onSubmit={sendEmail}>
            <h1>Shoot me a message!</h1>
            <Form.Group>
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Enter Name Here'
                    name='user_name'
                    autoFocus
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Email Address
                </Form.Label>
                <Form.Control 
                    type='email' 
                    placeholder='Enter Email Address Here'
                    name='from_email'
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Subject
                </Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Enter Subject Here'
                    name='user_subject'
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Message
                </Form.Label>
                <Form.Control 
                    type='text' 
                    as='textarea'
                    rows={5}
                    placeholder=' . . . '
                    name='message'
                    required
                />
            </Form.Group>
            
            <Row style={{ display: "grid", justifyContent: "right" }}>
                <Button 
                    onClick={() => setShow(true)}
                    variant='success' 
                    type='submit'
                    style={{
                        margin: "2vh",
                        width: "240px",
                        height: "40px",
                    }}
                >
                    Send
                </Button>
            </Row>
            <Modal
                size='sm'
                show={show}
                onHide={ () => window.location.reload() }
            >
                <Modal.Header closeButton>
                    Success!
                </Modal.Header>
                <Modal.Body>
                    Email Sent! I'll reply ASAP.
                </Modal.Body>
            </Modal>
        </Form>
    </Container>
  )
}

export default ContactForm;