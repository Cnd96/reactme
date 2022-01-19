import React from 'react';

const ResultList = ({dataSource}) => {
    return (
        <div>
            {
                dataSource.length > 0 &&
                <table className='table'>
                    <thead>
                    <th>Checkup and Date</th>
                    <th className="text-align-end">Value- (Unit)</th>
                    </thead>
                    <tbody>

                    {dataSource.map((data, index) => {
                        return <tr key={index}>
                            <td>{data.xValue}</td>
                            <td className="text-align-end">{data.yValue}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            }
        </div>
    );
};

export default ResultList;