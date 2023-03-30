import { Horario } from "../components/Horario";
import { GiDirectionSigns } from 'react-icons/gi';
import { BiMap } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Link from "next/link";

function Conocenos(): JSX.Element {
  return (<>
    <div className="min-h-[800px] flex justify-end pr-20 items-center bg-tienda bg-repeat bg-contain">
      <div className="flex flex-col px-[2%] py-[2%] border-solid border-4 h-[110] w-[30rem] bg-slate-100 border-slate-700">

        <div className="flex gap-3">
          <GiDirectionSigns />
          <p>Calle Marmol nº5, Torrejón de Ardoz </p>
        </div>
        <div className="flex gap-3">
          <Link href="https://www.google.es/maps/place/C.+M%C3%A1rmol,+5,+28850+Torrej%C3%B3n+de+Ardoz,+Madrid/@40.4497594,-3.4707808,17z/data=!3m1!4b1!4m6!3m5!1s0xd42370f9382b1f7:0xa040c1723ad61756!8m2!3d40.4497594!4d-3.4685868!16s%2Fg%2F11c5qlp2x_"><BiMap className="hover:text-slate-600" /></Link>
          Localización
        </div>



        <div className="flex gap-3">
          <BsFillTelephoneFill />
          +34 685 70 83 08
        </div>
        <div className="flex gap-3">
          <BsClock />
          HORARIO
        </div>

        <Horario />
      </div>
    </div>

  </>);
}

export default Conocenos;