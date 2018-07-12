<template>
  <div class="container remove-all-margin">
    <div v-if="gotResults()">
      <MediaRow v-for="(vidRow, key) in vidRows"
        :key="key"
        :videos="vidRow" />
    </div>
    <div v-else-if="noResults()">
      No results found
    </div>
    <div v-else-if="loading()">
      Loading...
    </div>
    <div v-else>
      Videos go here
    </div>
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
      colsz: 5,
      finished: false,
      started: false
    }
  },
  mounted() {
    EventBus.$on('search', (query) => {
      this.started = true;
      this.finished = false;
      this.clear();
      this.search(query);
    });
  },
  methods: {
    search(query) {
      vimeoService.searchVimeo(query).then((response) => {
        console.log(response);
        this.vidRows = this.toRows(parserService.fromVimeo(response));
        this.finished = true;
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
    },
    loading() {
      return this.started && !this.finished;
    },
    noResults() {
      return this.started && this.finished && this.vidRows.length <= 0;
    },
    gotResults() {
      return this.started && this.finished && this.vidRows.length > 0;
    }
  },
  components: {
    MediaRow
  }
};


</script>