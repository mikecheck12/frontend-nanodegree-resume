//$("#main").append("Michael Oliver");

/*
var firstName = "Michael";
var age = 27;

console.log(firstName);

var awesomeThoughts = "I am Mike and I am awesome!";

console.log(awesomeThoughts);

//var funThoghts = awesomeThoughts.replace("awesome", "fun");
//$("#main").append(funThoghts);

var name = "Michael Oliver";
var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/


var skills = ["finance", "web dev", "c++", "java"]
//$("#main").append(skills);

var contactInfo = ["jmichaeloliver12@gmail.com", "801-360-7859"]


var bio = {
    "name" : "Michael Oliver",
    "role" : "Web Developer",
    "contact" : contactInfo,
    "picture" : "images/danny.jpg",
    "message" : "Lets do work",
    "skills" : skills
};

varformattedPic = HTMLbioPic.replace("%data%",bio.picture)
//$("#header").append(formattedPic)


$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.picture);
$("#main").append(bio.message);
$("#main").append(bio.skills);


bio.city = "Salt Lake City";
bio.email = "jmichaeloliver12";

var work = {
   //"employer" : "Goldman Sachs",
    //"yrs" : "2",
   // "city" : "Salt Lake City"
}

work.position = "Financial Analyst";
work.employer = "Goldman Sachs";
work.yrs = "2";
work.city = "Salt Lake City";

$("#main").append(work.position);

var education = {
    "emphasis":[
     {  "School_Name" : "Brigham Young University",
        "major" : "BS Finance",
        "city" : "Provo",
        "graduation" : "April 2014"
     },
     {
        "School_Name" : "Brigham Young University",
        "city" : "Provo",
        "coursework" : ["CS 142", "CS 235"]
     }
     {
        "School_Name" : "Udacity",
        "city" : "Salt Lake City",
        "coursework" : ["HTML", "CSS", "Javascript"]
     }
    ]
}



$("#main").append(education.School_Name);















