// Table.js
import React from 'react';
import './table.css';
import greenTick from '../../assets/green-tick.png';

const SubscriptionTable = ({ data,heading }) => {
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
            <td className='single-domain'><a href="#" className='add-to-cart'>Add to Cart</a><p className='price-amt'>at &#8377; 5000</p></td>
            <td className='price-tag flex-container' colSpan='2'><p className='original-price'>&#8377;5000</p><h6 className='offer-price'>&#8377; 499</h6><span className='description-text'>/year with description</span><p className='additional-domain'>(+ additional 5 domains)</p></td>
            <td className='more'>
                <button className='renewal-btn'>Subscribe</button>
               
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubscriptionTable;