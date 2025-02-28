'use client'
import  { useEffect } from "react";


export const ParticlesBackground = () => {
  useEffect(() => {
    // Configuración de particles.js
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 150, // Número de partículas
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#FB6F18", // Color de las partículas
        },
        shape: {
          type: "", // Forma de las partículas
        },
        opacity: {
          value: 0.5, // Opacidad de las partículas
        },
        size: {
          value: 5, // Tamaño de las partículas
        },
        line_linked: {
          enable: true,
          distance: 200, // Distancia para que se conecten
          color: "#FB6F18", // Color de las líneas
          opacity: 1,
          width: 0.7,
        },
        move: {
          enable: true,
          speed: 1, // Velocidad de las partículas
        },
      },
    });
  }, []);

  return <div id="particles-js" style={{ position: "absolute", width: "100%", height: "55vh" }} />;
};
