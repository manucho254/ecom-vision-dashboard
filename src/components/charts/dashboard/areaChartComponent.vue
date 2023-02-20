<script>
export default {
  name: "areaChartDashboardComponent",
  data: () => {
    return {
      options: {
        chart: {
          type: "area",
          foreColor: "#e0c38d",
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
        },
        colors: ["#e0c38d"],
        stroke: {
          width: 2,
          curve: "smooth",
        },
        grid: {
          borderColor: "#fff",
          clipMarkers: false,
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.55,
            opacityTo: 0,
          },
        },
        markers: {
          size: 5,
          colors: [],
          strokeColor: "#e0c38d",
          strokeWidth: 3,
        },
        series: [
          {
            name: "",
            data: [
              0, 50000, 100000, 140000, 155000, 167000, 170000, 188000, 210000,
              222000, 240000, 250000,
            ],
          },
        ],
        tooltip: {
          theme: "dark",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          min: 0,
          tickAmount: 5,
          axisBorder: {
            show: true,
            color: "#fff",
            width: 1.2,
            offsetX: -1,
            offsetY: -10,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
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
    height="100%"
    type="area"
    :options="options"
    :series="options.series"
  >
  </apexchart>
</template>
