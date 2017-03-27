function addRow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount-2);
  var colCount = table.rows[1].cells.length;
  
  for(var i=0; i<colCount; i++) {
    var newRow = row.insertCell(i);

    newRow.innerHTML = table.rows[1].cells[i].innerHTML;
    newRow.childNodes[0].value = "";
    if(i == colCount-1){
      newRow.childNodes[0].value = "x";
    }
  }
  


}
 
function deleteRow(row) {
  var table = document.getElementById("data");
  var rowCount = table.rows.length;
  if (rowCount > 4) {
    var rowIndex = row.parentNode.parentNode.rowIndex;
    document.getElementById("data").deleteRow(rowIndex);
  }
  else {
    alert("Please specify at least one value.");
  }
}