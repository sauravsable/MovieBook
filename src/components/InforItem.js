import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class InforItem extends Component {
    render() {
        let {name,summary,imageUrl,language,premiered,ended,showUrl,genre,Rating}=this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{summary}....</p>
                            <p className="card-text" style={{marginBottom:"8.5px"}}><small className="text-body-secondary"><b>language- </b>{language}</small></p>
                            <p className="card-text" style={{marginBottom:"8.5px"}}><small className="text-body-secondary"><b>premiered- </b>{premiered}</small></p>
                            <p className="card-text" style={{marginBottom:"8.5px"}}><small className="text-body-secondary"><b>ended- </b>{ended}</small></p>
                            <p className="card-text" style={{marginBottom:"8.5px"}}><small className="text-body-secondary"><b>genre- </b>{genre}</small></p>
                            <p className="card-text" style={{marginBottom:"8.5px"}}><small className="text-body-secondary"><b>rating- </b>{Rating}</small></p>
                            <a href={showUrl} class="btn btn-sm me-3 btn-primary">Read more</a>
                            <Link to='/form' className="btn btn-sm btn-danger">Book ticket</Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default InforItem
