<template>
  <div
    class="sidebar-overlay d-lg-none"
    onclick="document.querySelector('html').classList.remove('open-sidebar')"
  ></div>
  <nav class="sidebar">
    <a href="#" title="HexaDash" class="logo" data-aos="zoom-in">
      <img :src="require('@/assets/imgs/logo.svg')" alt="HexaDash" />
    </a>
    <ul class="nav-list">
      <li class="nav-item" data-aos="fade-right" data-aos-delay="100">
        <router-link to="/dashboard" title="Dashboard" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/dashboard-default-icon.svg')"
              alt="Dashboard"
            />
            <img
              :src="require('@/assets/imgs/dashboard-active-icon.svg')"
              alt="Dashboard"
            />
          </i>
          Dashboard
        </router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="200">
        <router-link to="/inner" title="Innerpage" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/innerpage-default-icon.svg')"
              alt="Innerpage"
            />
            <img
              :src="require('@/assets/imgs/innerpage-active-icon.svg')"
              alt="Innerpage"
            />
          </i>
          Inner Page
        </router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="300">
        <router-link to="/" title="Car Rent" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/car-rent-default-icon.svg')"
              alt="Car Rent"
            />
            <img
              :src="require('@/assets/imgs/car-rent-active-icon.svg')"
              alt="Car Rent"
            />
          </i>
          Car Rent
        </router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="400">
        <router-link to="/" title="Reimburse" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/reimburse-default-icon.svg')"
              alt="Reimburse"
            />
            <img
              :src="require('@/assets/imgs/reimburse-active-icon.svg')"
              alt="Reimburse"
            />
          </i>
          Reimburse
        </router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="500">
        <router-link to="/" title="Transactions" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/transactions-default-icon.svg')"
              alt="Transactions"
            />
            <img
              :src="require('@/assets/imgs/transactions-active-icon.svg')"
              alt="Transactions"
            />
          </i>
          Transactions
        </router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="600">
        <router-link to="/" title="Inbox" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/inbox-default-icon.svg')"
              alt="Inbox"
            />
            <img
              :src="require('@/assets/imgs/inbox-active-icon.svg')"
              alt="Inbox"
            />
          </i>
          Inbox
        </router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="700">
        <router-link to="/" title="Calendar" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/calendar-default-icon.svg')"
              alt="Calendar"
            />
            <img
              :src="require('@/assets/imgs/calendar-active-icon.svg')"
              alt="Calendar"
            />
          </i>
          Calendar
        </router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="800">
        <router-link to="/" title="Help" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/help-default-icon.svg')"
              alt="Help"
            />
            <img
              :src="require('@/assets/imgs/help-active-icon.svg')"
              alt="Help"
            />
          </i>
          Help
        </router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="900">
        <router-link to="/" title="Settings" class="nav-link">
          <i class="icon-block">
            <img
              :src="require('@/assets/imgs/settings-default-icon.svg')"
              alt="Settings"
            />
            <img
              :src="require('@/assets/imgs/settings-active-icon.svg')"
              alt="Settings"
            />
          </i>
          Settings
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class SidebarComponent extends Vue {}
</script>
