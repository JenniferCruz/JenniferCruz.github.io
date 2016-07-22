var bio = {
   "name":"Jennifer",
   "role":"web dev",
   "contacts": {
     "mobile" : "469-555-5555",
     "email" : "jennifer.cruzz@gmail.com",
     "github" : "JenniferCruz",
     "twitter" : "@j3nniCruz",
     "location" : "Dallas, TX"
   },
   "welcomeMessage" : "Hi! I'm a developer and I'm looking for a job with a talented team :-)",
   "skills" : ["python", "html", "java", "JavaScript", "css", "english" ,"spanish", "italian", "a little bit of french"],
   "biopic" : "./img/me.jpg",
   "display" : function(){
     // Render header
     var role_split = bioHelper.split_role();
     $("#header-intro").append(HTMLheaderRole.replace("%data%", role_split[0]));
     $("#header-intro").append(HTMLbioPic.replace("%data%", this.biopic));
     $("#header-intro").append(HTMLheaderRole.replace("%data%", role_split[1]));
     $("header").append(HTMLheaderName.replace("%data%", this.name));
     // Render personal information section
     $("#personal-section").prepend(HTMLPersonalSectionTitle);
     $("#personal-section").append(HTMLPersonalContent);
     $("#personal-content").append(HTMLabout);
     $("#about-me").append(HTMLaboutTitle.replace("%data%", "Who am I?"));
     $("#about-me").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
     $("#personal-content").append(HTMLBucketPhrase);
     $("#decor-phrase").append(HTMLDecorPhrase.replace("%data%", "Cool phrase goes here"));
     $("#personal-content").append(HTMLBucketPicPersonal);
     $("#decor-pic").append(HTMLBucketPic);
     $("#personal-content").append(HTMLBucketContact);
     $("#contact").append(HTMLBucketContactTitle.replace("%data%", "Contact"));
     $("#contact").append(HTMLContactList);
     $("#contact-list").append(HTMLmobile.replace("%data%", this.contacts.mobile));
     $("#contact-list").append(HTMLemail.replace("%data%", this.contacts.email));
     $("#contact-list").append(HTMLlocation.replace("%data%", this.contacts.location));
     $("#contact-list").append(HTMLgithub.replace("%data%", this.contacts.github));
     $("#contact-list").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
     // Render skills section
     $("#skills").prepend(HTMLSkillsTitle);
     $("#skills").append(HTMLSkillsContent);
     for(var i=0; i<this.skills.length; i++){
       $("#skills-content").append(bioHelper.format_skill(this.skills[i]));
     }
   }
 }

 var bioHelper = {
   // Object property to support bio skill section
   "skillpics" : ["./img/python-logo.png", "./img/java-logo.png", "./img/javascript-logo.png", "./img/html5-logo.png", "./img/css-logo.png", "./img/grunt-logo.png", "./img/css-logo.png"],
   // Helper function to display role as per design
   "split_role" : function(){
     var role_array = bio.role.split(" ");
     var mid_point = Math.floor(role_array.length / 2);
     var first = role_array.splice(0, mid_point).toString();
     var last = role_array.toString();
     return [first, last];
   },
   // Helper function to display an image for each skill, if available
   "format_skill" : function(word){
     var idx = this.find_in_skill_array(word);
     if(idx < 0) {
       return HTMLSkillTextBucket.replace("%data%", word);
     }
     return HTMLSkillImgBucket.replace("%image%", this.skillpics[idx]);
   },
   // Helper function to find the image that matches the skill
   "find_in_skill_array" : function(word){
     for(var i = 0; i<this.skillpics.length; i++){
       if(this.skillpics[i].toLowerCase().includes(word.toLowerCase())) return i;
     } return -1;
   }
 }


 var projects = {
   "projects" : [
     {
       "title" : "Grid layout framework",
       "dates": "05-2016",
       "description": "Responsive website developed using own implementation of a grid layout system.",
       "images": ["img/a.jpg", "img/b.jpg"]
     },
     {
       "title" : "Bootstrap Framework",
       "dates": "06-2016",
       "description": "Responsive website developed using Bootstrap",
       "images": ["img/a.jpg", "img/b.jpg"]
     }
   ],
   "display": function(){
     $("#projects").append(HTMLprojectTitle);
     $("#projects").append(HTMLprojectsContent);
     for(var i=0; i<this.projects.length; i++){
       $("#projects-content").append(HTMLprojectBucket);
       $(".project-entry:last").append(HTMLprojectName.replace("%data%", this.projects[i].title));
       $(".project-entry:last").append(HTMLprojectGallery);
        for(var j=0; j<this.projects[i].images.length; j++){
          $(".project-gallery:last").append(HTMLprojectImage.replace("%data%", this.projects[i].images[j]));
        }
       $(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[i].dates));
       $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[i].description));
     }
   }
 }


 var work = {
   "jobs" : [
     {
       "employer": "Akendos",
       "title": "Business Analyst",
       "location": "Bogota, Colombia",
       "dates": "2015-2016",
       "description": "lorem ipsum description goes here"
     },
     {
       "employer": "THINK creative group",
       "title": "Quality Assurance",
       "location": "(Online)",
       "dates": "2014-2015",
       "description": "lorem ipsum description goes here"
     },
     {
       "employer": "Akendos",
       "title": "Project Manager",
       "location": "Cartagena, Colombia",
       "dates": "2013-2014",
       "description": "lorem ipsum description goes here"
     },
     {
       "employer": "Universidad Tecnológica de Bolívar",
       "title": "Web marketing consultant for APPS.CO entrepreneurships",
       "location": "Cartagena, Colombia",
       "dates": "2012-2013",
       "description": "lorem ipsum description goes here"
     },
     {
       "employer": "THINK creative group",
       "title": "Web Projects Coordinator",
       "location": "(Online)",
       "dates": "2010-2012",
       "description": "lorem ipsum description goes here"
     },
     {
       "employer": "AIESEC Dominican republic",
       "title": "Member Committee President",
       "location": "Santo Domingo, Dominican Republic",
       "dates": "2009-2010",
       "description": "lorem ipsum description goes here"
     },
     {
       "employer": "Iberocamerican University",
       "title": "Italian Teacher",
       "location": "Santo Domingo, Dominican Republic",
       "dates": "2008-2010",
       "description": "lorem ipsum description goes here"
     }
   ],
   "display": function(){

     $("#work-experience").append(HTMLworkTitle);
     $("#work-experience").append(HTMLworkContent);
     for(var i=0; i<this.jobs.length; i++){
       $("#work-content").append(HTMLworkBucket);
       $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", this.jobs[i].employer));
       $(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[i].dates));
       $(".work-entry:last").append(HTMLjobTitle.replace("%data%", this.jobs[i].title));
       $(".work-entry:last").append(HTMLworkLocation.replace("%data%", this.jobs[i].location));
       $(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[i].description));
     }
   }
 }

 var education = {
   "schools": [
     {
       "name" : "EAE Business School",
       "location" : "(Online)",
       "degree" : "Masters",
       "majors" : ["Web marketing", "E-Commerce"],
       "dates" : "2011-2012",
       "url" : "http://en.obs-edu.com"
     },
     {
       "name" : "APEC University",
       "location" : "Santo Domingo, Dominican Republic",
       "degree" : "BA",
       "majors" : ["Marketing"],
       "dates" : "2006-2010",
       "url" : "https://www.unapec.edu.do/"
     }
   ],
   "onlineCourses" : [
     {
       "title": "Front-End Web Developer Nanodegree",
       "school": "Udacity",
       "dates": "2016",
       "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
     },
     {
       "title": "Interactive programming in Python",
       "school": "Coursera",
       "dates": "2014",
       "url": "https://www.coursera.org/account/accomplishments/verify/TLP8LF7HRT"
     },
     {
       "title": "Principles of computing",
       "school": "Coursera",
       "dates": "2014",
       "url": "https://www.coursera.org/account/accomplishments/verify/FTQ8C6WC4V"
     }
   ],
   "display" : function(){
     $("#education").append(HTMLeducationTitle);
     $("#education").append(HTMLeducationContent);
     for(var i=0; i<this.schools.length; i++){
       this.displaySchools(i);
     }

     for(var i=0; i<this.schools.length; i++){
       this.displayOnlineCourses(i);
     }
   },

   "displaySchools" : function(index){
     $("#ed-content").append(HTMLedBucket);
     $(".ed-entry:last").append(HTMLschoolMajor.replace("%data%", this.schools[index].majors[i] + " "));
     for(var i=0; i<this.schools[index].majors.length; i++){
       $(".ed-entry:last h3").append(this.schools[index].majors[i]);
       if(i < this.schools[index].majors.length - 1) $(".ed-entry:last h3").append(" / ");
     }
     $(".ed-entry:last").append(HTMLschoolDegree.replace("%data%", this.schools[index].degree));
     $(".ed-entry:last").append(HTMLschoolName.replace("%data%", this.schools[index].name).replace("#",  this.schools[index].url));
     $(".ed-entry:last").append(HTMLschoolDates.replace("%data%", this.schools[index].dates));
     $(".ed-entry:last").append(HTMLschoolLocation.replace("%data%", this.schools[index].location));
    //  $(".ed-entry a").attr("target", "_blank");
   },

   "displayOnlineCourses" : function(index){
     $("#ed-content").append(HTMLedBucket);
     $(".ed-entry:last").append(HTMLonlineTitle.replace("%data%", this.onlineCourses[index].title));
     $(".ed-entry:last").append(HTMLonlineSchool.replace("%data%", this.onlineCourses[index].school));
     $(".ed-entry:last").append(HTMLonlineDates.replace("%data%", this.onlineCourses[index].dates));
     $(".ed-entry:last").append(HTMLonlineURL.replace("%linkTo%", this.onlineCourses[index].url).replace("%data%", "go to course page>"));
    //  $(".ed-entry:last a:last").attr("href", this.onlineCourses[index].url);
    //  $(".ed-entry:last a:last").attr("target", "_blank");
   }
 }



bio.display();
projects.display();
work.display();
education.display();
