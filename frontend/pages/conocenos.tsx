import { Horario } from "../components/Horario"
import Map from "../components/Map"
import dotenv from 'dotenv';

dotenv.config();

export const llave = parseInt(process.env.KEY)
  

require('dotenv').config()


const mapURL=`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${llave}`;
function Conocenos() {
    return (<>
    <p>Dirección: Calle Marmol nº5, Torrejón de Ardoz </p>
  <Horario> </Horario>
  <p>
    <Map 
    googleMapURL={mapURL}> </Map>
    containerElement={<div style={{height: "400px"
    }}></div>} 
    mapElement={<div style={{height:"100%"}}></div>}
    loadingElement={<p>Cargando</p>}
    </p>
    </>)
  }
  
  export default Conocenos