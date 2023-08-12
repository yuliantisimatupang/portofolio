import React, { MutableRefObject, RefObject } from 'react'

export default function UseIsVisible(ref: any) {
  // const [isIntersecting, setIntersecting] = React.useState(false);

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) =>
  //     setIntersecting(entry.isIntersecting)
  //   );

  //   observer.observe(ref.current);
  // }, [ref]);

  // return isIntersecting;
  const [isIntersecting, setIntersecting] = React.useState(false)

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) =>
  //     setIntersecting(entry.isIntersecting)
  //   );

  //   observer?.observe(ref.current);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [ref]);

  return isIntersecting
}
