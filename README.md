# WhatsApp Link Sender
A Google Apps Script that sends a WhatsApp group link only to student emails

This resolves the problem of spammers joining your WhatsApp groups when you post the links online.

## Usage

### Form

Create a Google Form with a question that asks for the students' emails. Explain that you will use it to send them a link to your WhatsApp group.

### Script

1. From within the form editor, select **More** (three dots) > **Apps Script**

> [!NOTE]
> If you cannot see the Apps Script option, make sure it is enabled in the admin console. Apps > Google Workspace > Settings for Drive and Docs > Google Apps Script

2. Paste the contents of `code.gs` in the repo into code.gs.
3. Edit the constants to fit your organisation. For help writing the regex you can use a tool such as [Regex101](https://regex101.com/).

> [!TIP]
> Use the same regex in your form so the users get immediate feedback if they type a non-student email. On your form question, select **More Options** (three dots) > **Response validation** > **Regular expression**.

### Trigger

1. Select **Triggers** (left side menu) > **Add Trigger**
2. **Select event type**: **On form submit**. You can keep the other defaults. Click **Save**.
3. You will get a pop-up that asks you to give the project access to you account (so it can send email on your behalf). Click **Allow**.

That's it! You are not ready to go! Make sure to test your script thoroughly.
