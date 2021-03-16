var resultsBody = document.body;

for (var i = 0; i < 5; i++) {
    var card = document.createElement("div");
    var cardHdr = document.createElement("h3");
    var cardDate = document.createElement("div");
    var cardSubj = document.createElement("div");
    var cardDesc = document.createElement("div")
    var cardLink = document.createElement("a");
    var cardBody = document.createElement("div");
    var dateContent = document.createElement("span");
    var subjContent = document.createElement("span");
    var descContent = document.createElement("span");

    cardHdr.textContent = "This is the header";
    cardDate.textContent = "Date: ";
    cardSubj.textContent = "Subjects: ";
    cardDesc.textContent = "Description: "
    cardLink.textContent = "Read More";

    dateContent.textContent = "1999";
    subjContent.textContent = "These are subjects";
    descContent.textContent = "This is some test descriptive stuff";

    cardHdr.classList.add("card-title");
    cardDate.classList.add("card-text");
    cardSubj.classList.add("card-text");
    cardDesc.classList.add("card-text");
    cardLink.classList.add("btn");
    cardLink.classList.add("btn-info");
    card.classList.add("card");
    cardBody.classList.add("card-body");

    cardDate.appendChild(dateContent);
    cardSubj.appendChild(subjContent);
    cardDesc.appendChild(descContent);

    card.appendChild(cardHdr);
    card.appendChild(cardDate);
    card.appendChild(cardSubj);
    card.appendChild(cardDesc);
    card.appendChild(cardLink);

    resultsBody.appendChild(card);
}