/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all'utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/











const { createApp } = Vue;

createApp ({
    data() {
        return {
            guestsList: [],
            guestName: ''
        }
    },

    methods: {
        getGuestsList() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                .then((response) => {
                    this.guestsList.push(response.data.response);
                })
            }
        },

        checkPresence(guestName) {
                if (this.guestsList.includes(this.guestName)) {
                    alert('Il suo nome è nella lista degli invitati, benvenuto!');
                } else {
                    alert('Spiacente il suo nome non risulta nella nostra lista la preghiamo di andare via');
                }
        }
    },

    created() {
        this.getGuestsList();
        console.log(this.guestsList);
    }
}).mount('#app');