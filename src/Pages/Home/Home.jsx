import React from 'react'
import donate from "../../Assets/donate.png"
import { Typography, Button, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {useGetCards, useGetSliderInfo} from "../../Domain/UseCases"
import ScrollContainer from 'react-indiana-drag-scroll'
import ShareIcon from '@material-ui/icons/Share';
import Slider from "../../Components/Slider"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Loading from "../../Components/Loading"

const Home = ()=> {
   
    const {
        data: cards,
        status: cardsStatus
      } = useGetCards()

      const {
        data: images,
        status: imagesStatus
      } = useGetSliderInfo()

    const [imgPos, setImgPos] = React.useState(0)
    const imagesContainer = React.useRef();
    const width = window.innerWidth -17
    const textContainerRef = React.useRef();
    const [isActive, setIsActive] = React.useState(true);

    const handleScroll = (i, clicked = false)=>{
        setImgPos(i)
        if(clicked) setIsActive(false)
        imagesContainer.current.scrollLeft =  width*i
    } 


    React.useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            if(imgPos < images.length-1){
                handleScroll(imgPos +1)
            }else{
                handleScroll(0)
            }
          }, 5000);
        } else  {
          clearInterval(interval);
        }
        return () => clearInterval(interval)
      }, [isActive, imgPos, images]);
    

    const isLoading = React.useMemo(() => {
    return cardsStatus === 'loading' || 
    imagesStatus === "loading"
    }, [cardsStatus, imagesStatus ])



    return (
        <>
            {isLoading && <Loading/>}
            
           {!isLoading && <div className="sliderContainer">
                <div className="imageNavigationContainer">
                    <div className="arrowsContainer">
                        <ArrowBackIosIcon onClick={()=>handleScroll(imgPos-1, true)} className={imgPos === 0? "hide": ""}/> 
                        <ArrowBackIosIcon onClick={()=>handleScroll(imgPos+1, true)} className={imgPos === images.length-1? "hide": ""} style={{transform: "rotate(180deg)"}} />
                    </div>
                    <div className="navBulletContainer">
                    {
                        images.map((img, i)=>{
                            return(
                                <div onClick={()=>handleScroll(i, true)} className={imgPos === i ? "navBullet acitveBullet": "navBullet"}></div>
                            )
                        })
                    }
                    </div>
                </div>
                <div id="imagesContainer" ref={imagesContainer}  className="imagesContainer">
                    <Slider textRef={textContainerRef} images={images} />
                </div>
            </div>}
            <div className="callForActionContainer">
                <Typography className="objectives" variant="h5">Os principais objetivos da AGIRAR são promover a reabilitação e integração social de pessoas com doença mental grave e dar apoio às suas famílias, assim como promover o apoio, formação e investigação no domínio da saúde mental e reabilitação psicossocial</Typography>
                <div className="buttonsContainer">
                    <Button variant="contained" color="primary"> 
                        <Link to="/info"> Saber Mais </Link>
                    </Button>
                    <Button variant="contained" color="secondary"> 
                        <Link to="/associado">TORNAR-SE ASSOCIADO </Link>
                    </Button>
                </div>
            </div>
         {!isLoading &&  <ScrollContainer className="newsContainer">
                {
                    cards.map(card=>{
                        return(
                            <Paper className="newsCardContainer" elevation={3}>
                                <div className="newsInfoContainer">
                                    <Typography style={{fontWeight: "bold"}} color="primary" variant="h6">{card.title} </Typography>
                                    <Typography  style={{margin: "10px 0"}} variant="caption">{card.description} </Typography>
                                    <Button className="share" > <ShareIcon/> partilhar </Button>

                                </div>
                                <div style={{backgroundImage: `url(${card.img})`, backgroundSize: "cover", backgroundPosition: "center"}} className="newsInfoContainer"></div>
                            </Paper>
                        )
                    })
                }
            </ScrollContainer>}
            <div className="donateContainer">
                <img src={donate} alt=""/>
                <div className="donateInfoContainer">
                    <Typography variant="h3">Pretende efetuar um donativo?</Typography>
                    <Typography style={{margin: "10px 0 25px 0", maxWidth: "600px"}} variant="subtitle1">Precisamos de si para continuar a desenvolver os nossos Atelieres e as atividades junto das famílias! Basta fazer uma tranferência bancária para:</Typography>
                    <Typography variant="subtitle1">NIB: 0036 0051 99100351967 81</Typography>
                    <Typography variant="subtitle1">IBAN: PT50 0036 0051 99100351967 81</Typography>
                    <Typography style={{margin: "10px 0", fontWeight: "bold"}} variant="h5">O seu donativo faz a diferança!</Typography>

                </div>
            </div>
        </>
    )
}

export default Home