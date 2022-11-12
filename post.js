fetch('https://useritem-api-service-smetsward.cloud.okteto.net/users/', {
    method: 'POST',
    headers: {
        'email': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": 78912 })
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))