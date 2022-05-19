import React from 'react';
import KeepAliveOutlet from './KeepAliveOutlet';

export default function PageLayout() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading</div>}>
        <KeepAliveOutlet />
      </React.Suspense>
    </React.Fragment>
  );
}
