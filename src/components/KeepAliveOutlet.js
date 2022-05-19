import React, { useContext, useEffect, useRef, useReducer } from 'react';
import ReactDom from 'react-dom';
import { Freeze } from 'react-freeze';
import {
  UNSAFE_RouteContext as RouteContext,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

function KeepAliveOutlet() {
  const caches = useRef({});
  const routeStack = useRef([]);
  const navigationType = useNavigationType();
  const location = useLocation();
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const matchedElement = useContext(RouteContext).outlet; // v6.3之后useOutlet会多了一层嵌套
  const matchedPath = matchedElement?.props?.value?.matches?.at(-1)?.pathname;

  if (matchedElement && matchedPath) {
    caches.current[matchedPath] = matchedElement;
  }

  useEffect(() => {
    switch (navigationType) {
      case 'POP':
        if (!routeStack.current.length) {
          routeStack.current.push(location.pathname);
          document.body.scrollTo(0, 0);
        } else {
          const deletingKey = routeStack.current.pop();
          console.log(caches.current[deletingKey]);
          delete caches.current[deletingKey];
          forceUpdate();
        }
        break;
      case 'PUSH':
        routeStack.current.push(location.pathname);
        document.scrollingElement.scrollTo(0, 0);
        break;
      default:
    }
  }, [navigationType]);

  console.log(Object.entries(caches.current).length);

  return (
    <>
      {Object.entries(caches.current).map(([path, element]) => (
        <Freeze key={path} freeze={element !== matchedElement}>
          {element}
        </Freeze>
      ))}
    </>
  );
}

export default KeepAliveOutlet;
