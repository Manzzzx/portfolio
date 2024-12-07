import PropTypes from 'prop-types';
import Github from '../assets/Github.png';

const Cards = ({ item }) => {
  return (
    <div className="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50">
      <img
        src={item?.image || ''}
        alt={item?.title || 'Coming Soon'}
        className="rounded-lg"
      />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item?.title || ''}</h1>
        <p>{item?.desc || ''}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-red-500 text-white px-3 py-2 rounded-md">
            <a href={item?.live || ''} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md">
            <a
              href={item?.github || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <img src={Github} alt="" className="w-6" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    live: PropTypes.string,
    github: PropTypes.string,
  }),
};

export default Cards;
