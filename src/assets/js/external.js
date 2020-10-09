function GetComputerName() {
  // var Texto = "probando";
  // $("#dvContainer").html(Texto);
  // // alert("Hola he llegado a la funcion");
  // const network = new ActiveXObject('WScript.Network');
  // console.log(network.computerName);
  //  alert('Probando');
  //   // return network.computerName;


netscape.security.PrivilegeManager.enablePrivilege( 'UniversalXPConnect' );

var dnsComp = Components.classes["@mozilla.org/network/dns-service;1"];
var dnsSvc = dnsComp.getService(Components.interfaces.nsIDNSService);
var compName = dnsSvc.myHostName;

var myExtension = {
  myListener: function(evt) {

//netscape.security.PrivilegeManager.enablePrivilege( 'UniversalXPConnect' );
var dnsComp = Components.classes["@mozilla.org/network/dns-service;1"];
var dnsSvc = dnsComp.getService(Components.interfaces.nsIDNSService);
var compName = dnsSvc.myHostName;
content.document.getElementById("compname").value = compName ;
  }
}
document.addEventListener("MyExtensionEvent", function(e) { myExtension.myListener(e); }, false, true); //this event will raised from the webpage
}
