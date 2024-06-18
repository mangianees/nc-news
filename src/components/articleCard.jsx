import Button from 'react-bootstrap/Button';                    
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';

export const ArticleCard=({article})=>{
    const [article_id,setArticle_id] = useState();
    const [author,setAuthor] = useState();
    const [title,setTitle] = useState();
    const [topic,setTopic] = useState();
    const [created_at,setCreated_at] = useState();
    const [votes,setVotes] = useState();
    const [article_img_url,setArticle_img_url] = useState();
    const [comment_count,setComment_count] = useState();

    useEffect(()=>{
        setArticle_id(article.article_id);
        setAuthor(article.author);
        setTitle(article.title)
        setTopic(article.topic);
        setCreated_at(article.created_at);
        setVotes(article.votes);
        setArticle_img_url(article.article_img_url);
        setComment_count(article.comment_count)
    },[])
    
    console.log(article_id);


    return(
        <Card>
      <Card.Body >
        <Card.Title>Author: {author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Topic: {topic}</Card.Subtitle>
        <Card.Img variant="top" src={article_img_url} className='imageCard'/>
        <Card.Text>
          {title}
        </Card.Text>
        <p>Created at: {created_at}</p>
        
        <dir>
        <span class="p-3 mb-2 bg-dark text-white">
        <Button variant="dark" className='cardButtons'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
        </svg></Button>
        Votes: {votes}
        <Button variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
</svg></Button>
        </span>
        </dir>
        <br /><br />
        <Button variant="dark">Comments: {comment_count}</Button>
        
        
      </Card.Body>
    </Card>

        /////////////////////////
        // <div className="card">
        //     <div className="card-header">
        //         Author: {author}
        //     </div>
        //     <div className="card-body">
        //         <h5 className="card-title">Topic: {topic}</h5>
        //         <p className="card-text">{title}<br /><br />
        //         Created at: {created_at}</p>
        //         <a href="#" className="btn btn-primary">Go somewhere</a>
        //         Votes: {votes}
        //     </div>
        // </div>

    )
}