import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import { getRandomHexColor } from '../../utils/getRandomColor.js';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title ? <h2 className={css.title}>{title}</h2> : ''}

    <ul className={css.statList}>
      {stats.map(el => (
        <li
          className={css.item}
          key={el.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{el.label}</span>
          <span className={css.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
