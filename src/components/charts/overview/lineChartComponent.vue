<script>
import { mapGetters } from "vuex";
export default {
  name: "overviewLineChartComponent",
  computed: {
    ...mapGetters({ getTheme: "layout/getTheme" }),
    options() {
      return {
        chart: {
          type: "line",
          foreColor: "#e0c38d",
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
        },
        colors: ["#008FFB"],
        stroke: {
          width: 2,
          curve: "smooth",
          colors: "#e0c38d",
        },
        markers: {
          size: 5,
          colors: [""],
          strokeColor: "#e0c38d",
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
            name: "",
            data: [
              0, 50000, 100000, 140000, 155000, 167000, 170000, 188000, 210000,
              222000, 240000, 250000,
            ],
          },
        ],
        xaxis: {
          axisBorder: {
            show: true,
            color: "#1d145a",
            height: 2,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            color: "#fff",
            borderType: "solid",
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
            text: "Total Units for Year",
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
      };
    },
  },
  data: () => {
    return {};
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
