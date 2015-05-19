// Create result object, where everything will get saved
var result = '';

// Grab the headers
$.each($('#listviewHeaderRow').children(), function(i) {
    result += $($('#listviewHeaderRow').children()[i]).children().text().replace(/\n/g,'');
    result += ',';
});

result += '\n';

// Specify # of pages desired
var pageNumbers = prompt("How many pages do you want to fetch?");

for (var i=0; i < pageNumbers; i++) {
    // Add the rows
    // First you'll loop through each row
    // Then you'll loop through each column in a row

    setTimeout(function () {
        $.each($('#lvTred').children(), function(i) {
          // inside each row
          $.each($($('#lvTred').children()[i]).children(), function(j) {
            // inside each column
            result += $($($('#lvTred').children()[i]).children()[j]).text().replace(/\n/g, '').replace(/,/g, ';');
            result += ',';
          });
          result += '\n';
        });
        document.getElementById("advancedsearchArrowN").click();
    }, i * 2000);
}

setTimeout(function () {
    saveFile();
}, (pageNumbers * 2000) + 2000);

// Load FileSaver.js to download the file
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||(navigator.msSaveBlob&&navigator.msSaveBlob.bind(navigator))||(function(h){"use strict";var r=h.document,l=function(){return h.URL||h.webkitURL||h},e=h.URL||h.webkitURL||h,n=r.createElementNS("http://www.w3.org/1999/xhtml","a"),g=!h.externalHost&&"download" in n,j=function(t){var s=r.createEvent("MouseEvents");s.initMouseEvent("click",true,false,h,0,0,0,0,0,false,false,false,false,0,null);t.dispatchEvent(s)},o=h.webkitRequestFileSystem,p=h.requestFileSystem||o||h.mozRequestFileSystem,m=function(s){(h.setImmediate||h.setTimeout)(function(){throw s},0)},c="application/octet-stream",k=0,b=[],i=function(){var t=b.length;while(t--){var s=b[t];if(typeof s==="string"){e.revokeObjectURL(s)}else{s.remove()}}b.length=0},q=function(t,s,w){s=[].concat(s);var v=s.length;while(v--){var x=t["on"+s[v]];if(typeof x==="function"){try{x.call(t,w||t)}catch(u){m(u)}}}},f=function(t,u){var v=this,B=t.type,E=false,x,w,s=function(){var F=l().createObjectURL(t);b.push(F);return F},A=function(){q(v,"writestart progress write writeend".split(" "))},D=function(){if(E||!x){x=s(t)}if(w){w.location.href=x}else{window.open(x,"_blank")}v.readyState=v.DONE;A()},z=function(F){return function(){if(v.readyState!==v.DONE){return F.apply(this,arguments)}}},y={create:true,exclusive:false},C;v.readyState=v.INIT;if(!u){u="download"}if(g){x=s(t);n.href=x;n.download=u;j(n);v.readyState=v.DONE;A();return}if(h.chrome&&B&&B!==c){C=t.slice||t.webkitSlice;t=C.call(t,0,t.size,c);E=true}if(o&&u!=="download"){u+=".download"}if(B===c||o){w=h}if(!p){D();return}k+=t.size;p(h.TEMPORARY,k,z(function(F){F.root.getDirectory("saved",y,z(function(G){var H=function(){G.getFile(u,y,z(function(I){I.createWriter(z(function(J){J.onwriteend=function(K){w.location.href=I.toURL();b.push(I);v.readyState=v.DONE;q(v,"writeend",K)};J.onerror=function(){var K=J.error;if(K.code!==K.ABORT_ERR){D()}};"writestart progress write abort".split(" ").forEach(function(K){J["on"+K]=v["on"+K]});J.write(t);v.abort=function(){J.abort();v.readyState=v.DONE};v.readyState=v.WRITING}),D)}),D)};G.getFile(u,{create:false},z(function(I){I.remove();H()}),z(function(I){if(I.code===I.NOT_FOUND_ERR){H()}else{D()}}))}),D)}),D)},d=f.prototype,a=function(s,t){return new f(s,t)};d.abort=function(){var s=this;s.readyState=s.DONE;q(s,"abort")};d.readyState=d.INIT=0;d.WRITING=1;d.DONE=2;d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null;h.addEventListener("unload",i,false);return a}(self));

function saveFile() {
    // Name the file and download it
    var blob = new Blob([result], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "zoho.csv");    
}


// Ohh yeah!
console.log('Be happy :)');
