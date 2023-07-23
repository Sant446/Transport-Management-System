const sourceDropdown = document.getElementById('source-location');
const cities = ['Select','Bangalore', 'Mysore', 'Hobli', 'Darward', 'Belgaum'];
cities.forEach(city => {
  let option = document.createElement("option");
  option.append(city);
  sourceDropdown.appendChild(option);
})

const senderDropdown = document.getElementById('sender-name')
const senderNames = ['Select','Airtel', 'Vodafone'];
senderNames.forEach(name => {
  let option = document.createElement('option');
  option.append(name);
  senderDropdown.appendChild(option)
})

const destinationDropdown = document.getElementById('destination-location')
const destinationCities = ['Select','Bangalore', 'Mysore', 'Hobli', 'Darward', 'Belgaum'];
destinationCities.forEach(city => {
  let option = document.createElement('option');
  option.append(city);
  destinationDropdown.appendChild(option)
})

const receiverDropdown = document.getElementById('receiver-name')
const receiverNames = ['Select','ABC Ltd', 'Assess LLP (Airtel)', 'Aditya Enterprise', 'SH Communication (vodafone)'];
receiverNames.forEach(name => {
  let option = document.createElement('option');
  option.append(name);
  receiverDropdown.appendChild(option)
})

const partnerNameDropdown = document.getElementById('partner-name')
const partnerNames = ['Select','Parik', 'Arvind Roadlines', 'Hokul Roadways'];
partnerNames.forEach(name => {
  let option = document.createElement('option');
  option.append(name);
  partnerNameDropdown.appendChild(option)
})

function saveDetails() {

  var source = document.querySelector('#source-location').value;
  var sender = document.querySelector('#sender-name').value;
  var destination = document.querySelector('#destination-location').value;
  var receiver = document.querySelector('#receiver-name').value;
  var partner = document.querySelector('#partner-name').value;
  var quantity = document.getElementById("quantity").value
  var weight = document.getElementById("weight").value

  var object = {
    source: `${source}`, sender: `${sender}`, destination: `${destination}`, receiver: `${receiver}`,
    partner: `${partner}`, quantity: `${quantity}`, weight: `${weight}`
  };

  var consignmentId = generateRandomNumber();

  window.localStorage.setItem(consignmentId, JSON.stringify(object));
  alert(`Successfully created and Consignment number is: ${consignmentId}`);

}

var generateRandomNumber = () => Math.floor(1000 + Math.random() * 9000);
function Next(){
  location.href = 'http://127.0.0.1:5500/Transportation%20consignment.html';
}

