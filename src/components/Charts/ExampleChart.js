import React, { Component } from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);





const ChartComponent = ({data})=>{
  const chartData = {
    "chart": {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "fusion"
    },
    "data": data
  }
  
  const chartConfigs = {
    type: "pie2d",
    width: 500,
    height: 400,
    dataFormat: 'json',
    dataSource: chartData,
  };
  return <ReactFC {...chartConfigs} />;
}

export default ChartComponent

