

import React, { Fragment , useState , useEffect } from 'react';

const ReactMovement = ( props ) => {

    const className = props.class;

    // test

    var oldx = 0,
        oldy = 0,
        coordinates = [ ];

        const translateImage = ( e ) => {

           e.pageX < oldx ? coordinates[0] = 3 : coordinates[0] = -3;
           e.pageY < oldy ? coordinates[1] = 3 : coordinates[1] = -3;

           oldx = e.pageX;
           oldy = e.pageY;

           const xTranslate = coordinates[0] + 'px';
           const yTranslate = coordinates[1] + 'px';
           e.target.style.transform = "translate(" + xTranslate + "," + yTranslate + ")";
        }

    return (
       <div className={ className } onMouseMove={ e => translateImage( e ) }>
          { props.children }
       </div>
    )
}


export default ReactMovement;
