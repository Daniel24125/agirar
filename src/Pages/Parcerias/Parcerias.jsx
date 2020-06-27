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
                <img src={centroParoquial} alt=""/>
                <img src={rarpamp} alt=""/>
            </div>
        </>
    )
}
export default Parcerias