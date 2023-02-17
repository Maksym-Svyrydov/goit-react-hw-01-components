import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Row,
  ColumnHeader,
  Body,
  Data,
} from '../Transaction/Transaction.styled';
export const Transactions = ({ pays }) => {
  return (
    <Table>
      <Thead>
        <Row>
          <ColumnHeader>Type</ColumnHeader>
          <ColumnHeader>Amount</ColumnHeader>
          <ColumnHeader>Currency</ColumnHeader>
        </Row>
      </Thead>

      <Body>
        {pays.map(pay => (
          <Row key={pay.id}>
            <Data>{pay.type}</Data>
            <Data>{pay.amount}</Data>
            <Data>{pay.currency}</Data>
          </Row>
        ))}
      </Body>
    </Table>
  );
};
Transactions.propTypes = {
  pays: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
