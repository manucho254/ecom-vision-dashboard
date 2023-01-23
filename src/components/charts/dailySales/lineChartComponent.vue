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
        colors: ["#008FFB", "#e0c38d"],
        stroke: {
          width: 2,
          curve: "smooth",
          colors: ["#ecd5a9", "#e0c38d"],
        },
        markers: {
          size: 5,
          colors: [""],
          strokeColor: [],
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
            height: 1.2,
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            color: "#1d145a",
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
            width: 1.2,
            offsetX: -1,
            offsetY: -10,
          },
          axisTicks: {
            show: true,
            color: "#1d145a",
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
      if (currentTheme === "light") {
        this.options.legend.labels.colors = [];
        this.options.markers.strokeColor = [];
        this.options.stroke.colors = [];
        this.options.legend.labels.colors.push("#000");
        this.options.yaxis.axisBorder["color"] = "#000";
        this.options.stroke.colors.push("#fff", "#000")
        this.options.markers.strokeColor.push("#ecd5a9", "#e0c38d");
      } else {
        this.options.legend.labels.colors = [];
        this.options.markers.strokeColor = [];
        this.options.stroke.colors = [];
        this.options.grid["borderColor"] = "#fff";
        this.options.yaxis.axisBorder["color"] = "#fff";
        this.options.legend.labels.colors.push("#fff");
        this.options.markers.strokeColor.push("#ecd5a9", "#e0c38d");
        this.options.stroke.colors.push("#ecd5a9", "#e0c38d")
      }
      console.log(this.options.markers.strokeColor);
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
