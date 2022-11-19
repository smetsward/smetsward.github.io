/*function alpineInstance() {
  return {
    tickets: [],
  }
}*/

function alpineInstance() {
  return {
    tickets: [],
    init() {
      this.getTickets()
    },
    getTickets() {
        fetch ('https://userticket-api-service-smetsward.cloud.okteto.net/tickets/?skip=0&limit=100')
          .then(response => response.json())
          .then(data => this.tickets = data.tickets)
    }
  }
}