product();

function product() {

    $(".products").click(function () {

        let id = this;
        id = $(id).attr('id');
        localStorage.setItem("Id", id);
        window.location.href="cursos-eng.html";

    });

}(jQuery);