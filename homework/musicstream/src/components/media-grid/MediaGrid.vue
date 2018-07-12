<template>
  <div class="container">
    <MediaRow v-for="vidRow in vidRows" :videos="vidRow"></MediaRow>
  </div>
</template>

<script>
import EventBus from '@/main';
import MediaRow from '@/components/media-grid/MediaRow.vue';
import vimeoService from '@/services/vimeo.service';
import parserService from '@/services/parser.service';

export default {
  data() {
    return {
      vidRows: [],
      colsz: 5
    }
  },
  mounted() {
    EventBus.$on('search', (query) => {
      this.clear();
      this.search(query);
    });
  },
  methods: {
    search(query) {
      vimeoService.searchVimeo(query).then((response) => {
        console.log(response);
        this.vidRows = this.toRows(parserService.fromVimeo(response));
      }, (err) => {
        console.log(err);
      });
    },
    toRows(arr) {
      return this.toSlices(arr, this.colsz, parserService.default());
    },
    toSlices(arr, sliceSize, defaultVal) {
      if (sliceSize <= 0) {
        throw "invalid slice size";
      }
      let narr = [];
      for (let head = 0; head < arr.length; head += sliceSize) {
        narr.push(Array(this.colsz).fill().map((x, col) => {
          return arr[head + col] || defaultVal;
        }));
      }
      console.log(narr);
      return narr;
    },
    clear() {
      this.vidRows = [];
    }
  },
  components: {
    MediaRow
  }
};


</script>
