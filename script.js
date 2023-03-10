
const cardTab = document.getElementsByClassName("card");
const face2Tab = document.getElementsByClassName("face2");

for (var i = 0; i < face2Tab.length; i++) {
    face2Tab[i].onfocus = cardTab[i].classList.add("cardFocus");
};


const submission = document.forms['contact'];
if (!localStorage.formValues) localStorage.formValues = "[]";
var formValues = JSON.parse(localStorage.formValues);


submission.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks, we'll be in touch soon!")
    let firstName = submission["fname"].value;
    let lastName = submission["lname"].value;
    let email = submission["email"].value;
    let message = submission["message"].value;
    let date = new Date().toDateString();

    formValues.push({
        submissionDate: date,
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    });
// Write to localStorage
    localStorage.formValues = JSON.stringify(formValues); 
    document.forms[0].reset(); 
})


