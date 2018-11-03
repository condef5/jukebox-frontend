import React from 'react';

const Termometro = ({ load }) => (
  <div className="donation-meter">
    <div className="bulb">
      <span className="red-circle" />
      <span className="filler">
        <span />
      </span>
    </div>
    <span className="glass">
      <span className="amount" style={{ width: load }} />
    </span>
  </div>
);

export default Termometro;
