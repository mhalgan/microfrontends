import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";

const DashboardApp = () => {
  // ref.current keeps a reference to the div returned by the component
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
