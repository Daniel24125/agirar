import React from 'react'
import { PDFReader } from 'reactjs-pdf-reader';
import estatutos from "../../Assets/Documents/Estatutos.pdf"
import {Typography} from "@material-ui/core"
import GetAppIcon from '@material-ui/icons/GetApp';

 const Estatutos = ()=> {
    return (
        <>
            <div className="estatutosHeader">
            <Typography className="title" variant="h2">Estatutos</Typography>
                
            </div>
            <div className="documentContainer">
                    <div className="header">
                        <Typography>Estatutos</Typography>
                    <a title="Download" target="_blank" rel="noopener noreferrer" href={estatutos}>
                      <GetAppIcon/>      
                    </a>  
                    </div>
                <div className="pdfContainer">
                    <PDFReader url={estatutos} showAllPage={true} />
                </div>
            </div>
        </>
    )
}
export default Estatutos