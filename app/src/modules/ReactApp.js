import React, { useEffect, useRef } from "react";
import { mount } from "reactapp/ReactAppModule";
import "./ReactApp.css";
const ReactAppModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current); 
  }, []);

  
  return <div className="react-app-module" ref={ref} />;
};

export default ReactAppModule;