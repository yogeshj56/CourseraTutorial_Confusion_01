import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            // React fragments shortform
            <> 
                <Navbar dark>
                <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>   
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con fusion</h1>
                                <p>We take inspiration from the Eolrd's best cuisiness and creatre a unique fusion experince. Our lipmocking creation will tickle your cullinery</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header