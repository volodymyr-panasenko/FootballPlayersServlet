$(document).ready(function () {

    var error = "All fields are required";

//---------------Search player---------------

    $("#search").click(function () {
        var country = $("#country").val();
        window.location = "/players?option=getByCountry&country=" + country;
    });

//---------------Delete player---------------

    var id;
    $("a.delete").click(function () {
        id = $(this).attr("id");
    });

    $("#deletion").submit(function (event) {
        event.preventDefault();
        $.ajax({
            data: {"id": id},
            type: "POST",
            url: "/players?option=delete",
            success: function () {
                $("#confirm").modal('hide');
                $('#' + id).parent().parent().hide();
            }
        });
    });

//---------------Add player---------------

    $("#addition").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var country = $("#country").val();
        var age = $("#age").val();
        var cost = $("#cost").val();
        var position = $("#position").val();
        var player = {"name": name, "country": country, "age": age,
            "cost": cost, "position": position};

        $.ajax({
            data: player,
            type: "POST",
            url: "/players?option=add",
            success: function () {
                window.location = "/players?option=getAll"
            },
            error: function () {
                $("#error").text(error);
                $("#error").css("color", "red");
            }
        });
    });

//---------------Edit player---------------

    $("a.edit").click(function () {
        var id = $(this).attr("id");
        window.location = "/players?option=showEditingPage&id=" + id;
    });

    $("#editing").submit(function (event) {
        event.preventDefault();
        var id = $("#id").val();
        var name = $("#name").val();
        var country = $("#country").val();
        var age = $("#age").val();
        var cost = $("#cost").val();
        var position = $("#position").val();
        var player = {"id": id, "name": name, "country": country,
            "age": age, "cost": cost, "position": position};

        $.ajax({
            data: player,
            type: "POST",
            url: "/players?option=edit",
            success: function () {
                window.location = "/players?option=getAll"
            },
            error: function () {
                $("#error").text(error);
                $("#error").css("color", "red");
            }
        });
    });

});
