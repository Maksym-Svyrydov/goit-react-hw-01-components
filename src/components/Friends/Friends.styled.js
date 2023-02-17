import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;

  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  width: 35%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 5vh;

  align-items: center;
  box-shadow: 0px 0px 6px 5px rgba(128, 187, 236, 0.75);
  border-radius: 0.5rem;
`;
// background-color: ${props => {
//     if (props.level <= 10) {
//       return 'rgb(37, 150, 190)';
//     } else if (props.level <= 10)
export const Status = styled.span`
  border-radius: 50%;
  margin: auto 1.7rem;
  height: 15px;
  width: 15px;
  background-color: ${props => {
    if (props.status === true) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
export const Avatar = styled.img`
  margin: 0 auto;
`;
export const Name = styled.p`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`;
