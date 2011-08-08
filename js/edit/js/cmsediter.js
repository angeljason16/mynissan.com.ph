function submitOcms(linkUrl) {

	if(linkUrl!=null){
		//alert(window.location.href);
		//window.location=linkUrl+"&backLink="+window.location.href;
		//alert(linkUrl+"&backLink="+window.location.href);
		window.open(linkUrl+"&backLink="+window.location.href,'','width=600,height=600,left=200,top=180,resizable=1,scrollbars=yes,menubar=no,status=yes');
		//var _tempresult=openDialog(linkUrl+"&backLink="+window.location.href,900,900);  
        //window.parent.location.reload();
		

	}
}

function activateOcms(id) {
	var el = document.getElementById(id);
	if (el.className == "ocms_de_norm") {
		el.className = "ocms_de_over"; 
	} 
}
function deactivateOcms(id) {
	var el = document.getElementById(id);
	if (el.className == "ocms_de_over") {
		el.className = "ocms_de_norm";
	} 
}
function createDiv(divId){
		//<div class="ocms_de_bt" id="buttons_ocms_74912" 
		//onmouseover="activateOcms('ocms_74912');" onmouseout="deactivateOcms('ocms_74912');">
	  //aaa
    //</div>
    //alert(divId);
		var objBody = document.getElementsByTagName("body").item(0); 
		var objOverlay = document.createElement("div");
		
		objOverlay.setAttribute('id',"buttons_"+divId);
		objOverlay.className = 'ocms_de_bt';
		//objOverlay.innerHTML="<input name='edit' type='button' value='edit'>";
		objOverlay.onmouseover = function() { activateOcms(divId); return false; };//('"+divId+"')";
		objOverlay.onmouseout = function() { deactivateOcms(divId); return false; };//('"+divId+"')";
		objOverlay.onclick = function() { submitOcms($(divId).getAttribute('editer')); return false; };//('"+divId+"')";
		objBody.appendChild(objOverlay);	
		//alert($(divId).getAttribute('editer'))
}

function showButtonsOcms() {	

}
function findPosXOcms(obj) {
    var curleft = 0; 
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curleft += obj.offsetLeft - obj.scrollLeft; 
            obj = obj.offsetParent; 
        } 
    } else if (obj.x) {
        curleft += obj.x; 
    }
    return curleft; 
}
function findPosYOcms(obj) {
    var curtop = 0; 
    if (obj.offsetParent) {
        while (obj.offsetParent) { 
            curtop += obj.offsetTop - obj.scrollTop; 
            obj = obj.offsetParent; 
        }
    } else if (obj.y) {
        curtop += obj.y;
    }
    return curtop;
}

function showButtonsOcmsManyVehicle() {
}	
