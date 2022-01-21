import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    // ref.current keeps a reference to the div
    mount(ref.current);
  });

  return <div ref={ref} />;
};

export default MarketingApp;
