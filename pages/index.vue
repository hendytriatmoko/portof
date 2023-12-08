<template>
  <div style="color: #fff">
    <AppBar :dataSeksion="dataSeksion" @scrollToSection="scrollToSection" />

    <div v-if="!$vuetify.display.mobile">
      <!-- ======= Hero Section ======= -->
      <div class="secto" id="sectionhome">
        <br /><br />
        <div
          id="hero"
          class="hero route bg-image"
          style="background-image: url(/hendypdh.jpg)"
        >
          <div class="overlay-itro"></div>
          <div class="hero-content display-table">
            <div class="table-cell">
              <div class="container">
                <!--<p class="display-6 color-d">Hello, world!</p>-->
                <h1
                  class="hero-title mb-4"
                  style="font-family: 'Courier New', monospace"
                >
                  I'am Hendi Triatmoko
                </h1>
                <center>
                  <div
                    :key="countType"
                    style="width: 400px"
                    class="typewriter hero-subtitle"
                  >
                    <h5>Frontend Developer</h5>
                  </div>
                </center>
                <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Hero Section -->

      <!-- section about -->
      <div>
        <div class="secto" style="" id="sectionabout">
          <br /><br /><br />
          <div class="d-flex justify-center align-center">
            <div>
              <center>
                <div
                  style="
                    font-size: 48px;
                    font-weight: bold;
                    font-family: 'Courier New', monospace;
                  "
                >
                  ABOUT
                </div>
                <v-divider
                  :thickness="4"
                  style="width: 200px"
                  color="yellow"
                ></v-divider>
                <!-- <div style="width: 50vw; font-size: 20px" class="mt-6">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </div> -->
              </center>
              <br /><br /><br />
              <v-row dense class="mt-3" style="font-size: 20px; width: 60vw">
                <v-col
                  cols="12"
                  sm="3"
                  data-aos="zoom-in-right"
                  data-aos-duration="1200"
                >
                  <v-img
                    style="border-radius: 10px"
                    src="/hendypdh.jpg"
                  ></v-img>
                </v-col>
                <v-col
                  data-aos="zoom-in-left"
                  data-aos-duration="1200"
                  cols="12"
                  sm="9"
                >
                  <div class="ml-4">
                    <h2 style="color: green">Frontend Developer</h2>
                    <br />
                    <div>
                      A professional front-end developer from Jakarta,
                      Indonesia. I always give the best effort for each projects
                      I did
                    </div>
                    <v-row dense class="mt-2">
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Name : Hendi Triatmoko
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Date of Birth : 18 October 1998
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Age : 25
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Phone : 0821-1123-9208
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Email : hendytriatmoko0@gmail.com
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        web : hendytriatmoko.com
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        City : Jakarta Timur, Indonesia
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Degree: Bachelor
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col class="mt-2" cols="12" sm="12">
                  <div>
                    I am Hendi Triatmoko, a programmer with a bachelor's degree
                    in Information Systems who currently works at a private
                    company in the information technology sector. I am committed
                    to creating innovative and effective software solutions.
                    With my educational background in computer science and
                    diverse work experience, I have established a strong
                    foundation in software development.
                    <br /><br />
                    I have expertise in various programming languages, including
                    Html5, Python, Golang, and JavaScript. Having been involved
                    in developing web-based software and mobile applications, I
                    am skilled in implementing efficient and user-friendly
                    solutions. My skills include software architecture design,
                    front-end, and back-end development, and API integration.
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
        <v-container data-aos="zoom-in-up" data-aos-duration="1200">
          <div class="d-flex align-center mt-6">
            <div style="font-size: 30px">My Education</div>
            <div
              class="ml-6"
              style="
                border-radius: 10px;
                width: 120px;
                height: 3px;
                background: green;
              "
            ></div>
          </div>
          <v-timeline dense line-color="green">
            <v-timeline-item
              color="#008080"
              large
              icon="mdi-school"
            ></v-timeline-item>
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <div class="py-2" style="text-align: left">
                <h4 :class="` ${year.color}--text`" v-text="year.year"></h4>
                <h4 :class="`${year.color}--text`">
                  {{ year.sekolah }}
                </h4>
                <div class="text-justify">
                  {{ year.desc }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <div style="border: 1px solid #fff; border-radius: 10px">
            <center>
              <div class="pt-8">
                <center>
                  <div style="font-size: 30px">My Hobbies</div>
                  <v-divider
                    color="white"
                    thickness="4"
                    width="30%"
                  ></v-divider>
                  <p class="mx-4 mt-6">
                    Enjoy the storyline deeper by reading a book, or sometimes
                    enjoy some thrilling action scenes just to refresh myself
                    from the routine. Traveling to a beautiful place then take
                    several pictures can be done to find new ideas.
                  </p>
                  <div
                    class="d-flex align-center justify-space-around pb-2 pt-4"
                  >
                    <div>
                      <v-icon color="green">mdi-filmstrip-box-multiple</v-icon>
                      <br />
                      Movies
                    </div>
                    <div>
                      <v-icon color="green">mdi-camera</v-icon>
                      <br />
                      Photography
                    </div>
                    <div>
                      <v-icon color="green">mdi-airplane</v-icon>
                      <br />
                      Traveling
                    </div>
                    <div>
                      <v-icon color="green">mdi-hiking</v-icon>
                      <br />
                      Hiking
                    </div>
                  </div>
                </center>
              </div>
            </center>
          </div>
        </v-container>
      </div>
      <!-- end section about -->

      <v-container>
        <!-- resume -->
        <div class="secto" id="sectionresume">
          <br /><br /><br /><br />
          <center>
            <div
              style="
                font-size: 48px;
                font-weight: bold;
                font-family: 'Courier New', monospace;
              "
            >
              RESUME
            </div>
            <v-divider
              :thickness="4"
              style="width: 200px"
              color="yellow"
            ></v-divider>
            <div style="width: 50vw; font-size: 20px" class="mt-6">
              as a programmer I have worked in various private companies in the
              field of information technology, I was involved in software
              development to develop innovative software solutions
            </div>
          </center>

          <div class="d-flex align-center mt-6">
            <div style="font-size: 30px">Work Experience</div>
            <div
              class="ml-6"
              style="
                border-radius: 10px;
                width: 120px;
                height: 3px;
                background: green;
              "
            ></div>
          </div>
          <v-carousel
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            cycle
            height="320"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item v-for="item in work" :key="item.nama">
              <div>
                <v-row dense no-gutters>
                  <v-col cols="12" sm="3">
                    <div class="pa-4">
                      <v-img height="250px" :src="item.img"> </v-img>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <div class="pa-4">
                      <div>{{ item.periode }}</div>
                      <h4 style="font-size: 25px; color: green">
                        {{ item.nama }}
                      </h4>
                      <h4 style="font-size: 20px">{{ item.posisi }}</h4>
                      <br />
                      <div>Skills Used : {{ item.skill }}</div>
                      <div class="mt-2">
                        deskripsi : <br />
                        {{ item.desc }}
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-carousel-item>
          </v-carousel>

          <div class="d-flex align-center mt-6">
            <div style="font-size: 30px">Skills</div>
            <div
              class="ml-6"
              style="
                border-radius: 10px;
                width: 120px;
                height: 3px;
                background: green;
              "
            ></div>
          </div>
          <v-row
            dense
            no-gutters
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            style="border: 1px solid #fff; border-radius: 10px"
            class="pb-2"
          >
            <v-col cols="12" sm="6">
              <div class="pa-3">
                <template v-for="(item, index) in skills" :key="item.nama">
                  <div v-if="index < 10" class="mt-4">
                    <div>{{ item.nama }}</div>
                    <v-progress-linear
                      style="border: 1px solid green"
                      :model-value="item.value"
                      color="light-green-darken-4"
                      height="10"
                      striped
                    ></v-progress-linear>
                  </div>
                </template>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="pa-3">
                <template v-for="(item, index) in skills" :key="item.nama">
                  <div v-if="index > 9" class="mt-4">
                    <div>{{ item.nama }}</div>
                    <v-progress-linear
                      style="border: 1px solid green"
                      :model-value="item.value"
                      color="light-green-darken-4"
                      height="10"
                      striped
                    ></v-progress-linear>
                  </div>
                </template>
              </div>
            </v-col>
          </v-row>
          <br /><br /><br />
          <center>
            <h3>
              I always give the best effort for each projects I did. I give a
              solution with my creative app.
            </h3>
          </center>
          <br /><br />
          <div data-aos="zoom-in-up" data-aos-duration="1200">
            <v-row dense>
              <v-col cols="12" sm="3" v-for="item in service" :key="item.nama">
                <div class="pa-2">
                  <div
                    style="
                      background: #151515;
                      position: relative;
                      width: 100%;
                      height: 200px;
                    "
                  >
                    <div
                      style="position: absolute; margin-top: -30px; width: 100%"
                    >
                      <center>
                        <v-avatar size="60" style="border: 1px solid green">
                          <v-icon size="x-large" color="green">
                            {{ item.icon }}
                          </v-icon>
                        </v-avatar>
                        <div>{{ item.nama }}</div>
                        <v-divider thickness="3"></v-divider>
                        <div class="pa-2">
                          {{ item.desc }}
                        </div>
                      </center>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        <!-- end resume -->

        <!-- portofolio -->
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          class="secto"
          id="sectionportofolio"
        >
          <br /><br /><br />
          <center>
            <div
              style="
                font-size: 48px;
                font-weight: bold;
                font-family: 'Courier New', monospace;
              "
            >
              PORTOFOLIO
            </div>
            <v-divider
              :thickness="4"
              style="width: 200px"
              color="yellow"
            ></v-divider>
            <div style="width: 50vw; font-size: 20px" class="mt-6">
              A dedicated and experienced software developer, I have expertise
              in developing innovative software solutions. With an educational
              background in computer science and solid work experience, I have
              managed to produce high-quality code and lead software development
              projects successfully.
            </div>
          </center>
          <center>
            <div
              class="mt-5"
              style="
                width: 50vw;
                border: 1px solid #fff;
                border-radius: 10px;
                padding: 30px 0px;
              "
            >
              <center>
                <div style="width: 40vw">
                  <swiper
                    :effect="'coverflow'"
                    :grabCursor="true"
                    :initialSlide="0"
                    :centeredSlides="true"
                    :slidesPerView="'auto'"
                    :loop="true"
                    :coverflowEffect="{
                      rotate: 0,
                      stretch: 300,
                      depth: 400,
                      modifier: 1,
                      slideShadows: true,
                    }"
                    :pagination="false"
                    :modules="modules"
                    class="mySwiper"
                  >
                    <swiper-slide v-for="item in porfo" :key="item.nama">
                      <div
                        class="pa-2"
                        style="
                          border-radius: 10px;
                          width: 300px;
                          background: #222425;
                        "
                      >
                        <v-img
                          style="border-radius: 10px"
                          :src="item.img"
                        ></v-img>
                        <div>
                          {{ item.deskripsi }}
                        </div>
                        <div class="mt-2 d-flex align-center justify-center">
                          <v-btn
                            v-if="item.link"
                            color="green"
                            class="mr-2"
                            :href="item.link"
                          >
                            Visit
                          </v-btn>
                          <v-btn color="green" v-else class="ml-2"
                            >Download</v-btn
                          >
                          <v-btn
                            color="green"
                            class="ml-2"
                            @click="
                              (dialogDetailProject = true),
                                (dataDialogProject = item)
                            "
                            >Detail</v-btn
                          >
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </center>
            </div>
          </center>
        </div>
        <!-- end portofolio -->

        <!-- contact -->
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          class="secto"
          id="sectioncontact"
        >
          <br /><br /><br />
          <center>
            <div
              style="
                font-size: 48px;
                font-weight: bold;
                font-family: 'Courier New', monospace;
              "
            >
              CONTACT
            </div>
            <v-divider
              :thickness="4"
              style="width: 200px"
              color="yellow"
            ></v-divider>
            <div style="width: 50vw; font-size: 20px" class="mt-6">
              Thank you for visiting my portfolio! If you are interested in
              communicating further or have any questions, please contact me
              using the contact information below:
            </div>
          </center>
          <div>
            <v-row dense>
              <v-col
                class="mt-4"
                cols="12"
                sm="3"
                v-for="item in sosmed"
                :key="item.nama"
              >
                <v-card
                  style="background: none"
                  class="white--text"
                  :href="item.link"
                >
                  <div class="d-flex align-center">
                    <div>
                      <v-avatar
                        size="50"
                        style="background: #222425; border: 1px solid green"
                      >
                        <v-icon size="x-large" color="green">
                          {{ item.icon }}
                        </v-icon>
                      </v-avatar>
                    </div>
                    <div class="ml-4">
                      <h2 style="color: grey">{{ item.nama }}</h2>
                      <div style="color: white">{{ item.user }}</div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <br /><br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15865.812042417183!2d106.92405570000001!3d-6.2038175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMDcuMiJTIDEwNsKwNTUnMjIuNSJF!5e0!3m2!1sid!2sid!4v1701257894527!5m2!1sid!2sid"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <!-- end contact -->
      </v-container>
    </div>
    <div v-else>
      <!-- ======= Hero Section ======= -->
      <div class="secto" id="sectionhome" style="width: 100%">
        <div
          id="hero"
          class="hero route bg-image"
          style="background-image: url(/hendypdh.jpg)"
        >
          <div class="overlay-itro"></div>
          <div class="hero-content display-table" style="width: 100vw">
            <div class="table-cell">
              <div class="container" style="">
                <!--<p class="display-6 color-d">Hello, world!</p>-->
                <h1
                  class="hero-title mb-4"
                  style="font-family: 'Courier New', monospace"
                >
                  I'am Hendi Triatmoko
                </h1>
                <center>
                  <div
                    :key="countType"
                    style="width: 250px"
                    class="typewriter hero-subtitle"
                  >
                    <h5>Frontend Developer</h5>
                  </div>
                </center>
                <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Hero Section -->

      <!-- section about -->
      <div>
        <div class="secto" style="" id="sectionabout">
          <br /><br /><br />
          <div class="d-flex justify-center align-center">
            <div>
              <center>
                <div
                  style="
                    font-size: 48px;
                    font-weight: bold;
                    font-family: 'Courier New', monospace;
                  "
                >
                  ABOUT
                </div>
                <v-divider
                  :thickness="4"
                  style="width: 200px"
                  color="yellow"
                ></v-divider>
                <!-- <div style="width: 50vw; font-size: 20px" class="mt-6">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </div> -->
              </center>
              <br /><br /><br />
              <v-row dense class="mt-3" style="font-size: 20px; width: 90vw">
                <v-col
                  data-aos="zoom-in-left"
                  data-aos-duration="1200"
                  cols="12"
                  sm="12"
                >
                  <div class="ml-4">
                    <h2 style="color: green">Frontend Developer</h2>
                    <br />
                    <div>
                      A professional front-end developer from Jakarta,
                      Indonesia. I always give the best effort for each projects
                      I did
                    </div>
                    <v-row dense class="mt-2">
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Name : Hendi Triatmoko
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Date of Birth : 18 October 1998
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Age : 25
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Phone : 0821-1123-9208
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Email : hendytriatmoko0@gmail.com
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        web : hendytriatmoko.com
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        City : Jakarta Timur, Indonesia
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-icon color="green">mdi-chevron-right</v-icon>
                        Degree: Bachelor
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col class="mt-2" cols="12" sm="12">
                  <div>
                    I am Hendi Triatmoko, a programmer with a bachelor's degree
                    in Information Systems who currently works at a private
                    company in the information technology sector. I am committed
                    to creating innovative and effective software solutions.
                    With my educational background in computer science and
                    diverse work experience, I have established a strong
                    foundation in software development.
                    <br /><br />
                    I have expertise in various programming languages, including
                    Html5, Python, Golang, and JavaScript. Having been involved
                    in developing web-based software and mobile applications, I
                    am skilled in implementing efficient and user-friendly
                    solutions. My skills include software architecture design,
                    front-end, and back-end development, and API integration.
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
        <v-container data-aos="zoom-in-up" data-aos-duration="1200">
          <div class="d-flex align-center mt-6">
            <div style="font-size: 30px">My Education</div>
            <div
              class="ml-6"
              style="
                border-radius: 10px;
                width: 120px;
                height: 3px;
                background: green;
              "
            ></div>
          </div>
          <v-timeline side="end" dense line-color="green">
            <v-timeline-item
              color="#008080"
              large
              icon="mdi-school"
            ></v-timeline-item>
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <div class="py-2" style="text-align: left">
                <h4 :class="` ${year.color}--text`" v-text="year.year"></h4>
                <h4 :class="`${year.color}--text`">
                  {{ year.sekolah }}
                </h4>
                <div class="text-justify">
                  {{ year.desc }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <div style="border: 1px solid #fff; border-radius: 10px">
            <center>
              <div class="pt-8">
                <center>
                  <div style="font-size: 30px">My Hobbies</div>
                  <v-divider
                    color="white"
                    thickness="4"
                    width="30%"
                  ></v-divider>
                  <p class="mx-4 mt-6">
                    Enjoy the storyline deeper by reading a book, or sometimes
                    enjoy some thrilling action scenes just to refresh myself
                    from the routine. Traveling to a beautiful place then take
                    several pictures can be done to find new ideas.
                  </p>
                  <div
                    class="d-flex align-center justify-space-around pb-2 pt-4"
                  >
                    <div>
                      <v-icon color="green">mdi-filmstrip-box-multiple</v-icon>
                      <br />
                      Movies
                    </div>
                    <div>
                      <v-icon color="green">mdi-camera</v-icon>
                      <br />
                      Photography
                    </div>
                    <div>
                      <v-icon color="green">mdi-airplane</v-icon>
                      <br />
                      Traveling
                    </div>
                    <div>
                      <v-icon color="green">mdi-hiking</v-icon>
                      <br />
                      Hiking
                    </div>
                  </div>
                </center>
              </div>
            </center>
          </div>
        </v-container>
      </div>
      <!-- end section about -->

      <v-container>
        <!-- resume -->
        <div class="secto" id="sectionresume">
          <br /><br /><br /><br />
          <center>
            <div
              style="
                font-size: 48px;
                font-weight: bold;
                font-family: 'Courier New', monospace;
              "
            >
              RESUME
            </div>
            <v-divider
              :thickness="4"
              style="width: 200px"
              color="yellow"
            ></v-divider>
            <div style="width: 80vw; font-size: 20px" class="mt-6">
              as a programmer I have worked in various private companies in the
              field of information technology, I was involved in software
              development to develop innovative software solutions
            </div>
          </center>

          <div class="d-flex align-center mt-6">
            <div style="font-size: 30px">Work Experience</div>
            <div
              class="ml-6"
              style="
                border-radius: 10px;
                width: 120px;
                height: 3px;
                background: green;
              "
            ></div>
          </div>
          <v-carousel
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            cycle
            height="100%"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item v-for="item in work" :key="item.nama">
              <div>
                <v-row dense no-gutters>
                  <v-col cols="12" sm="3">
                    <div class="pa-4">
                      <v-img height="250px" :src="item.img"> </v-img>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <div class="pa-4">
                      <div>{{ item.periode }}</div>
                      <h4 style="font-size: 25px; color: green">
                        {{ item.nama }}
                      </h4>
                      <h4 style="font-size: 20px">{{ item.posisi }}</h4>
                      <br />
                      <div>Skills Used : {{ item.skill }}</div>
                      <div class="mt-2">
                        deskripsi : <br />
                        {{ item.desc }}
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-carousel-item>
          </v-carousel>

          <div class="d-flex align-center mt-6">
            <div style="font-size: 30px">Skills</div>
            <div
              class="ml-6"
              style="
                border-radius: 10px;
                width: 120px;
                height: 3px;
                background: green;
              "
            ></div>
          </div>
          <v-row
            dense
            no-gutters
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            style="border: 1px solid #fff; border-radius: 10px"
            class="pb-2"
          >
            <v-col cols="12" sm="6">
              <div class="pa-3">
                <template v-for="(item, index) in skills" :key="item.nama">
                  <div v-if="index < 10" class="mt-4">
                    <div>{{ item.nama }}</div>
                    <v-progress-linear
                      style="border: 1px solid green"
                      :model-value="item.value"
                      color="light-green-darken-4"
                      height="10"
                      striped
                    ></v-progress-linear>
                  </div>
                </template>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="pa-3">
                <template v-for="(item, index) in skills" :key="item.nama">
                  <div v-if="index > 9" class="mt-4">
                    <div>{{ item.nama }}</div>
                    <v-progress-linear
                      style="border: 1px solid green"
                      :model-value="item.value"
                      color="light-green-darken-4"
                      height="10"
                      striped
                    ></v-progress-linear>
                  </div>
                </template>
              </div>
            </v-col>
          </v-row>
          <br /><br /><br />
          <center>
            <h3>
              I always give the best effort for each projects I did. I give a
              solution with my creative app.
            </h3>
          </center>
          <br /><br />
          <div data-aos="zoom-in-up" data-aos-duration="1200">
            <v-row dense>
              <v-col cols="12" sm="3" v-for="item in service" :key="item.nama">
                <div class="pa-2">
                  <div
                    style="
                      background: #151515;
                      position: relative;
                      width: 100%;
                      height: 200px;
                    "
                  >
                    <div
                      style="position: absolute; margin-top: -30px; width: 100%"
                    >
                      <center>
                        <v-avatar size="60" style="border: 1px solid green">
                          <v-icon size="x-large" color="green">
                            {{ item.icon }}
                          </v-icon>
                        </v-avatar>
                        <div>{{ item.nama }}</div>
                        <v-divider thickness="3"></v-divider>
                        <div class="pa-2">
                          {{ item.desc }}
                        </div>
                      </center>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        <!-- end resume -->

        <!-- portofolio -->
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          class="secto"
          id="sectionportofolio"
        >
          <br /><br /><br />
          <center>
            <div
              style="
                font-size: 48px;
                font-weight: bold;
                font-family: 'Courier New', monospace;
              "
            >
              PORTOFOLIO
            </div>
            <v-divider
              :thickness="4"
              style="width: 200px"
              color="yellow"
            ></v-divider>
            <div style="width: 80vw; font-size: 16px" class="mt-6">
              A dedicated and experienced software developer, I have expertise
              in developing innovative software solutions. With an educational
              background in computer science and solid work experience, I have
              managed to produce high-quality code and lead software development
              projects successfully.
            </div>
          </center>
          <center>
            <div
              class="mt-5"
              style="
                width: 90vw;
                border: 1px solid #fff;
                border-radius: 10px;
                padding: 30px 0px;
              "
            >
              <center>
                <div style="width: 80vw">
                  <swiper
                    :effect="'coverflow'"
                    :grabCursor="true"
                    :initialSlide="0"
                    :centeredSlides="true"
                    :slidesPerView="'auto'"
                    :loop="true"
                    :coverflowEffect="{
                      rotate: 0,
                      stretch: 100,
                      depth: 400,
                      modifier: 1,
                      slideShadows: false,
                    }"
                    :pagination="false"
                    :modules="modules"
                    class="mySwiper"
                  >
                    <swiper-slide v-for="item in porfo" :key="item.nama">
                      <div
                        class="pa-2"
                        style="
                          border-radius: 10px;
                          width: 60vw;
                          height: 320px;
                          background: #222425;
                        "
                      >
                        <v-img
                          style="border-radius: 10px; width: 200px"
                          :src="item.img"
                        ></v-img>
                        <div>
                          {{ item.deskripsi }}
                        </div>
                        <div class="mt-2 d-flex align-center justify-center">
                          <v-btn
                            v-if="item.link"
                            color="green"
                            class="mr-2"
                            :href="item.link"
                          >
                            Visit
                          </v-btn>
                          <v-btn color="green" v-else class="ml-2"
                            >Download</v-btn
                          >
                          <v-btn
                            color="green"
                            class="ml-2"
                            @click="
                              (dialogDetailProject = true),
                                (dataDialogProject = item)
                            "
                            >Detail</v-btn
                          >
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </center>
            </div>
          </center>
        </div>
        <!-- end portofolio -->
        <!-- contact -->
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          class="secto"
          id="sectioncontact"
        >
          <br /><br /><br />
          <center>
            <div
              style="
                font-size: 48px;
                font-weight: bold;
                font-family: 'Courier New', monospace;
              "
            >
              CONTACT
            </div>
            <v-divider
              :thickness="4"
              style="width: 200px"
              color="yellow"
            ></v-divider>
            <div style="width: 80vw; font-size: 16px" class="mt-6">
              Thank you for visiting my portfolio! If you are interested in
              communicating further or have any questions, please contact me
              using the contact information below:
            </div>
          </center>
          <div>
            <v-row dense>
              <v-col
                class="mt-4"
                cols="12"
                sm="3"
                v-for="item in sosmed"
                :key="item.nama"
              >
                <v-card
                  style="background: none"
                  class="white--text"
                  :href="item.link"
                >
                  <div class="d-flex align-center">
                    <div>
                      <v-avatar
                        size="50"
                        style="background: #222425; border: 1px solid green"
                      >
                        <v-icon size="x-large" color="green">
                          {{ item.icon }}
                        </v-icon>
                      </v-avatar>
                    </div>
                    <div class="ml-4">
                      <h2 style="color: grey">{{ item.nama }}</h2>
                      <div style="color: white">{{ item.user }}</div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <br /><br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15865.812042417183!2d106.92405570000001!3d-6.2038175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMDcuMiJTIDEwNsKwNTUnMjIuNSJF!5e0!3m2!1sid!2sid!4v1701257894527!5m2!1sid!2sid"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <!-- end contact -->
      </v-container>
    </div>
    <br /><br /><br /><br /><br />
    <v-dialog v-model="dialogDetailProject" width="800px">
      <v-card
        v-if="dataDialogProject"
        class="pa-3"
        style="color: #fff; background: #222425"
      >
        <div class="d-flex align-center justify-space-between">
          <h3>Detail Portofolio</h3>
          <div>
            <v-icon @click="dialogDetailProject = false">mdi-close</v-icon>
          </div>
        </div>
        <v-divider color="green" class="my-2" :thickness="4"></v-divider>
        <div>
          <v-row dense no-gutters>
            <v-col cols="12" sm="3">
              <div class="pa-4">
                <v-img height="250px" :src="dataDialogProject.img"> </v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="9">
              <div class="pa-4">
                <h4 style="font-size: 25px; color: green">
                  {{ dataDialogProject.nama }}
                </h4>
                <h4 style="font-size: 20px">Frontend :</h4>
                <div>{{ dataDialogProject.fe }}</div>
                <h4 style="font-size: 20px">Backend :</h4>
                <div>{{ dataDialogProject.be }}</div>
                <br />
                <div class="mt-2">
                  deskripsi : <br />
                  {{ dataDialogProject.deskripsi }}
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    seksion: null,
    dataSeksion: "sectionhome",
    countType: 0,
    dialogDetailProject: false,
    dataDialogProject: null,
    modules: [EffectCoverflow, Pagination],
    years: [
      {
        color: "#008080",
        year: "2017 - 2021",
        sekolah: "UPN VETERAN JAKARTA",
        desc: "Bachelor of information systems from UPN VETERAN JAKARTA. Pass with compliments. And start developing programming skills by Initiating many programming projects on campus. Participate in several programming competitions",
      },
      {
        color: "#008080",
        year: "2014 - 2017",
        sekolah: "SMAN 102 JAKARTA",
        desc: "Science major. Getting interested in information technology and learning about robotics. So interested in mathematics that he participated in several math championships",
      },
      {
        color: "#008080",
        year: "2011 - 2014",
        sekolah: "SMPN 90 JAKARTA",
        desc: "Started liked in computer graphic design. learn corel draw and photo editor",
      },
      {
        color: "#008080",
        year: "2005 - 2011",
        sekolah: "SDN 12 JAKARTA",
        desc: "SDN 12 PT is the first formal school which I attended. Many achievements were obtained and many experience gained.",
      },
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    skills: [
      {
        nama: "HTML5",
        value: 95,
      },
      {
        nama: "CSS",
        value: 90,
      },
      {
        nama: "JAVASCRIPT",
        value: 90,
      },
      {
        nama: "PHP",
        value: 90,
      },
      {
        nama: "C++",
        value: 80,
      },
      {
        nama: "PYTHON",
        value: 85,
      },
      {
        nama: "MYSQL",
        value: 90,
      },
      {
        nama: "LARAVEL",
        value: 90,
      },
      {
        nama: "REACT JS",
        value: 85,
      },
      {
        nama: "REACT NATIVE",
        value: 80,
      },
      {
        nama: "VUE JS",
        value: 95,
      },
      {
        nama: "NUXT JS",
        value: 95,
      },
      {
        nama: "GOLANG-GIN",
        value: 80,
      },
      {
        nama: "NODE JS",
        value: 85,
      },
      {
        nama: "DATA SCIENCE",
        value: 80,
      },
      {
        nama: "ROBOTIKA",
        value: 80,
      },
      {
        nama: "SYSTEM ANALIST",
        value: 75,
      },
      {
        nama: "MS OFFICE",
        value: 90,
      },
      {
        nama: "PHOTOSHOP",
        value: 80,
      },
      {
        nama: "COREL DRAW",
        value: 90,
      },
    ],
    service: [
      {
        nama: "Inovative Ideas",
        icon: "mdi-head-lightbulb",
        desc: "I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build the best applications.",
      },
      {
        nama: "Clean Code",
        icon: "mdi-xml",
        desc: "I always give a clean code to the consumer so the application is easy to understand and easy to develop.",
      },
      {
        nama: "Best Result",
        icon: "mdi-diamond-stone",
        desc: "I will give you the best applications for your best ideas.",
      },
      {
        nama: "Responsive Design",
        icon: "mdi-responsive",
        desc: "I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build the best applications.",
      },
    ],
    sosmed: [
      {
        nama: "Instagram :",
        user: "@hendytriatmoko",
        link: "https://www.instagram.com/hendytriatmoko/",
        icon: "mdi-instagram",
      },
      {
        nama: "LinkedIn :",
        user: "Hendi Triatmoko",
        link: "https://www.linkedin.com/in/hendi-triatmoko-25b03a146/",
        icon: "mdi-linkedin",
      },
      {
        nama: "Email :",
        user: "hendytriatmoko0@gmail.com",
        link: "mailto:hendytriatmoko0@gmail.com",
        icon: "mdi-email",
      },
      {
        nama: "Whatsapp :",
        user: "0821-1123-9208",
        link: "https://wa.me/6282111239208",
        icon: "mdi-whatsapp",
      },
      {
        nama: "Facebook :",
        user: "Hendy Triatmoko",
        link: "https://www.facebook.com/profile.php?id=100004885547228&locale=id_ID",
        icon: "mdi-facebook",
      },
      {
        nama: "Web :",
        user: "@hendytriatmoko",
        link: "https://hendytriatmoko.com",
        icon: "mdi-web",
      },
      {
        nama: "Telegram :",
        user: "0821-1123-9208",
        link: "https://t.me/hendytriatmoko",
        icon: "mdi-send",
      },
      {
        nama: "Location :",
        user: "Cakung, Jakarta Timur",
        link: "",
        icon: "mdi-map-marker",
      },
    ],
    work: [
      {
        nama: "MNC SKY VISION",
        periode: "Februari 2020 - Juli 2020",
        posisi: "Web Developer",
        skill: "html5, css, javascrip, php, laravel",
        desc: "Developed an application that produces a sales report which is used as a centralized report used by one of the company divisions.",
        img: "/mnc.webp",
      },
      {
        nama: "AZ SOLUSINDO",
        periode: "Februari 2021 - Mei 2021",
        posisi: "Frontend Developer",
        skill: "html5, css, javascrip, php, laravel, react js, vue js",
        desc: "is an IT consulting company, where I am tasked with building and developing client requested applications using various programming languages and frameworks.",
        img: "/azsolusindo.webp",
      },
      {
        nama: "DIGITAL NAYAKA ABHINAYA",
        periode: "Juni 2021 - Now",
        posisi: "Frontend Developer - Lead Project",
        skill:
          "html5, css, javascrip, php, laravel, react js, vue js, nuxt js, golang, python",
        desc: "is a company in the information technology sector, there I was tasked with heading one of the application development project teams to plan, implement and supervise the development of applications used by the company in running its business.",
        img: "/dna.webp",
      },
      {
        nama: "Freelancer",
        periode: "-",
        posisi: "Fullstack Developer",
        skill:
          "html5, css, javascrip, php, laravel, react js, vue js, nuxt js, golang, python",
        desc: "accept requests for construction, maintenance or development of mobile applications and websites, I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build the best applications. I always give a clean code to the consumer so the application is easy to understand and easy to develop. I will give you the best applications for your best ideas.",
        img: "/freelance.jpg",
      },
    ],
    porfo: [
      {
        nama: "Simotor",
        deskripsi:
          "Motorbike buying and selling application with 'Tawar Bersama' methods",
        link: "https://simotor.id/",
        img: "/simotor.jpg",
        fe: "Vuejs, Javascript, html5, axios, typescript",
        be: "golang, go-gin, docker, firebase-firestore",
      },
      {
        nama: "Balaps",
        deskripsi: "Vehicle unit auction application",
        link: "https://balaps.id/",
        img: "/balaps.png",
        fe: "Nuxtjs, Javascript, html5, vue, axios, typescript",
        be: "golang, go-gin, firebase-firestore",
      },
      {
        nama: "Strack",
        deskripsi: "Sales performance tracking application",
        link: "https://strack.id/login",
        img: "/strack.png",
        fe: "Nuxtjs, Javascript, html5, vue, axios, typescript",
        be: "golang, go-gin, firebase-firestore",
      },
      {
        nama: "Mono Victory",
        deskripsi: "QR Generator and Scanner application",
        link: "",
        img: "/mono.jpg",
        fe: "React Native, javascript, typescript",
        be: "-",
      },
    ],
  }),
  methods: {
    scrollToSection(item) {
      const element = document.getElementById(item);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // Efek animasi gulir
          block: "start", // Posisi elemen dalam kontainer
        });
      }
    },
    handleScroll() {
      console.log("sss");
      this.seksion.forEach((sec) => {
        let top = window.scrollY + 100;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          this.dataSeksion = id;
        }
      });
      // var dataa = this.$refs.secto;
      // console.log("thisss", dataa);
    },
  },
  mounted() {
    this.seksion = document.querySelectorAll(".secto");
    window.addEventListener("scroll", this.handleScroll);
    setInterval(() => {
      this.countType += 1;
    }, 10000);
  },
  beforeDestroy() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
