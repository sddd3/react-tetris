import { useEffect, useState, VFC } from 'react'

import { config } from '../../config'
import './Table.css';
import { Field } from '../../type/Field';
import Cell from '../cell/Cell';


const Table: VFC = () => {
    const [field, setField] = useState<Field>([]);
    const range = (n: number) => Array.from(Array(n).keys());
    const fieldFactory = () => range(config.COLUMN).map(() => range(config.ROW).map(() => { return { number: 99, style: { backgroundColor: 'white' } } }
    ));


    useEffect(() => {
        const field = fieldFactory();
        setField(field);
    }, [field]);

    const downButtonHandler = () => {

    }

    const upButtonHandler = () => {

    }

    const leftButtonHandler = () => {

    }

    const rightButtonHandler = () => {

    }

    const spaceButtonHandler = () => {

    }

    return (
        <table>
            <tbody>
                {
                    field.map((row1, raw1Index) =>
                        <tr key={raw1Index}>
                            {row1.map((raw2, raw2Index) =>
                                <td key={raw2Index}><Cell number={raw2.number} backgroundColor={raw2.style.backgroundColor} /></td>
                            )}
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Table