<template>
  <main class="main-content">
    <HeaderComponent />
    <SidebarComponent />
    <h4 class="page-heading" data-aos="fade-in">Dashboard</h4>
    <v-row class="pb-md-6 pb-lg-8">
      <v-col cols="12" sm="6" lg="3" data-aos="fade-up" data-aos-delay="100">
        <v-card class="statistic-card">
          <i class="icon-block purple">
            <img
              :src="require('@/assets/imgs/revenue-icon.svg')"
              alt="Total Revenue"
            />
          </i>
          <div class="content-info">
            <p class="label">Total Revenue</p>
            <p class="value">$12,652</p>
          </div>
          <p class="growth-text increase">+21.6%</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3" data-aos="fade-up" data-aos-delay="200">
        <v-card class="statistic-card">
          <i class="icon-block blue">
            <img
              :src="require('@/assets/imgs/booking-icon.svg')"
              alt="Total Bookings"
            />
          </i>
          <div class="content-info">
            <p class="label">Total Bookings</p>
            <p class="value">860</p>
          </div>
          <p class="growth-text decrease">-8.4%</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3" data-aos="fade-up" data-aos-delay="300">
        <v-card class="statistic-card">
          <i class="icon-block orange">
            <img
              :src="require('@/assets/imgs/cars-icon.svg')"
              alt="Total Cars"
            />
          </i>
          <div class="content-info">
            <p class="label">Total Cars</p>
            <p class="value">260</p>
          </div>
          <p class="growth-text increase">+22.9%</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3" data-aos="fade-up" data-aos-delay="400">
        <v-card class="statistic-card">
          <i class="icon-block green">
            <img
              :src="require('@/assets/imgs/vendors-icon.svg')"
              alt="Total Vendors"
            />
          </i>
          <div class="content-info">
            <p class="label">Total Vendors</p>
            <p class="value">60</p>
          </div>
          <p class="growth-text increase">+16.3%</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="my-md-0 pb-0 pb-lg-8">
      <v-col
        cols="12"
        md="7"
        lg="8"
        class="py-md-0"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <v-card class="common-card report-chart">
          <div class="card-header">
            <h5 class="card-heading">Booking Reports</h5>
            <div class="form-group">
              <v-select
                label="Report"
                hide-details
                color="primary"
                :items="['2023', '2021', '2020']"
                variant="outlined"
              >
              </v-select>
            </div>
          </div>
          <div class="card-body">
            <BookingReportChart></BookingReportChart>
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="5"
        lg="4"
        class="py-md-0"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <v-card class="common-card car-rent-chart">
          <div class="card-header">
            <h5 class="card-heading">Top 5 Car Rental</h5>
            <div class="form-group">
              <v-select
                label="Select"
                hide-details
                :items="['2023', '2021', '2020']"
                variant="outlined"
              >
              </v-select>
            </div>
          </div>
          <div class="card-body">
            <CarRentalChart></CarRentalChart>
            <ul>
              <li>
                <span class="bg-1 color-block"></span>
                <p class="legend-label">Sport Car</p>
                <p class="value">439</p>
              </li>
              <li>
                <span class="bg-2 color-block"></span>
                <p class="legend-label">SUV</p>
                <p class="value">265</p>
              </li>
              <li>
                <span class="bg-3 color-block"></span>
                <p class="legend-label">Coupe</p>
                <p class="value">488</p>
              </li>
              <li>
                <span class="bg-4 color-block"></span>
                <p class="legend-label">Hatchback</p>
                <p class="value">316</p>
              </li>
              <li>
                <span class="bg-5 color-block"></span>
                <p class="legend-label">Sedan</p>
                <p class="value">312</p>
              </li>
            </ul>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="my-lg-0">
      <v-col
        cols="12"
        lg="8"
        class="py-lg-0"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <v-card class="common-card table-card">
          <div class="card-header pb-3">
            <h5 class="card-heading">Booking List</h5>
            <v-btn variant="outlined">
              <img
                :src="require('@/assets/imgs/filter-icon.svg')"
                alt="Filter"
              />
              Filter
            </v-btn>
          </div>
          <DataTable></DataTable>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        class="py-lg-0"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <v-card class="common-card transaction-card">
          <div class="card-header pb-3">
            <h5 class="card-heading">Booking List</h5>
            <div class="form-group">
              <v-btn variant="outlined">View All</v-btn>
            </div>
          </div>
          <ul class="transaction-list">
            <li class="transaction-list-item">
              <img :src="require('@/assets/imgs/car-1.png')" alt="Car" />
              <div class="car-brand">
                <p class="brand-name">Nissan GT - R</p>
                <p class="car-type">Sport Car</p>
              </div>
              <div class="car-value">
                <p class="date">20 July</p>
                <p class="value">$80.00</p>
              </div>
            </li>
            <li class="transaction-list-item">
              <img :src="require('@/assets/imgs/car-2.png')" alt="Car" />
              <div class="car-brand">
                <p class="brand-name">Ford Mustang</p>
                <p class="car-type">Sport Car</p>
              </div>
              <div class="car-value">
                <p class="date">20 July</p>
                <p class="value">$60.00</p>
              </div>
            </li>
            <li class="transaction-list-item">
              <img :src="require('@/assets/imgs/car-3.png')" alt="Car" />
              <div class="car-brand">
                <p class="brand-name">Rolls - Royce</p>
                <p class="car-type">Sport Car</p>
              </div>
              <div class="car-value">
                <p class="date">20 July</p>
                <p class="value">$160.00</p>
              </div>
            </li>
            <li class="transaction-list-item">
              <img :src="require('@/assets/imgs/car-4.png')" alt="Car" />
              <div class="car-brand">
                <p class="brand-name">CR-V</p>
                <p class="car-type">SUV</p>
              </div>
              <div class="car-value">
                <p class="date">20 July</p>
                <p class="value">$40.00</p>
              </div>
            </li>
            <li class="transaction-list-item">
              <img :src="require('@/assets/imgs/car-5.png')" alt="Car" />
              <div class="car-brand">
                <p class="brand-name">Mercedes-Benz</p>
                <p class="car-type">Sport Car</p>
              </div>
              <div class="car-value">
                <p class="date">20 July</p>
                <p class="value">$90.00</p>
              </div>
            </li>
          </ul>
        </v-card>
      </v-col>
    </v-row>
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import BookingReportChart from "@/components/BookingReportChart.vue";
import CarRentalChart from "@/components/CarRentalChart.vue";
import DataTable from "@/components/DataTable.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BookingReportChart,
    CarRentalChart,
    DataTable,
  },
};
</script>
