import styled from 'styled-components';

export const ProfileCard = styled.div`
  max-width: 40%;
  margin-top: 5vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-shadow: 0px 0px 6px 5px rgba(187, 206, 16, 0.75);
  border-radius: 6px;
  outline: solid 1px red;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  outline: solid 1px red;
`;
export const Avatar = styled.img`
  display: flex;
  max-width: 50%;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.2),
    1px 4px 6px rgba(0, 0, 0, 0.2);

  outline: solid 1px red;
`;

export const Name = styled.p`
  position: relative;
  font-size: 5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 2.5rem;
  outline: solid 1px red;
`;
export const Tag = styled.p`
  margin: 0.5rem;
  font-size: 2rem;
  color: #8a8b8e;
  cursor: pointer;
  text-decoration: none;
  outline: solid 1px red;
  &: hover {
    color: #2196f3;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Location = styled.p`
  margin: 0.5rem;
  font-size: 2rem;
  color: #8a8b8e;
  cursor: pointer;
  text-decoration: none;
  outline: solid 1px red;
  position: relative;
  cursor: pointer;
  &: hover {
    color: #2196f3;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Stats = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatsListFollowers = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d1d2d9;
  background-color: rgba(241, 241, 241, 0.833);
  outline: solid 1px red;
  border-radius: 0 0 0 0.5rem;
`;

export const StatsListViews = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d1d2d9;
  background-color: rgba(241, 241, 241, 0.833);
  border-left: 1px solid #d1d2d9;
  border-right: 1px solid #d1d2d9;
  outline: solid 1px red;
`;

export const StatsListLikes = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d1d2d9;
  background-color: rgba(241, 241, 241, 0.833);
  bborder-radius: 0 0 0.5rem;
  outline: solid 1px red;
`;

export const Labels = styled.span`
  padding-bottom: 0.5rem;
  color: #8a8b8e;
  /* display: flex; */
  outline: solid 1px red;
`;

export const Quantity = styled.span`
  font-weight: bold;
  border-radius: 0.5rem;
  /* display: flex; */
  outline: solid 1px red;
`;
