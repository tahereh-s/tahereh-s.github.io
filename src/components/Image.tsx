import React from 'react';  
import Image from "next/image";
interface Props{
    imageUrl:string;
    title?:string;
    description?:string
    alt?:any
}
const ImageComponent = (props:Props) => {
    return (
        <div className="container">
                <div className="box">
                        <div className="imgBx">
                            <Image src={props.imageUrl} alt={props.alt} width={50} height={50}/>
                        </div>
                        <div className="content">
                            <div>
                                <h2>{props.title}</h2>
                                <p>
                                    {props.description}
                                </p>
                            </div>
                        </div>
                </div>
 
        </div>

            
   
    );
}

export default ImageComponent;
