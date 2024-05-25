/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
    var $window = $(window),
        $body = $("body");

    // Breakpoints.
    breakpoints({
        wide: ["1281px", "1680px"],
        normal: ["981px", "1280px"],
        narrow: ["841px", "980px"],
        narrower: ["737px", "840px"],
        mobile: ["481px", "736px"],
        mobilep: [null, "480px"],
    });

    // Play initial animations on page load.
    $window.on("load", function () {
        window.setTimeout(function () {
            $body.removeClass("is-preload");
        }, 100);
    });
})(jQuery);

const success = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Agradecemos seu contato!",
        showConfirmButton: false,
        timer: 1500,
    });
};

function checkForm() {
    const form = document.getElementById("formContato");

    if (form.reportValidity()) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Obrigado pela confiança!",
            showConfirmButton: false,
            timer: 2000,
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Preencha todos os campos obrigatórios!",
        });
    }
}
