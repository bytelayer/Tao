function saveToFile() {
  var html = $("html").clone();
  var htmlString = html.html();
  var dataUri = "data:text/html;charset=utf-8;base64," + $base64.encode(htmlString);
  $("#tools").append("<a href='" + datauri + "'>Save</a>");
  $("#a").text(htmlString)
}

function firstRow() {
  return "#a, #b, #c";
}

function firstCol() {
  return "#d, #g";
}
