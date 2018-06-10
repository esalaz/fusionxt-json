FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "stacked2d",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "Monthly revenue for last year",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                "theme": "fint"
            },
            "data": [{
                    "label": "Jan",
                    "value": "420000"
                },
                {
                    "label": "Feb",
                    "value": "810000"
                },
                {
                    "label": "Mar",
                    "value": "720000"
                },
                {
                    "label": "Apr",
                    "value": "550000"
                },
                {
                    "label": "May",
                    "value": "910000"
                },
                {
                    "label": "Jun",
                    "value": "510000"
                },
                {
                    "label": "Jul",
                    "value": "680000"
                },
                {
                    "label": "Aug",
                    "value": "620000"
                },
                {
                    "label": "Sep",
                    "value": "610000"
                },
                {
                    "label": "Oct",
                    "value": "490000"
                },
                {
                    "label": "Nov",
                    "value": "900000"
                },
                {
                    "label": "Dec",
                    "value": "730000"
                }
            ]
        }
    });

    revenueChart.render();
})
FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        "type": "column3d",
        "renderAt": "stacked3d",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "Monthly revenue for last year",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                "theme": "fint"
            },
            "data": [{
                    "label": "Jan",
                    "value": "420000"
                },
                {
                    "label": "Feb",
                    "value": "810000"
                },
                {
                    "label": "Mar",
                    "value": "720000"
                },
                {
                    "label": "Apr",
                    "value": "550000"
                },
                {
                    "label": "May",
                    "value": "910000"
                },
                {
                    "label": "Jun",
                    "value": "510000"
                },
                {
                    "label": "Jul",
                    "value": "680000"
                },
                {
                    "label": "Aug",
                    "value": "620000"
                },
                {
                    "label": "Sep",
                    "value": "610000"
                },
                {
                    "label": "Oct",
                    "value": "490000"
                },
                {
                    "label": "Nov",
                    "value": "900000"
                },
                {
                    "label": "Dec",
                    "value": "730000"
                }
            ]
        }
    });

    revenueChart.render();
});
FusionCharts.ready(  function  () {
  var  csatGauge =   new  FusionCharts({
    "type" :  "angulargauge",
    "renderAt" :  "gaugedChart",
    "width" :  "400",
    "height" :  "250",
    "dataFormat" :  "json",
    "dataSource" :  {
      "chart" :  {
        "caption" :  "Customer Satisfaction Score",
        "subcaption" :  "Last week",
        "lowerLimit" :  "0",
        "upperLimit" :  "100",
        "theme" :  "fint"
      },
      "colorRange" :  {
        "color" :  [{
        "minValue" :  "0",
        "maxValue" :  "50",
        "code" :  "#e44a00"
      },
      {
        "minValue" :  "50",
        "maxValue" :  "75",
        "code" :  "#f8bd19"
      },
      {
        "minValue" :  "75",
        "maxValue" :  "100",
        "code" :  "#6baa01"
      }]
    },
    "dials" :  {
      "dial" :  [{
        "value" :  "67"
      }]
    }
  }
});
csatGauge.render();
});
