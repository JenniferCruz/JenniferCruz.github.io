var coolImgCounter = 1; // used to name decorative images
var DECOR_HERE_1 = 2; // constant variables used to insert decorative images at certain locations
var DECOR_HERE_2 = 6;

var bio = {
   'name': 'Jennifer',
   'role': 'web dev',
   'contacts': {
     'mobile': '469-555-5555',
     'email': 'jennifer.cruzz@gmail.com',
     'github': 'JenniferCruz',
     'twitter': '@j3nniCruz',
     'location': 'Dallas, TX'
   },
   'welcomeMessage': 'I\'ve been working for a couple of years alongside web developers. '+
      'Managing communication and trying to make sure everybody has a good understanding of '+
      'a project\'s goal is a cool thing. But, being fascinated by the potential in programming, '+
      'I wanted to get my hands dirty.',
   'skills': [
     'python',
     'html',
     'java',
     'JavaScript',
     'css',
     'english',
     'spanish',
     'italian',
     'a little bit of french'
   ],
   'biopic': './img/me.jpg',
   'display': function(){
     // Render header
     var role_split = bioHelper.split_role();
     if(this.biopic && this.role && this.name){
       $('#header-intro').append(HTMLheaderRole.replace('%data%', role_split[0]));
       $('#header-intro').append(HTMLbioPic.replace('%data%', this.biopic));
       $('#header-intro').append(HTMLheaderRole.replace('%data%', role_split[1]));
       $('header').append(HTMLheaderName.replace('%data%', this.name));
     }
     // Render personal information section
     if(this.contacts){
       $('#personal-section').prepend(HTMLPersonalSectionTitle);
       $('#personal-section').append(HTMLPersonalContent);
       $('#personal-content').append(HTMLabout);
       $('#about-me').append(HTMLaboutTitle.replace('%data%', 'Who am I?'));
       $('#about-me').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
       $('#personal-content').append(HTMLBucketPhrase);
       $('#decor-phrase').append(HTMLDecorPhrase.replace('%data%', 'Any fool can write code '+
       'that a computer can understand. Good programmers write code that humans can understand. '+
       'Martin Fowler. '));
       $('#personal-content').append(HTMLBucketPicPersonal);
       $('#decor-pic').append(HTMLBucketPic);
       $('#personal-content').append(HTMLBucketContact);
       $('#contact').append(HTMLBucketContactTitle.replace('%data%', 'Contact'));
       $('#contact').append(HTMLContactList);
       $('#contact-list').append(HTMLmobile.replace('%data%', this.contacts.mobile));
       $('#contact-list').append(HTMLemail.replace('%data%', this.contacts.email));
       $('#contact-list').append(HTMLlocation.replace('%data%', this.contacts.location));
       $('#contact-list').append(HTMLgithub.replace('%data%', this.contacts.github));
       $('#contact-list').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
     }
     // Render skills section
     $('#skills').prepend(HTMLSkillsTitle);
     $('#skills').append(HTMLSkillsContent);
     for(var i=0; i<this.skills.length; i++){
       $('#skills-content').append(bioHelper.format_skill(this.skills[i]));
     }
   }
 }

 var bioHelper = {
   // skillpics property to support bio skill section
   'skillpics': [
     './img/logo-python.png',
     './img/logo-java.png',
     './img/logo-javascript.png',
     './img/logo-html5.png',
     './img/logo-css.png',
     './img/logo-grunt.png',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/English_language.svg/800px-English_language.svg.png',
     './img/logo-spanish.gif',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/512px-Flag_of_Italy.svg.png#italian'
   ],
   // Helper function to display role as per design
   'split_role': function(){
     if(bio.role){
       var role_array = bio.role.split(' ');
       var mid_point = Math.floor(role_array.length / 2);
       var first = role_array.splice(0, mid_point).toString();
       var last = role_array.toString();
       return [first, last];
     }
   },
   // Helper function to display an image for each skill, if an image is available
   'format_skill': function(word){
     var idx = this.find_in_skill_array(word);
     return idx < 0 ? HTMLSkillTextBucket.replace('%data%', word) : HTMLSkillImgBucket.replace('%image%', this.skillpics[idx]);
   },
   // Helper function to find the image that matches the skill
   'find_in_skill_array': function(word){
     for(var i = 0; i<this.skillpics.length; i++){
       if(this.skillpics[i].toLowerCase().search(word.toLowerCase()) >= 0) return i;
     }
     return -1;
   }
 }

 var projects = {
   'projects': [
     {
       'title': 'Grid layout framework',
       'dates': '05-2016',
       'description': 'Responsive website developed using own implementation of a grid layout system.',
       'images': ['img/grid1.jpg', 'img/grid2.jpg', 'img/grid3.jpg', 'img/grid4.jpg']
     },
     {
       'title': 'Bootstrap Framework',
       'dates': '06-2016',
       'description': 'Responsive website developed using Bootstrap',
       'images': ['img/bootstrap_1.jpg', 'img/bootstrap_2.jpg']
     }
   ],
   'display': function(){
     $('#projects').append(HTMLprojectTitle);
     $('#projects').append(HTMLprojectsContent);
     for(var i=0; i<this.projects.length; i++){
       $('#projects-content').append(HTMLprojectBucket);
       $('.project-entry:last').append(HTMLprojectName.replace('%data%', this.projects[i].title));
       $('.project-entry:last').append(HTMLprojectDates.replace('%data%', this.projects[i].dates));
       $('.project-entry:last').append(HTMLprojectGallery);
       $('.project-gallery:last').append(HTMLprojectGalleryLeft);
       $('.project-gallery:last').append(HTMLprojectGalleryImgSet);
       for(var j=0; j<this.projects[i].images.length; j++){
         // Use if/else instead of ternary expression because content within brackets is too long
         if(j === 0){
           $('.image-set:last').append(HTMLprojectImgVisible.replace('%ulr-to-img%', this.projects[i].images[j]));
         } else {
           $('.image-set:last').append(HTMLprojectImgHidden.replace('%ulr-to-img%', this.projects[i].images[j]));
         }
       }
       $('.project-gallery:last').append(HTMLprojectGalleryRight);
       $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', this.projects[i].description));
     }
   }
 }

 var work = {
   'jobs' : [
     {
       'employer': 'Akendos',
       'title': 'Business Analyst',
       'location': 'Bogota, Colombia',
       'dates': '2015-2016',
       'description': 'As businesss analyst I had to manage communication with the clients, '+
          'identify their needs and work alongside the development team '+
          'to make sure projects were delivered as expected. '
     },
     {
       'employer': 'THINK creative group',
       'title': 'Quality Assurance',
       'location': '(Online)',
       'dates': '2014-2015',
       'description': 'Main responsabilities included gathering information and communicating '+
          'requirements to internal and remote teams, and making sure the projects were developed '+
          'in accordance with the requirements and expectations.'
     },
     {
       'employer': 'Akendos',
       'title': 'Project Manager',
       'location': 'Cartagena, Colombia',
       'dates': '2013-2014',
       'description': 'Among the many task of the role, I had to manage communication '+
          'with the clients to understand their software needs and expectations, '+
          'create user stories for the technical teams and make sure they understood the requirements, '+
          'using images, diagrams and other tools, '+
          'working with both the technical team and the client as per Agile methodologies.'
     },
     {
       'employer': 'Universidad Tecnológica de Bolívar',
       'title': 'Web marketing consultant for APPS.CO entrepreneurships',
       'location': 'Cartagena, Colombia',
       'dates': '2012-2013',
       'description': 'As consultant for tech entrepreneurs in Colombia, '+
          'I had to hold meeting with entrepreneurs on demand, to introduce them to platforms, '+
          'resources and techniques to develop their communication programs. '+
          'Additionally, I had to prepare and give lectures on related topics.'
     },
     {
       'employer': 'THINK creative group',
       'title': 'Web Projects Coordinator',
       'location': '(Online)',
       'dates': '2010-2012',
       'description': 'Being involved in the many stages of the web development process, '+
          'I had to assist in identifying our clients\' needs, '+
          'manage communication with the development team and check '+
          'the projects were developed in accordance with the requirements'
     },
     {
       'employer': 'AIESEC Dominican republic',
       'title': 'Member Committee President',
       'location': 'Santo Domingo, Dominican Republic',
       'dates': '2009-2010',
       'description': 'Being accountable for the performance of the organization included '+
          'looking over our financial performance, '+
          'coordinating two local committees in different cities, '+
          'staying in touch with the various stakeholders, '+
          'organizing conferences and projects consistent with the mission, '+
          'vision and values​​ of the organization, and providing feedback to all team members and the team as a whole.'
     },
     {
       'employer': 'Iberocamerican University',
       'title': 'Italian Teacher',
       'location': 'Santo Domingo, Dominican Republic',
       'dates': '2008-2010',
       'description': 'As a teacher, I was responsible for planning ' +
          'and conducting classes on a weekly basis, developing support ' +
          'material for the course and content for a virtual classroom, ' +
          'and assessing students\' performance.'
     }
   ],
   'display': function(){
     $('#work-experience').append(HTMLworkTitle);
     $('#work-experience').append(HTMLworkContent);
     for(var i=0; i<this.jobs.length; i++){
       $('#work-content').append(HTMLworkBucket);
       $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', this.jobs[i].employer));
       $('.work-entry:last').append(HTMLworkDates.replace('%data%', this.jobs[i].dates));
       $('.work-entry:last').append(HTMLjobTitle.replace('%data%', this.jobs[i].title));
       $('.work-entry:last').append(HTMLworkLocation.replace('%data%', this.jobs[i].location));
       $('.work-entry:last').append(HTMLworkDescription.replace('%data%', this.jobs[i].description));
       checkToInsertCoolPic(i, '#work-content');
     }
   }
 }

function checkToInsertCoolPic(index, section){
  if(index === DECOR_HERE_1 || index === DECOR_HERE_2){
    insertCoolPic(section);
  }
}

function insertCoolPic(section){
   $(section).append(HTMLimgBucket);
   $('.cool-img:last').append('<img src=img/decor'+ coolImgCounter++ +'.jpg>');
 }

 var education = {
   'schools': [
     {
       'name' : 'EAE Business School',
       'location' : '(Online)',
       'degree' : 'Masters',
       'majors' : ['Web marketing', 'E-Commerce'],
       'dates' : '2011-2012',
       'url' : 'http://en.obs-edu.com'
     },
     {
       'name' : 'APEC University',
       'location' : 'Santo Domingo, Dominican Republic',
       'degree' : 'BA',
       'majors' : ['Marketing'],
       'dates' : '2006-2010',
       'url' : 'https://www.unapec.edu.do/'
     }
   ],
   'onlineCourses' : [
     {
       'title': 'Front-End Web Developer Nanodegree',
       'school': 'Udacity',
       'dates': '2016',
       'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
     },
     {
       'title': 'Interactive programming in Python',
       'school': 'Coursera',
       'dates': '2014',
       'url': 'https://www.coursera.org/account/accomplishments/verify/TLP8LF7HRT'
     },
     {
       'title': 'Principles of computing',
       'school': 'Coursera',
       'dates': '2014',
       'url': 'https://www.coursera.org/account/accomplishments/verify/FTQ8C6WC4V'
     }
   ],
   'display': function(){
     $('#education').append(HTMLeducationTitle);
     $('#education').append(HTMLeducationContent);
     for(var i=0; i<this.schools.length; i++){
       this.displaySchools(i);
       checkToInsertCoolPic(i, '#ed-content');
     }

     for(var i=0; i<this.onlineCourses.length; i++){
       this.displayOnlineCourses(i);
       checkToInsertCoolPic(i, '#ed-content');
     }
   },
   'displaySchools': function(index){
     $('#ed-content').append(HTMLedBucket);
     $('.ed-entry:last').append(HTMLschoolMajor.replace('%data%', this.schools[index].majors[i] + ' '));
     for(var i=0; i<this.schools[index].majors.length; i++){
       $('.ed-entry:last h3').append(this.schools[index].majors[i]);
       if(i < this.schools[index].majors.length - 1) $('.ed-entry:last h3').append(' / ');
     }
     $('.ed-entry:last').append(HTMLschoolDegree.replace('%data%', this.schools[index].degree));
     $('.ed-entry:last').append(HTMLschoolName.replace('%data%', this.schools[index].name));
     $('.ed-entry:last').append(HTMLschoolDates.replace('%data%', this.schools[index].dates));
     $('.ed-entry:last').append(HTMLschoolLocation.replace('%data%', this.schools[index].location));
     $('.ed-entry:last').append(HTMLschoolURL.replace('%linkTo%', this.schools[index].url).replace('%data%', 'visit school website>'));
   },
   'displayOnlineCourses': function(index){
     $('#ed-content').append(HTMLedBucket);
     $('.ed-entry:last').append(HTMLonlineTitle.replace('%data%', this.onlineCourses[index].title));
     $('.ed-entry:last').append(HTMLonlineSchool.replace('%data%', this.onlineCourses[index].school));
     $('.ed-entry:last').append(HTMLonlineDates.replace('%data%', this.onlineCourses[index].dates));
     $('.ed-entry:last').append(HTMLonlineURL.replace('%linkTo%', this.onlineCourses[index].url).replace('%data%', 'go to course page>'));
   }
 }

bio.display();
projects.display();
work.display();
education.display();

$('#mapDiv').append(googleMap);
