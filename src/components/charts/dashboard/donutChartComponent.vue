<script>
export default {
  name: "dashboardDonutChartComponent",
  data: () => {
    return {
      pieOptions: {
        series: [6515, 22803, 16288, 19445],
        labels: ["Shoes", "Clothing", "Accessories", "Misc"],
        fill: {
          colors: ["#e0c38d", "#e3b256"],
        },
        tooltip: {
          theme: "dark",
        },
        legend: {
          position: "bottom",
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: ["#e0c38d", "#e3b256", "#e0c38d", "#e3b256"],
            radius: 12,
          },
          labels: {
            colors: "#fff",
            useSeriesColors: false,
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "45%",
              labels: {
                show: true,
                value: {
                  show: true,
                  fontSize: "12px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: "#e0c38d",
                  offsetY: -10,
                  formatter: function (val) {
                    return val;
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#e0c38d",
                  formatter: function (w) {
                    return `$${w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0)}`;
                  },
                },
              },
            },
          },
        },
      },
    };
  },
};
</script>
<template>
  <apexchart
    width="100%"
    height="320"
    type="donut"
    :options="pieOptions"
    :series="pieOptions.series"
  ></apexchart>
</template>
