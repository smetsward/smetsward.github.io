document.addEventListener('alpine:init', () => {
    Alpine.directive('test',
        {
            responsedata: null,
            email: null,
            password: null,
            async callmethod1() {
                this.responsedata = await (await fetch('https://useritem-api-service-smetsward.cloud.okteto.net/users/',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            email: this.email,
                            password: this.password
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })).json();

                console.log(this.responsedata);
            },
        })
})