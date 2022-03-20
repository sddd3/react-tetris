import React, { VFC } from 'react'

type Props = {
    number: number,
    backgroundColor: string
}


const Cell: VFC<Props> = props => {
    const { number, backgroundColor } = props;
    return (
        <div style={{ backgroundColor }}>
            {number}
        </div>
    )
}

export default Cell