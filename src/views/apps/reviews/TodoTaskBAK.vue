<!-- =========================================================================================
    File Name: TodoItem.vue
    Description: Single todo item component
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Developer: Netquest's TripcarteDev Team Malaysia.
    GitHub URL: https://github.com/gispatial/tripcarte-asia-JWT
========================================================================================== -->


<template>
    <div @click="displayPrompt" class="px-4 py-4 list-item-component">
        <div class="vx-row">
          <h5 class="todo-title">{{ review.product_name }}</h5>
            <div class="vx-col w-full sm:w-5/6 flex sm:items-center sm:flex-row flex-col">
              <div>
              <vs-chip>&nbsp;&nbsp;&nbsp;&nbsp;
              <feather-icon icon="StarIcon"></feather-icon>
              <div class="h-2 w-2 rounded-full mr-1" :class="'bg-success'"></div>
                <span>{{ review.rating }}</span>
              </feather-icon>
              </vs-chip>
          </div>

              <div class="todo-tags sm:ml-2 sm:my-0 my-2 flex">
                <!--
                  <vs-chip v-for="(tag, index) in taskLocal.tags" :key="index">
                      <div class="h-2 w-2 rounded-full mr-1" :class="'bg-' + todoLabelColor(tag)"></div>
                      <span>{{ review.files }}</span>
                  </vs-chip>
                -->
                <vs-chip>
                  <feather-icon icon="TagIcon" class="cursor-pointer ml-5" svg-classes="h-6 w-6"></feather-icon>
                      <div class="h-2 w-2 rounded-full mr-1" :class="'bg-success'"></div>
                      <span>{{ review.timing }}</span>
                </vs-chip>
              </div>
              <div>
              <vs-chip>
              <feather-icon icon="TagIcon" class="cursor-pointer ml-5" svg-classes="h-6 w-6"></feather-icon>
              <div class="h-2 w-2 rounded-full mr-1" :class="'bg-success'"></div>
              <span>{{ review.suited }}</span>
              </feather-icon>
              </vs-chip>
          </div>
                <div class="flex items-center">
                  <!--
                    <vs-checkbox v-model="isCompleted" class="w-8 m-0 vs-checkbox-small" @click.stop />
                    <h6 class="todo-title" :class="{'line-through': taskLocal.isCompleted}">{{ review.title }}</h6>
                  -->
                  <div>
                  </div>

                    <!--<div v-for="(image, imageIndex) in review.files" :key="imageIndex" class="img-container w-32 mx-auto my-base">-->

                    <!--<img-slider>
                      <img :src="image" class="img" :key="imageIndex">
                    </img-slider>
                  </div>-->

                </div>

            <!--
            <div class="vx-col w-full sm:w-1/6 ml-auto flex sm:justify-end">
                <feather-icon
                  icon="StarIcon"
                  class="cursor-pointer"
                  :svgClasses="[{'text-success stroke-current': taskLocal.isImportant}, 'w-5', 'h-5 mr-4']"
                  @click.stop="toggleIsImportant" />

                <feather-icon
                  icon="StarRatingIcon"
                  class="cursor-pointer"
                  :svgClasses="[{'text-warning stroke-current': taskLocal.isStarred}, 'w-5', 'h-5 mr-4']"
                  @click.stop="toggleIsStarred" />
                <feather-icon
                  v-if="!taskLocal.isTrashed"
                  icon="StarIcon"
                  class="cursor-pointer"
                  svgClasses="w-5 h-5"
                  @click.stop="moveToTrash" />
            </div>
            -->
        </div>
        <!--
        <div class="vx-row" v-if="taskLocal.desc">
            <div class="vx-col w-full">
                <p class="mt-2 truncate" :class="{'line-through': taskLocal.isCompleted}">{{ taskLocal.desc }}</p>
            </div>
        </div>
        -->
        <div>
        <div class="vx-row">
            <div class="vx-col w-full flex sm:items-center sm:flex-row flex-col">
                <p class="mt-2 truncate">{{ review.extra }}</p>
            </div>
          </div>
            <div class="carousel-example">
        <!-- swiper -->
  <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
          <swiper-slide v-for="(item, imageIndex) in review.files" :key="imageIndex" class="p-6 rounded cursor-pointer">
              <img class="responsive w-48" :src="item" :alt="item" alt="banner">
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
            </div>
        </div>
    </div>


</template>

<script>
import axios from '../../../axios'
//import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import StarRating from 'vue-star-rating'

export default{

  components: {
        swiper,
        swiperSlide,
        StarRating
    },
    props: ["review"],
    /*
    {
        taskId: {
            type: Number,
            required: true,
        }
    },*/

    data() {
        return {
          //review: post,
          taskLocal: this.$http.get["reviews/getTask"](this.taskId),
          swiperOption: {
                slidesPerView: 5,
                spaceBetween: 50,
                // init: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    }
                }
            }
        }
    },
    computed: {
        isCompleted: {
          get () {
              return this.taskLocal.isCompleted
          },
          set (value) {
            this.$store.dispatch("reviews/updateTask", Object.assign({}, this.taskLocal, {isCompleted: value}))
              .then((response) => {
                this.taskLocal.isCompleted = response.data.isCompleted
              })
              .catch((error) => { console.error(error) })
          }
        },
        todoLabelColor() {
          return (label) => {
            const tags = this.$store.state.reviews.taskTags
            return tags.find((tag) => {
              return tag.value == label
            }).color
          }
        }
    },
    methods: {
        toggleIsImportant() {
          this.$store.dispatch("reviews/updateTask", Object.assign({}, this.taskLocal, {isImportant: !this.taskLocal.isImportant}))
            .then((response) => {
              this.taskLocal.isImportant = response.data.isImportant
            })
            .catch((error) => { console.error(error) })
        },
        toggleIsStarred() {
          this.$store.dispatch("reviews/updateTask", Object.assign({}, this.taskLocal, {isStarred: !this.taskLocal.isStarred}))
            .then((response) => {
              this.taskLocal.isStarred = response.data.isStarred
            })
            .catch((error) => { console.error(error) })
        },
        moveToTrash() {

          this.$store.dispatch("reviews/updateTask", Object.assign({}, this.taskLocal, {isTrashed: true}))
            .then((response) => {
              // console.log(response.data);
              this.taskLocal.isTrashed = response.data.isTrashed
              this.$el.style.display = "none"   // Hides element from DOM
            })
            .catch((error) => { console.error(error) })

          // Un-comment below line if you want to fetch task after task is deleted
          // this.$store.dispatch("reviews/fetchTasks", {filter: this.$route.params.filter})
        },
        displayPrompt() {
          this.$emit('showDisplayPrompt', this.taskId)
        }
    },
    mounted() {
      this.$store.dispatch("reviews/getReviews");
    }
    /*
    created: function() {
    axios
      .get("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/my/reviews",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
      .then(res => {
        this.post = res.data;
      })
  }
  */

}
</script>
