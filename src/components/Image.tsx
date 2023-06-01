import React from 'react';  
interface Props{
    imageUrl:any;
    title?:string;
    description?:string
}
const Image = (props:Props) => {
    return (
        <div className="container">
                <div className="box">
                        <div className="imgBx">
                            <img src={props.imageUrl} />
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

export default Image;
