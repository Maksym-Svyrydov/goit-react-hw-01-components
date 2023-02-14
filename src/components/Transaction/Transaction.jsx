import PropTypes from 'prop-types';

export const Transactions = ({ pays, index }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {pays.map(pay => (
          <tr key={{ index }}>
            <td>{pay.type}</td>
            <td>{pay.amount}</td>
            <td>{pay.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Transactions.propTypes = {
  pays: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
