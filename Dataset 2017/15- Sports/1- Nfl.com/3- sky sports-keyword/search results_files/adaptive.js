/*global nfl,YUI,Modernizr,s*/

// set up global navigation
nfl.use("nfl-layout", "node", function (Y) {
  var layout = Y.NFL.getLayout(),
    win = Y.config.win,
    hd = Y.one("#hd"),
	scorestrip = Y.one('#scorestrip'),
    currentBreakpoint,
    qlTeams = Y.one("#quick-links-teams"),
    navToggle = Y.one("#main-nav-btn"),
    enableMobileNav = function () {
      // avoid race conditions caused by asyncronous loads
      if ("base" !== currentBreakpoint && currentBreakpoint !== "tablet") {
        return;
      }
      if(hd) {
        hd.plug(Y.NFL.MobileNav.Plugin, {
          logo: "#hd .logo",
          siteWrapper: "#wrap",
          mainContent: "#doc",
          primaryNav: "#main-nav",
          secondaryNav: "#secondary-nav",
          signInButton: "#user-greeting",
          toggle: Y.one("#main-nav-btn"),
          open: Boolean(win.mobilenavopen)
        });
	  }

      if (qlTeams) {
        qlTeams.removeAttribute("onclick");
        qlTeams.on("click", function (e) {
          e.halt();
          showTeamSelect();
        });
      }
      if (navToggle) {
        navToggle.one("a").removeAttribute("onclick");
      }

      // this will be true if the team link was clicked before JS was loaded
      if (win.qlteamclick) {
        showTeamSelect();
        delete Y.config.win.qlteamclick;
      } else if (win.mobilenavopen) {
        delete win.mobilenavopen;
      }
	  if(scorestrip){
	    scorestrip.addClass('overthrow');
	  }
    },
    enableDropDowns = function () {
      // avoid race conditions caused by asyncronous loads
      if ("full" !== currentBreakpoint) {
        return;
      }
	  if(hd) {
        hd.plug(Y.NFL.DesktopNav.Plugin, {
          primaryNav: "#main-nav",
          secondaryNav: "#secondary-nav",
          signInButton: "#user-greeting",
          announcements: "#announcements"
        });
      }

      if(scorestrip){
	    scorestrip.removeClass('overthrow');
      }
    },
    onBreakpointChange = function (e) {
      //console.log(e.type, e.prevVal, "-->", e.newVal);
      currentBreakpoint = e.newVal;
      var moduleMap = {
        "base": "nfl-mobilenav-plugin",
        "tablet": "nfl-mobilenav-plugin",
        "full": "nfl-desktopnav"
      };
      var module = moduleMap[currentBreakpoint];
      var callback = module === "nfl-mobilenav-plugin" ? enableMobileNav : enableDropDowns;

      if (module !== this.currentModule) {
    	  Y.use(module, function(){
    	   	// make sure to unplug previous plugin after the css for the next plugin is ready,
    		  // otherwise you see a flash of un-styled element first time breakpoint switches.
          if (hd && hd.nav) {
    		    hd.nav.close && hd.nav.close({anim: false});
              hd.unplug("nav");
            }
      		  callback();
        });
        this.currentModule = module;
      }
    },
    showTeamSelect = function() {
      Y.use("nfl-team-modal", function () {
        var modal = new Y.NFL.TeamModal({
            config: Y.NFL.TeamModal.generateConfig("#"),
            render: true
          });
        modal.on("teamClick", function (e) {
          var teamAbbr = e.modal.team,
            teamObj = teamAbbr && Y.NFLTeams[teamAbbr];
          e.halt();
          modal.destroy();
          if (teamObj) {
            Y.config.win.location = teamObj.get("teamPage");
          }
        });
        modal.on("cancel", modal.destoy, modal);
      });
    };
layout.get("breakpoint")
  layout.after("breakpointChange", onBreakpointChange);  //changes adaptive to responsive NEEDS WORK
  onBreakpointChange({ type: "initial load", newVal: layout.get("breakpoint") });

});
