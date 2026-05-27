---
layout: default
title: Contact
---

{% include menu.html %}

# Contact

<form action="https://api.web3forms.com/submit" method="POST">
    <!-- Configure secret access key -->
    <input type="hidden" name="access_key" value="6ea78dc0-f6ec-42fe-a549-dbeeced05d4a">
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
        <textarea name="message" required>Hi Inanç, </textarea>  
    </div>
    <div style="width: 200px;">
        <button type="submit">Submit Form</button>
    </div>
</form>