import React from 'react'
import { Typography, Paper, Button} from '@material-ui/core'
import {useGetHistory} from "../../Domain/UseCases"
import { Link } from 'react-router-dom'
import { Skeleton } from '@material-ui/lab'
 const About = ()=> {
    const {
        data: historyCards,
        status: historyStatus
      } = useGetHistory()

    const isLoading = React.useMemo(() => {
        return historyStatus === 'loading'  
        }, [historyStatus])
    

    const [showGallery, setShowGallery] = React.useState({
        show: false, 
        img: ""
    })

    return (
        <>
            <div className={showGallery.show?"galleryContainer" : "galleryContainer hide" }>
                <div onClick={()=>setShowGallery({... showGallery, show: false})} className="blck"></div>
                <img src={showGallery.img} alt="" className="imageContainer"/>
            </div>
            <div className="aboutHeaderContainer">
                <div className="blueContainer"></div>
                <Typography variant="h2">Todos nós somos AGIRAR</Typography>
            </div>
            <div className="contentContainer">
                <div className="sectionContainer">
                    <div className="objectivesContainer">
                        <Typography color="primary"  variant="h6">AGIRAR</Typography>
                        <Typography style={{margin: "25px 0"}} color="primary" variant="h3">OS NOSSOS OBJECTIVOS</Typography>
                        <Typography  style={{textAlign:"justify", marginBottom: 50}} variant="body1">
                            Os principais objetivos da AGIRAR são promover a reabilitação e integração social de pessoas com doença mental grave e dar apoio às suas famílias, assim como promover o apoio, formação e investigação no domínio da saúde mental e reabilitação psicossocial
                        </Typography>
                        <Typography  style={{textAlign:"justify", marginBottom: 35}} variant="caption">
                             Apoiar o desenvolvimento de competências sociais e o processo de reabilitação, no sentido da maior autonomia possível dos indivíduos com doença mental implementando um conjunto de respostas sociais nomeadamente fóruns e/ou unidades socio-ocupacionais, respostas residenciais e apoio domiciliário
                        </Typography>
                        <Typography  style={{textAlign:"justify", marginBottom: 35}} variant="caption">
                        Promover ações e programas de apoio às famílias das pessoas com doença mental
                        </Typography>
                        <Typography  style={{textAlign:"justify", marginBottom: 35}} variant="caption">
                        Colaborar com as redes sociais locais, tais como instituições particulares de solidariedade social, empresas, autarquias e serviços públicos e com elas encontrar estratégias de ação comuns
                        </Typography>
                        <Typography  style={{textAlign:"justify", marginBottom: 35}} variant="caption">
                        Desenvolver ações conjuntas com outras entidades oficiais ou privadas de forma a contribuir para a política de Saúde Mental
                        </Typography>
                        <div className="objCallForActionContainer">
                            <Button color="secondary" variant="contained">
                                <Link to="/associado">TORNAR-SE ASSOCIADO </Link>
                            </Button>
                        </div>
                    </div>
                    

                </div>
                <div className="sectionContainer">
                     <Typography style={{marginBottom: 50, fontWeight: "bold"}} color="primary" variant="h5">A NOSSA HISTÓRIA</Typography>
                    {isLoading && <>
                        <Skeleton className="historyCard" variant="rect"   />
                        <Skeleton className="historyCard" variant="rect"   />
                        <Skeleton className="historyCard" variant="rect"   />
                        <Skeleton className="historyCard" variant="rect"   />
                        <Skeleton className="historyCard" variant="rect"   />
                        <Skeleton className="historyCard" variant="rect"   />
                        <Skeleton className="historyCard" variant="rect"   />

                    </>}
                    {!isLoading && <>
                        {
                            historyCards.map(hist=>{
                                return(
                                    <Paper elevation={1} className="historyCard">
                                        <div className="iconContainer">
                                            <div title="Ver imagem" onClick={()=>setShowGallery({show: true, img: hist.url} )} style={{backgroundImage: `url(${hist.url})`, backgroundSize: "cover", backgroundPosition: "center"}} className="icon"></div>
                                        </div>
                                        <div className="textContainer">
                                            <div className="titleContainer">
                                                <div className="title">
                                                    <Typography style={{fontWeight: "bold"}} color="primary" variant="subtitle1">{hist.title}</Typography>

                                                </div>
                                                <div className="date">
                                                    <Typography color="primary" variant="caption"> <i>{hist.date}</i>  </Typography>
                                                </div>
                                            </div>
                                            <div className="descContainer">
                                            <Typography color="primary" variant="caption"> {hist.description}  </Typography>
                                            </div>
                                        </div>
                                    </Paper>
                                )
                            })
                        }
                    </>}
                </div>
            </div>

        </>
    )
}
export default About