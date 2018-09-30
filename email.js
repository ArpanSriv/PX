 var token = "bcc32be7-30bb-4ea3-80fd-9ad8c497d875";

 function sendEmail(form) {

     var body = "";
     body += "First Name:  " + form.firstName + "<br>";
     body += "Last Name:  " + form.LastName + "<br>";
     body += "Email:  " + +"<a href='mailto:" + form.LastName + "'></a>" + "<br>";
     body += "Category 1:  " + form.c1 + "<br>";
     body += "Category 2:  " + form.c2 + "<br>";
     body += "Category 3:  " + form.c3 + "<br>";
     body += "Category 4:  " + form.c4 + "<br>";
     body += "Deadline:  " + form.d + "\\" + form.m + "\\" + form.y + "\\" + "<br>";
     body += "Budget:  " + form.budget + "<br>";
     body += "Extra Details:  " + form.desc + "<br>";


     Email.send(
         "arpansri98@gmail.com",
         "arpansri98@gmail.com",
         "ScholarJobs Work",
         body, {
             token: token,
             callback: function done(message) {
                 alert("Your Request has been lodged successfully. Further communications will be made via email.")
             }
         }
     );
 }
