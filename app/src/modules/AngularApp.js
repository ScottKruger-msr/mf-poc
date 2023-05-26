import React, { useEffect, useRef } from "react";
import {mount} from "angularApp/AngularAppModule";
import "./AngularApp.css";

const AngularAppModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();  
  }, []);   
  return <div className="angular-app-module"><app-root></app-root></div>;
};

export default AngularAppModule;