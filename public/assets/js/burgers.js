
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");

    var newEatenState = {
      eaten: 1
    };

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newEatenState
    }).then(
      function(res) {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newburger = {
      burger_name: $("#burger").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
