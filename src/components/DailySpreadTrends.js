import React, { useState, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


const buildChartConfirmedData = (yConfirmedData) => {
  const chartDataCases = [];
  const chartDataDates = []
  let lastDataPoint;
  
  for (let date in yConfirmedData.cases) {
    if (lastDataPoint) {
      let newDataPoint = yConfirmedData["cases"][date] - lastDataPoint
      chartDataCases.push(newDataPoint);
      chartDataDates.push(date)
    }
    lastDataPoint = yConfirmedData["cases"][date];
  }
  return [chartDataCases, chartDataDates];
};

const buildChartConfirmedCountryData = (yConfirmedData) => {
  const chartDataCases = [];
  const chartDataDates = []
  let lastDataPoint;
  
  for (let date in yConfirmedData.timeline.cases) {
    if (lastDataPoint) {
      let newDataPoint = yConfirmedData["timeline"]["cases"][date] - lastDataPoint
      chartDataCases.push(newDataPoint);
      chartDataDates.push(date)
    }
    lastDataPoint = yConfirmedData["timeline"]["cases"][date];
  }
  return [chartDataCases, chartDataDates];
};

const buildChartRecoveredData = (yRecoveredData) => {
  const chartDataCases = [];
  const chartDataDates = []
  let lastDataPoint;
  
  for (let date in yRecoveredData.cases) {
    if (lastDataPoint) {
      let newDataPoint = yRecoveredData["recovered"][date] - lastDataPoint
      chartDataCases.push(newDataPoint);
      chartDataDates.push(date)
    }
    lastDataPoint = yRecoveredData["recovered"][date];
  }
  return [chartDataCases, chartDataDates];
};

const buildChartRecoveredCountryData = (yRecoveredData) => {
  const chartDataCases = [];
  const chartDataDates = []
  let lastDataPoint;
  
  for (let date in yRecoveredData.timeline.cases) {
    if (lastDataPoint) {
      let newDataPoint = yRecoveredData["timeline"]["recovered"][date] - lastDataPoint
      chartDataCases.push(newDataPoint);
      chartDataDates.push(date)
    }
    lastDataPoint = yRecoveredData["timeline"]["recovered"][date];
  }
  return [chartDataCases, chartDataDates];
};


const buildChartDeceasedData = (yDeceasedData) => {
  const chartDataCases = [];
  const chartDataDates = []
  let lastDataPoint;
  
  for (let date in yDeceasedData.cases) {
    if (lastDataPoint) {
      let newDataPoint = yDeceasedData["deaths"][date] - lastDataPoint
      chartDataCases.push(newDataPoint);
      chartDataDates.push(date)
    }
    lastDataPoint = yDeceasedData["deaths"][date];
  }
  return [chartDataCases, chartDataDates];
};

const buildChartDeceasedCountryData = (yDeceasedData) => {
  const chartDataCases = [];
  const chartDataDates = []
  let lastDataPoint;
  
  for (let date in yDeceasedData.timeline.cases) {
    if (lastDataPoint) {
      let newDataPoint = yDeceasedData["timeline"]["deaths"][date] - lastDataPoint
      chartDataCases.push(newDataPoint);
      chartDataDates.push(date)
    }
    lastDataPoint = yDeceasedData["timeline"]["deaths"][date];
  }
  return [chartDataCases, chartDataDates];
};


function DailySpreadTrends({country}) {
  const [yConfirmedData, setyConfirmedData] = useState([]);
  const [xConfirmedData, setxConfirmedData] = useState([])
  const [yRecoveredData, setyRecoveredData] = useState([]);
  const [xRecoveredData, setxRecoveredData] = useState([])
  const [yDeceasedData, setyDeceasedData] = useState([]);
  const [xDeceasedData, setxDeceasedData] = useState([])
  const [xVaccinatedData, setxVaccinatedData] = useState([])
  const [yVaccinatedData, setyVaccinatedData] = useState([])
  
  const vaccine_url = "https://disease.sh/v3/covid-19/vaccine/coverage"

  
  useEffect(() => {
    let chart = am4core.create("confirmedchart", am4charts.XYChart);
  
    // chart.paddingRight = 20;

    
    let chartData = []
    let date, value, value2, value3, value4
    
    for(let i in xConfirmedData){
      date=xConfirmedData[i]
      value=yConfirmedData[i]
      value2=yRecoveredData[i]
      value3=yDeceasedData[i]
      value4=yVaccinatedData[i]
      chartData.push({
        date: date,
        value: value,
        value2: value2,
        value3: value3,
        value4: value4
      })
    }

    
    chart.data= chartData
    chart.leftAxesContainer.layout = "vertical"
    


    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    
    
    dateAxis.renderer.ticks.template.length = 8;
    dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = false;
    dateAxis.renderer.ticks.template.strokeOpacity = 0.2;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.zIndex = 1;
    valueAxis.renderer.grid.template.stroke = false;
    
    // // Set up axis
    
    valueAxis.height = am4core.percent(20);
    valueAxis.renderer.labels.template.verticalCenter = "bottom";
    valueAxis.renderer.labels.template.padding(2,2,2,2);
    valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.renderer.gridContainer.background.fill = "#CC1034";
    valueAxis.renderer.gridContainer.background.fillOpacity = 0.1;
    // valueAxis.background.fillOpacity=.1  

    let series = chart.series.push(new am4charts.ColumnSeries()); 
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "Confirmed: [bold]{valueY}[/]\nDate: [bold]{dateX.formatDate('dd-MMM-yyyy')}";
    series.strokeWidth = 2;
    series.name = "Confirmed"
    series.stroke = am4core.color("#CC1034");
    series.fill = am4core.color("#CC1034");
    series.yAxis = valueAxis; 

    
    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.tooltip.disabled = true;
    valueAxis2.marginTop = 20;
    valueAxis2.renderer.baseGrid.disabled = true;
    valueAxis2.height = am4core.percent(20);
    valueAxis2.zIndex = 3
    valueAxis2.renderer.labels.template.verticalCenter = "bottom";
    valueAxis2.renderer.labels.template.padding(2,2,2,2);
    valueAxis2.renderer.maxLabelPosition = 0.95;
    valueAxis2.renderer.grid.template.stroke = false;

    // uncomment these lines to fill plot area of this axis with some color
    valueAxis2.renderer.gridContainer.background.fill = "limegreen";
    valueAxis2.renderer.gridContainer.background.fillOpacity = 0.1;
    // valueAxis2.background.fillOpacity=.1

    let series2 = chart.series.push(new am4charts.ColumnSeries()); 
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "value2";
    series2.tooltipText = "Recovered: [bold]{valueY}[/]\nDate: [bold]{dateX.formatDate('dd-MMM-yyyy')}";
    series2.strokeWidth = 2;
    series2.name = "Recovered"
      
    series2.stroke = am4core.color("limegreen");
    series2.fill = am4core.color("limegreen");
    series2.yAxis = valueAxis2;
    
    let valueAxis3 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis3.tooltip.disabled = true;
    valueAxis3.marginTop = 20;
    valueAxis3.height = am4core.percent(20);
    valueAxis3.zIndex = 5
    valueAxis3.renderer.labels.template.verticalCenter = "bottom";
    valueAxis3.renderer.labels.template.padding(2,2,2,2);
    valueAxis3.renderer.maxLabelPosition = 0.95;
    valueAxis3.renderer.grid.template.stroke = false;
      
    valueAxis3.renderer.gridContainer.background.fill = "gray";
    valueAxis3.renderer.gridContainer.background.fillOpacity = 0.1;

    let series3 = chart.series.push(new am4charts.ColumnSeries()); 
    series3.dataFields.dateX = "date";
    series3.dataFields.valueY = "value3";
    series3.tooltipText = "Deceased: [bold]{valueY}[/]\nDate: [bold]{dateX.formatDate('dd-MMM-yyyy')}";
    series3.strokeWidth = 2;
    series3.name = "Deceased"
      
    series3.stroke = am4core.color("gray");
    series3.yAxis = valueAxis3;
    series3.fill = am4core.color("gray");

    let valueAxis4 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis4.tooltip.disabled = true;
    valueAxis4.marginTop = 20;
    valueAxis4.zIndex = 1;
    valueAxis4.renderer.grid.template.stroke = false;
    
    // // Set up axis
    
    valueAxis4.height = am4core.percent(20);
    valueAxis4.renderer.labels.template.verticalCenter = "bottom";
    valueAxis4.renderer.labels.template.padding(2,2,2,2);
    valueAxis4.renderer.maxLabelPosition = 0.95;
    valueAxis4.renderer.gridContainer.background.fill = "#720058";
    valueAxis4.renderer.gridContainer.background.fillOpacity = 0.1;
    // valueAxis.background.fillOpacity=.1  

    let series4 = chart.series.push(new am4charts.ColumnSeries()); 
    series4.dataFields.dateX = "date";
    series4.dataFields.valueY = "value4";
    series4.tooltipText = "Vaccine Doses Administered: [bold]{valueY}[/]\nDate: [bold]{dateX.formatDate('dd-MMM-yyyy')}";
    series4.strokeWidth = 2;
    series4.name = "Vaccine Doses Administered"
    series4.stroke = am4core.color("#720058");
    series4.fill = am4core.color("#720058");
    series4.yAxis = valueAxis4;
    
    var indicator;
    var indicatorInterval;

    function showIndicator() {
      
      if (!indicator) {
        indicator = chart.tooltipContainer.createChild(am4core.Container);
        indicator.background.fill = am4core.color("#fff");
        indicator.background.fillOpacity = 0.8;
        indicator.width = am4core.percent(100);
        indicator.height = am4core.percent(100);

        var indicatorLabel = indicator.createChild(am4core.Label);
        indicatorLabel.text = "Loading graph...";
        indicatorLabel.align = "center";
        indicatorLabel.valign = "middle";
        indicatorLabel.fontSize = 20;
        indicatorLabel.dy = 50;
        
        var hourglass = indicator.createChild(am4core.Image);
        hourglass.href = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/hourglass.svg";
        hourglass.align = "center";
        hourglass.valign = "middle";
        hourglass.horizontalCenter = "middle";
        hourglass.verticalCenter = "middle";
        hourglass.scale = 0.7;
      }
      
      indicator.hide(0);
      indicator.show();
      
      clearInterval(indicatorInterval);
      indicatorInterval = setInterval(function() {
        hideIndicator([], 3000);
      }, 4000);
    }

    function hideIndicator() {
      indicator.hide();
      clearInterval(indicatorInterval);
    }

    showIndicator();

    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    
    
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    scrollbarX.marginBottom = 20;
    chart.scrollbarX = scrollbarX;

    let scrollAxis = chart.scrollbarX.scrollbarChart.xAxes.getIndex(0);
    scrollAxis.renderer.grid.template.disabled = true;

    // chart = chart;
    return () => {
      if (chart) {
        chart.dispose();
      }  
    }
  }, [xConfirmedData, xRecoveredData, xDeceasedData, xVaccinatedData])
    
  let trendVaccineDate = []
  let trendVaccineData = []

  useEffect(() => { 
    const url = country === "worldwide" ? vaccine_url + "?lastdays=all&fullData=true" 
    : vaccine_url + `/countries/${country}?lastdays=all&fullData=true`
    
    if(url === vaccine_url + "?lastdays=all&fullData=true"){
      fetch(url)
      .then(response => response.json())
      .then(data => {
        trendVaccineData.push(data.map(info => info.daily))
        trendVaccineDate.push(data.map(info => info.date))
        const array = Array.from({ length: 313 }).fill(0)
        trendVaccineData.unshift(array)
        trendVaccineData = trendVaccineData[0].concat(trendVaccineData[1])

        setyVaccinatedData(trendVaccineData)
        setxVaccinatedData(trendVaccineDate)
      })
      .catch((err) => {console.log("Lack of proper info! => ",err)})  
    }else{
      fetch(url)
      .then(response => response.json())
      .then(data => {
        trendVaccineData.push(data.timeline.map(info => info.daily))
        trendVaccineDate.push(data.timeline.map(info => info.date))
        const array = Array.from({ length: 313 }).fill(0)
        trendVaccineData.unshift(array)
        trendVaccineData = trendVaccineData[0].concat(trendVaccineData[1])

        setyVaccinatedData(trendVaccineData)
        setxVaccinatedData(trendVaccineDate)
      })
      .catch((err) => {console.log("Lack of proper info! => ",err)})  
    }
  }, [country])

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = country === "worldwide" ? "https://disease.sh/v3/covid-19/historical/all?lastdays=all" 
      : `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`
      
      if(fetchUrl === "https://disease.sh/v3/covid-19/historical/all?lastdays=all"){
        await fetch(fetchUrl)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let chartConfirmedData = buildChartConfirmedData(data);
          setyConfirmedData(chartConfirmedData[0]);
          setxConfirmedData(chartConfirmedData[1])
          // console.log(chartData);

          let chartRecoveredData = buildChartRecoveredData(data)
          setyRecoveredData(chartRecoveredData[0])
          setxRecoveredData(chartRecoveredData[1])
          // console.log(chartRecoveredData);

          let chartDeceasedData = buildChartDeceasedData(data)
          setyDeceasedData(chartDeceasedData[0])
          setxDeceasedData(chartDeceasedData[1])
          // console.log(chartDeceasedData);
        })
        .catch((err) => {console.log("Lack of proper info! => ",err)})

      }
      else{
        await fetch(fetchUrl)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let chartConfirmedData = buildChartConfirmedCountryData(data);
          setyConfirmedData(chartConfirmedData[0]);
          setxConfirmedData(chartConfirmedData[1])
          // console.log(chartData);

          let chartRecoveredData = buildChartRecoveredCountryData(data)
          setyRecoveredData(chartRecoveredData[0])
          setxRecoveredData(chartRecoveredData[1])
          // console.log(chartRecoveredData);

          let chartDeceasedData = buildChartDeceasedCountryData(data)
          setyDeceasedData(chartDeceasedData[0])
          setxDeceasedData(chartDeceasedData[1])
          // console.log(chartDeceasedData);
        })
        .catch((err) => {console.log("Lack of proper info! => ",err)})

      }
    };

    fetchData();
  }, [country]);


  return (
    <>     
      <div id="confirmedchart" style={{ width: "100%", height: "100%" }}/>
      
    </>
  )
}

export default DailySpreadTrends;





