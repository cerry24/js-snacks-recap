/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
differenziando i messaggi utente da quelli del computer. */










const { createApp } = Vue;

createApp ({
    data() {
        return {
            messages: [],
            newMessage: ''
        }
    },

    methods: {
        getReply() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) => {
                const aiMessage = response.data.response;
                this.messages.push({text: aiMessage, status: 'received'});
            })
        },
        sendNewMessage(newMessage) {
            this.messages.push({text: newMessage, status:'sent'});
            this.newMessage = '';
            setTimeout(() => {
                this.getReply()
            }, 1000);
        }
    }
}).mount('#app');