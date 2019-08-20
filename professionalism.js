var text = 'Some data I want to export';
var data = new Blob([text], {type: 'text/plain'});

var url = window.URL.createObjectURL(data);

document.getElementById('download_link').href = url;
var url = window.URL.createObjectURL(data);
window.URL.revokeObjectURL(url);
