<template>
  <a :href="url" class="col card">
    <div class="card-body">
      <img class="thumb" :src="thumb" />
      <div class="title">
        {{title}}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumb: {
      type: String,
      required: true
    }
  },
  methods: {
  },
};


</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
