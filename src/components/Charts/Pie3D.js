import React, { Component } from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({data})=>{
  const chartData = {
    "chart": {
      "caption": "Languages",
      "theme": "fusion",
      decimals:0,
      pieRadius:'40%',
   
    },
    "data": data
  }
  
  const chartConfigs = {
    type: "pie3d",
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: chartData,
  };
  return <ReactFC {...chartConfigs} />;
}

export default ChartComponent

