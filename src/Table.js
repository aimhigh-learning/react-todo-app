import React from "react"

export default class Table extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {data: this.props.table || []};
    }


    render() {
        return(
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((data,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                    <td>{data.address}</td>
                                </tr>   
                            );
                        })
                    }
                </tbody>
            </table>

        );
    }
}