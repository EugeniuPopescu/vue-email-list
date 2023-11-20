const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            userMails: [],
        }
    },
    methods: {
        generateMails() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
    
                    if (response.data.success) {
                        this.userMails.push(response.data.response);
                    }

                    console.log(response.data.response);
                });
    
            }
        }
    },
    mounted() {
        // axios recupera GET request THEN esgui funzione
        // chiama l'indirzzo, in base alla risposta esgui la funzione e fa cose
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
            // response.data = dati ottenuti in risposta dal server
            // response.status = codice HTTP di risposta (1xx-2xx-3xx-4xx-5xx)
            // response.statusText = codice HTTP di risposta (es. OK)
            console.log(response.data);

            // se la risposta è ok
            if (response.data.success) {
                this.userName = response.data.response;
            }
        });
    }
};

createApp(opzioni).mount('#app')
