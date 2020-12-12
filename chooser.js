document.getElementById('TutorPoint').innerHTML = `<div class="card" style="padding: 2%;">
<button class="btn btn-primary" id="tutor" onclick={loadScript("TutorForm.js",null)} >I work as tutor</button><br>
<button class="btn btn-primary" id="parent" onclick={loadScript("ParentForm.js",null)} > I am Looking for Tutor</button>
</div>`;
