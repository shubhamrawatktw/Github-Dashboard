import React, { Component } from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({data})=>{
  const chartData = {
    "chart": {
      "caption": "Stars Per language",
      "theme": "candy",
      decimals:0,
      doughnutRadius:'40%',
      showPercentValues:0,
   
    },
    "data": data
  }
  
  const chartConfigs = {
    type: "doughnut2d",
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: chartData,
  };
  return <ReactFC {...chartConfigs} />;
}

export default ChartComponent

