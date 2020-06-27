import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="sectionContainer">
                    <div className="title">
                        <Typography variant="caption" > CONTACTE-NOS</Typography>
                    </div>
                    <div className="item">
                        <Typography variant="body2" > 912 353 788 </Typography>
                    </div>
                    <div className="item">
                        <Typography variant="body2" > agirar.2013@gmail.com </Typography>
                    </div>
                    <div className="item">
                        <Typography variant="body2" > 
                            <Link className="contact" to="/contactos" >Onde estamos</Link>
                        </Typography>
                    </div>
                 
                </div>
                <div className="sectionContainer">
                    <div className="title">
                        <Typography variant="caption" > A AGIRAR</Typography>
                    </div>
                    <div className="item">
                        <Typography variant="body2" > 
                            <Link  to="/info" >Quem somos</Link>
                        </Typography>                    </div>
                    <div className="item">
                        <Typography variant="body2" > 
                            <Link  to="/parcerias" >Parcerias</Link>
                        </Typography>                    </div>
                    <div className="item">
                        <Typography variant="body2" > 
                            <Link  to="/servicos" >Serviços</Link>
                        </Typography>
                    </div>
                </div>
                <div className="sectionContainer">
                    <div className="title">
                        <Typography variant="caption" >ADMINISTRAÇÃO</Typography>
                    </div>
                    <div className="item">
                        <Typography variant="body2" > 
                            <Link  to="/estatutos" >Estatutos</Link>
                        </Typography>                    </div>
                    <div className="item">
                        <Typography variant="body2" > 
                            <Link  to="/organizacao" >Orgãos sociais</Link>
                        </Typography>                    </div>
                    <div className="item">
                        <Typography variant="body2" > 
                            <Link  to="/relatorios" >Relatórios de contas</Link>
                        </Typography>
                    </div>
                </div>
                <div className="sectionContainer">
                    <iframe  className="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.6014027109677!2d-8.59268990000432!3d41.09955491140556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247b6a680e8a6f%3A0x651b7222910ddad5!2s4430-458%20Vila%20Nova%20de%20Gaia!5e0!3m2!1sen!2spt!4v1593272433391!5m2!1sen!2spt" frameBorder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="sectionContainer">
                    <span className="copyright" >© Agirar {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    )
}


export default  Footer