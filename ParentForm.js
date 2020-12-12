//need to fill palceholder email on auth state, remove some required

document.getElementById('TutorPoint').innerHTML = `    <div class="card" style="padding: 2%;">
<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
            else.</small>
    </div>
 
    <div class="form-group">
        <label for="exampleInputName">display Name</label>
        <input required type="text" class="form-control" id="exampleInputName">
    </div>
    <div class="form-group">
        <label for="exampleInputAge">Student Age</label>
        <input required type="number" class="form-control" id="exampleInputAge">
    </div>
    <div class="form-group">
        <label for="exampleInputNumber">Number</label>
        <input type="tel" class="form-control" id="exampleInputNumber">
    </div>
    <!-- location -->
    <div class="form-group">
        <button class="btn btn-warning" onclick="getLocation()" id="location">Provide Location</button>
        <small id="locationS" class="form-text text-muted">Need to GeoLocation to find nearby tutors</small>
    </div>
    <div class="form-group">
        <label for="exampleInputStandard">Standard</label>
        <input required type="number" class="form-control" id="exampleInputStandard">
    </div>
    <div class="form-group form-check">
        <input required type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" id="s">Submit</button>
</form>
</div>`;

var lat;
var long;
var x = document.getElementById('locationS');
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    lat=position.coords.latitude;
    long=position.coords.longitude;
}

document.getElementById('s').addEventListener('click', e => {
    console.log("sedj");
    var db = firebase.firestore();
    // Add a second document with a generated ID.
    db.collection("Parents").add({
        Age: "Alan",
        Email: "Mathison",
        Experience: "Turing",
        Name:"uday kumar" ,
        DisplayName:"uday",
        MobileNumber:"390485",
        Qualification:"B.Tech",
        HomeLocation:new firebase.firestore.GeoPoint(lat,long)
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

})
