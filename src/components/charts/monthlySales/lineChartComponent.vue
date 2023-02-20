<script>
export default {
  name: "monthlySalesLineChartComponent",
  data: () => {
    return {
      options: {
        chart: {
          type: "line",
          foreColor: "#ecd5a9",
          stacked: true,
          dropShadow: {
            enabled: true,
          },
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
        },
        colors: ["#ecd5a9", "#008FFB"],
        stroke: {
          width: 2,
          colors: ["#ecd5a9", "#e0c38d"],
        },
        markers: {
          size: 5,
          colors: [""],
          strokeColor: ["#ecd5a9", "#e0c38d"],
          strokeWidth: 3,
        },
        tooltip: {
          theme: "dark",
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
        series: [
          {
            name: "Total Units",
            data: [
              0, 50000, 100000, 140000, 155000, 167000, 170000, 188000, 210000,
              222000, 240000, 250000,
            ],
          },
          {
            name: "Total sales",
            data: [
              50000, 250000, 130000, 180000, 200000, 167000, 170000, 180000,
              210000, 222000, 24000, 250000,
            ],
          },
        ],
        series2: [
          {
            name: "",
            data: [
              0, 50000, 100000, 140000, 155000, 167000, 170000, 188000, 210000,
              222000, 240000, 250000,
            ],
          },
        ],
        xaxis: {
          tickAmount: 5,
          axisBorder: {
            show: true,
            color: "#1d145a",
            height: 2,
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            color: "#fff",
            borderType: "solid",
          },
          title: {
            text: "Month",
          },
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        yaxis: {
          title: {
            text: "Total",
          },
          min: 0,
          tickAmount: 5,
          axisBorder: {
            show: true,
            color: "#1d145a",
            width: 2,
            offsetX: -1,
            offsetY: -10,
          },
          axisTicks: {
            show: true,
            color: "#fff",
            borderType: "solid",
          },
        },
        legend: {
          position: "right",
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: ["#e0c38d", "#ecd5a9"],
            radius: 12,
          },
          labels: {
            colors: [],
            useSeriesColors: false,
          },
        },
      },
    };
  },
};
</script>

<template>
  <apexchart
    type="line"
    height="550"
    :options="options"
    :series="options.series"
  ></apexchart>
</template>
