
displayValues = () =>   {

    var consignmentId = document.getElementById("consignment-number").value
    var object = JSON.parse(getObject(consignmentId));
    document.getElementById('source').innerHTML = object.source;
    document.getElementById('dest').innerHTML = object.destination;
    document.getElementById('receiver').innerHTML = object.receiver;
    document.getElementById('sender').innerHTML = object.sender;
    document.getElementById('quantity').innerHTML = object.quantity;
    document.getElementById('weight').innerHTML = object.weight;
}
var getObject = (consignmentId) => window.localStorage.getItem(consignmentId);
