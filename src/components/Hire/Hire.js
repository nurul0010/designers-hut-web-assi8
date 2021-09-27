import React from 'react';
import './Hire.css'

const Hire = (props) => {
    const { id, name, age, company, email, hireRate, picture } = props.data;

    return (
        <div>

            <div className="card h-100 w-75">
                <img src={picture} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title bg-info">Name: {name}</h5>
                    <p>Id: {id}</p>
                    <p>Company: {company}</p>
                    <p>Email: {email}</p>
                    <p>Hire-rate: {hireRate}</p>
                    <p>Age: {age}</p>
                    <br />
                    <button onClick={() => props.addhandler(props.data)} className="btn-primary px-3 py-2 rounded">Hire</button>
                </div>
            </div>

        </div>
    );
};

export default Hire;