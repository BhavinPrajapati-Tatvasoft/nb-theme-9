<template>
  <header class="header">
    <v-btn
      class="btn-menu rounded-circle"
      color="primary"
      variant="plain"
      density="comfortable"
      rounded
      icon
      onclick="document.querySelector('html').classList.toggle('open-sidebar');"
    >
      <img :src="require(`@/assets/imgs/menu-icon.svg`)" />
    </v-btn>
    <div
      class="search-overlay"
      onclick="document.querySelector('html').classList.remove('open-search');"
    ></div>
    <v-autocomplete
      clearable
      menu-icon=""
      prepend-inner-icon="mdi-magnify"
      @click:prepend-inner="() => {}"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
      hide-details
      variant="solo-inverted"
      placeholder="Search something here"
    ></v-autocomplete>
    <v-btn
      class="sm-search-btn rounded-circle d-sm-none"
      color="primary"
      variant="plain"
      density="comfortable"
      rounded
      icon
      onclick="document.querySelector('html').classList.toggle('open-search');"
    >
      <img :src="require(`@/assets/imgs/search-sm-icon.svg`)" />
    </v-btn>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="bottom end"
      class="notification-menu"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          color="primary"
          variant="plain"
          class="rounded-circle notification-btn"
          density="comfortable"
          icon
        >
          <img :src="require(`@/assets/imgs/notification-icon.svg`)" />
        </v-btn>
      </template>
      <v-list>
        <div class="notification-header">
          <h6 class="pb-0">Notification</h6>
          <v-btn
            color="primary"
            variant="plain"
            class="rounded-circle notification-btn"
            density="compact"
            icon
          >
            <img :src="require(`@/assets/imgs/menu-close-icon.svg`)" />
          </v-btn>
        </div>
        <div class="notification-content">
          <v-list-item link>
            <img
              :src="require('@/assets/imgs/user-img-1.png')"
              alt="User"
              class="user-img"
            />
            <p class="notification-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p class="time">11:43 AM</p>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/imgs/user-img-2.png')"
              alt="User"
              class="user-img"
            />
            <p class="notification-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p class="time">09:16 AM</p>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/imgs/user-img-3.png')"
              alt="User"
              class="user-img"
            />
            <p class="notification-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p class="time">30 Oct</p>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/imgs/user-img-4.png')"
              alt="User"
              class="user-img"
            />
            <p class="notification-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p class="time">29 Oct</p>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/imgs/user-img-5.png')"
              alt="User"
              class="user-img"
            />
            <p class="notification-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p class="time">28 Oct</p>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/imgs/user-img-1.png')"
              alt="User"
              class="user-img"
            />
            <p class="notification-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p class="time">11:43 AM</p>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/imgs/user-img-2.png')"
              alt="User"
              class="user-img"
            />
            <p class="notification-text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p class="time">29 Oct</p>
          </v-list-item>
        </div>
        <v-list-item link class="footer-link">
          See all Notification</v-list-item
        >
      </v-list>
    </v-menu>

    <v-menu
      v-model="profileMenu"
      :close-on-content-click="false"
      class="profile-menu"
    >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="text" class="profile-btn">
          <img :src="require(`@/assets/imgs/user-profile-img.png`)" />
          <div class="profile-content">
            <p class="department">Admin</p>
            <p class="name">Martin Smith</p>
          </div>
          <img
            :src="require(`@/assets/imgs/profile-down-icon.svg`)"
            class="profile-down-icon"
          />
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <img
            :src="require('@/assets/imgs/my-profile-icon.svg')"
            alt="My Profile"
          />
          <p>My Profile</p>
        </v-list-item>
        <v-list-item link to="/">
          <img :src="require('@/assets/imgs/logout-icon.svg')" alt="Logout" />
          <p>Logout</p>
        </v-list-item>
      </v-list>
    </v-menu>
  </header>
</template>

<script lang="ts">
export default {
  name: "HeaderComponent",
  data: () => ({
    menu: false,
    profileMenu: false,
  }),
};
</script>
