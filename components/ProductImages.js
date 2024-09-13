import styled from "styled-components";
import {useState} from "react";

const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
  
  `;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 60px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;


export default function ProductImages({images}) {
  const [activeImage,setActiveImage] = useState(images?.[0]);

  return (
    <div className="w-full">
     <div className="flex w-max-[700px] w-full h-[400px] mx-auto mt-[20px] max-[768px]:hidden ">
      <ImageButtons className="flex-col max-w-[50px] w-full ">
        {images.map(image => (
          <ImageButton 
            key={image}
            active={image===activeImage}
            onClick={() => setActiveImage(image)}>
            <img className=" mx-auto w-full h-full" src={image} alt=""/>
          </ImageButton>
        ))}
      </ImageButtons>
      <div className="w-full text-center ">
        <img className="h-full mx-auto p-10" src={activeImage} alt="bigImg" />
      </div>
      </div>

      <div  className="hidden  w-max-[700px] w-full h-[400px] mx-auto mt-[20px] max-[768px]:flex flex-col  ">
      <div className="w-full text-center ">
        <img className="h-[400px]  mx-auto p-10" src={activeImage} alt="bigImg" />
      </div>
      <ImageButtons className="flex max-w-[400px] w-full mx-auto items-center justify-center ">
        {images.map(image => (
          <ImageButton 
            key={image}
            active={image===activeImage}
            onClick={() => setActiveImage(image)}>
     <img className=" mx-auto w-full h-full" src={image} alt=""/>
          </ImageButton>
        ))}
      </ImageButtons>
      </div>
    </div>
    
  );
}