import { Horario } from "../components/Horario"
import { GiDirectionSigns } from 'react-icons/gi';
import { LinkNavbar } from "../components/LinkNavbar"
import { BiMap } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs';

function Conocenos(): JSX.Element {
  return (<>
    <div className="px-10 py-10 border-solid border-4 h-[110] w-[28rem] border-slate-700">
      <GiDirectionSigns />
      <p>Dirección: Calle Marmol nº5, Torrejón de Ardoz </p>
      <BiMap />
      <LinkNavbar href="https://www.google.es/maps/place/C.+M%C3%A1rmol,+5,+28850+Torrej%C3%B3n+de+Ardoz,+Madrid/@40.4497594,-3.4707808,17z/data=!3m1!4b1!4m6!3m5!1s0xd42370f9382b1f7:0xa040c1723ad61756!8m2!3d40.4497594!4d-3.4685868!16s%2Fg%2F11c5qlp2x_" path="" text="google Maps"></LinkNavbar>
      <BsClock />
      <Horario />
    </div>
  </>)
}

export default Conocenos