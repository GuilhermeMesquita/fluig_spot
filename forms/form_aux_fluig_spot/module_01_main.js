document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log('document.readyState === "complete"');
        processo().init();
    }
}


const processo = () => {

    const processo = {

        /**---------------------------------------------------------------------------------------------------------------------------------*/
        currentActivity: getWKNumState(),/**Atividade atual.*/
        currentUser: getWKUser(),/**Usuário logado (colleagueId).*/
        solicitationNumber: getWKNumProces(),/**Número da solicitação.*/
        formMode: getFormMode(),/** Modo do formulário - Se é ou não View.*/
        isMobile: getMobile(),/** Se é ou não Mobile.*/

        /**Obs: As funções das propriedades acima estão no DisplayFields. */
        /**---------------------------------------------------------------------------------------------------------------------------------*/


        /** Funções executadas com o carregamento da página. */
        init: function () {

            console.log("init");

            if (this.isMobile == "false" || this.isMobile == "true") {/** ---------------------------- Se for Desktop ou Mobile */
                if (this.formMode != "VIEW") {/**Se não for View. */
                    console.log("init - Desktop - Modo de Edição");
                    this.events();
                    this.initAndEventsPaiFilho();

                } else {/**Se for View. */

                    console.log("init - Desktop - View");

                }
            }
        },
        /** Aqui ficam todos os eventos do formulário, exceto
         *  eventos de tabelas pai X filho ao adicionar uma linha nova.*/
        events: function () {
            console.log("events");
            document.querySelector("#n_hours").addEventListener('input', function () {
                maskOnlyNumbers(this);
            });
            let that = this;
        },
        eventsView: function () {
            console.log("eventsView");

            let that = this;
        },
        initAndEventsPaiFilho: function () {
            console.log("initAndEventsPaiFilho");
        },
        initAndEventsPaiFilhoView: function () {

            console.log("initAndEventsPaiFilhoView");
        }

    }

    return processo;
}