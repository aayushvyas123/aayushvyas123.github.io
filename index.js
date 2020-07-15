function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "theaayushvyas@gmail.com",
        Password: "mypwd0610",
        To: "theaayushvyas@gmail.com",
        From: "aayushvyas2572@gmail.com",
        Subject: "Mail from my website",
        Body: "never give up",
    }).then(
        message => alert("mail sent successfully")
    );
}