// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/assets/scss/_main.scss";

// Vuetify
import { ThemeDefinition, createVuetify } from "vuetify";

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#3563E9",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    "primary-darken-1": "#00ff00",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#E54050",
    info: "#92A2F3",
    success: "#43BD91",
    warning: "#EF7C1D",
  },
};

export default createVuetify({
  display: {
    thresholds: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme,
    },
  },
  defaults: {
    VBtn: {
      variant: "elevated",
      color: "primary",
      size: "large",
      rounded: "lg",
      flat: true,
    },
    VTextField: {
      variant: "outlined",
    },
    VSelect: {
      menuIcon: "mdi-chevron-down",
    },
    VCheckbox: {
      density: "compact",
      hideDetails: true,
    },
    VRadio: {
      density: "compact",
      hideDetails: true,
    },
    VRadioGroup: {
      density: "compact",
      hideDetails: true,
    },
    VAlert: {
      density: "compact",
    },
    VTab: {
      density: "comfortable",
    },
    VListItem: {
      ripple: {
        class: "custom-ripple",
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
