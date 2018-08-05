// locale specific override settings, previously located in mip_main.js
var usesGms = false;
var usesSet5 = true;
var usesHeaders = true;
var usesStatusBar = true;
var usesChallenges = true;
var useCounter = false;
var usePlayerFlags = false;
var usePlayerPhotos = false;
var usePlayerBio = true;
var useBackgrounds = false;
var useAds = false;
var usePromo = false;
var useRelatedContent = true; //set this flag to true to use the related content functionality
var st_polling = false; //set this flag to true to force polling for SlamTracker
var st_pubsub = false; //set this flag to true to force pubsub for SlamTracker
var st_messagesight = false; //set this flag to true to force messagesight for SlamTracker
var useKeysHovers = true;
var eng = true;
var imgInd = "_e";
var langInd = "0";
var bioLinks = true;
var unit = "metric";
var show_courts = new Array('A','B','C','D','E');
var stat_courts = 'ABCDEHJ';
var TenPtTieBreakEvents = "EHI"; //Mixed Doubles (xd), Boys Doubles (bd) , Girls Doubles(gd)
var startX, startY = 0;
var statsText = "Match Stats";
var dssText = "Serve Stats";
var stText = "IBM Slamtracker";
var videoText = "Watch Live";
var relatedIcon = false;
var statsIcon = true; // toggles match stats link on mip page
var dssIcon = false;
var stIcon = false; // toggles SlamTracker link on mip page
var videoIcon = true; //toggles video link on mip page
var playerImagePath = "/images/players";
// message text variables
var matchMsg1 = "No Matches in Progress";
var matchMsg2 = " for<br>Your Current Selection";
var loadMsg = "Loading Data...";
var errorMsg = "Error Loading Data.";
var flashVerMsg = "Flash 10 is required to view live scoring pages.<br>Please <a href=\"/en_AU/flashupgrade.html?fl=false\">update your Flash player</a>,<br>or visit our alternate <a href=\"/en_AU/scores/index2.html\">HTML scores page page</a>."
var browserVerMsg = "This application requires features of Flash 10 only supported on the following browsers:<br>&nbsp;&nbsp;Internet Explorer 5.0 and higher<br>&nbsp;&nbsp;Netscape 8.0 and higher<br>&nbsp;&nbsp;Mozilla 1.7.5 and higher<br>&nbsp;&nbsp;Firefox 1.0 and higher<br>&nbsp;&nbsp;Opera 9 and higher<br>&nbsp;&nbsp;Safari 1.3 and higher<br>&nbsp;&nbsp;SeaMonkey 1.1 and higher<br><br>Please use one of these browsers or view our alternate <a href='/en_AU/scores/index2.html'>HTML scores page</a>.<br><br>";
var errorLink = "If this error persists, please visit our alternate <a href='/en_AU/scores/index.manual.html?refresh=ELD'>html scores page</a>.";
// event array variables
var quals_events = new Array('J','K','L','M','N','O');
var doubles_events = new Array('C','D','E','H','I','R','S','U','V','W','X');

var completed_status = new Array('F','G','H','I','J','K','L','M');
var sentiment_events = new Array('A','B'); // men's and women's singles only
var fast4_events = new Array('V','X'); // men's and women's legends' doubles
var eventNames = new Object();
eventNames['A'] = "Men's Singles";
eventNames['B'] = "Women's Singles";
eventNames['C'] = "Men's Doubles";
eventNames['D'] = "Women's Doubles";
eventNames['E'] = "Mixed Doubles";
eventNames['F'] = "Junior Boys' Singles";
eventNames['G'] = "Junior Girls' Singles";
eventNames['H'] = "Junior Boys' Doubles";
eventNames['I'] = "Junior Girls' Doubles";
eventNames['J'] = "Men's Qual Singles";
eventNames['K'] = "Women's Qual Singles";
eventNames['P'] = "Men's WC Singles";
eventNames['Q'] = "Women's WC Singles";
eventNames['R'] = "Men's WC Doubles";
eventNames['S'] = "Women's WC Doubles";
eventNames['T'] = "Quad WC Singles";
eventNames['U'] = "Quad WC Doubles";
eventNames['V'] = "Men's Legends Doubles";
eventNames['W'] = "Exhibition Doubles";
eventNames['X'] = "Women's Legends Doubles";
eventNames['Y'] = "Exhibition";
eventNames['Y'] = "WC Wildcard Playoff";

//have to do a to lowercase before calling this translation
var eventTranslation = new Object();
eventTranslation['ms'] = "A";
eventTranslation['ws'] = "B";
eventTranslation['md'] = "C";
eventTranslation['wd'] = "D";
eventTranslation['xd'] = "E";
eventTranslation['bs'] = "F";
eventTranslation['gs'] = "G";
eventTranslation['bd'] = "H";
eventTranslation['gd'] = "I";
eventTranslation['qs'] = "J";
eventTranslation['ps'] = "K";
eventTranslation['cs'] = "P";
eventTranslation['ds'] = "Q";
eventTranslation['cd'] = "R";
eventTranslation['dd'] = "S";
eventTranslation['us'] = "T";
eventTranslation['ud'] = "U";
eventTranslation['ld'] = "V";
eventTranslation['ed'] = "W";
eventTranslation['zd'] = "X";
eventTranslation['es'] = "Y";
eventTranslation['js'] = "Y";

var roundNames = new Object();
roundNames['1'] = "Round 1";
roundNames['2'] = "Round 2";
roundNames['3'] = "Round 3";
roundNames['4'] = "Round 4";
roundNames['Q'] = "QF";
roundNames['S'] = "SF";
roundNames['F'] = "Final";
roundNames['RR'] = "RR";

var statusNames = new Object();
statusNames['A'] = "Players Warming Up";
statusNames['B'] = "Match In Progress";
statusNames['C'] = "Rain Delay";
statusNames['D'] = "Play Suspended";
statusNames['E'] = "Heat Delay";
statusNames['F'] = "Match Completed";
statusNames['G'] = "Match Completed";
statusNames['H'] = "Retired";
statusNames['I'] = "Retired";
statusNames['J'] = "Default";
statusNames['K'] = "Default";
statusNames['L'] = "Walkover";
statusNames['M'] = "Walkover";
statusNames['X'] = "Players Arrive on Court";
statusNames['Y'] = "Players Warming Up";
// define available courts
var courtTranslation = new Object();
courtTranslation['A'] = "RLA";
courtTranslation['B'] = "MCA";
courtTranslation['C'] = "Hisense Arena";
courtTranslation['D'] = "Show Court 2";
courtTranslation['E'] = "Show Court 3";
courtTranslation['F'] = "Court 4";
courtTranslation['G'] = "Court 5";
courtTranslation['H'] = "Court 6";
courtTranslation['I'] = "Court 7";
courtTranslation['J'] = "Court 8";
courtTranslation['K'] = "Court 9";
courtTranslation['L'] = "Court 10";
courtTranslation['M'] = "Court 11";
courtTranslation['N'] = "Court 12";
courtTranslation['O'] = "Court 13";
courtTranslation['P'] = "Court 14";
courtTranslation['Q'] = "Court 15";
courtTranslation['R'] = "Court 16";
courtTranslation['a'] = "Court 17";
courtTranslation['b'] = "Court 18";
courtTranslation['c'] = "Court 19";
courtTranslation['d'] = "Court 20";
courtTranslation['e'] = "Court 21";
courtTranslation['f'] = "Court 22";
courtTranslation['g'] = "Indoor Crt 1";
courtTranslation['h'] = "Indoor Crt 2";
courtTranslation['i'] = "TBA";
courtTranslation['j'] = "TBA";
courtTranslation['k'] = "TBA";

var statsTranslation = new Object();
statsTranslation['first_srvs_in'] = "1st Serves In|0"; //0
statsTranslation['first_srv_pts_won'] = "1st Serve Points Won|1"; //1
statsTranslation['first_srvs'] = "1st Serves|2"; //2
statsTranslation['first_srv_pct'] = "1st Serve Percentage|3"; //3
statsTranslation['win_pct_first_srv'] = "Win % on First Serve|4"; //4
statsTranslation['second_srv_pts_won'] = "2nd Serve Points Won|5"; //5
statsTranslation['second_srvs'] = "2nd Serves|6"; //6
statsTranslation['second_srv_pct'] = "2nd Serve Percentage|7"; //7
statsTranslation['win_pct_second_srv'] = "Win % on Second Serve|8"; //8
statsTranslation['aces'] = "Aces|9"; //9
statsTranslation['double_faults'] = "Double Faults|10"; //10
statsTranslation['winners'] = "Winners|11"; //11
statsTranslation['unforced_errors'] = "Unforced Errors|12"; //12
statsTranslation['brk_pts_won'] = "Break Points Won|13"; //13
statsTranslation['brk_pts'] = "Break Points|14"; //14
statsTranslation['brk_pt_conv_pct'] = "Break Point Conversion %|15"; //15
statsTranslation['net_pts_won'] = "Net Points Won|16"; //16
statsTranslation['net_approackes'] = "Net Approaches|17"; //17
statsTranslation['net_approaches_pct'] = "Net Approaches %|18"; //18
statsTranslation['rec_pts_won'] = "Receiving Points Won|19"; //19
var court_list = new Array();
//declare court objects
try {
$.each(courtTranslation, function(k,v) {
if(v != ""){
if(score_page == "slamtracker") {
courts[k] = new ScoresMatch();
} else {
courts[k] = new Court();
}
court_list[court_list.length] = k; //array of court letters, court name, array of courts w/boolean (true if in use)
}
});
} catch (e) {
// traceError('ERROR: error while initializing court objects and updating court_list array - '+e);
}
