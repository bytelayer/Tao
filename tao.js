
  $("#tools").draggable({cursor: "all-scroll"});

  $("#tools-header").click(function() {
    $("#container").append("<div class='header' style='width: 100%; height: 100px; background: red'>Hello, world!</div>");
  });

  $("#tools-header").click(function() {
    if ($("#edit-preview").text() == "Preview") {
      $("#edit-preview").html("Edit");
      $("#tools").hide();
    }
    else {
      $("#edit-preview").html("Preview");
      $("#tools").show();
    }
  });
