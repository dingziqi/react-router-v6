import React, { useEffect, useState } from 'react';

export default function Second() {
  const [renderTime, setRenderTime] = useState();

  useEffect(() => {
    setRenderTime(new Date().toString());
  }, []);

  return (
    <div style={{ background: '#eee' }}>
      <div style={{ height: '700px', background: '#eee' }}></div>
      Second
      <div>renderTime: {renderTime}</div>
    </div>
  );
}
