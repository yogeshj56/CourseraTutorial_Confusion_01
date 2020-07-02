import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    renderComments(){
        var commentArr = this.props.selectedDish.comments;
        if(commentArr != null){

            const comments = commentArr.map((commentDetails)=> {    
                return(
                <div key={commentDetails.id}><br/> {commentDetails.comment} <br/> -- {commentDetails.author}   {commentDetails.date}</div>  
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

    render() {
        if(this.props.selectedDish != null){
            var dish = this.props.selectedDish
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width='100%' src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    
                    {this.renderComments()}
                    
                </div>
            );
        }
        else 
        {
            return(<div></div>)
        }
    }
}

export default DishDetailComponent;