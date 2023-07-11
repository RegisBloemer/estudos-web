function show() {
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  const contact = document.getElementsByName("contact1");
  console.log(contact);

  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact);
}
