import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import './style.css'
import { useNavigate } from "react-router-dom";

function GridView({ data, view, loading }) {
    let navigate = useNavigate()
    const openFullArticle = (newData) => {
        console.log(newData)
        navigate(`/article/${newData.title}`)
    }
    return (
        <Box sx={{ flexGrow: 1, margin: 5 }}>
            <Grid container spacing={2}>
                {data.map(content => (
                    <Grid xs={view ? 3 : 6} md={view ? 3 : 6} onClick={() => openFullArticle(content)}>
                        <div className="contentGridBox">
                            <img src={content.urlToImage} width="100%" height="80%" alt="No Image" />
                            <Typography variant="h6" align="center" noWrap title={content.title}>{content.title}</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default GridView