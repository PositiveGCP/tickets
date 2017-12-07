var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];

        }
    }
};

$(document).ready(function(){
  console.log('hola, estoy aquí');
    var puid = getUrlParameter('puid'),
        name = getUrlParameter('name');
        console.log(puid,name);
  if ( puid  === undefined &&  name === undefined ) {
    location.href="http://www.google.com";
  }else{

  $('.puid').text(puid);
  $('.name_get').text(name);
  print();
}
});

