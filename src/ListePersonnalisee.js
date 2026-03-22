import PropTypes from 'prop-types';

function ListePersonnalisee({ elements }) {
  return (
    <ul>
      {elements.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
}

ListePersonnalisee.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListePersonnalisee;