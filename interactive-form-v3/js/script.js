/**
 * 
 */

"use strict";

/**
 * When the page first loads, the first text field 
 * should have the focus state by default to prompt the user.
 * 
 * Set the focus property 
 * to true on the <input type="text"> element for the "Name" field.
 */

const userName = document.getElementById('name');
userName.focus();
//console.log(userName);

 /**
  * Hide the "text field" with the id of "other-job-role" 
  * so it is not displayed when the form first loads.
  */
let jobRole = document.getElementById('title');

let otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    if (e.target.value == 'other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }

});

/**
 * The "T-Shirt Info" section has conditional options. 
 * The "Design" or "Theme" menu has two options, and the "Color" menu has six. 
 * But only three of the colors are available for each of the "Design" options. 
 * To prevent users from selecting an invalid color for a particular theme, 
 * the "Color" menu should be disabled by default.
 *  Once a theme is selected, the "Color" menu should be enabled, 
 * and the color options need to be displayed/hidden based on which theme the user has selected.
 */

/***
 * When a user selects a shirt from the drop down menu, that shirt's image should be highlighted on the page
 * Follow the code and instructional comments below to complete this exercise
***/

const shirtDesignElement = document.getElementById('design');
const shirtDesignThemes = shirtDesignElement.children;
//console.log(shirtDesignElement);
const shirtColorElement = document.getElementById('color');
const shirtColorOptions = shirtColorElement.children;
//const shirtOptionElements = document.querySelector('#color option');
//console.log(shirtColorElement);



//shirtOptionElements[1].selected = true;
shirtColorElement.disabled = true;
//shirtDesignElement.disabled = true;

shirtDesignElement.addEventListener('change', (e) => {
    if (e.target.value === 'js puns' || e.target.value === 'heart js') {
        shirtColorElement.removeAttribute('disabled');
    } else {
        shirtColorElement.setAttribute('disabled');
    }

    for (let i = 0; i < shirtColorOptions.length; i++) {
        const targetValueOfImg = e.target.value;
        //console.log(targetValueOfImg);
        //console.log(shirtColorElement.children[i]);
        const dataThemeElement = shirtColorElement.children[i].getAttribute('data-theme');
        //console.log(dataThemeElement);
        if (dataThemeElement == targetValueOfImg) {
            shirtColorElement.children[i].hidden = false;
            shirtColorElement.children[i].setAttribute('selected') = true;
        } else {
            shirtColorElement.children[i].hidden = true;
            shirtColorElement.children[i].setAttribute('selected') = false;
            //console.log("The select element's change event listener is functional!");
    };
};
});



/**
 * The total cost of the selected activities in the 
 * "Register for Activities" section 
 * should be totaled and displayed for the user.
 */

let activitiesField = document.getElementById('activities');
let costOfActivities = document.getElementById('activities-cost');
let activitiesCostTotal = 0;
let activitiesUserInput = document.querySelectorAll('input[type=checkbox]');

activitiesField.addEventListener('change', (event) => {
    const costOfData = event.getAttribute('data-cost');
    if (event.target.checked === true) {
        activitiesCostTotal += costOfData;
    } else {
        activitiesCostTotal -= costOfData;
    }
    costOfActivities.innerHTML = `Total: ${activitiesCostTotal}`;
    const timeConflict = event.target.getAttribute('data-day-and-time');
    const selectedTimeConflict = event.target;
    for (let i = 0; i < activitiesUserInput.length; i++) {
        if (timeConflict === activitiesUserInput[i].getAttribute('data-day-and-time') 
        && selectedTimeConflict !== activitiesUserInput[i]) {
            activitiesUserInput[i].disabled = true;
            activitiesUserInput[i].parentElement.classList.remove('disabled');
        }
    }
});
/**
 * The preferred or most common payment method option should be selected 
 * and the corresponding payment form sections should be displayed by default, 
 * while the other payment form sections should be hidden.
 */
const preferredPayment = document.getElementById('payment');
const creditOrDebit = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
payPal.style.display = 'none';
bitCoin.style.display = 'none';
const creditOrDebitSelected = preferredPayment.children[1];
creditOrDebitSelected.setAttribute('selected', 'selected');

preferredPayment.addEventListener('change', (event) => {
    if (event.target.value === 'paypal') {
        payPal.style.display = 'block';
        bitCoin.style.display = 'block';
        creditOrDebit.style.display = 'none';
    } else if (event.target.value === 'bitcoin') {
        bitCoin.style.display = 'block';
        payPal.style.display = 'none';
        creditOrDebit.style.display = 'none';
    } else {
        payPal.style.display = 'none';
        bitCoin.style.display = 'none';
        creditOrDebit.style.display = 'block';
    }
});

for (let i = 0; i < activitiesUserInput.length; i++) {
    activitiesUserInput[i].addEventListener('focus', (event) => {
        activitiesUserInput[i].parentElement.classList.add('focus');
    });
    activitiesUserInput[i].addEventListener('blur', (event) => {
        activitiesUserInput[i].parentElement.classList.remove('focus');
    });
}
/**
* Form submission should be prevented if one or more of the required fields or sections is not filled out correctly. 
* This requires programming the form to listen for the submission event, 
* and then to test the value or condition of the required form fields or sections when submission is detected, 
* and finally allow/prevent submission based on the results of those tests.
* Programming the "Form Validation" section requires working with the following elements:


/* Variable to store form inputs - You'll use these in the functions below' */
const form = document.querySelector("form");
const nameElement = document.querySelector("#name");
const email = document.querySelector("#email");
// const languagesBox = document.querySelector('#languages-box');
// const languageTotalElement = document.querySelector('#language-total');
// let languageTotal = 0;

// // Don't touch ↓↓↓ - Helper function for updating the total number of languages selected
// document.querySelector('#languages').addEventListener('change', e => {
//     (e.target.checked) ? languageTotal++ : languageTotal--;
//     languageTotalElement.innerHTML = `Total: ${languageTotal}`;
// });

function validationPass(element) {
    element.parentElement = document.getElementById('valid');
    element.parentElement.remove = 'not-valid';
    element.lastElementChild.parentElement = 'none';
}

function validationFail(element) {
    element.parentElement.className = 'not valid';
    element.parentElement.className.remove = 'valid';
    element.lastElementChild.parentElement.style.display = 'block';
}

/* Helper function to validate name input */
const nameValidator = () => {

// Tests that there is at least a first name containing only letters, and allows for a middle and last name.
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameElement.value);

    if (nameIsValid == true) {
        validationPass(nameElement);
    } else {
        validationFail(nameElement);
    }
                
    return nameIsValid;
}


/* Helper function to validate email input */
const emailValidator = () => {

                    
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);

    if (emailIsValid == true) {
        validationPass(email);
    } else {
        validationFail(email);
    }

    return emailIsValid;
}

const languageValidator = () => {
    const languageSectionIsValid = languageTotal > 0;

    if (languageSectionIsValid == true) {
        validationPass(languagesBox);
    } else {
        validationFail(languagesBox);
    }

    languageSectionIsValid = languageTotal > 0;

    return languageSectionIsValid;
}

const ccNum = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');


/* Add real-time validation */
// To add real time validation, use the .addEventListener() method on the form elements/sections
// Use events like `keyup` and `change`
// As the callback, use the validation functions above, but remember, 
// Don't use parens when passing a reference to a function as a callback
// Something like: `nameElement.addEventListener('keyup', nameValidator);`
nameElement.addEventListener('keyup', nameValidator);

/* Submit listener on the form element */
form.addEventListener('submit', (e) => {

    e.preventDefault();


    if (!nameValidator()) {
        console.log('Invalid name prevented submission');
        e.preventDefault();
    }

    if (!emailValidator()) {
        console.log('Invalid email prevented submission');
        e.preventDefault();
    }

    if (!languageValidator()) {
        console.log('Invalid language total prevented submission');
        e.preventDefault();
    }

    // Submit handler test log - Feel free to delete this or comment it out
    console.log('Submit handler is functional!');

    if (preferredPayment.value === 'credit-card') {
        const ccVal = ccNum.value;
        const ccValidTest = /^[0-9]{13,16}$/.test(ccVal);
        const ccHint = ccNum.parentElement;
        if (!ccValidTest) {
            validationFail(ccHint);
            e.preventDefault;
        } else {
            validationPass(ccHint);
        }

        const zipcodeVal = zipcode.value;
        const zipcodeValidTest = /^\d{5}$/.test(zipcodeVal);
        const zipHint = zipcodeVal.parentElement;
        if (!zipcodeValidTest) {
            validationFail(zipHint);
            e.preventDefault;
        } else {
            validationPass(zipHint);
        }
        const cvvVal = cvvInput.value;
        const cvvValidTest = /^[0-9]{3,}$/.test(cvvVal);
        const cvvHint = cvvVal.parentElement;
        if (!cvvValidTest) {
            validationFail(cvvHint);
            e.preventDefault;
        } else {
            validationPass(cvvHint);
        }
    } else if (preferredPayment.value === 'paypal') {
        validationPass(payPal);
    } else if (preferredPayment.value === 'bitcoin') {
        validationPass(bitCoin);
}

});















