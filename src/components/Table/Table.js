import React from 'react';
import { Table as TSTABLE } from "react-bootstrap";

function Table({shouldRender, data}) {
    if(shouldRender === true){

        console.log(data[0].id);
        let tableData = [];

        for(let i = 0; i < data.length; i++)
            tableData = [...tableData, <tr><td>{data[i].id}</td><td>{data[i].date}</td><td>{data[i].amount}</td></tr>];
        
        console.log(tableData)
        return (
            <TSTABLE striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {tableData}
                </tbody>

                
            </TSTABLE>
         );
    }
    
    return '';
}

export default Table