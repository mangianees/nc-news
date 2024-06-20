import Button from 'react-bootstrap/Button';                    
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import { ArticleWithComments } from './articleWithComments';
import { patchNCVote } from '../assets/utilities/api';

export const ArticleCard=({article,onSelectArticle})=>{
    

const[dataOfArticle,setDataOfArticle] = useState();
const [isLoading,setIsLoading] = useState(true);
const [votes,setVotes]= useState(0)
const {article_id} = useParams();
const [isAddDisable,setIsAddDisable]=useState(false);
const [isTakeAwayDisable,setIsTakeAwayDisable]=useState(false);

    
    useEffect(()=>{
        setIsLoading(true)
        setDataOfArticle(article)
        setVotes(article.votes)
        setIsLoading(false)
    },[])

    const handleVote = async (vote) => {
      // if(vote===1){disableAddButton}
      // if(vote===-1){disableTakeAwayButton}
      setIsAddDisable(!isTakeAwayDisable)
      setIsTakeAwayDisable(!isAddDisable)
      const actualVotes = article.votes;
      setVotes(votes + vote)
      patchNCVote(article_id,votes).then((updatedData)=>{
      setDataOfArticle(updatedData);
      })


    }
    
    return isLoading ? (<p>Data Loading</p>):(
        <div>
        <Card className='cardBody'>
          
            <Card.Body className='cardBody'>
            <Link to={`/articles/${dataOfArticle.article_id}`}>    
              <Card.Title>Author: {dataOfArticle.author} Title: {dataOfArticle.title}</Card.Title>
            </Link>
              <Card.Subtitle className="mb-2 text-muted">Topic: {dataOfArticle.topic}</Card.Subtitle>
              <Card.Img variant="top" src={dataOfArticle.article_img_url} className='imageCard'/>
              <Card.Text>
              {dataOfArticle.body}
              </Card.Text>
              <p>Created at: {dataOfArticle.created_at}</p>
            
              <span className="p-3 mb-2 bg-dark text-white">

              <Button variant="outline-success" className='cardButtons' onClick={() => handleVote(1)} disable={!isTakeAwayDisable}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
              </svg></Button>
              Votes: {dataOfArticle.votes} votr here : {votes}
              <Button variant="outline-danger" className='cardButtons' onClick={() => handleVote(-1)} disable={!isAddDisable}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
      </svg></Button>
              </span>
            
            <br /><br />
    
            <Link to={`/articles/${dataOfArticle.article_id}/comments`}>Comments: {dataOfArticle.comment_count}</Link>
          </Card.Body>
      
      <ArticleWithComments />
    </Card>
    </div>

    )
}