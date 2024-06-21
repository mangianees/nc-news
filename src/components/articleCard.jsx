import Button from 'react-bootstrap/Button';                    
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import { ArticleWithComments } from './articleWithComments';
import { patchNCVote } from '../assets/utilities/api';

export const ArticleCard=({article})=>{
    
const [isLoading,setIsLoading] = useState(true);
const {article_id} = useParams();
const [isAddDisable,setIsAddDisable]=useState(false);
const [isTakeAwayDisable,setIsTakeAwayDisable]=useState(false);
const [image_url,setImage_url] = useState('');
const [author,setAuthor] = useState('');
const [body,setBody] = useState('');
const [comment_count,setComment_count] = useState('');
const [created_at,setCreated_at]= useState('');
const [title,setTitle]= useState('');
const [topic,setTopic]= useState('');
const [currentVotes,setCurrentVotes]= useState('')
const [votes,setVotes]= useState('')


    
    useEffect(()=>{
      
        setIsLoading(true)
        setImage_url(article.article_img_url)
        setAuthor(article.author)
        setBody(article.body)
        setComment_count(article.comment_count)
        setCreated_at(article.created_at)
        setTitle(article.title)
        setTopic(article.topic)
        setCurrentVotes(article.votes)
        setIsLoading(false)
    },[])

    const handleVote = async (vote) => {
      const patchObject = {}
      if(vote===1){
        setIsAddDisable(true)
        setIsTakeAwayDisable(false)
      }
      else{
        setIsTakeAwayDisable(true)
        setIsAddDisable(false)
      }

      patchObject.username = author;
      patchObject.body = body;
      patchObject.votes = vote;
      patchNCVote(article_id,patchObject).then((updatedData)=>{
        setAuthor(updatedData.author)
        setBody(updatedData.body)
        setCurrentVotes(updatedData.votes)
      })
    }
    
    

    return isLoading ? (<p>Data Loading</p>):(
       
       <div className='container'>
        <Card>
            
            <Card.Body className='cardBody'>
              <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none' }}>    
              <p className='cardPText'> Author: {author}        Topic: {topic}   Created at: {created_at}</p>
              <Card.Header as="h3" className='cardTitle'>{title}</Card.Header>
              </Link>
              
              <Card.Img variant="top" src={image_url} className='imageCard'/>
              <Card.Text>
              {body}
              </Card.Text>
             
             {article_id? 
             
             <div>
             <span className="p-3 mb-2 bg-dark text-white">
             Votes: {currentVotes}
             <Button variant="outline-success" className='cardButtons' onClick={() => handleVote(1)} disabled={isAddDisable}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
             </svg></Button>
             
                 <Button variant="outline-danger" className='cardButtons' onClick={() => handleVote(-1)} disabled={isTakeAwayDisable}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                 <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
         </svg></Button>
             </span>
         </div>
             :null}
             
            
            <br /><br />
    
            {/* <Button variant="outline-light">Comments: {comment_count}</Button> */}
          </Card.Body>
      
      {article_id?<ArticleWithComments />:null}

    </Card>
    </div>
  

    )
}
