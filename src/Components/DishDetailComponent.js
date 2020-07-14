import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import CommentForm from './CommentForm';

function RenderComments(props){
        
        if(props.comments != null){

            var commentArr = props.comments;
            const comment = commentArr.map((commentDetails)=> {    
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
                    {comment}
                </ul>
                
                <CommentForm/>
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
            </div>
            </div>
        );
    }

export default DishDetailComponent;