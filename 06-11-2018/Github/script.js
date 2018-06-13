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
                    this.cardlist.unshift(response.data.login);
                }, err => {
                    this.error = true;
                    this.errormsg = err.response.statusText;
                });
            } else {
                this.error = true;
                this.errormsg = 'Input Field Cannot Be Empty';
            }
        },
    }
});

