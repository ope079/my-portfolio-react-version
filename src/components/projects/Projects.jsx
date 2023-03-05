import React from "react";
import Header from "../Header";

function Project({id, name , url, github, gif, alt}) {

    
        return (
            <div className="card">
      <div className="img-container">
        <img
          alt={alt}
          src={gif}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>id:</strong> {id}
          </li>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Link to Project:</strong> <a href={url}></a>
          </li>
          <li>
            <strong>Link to Repo:</strong> <a href={github}></a>
          </li>
          <li>
            <strong>Image of Project:</strong> <img src={gif} alt={alt} />
          </li>
        </ul>
      </div>
    </div>
        );
    
}

export default Project;