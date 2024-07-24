import React, { useEffect, useState } from "react";
import ImageMapper from "react-img-mapper";
import image from "../../images/background-image.jpg";
import areas from './areas.json';

const Mapper = (props) => {

  function useWindowSize() {
   
    const [windowSize, setWindowSize] = useState(undefined);
    useEffect(() => {
      
      function handleResize() {
        
        setWindowSize(window.innerWidth);
      }
      
      window.addEventListener("resize", handleResize);
      
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  
  const MAP = {
    name: "my-map",
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas:areas,
  };

  return (
    <ImageMapper
      src={image}
      map={MAP}
        responsive={true}
        parentWidth={useWindowSize()}
    />
  );
};

export default Mapper;
