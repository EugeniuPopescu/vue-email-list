const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
        userMails: [],
        };
    },
    methods: {
        generateMails() {
        this.userMails = [];

        for (let i = 0; i < 10; i++) {
            
			axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
			.then((response) => {
                
				if (this.userMails.length < 10) {
                    this.userMails.push(response.data.response);
                }

                console.log(response.data.response);
            });
        }
        },
    },
};

createApp(opzioni).mount("#app");
