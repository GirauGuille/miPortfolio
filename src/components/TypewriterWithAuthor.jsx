import React, { useState, useEffect } from 'react';

const TypewriterWithAuthor = ({ text, author }) => {
    const [displayText, setDisplayText] = useState('');
    const [authorOpacity, setAuthorOpacity] = useState(0);
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex === text.length) {
          clearInterval(interval);
          startAuthorAppearing(); // Comienza a mostrar el autor después de escribir el texto
        } else {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        }
      }, 100); // Velocidad de escritura en milisegundos
  
      return () => {
        clearInterval(interval);
      };
    }, [text]);
  
    const startAuthorAppearing = () => {
      const opacityInterval = setInterval(() => {
        if (authorOpacity < 1) {
          setAuthorOpacity((prevOpacity) => prevOpacity + 0.02);
        } else {
          clearInterval(opacityInterval);
        }
      }, 50);
    };
  
    return (
      <div className="typewriter-container">
        <div className="typewriter">
          {displayText}
        </div>
        <div className="author" style={{ opacity: authorOpacity }}>
          -{author}-
        </div>
      </div>
    );
  };
  
  export default TypewriterWithAuthor;