import React from 'react';  
import Image from "next/image";
interface Props{
    imageUrl:any;
    title?:string;
    description?:string
    alt?:any
}
const ImageComponent = (props:Props) => {
    return (
        <div className="container">
                <div className="box">
                        <div className="imgBx">
                            <Image src={props.imageUrl} alt={props.alt}/>
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
