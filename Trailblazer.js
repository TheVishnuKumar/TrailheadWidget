(function () {
var tblzrid = document.getElementById("trailblazerWidget").getAttribute("trailblazerid");

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://forceleaderboard-developer-edition.na50.force.com/services/apexrest/trailblazer?id='+tblzrid, false ); // false for synchronous request
xmlHttp.send( );
var obj = JSON.parse(xmlHttp.responseText);
  
var widgetDiv = '<div class="profilePanel"> <div> <img src="'+obj.Profile_Image+'" class="avatar" style="height: 50px;border-radius: 50%;"/> </div> <div> <a href="'+obj.Trailhead_URL+'" target="_Blank" style="text-transform: capitalize;">'+obj.Name+'</a> <br/> <div class="slds-truncate" title="'+obj.Title+'">'+obj.Title+'</div> <span class="badgeRank">'+obj.Rank+'</span> </div> <div style="margin-top: 5px;"> <table> <tr> <td style="text-align: center;">Badges</td> <td style="text-align: center;">Points</td>';

widgetDiv += '<td style="text-align: center;">Certification</td>';

widgetDiv += '</tr> <tr> <td style="text-align: center;font-size: 16px;"> <span >'+obj.Badges+'</span> </td> <td style="text-align: center;font-size: 16px;"> <span >'+obj.Points+'</span> </td> <td style="text-align: center;font-size: 16px;">';

if( obj.Certifications != '' && obj.Certifications != null && obj.Certifications != 0 ){
  widgetDiv += '<a href="'+obj.Certification_URL+'" target="_Blank">'+obj.Certifications+'</a>';
}
else{
  widgetDiv += '-';
}

widgetDiv += '</td></tr> </table> </div> <div class="logos" style="margin-top: 5px;"> <a class="logoLink" href="'+obj.Trailhead_URL+'" target="_Blank"> <img src="https://trailhead.salesforce.com/assets/trailhead-flogo-1c99be34ac805c0cb128c1bb5e0cf6570943530f86063bebb1cf576c93c30069.png" class="avatar"/> </a>';

if( obj.Certification_URL != '' && obj.Certification_URL != null ){
widgetDiv += '<a class="logoLink" href="'+obj.Certification_URL+'" target="_Blank"> <img src="http://www.runconsultants.com/wp-content/uploads/2014/04/cert_program_rgb-e1390842424619.png" class="avatar"/> </a>'; 
}
if( obj.Facebook != '' && obj.Facebook != null ){
widgetDiv += '<a class="logoLink" href="'+obj.Facebook+'" target="_Blank"> <img src="https://grytics.com/wp-content/uploads/2015/01/1414386628_facebook_circle_color-512.png" class="avatar"/> </a>';
}
if( obj.Linkedin != '' && obj.Linkedin != null ){
widgetDiv += '<a class="logoLink" href="'+obj.Linkedin+'" target="_Blank"> <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" class="avatar"/> </a>';
}
if( obj.Twitter != '' && obj.Twitter != null ){
widgetDiv += '<a class="logoLink" href="'+obj.Twitter+'" target="_Blank"> <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" class="avatar"/> </a> </div> </div>';
}

var iDiv = document.createElement('div');
iDiv.id = 'sfWidget';
iDiv.className = 'block';
document.getElementById('trailblazerWidget').appendChild(iDiv);

document.getElementById('sfWidget').innerHTML = widgetDiv;

var head = document.head;
var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = 'https://rawgit.com/vishnuvaishnav/TrailheadWidget/master/Trailblazer.css';
head.appendChild(link);
})();
