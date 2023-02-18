import PropTypes from 'prop-types';
// import css from '../Statistics/stats.module.css';
import {
  Section,
  Head,
  List,
  Item,
  Labels,
  Percentage,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ stats, title }) => {
  // title = 'start';
  return (
    <Section>
      {title && <Head>{title}</Head>}
      <List>
        {stats.map(data => (
          <Item level={data.percentage} key={data.id}>
            <Labels>{data.label}</Labels>
            <Percentage>{data.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
