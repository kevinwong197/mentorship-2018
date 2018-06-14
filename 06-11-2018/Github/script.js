Vue.component('github-card', {
  props: ['card'],
  template: `
<a :href="card.html_url">
  <div class="card">
    <img class="avatar" :src="card.avatar_url" />
    <div class="name">name: {{card.login}}</div>
    <div class="followers">followers: {{card.followers}}</div>
    <div class="following">follwing: {{card.following}}</div>
  </div>
</a>
`
});

const app = new Vue({
  el: '#app',
  data: {
    username: '',
    error: false,
    errormsg: '',
    cardlist: []
  },
  methods: {
    search() {
      if (this.username.length > 0) {
        const apiUrl = 'https://api.github.com/users/' + this.username;
        axios.get(apiUrl).then(response => {
          this.error = false;
          console.log(response.data);
          this.cardlist.unshift({
            login: response.data.login,
            avatar_url: response.data.avatar_url,
            followers: response.data.followers,
            following: response.data.following,
            html_url: response.data.html_url
          });
        }, err => {
          this.error = true;
          this.errormsg = err.response.statusText;
        });
      } else {
        this.error = true;
        this.errormsg = 'Input Field Cannot Be Empty';
      }
    }
  }
});


