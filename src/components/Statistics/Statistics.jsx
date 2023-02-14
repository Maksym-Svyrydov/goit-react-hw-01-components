import PropTypes from 'prop-types';

export const Statistics = ({ datas }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {datas.map(data => (
          <li className="item" key={data.id}>
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
