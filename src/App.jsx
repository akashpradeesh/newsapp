import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import GridView from "./components/views/GridViews";
import NavbarComponent from "./components/NavbarComponent";
import axios from "axios";
import Article from "./components/views/Article";
import { Skeleton } from "@mui/material";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import SignUp from './components/SignUp';
import Login from "./components/Login";


function App() {
  const [view, setView] = React.useState(false)
  const [newsData, setNewsData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')
  let navigate = useNavigate()
  React.useEffect(() => {
    if (!loggedIn && window.location.pathname !== '/signup') {
      navigate('/login')
    }
    setLoading(true)
    axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`)
      .then(res => {
        console.log(res.data)
        setNewsData(res.data.articles)
        setLoading(false)
      })
  }, [])

  const onLogin = (user) => {
    console.log(user)
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoggedIn(true)
        navigate("/")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });

  }
  const onSubmit = async (user) => {
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login")
        console.log(loggedIn)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true)
        setErrorMsg(errorMessage)
        console.log(errorCode, errorMessage);
        // ..
      });


  }

  const handleView = () => {
    setView(!view)
  }

  return (
    <div>
      <NavbarComponent view={view} changeView={handleView} />
      <Routes>
        <Route path="/" element={<GridView data={newsData} view={view} loading={loading} />} />
        <Route path="/signup" element={<SignUp handleSubmit={onSubmit} error={error} errorMsg={errorMsg}
          setErorMsg={() => {
            setErrorMsg('')
            setError(false)
          }} />} />
        <Route path="/login" element={<Login handleSubmit={onLogin} error={error} errorMsg={errorMsg} setErorMsg={() => {
          setErrorMsg('')
          setError(false)
        }} />} />
        <Route path='/article/:title' element={loggedIn && <Article />} />
      </Routes>
    </div>
  )
}

export default App;
