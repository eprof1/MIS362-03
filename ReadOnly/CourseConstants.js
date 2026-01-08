// CourseConstants.js
// Course-wide constants + DOM population helper for assignment pages.
// IMPORTANT RULE: xFirstName, xLastName, xStarID MUST come only from constants.js / studentConstants.js bridge
// (Do not initialize those anywhere else.)

// Student-editable (course-specific) values:
var xSection = "90";

// Course-wide values:
var xSemester = "Spring2026";
var xClass = "MIS362";

// Creative Commons License footer
var ccLicense =
  '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">' +
  '<img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />' +
  '</a><br />' +
  '<span>eProfessor Immersive Learning Environment</span> by ' +
  '<a xmlns:cc="http://creativecommons.org/ns#" href="https://eprofessor.azurewebsites.net" ' +
  'property="cc:attributionName" rel="cc:attributionURL">Patrick G Paulson</a> ' +
  'is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">' +
  'Creative Commons Attribution 4.0 International License</a>.';

function setVariables() {
  // ---- helpers (avoid crashes if an element doesn't exist on a page) ----
  function byId(id) {
    return document.getElementById(id);
  }

  function setValue(id, value) {
    var el = byId(id);
    if (el) el.value = (value ?? "");
  }

  function setHtml(id, html) {
    var el = byId(id);
    if (el) el.innerHTML = (html ?? "");
  }

  // ---- student identity: MUST come from studentConstants.js bridge or constants.js ----
  var hasStudentVars =
    (typeof xFirstName !== "undefined") &&
    (typeof xLastName !== "undefined") &&
    (typeof xStarID !== "undefined");

  // ---- course fields (always) ----
  setValue("semester", xSemester);
  setValue("class", xClass);
  setValue("section", xSection);

  // ---- student fields + derived email ----
  if (hasStudentVars) {
    setValue("FirstName", xFirstName);
    setValue("LastName", xLastName);
    setValue("pin", xStarID);

    // Primary email rule
    var email = String(xStarID).trim() + "@go.minnstate.edu";
    setValue("email", email);
  }

  // ---- Heading (HomePage + any assignment that has id="Heading") ----
  // Only renders if #Heading exists.
  var namePart = hasStudentVars
    ? (String(xFirstName).trim() + " " + String(xLastName).trim())
    : "";

  var headingText =
    (namePart ? (namePart + " ") : "") +
    xClass + "-" + xSection + " " + xSemester + "<br/>Home Page";

  setHtml(
    "Heading",
    '<div class="text-center"><h1 class="display-4 text-primary">' +
      headingText +
    "</h1></div>"
  );

  // ---- footer: support BOTH id styles (assignments vs HomePage) ----
  var nowText = new Date().toString();
  setHtml("xLicense", ccLicense);
  setHtml("licenseInfo", ccLicense);
  setHtml("xfooter", nowText);
  setHtml("footerText", nowText);

  // ---- path display (support BOTH ids used across assignments) ----
  var assignmentEl = byId("assignment");
  var assignmentName = assignmentEl ? assignmentEl.value : "";
  if (assignmentName) {
    var pathText = "\\OneDrive - MNSCU\\" + xClass + "\\" + assignmentName + "\\";
    setHtml("ePath", pathText);
    setHtml("xpath", pathText);
  }

  // --- Bridge fields for server-side scripts (no HTML edits needed) ---
  (function ensurePostFields() {
    var form = byId("frmAssignment");
    if (!form) return;

    function ensureHidden(name, value) {
      // If it already exists, just set it
      if (form.elements[name]) {
        form.elements[name].value = (value ?? "");
        return;
      }
      // Otherwise create it
      var inp = document.createElement("input");
      inp.type = "hidden";
      inp.name = name;
      inp.value = (value ?? "");
      form.appendChild(inp);
    }

    // Ensure StarID reaches the server (assignments usually only post "pin")
    if (typeof xStarID !== "undefined") {
      ensureHidden("StarID", xStarID); // DB column StarID
    }

    // Ensure Email is available in common casing (optional but safe)
    if (typeof xStarID !== "undefined") {
      var emailVal = String(xStarID).trim() + "@go.minnstate.edu";
      ensureHidden("Email", emailVal); // some legacy scripts may use Email
    }

    // Repair missing name= on q1..q30 if an element exists by id
    for (var i = 1; i <= 30; i++) {
      var el = byId("q" + i);
      if (el && !el.name) el.name = "q" + i;
    }
  })();
}
