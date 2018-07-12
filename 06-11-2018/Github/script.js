Vue.component('github-card', {
  props: ['card'],
  template: `
<a :href="card.html_url">
  <div class="card">
    <img class="avatar" :src="card.avatar_url" />
    <div class="name">{{card.login}}</div>
    <div class="followers">followers: {{card.followers}}</div>
    <div class="following">following: {{card.following}}</div>
  </div>
</a>
`
});

const app = new Vue({
    el: '#app',
    data: {
        username: '',
        login: null,
    },
    methods: {
        search() {
            if (this.username.length > 0) {
                const apiUrl = 'https://api.github.com/users/' + this.username;
                axios.get(apiUrl).then(function(response) {
                    this.login = response.data.login;
                }, (err) => {
                    console.log(err);
                });
            }
            else {
                // show validation
            }
        },
    }
  }
});


