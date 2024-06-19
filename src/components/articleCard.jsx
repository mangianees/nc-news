import Button from 'react-bootstrap/Button';                    
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';

export const ArticleCard=({article})=>{
    

const[dataOfArticle,setDataOfArticle] = useState();
const [isLoading,setIsLoading] = useState(true);
    
    useEffect(()=>{
        setIsLoading(true)
        setDataOfArticle(article)
        setIsLoading(false)
    },[])
    
    return isLoading ? (<p>Data Loading</p>):(
        <Card className='cardBody'>
          <Link to={`/articles/${dataOfArticle.article_id}`}>
            <Card.Body className='cardBody'>
              <Card.Title>Author: {dataOfArticle.author} Title: {dataOfArticle.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Topic: {dataOfArticle.topic}</Card.Subtitle>
              <Card.Img variant="top" src={dataOfArticle.article_img_url} className='imageCard'/>
              <Card.Text>
              {dataOfArticle.body}
              </Card.Text>
              <p>Created at: {dataOfArticle.created_at}</p>
            
              <span className="p-3 mb-2 bg-dark text-white">
              <Button variant="dark" className='cardButtons'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
              </svg></Button>
              Votes: {dataOfArticle.votes}
              <Button variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
      </svg></Button>
              </span>
            
            <br /><br />
            <Button variant="dark">Comments: {dataOfArticle.comment_count}</Button>
            
            
          </Card.Body>
      </Link>
    </Card>

    )
}