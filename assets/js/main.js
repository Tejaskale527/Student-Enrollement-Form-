function getFormData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var image = document.getElementById('image').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skill = document.querySelectorAll('input[name="skills"]');;
    var skills = [];
    for (let Elements of skill) {
        if (Element.checked) {
            skills.push(Element.value);
        }
    }

    renderData(name, email, website, image, gender, skills) //call to function
    document.getElementById("enrollStudForm").reset();  // reset the form
   
}

function renderData(name, email, website, image, gender, skills) {


    var appendStr = `
<div class="wrapper"><div class="textInfoContainer"><p class="infoText userName">${name}</p><p class="infoText gender">${gender}</p>
<p class="infoText email">${email}</p><a class="infoText website linkTag" href="${website}"
target="_blank">${website}</a>
<p class="infoText skills">${skills}</p>
</div>
<div class="imageContainer"><a
href="${image}"
target="_blank"><img width="50" class="userImage"
    src="${image}"></a>
</div>
</div>
`;

    document.getElementById('enrolled-students').innerHTML += appendStr;
  

}

function clearData() {
    var appendStr = ` <div class="enroll-heading">
    <h2>Enrolled Students</h2>
</div>

<div class="sectionHeading">
    <p class="description">Description</p>
    <p class="Image">Image</p>
</div>`;
    document.getElementById('enrolled-students').innerHTML = appendStr;


}