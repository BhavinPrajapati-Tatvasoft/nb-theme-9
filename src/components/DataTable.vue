<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      items-per-page="6"
      items-per-page-text="Records per page"
    >
      <template v-slot:[`item.status`]="{ value }">
        <v-chip :color="getColor(value)">
          {{ value }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>
<style lang="scss">
.v-table--density-default.v-data-table {
  .v-divider {
    display: none;
  }
  > .v-table__wrapper {
    > table {
      > thead {
        > tr {
          > th {
            font-size: 14px;
            line-height: 18px;
            font-weight: 500;
            color: #262626 !important;
            height: 48px;
            background-color: rgba($color: #3563e9, $alpha: 0.06);
            vertical-align: middle;
            border: none;
            white-space: nowrap;
            &:not(.v-data-table__th--sorted) {
              &:hover {
                .v-data-table-header__sort-icon {
                  opacity: 0.5;
                }
              }
            }
            &.v-data-table__th {
              .v-icon {
                opacity: 0.5;
                margin-left: 4px;
                background: url("@/assets/imgs/sorting-icon.svg") center
                  no-repeat;
                background-size: 16px;
                &::before {
                  display: none;
                }
              }
              &.v-data-table__th--sorted {
                .mdi-arrow-up {
                  opacity: 1;
                  background-image: url("@/assets/imgs/sort-asc-icon.svg");
                }
                .mdi-arrow-down {
                  opacity: 1;
                  background-image: url("@/assets/imgs/sort-desc-icon.svg");
                }
              }
            }
          }
        }
      }
      > tbody {
        > tr {
          > td {
            vertical-align: middle;
            color: #262626;
            border-bottom: 1px solid rgba($color: #90a3bf, $alpha: 0.2) !important;
            height: 48px;
            white-space: nowrap;
            .v-chip {
              height: 28px;
              width: 92px;
              text-align: center;
              font-size: 12px;
              line-height: 16px;
              justify-content: center;
              font-weight: 500;
              &.text-orange {
                background-color: rgba($color: #ef8834, $alpha: 0.08);
                color: #ef8834 !important;
              }
              &.text-green {
                background-color: rgba($color: #39b78a, $alpha: 0.08);
                color: #39b78a !important;
              }
              &.text-red {
                background-color: rgba($color: #f35564, $alpha: 0.08);
                color: #f35564 !important;
              }
            }
          }
        }
      }
    }
  }
  .v-data-table-footer {
    .v-input {
      min-width: 66px;
    }
    .v-field {
      font-size: 14px;
      line-height: 18px;
      min-height: 36px;
      .v-select__selection-text {
        color: #262626;
        font-weight: 500;
      }
      .v-field__outline__start,
      .v-field__outline__end {
        border-color: #dee0e3;
        opacity: 1;
      }
    }
  }
}
</style>
<script lang="ts">
export default {
  data: () => ({
    headers: [
      { title: "Booking ID", key: "bookingID" },
      { title: "Customer Name", key: "customerName", minWidth: 180 },
      { title: "Car Type", key: "carType", minWidth: 150 },
      { title: "Date", key: "date" },
      { title: "Payment", key: "payment" },
      { title: "Status", key: "status" },
    ],
    items: [
      {
        bookingID: "#362563",
        customerName: "Jane Cooper",
        carType: "Lexus LFA",
        date: "Sep 26,2023",
        payment: "$365",
        status: "Completed",
      },
      {
        bookingID: "#695865",
        customerName: "Wade Warren",
        carType: "Ford Mustang",
        date: "Sep 26,2023",
        payment: "$263",
        status: "Waiting",
      },
      {
        bookingID: "#362541",
        customerName: "Esther Howard",
        carType: "Ferrari F40",
        date: "Sep 25,2023",
        payment: "$212",
        status: "Canceled",
      },
      {
        bookingID: "#965263",
        customerName: "Cameron Williamson",
        carType: "Renault Clio V6",
        date: "Sep 25,2023",
        payment: "$180",
        status: "Completed",
      },
      {
        bookingID: "#136526",
        customerName: "Leslie Alexander",
        carType: "Mercedes-Benz",
        date: "Sep 25,2023",
        payment: "$160",
        status: "Waiting",
      },
      {
        bookingID: "#263695",
        customerName: "Jenny Wilson",
        carType: "Ferrari 250 GT",
        date: "Sep 24,2023",
        payment: "$140",
        status: "Completed",
      },
      {
        bookingID: "#362563",
        customerName: "Jane Cooper",
        carType: "Lexus LFA",
        date: "Sep 26,2023",
        payment: "$365",
        status: "Completed",
      },
      {
        bookingID: "#695865",
        customerName: "Wade Warren",
        carType: "Ford Mustang",
        date: "Sep 26,2023",
        payment: "$263",
        status: "Waiting",
      },
      {
        bookingID: "#362541",
        customerName: "Esther Howard",
        carType: "Ferrari F40",
        date: "Sep 25,2023",
        payment: "$212",
        status: "Canceled",
      },
      {
        bookingID: "#965263",
        customerName: "Cameron Williamson",
        carType: "Renault Clio V6",
        date: "Sep 25,2023",
        payment: "$180",
        status: "Completed",
      },
      {
        bookingID: "#136526",
        customerName: "Leslie Alexander",
        carType: "Mercedes-Benz",
        date: "Sep 25,2023",
        payment: "$160",
        status: "Waiting",
      },
      {
        bookingID: "#263695",
        customerName: "Jenny Wilson",
        carType: "Ferrari 250 GT",
        date: "Sep 24,2023",
        payment: "$140",
        status: "Completed",
      },
    ],
  }),
  methods: {
    getColor(status: any) {
      if (status == "Canceled") return "red";
      else if (status == "Waiting") return "orange";
      else return "green";
    },
  },
};
</script>
