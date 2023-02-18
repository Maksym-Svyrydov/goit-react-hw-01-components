import styled from 'styled-components';

export const Section = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 6px 5px rgba(128, 187, 236, 0.75);
  border-radius: 0.5rem;
  max-width: 50%;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
export const Head = props => {
  if (props.headers === true) {
    return styled.h2`
      margin: 0;
      padding: 15px;
      text-transform: uppercase;
      text-align: center;
      color: #000;
      font-weight: bold;
      font-size: 40px;
    `;
  } else {
    return;
  }
};
export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-shadow: 0 0 3px #000;
  background-color: ${props => {
    if (props.level <= 10) {
      return 'rgb(37, 150, 190)';
    } else if (props.level <= 20) {
      return 'rgb(234,182,118)';
    } else if (props.level <= 30) {
      return 'rgb(118,181,197)';
    } else if (props.level <= 40) {
      return 'rgb(135,62,35)';
    } else if (props.level <= 50) {
      return 'rgb(171,219,227)';
    } else if (props.level <= 75) {
      return 'rgb(6,57,112)';
    } else if (props.level <= 100) {
      return 'rgb(21,76,121)';
    }
  }};
`;

export const Labels = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-shadow: 0 0 3px #000;
  color: #fff;
`;
export const Percentage = styled.span`
  padding: 1.3rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 0 3px #000;
  color: #fff;
`;
