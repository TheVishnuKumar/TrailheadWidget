var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://forceleaderboard-developer-edition.na50.force.com/services/apexrest/trailblazer?id=atjat3j8zoSKbMseEH', true ); // false for synchronous request
xmlHttp.send( );
console.log( xmlHttp.responseText );

var iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';
document.getElementsByTagName('body')[0].appendChild(iDiv);

document.getElementById('block').innerHTML = xmlHttp.responseText;
