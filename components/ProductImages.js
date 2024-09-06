import styled from "styled-components";
import {useState} from "react";

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
  `;
const BigImage = styled.img`
  max-height: 400px;
`;
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
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({images}) {
  const [activeImage,setActiveImage] = useState(images?.[0]);
  return (
    <div className="flex w-max-[700px] w-full h-[400px] mx-auto mt-[20px]  ">
     
      <ImageButtons className="flex-col max-w-[50px] w-full ">
        {images.map(image => (
          <ImageButton 
            key={image}
            active={image===activeImage}
            onClick={() => setActiveImage(image)}>
            <Image className=" mx-auto" src={image} alt=""/>
          </ImageButton>
        ))}
      </ImageButtons>
      <BigImageWrapper className="w-full ">
        <BigImage className="h-full  mx-auto p-10" src={activeImage} />
      </BigImageWrapper>
    </div>
  );
}