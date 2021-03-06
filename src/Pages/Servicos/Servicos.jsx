import React from 'react'
import {Typography, Button, Paper} from "@material-ui/core"
import { Link } from 'react-router-dom'
import {useGetAteliers} from "../../Domain/UseCases"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { Skeleton } from '@material-ui/lab'

 const Servicos = ()=> {
    const {
        data: services,
        status: servicesStatus
      } = useGetAteliers()

    const isLoading = React.useMemo(() => {
        return servicesStatus === 'loading'  
        }, [servicesStatus])
    
    return (
        <>
            <div className="servicesHeaderContainer">
                <div className="contentContainer">
                    <Typography className="title" variant="h2">Torne-se Associado e Participe nas Nossas Atividades</Typography>
                    <Button variant="contained" color="primary"> 
                        <Link to="/associado">junte-se a nós </Link>
                    </Button>
                </div>
               
            </div>
            <div className="servicesContainer">
            {isLoading && <>
                        <Skeleton style={{margin: 10}} width={360} height={500} variant="rect"   />
                        <Skeleton style={{margin: 10}} width={360} height={500} variant="rect"   />
                        <Skeleton style={{margin: 10}} width={360} height={500} variant="rect"   />
                        <Skeleton style={{margin: 10}} width={360} height={500} variant="rect"   />
                        <Skeleton style={{margin: 10}} width={360} height={500} variant="rect"   />
                        <Skeleton style={{margin: 10}} width={360} height={500} variant="rect"   />
                        <Skeleton style={{margin: 10}} width={360} height={500} variant="rect"   />
                        <Skeleton style={{margin: 10}} width={360} height={500} variant="rect"   />

                    </>}

                {!isLoading && <>
                {services.map(serv=>{
                    return(
                        <Paper className="cardContainer" elevation={2}>
                            <div style={{background: `url(${serv.img})`, backgroundSize: "cover", backgroundPosition: "center"}} className="cardHeader"></div>
                            <div className="textContainer">
                                <Typography  variant="h6">{serv.title}</Typography>
                                <Typography  className="desc" variant="caption">{serv.desc}</Typography>
                                <div className="infoContainer">
                                    <div className="iconPair">
                                        <CalendarTodayIcon color="primary"/>
                                        <Typography  color="primary" className="desc" variant="caption">{serv.date}</Typography>

                                    </div>
                                    <div className="iconPair">
                                        <QueryBuilderIcon color="primary"/>
                                        <Typography  color="primary" className="desc" variant="caption">{serv.time}</Typography>

                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })}
                </>}
            </div>
        </>
    )
}
export default Servicos