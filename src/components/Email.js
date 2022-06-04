import { Card, Container, TextField, Button, CardContent } from "@mui/material";
import Stack from '@mui/material/Stack';
import Logo from '../images/logo.png'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ndp83hl', 'template_dcvt6cq', form.current, 'gE0BsAdeAOiH-_0J9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


/* function Email() { */
    return (
        <Container >
            <br></br>


                    
                       
                     
                        <div style={{textAlign: "center"}}>
                            <Card>
                            <br></br>
                        <br></br>

                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name : </label>
                        <input type="text" name="user_name" />
                        <br></br>
                        <br></br>
                        <label>Email : </label>
                        <input type="email" name="user_email" />
                        <br></br>
                        <br></br>
                        <label>Message : </label>
                        <textarea name="message" />
                        <br></br>
                        <br></br>
                        <input type="submit" value="Send" />
                    </form>
                    <CardContent >
                        <Stack sx={{minWidth: 1000,minHeight:600,maxHeight:600}}>
                            
                                <div style={{textAlign: "center"}}>
                            <img src={Logo}></img>
                            </div>
                            
                        </Stack>
                    </CardContent>
                    </Card>
                    </div> 
                    
                

                    
                

                    {/* <CardContent >
                        <Stack>
                    <TextField id="outlined-basic" label="Mail Adresiniz" variant="outlined" className='mb-3' />
                    <br></br>
                    <TextField id="outlined-basic" label="Konu" variant="outlined" />
                    <br></br>
                    <TextField id="outlined-basic" label="İçerik" variant="outlined" />
                    <br></br>
                    <Button variant="contained">Gönder</Button>
                    </Stack>
                    </CardContent>
                    <CardContent >
                        <Stack sx={{minWidth: 1000,minHeight:600,maxHeight:600}}>
                            
                                <div style={{textAlign: "center"}}>
                            <img src={Logo}></img>
                            </div>
                            
                        </Stack>
                    </CardContent> */}
    
        </Container>

    )
}

/* export default Email; */
