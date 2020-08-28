import React from 'react';
// import trans from '../json/transactions.json';

function TransactionHistory({items}) {
return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

{  items.map(({id, type, amount, currency}) => (
<tbody>
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
   
 
 </tbody>
))
}
</table>
)
}
export default TransactionHistory