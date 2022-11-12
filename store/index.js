document.addEventListener('alpine:init', async () => {
    Alpine.store('usersStore',
        {
            users: [],
            user: {
                id: () => Math.random().toString(36).substr(2, 9),
                email: '',
            },
            async addUser() {
                await fetch('https://useritem-api-service-smetsward.cloud.okteto.net/users/', {
                    method: 'POST',
                    body: JSON.stringify(this.user),
                })
                    .then((response) => response.json())
                    .then(() => {
                        this.users.push(this.user);
                    }
                    );
            },
        });
})