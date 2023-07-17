import React, { useEffect } from 'react';
import './candleClock.css';

const CandleClock = () => {
  useEffect(() => {
    function updateCandleHeight() {
      const now = new Date();       //'2023-07-16T13:30:00'
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentSecond = now.getSeconds();
      const totalSeconds = currentHour * 3600 + currentMinute * 60 + currentSecond;

      const candle = document.querySelector('.candle');
      const originalHeight = 900;
      const decreasedHeight = 50;

      if (totalSeconds >= 9 * 3600 && totalSeconds < 21 * 3600) {
        // Decreased height from 9am to 9pm
        const progress = (totalSeconds - 9 * 3600) / (12 * 3600);
        const newHeight = originalHeight - progress * (originalHeight - decreasedHeight);
        candle.style.height = newHeight + 'px';
      } else {
        // Increased height from 9pm to 9am
        const progress = (totalSeconds - 21 * 3600) / (12 * 3600);
        const newHeight = decreasedHeight + progress * (originalHeight - decreasedHeight);
        candle.style.height = newHeight + 'px';
      }
    }

    // Update the candle height every second
    const interval = setInterval(updateCandleHeight, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="holder">
    <div class="background">
         <div className="roman-numerals">
      <div className="numeral">I-</div>
      <div className="numeral">II-</div>
      <div className="numeral">III-</div>
      <div className="numeral">IV-</div>
      <div className="numeral">V-</div>
      <div className="numeral">VI-</div>
      <div className="numeral">VII-</div>
      <div className="numeral">VIII-</div>
      <div className="numeral">IX-</div>
      <div className="numeral">X-</div>
      <div className="numeral">XI-</div>
      <div className="numeral">XII-</div>
         </div>
    </div>
      <div className="candle">
        <div className="blinking-glow"></div>
        <div className="thread"></div>
        <div className="glow"></div>
        <div class="fire">
  <div class="fire-left">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
  </div>
  <div class="fire-main">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
  </div>
  <div class="fire-right">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
  </div>
  <div class="fire-bottom">
    <div class="main-fire"></div>
  </div>
</div>
      </div>
    </div>
  );
};

export default CandleClock;
