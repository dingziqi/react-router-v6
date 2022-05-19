import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [renderTime, setRenderTime] = useState();

  useEffect(() => {
    setRenderTime(new Date().toString());
  }, []);

  return (
    <div id="home">
      <div style={{ height: '700px', background: '#eee' }}></div>
      <Link to="/second">
        <div>seconde page</div>
      </Link>

      <div>render time: {renderTime}</div>
    </div>
  );
}
