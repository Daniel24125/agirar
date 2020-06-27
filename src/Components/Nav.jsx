import React from 'react'
import {AppBar, Toolbar, Typography, Paper} from '@material-ui/core';
import logo from "../Assets/logo.png"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';

const Nav = (props) => {
    return (
        <AppBar color="inherit" height={props.height} position="fixed">
            <Toolbar className="navContainer">
                <div className="logoContainer">
                    <Link style={{ display: "flex", alignItems: "center"}}to="/home">
                        <img src={logo} alt="logo agirar"/>
                        <Typography variant="h5" >AGIRAR</Typography>
                    </Link>
                </div>
                <div className="navOptionsContainer">
                    <ul>
                        <li>
                            <Typography variant="subtitle1" >SOBRE NÓS</Typography>   
                            <ArrowDropDownIcon/>
                            <Paper className="navSubMenu"  elevation={1}> 
                                <ul>
                                    <li>
                                    <Link style={{color: "inherit", display: "flex", alignItems: "center", textDecoration: "none"}} to="/info">
                                        <Typography variant="subtitle1" >QUEM SOMOS</Typography>   
                                    </Link>
                                    </li>
                                    <li>
                                    <Link style={{color: "inherit", display: "flex", alignItems: "center", textDecoration: "none"}} to="/associado">
                                        <Typography variant="subtitle1" >JUNTE-SE A NÓS</Typography>   
                                    </Link>
                                    </li>
                                    <li>
                                    <Link style={{color: "inherit", display: "flex", alignItems: "center", textDecoration: "none"}} to="/estatutos">
                                        <Typography variant="subtitle1" >ESTATUTOS</Typography>   
                                    </Link>
                                    </li>
                                    <li>
                                    <Link style={{color: "inherit", display: "flex", alignItems: "center", textDecoration: "none"}} to="/relatorios">
                                        <Typography variant="subtitle1" >RELATÓRIOS DE CONTAS</Typography>   
                                    </Link>
                                    </li>
                                    <li>
                                    <Link style={{color: "inherit", display: "flex", alignItems: "center", textDecoration: "none"}} to="/organizacao">
                                        <Typography variant="subtitle1" >ORGÃOS SOCIAIS</Typography>   
                                    </Link>
                                    </li>
                                </ul> 
                            </Paper>
                        </li>
                        <li>
                        <Link style={{color: "inherit", display: "flex", alignItems: "center", textDecoration: "none"}} to="/servicos">
                            <Typography variant="subtitle1" >OS NOSSOS SERVIÇOS</Typography>   
                        </Link>
                        </li>
                        <li>
                        <Link style={{color: "inherit", display: "flex", alignItems: "center", textDecoration: "none"}} to="/parcerias">
                            <Typography variant="subtitle1" >PARCERIAS </Typography>   
                        </Link>
                        </li>
                        <li>
                        <Link style={{color: "inherit", display: "flex", alignItems: "center", textDecoration: "none"}} to="/contactos">
                            <Typography variant="subtitle1" >CONTACTOS </Typography>   
                        </Link>
                        </li>
                        

                    </ul>
                </div>
                <div className="callForActionNavContainer">
                    <div  title="Torne-se associado" className="iconContainer">
                        <Link to="/associado">
                            <EmojiEmotionsIcon  className="icon" color="secondary" />
                        </Link>
                    </div>
                    <div  title="Dê o seu contributo" style={{color: "#E9523E"}} className="iconContainer">
                        <Link to="/donativo">
                            <FavoriteIcon className="icon" />
                        </Link>
                    </div>
                    <div title="Visite o nosso facebook"  style={{color: "#4267B2"}} className="iconContainer">
                        <a rel="noopener noreferrer" target="__blank" href="https://www.facebook.com/agirarassociacao">
                            <FacebookIcon className="icon" />
                        </a>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default  Nav