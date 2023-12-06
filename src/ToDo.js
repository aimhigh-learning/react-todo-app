import React from "react";
import Table from "./Table";

export default class ToDo extends React.Component {

    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {email:'',password:'',address:''};
        this.handleChange = this.handleChange.bind(this);

        this.tableData = [];

    }

    handleChange(e) {
        console.log(e);
        this.setState(p=>{
            return {
                ...p,
                [e.target.name]:e.target.value
            }
        });

        console.log('formData :: ', this.state);
    }

    handleSubmit() {
        this.tableData.push(this.state);
        this.setState(this.state);
        console.log('table :: ', this.tableData);
    }

    render() {
        return(
            <div class="container-fluid">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" name="email" onChange={this.handleChange}/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" name="password" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={this.handleChange}/>
                    </div>
                    <div style={{height: 16 + 'px'}}></div>
                    <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Sign in</button>
                </form>

                <div style={{height:100 + 'px'}}></div>
                <Table table={this.tableData}/>
            </div>
        );
    }


}