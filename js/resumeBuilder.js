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
   "skillpics" : ["./img/python-logo.png", "./img/java-logo.png", "./img/javascript-logo.png", "./img/html5-logo.png", "./img/css-logo.png", "./img/grunt-logo.png", "./img/css-logo.png"],
   "display" : function(){
     // HEADER
     var role_split = this.split_role();
     $("#header-intro").append(HTMLheaderRole.replace("%data%", role_split[0]));
     $("#header-intro").append(HTMLbioPic.replace("%data%", this.biopic));
     $("#header-intro").append(HTMLheaderRole.replace("%data%", role_split[1]));
     $("#header").append(HTMLheaderName.replace("%data%", this.name));
     // PERSONAL SECTION
     $("#personal-section").prepend(HTMLPersonalSectionTitle);
     $("#personal-section").append(HTMLPersonalContent);
       $("#personal-content").append(HTMLBucketAbout);
         $("#about-me").append(HTMLBucketAboutTitle.replace("%data%", "Who am I?"));
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
      $("#skills").prepend(HTMLSkillsTitle);
      $("#skills").append(HTMLSkillsContent);
      for(var i=0; i<this.skills.length; i++){
        $("#skills-content").append(this.format_skill(i));
      }
    // TODO: adapt non-default content to work optionally, and required var names to match template
  },
  "split_role" : function(){
    var role_array = this.role.split(" ");
    var mid_point = Math.floor(role_array.length / 2);
    var first = role_array.splice(0, mid_point).toString();
    var last = role_array.toString();
    return [first, last];
  },
  "format_skill" : function(index){
    var idx = this.find_in_skill_array(this.skills[index]);
    if(idx < 0) {
      return HTMLSkillTextBucket.replace("%data%", this.skills[index]);
    }
    return HTMLSkillImgBucket.replace("%image%", this.skillpics[idx]);
  },
  "find_in_skill_array" : function(word){

    for(var i = 0; i<this.skillpics.length; i++){
      //console.log(this.skillpics[i] + " // " + word + " // " + this.skillpics[i].toLowerCase().includes(word.toLowerCase()));
      if(this.skillpics[i].toLowerCase().includes(word.toLowerCase())) return i;
    } return -1;
  }
 }

bio.display();
