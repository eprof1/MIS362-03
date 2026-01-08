// these are constants for the home pages to update the Creative Commons license in the footer

// Creative Commons License footer
var ccLicense = '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span >eProfessor Immersive Learning Environment</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://eprofessor.azurewebsites.net" property="cc:attributionName" rel="cc:attributionURL">Patrick G Paulson</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.';

function setVariables() {

    document.getElementById("xLicense").innerHTML = ccLicense;
    document.getElementById("xfooter").innerHTML = Date();
}