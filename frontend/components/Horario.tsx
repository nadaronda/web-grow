

export const Horario: React.FC = () => {
    return (<>
        <table>
            <thead className="bg-rosa ">
                <tr>
                    <th>HORARIO</th>
                    <th>AM</th>
                    <th>PM</th>
                </tr>
            </thead>
            <tbody className="[&>tr:nth-child(odd)]:bg-azul">
                <tr>
                    <th>LUNES</th>
                    <td>10:30-14:00</td>
                    <td>17:00-20:20</td>
                </tr>
                <tr>
                    <th>MARTES</th>
                    <td>10:30-14:00</td>
                    <td>17:00-20:20</td>
                </tr>
                <tr>
                    <th>MIERCOLES</th>
                    <td>10:30-14:00</td>
                    <td>17:00-20:20</td>
                </tr>
                <tr>
                    <th>JUEVES</th>
                    <td>10:30-14:00</td>
                    <td>17:00-20:20</td>
                </tr>
                <tr>
                    <th>VIERNES</th>
                    <td>10:30-14:00</td>
                    <td>17:00-20:20</td>
                </tr>
                <tr>
                    <th>SABADO</th>
                    <td>10:30-14:00</td>
                    <td>17:00-20:20</td>
                </tr>
                <tr>
                    <th>DOMINGO</th>
                    <td>10:30-14:00</td>
                    <td>17:00-20:20</td>
                </tr>
            </tbody>

        </table>
    </>)
}