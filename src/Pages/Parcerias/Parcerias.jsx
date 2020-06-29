import React from 'react'
import {Typography} from "@material-ui/core"
import centroParoquial from "../../Assets/centroparoquial.png"
import rarpamp from "../../Assets/rarpamplogo.png"

 const Parcerias = ()=> {
    return (
        <>
            <div className="parceriasHeader">
                <Typography className="title" variant="h3" >
                    Felizmente podemos contar com a ajuda dos nossos parceiros
                </Typography>
            </div>
            <div className="partnersContainer">
                <a target="__blank" rel="noopener noreferrer" href="https://www.facebook.com/Centro-Social-e-Paroquial-de-Vilar-de-Andorinho-315213705190152/">
                    <img src={centroParoquial} alt=""/>
                </a> 
                <a target="__blank" rel="noopener noreferrer" href="http://www.rarp-amp.pt/">
                    <img src={rarpamp} alt=""/>
                </a>
            </div>
        </>
    )
}
export default Parcerias