import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep } from '../reducers/game';

import './labyrinth.css';

import '../assets/music.jpg';

export const Labyrinth = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );
  const dispatch = useDispatch();

  const setBgImg = () => {
    let bg = '';
    switch (coordinates) {
      case '0,0':
        bg = '../assets/bookshelf.jpg';
        break;
      case '1,0':
        bg = '../assets/ceiling.jpg';
        break;
      case '1,1':
        bg = '../assets/colors.jpg';
        break;
      case '0,1':
        bg = '../assets/soundwaves.jpg';
        break;
      case '0,2':
        bg = '../assets/walls.jpg';
        break;
      case '0,3':
        bg = '../assets/brigth-light.jpg';
        break;
      case '1,3':
        bg = '../assets/cavern-arch.jpg';
        break;
      default:
        bg = '../assets/music.jpg';
    }
    return bg;
  };

  const handleButtonClick = (type, direction) => {
    //call the API, pass along type and dir as part of the body
    dispatch(nextStep(type, direction));
  };

  // This is the alternatives the player can choose from
  const ActionCard = ({ description, type, direction }) => (
    <div className="action-card">
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <section className="description" style={{ backgroundImage: setBgImg() }}>
      <p>{description}</p>
      <p>{coordinates}</p>
      {actions.length === 0 && <h3>Yay, you made it out!</h3>}
      {actions.length > 0 &&
        actions.map((item) => <ActionCard key={item.direction} {...item} />)}
    </section>
  );
};
