import Box from '@mui/material/Box';
import {useState, useEffect } from "react";
import Tarjeta from './Tarjeta'
import Search from './Search'

const SeccionPrincipal = () => {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {

        fetch("https://fedeperin-harry-potter-api.herokuapp.com/personajes")
        .then((res) => res.json())
        .then((data) => setPersonajes(data));
     }, []);
     
    return (

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >

            
         <Box>
          <Search/>      
        </Box>     
        
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", m: 4}}
        >
            {personajes.map((personaje) => (
                
            <Tarjeta
              imagen={personaje.imagen}
              nombre={personaje.personaje}
              apodo={personaje.apodo}
              casa={personaje.casaDeHogwarts}  
              
            />

            ))}
            

        </Box>
  

        </Box>
    )
}

export default SeccionPrincipal
