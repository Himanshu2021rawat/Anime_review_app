import React from "react";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

const Animedataget = ({ animedata }) => {

  const navLinkStyles = () => {
    return {
      textDecoration:"none", 
      color:"white"
      
    };
  }; 

  return (
    <>
      <div className="mainCard">
        {animedata.map((elm, index) => {

const {id,img,name,description,category,seasons} = elm;

          return (
            <div className="animeCard" key={index}>
              <span className="id adjust">
                <p>{id}</p>
              </span>
              <span className="img adjust">
                <img className="img" src={img} alt="" srcSet="" />
              </span>
              <span className="name adjust">
                <h2>{name}</h2>
              </span>
              <span className="category adjust">
                <h2>{category}</h2>
              </span>
              <span className="description adjust ">
                <h4>{description}</h4>
              </span>
              <span className="seasons adjust">
                <p>{seasons}</p>
              </span>
              <Button variant="contained" color="error">
                <NavLink style={navLinkStyles}  to="/naruto">Full Detail</NavLink>
               
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Animedataget;
