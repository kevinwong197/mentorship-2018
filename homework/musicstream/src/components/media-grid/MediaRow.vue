<template>
  <div class="row">
    <Media v-for="video in videos"
      :url="video.url"
      :thumb="video.thumb"
      :title="video.title" />
  </div>
</template>

<script>
import Media from '@/components/media-grid/Media.vue';

export default {
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  components: {
    Media
  }
};


</script>
