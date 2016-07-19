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
   "skills" : ["JavaScript", "java", "python", "html/css", "spanish", "italian", "a little bit of french"],
   "biopic" : "./img/me.jpg",
   "display" : function(){
     var role_split = this.split_role();
     $("#header-intro").append(HTMLheaderRole.replace("%data%", role_split[0]));
     $("#header-intro").append(HTMLbioPic.replace("%data%", this.biopic));
     $("#header-intro").append(HTMLheaderRole.replace("%data%", role_split[1]));
     $("#header").append(HTMLheaderName.replace("%data%", this.name));
    //  $("#name-bar").prepend(HTMLheaderRole.replace("%data%", this.role));
    //  $("#name-bar").prepend(HTMLheaderName.replace("%data%", this.name));
    //  $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
    //  $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
    //  $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.github));
    //  $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.twitter));
    //  $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
    //  $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    //  $("#header").append(HTMLskillsStart);
    //  for(var i=0; i<this.skills.length; i++){
    //    $("#skills").append(HTMLskills.replace("%data%", this.skills[i]));
    //  }
  },
  "split_role" : function(){
    var role_array = this.role.split(" ");
    var mid_point = Math.floor(role_array.length / 2);
    var first = role_array.splice(0, mid_point).toString();
    var last = role_array.toString();
    return [first, last];
  }
 }

bio.display();
