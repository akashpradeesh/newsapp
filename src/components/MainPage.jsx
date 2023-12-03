import React from "react";
import GridView from "./views/GridViews";
import ListView from "./views/ListViews";
import { FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";

function MainPage() {
    const [view, setView] = React.useState(false)
    const [newsData, setNewsData] = React.useState([])
    React.useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-11-02&sortBy=publishedAt&apiKey=3dad80193db441dfaf3ba86977ddfec0')
            .then(res => {
                console.log(res.data)
                setNewsData(res.data.articles)
            })
    }, [])
    const handleView = () => {
        setView(!view)
    }
    return (
        <div>
            <NavbarComponent view={view} changeView={handleView} />
            {view ? <GridView data={newsData} />
                : <ListView data={newsData} />}
        </div>
    )
}

export default MainPage