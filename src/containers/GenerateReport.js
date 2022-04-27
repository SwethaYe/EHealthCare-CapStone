import React, { Component } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';



class GenerateReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
        }
    };

    componentDidMount() {

        //axios.get('http://localhost:5573/api/users')

        axios.get('http://localhost:8002/product')
            .then(result => {
                this.setState({ events: result.data })
                console.log(this.state.events);
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
        }

render(){
    const {events} = this.state;
  return( 
    <>
    <div className="container-xl" >

        <div className="sidebar">
            <a className="active" href="#Admin">Admin-HomePage</a>
                <Link to="/ProductView"><button className="btn btn-link">View Product</button></Link>
                <Link to="/ProductAdd"><button className="btn btn-link">Add Product</button></Link>
                <Link to="/ProductDelete"><button className="btn btn-link">Delete Product</button></Link>
                <Link to="/ProductEdit"><button className="btn btn-link">Edit Product</button></Link> 
                <Link to="/ProductSearch"><button className="btn btn-link">ProductSearch</button></Link>
                <Link to="/UserView"><button className="btn btn-link">UserView</button></Link>           
        </div>
    
            <div className="content">
   


                <div className="container-xl">
                        <div className="image-container justify-content-start" >
                        <div className='overlay align-items-center justify-content-center'>  
                                
                                
                                <section className="py-5 text-center container"> 
                                    <div className="">
                                    <div className="col-lg-6 col-md-8 mx-auto">
                                        <h2 className="fw-light" style={{color: "black"}}>Generate Report</h2>
                                        
                                        <p className="lead text-muted" style={{color: "black"}}></p>
                                    </div>
                                    </div>
                                </section>
  
                                   <table className="table table-striped" style={{background:"orange"}}>
                                    <thead style={{color:"white"}}>
                                        <tr>
                                        <th scope="col">Product_ID</th>
                                        <th scope="col">Product_Name</th>
                                        <th scope="col">Product_Price</th>
                                        <th scope="col">Product_Qty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                    {events.map(event =>
                                        <tr className="table-primary" key={event.id}>
                                        <td>{event.id}</td>
                                        <td>{event.title}</td>
                                        <td>{event.price}</td>
                                        <td>{event.qty}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                   
                </table>
                                    
                                    
                       
                        </div>
                        </div>
                </div>
            </div>   
    </div>   
    </>   
)
}
}

export default GenerateReport;