const showAlertSpot = () => {
    Swal.fire({
        title: 'Aviso!',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder: 'Notificar por WhatsApp',
        text: 'Ao fazer isso, o contador será inicializado, deseja continuar?',
        icon: 'warning',
        confirmButtonText: 'Sim',
        confirmButtonColor: '#71EFA3',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#D54C4C'
    });
    $(".swal2-popup").css("font-family", "Open Sans");

    getOptionSweetAlertSpot();
}

const getOptionSweetAlertSpot = () => {
    document.querySelector(".swal2-confirm").addEventListener("click", () => {
        console.log("success");
    });

    document.querySelector(".swal2-cancel").addEventListener("click", () => {
        console.log("cancel");
    });
}