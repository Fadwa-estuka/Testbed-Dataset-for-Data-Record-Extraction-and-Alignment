function replace(str, replaceString, withString){
var myArray = str.split(replaceString);
return (myArray.join(withString));
}
function Stats() {
this.serve_stats_match = '';
this.serve_stats_s1 = '';
this.serve_stats_s2 = '';
this.serve_stats_s3 = '';
this.serve_stats_s4 = '';
this.serve_stats_s5 = '';
this.return_stats_match = '';
this.return_stats_s1 = '';
this.return_stats_s2 = '';
this.return_stats_s3 = '';
this.return_stats_s4 = '';
this.return_stats_s5 = '';
this.rally_stats_match = '';
this.rally_stats_s1 = '';
this.rally_stats_s2 = '';
this.rally_stats_s3 = '';
this.rally_stats_s4 = '';
this.rally_stats_s5 = '';
this.dss_stats = '';
}
function Player(){
this.Fname = '';
this.Lname = '';
this.TVname = '';
this.tour_id = '';
this.cntry = '';
this.bio_photo = false;
this.sentiment = '';
}
function Team() {
this.players = new Array(new Player(), new Player());
this.seed = '';
this.set_scores = '';
this.sets_won = 0;
this.points = '';
/*
SET STATISTIC FIELDS
0 - Total First Serves In
1 - Total Aces
2 - Double Faults
3 - Total First Serves Won
4 - Total First Serves
5 - Total Second Serves Won
6 - Total Second Serves
7 - Total Winners
8 - Total Unforced Errors
9 - Total Break Points Won
10 - Total Break Points
11 - Total Net Points Won
12 - Total Net Approaches
13 - Total Points Won on Opponent's Serve
14 - Set Duration (if available)
*/
this.set_stats = new Array();
this.fastest_serve_kmh = '';
this.fastest_serve_mph = '';
this.avg_first_serve_kmh = '';
this.avg_first_serve_mph = '';
this.avg_second_serve_kmh = '';
this.avg_second_serve_mph = '';
/*
SERVE SPEED FIELDS
0 - Match Avg 1st Serve Speed
1 - Match Avg 2nd Serve Speed
2 - Match Fastest Serve Speed
3 - Set 1 Avg 1st Serve Speed
4 - Set 1 Avg 2nd Serve Speed
5 - Set 1 Fastest Serve Speed
6 - Set 2 Avg 1st Serve Speed
7 - Set 2 Avg 2nd Serve Speed
8 - Set 2 Fastest Serve Speed
9 - Set 3 Avg 1st Serve Speed
10 - Set 3 Avg 2nd Serve Speed
11 - Set 3 Fastest Serve Speed
12 - Set 4 Avg 1st Serve Speed
13 - Set 4 Avg 2nd Serve Speed
14 - Set 4 Fastest Serve Speed
15 - Set 5 Avg 1st Serve Speed
16 - Set 5 Avg 2nd Serve Speed
17 - Set 5 Fastest Serve Speed
*/
this.serve_speed = new Array(18);
this.prevPt = '';
//match stats, challenges, momentum, and keys fields for slamtracker
this.total_points = '';
this.challenges_lost = '';
this.challenges_total = '';
this.momentum = '';
this.ms = '';
this.keys = new Array(new Key(), new Key(), new Key(), new Key(), new Key());
this.key1_text = '';
this.key2_text = '';
this.key3_text = '';
this.key4_text = '';
this.key5_text = '';
//set scores and winner for cmatches
this.s1 = '';
this.s2 = '';
this.s3 = '';
this.s4 = '';
this.s5 = '';
this.winner = '';
//set distance covered for teams
this.distance = new Array();
//stats for match center
this.stats = new Stats();
}
function Key() {
this.key_id = '';
this.strength = '';
this.progress_match = '';
this.progress_s1 = '';
this.progress_s2 = '';
this.progress_s3 = '';
this.progress_s4 = '';
this.progress_s4 = '';
this.progress_perc_match = '';
this.progress_perc_s1 = '';
this.progress_perc_s2 = '';
this.progress_perc_s3 = '';
this.progress_perc_s4 = '';
this.progress_perc_s5 = '';
this.goal1 = '';
this.goal2 = '';
this.goal1_perc = '';
this.goal2_perc = '';
this.goal_reached_match = '';
this.goal_reached_s1 = '';
this.goal_reached_s2 = '';
this.goal_reached_s3 = '';
this.goal_reached_s4 = '';
this.goal_reached_s5 = '';
this.goaltext = '';
this.historytext = '';
this.graphtype = '';
}
// JavaScript file
function Court() { //COURT OBJECT DEFINITION
this.complete = false;
this.active= false; //boolean to tell if court is in use. Initialize court with it set to false;
this.cur_date='';
this.cur_time='';
this.speed_units='';
this.refresh_rate='';
this.rain_delay='';
this.qs_refresh_rate='';
this.event_id='';
this.round_id='';
this.court_id='';
this.match_id='';
this.statsDay='';
this.brackets='';
this.DSS="";
this.PT='';
this.RC='';
this.cur_serve='';
this.match_status='';
this.match_type='';
this.teams=new Array(new Team(), new Team());
this.serve_speed='';
this.serve_speed_kmh='';
this.serve_speed_mph='';
this.pointChange = false;
this.isQualsMatch = false;
this.isFast4Match = false;
this.match_duration='';
this.set_duration = new Array();
this.haskeys='';
this.haschallenges = '';
this.winners = new Array();
this.current_set = '';
this.relatedLink='';
this.dssLink='';
this.statsLink='';
this.videoLink='';
}
Court.prototype = {
getCourtID : function(val){ //returns event name from court object
var id="";
if(val == undefined)
val = this.court_id;
if(courtTranslation[val] != undefined)
id = courtTranslation[val];
//traceDebug("getCourtID: "+this.court_id + " | "+ id);
return id;
},
getEvent : function(){ //returns std event ID from court object
if(this.event_id){
var id;
var val = this.event_id;
switch(val){
case "A": id = "ms"; break;
case "B": id = "ws"; break;
case "C": id = "md"; break;
case "D": id = "wd"; break;
case "E": id = "xd"; break;
case "F": id = "bs"; break;
case "G": id = "gs"; break;
case "H": id = "bd"; break;
case "I": id = "gd"; break;
case "J": id = "qs"; break;
case "K": id = "ps"; break;
case "L": id = "qd"; break;
case "M": id = "ud"; break;
case "N": break;
case "O": break;
case "P": id = "cs"; break;
case "Q": id = "ds"; break;
case "R": id = "cd"; break;
case "S": id = "dd"; break;
case "T": id = "us"; break;
case "U": id = "ud"; break;
case "V": id = "ld"; break;
case "W": id = "ed"; break;
case "X": break;
case "Y": break;
case "Z": id = "js"; break;
default : break;
}
return id;
} else {
return false;
}
},
getEventName : function(){ //returns event name from court object
var id="";
var val = this.event_id;
if(eventNames[val] != undefined)
id = eventNames[val];
return id;
},
getMatchOver : function(){ //returns event name from court object
var id="";
switch(this.match_status){
case "A": id = "in progress"; break;
case "B": id = "in progress"; break;
case "C": id = "in progress"; break;
case "D": id = "in progress"; break;
case "E": id = "in progress"; break;
case "F": id = "complete"; break;
case "G": id = "complete"; break;
case "H": id = "complete"; break;
case "I": id = "complete"; break;
case "J": id = "complete"; break;
case "K": id = "complete"; break;
case "L": id = "complete"; break;
case "M": id = "complete"; break;
default : break;
}
return id;
},
getMatchStatus : function(x){ //returns event name from court object
var id="";
var val = this.match_status;
if(statusNames[val] != undefined)
id = statusNames[val];
if (x == "id"){
return id;
}
return val;
},
getPoints : function(team){ //returns event name from court object
var id="";
var val = this.teams[team-1].points;
//if(this.isFast4Match) {
//	id = val.substr(0,1);
//} else {
switch(val.substr(0,1)){
case "0": id = "0"; break;
case "1": id = "15"; break;
case "2": id = "30"; break;
case "3": id = "40"; break;
case "A": id = "AD"; break;
case "-": id = "-"; break;
default : break;
}
//}
return id;
},
/* if you pass true to this function, it will get the
* long round name, other wise it will get the
* shortened version
*/
getRoundName : function(long){
if(long){
var longname = long;
} else{
var longname = false;
}
var id="";
var val = this.round_id;
if(longname){
if(roundNamesLong[val] != undefined)
id = roundNamesLong[val];
} else {
if(roundNames[val] != undefined)
id = roundNames[val];
}
//traceDebug("getRoundName: "+this.round_id + " | "+ id);
return id;
},
getServer : function(){ //returns event name from court object
var id="";
switch(this.cur_serve){
case "A": id = 1; break; //player 1a
case "B": id = 2; break; //player 1b
case "C": id = 3; break; //player 2a
case "D": id = 4; break; //player 2b
default : break;
}
return id;
},
getSetScore : function(team,set){ //returns event name from court object
var id="";
var ch, code;
var diff;
var score;
var val = this.teams[team-1].set_scores;
var pos = (set-2)+set;
ch = val.substr(pos,1);
if (ch >= "A" && ch <= "Z"){
diff = 65;
}
else if (ch >= "a" && ch <= "z") {
diff = 71;
}
code = ch.charCodeAt();
code -= diff;
score = code;
return score;
},
getSetWinners : function(set){
//traceDebug('getSetWinners');
var maxsets;
this.teams[0].sets_won = 0;
this.teams[1].sets_won = 0;
if ("FGHIJKLM".indexOf(this.match_status) > -1){
maxsets = this.current_set+1;
} else {
maxsets = this.current_set;
}
for (var s=1; s<maxsets; s++){
var ss1 = this.getSetScore(1, s); // team 1 set score
var ss2 = this.getSetScore(2, s); // team 2 set score
var tb1 = this.getTiebreakScore(1,s); // team 1 tie break score
var tb2 = this.getTiebreakScore(2,s); // team 2 tie break score
if(tb1 == 0 && tb2 == 0){ // neither team has a tie break score so use set score to determine winner
if(ss1 > ss2){ this.teams[0].sets_won+=1; }
else if(ss2 > ss1){ this.teams[1].sets_won+=1; }
} else { // either team has a tie break score so use tie break score to determine winner
if(tb1 > tb2){ this.teams[0].sets_won+=1; }
else if(tb2 > tb1){ this.teams[1].sets_won+=1; }
}
}
},
getTiebreakComplete : function(team,set,tb){ // determine whether tiebreak has finished
if(team == 1)
tb2 = this.getTiebreakScore(2,set);
else if(team == 2)
tb2 = this.getTiebreakScore(1,set);
if(this.isFast4Match) {
if((tb >= 5 || tb2 >= 5) && Math.abs(tb-tb2) >= 1) {
return true;
} else {
return false;
}
} else {
if((tb >= 7 || tb2 >= 7) && Math.abs(tb-tb2) >= 2) {
return true;
} else {
return false;
}
}
},
getTiebreakScore : function(team,set){ //returns event name from court object
var id="";
var ch2, code2;
var diff2;
var score;
var val = this.teams[team-1].set_scores;
var pos = (set-2)+set;
ch2 = val.substr(pos+1,1)
if (ch2 >= "A" && ch2 <= "Z"){
diff2 = 65;
}
else if (ch2 >= "a" && ch2 <= "z") {
diff2 = 71;
}
code2 = ch2.charCodeAt();
code2 -= diff2;
return code2;
},
/** convenience function to determine doubles match **/
isDoubles : function() {
if (this.teams[0].players[1].tour_id != ""){
return true;
} else {
return false;
}
},
/**
* used by MIP and Slamtracker for xin messages,
* messagesight messages, polling messsages,
* and stat messages
*
* @params datastream, which
* datastream will be the scoring data
* file for polling (xml file)
* mess for xin/messagesight
* stat for stat messages
*/
loadData : function(datastream, which){ //assign data from topic to court object variables
//traceDebug('loadData: '+which+' | '+datastream);
//field number
if(which == 'stat'){
var fn=1;
} else {
var fn=0;
}
var load_data = datastream.split("|"); //place data string into array
if(which == 'file'){
this.event_id = load_data[fn]; fn++;
this.round_id = load_data[fn]; fn++;
this.court_id = load_data[fn]; fn++;
}
if(which == 'file' || which == 'mess'){
this.match_id = load_data[fn]; fn++;
this.cur_serve = load_data[fn]; fn++;
this.match_status = load_data[fn]; fn++;
this.statsDay = load_data[fn]; fn++;
this.brackets = load_data[fn]; fn++;
if(this.brackets == '2') {
this.isFast4Match = true;
}
}
if(which == 'file'){
tmp = load_data[fn].split(',');
this.teams[0].players[0].TVname = tmp[0];
this.teams[0].players[0].Fname = tmp[1];
if(tmp[2].indexOf('[') > -1){
this.teams[0].players[0].Lname = tmp[2].substring(0,tmp[2].indexOf('['));
this.teams[0].seed = tmp[2].substring(tmp[2].indexOf('['));
} else {
this.teams[0].players[0].Lname = tmp[2];
}
fn++;
tmp = load_data[fn].split(":");
this.teams[0].players[0].tour_id = tmp[0];
this.teams[0].players[0].cntry = tmp[1];
fn++;
tmp = load_data[fn].split(',');
this.teams[0].players[1].TVname = tmp[0];
this.teams[0].players[1].Fname = tmp[1];
if(tmp[2].indexOf('[') > -1){
this.teams[0].players[1].Lname = tmp[2].substring(0,tmp[2].indexOf('['));
} else {
this.teams[0].players[1].Lname = tmp[2];
}
fn++;
tmp = load_data[fn].split(":");
this.teams[0].players[1].tour_id = tmp[0];
this.teams[0].players[1].cntry = tmp[1];
fn++;
tmp = load_data[fn].split(',');
this.teams[1].players[0].TVname = tmp[0];
this.teams[1].players[0].Fname = tmp[1];
if(tmp[2].indexOf('[') > -1){
this.teams[1].players[0].Lname = tmp[2].substring(0,tmp[2].indexOf('['));
this.teams[1].seed = tmp[2].substring(tmp[2].indexOf('['));
} else {
this.teams[1].players[0].Lname = tmp[2];
}
fn++;
tmp = load_data[fn].split(":");
this.teams[1].players[0].tour_id = tmp[0];
this.teams[1].players[0].cntry = tmp[1];
fn++;
tmp = load_data[fn].split(',');
this.teams[1].players[1].TVname = tmp[0];
this.teams[1].players[1].Fname = tmp[1];
if(tmp[2].indexOf('[') > -1){
this.teams[1].players[1].Lname = tmp[2].substring(0,tmp[2].indexOf('['));
} else {
this.teams[1].players[1].Lname = tmp[2];
}
fn++;
tmp = load_data[fn].split(":");
this.teams[1].players[1].tour_id = tmp[0];
this.teams[1].players[1].cntry = tmp[1];
fn++;
}
if(which == 'file' || which == 'mess'){
this.teams[0].set_scores = load_data[fn]; fn++;
this.teams[1].set_scores = load_data[fn]; fn++;
this.current_set = this.teams[0].set_scores.length/2;
if(this.teams[0].points != load_data[fn] || this.teams[1].points != load_data[fn+1]){
this.pointChange = true;
}else{
this.pointChange = false;
}
if(load_data[fn+1] == 'A' && load_data[fn] == '3'){ // && lang == 'en_GB'
load_data[fn] = '-';
}
this.teams[0].points = load_data[fn]; fn++;
if(load_data[fn-1] == 'A' && load_data[fn] == '3'){ // && lang == 'en_GB'
load_data[fn] = '-';
}
this.teams[1].points = load_data[fn]; fn++;
this.serve_speed = load_data[fn];
tmp = this.serve_speed.split(",");
this.serve_speed_kmh = tmp[0];
this.serve_speed_mph = tmp[1];
fn++;
if(load_data[fn] != undefined && load_data[fn] != ""){
var bioPhotos = load_data[fn];
if(bioPhotos != undefined && bioPhotos != ""){
var photosArray = bioPhotos.split(",");
this.teams[0].players[0].bio_photo = (photosArray[0] == "1" ? true : false);
this.teams[0].players[1].bio_photo = (photosArray[1] == "1" ? true : false);
this.teams[1].players[0].bio_photo = (photosArray[2] == "1" ? true : false);
this.teams[1].players[1].bio_photo = (photosArray[3] == "1" ? true : false);
}
}
fn++;
this.teams[0].totalpoints = load_data[fn]; fn++;
this.teams[1].totalpoints = load_data[fn]; fn++;
if(load_data[fn] != '' && load_data[fn] != '0:0' && load_data[fn+1] != '' && load_data[fn+1] != '0:0'){
this.haschallenges = true;
var tmp = load_data[fn];
tmp = tmp.split(':');
this.teams[0].challenges_lost = tmp[0];
this.teams[0].challenges_total = tmp[1];
fn++;
var tmp = load_data[fn];
tmp = tmp.split(':');
this.teams[1].challenges_lost = tmp[0];
this.teams[1].challenges_total = tmp[1];
} else {
this.haschallenges = false;
//we need to add 2 here because there are 2 fields
fn++;
}
fn++;
this.match_type = load_data[fn]; fn++;
}
if(which == 'file' || which == 'stat'){
this.teams[0].ms = load_data[fn]; fn++;
this.teams[1].ms = load_data[fn]; fn++;
}
this.match_duration = load_data[fn]; fn++;
if(which == 'file' || which == 'stat'){
this.teams[0].set_stats[0] = load_data[fn]; fn++;
this.teams[1].set_stats[0] = load_data[fn]; fn++;
}
this.set_duration[0] = load_data[fn]; fn++;
if(which == 'file' || which == 'stat'){
this.teams[0].set_stats[1] = load_data[fn]; fn++;
this.teams[1].set_stats[1] = load_data[fn]; fn++;
}
this.set_duration[1] = load_data[fn]; fn++;
if(which == 'file' || which == 'stat'){
this.teams[0].set_stats[2] = load_data[fn]; fn++;
this.teams[1].set_stats[2] = load_data[fn]; fn++;
}
this.set_duration[2] = load_data[fn]; fn++;
if(which == 'file' || which == 'stat'){
this.teams[0].set_stats[3] = load_data[fn]; fn++;
this.teams[1].set_stats[3] = load_data[fn]; fn++;
}
this.set_duration[3] = load_data[fn]; fn++;
if(which == 'file' || which == 'stat'){
this.teams[0].set_stats[4] = load_data[fn]; fn++;
this.teams[1].set_stats[4] = load_data[fn]; fn++;
}
this.set_duration[4] = load_data[fn]; fn++;
//stats message
if(which == 'stat'){
if(this.match_type == 'K' && score_page != 'mobile' && score_page != 'ios_detail'){
this.teams[0].key1_text = load_data[fn]; fn++;
this.setKeyData(0,0,this.teams[0].key1_text);
this.teams[0].key2_text = load_data[fn]; fn++;
this.setKeyData(0,1,this.teams[0].key2_text);
this.teams[0].key3_text = load_data[fn]; fn++;
this.setKeyData(0,2,this.teams[0].key3_text);
this.teams[0].key4_text = load_data[fn]; fn++;
this.setKeyData(0,3,this.teams[0].key4_text);
this.teams[0].key5_text = load_data[fn]; fn++;
this.setKeyData(0,4,this.teams[0].key5_text);
this.teams[1].key1_text = load_data[fn]; fn++;
this.setKeyData(1,0,this.teams[1].key1_text);
this.teams[1].key2_text= load_data[fn]; fn++;
this.setKeyData(1,1,this.teams[1].key2_text);
this.teams[1].key3_text = load_data[fn]; fn++;
this.setKeyData(1,2,this.teams[1].key3_text);
this.teams[1].key4_text = load_data[fn]; fn++;
this.setKeyData(1,3,this.teams[1].key4_text);
this.teams[1].key5_text = load_data[fn]; fn++;
this.setKeyData(1,4,this.teams[1].key5_text);
} else {
fn=fn+10;
}
}
if(which == 'file' || which == 'stat'){
if(load_data[fn] != ''){
var tmp = load_data[fn].split(':');
var tmp1 = tmp[0].split(',');
this.teams[0].avg_first_serve_kmh = tmp1[0];
this.teams[0].avg_first_serve_mph = tmp1[1];
var tmp2 = tmp[1].split(',');
this.teams[0].avg_second_serve_kmh = tmp2[0];
this.teams[0].avg_second_serve_mph = tmp2[1];
var tmp3 = tmp[2].split(',');
this.teams[0].fastest_serve_kmh = tmp3[0];
this.teams[0].fastest_serve_mph = tmp3[1];
}
fn++;
if(load_data[fn] != ''){
var tmp = load_data[fn].split(':');
var tmp1 = tmp[0].split(',');
this.teams[1].avg_first_serve_kmh = tmp1[0];
this.teams[1].avg_first_serve_mph = tmp1[1];
var tmp2 = tmp[1].split(',');
this.teams[1].avg_second_serve_kmh = tmp2[0];
this.teams[1].avg_second_serve_mph = tmp2[1];
var tmp3 = tmp[2].split(',');
this.teams[1].fastest_serve_kmh = tmp3[0];
this.teams[1].fastest_serve_mph = tmp3[1];
}
fn++;
}
this.winners[0] = load_data[fn].charAt(0);
this.winners[1] = load_data[fn].charAt(1);
this.winners[2] = load_data[fn].charAt(2);
this.winners[3] = load_data[fn].charAt(3);
this.winners[4] = load_data[fn].charAt(4);
this.winners[5] = load_data[fn].charAt(5);
var t1_totalsets = 0;
var t2_totalsets = 0;
$.each(this.winners,function(i){
if(i > 0){
if(this == 1){t1_totalsets++;}
if(this == 2){t2_totalsets++;}
}
});
this.teams[0].sets_won = t1_totalsets;
this.teams[1].sets_won = t2_totalsets;
/*
* figure out how many sets each team has won based on set scores
* but only if we don't have the data from the stats message
*/
this.getSetWinners();
fn++;
if(which == 'file' || which == 'stat'){
//team 1 distance run
var tmp = load_data[fn].split(',');
this.teams[0].distance[0] = tmp[0]; //match
this.teams[0].distance[1] = tmp[1]; //set 1
this.teams[0].distance[2] = tmp[2]; //set 2
this.teams[0].distance[3] = tmp[3]; //set 3
this.teams[0].distance[4] = tmp[4]; //set 4
this.teams[0].distance[5] = tmp[5]; //set 5
fn++;
//team 2 distance run
var tmp = load_data[fn].split(',');
this.teams[1].distance[0] = tmp[0]; //match
this.teams[1].distance[1] = tmp[1]; //set 1
this.teams[1].distance[2] = tmp[2]; //set 2
this.teams[1].distance[3] = tmp[3]; //set 3
this.teams[1].distance[4] = tmp[4]; //set 4
this.teams[1].distance[5] = tmp[5]; //set 5
fn++;
//serve stats
this.teams[0].stats.serve_stats_match = load_data[fn]; fn++;
this.teams[1].stats.serve_stats_match = load_data[fn]; fn++;
this.teams[0].stats.serve_stats_s1 = load_data[fn]; fn++;
this.teams[1].stats.serve_stats_s1 = load_data[fn]; fn++;
this.teams[0].stats.serve_stats_s2 = load_data[fn]; fn++;
this.teams[1].stats.serve_stats_s2 = load_data[fn]; fn++;
this.teams[0].stats.serve_stats_s3 = load_data[fn]; fn++;
this.teams[1].stats.serve_stats_s3 = load_data[fn]; fn++;
this.teams[0].stats.serve_stats_s4 = load_data[fn]; fn++;
this.teams[1].stats.serve_stats_s4 = load_data[fn]; fn++;
this.teams[0].stats.serve_stats_s5 = load_data[fn]; fn++;
this.teams[1].stats.serve_stats_s5 = load_data[fn]; fn++;
//return stats
this.teams[0].stats.return_stats_match = load_data[fn]; fn++;
this.teams[1].stats.return_stats_match = load_data[fn]; fn++;
this.teams[0].stats.return_stats_s1 = load_data[fn]; fn++;
this.teams[1].stats.return_stats_s1 = load_data[fn]; fn++;
this.teams[0].stats.return_stats_s2 = load_data[fn]; fn++;
this.teams[1].stats.return_stats_s2 = load_data[fn]; fn++;
this.teams[0].stats.return_stats_s3 = load_data[fn]; fn++;
this.teams[1].stats.return_stats_s3 = load_data[fn]; fn++;
this.teams[0].stats.return_stats_s4 = load_data[fn]; fn++;
this.teams[1].stats.return_stats_s4 = load_data[fn]; fn++;
this.teams[0].stats.return_stats_s5 = load_data[fn]; fn++;
this.teams[1].stats.return_stats_s5 = load_data[fn]; fn++;
//rally stats
this.teams[0].stats.rally_stats_match = load_data[fn]; fn++;
this.teams[1].stats.rally_stats_match = load_data[fn]; fn++;
this.teams[0].stats.rally_stats_s1 = load_data[fn]; fn++;
this.teams[1].stats.rally_stats_s1 = load_data[fn]; fn++;
this.teams[0].stats.rally_stats_s2 = load_data[fn]; fn++;
this.teams[1].stats.rally_stats_s2 = load_data[fn]; fn++;
this.teams[0].stats.rally_stats_s3 = load_data[fn]; fn++;
this.teams[1].stats.rally_stats_s3 = load_data[fn]; fn++;
this.teams[0].stats.rally_stats_s4 = load_data[fn]; fn++;
this.teams[1].stats.rally_stats_s4 = load_data[fn]; fn++;
this.teams[0].stats.rally_stats_s5 = load_data[fn]; fn++;
this.teams[1].stats.rally_stats_s5 = load_data[fn]; fn++;
//dss stats
this.teams[0].stats.dss_stats = load_data[fn]; fn++;
this.teams[1].stats.dss_stats = load_data[fn];
if(this.teams[0].stats.dss_stats == "" && this.teams[1].stats.dss_stats == "") {
this.disableDSS = true;
}
}
//this.setData(this.statsDay,this.match_id,this.DSS,this.PT);
this.setData(this.statsDay,this.match_id,'','',this.RC);
},
loadMipData : function(datastream){
//traceDebug('loadMipData: '+datastream);
var load_data = datastream.split("|"); //place data string into array
this.court_id = load_data[0];
this.match_id = load_data[1];
this.event_id = load_data[2];
this.round_id = load_data[3];
//traceDebug('Round ID is: ' + this.round_id);
tmp = load_data[4].split(',');
this.teams[0].players[0].TVname = tmp[0];
this.teams[0].players[0].Fname = tmp[1];
if(tmp[2].indexOf('[') > -1){
this.teams[0].players[0].Lname = tmp[2].substring(0,tmp[2].indexOf('['));
this.teams[0].seed = tmp[2].substring(tmp[2].indexOf('['));
} else {
this.teams[0].players[0].Lname = tmp[2];
this.teams[0].players[0].seed = '';
}
tmp = load_data[5].split(":");
this.teams[0].players[0].tour_id = tmp[0];
this.teams[0].players[0].cntry = tmp[1];
tmp = load_data[6].split(',');
this.teams[0].players[1].TVname = tmp[0];
this.teams[0].players[1].Fname = tmp[1];
if(tmp[2].indexOf('[') > -1){
this.teams[0].players[1].Lname = tmp[2].substring(0,tmp[2].indexOf('['));
} else {
this.teams[0].players[1].Lname = tmp[2];
}
tmp = load_data[7].split(":");
this.teams[0].players[1].tour_id = tmp[0];
this.teams[0].players[1].cntry = tmp[1];
tmp = load_data[8].split(',');
this.teams[1].players[0].TVname = tmp[0];
this.teams[1].players[0].Fname = tmp[1];
if(tmp[2].indexOf('[') > -1){
this.teams[1].players[0].Lname = tmp[2].substring(0,tmp[2].indexOf('['));
this.teams[1].seed = tmp[2].substring(tmp[2].indexOf('['));
} else {
this.teams[1].players[0].Lname = tmp[2];
this.teams[1].players[0].seed = '';
}
tmp = load_data[9].split(":");
this.teams[1].players[0].tour_id = tmp[0];
this.teams[1].players[0].cntry = tmp[1];
tmp = load_data[10].split(',');
this.teams[1].players[1].TVname = tmp[0];
this.teams[1].players[1].Fname = tmp[1];
if(tmp[2].indexOf('[') > -1){
this.teams[1].players[1].Lname = tmp[2].substring(0,tmp[2].indexOf('['));
} else {
this.teams[1].players[1].Lname = tmp[2];
}
tmp = load_data[11].split(":");
this.teams[1].players[1].tour_id = tmp[0];
this.teams[1].players[1].cntry = tmp[1];
if($.inArray(this.event_id,quals_events) > -1){
this.isQualsMatch = true;
}
if(score_page == 'slamtracker'){
if(this.teams[0].players[0].TVname.indexOf('[') > -1){this.teams[0].players[0].TVname = this.teams[0].players[0].TVname.substring(0,this.teams[0].players[0].TVname.indexOf('['));}
if(this.teams[0].players[1].TVname.indexOf('[') > -1){this.teams[0].players[1].TVname = this.teams[0].players[1].TVname.substring(0,this.teams[0].players[1].TVname.indexOf('['));}
if(this.teams[1].players[0].TVname.indexOf('[') > -1){this.teams[1].players[0].TVname = this.teams[1].players[0].TVname.substring(0,this.teams[1].players[0].TVname.indexOf('['));}
if(this.teams[1].players[1].TVname.indexOf('[') > -1){this.teams[1].players[1].TVname = this.teams[1].players[1].TVname.substring(0,this.teams[1].players[1].TVname.indexOf('['));}
}
},
setData : function(day,id,dss,pt,rc){
var prefix = "/" + lang + "/scores/";
//if (day != "")
//this.statsLink = prefix + "stats/day" + day + "/" + id+ "ms.html";
this.statsLink = prefix + "stats/" + id+ "ms.html";
//else
//	this.statsLink = "";
if (rc !== undefined && rc !== "") {
this.relatedLink = prefix + "match_related/" + id + "mr.html";
} else {
this.relatedLink = "";
}
},
setKeyData : function(t,k,keytext){
//traceInfo('setKeyData: keytext = '+keytext);
var tmp = keytext.split(':');
if(tmp.length > 1) {
this.teams[t].keys[k].key_id = tmp[0]; //set key id
this.teams[t].keys[k].strength = tmp[1]; //set key strength
var current_tmp = tmp[2].split(','); //create array of current values
this.teams[t].keys[k].current_match = current_tmp[0]; //set current value for match
this.teams[t].keys[k].current_s1 = current_tmp[1]; //set current value for set 1
this.teams[t].keys[k].current_s2 = current_tmp[2]; //set current value for set 2
this.teams[t].keys[k].current_s3 = current_tmp[3]; //set current value for set 3
this.teams[t].keys[k].current_s4 = current_tmp[4]; //set current value for set 4
this.teams[t].keys[k].current_s5 = current_tmp[5]; //set current value for set 5
var current_perc_tmp = tmp[3].split(','); //create array of current percent values
this.teams[t].keys[k].current_perc_match = current_perc_tmp[0]; //set current percent value for match
this.teams[t].keys[k].current_perc_s1 = current_perc_tmp[1]; //set current percent value for set 1
this.teams[t].keys[k].current_perc_s2 = current_perc_tmp[2]; //set current percent value for set 2
this.teams[t].keys[k].current_perc_s3 = current_perc_tmp[3]; //set current percent value for set 3
this.teams[t].keys[k].current_perc_s4 = current_perc_tmp[4]; //set current percent value for set 4
this.teams[t].keys[k].current_perc_s5 = current_perc_tmp[5]; //set current percent value for set 5
var goal_tmp = tmp[4].split(',');
this.teams[t].keys[k].goal1 = goal_tmp[0]; //set goal 1 value
this.teams[t].keys[k].goal2 = goal_tmp[1]; //set goal 2 value
var goal_perc_tmp = tmp[5].split(',');
this.teams[t].keys[k].goal1_perc = goal_perc_tmp[0]; //set goal 1 percent value
this.teams[t].keys[k].goal2_perc = goal_perc_tmp[1]; //set goal 2 percent value
var goal_reached_tmp = tmp[6].split(',');
this.teams[t].keys[k].goal_reached_match = goal_reached_tmp[0]; //set goal reached value for match
this.teams[t].keys[k].goal_reached_s1 = goal_reached_tmp[1]; //set goal reached value for set 1
this.teams[t].keys[k].goal_reached_s2 = goal_reached_tmp[2]; //set goal reached value for set 2
this.teams[t].keys[k].goal_reached_s3 = goal_reached_tmp[3]; //set goal reached value for set 3
this.teams[t].keys[k].goal_reached_s4 = goal_reached_tmp[4]; //set goal reached value for set 4
this.teams[t].keys[k].goal_reached_s5 = goal_reached_tmp[5]; //set goal reached value for set 5
//get goal text from look up table and replace values with goal values from data
var tmp_lookup_val = keyText[this.teams[t].keys[k].key_id];
var tmp_lookup = tmp_lookup_val.split("|");
//if one of these specific goals, remove the .0 from the value and add MPH in the goal text
if(tmp[0] == 67 || tmp[0] == 68 || tmp[0] == 69){
if(this.teams[t].keys[k].goal1.indexOf('.') > -1){this.teams[t].keys[k].goal1 = this.teams[t].keys[k].goal1.substring(0,this.teams[t].keys[k].goal1.indexOf('.'))+' MPH';}
if(this.teams[t].keys[k].goal2.indexOf('.') > -1){this.teams[t].keys[k].goal2 = this.teams[t].keys[k].goal2.substring(0,this.teams[t].keys[k].goal2.indexOf('.'))+' MPH';}
}
this.teams[t].keys[k].goaltext = tmp_lookup[0];
this.teams[t].keys[k].goaltext = this.teams[t].keys[k].goaltext.replace('[GOAL1]',this.teams[t].keys[k].goal1);
if(this.teams[t].keys[k].goaltext.indexOf('[GOAL2]') > -1){
this.teams[t].keys[k].goaltext = this.teams[t].keys[k].goaltext.replace('[GOAL2]',this.teams[t].keys[k].goal2);
}
this.teams[t].keys[k].graphtype = tmp_lookup[3];
}
},
setKeyHistoryData : function(data){
var team_num;
var key_num;
var win_pct;
var history_string;
var this_crt = this;
$(data).find('Key_to_the_Match').each(function(x,val) {
if($(this).find('Player_Id').text() == this_crt.teams[0].players[0].tour_id){
team_num = 0;
} else if ($(this).find('Player_Id').text() == this_crt.teams[1].players[0].tour_id){
team_num = 1;
}
key_num = parseInt($(this).find('Key_Id').text()) - 1;
win_pct = $(this).find('Meets_Key').find('Percent_of_Sets_Won').find('Value').text();
win_pct = Math.round(parseInt(win_pct));
history_string = this_crt.teams[team_num].players[0].Lname + ' ' + lookup['has_won']+ ' ' + win_pct + lookup['pct_of_sets'] + '.';
this_crt.teams[team_num].keys[key_num].historytext = history_string;
});
}
}