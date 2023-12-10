// Table.js
import React from 'react';
import './table.css';
import greenTick from '../../assets/green-tick.png';

const Table = ({ data,heading }) => {
  return (
    <table className='w-100'>
      <thead>
        <tr>
        {heading.map((row) => (
            <>
             <th className='heading-table'>{row}</th>
        
            </>
         
        ))}
        </tr>
      </thead>
      <tbody >
        {data.map((row) => (
          <tr key={row.id} >
            <td className='domain-name'>{row.domainName}</td>
            <td className='status'><img src={greenTick} alt=""/>{row.status}</td>
            <td className='expiry'>{row.expiry}</td>
            <td className='expiry'>{row.redirections}</td>
            <td className='more'>{row.more}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
