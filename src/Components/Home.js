

import React from 'react';
import UpraisedLogo from '../../src/assets/Frame.png';
import '../App.css';

function Home({ startQuiz, setCategory }) {
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="home-container">
      <div>
      <center>
      <img src={UpraisedLogo} alt='logo' className='logo' />
      </center>
      <div className='circle'>
        <span className='circle-text'>Quiz</span>
      </div>
      </div>
      <div className='flex-category-btn'>
        <select className='category-select' onChange={handleCategoryChange}>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
        </select>
        <button className='start-button' onClick={startQuiz}>Start Quiz</button>
      </div>
    </div>
  );
}

export default Home;