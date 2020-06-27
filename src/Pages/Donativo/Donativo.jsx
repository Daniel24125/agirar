import React from 'react'
import { Typography, Button } from '@material-ui/core'
import logo from "../../Assets/logo2.png"
import { Link } from 'react-router-dom'

 const Donativo = () => {
    return (
        <>
            <div className="donativoHeaderContainer">
                <Typography variant="h3" className="title">
                    A SUA AJUDA FAZ A DIFERENÇA
                </Typography>
            </div>
            <div className="donativoInfoContainer">
                <div className="donateInfoContainer">
                    <Typography color="primary" variant="h3">Pretende efetuar um donativo?</Typography>
                    <Typography style={{textAlign: "center", margin: "10px 0 25px 0", maxWidth: "600px"}} variant="subtitle1">Precisamos de si para continuar a desenvolver os nossos Atelieres e as atividades junto das famílias! Basta fazer uma tranferência bancária para:</Typography>
                    <Typography variant="subtitle1">NIB: 0036 0051 99100351967 81</Typography>
                    <Typography variant="subtitle1">IBAN: PT50 0036 0051 99100351967 81</Typography>
                    <Typography color="primary"style={{margin: "10px 0", fontWeight: "bold"}} variant="h5">O seu donativo faz a diferança!</Typography>
                    <Typography style={{margin: "50px 0 30px 0"}} variant="h3">Quer juntar-se à nossa família? </Typography>
                    <Button variant="contained" color="secondary"> 
                        <Link to="/associado">TORNE-SE ASSOCIADO </Link>
                    </Button>
                    <img src={logo} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Donativo