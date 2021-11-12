<template>
  <div>
    <a-card
      @click="setModal1Visible(true)"
      class="custom-card"
      hoverable
      style="width: 300px; border-top-right-radius: 25px"
    >
      <template #cover>
        <!-- <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      /> -->
      </template>
      <!-- <template #actions class="ant-card-actions">
      <LikeOutlined key="like" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template> -->
      <a-card-meta
        v-bind:title="[item.title]"
        v-bind:description="[item.content]"
      >
        <template #avatar>
          <a-avatar
            src="https://i.ytimg.com/vi/TpFIDie-c8A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9XLwiZi3uQyxF0_cXS20ZbnAb5A"
          />
        </template>
      </a-card-meta>
    </a-card>
    <!-- <a-button style="margintop: 16px" @click="handleClick">
      Toggle loading
    </a-button> -->
    <div id="components-modal-demo-position">
      <a-modal
        v-model:visible="modal1Visible"
        @ok="setModal1Visible(false)"
      >
        <a-card
      class="custom-card"
      hoverable
      style="width: 100%; border-top-right-radius: 25px"
    >
      <template #cover>
        <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
      </template>
      <template #actions class="ant-card-actions">
      <LikeOutlined key="like" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
      <a-card-meta
        v-bind:title="[item.title]"
        v-bind:description="[item.content,item.content,item.content,item.content]"
      >
        <template #avatar>
          <a-avatar
            src="https://i.ytimg.com/vi/TpFIDie-c8A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9XLwiZi3uQyxF0_cXS20ZbnAb5A"
          />
        </template>
      </a-card-meta>
    </a-card>
      </a-modal>
      <br />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { LikeOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
// import { defineComponent } from 'vue';
export default {
  components: {
    LikeOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
  props: {
    url: String,
    item: Object,
  },
  data() {
    return {
      loading: true,
    };
  },
  setup() {
    const modal1Visible = ref(false);
    const modal2Visible = ref(false);

    const setModal1Visible = (visible) => {
      modal1Visible.value = visible;
    };

    return {
      modal1Visible,
      modal2Visible,
      setModal1Visible,
    };
  },
  mounted() {},
  methods: {
    handleClick() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style>
.custom-card {
  width: 30%;
  /* height: 40px; */
}
/* .custom-card:hover{
  width: 50%;
} */
</style>
