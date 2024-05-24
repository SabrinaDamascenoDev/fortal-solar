import React from 'react';
import './porcentagem.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Porcentagem({ percentage }) {
  return (
    <div className='porcentagem'>
      <div style={{ width: 100, height: 100, alignItems: 'center', }}>
        <CircularProgressbar
          value={percentage}
          className='valores'
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: '#ff8c00',
            textColor: '#4a4a4a',
            trailColor: '#d6d6d6',
            backgroundColor: '#f8f8f8',

          })}
        />
      </div>
    </div>
  );
}

export default Porcentagem;
