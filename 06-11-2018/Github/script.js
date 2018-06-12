const app = new Vue({
    el: '#app',
    data: {
        username: '',
        login: null,
        error: false,
        errormsg: ''
    },
    methods: {
        search() {
            app.login = null;
            if (this.username.length > 0) {
                const apiUrl = 'https://api.github.com/users/' + this.username;
                axios.get(apiUrl).then(function(response) {
                    app.error = false;
                    app.login = response.data.login;
                }, function(err) {
                    app.error = true;
                    app.errormsg = err.response.statusText;
                    console.log(err.statusText);
                });
            } else {
                app.error = true;
                app.errormsg = 'Input Field Cannot Be Empty';
            }
        },
    }
});

