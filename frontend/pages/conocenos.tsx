import { Horario } from "../components/Horario"
import Map from "../components/Map.js"
import credentials from "../components/credentials"






const mapURL=`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;
function Conocenos() {
    return (<>
    <p>Dirección: Calle Marmol nº5, Torrejón de Ardoz </p>
 
  <p>
    <Map 
    googleMapURL={mapURL}/>
    containerElement={<div style={{height: "400px"
    }}/>} 
    mapElement={<div style={{height:"100%"}}/>}
    loadingElement={<p>Cargando</p>}
    </p>
    <Horario> </Horario>
    </>)
  }
  
  export default Conocenos