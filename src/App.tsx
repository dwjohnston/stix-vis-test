import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

import { testData } from './testData';

//@ts-ignore
import d3 from "d3"; 


//@ts-ignore
import initViz from "cti-stix-visualization-dwj";


const Viz = initViz(d3);

console.log(d3);

function App() {


  const svgRef = useRef<SVGSVGElement>(null);


  useEffect(() => {

    console.log(svgRef);
    if (svgRef.current) {
      const vizInstance = new Viz(svgRef.current, {
        id: 'foo',

      });

      vizInstance.vizStix(testData, {}, (...args: Array<unknown>) => {
        console.log("vizCallBack", args);
      }, (...args: Array<unknown>) => {
        console.log("errorCallback", args)
      });
    }
  }, [svgRef]);
  return (
    <div className="App" >
      <svg ref={svgRef} id ='foo'></svg>
    </div>
  );
}

export default App;
