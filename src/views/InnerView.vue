<template>
  <main class="main-content">
    <HeaderComponent />
    <SidebarComponent />
    <h4 class="page-heading" data-aos="fade-in">Inner Page</h4>
    <VCard class="page-card">
      <h5 class="card-heading" data-aos="fade-up" data-aos-delay="100">
        Form Control
      </h5>
      <h6 class="section-heading" data-aos="fade-up" data-aos-delay="200">
        One Column
      </h6>
      <div class="form-group" data-aos="fade-up" data-aos-delay="300">
        <label>Firstname</label>
        <v-text-field type="text" placeholder="Placeholder"></v-text-field>
      </div>
      <div class="form-group" data-aos="fade-up" data-aos-delay="400">
        <label>Lastname</label>
        <v-text-field type="text" placeholder="Placeholder"></v-text-field>
      </div>
      <div class="form-group pb-md-2" data-aos="fade-up" data-aos-delay="500">
        <label>Textarea</label>
        <v-textarea
          rows="4"
          variant="outlined"
          placeholder="Placeholder"
        ></v-textarea>
      </div>
      <h6 class="section-heading" data-aos="fade-up" data-aos-delay="600">
        Two Column
      </h6>
      <v-row class="my-0 pb-6 pb-md-8">
        <v-col
          cols="12"
          sm="6"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div class="form-group">
            <label>Firstname</label>
            <v-text-field placeholder="Placeholder" type="text"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div class="form-group">
            <label>Lastname</label>
            <v-text-field type="text" placeholder="Placeholder"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div class="form-group">
            <label>Select</label>
            <v-select
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div class="form-group">
            <label>Error</label>
            <v-text-field
              type="text"
              error-messages="Supporting text"
              error
              append-inner-icon="mdi-information-outline"
              placeholder="Placeholder"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <h6 class="section-heading" data-aos="fade-up" data-aos-delay="100">
        Three Column
      </h6>
      <v-row class="my-0 pb-6 pb-md-8">
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="form-group">
            <label>Firstname</label>
            <v-text-field type="text" placeholder="Placeholder"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="form-group">
            <label>Lastname</label>
            <v-text-field type="text" placeholder="Placeholder"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="form-group">
            <label>Select</label>
            <v-select
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="form-group">
            <label>Name</label>
            <v-text-field type="text" placeholder="Placeholder"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="form-group">
            <label>Select</label>
            <v-select
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="form-group">
            <label>Error</label>
            <v-text-field
              type="text"
              error-messages="Supporting text"
              error
              append-inner-icon="mdi-information-outline"
              placeholder="Placeholder"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <h6 class="section-heading">Four Column</h6>
      <v-row class="my-0 pb-6 pb-md-8">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="form-group">
            <label>Firstname</label>
            <v-text-field type="text" placeholder="Placeholder"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="form-group">
            <label>Lastname</label>
            <v-text-field type="text" placeholder="Placeholder"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="form-group">
            <label>Select</label>
            <v-select
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="form-group">
            <label>Select</label>
            <v-select
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="form-group">
            <label>Name</label>
            <v-text-field type="text" placeholder="Placeholder"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="form-group">
            <label>Select</label>
            <v-select
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div class="form-group">
            <label>Name</label>
            <v-text-field type="text" placeholder="Placeholder"></v-text-field>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="py-0"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div class="form-group">
            <label>Error</label>
            <v-text-field
              type="text"
              error-messages="Supporting text"
              error
              placeholder="Placeholder"
            >
              <template v-slot:append-inner>
                <img
                  :src="require('@/assets/imgs/error-info-icon.svg')"
                  alt="Error Info"
                />
              </template>
            </v-text-field>
          </div>
        </v-col>
      </v-row>
      <h5 class="card-heading pb-6" data-aos="fade-up" data-aos-delay="100">
        Other From Elements
      </h5>
      <h6 class="section-heading" data-aos="fade-up" data-aos-delay="200">
        File Upload
      </h6>
      <div class="file-upload-outer" data-aos="fade-up" data-aos-delay="300">
        <div class="upload-btn">
          <input type="file" />
          <img
            :src="require('@/assets/imgs/file-upload-icon.svg')"
            alt="Upload"
          />
          <span>Upload</span>
        </div>
        <p>No File Selected</p>
      </div>
      <h6
        class="section-heading pb-3 pb-md-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Checkbox
      </h6>
      <v-row class="my-0 pb-7" data-aos="fade-up" data-aos-delay="200">
        <v-col cols="auto" class="py-0">
          <v-checkbox label="Check 1"></v-checkbox>
        </v-col>
        <v-col cols="auto" class="py-0">
          <v-checkbox label="Check 2"></v-checkbox>
        </v-col>
      </v-row>
      <h6
        class="section-heading pb-3 pb-md-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Radio Button
      </h6>
      <div data-aos="fade-up" data-aos-delay="400">
        <v-radio-group inline class="pb-7">
          <v-radio label="Options 1" value="one"></v-radio>
          <v-radio label="Options 2" value="two"></v-radio>
        </v-radio-group>
      </div>
      <h6 class="section-heading pb-4" data-aos="fade-up" data-aos-delay="100">
        Buttons
      </h6>
      <v-row class="my-0 pb-8" data-aos="fade-up" data-aos-delay="200">
        <v-col cols="auto" class="py-0">
          <v-btn>Primary</v-btn>
        </v-col>
        <v-col cols="auto" class="py-0">
          <v-btn color="primary" variant="outlined">Secondary</v-btn>
        </v-col>
      </v-row>
      <h6 class="section-heading pb-4" data-aos="fade-up" data-aos-delay="100">
        Snackbar
      </h6>
      <v-row class="pb-8">
        <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="200">
          <v-alert
            closable
            color="success"
            text="This is a success message"
            variant="outlined"
          ></v-alert>
        </v-col>
        <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="300">
          <v-alert
            closable
            color="info"
            text="This is a info message"
            variant="outlined"
          ></v-alert>
        </v-col>
        <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="400">
          <v-alert
            closable
            color="warning"
            text="This is a warning message"
            variant="outlined"
          ></v-alert>
        </v-col>
        <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="500">
          <v-alert
            closable
            color="error"
            text="This is a error message"
            variant="outlined"
          ></v-alert>
        </v-col>
      </v-row>
      <h6 class="section-heading pb-4" data-aos="fade-up" data-aos-delay="100">
        Tabs
      </h6>
      <v-tabs v-model="tab" data-aos="fade-up" data-aos-delay="200">
        <v-tab value="one" variant="flat">Tab 1</v-tab>
        <v-tab value="two" variant="flat">Tab 2</v-tab>
        <v-tab value="three" variant="flat">Tab 3</v-tab>
      </v-tabs>
      <v-window v-model="tab" data-aos="fade-up" data-aos-delay="300">
        <v-window-item value="one">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            nisi, cras non congue amet, eu interdum. Purus vulputate odio eget
            curabitur porttitor tempus ipsum. Amet risus aenean tortor sed
            lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue
            vehicula sed viverra. Quam sit adipiscing egestas etiam nunc
            adipiscing non luctus cursus. Pretium nunc, scelerisque mauris
            aliquet vulputate erat. Sem condimentum nullam pharetra ac sagittis.
            Vel nulla sed in pharetra. Sit mauris id id nascetur. Sem gravida
            euismod ac convallis.
          </p>
        </v-window-item>
        <v-window-item value="two">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            nisi, cras non congue amet, eu interdum. Purus vulputate odio eget
            curabitur porttitor tempus ipsum. Amet risus aenean tortor sed
            lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue
            vehicula sed viverra.
          </p>
        </v-window-item>
        <v-window-item value="three">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            nisi, cras non congue amet, eu interdum. Purus vulputate odio eget
            curabitur porttitor tempus ipsum. Amet risus aenean tortor sed
            lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue
            vehicula sed viverra. Quam sit adipiscing egestas etiam nunc
            adipiscing non luctus cursus.
          </p>
          <p>
            Pretium nunc, scelerisque mauris aliquet vulputate erat. Sem
            condimentum nullam pharetra ac sagittis. Vel nulla sed in pharetra.
            Sit mauris id id nascetur. Sem gravida euismod ac convallis.
          </p>
        </v-window-item>
      </v-window>
    </VCard>
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  },

  data: () => ({
    tab: null,
  }),
};
</script>
