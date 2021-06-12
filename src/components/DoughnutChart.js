import React, {useEffect} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const DoughnutChart = ({countryInfo}) => {
  
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.marginTop = 50
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = 100;

    //custom color
    var colorSet = new am4core.ColorSet();
    colorSet.list = ["#CC1034", "limegreen", "gray"].map(function(color) {
      return new am4core.color(color);
    });
    pieSeries.colors = colorSet;

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 0.5;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = .5;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = .7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        "country": "active",
        "litres": countryInfo.active,
      },
      {
        "country": "recovered",
        "litres": countryInfo.recovered
      }, 
      {
        "country": "deceased",
        "litres": countryInfo.deaths
      }
    ];



    return () => {
      if (chart) {
        chart.dispose();
      }
    }
  }, [countryInfo])

  
  return (<div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>)
}

export default DoughnutChart
