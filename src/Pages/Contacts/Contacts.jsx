import React from 'react'
import {Typography, Paper} from "@material-ui/core"
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
 const Contacts = ()=> {
    return (
        <>
        <div className="contactHeaderContainer">
            <Typography className="title" variant="h3" >
                Contacte-nos. <br/> Estamos sempre prontos a ajudar
            </Typography>
        </div>
        <div className="contactsContainer">
            <div className="sectionContainer">
                <div className="textContainer">
                    <Typography color="primary" variant="h4" >
                        Quer visitar-nos? 
                    </Typography>
                    <Paper className="textCard" elevation={2}>
                        <Typography  variant="body1" >
                            <div className="iconPair">
                                <LocationOnIcon color="secondary"/> Rua das Mimosas, 81-A
                            </div>
                            
                        </Typography>
                        <Typography style={{marginLeft: 35}} variant="body1" >
                            4430-458, Vilar de Andorinho
                        </Typography>
                    </Paper>
                </div>
                <div className="textContainer">
                    <Typography color="primary" variant="h4" >
                       Contacte-nos
                    </Typography>
                    <Paper className="textCard" elevation={2}>
                        <Typography  variant="body1" >
                            <div className="iconPair">
                                <PhoneIcon color="secondary"/> 912 353 788
                            </div>
                            <div className="iconPair">
                                <EmailIcon color="secondary"/> agirar.2013@gmail.com
                            </div>
                        </Typography>
                    </Paper>
                </div>
            </div>
            <div className="sectionContainer">
                <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.6014027109677!2d-8.59268990000432!3d41.09955491140556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247b6a680e8a6f%3A0x651b7222910ddad5!2s4430-458%20Vila%20Nova%20de%20Gaia!5e0!3m2!1sen!2spt!4v1593272433391!5m2!1sen!2spt" frameBorder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
        </>
    )
}
export default Contacts