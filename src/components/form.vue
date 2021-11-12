<template>
  <a-form :model="formState">
    <a-form-item style="width: 100%" label="My title">
      <a-input v-model:value="formState.title" />
    </a-form-item>

    <a-form-item style="width: 100%" label="Content">
      <a-textarea v-model:value="formState.content" />
    </a-form-item>
    <a-form-item style="width: 50%">
      <div v-if="loading">
        <a-spin :indicator="indicator" />
      </div>
      <div v-else>
        <a-button type="primary" @click="onSubmit">Create</a-button>

        <!-- <a-button style="margin-left: 10px">Cancel</a-button> -->
      </div>
    </a-form-item>
  </a-form>
</template>
<script>
import { LoadingOutlined } from "@ant-design/icons-vue";
import { mapActions } from "vuex";
import { defineComponent, reactive, h } from "vue";
export default defineComponent({
  data() {
    return {
      loading: false,
    };
  },
  setup() {
    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: "24px",
      },
      spin: true,
    });
    const formState = reactive({
      title: "",
      content: "",
    });

    return {
      indicator,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      formState,
    };
  },
  methods: {
    ...mapActions(["CreatePost"]),
    async onSubmit() {
      this.loading = true;
      //   console.log("submit!", toRaw(formState));
      await this.CreatePost(this.formState);
      this.loading = false;
      Object.keys(this.data.formState).forEach(function(key) {
          self.data.form[key] = '';
        });
      this.$router.push("/blog");
    },
  },
});
</script>
