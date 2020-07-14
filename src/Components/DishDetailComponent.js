import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Card, CardBody, CardImg, CardText, CardTitle,
    Label, Modal, ModalBody, ModalHeader, Row
} from 'reactstrap';


const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(event){
        this.toggleModal();
        //alert(event)
        //event.preventDefault();
    }

    render(){
        return(
            <>
            <Button outline onClick={this.toggleModal}>
                    <span className = "fa fa-edit fa-x"> Submit Comment</span>
            </Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
                <ModalBody>
                    <div className="col-12 col-md-12">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                            
                            <Control.select model=".rating" name="rating"
                                className="form-control"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Row>   
                        <Row className="form-group">
                            <Label htmlFor="yourname">Your Name</Label>
                            <Control.text type="text" model=".yourname" id="yourname" name="yourname"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    minLength:minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".yourname"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="comment">Comment</Label>
                        <Control.textarea model=".comment" id=".comment" name=".comment"
                            rows="6"
                            className="form-control"
                        />
                        </Row>
                        <Row className="form-group">
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Row>
                    </LocalForm>
                    </div>
                </ModalBody>
            </Modal>
            
            </>
        );
    }
}

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