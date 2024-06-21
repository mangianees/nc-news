import { Card } from "react-bootstrap"

export const CommentCard =({comment})=>{

    return(
        <div>
        <Card body className="comments">
		    <Card.Title>Author: {comment.author}</Card.Title>
		    <Card.Text>{comment.body}</Card.Text>
            <Card.Text>Votes: {comment.votes}</Card.Text>
            <Card.Text>Date: {comment.created_at}</Card.Text>
        </Card>
        </div>
    )

}