/** Chiedere all'utente quanti elementi vuole includere nell'array.
Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati. */










const { createApp } = Vue;

createApp ({
    data() {
        return {
            numbers: null,
            userElementTot: null,
            sum: 0
        }
    },

    methods: {
        getNumbersSum() {
                axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userElementTot} `)
                .then((response) => {
                    this.numbers = response.data.response
    
                    this.numbers.forEach(number => {
                        this.sum += number;
                    });
                })
        }
    }
}).mount('#app');