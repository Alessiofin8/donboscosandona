import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';

const Features = ({ title, description, features, cardWidth }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className={`card col-md-${cardWidth}`} key={index}>
            <img src={feature.imageUrl} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Features.propTypes = {
  titolo: PropTypes.string.isRequired,
  descrizione: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      titolo: PropTypes.string.isRequired,
      descrizione: PropTypes.string.isRequired,
    })
  ).isRequired,
  cardWidth: PropTypes.number.isRequired,
};

export default Features;