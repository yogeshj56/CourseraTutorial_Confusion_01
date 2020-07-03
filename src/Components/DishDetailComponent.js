import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderComments(props){
        
        if(props.dish != null){

            var commentArr = props.dish.comments;
            const comments = commentArr.map((commentDetails)=> {    
                return(
                <div key={commentDetails.id}><br/> {commentDetails.comment}
                     <br/> -- {commentDetails.author} ,   
                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short',day:'2-digit'}).format(new Date(Date.parse(commentDetails.date)))}</div>  
                )              
            });
            
            return(
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className = "list-unstyled">
                    {comments}
                </ul>
                </div>
            )
            
        }else{
            return(<div></div>)
        }
    }

    function RenderDish(props){
        if(props.dish != null){
            return(
                    
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                        
                            <CardImg width='100%' src={props.dish.image} alt={props.dish.name}/>
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                           
                        </Card>
                        </div>
                 
            );
        }
        else 
        {
            return(<div></div>);
        }
    }

    const DishDetailComponent = (props) => {
        return(
            <div className="container">
            <div className="row">
            <RenderDish dish={props.selectedDish} />
            <RenderComments dish = {props.selectedDish} />
            </div>
            </div>
        );
    }

export default DishDetailComponent;