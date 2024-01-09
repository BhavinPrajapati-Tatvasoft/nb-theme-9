<template>
  <div class="chart-wrapper">
    <Doughnut :data="data" :options="options" />
    <div class="text-outer">
      <p>1820</p>
      <span>Rental Car</span>
    </div>
  </div>
</template>
<style lang="scss">
.chart-wrapper {
  max-width: 180px;
  max-height: 180px;
  position: relative;
}
.text-outer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  p {
    padding-bottom: 0;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: #262626;
    padding-bottom: 6px;
  }
  span {
    font-size: 14px;
    line-height: 18px;
    color: #90a3bf;
  }
}
@media (max-width: 1279px) {
  .chart-wrapper {
    max-width: 160px;
    max-height: 160px;
  }
}
</style>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "CarRentalChart",
  components: {
    Doughnut,
  },
  data() {
    return {
      data: {
        labels: ["Sport Car", "SUV", "Coupe", "Hatchback", "Sedan"],
        datasets: [
          {
            backgroundColor: [
              "#123089",
              "#1E4CD2",
              "#3563E9",
              "#7A9BF9",
              "#BACCFF",
            ],
            data: [439, 265, 488, 316, 312],
            borderAlign: "inner",
            borderColor: "#fff",
            borderWidth: 1,
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: 65,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>
