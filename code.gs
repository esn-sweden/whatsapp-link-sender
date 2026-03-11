const WHATSAPP_LINK = // add your WhatsApp link here
const SUBJECT = "ESN Section WhatsApp Community"
const BODY = "Here's the link to our WhatsApp community: " + WHATSAPP_LINK
const OPTIONS = { name: "ESN Section", noReply: true }
const STUDENT_EMAIL = // write a regex that checks that the email is in the correct domain

function onFormSubmit(e) {
  // Assumes the email is the first answer field in the form
  // Change the 0 to the position of the answer field if needed
  var recipient = e.response.getItemResponses()[0].getResponse()

  if (STUDENT_EMAIL.test(recipient)) {
    GmailApp.sendEmail(recipient, SUBJECT, BODY, OPTIONS)
}
