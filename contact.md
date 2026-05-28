---
layout: default
title: Contact
---

{% include menu.html %}

# Contact

<form action="https://api.web3forms.com/submit" method="POST">
    <!-- Configure secret access key -->
    <input type="hidden" name="access_key" value="e27a9f7a-a99b-4a6c-86f0-624a8c22a2a2">
    <!-- Create a custom subject line -->
    <input type="hidden" name="subject" value="New Submission from Web3Forms, algorismi.nl">
    <div style="width: 200px;">
        Name: 
        <input type="text" name="name" required>
    </div>  
    <div style="width: 200px;">
         E-mail:
        <input type="email" name="email" required>
    </div>
    <div style="width: 200px;">
        Message:
        <textarea name="message" required>Hi IY,</textarea>  
    </div>
    <div style="width: 200px;">
        <button type="submit">Submit Form</button>
    </div>
</form>