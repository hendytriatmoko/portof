<template>
  <div>
    <v-app-bar v-if="!$vuetify.display.mobile" color="black">
      <div
        class="d-flex justify-space-between mx-4 align-center"
        style="width: 100%"
      >
        <div
          style="
            font-weight: bold;
            font-size: 40px;
            font-family: 'Courier New', monospace;
          "
        >
          <v-icon color="green">mdi-account-tie</v-icon>
          HENDY
        </div>
        <div
          class="d-flex justify-center align-center"
          style="font-size: 20px; font-family: 'Courier New', monospace"
        >
          <div
            v-for="item in menu"
            :key="item.nama"
            class="mx-3"
            @click="$emit('scrollToSection', item.id)"
          >
            <b :style="item.id == dataSeksion ? 'color:green' : ''">{{
              item.nama
            }}</b>
          </div>
        </div>
        <div class="d-flex justify-end">
          <a class="mx-2" href="https://www.instagram.com/hendytriatmoko">
            <v-icon color="white">mdi-instagram</v-icon>
          </a>
          <a
            class="mx-2"
            href="https://www.linkedin.com/in/hendi-triatmoko-25b03a146/"
          >
            <v-icon color="white">mdi-linkedin</v-icon>
          </a>
          <a
            class="mx-2"
            href="https://www.facebook.com/profile.php?id=100004885547228&locale=id_ID"
          >
            <v-icon color="white">mdi-facebook</v-icon>
          </a>
          <a class="mx-2" href="https://wa.me/6282111239208">
            <v-icon color="white">mdi-whatsapp</v-icon>
          </a>
        </div>
      </div>
    </v-app-bar>
    <div v-else>
      <v-app-bar app clipped-left color="black">
        <div
          style="width: 100vw"
          class="mx-1 mr-2 d-flex align-center justify-space-between"
        >
          <div
            style="
              font-weight: bold;
              font-size: 20px;
              font-family: 'Courier New', monospace;
            "
          >
            <v-icon color="green">mdi-account-tie</v-icon>
            HENDY
          </div>
          <div class="d-flex justify-end">
            <a class="mx-1" href="https://www.instagram.com/hendytriatmoko">
              <v-icon color="white">mdi-instagram</v-icon>
            </a>
            <a
              class="mx-1"
              href="https://www.linkedin.com/in/hendi-triatmoko-25b03a146/"
            >
              <v-icon color="white">mdi-linkedin</v-icon>
            </a>
            <a
              class="mx-1"
              href="https://www.facebook.com/profile.php?id=100004885547228&locale=id_ID"
            >
              <v-icon color="white">mdi-facebook</v-icon>
            </a>
            <a class="mx-1" href="https://wa.me/6282111239208">
              <v-icon color="white">mdi-whatsapp</v-icon>
            </a>
          </div>
        </div>
      </v-app-bar>
      <v-app-bar color="black">
        <div
          style="width: 100vw"
          class="mx-2 d-flex align-center justify-space-between"
        >
          <div
            v-for="item in menu"
            :key="item.nama"
            @click="$emit('scrollToSection', item.id)"
          >
            <div :style="item.id == dataSeksion ? 'color:green' : ''">
              {{ item.nama }}
            </div>
          </div>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataSeksion"],
  data: () => ({
    menu: [
      {
        nama: "Home",
        id: "sectionhome",
      },
      {
        nama: "About",
        id: "sectionabout",
      },
      {
        nama: "Resume",
        id: "sectionresume",
      },
      {
        nama: "Portofolio",
        id: "sectionportofolio",
      },
      {
        nama: "Contact",
        id: "sectioncontact",
      },
    ],
  }),
};
</script>

<style></style>
