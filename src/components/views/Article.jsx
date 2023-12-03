import React from "react"
import { useParams } from "react-router-dom"
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Skeleton } from "@mui/material";

function Article() {
    let params = useParams()
    const [articleData, setArticleData] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        setLoading(true)
        axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`)
            .then(res => {
                let data = (res.data.articles)
                data.map(i => {
                    if (i.title === params.title) {
                        setArticleData(i)
                        setLoading(false)
                    }
                })
            })
    }, [])
    return (
        <Box sx={{ flexGrow: 1, margin: 5 }}>
            {!loading ? <div className="contentGridBox">
                <Typography variant="h5" align="center" title={articleData.title}>
                    {articleData.title}
                </Typography>
                <Typography variant="body2" align="center" >
                    {articleData.description}
                </Typography>
                <img src={articleData.urlToImage} width="100%" height="80%" alt="No Image" />
                <Typography variant="body1" align="center" title={articleData.title}>
                    {JSON.stringify(articleData.content)}
                </Typography>
                <a href={articleData.url}>
                    <Typography variant="button" align="right">
                        Full Article...
                    </Typography>
                </a>

            </div> : <Skeleton animation="wave" height='300' width="200" variant="rectangular" />}
        </Box>
    )
}
export default Article