<script>
import { mapGetters } from "vuex";
export default {
  name: "dailySalesLineChartComponent",
  computed: {
    ...mapGetters({ getTheme: "layout/getTheme" }),
  },
  data: () => {
    return {
      options: {
        chart: {
          type: "line",
          foreColor: "#e0c38d",
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
          borderColor: "",
          clipMarkers: false,
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        series: [
          {
            name: "Total units",
            data: [
              0, 50000, 100000, 140000, 155000, 167000, 170000, 188000, 210000,
              222000, 240000, 250000,
            ],
          },
          {
            name: "Total sales",
            data: [
              50000, 120000, 130000, 140000, 155000, 167000, 170000, 180000,
              210000, 222000, 24000, 250000,
            ],
          },
        ],
        xaxis: {
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
  watch: {
    getTheme(currentTheme) {
      console.log(currentTheme);
    },
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
