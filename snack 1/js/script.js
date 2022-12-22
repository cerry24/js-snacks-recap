/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/











const { createApp } = Vue;

createApp ({
    data() {
        return {
            evenNumbers: [],
            oddNumbers: []
        }
    },

    methods: {
        getANumber() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                const number = response.data.response;
                if (number % 2 === 0) {
                    this.evenNumber.push(number)
                } else {
                    this.oddNumber.push(number)
                }
            })
        }
    }
}).mount('#app');