<template>
  <div class="login-wrapper">
    <div class="login-card">
      <img
        :src="require('@/assets/imgs/login-top-right-shape.svg')"
        alt="Shape"
        class="shape right-shape"
      />
      <img
        :src="require('@/assets/imgs/login-top-left-shape.svg')"
        alt="Shape"
        class="shape left-shape"
      />
      <div class="login-banner" data-aos="zoom-in">
        <img :src="require('@/assets/imgs/login-banner.svg')" alt="Banner" />
      </div>
      <div class="login-form">
        <a href="#" title="HexaDash" class="login-logo" data-aos="zoom-in">
          <img :src="require('@/assets/imgs/login-logo.svg')" alt="HexaDash" />
        </a>
        <h4 data-aos="zoom-in" data-aos-delay="100">Welcome to Hexadash!</h4>
        <p class="sub-info" data-aos="zoom-in" data-aos-delay="200">
          Please sign in to your account
        </p>
        <div class="form-group" data-aos="fade-up" data-aos-delay="300">
          <label>Email</label>
          <v-text-field type="email"></v-text-field>
        </div>
        <div class="form-group" data-aos="fade-up" data-aos-delay="400">
          <label>Password</label>
          <v-text-field
            v-model="password"
            class="password-field"
            :append-inner-icon="
              show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
            "
            :type="show1 ? 'text' : 'password'"
            @click:append-inner="show1 = !show1"
          ></v-text-field>
        </div>
        <div class="action-wrapper" data-aos="fade-up" data-aos-delay="500">
          <v-checkbox label="Remember me"></v-checkbox>
          <a href="#" title="Forgot Password?" class="primary-link">
            Forgot Password?
          </a>
        </div>
        <v-btn
          block
          class="mt-4 mb-6 mb-md-8"
          to="/dashboard"
          data-aos="fade-up"
          data-aos-delay="600"
          >Sign In</v-btn
        >
        <p class="sign-up-text pb-0" data-aos="fade-up" data-aos-delay="700">
          Don’t have an account?
          <a href="#" title="Sign Up" class="primary-link">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      show1: false,
      password: "Password",
    };
  },
};
</script>
