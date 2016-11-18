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

function setGrid(el, startCol, endCol, startRow, endRow) {
  $(el).css("grid-column-start", "" + startCol);
  $(el).css("grid-column-end", "" + endCol);
  $(el).css("grid-row-start", "" + startRow);
  $(el).css("grid-row-end", "" + endRow);
}
