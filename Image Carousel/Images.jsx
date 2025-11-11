import React, { useEffect, useState } from 'react'; // React hooks
import water from './Images/Water.png';
import beach from './Images/beach.png';
import Nature from './Images/Nature.png';
import Mountain from './Images/Mountain.png';
import './Images.css';

function Images() {

  //  State to track which image is currently visible
  const [active, setActive] = useState(0);

  // Array of image objects imported from local files
  const items = [
    { id: 1, image: water, title: 'Water' },
    { id: 2, image: beach, title: 'Beach' },
    { id: 3, image: Nature, title: 'Nature' },
    { id: 4, image: Mountain, title: 'Mountain' }
  ];

  // Function to move to the next image
  const NextBtn = () => {
    // If the active image is the last one, go back to first (3 === 3 ) => 0th element
    if (active === items.length - 1) {
      setActive(0);
    } else {
      // Otherwise, move to next image
      setActive(active + 1);
    }
  };

  //  Function to move to the previous image
  const PrevBtn = () => {
    // If the active image is the first one, go to the last
    if (active === 0) {
      setActive(items.length - 1);
    } else {
      // Otherwise, move back by one
      setActive(active - 1);
    }
  };

  //  Auto Slide Functionality

  // useEffect runs every time the "active" image changes
  useEffect(() => {
    // Automatically go to next image every 1.5 seconds
    const timer = setTimeout(() => {
      NextBtn();
    }, 2000);

    // Cleanup: Clear the timer before setting a new one
    return () => clearTimeout(timer);
    // active' is in the dependency so useEffect runs every time the active image changes, restarting the auto-slide timer
  }, [active]);

  return (
    <div className="carousel-container">
      {/* Display the currently active image and title */}
      <div className="image-card">
        <img
          src={items[active].image}
          alt={items[active].title}
          className="carousel-image"
        />
        <h2>{items[active].title}</h2>
      </div>

      {/* Buttons to manually change the image */}
      <div className="buttons">
        <button onClick={PrevBtn}>Prev</button>
        <button onClick={NextBtn}>Next</button>
      </div>
    </div>
  );
}

export default Images;
