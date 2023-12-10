// Table.js
import React from 'react';
import './table.css';
import greenTick from '../../assets/green-tick.png';

const ExpiringTable = ({ data,heading }) => {
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
            <td className='domain-name f-24'>{row.newDomainName}</td>
            <td className='expiry fw-600 '>{row.expiry}</td>
            <td className={row.autoRenewal==true?'on-renewal':'off-renewal'}>{row.autoRenewal==true?'On':'Off'}</td>
            <td className='more'>
                <button className={row.autoRenewal==false?'renewal-btn':'none-case'}>Renew</button>
                <button className={row.autoRenewal==true?'non-renewal-btn':'none-case'}>will renew on <span>{row.expiry}</span></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpiringTable;
