import React from 'react'
import {Typography, CircularProgress } from "@material-ui/core"

 const Loading = () => {
    return (
        <div className="loadingContainer">
            <CircularProgress size={100} color="secondary" />
            <Typography className="loadingText">
                A carregar...
            </Typography>
           
        </div>
    )
}
export default Loading