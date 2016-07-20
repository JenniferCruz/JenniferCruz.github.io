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
     $("#header").append(HTMLheaderName.replace("%data%", this.name));
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

bio.display();
