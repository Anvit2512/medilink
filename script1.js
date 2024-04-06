function diagnose(diagnosis) {
    let symptoms = document.getElementById("symptomsInput").value.toLowerCase();
    let bodyPart = document.querySelector("#bodyPart button.selected").id.replace("Btn", "");
    let diagnosisResult = document.getElementById("diagnosisResult");
    let precautionsList = document.getElementById("precautionsList"); 

    
    diagnosisResult.innerHTML = "";
    precautionsList.innerHTML = ""; 

   
    switch(bodyPart) {
        case "head":
            if (symptoms.includes("headache") && symptoms.includes("dizziness")) {
                diagnosisResult.innerHTML = "<p>Based on the symptoms provided, you might have a concussion.</p>";
                
                changePrecaution("concussion"); 
            } else if (symptoms.includes("headache") && symptoms.includes("nausea")) {
                diagnosisResult.innerHTML = "<p>Based on the symptoms provided, you might have a migraine.</p>";
               
                changePrecaution("migraine"); 
            } else {
                diagnosisResult.innerHTML = "<p>No specific diagnosis could be made based on the provided symptoms for the head.</p>";
            }
            break;
        case "chest":
            if (symptoms.includes("chest pain") && symptoms.includes("shortness of breath")) {
                diagnosisResult.innerHTML = "<p>Based on the symptoms provided, you might have a heart condition.</p>";
              
                changePrecaution("heart_condition"); 
            } else {
                diagnosisResult.innerHTML = "<p>No specific diagnosis could be made based on the provided symptoms for the chest.</p>";
            }
            break;
        case "abdomen":
            if (symptoms.includes("abdominal pain") && symptoms.includes("nausea")) {
                diagnosisResult.innerHTML = "<p>Based on the symptoms provided, you might have appendicitis.</p>";
                
                changePrecaution("appendicitis");
            } else {
                diagnosisResult.innerHTML = "<p>No specific diagnosis could be made based on the provided symptoms for the abdomen.</p>";
            }
            break;
        case "back":
            if (symptoms.includes("back pain") && symptoms.includes("numbness")) {
                diagnosisResult.innerHTML = "<p>Based on the symptoms provided, you might have a spinal injury.</p>";
            
                changePrecaution("spinal_injury"); 
            } else {
                diagnosisResult.innerHTML = "<p>No specific diagnosis could be made based on the provided symptoms for the back.</p>";
            }
            break;
        case "limbs":
            if (symptoms.includes("swelling") && symptoms.includes("bruising")) {
                diagnosisResult.innerHTML = "<p>Based on the symptoms provided, you might have a fracture.</p>";
               
                changePrecaution("fracture"); 
            } else {
                diagnosisResult.innerHTML = "<p>No specific diagnosis could be made based on the provided symptoms for the limbs.</p>";
            }
            break;
        default:
            diagnosisResult.innerHTML = "<p>No specific diagnosis could be made based on the provided symptoms.</p>";
            break;
    }
}

function changePrecaution(diagnosis) {
    let precautionsList = document.getElementById("precautionsList");
    precautionsList.innerHTML = ""; 

    switch (diagnosis) {
        case "concussion":
            precautionsList.innerHTML += "<li>Rest and avoid physical and mental exertion.</li>";
            precautionsList.innerHTML += "<li>Avoid activities that could lead to further head injury.</li>";
            precautionsList.innerHTML += "<li>Seek medical attention for severe symptoms like persistent vomiting, worsening headache, or changes in consciousness.</li>";
            break;
        case "migraine":
            precautionsList.innerHTML += "<li>Rest in a quiet, dark room.</li>";
            precautionsList.innerHTML += "<li>Apply cold compresses to the head.</li>";
            precautionsList.innerHTML += "<li>Stay hydrated.</li>";
            break;
        case "heart_condition":
            precautionsList.innerHTML += "<li>Seek immediate medical attention.</li>";
            precautionsList.innerHTML += "<li>Avoid physical exertion.</li>";
            precautionsList.innerHTML += "<li>Take prescribed medications as directed.</li>";
            break;
        case "appendicitis":
            precautionsList.innerHTML += "<li>Seek immediate medical attention as appendicitis requires surgery.</li>";
            precautionsList.innerHTML += "<li>Avoid eating or drinking until assessed by a healthcare professional.</li>";
            precautionsList.innerHTML += "<li>Do not apply heat to the abdomen.</li>";
            break;
        case "spinal_injury":
            precautionsList.innerHTML += "<li>Avoid moving the injured person unless absolutely necessary.</li>";
            precautionsList.innerHTML += "<li>Keep the head, neck, and back aligned until medical help arrives.</li>";
            precautionsList.innerHTML += "<li>Do not attempt to straighten the limbs if there is deformity or suspected fracture.</li>";
            break;
        case "fracture":
            precautionsList.innerHTML += "<li>Immobilize the injured limb if possible.</li>";
            precautionsList.innerHTML += "<li>Apply ice packs wrapped in cloth to reduce swelling and pain.</li>";
            precautionsList.innerHTML += "<li>Seek medical attention for proper assessment and treatment.</li>";
            break;
        default:
            precautionsList.innerHTML = "<li>No specific precautions available for this diagnosis.</li>";
            break;
    }
}

function setBodyPart(part) {
   
    let buttons = document.querySelectorAll('#bodyPart button');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected');
    });

    
    let selectedButton = document.getElementById(part + 'Btn');
    selectedButton.classList.add('selected');
}

