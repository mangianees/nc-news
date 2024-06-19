import { useEffect, useState } from 'react'
import './App.css'
import { Articles } from './components/articles'
import { Header } from './components/header'
import { MyNavbar } from './components/navbar'
import { BrowserRouter, Routes,Route,useParams } from 'react-router-dom'
import { getNcArticles,getNcArticleById } from './assets/utilities/api'

function App() {

  const [isLoading,setIsLoading] = useState(true)
  const [articles,setArticles] = useState();

    useEffect(()=>{
      setIsLoading(true)
      getNcArticles().then((articlesFromApi)=>{
      setArticles(articlesFromApi)   
      setIsLoading(false)
      })
    },[])



if(isLoading){
              return<p>Loading</p>
              }

  return (
        <>
          <BrowserRouter>
          <Header />
          <MyNavbar />
          <Routes>
              <Route path="/" element={<Articles articles={articles}/>}>Home Route</Route>
              <Route path="/articles/:article_id" element={<Articles articles={articles}/>}>Article Route</Route>
              <Route path="/articles/:article_id/comments" element={<Articles articles={articles}/>}>Article Comment Route</Route>
          </Routes>
          </BrowserRouter>
        </>
        )

}
export default App
