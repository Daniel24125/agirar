import React from 'react'
import { Typography} from '@material-ui/core'

const Slider = (props) => {

    return (
        <>          
            {
                props.images.map((img, i)=>{
                    return(
                        <div style={{background: `url(${img.url})`, backgroundSize: "cover", backgroundPosition: "center"}} className="imageContainer">
                            <div className={(i+1)%2 === 0 ? "shapeContainer even": "shapeContainer odd"}></div>
                            <div ref={props.textContainerRef} className={(i+1)%2 === 0 ? "imgTextContainer evenText": "imgTextContainer oddText"} >
                                <Typography variant="h4"> {img.title}</Typography>
                                <Typography variant="subtitle1"> {img.description}</Typography>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Slider
