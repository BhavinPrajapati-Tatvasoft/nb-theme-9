<template>
  <div class="chart-outer">
    <Bar :data="data" :options="options" />
  </div>
</template>
<style lang="scss">
.chart-outer {
  height: 210px;
}
</style>
<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default {
  name: "BookingReportChart",
  components: {
    Bar,
  },
  data() {
    return {
      data: {
        labels: [
          "Jan",
          "Febr",
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
        datasets: [
          {
            data: [65, 38, 58, 42, 45, 72, 55, 50, 48, 65, 35, 55],
            backgroundColor: "#3563E9",
            borderRadius: 6,
            barThickness: 20,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#262626",
              font: {
                size: 12,
                lineHeight: "20px",
              },
              padding: 8,
            },
            grid: {
              drawTicks: false,
              display: false,
            },
            border: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: "#262626",
              callback: function (value: any) {
                if (value === 0) {
                  return value;
                } else {
                  return value + "K";
                }
              },
              font: {
                size: 12,
                lineHeight: "20px",
                family: "'Urbanist', sans-serif",
              },
              padding: 8,
              stepSize: 20,
            },
            grid: {
              drawTicks: false,
              color: "#DEE0E3",
            },
            border: {
              display: false,
              dash: [4],
            },
          },
        },
      },
    };
  },
};
</script>
