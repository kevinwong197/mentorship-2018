<template>
  <div class="col preview">
    <img class="thumb" :src="thumb" />
    <div class="title">
      {{title}}
    </div>
  </div>
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
