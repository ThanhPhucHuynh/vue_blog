<template>
  <div class="containerblogs">
    <div class="strips">
      <div class="s-one"></div>
      <div class="s-two"></div>
      <div class="s-three"></div>
    </div>

    <div class="data">
      <div class="contact">
        <span>Contact</span>
      </div>

      <div class="tag">
        <p
          >You're not lucky, <br />
          You worth it</p
        >
      </div>

      <div class="year">2019</div>

      <div class="arrow-left">
        <i class="fa fa-arrow-left"></i>
      </div>

      <div class="arrow-right">
        <i class="fa fa-arrow-right"></i>
      </div>

      <div class="add">
        <i class="fa fa-plus"></i>
      </div>
    </div>

    <div class="img">
      <img src="../assets/images/hero.jpg" alt="" />
    </div>
    <div class="title">
      <div class="div-spin">
        <!-- <a-space>? -->
          <a-spin @click="showModal" size="large" />
        <!-- </a-space> -->
      </div>
      <!-- <a-button type="primary" @click="showModal">Open Modal</a-button> -->
    </div>
    <div class="titleblog">
      <!-- <span>regel<br />black</span> -->
    </div>

    <div class="line"></div>

    <div class="e-shop">
      <span>E-shop</span>
    </div>

    <div class="tag-line">
      <span>Discover products</span>
    </div>

    <div class="media">
      <ul>
        <li><i class="fa fa-facebook"></i></li>
        <li><i class="fa fa-instagram"></i></li>
        <li><i class="fa fa-twitter"></i></li>
      </ul>
    </div>
    <div class="blog">
      <li v-for="item in Posts" :key="item.id">
        <div class="card-blog">
          <card :item="item" />
        </div>
      </li>
    </div>
    <a-modal
      v-model:visible="visible"
      title="ADD BLOG"
      width="100%"
      wrap-class-name="full-modal"
      @ok="handleOk"
    >
      <forma />
    </a-modal>
  </div>
</template>

<script>
import "./Blog.css";
import { mapGetters, mapActions } from "vuex";
// import BaseRequests from "../core/BaseRequest";
import { TweenMax, Circ, Power3, Power2, Expo } from "gsap";
import Card from "../components/card.vue";
import Form from "../components/form.vue";
import { ref } from "vue";
export default {
  name: "Blog",
  components: {
    card: Card,
    forma: Form,
  },
  setup() {
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    return {
      visible,
      showModal,
      handleOk,
    };
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
      },
      showError: false,
      // blogs: [],
    };
  },
  mounted: async function () {
    this.startAnimations();
    await this.submit();
  },
  computed: {
    ...mapGetters({ Posts: "StatePosts" }),
  },
  methods: {
    ...mapActions(["GetPosts"]),
    async add(items) {
      console.log(items);
    },
    async submit() {
      await this.GetPosts();
    },
    startAnimations: function () {
      // gsap.to("#title",{ duration: 1, color: "red"})

      TweenMax.to(".left", 2, {
        delay: 0.8,
        width: "50%",
        ease: Power2.easeInOut,
      });

      TweenMax.to(".right", 2, {
        delay: 0.6,
        width: "50%",
        ease: Power3.easeInOut,
      });

      TweenMax.from(".nav", 2, {
        delay: 0.8,
        opacity: 0,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".text h1", 2, {
        delay: 0.6,
        x: 1000,
        ease: Circ.easeInOut,
      });

      TweenMax.from(".text p", 2, {
        delay: 0.7,
        x: 1000,
        ease: Circ.easeInOut,
      });

      TweenMax.to(".karina", 2, {
        delay: 1.5,
        width: "800px",
        ease: Power2.easeInOut,
      });

      TweenMax.staggerFrom(
        ".bottomnav ul li",
        2,
        {
          delay: 1,
          x: 1000,
          ease: Circ.easeInOut,
        },
        0.08
      );

      TweenMax.from(".info", 2, {
        delay: 1.5,
        y: 100,
        ease: Circ.easeInOut,
      });

      TweenMax.from(".name", 2, {
        delay: 1.5,
        x: -600,
        ease: Circ.easeInOut,
      });
    },
  },
};
</script>

<style>
.blog {
  overflow: auto;
  height: 100vh;
  width: 100%;
}
.div-spin {
  position: relative;
  display: inline-block;
  margin-left: 150px !important;
}
</style>
<style lang="less">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>
