import styled from 'styled-components';
export const Table = styled.table`
  margin: 5vh auto;
  box-shadow: 0px 0px 6px 5px rgba(128, 187, 236, 0.75);
  border-radius: 0.5rem;
`;
export const Thead = styled.thead`
  font-size: 1.5rem;
  text-align: center;
`;
export const Row = styled.tr`
  width: 33%;
  color: #8a8b8e;
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export const ColumnHeader = styled.th`
  width: 30%;
  padding: 1rem 5rem;
  background-color: #2196f3;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  &:first-child {
    border-radius: 0.5rem 0 0 0;
  }
  &:last-child {
    border-radius: 0 0.5rem 0 0;
  }
`;
export const Body = styled.tbody``;
export const Data = styled.td`
  &:first-child {
    border-radius: 0 0 0 0.5rem;
  }
  &:last-child {
    border-radius: 0 0 0.5rem 0;
  }
`;
