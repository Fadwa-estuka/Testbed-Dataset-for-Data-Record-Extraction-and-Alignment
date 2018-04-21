
        if (!window.LL_Deployment)
            var LL_Deployment = { };
        LL_Deployment.version = "20161214";
        LL_Deployment.release = "RELY";
        LL_Deployment.getRelease = function () {
                return LL_Deployment.release.replace('.', '').toLowerCase();
        };
        
            LL_Deployment.debugLevel = 100;
         
        LL_Deployment.siteCode = "NIKE:SC53779276:US:2";
        LL_Deployment.launchPoint = {
	            type: 2,
                
                elementId: "ShareScreen"
        };
        LL_Deployment.containers = {
            global: "https://8f544770ae5b7cfb8345-6636004133269479b2733e2a336860f6.ssl.cf2.rackcdn.com/",
            private: "https://216a497680152ed22e52-01d6a426a21216ea0f0f91a356c3fa59.ssl.cf2.rackcdn.com/llscripts/"
        };
        LL_Deployment.scriptServerPath = "//www.livelook.com"; //for aspx files
        LL_Deployment.dataServerPath = "//www.livelook.com"; //for storage interface

        LL_Deployment.icbConfig = {
            
                icbMode: true,
                hostEngineURL: undefined
            
        };
        LL_Deployment.acbConfig = {
            
                restrictionGroup: "NONE",
                acbUrls: [],
                Mac_ACB_OS_Versions: "10.9+",
                
                acbMacMode: true,
                
                acbNetMode: true,
                
                acbWinMode: true,
                
                acbMode: true
            
        };
        LL_Deployment.UI = {
            type: undefined,
            defaultLanguage: "1033",
            language: undefined, 
            customizedUI: {"1033":1}, //from the DB
            mapLangToLCID: function (lang) { 
                var mapping = {"bg":1026,"bg-bg":1026,"cs":1029,"cs-cz":1029,"da":1030,"da-dk":1030,"de":1031,"de-de":1031,"el":1032,"el-gr":1032,"en":1033,"en-us":1033,"en-gb":2057,"es":3082,"es-es":3082,"et":1061,"et-ee":1061,"fi":1035,"fi-fi":1035,"fr":1036,"fr-fr":1036,"fr-ca":3084,"hr":1050,"hr-hr":1050,"hu":1038,"hu-hu":1038,"it":1040,"it-it":1040,"ja":1041,"ja-jp":1041,"ko":1042,"ko-kr":1042,"lt":1063,"lt-lt":1063,"lv":1062,"lv-lv":1062,"nb":1044,"nb-no":1044,"nl":1043,"nl-nl":1043,"pl":1045,"pl-pl":1045,"pt":1046,"pt-br":1046,"ro":1048,"ro-ro":1048,"ru":1049,"ru-ru":1049,"sl":1060,"sl-si":1060,"sr":2074,"sr-cyrl-cs":3098,"sr-latn-cs":2074,"sv":1053,"sv-se":1053,"tr":1055,"tr-tr":1055,"uk":1058,"uk-ua":1058,"zh":1028,"zh-tw":1028,"zh-cn":2052,"zh-hk":3076};            
                return lang == parseInt(lang) ? ("" + lang) : ("" + mapping[lang.toLowerCase()]);
            },
            getUIPath: function (LCID) {
                var lang = LCID ? LCID : LL_Deployment.UI.language;
                var isCustom = typeof (LL_Deployment.UI.customizedUI[lang]) !== "undefined";
                var path;
                if(isCustom)
                    path = LL_Deployment.containers.private; /*TODO: fix private paths*/
                else
                    path = LL_Deployment.containers.global + "/";
            
                if(typeof(LCID) !== "undefined"){
                    
                        path += (isCustom) ? "/ui/" + LCID + ".js" : LL_Deployment.getRelease() + "/client/ui/default/white/" + LCID + ".js";
                    
                }
                else
                    path = path.replace("/webinterfaces/icb", "");
                return path;
            }
        };

        LL_Deployment.init = function () {
            LL_Session.currentState.change(LL_Session.states.INIT);
            
                LL_Deployment.icbConfig.hostEngineURL = LL_Deployment.containers.global + "/" + LL_Deployment.getRelease() + "/engine.js";
            
            LL_Deployment.UI.type = LL_Deployment.launchPoint.type;

            var launcherURL, requestedLang, requestedVersion,
                scriptTags = document.getElementsByTagName('script');
            for (var i = 0; i < scriptTags.length; i++) {
                //TODO: full launcher URL is required, or at least we must check deployment path/deployment domain
                if (scriptTags[i].src && scriptTags[i].src.toLowerCase().indexOf('/launcher.js') != -1) {
                    launcherURL = scriptTags[i].src;
                    break;
                }
            }

            if (launcherURL) {
                var vars = [], hash, hashes = launcherURL.slice(launcherURL.indexOf('?') + 1).split('&');
                for (var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0].toLowerCase()] = hash[1];
                }

                if (vars['lang'])
                    requestedLang = LL_Deployment.UI.mapLangToLCID(vars['lang']);

                if (vars['version'])
                    requestedVersion = vars['version'];
            }

            if (!requestedLang)
                requestedLang = LL_Deployment.UI.defaultLanguage;

            if (LL_Deployment.UI.language !== requestedLang)
                LL_Deployment.UI.language = requestedLang;

            if (requestedVersion && requestedVersion.toUpperCase() === "EDGE")
                LL_Deployment.release = requestedVersion;

            var startCobrowseLauncher = function () {
                //start global launcher when launcher module is loaded
                var launcher_loaded = window.LL_Cobrowse_Launcher;
                if (launcher_loaded)
                    LL_Cobrowse_Launcher.init(true);
            };

            var globalLauncherPath = "https://8f544770ae5b7cfb8345-6636004133269479b2733e2a336860f6.ssl.cf2.rackcdn.com//rely/global_launcher_acb.js";

            LL_Utils.require("LL_Cobrowse_Launcher", globalLauncherPath, startCobrowseLauncher,
                function (message) { if (window.console && console.error) console.error("Cobrowse launcher failed to load: ", message); });

            if (!window.LL_CustomUI || LL_CustomUI.language != requestedLang) {
                window["LL_CustomUI_" + LL_Deployment.UI.defaultLanguage] = LL_CustomUI;
                LL_CustomUI = undefined;
                var UI_path = LL_Deployment.UI.getUIPath(requestedLang);
                LL_Utils.require("LL_CustomUI", UI_path, null,
                    function (message) { if (window.console && console.error) console.error("Cobrowse launcher failed to load: ", message); });
            }
        }

        try {
            LL_customFunctions = null;
        }
        catch (ex) {}

        if (window.LL_CustomUI && (LL_CustomUI.siteCode !== LL_Deployment.siteCode || LL_CustomUI.language !== "1033"))
            LL_CustomUI = undefined;
        LL_CustomUI = window.LL_CustomUI || {"activateText":"Expert would like to activate Advanced Co Browsing","activateWindowOK":"OK","partialSupportedText":"You are using a browser that is not yet fully supported. Some features may not work well, but you are welcome to have a look around.","partialSupported_font_family":"Trebuchet MS","partialSupported_font_size":"14","partialSupported_background_color":"ffffff","partialSupported_width":"280","partialSupported_height":"177","partialSupported_text_color":"444444","syncIsLostText":"The customer closed the session, or navigated to a page which does not support co browse. When the customer returns, co browse will resume.","syncIsLostText_font_family":"Trebuchet MS","syncIsLostText_font_size":"14","syncIsLostText_background_color":"ffffff","syncIsLostText_width":"280","syncIsLostText_height":"177","syncIsLostText_color":"444444","takingOutsideText":"This link will take you outside of the co-browsing session. To open it in a new browser window ","clickHereText":"click here","V4LLPanel_redirect_popup_font_family":"Trebuchet MS","V4LLPanel_redirect_popup_width":"280","V4LLPanel_redirect_popup_height":"120","V4LLPanel_redirect_popup_background":"ffffff","V4LLPanel_redirect_popup_text_color":"444444","V4LLPanel_redirect_popup_text_font_size":"12","greeting":"<p><strong>Need Help?</strong></p><p>You're just a few steps away from enjoying a new experience that lets our experts browse the site with you to better assist and guide you.</p>","altGreeting":"&nbsp;","startButton":"Start","privacyHeader":"Your privacy is important to us","privacyText":"Co-browse is a secure service governed by our <a target=\"_blank\" href=\"\">Privacy Policy.</a>","leaveFeedback":"Please leave feedback","getInstantHelp":"Get Instant Help!","v3PleaseWait":"Please wait...","v3ToolTip":"","v3toProceedClickButton":"<center>To proceed click the button below.</center>","v3PassCodeGenerated":"Passcode generated.","v3SessionIsOver":"Session ended","v3ServersBusy":"<span style='text-size:12px;font-weight:bold'>All servers are busy.</span>","v3TryLater":"<span style='text-size:12px;font-weight:normal;text-align:left;'>Service is temporary unavailable. Please try again later. Thank you for your patience.</span>","v3SessionTimedOut":"Your session timed out.","v3CloseWindowNotice":"You can now close this window","v3CodeInstructions":"After you provide the code to company Expert click the button below.","v3ReturnToWebsiteButton":"Return to Website","v3ProceedButton":"Activate session","v3InstantHelp":"Instant Help","v3AgentsOffline":"Agents are not available to assist at this time. Please call during the office hours listed below.","v3Unavailable":"We apologize for the inconvenience, but this service is unavailable at the moment.","v3ClientProgressBar_hint_0":"Establishing secure connection...","v3ClientProgressBar_hint_1":"Do not close this window.","v3ClientProgressBar_hint_2":"Do not close this window. It will minimize automatically.","v3ClientProgressBar_hint_3":"Expert connected","v3ClientProgressBar_hint_4":"Please minimize this window but do not close it.","v3SessionCouldNotBeStarted":"Session could not be started.","v3SessionCouldNotBeActivated":"Session could not be activated.","v3SessionEndedOldJava":"<span style='font-size:18px;line-height:24px;font-weight:normal;'>This session is unable to connect. Co-browsing requires an up-to-date Java environment. Please consider updating your Java to <a href='https://www.java.com/' target='_blank'>the most recent version</a> in order to co-browse.</span>","v3CallExpert":"","v3ProvidePassCode":"","v3GeneratingPassCode":"Generating passcode","v3ClickRun":"Click <b>Run</b> or <b>Yes</b> if prompted.","v3AgentConnecting":"<b>Agent is connecting... please do not close this window.</b>","v3EstablishingConnection":"<b>Establishing secure connection.</b><br /> Please do not close this window.","v3CertAccepted":"Agent will see your page momentarily... please do not close this window. <br /><br />This window will automatically minimize when the agent is connected.","v3MinimizeNow":"Minimize now","v3CertRejected_1":"Important!\\n\\nPlease accept the Java certificate.\\n\\nIt verifies the identity of the service provider, and gives others permission to view your screen.\\n\\nNo software will be installed onto your computer.","v3CertRejected_2":"Since you rejected Java Certificates, Visual Sharing is now disabled.\\n\\nTo enable it please close all browser windows and start over.","V3FirefoxPluginIcon_text_part1":"If you see a","V3FirefoxPluginIcon_text_part2":"&nbsp;icon, click it to activate the Java plugin","v3ChromeTip":"If you see <strong>\"Run this time\"</strong> or <strong>\"Always run on this site\"</strong> button above, click it.","V3Activating_text":"Activating...","v3Chrome37TooltipTextFirstPart":"If you see <strong>\"Plug-in blocked\"</strong> ","v3Chrome37TooltipTextSecondPart":"icon, click it, select <strong>\"Always allow\"</strong> and press <strong>\"Done\"</strong>","CDelay_text":"To activate advanced Co Browsing, please accept the <em>security certificate</em> by clicking <span>\"Run\"</span>.","CDelay_redisplay_certificate":"Redisplay security certificate","CDelay_terminate_1":"To terminate this session&nbsp;","CDelay_terminate_2":"click here","reactive_headerBranding":"Browse the website with an Expert","reactive_buttonLabel":"Initiate","reactive_pageTitle":"Get Instant Help!","ht_waitingAgent":"Waiting for agent to connect","ht_agentCanSeeScreen":"Agent can now see your screen","ht_endSessionMessage":"Are you sure you want to end this session?","activateText_font_family":"Tahoma","activateText_font_size":"23","activateText_color":"000000","activateACBButton_width":"159","activateACBButton_font_family":"Tahoma","activateACBButton_font_size":"23","activateACBButton_color":"000000","activateACBButton_text_hover":"ffffff","V4LLPanel_CollapsedNarrowNoAgent_width":"157","V4LLPanel_CollapsedNarrowNoAgent_height":"36","V4LLPanel_CollapsedNarrowNoAgent_right":"16","V4LLPanel_CollapsedNarrowNoAgent_bottom":"0","ADA_compliance":"true","V4LLPanel_CollapsedNumContNarrow_font_family":"Tahoma","V4LLPanel_CollapsedNumContNarrow_font_size":"14","V4LLPanel_CollapsedNumContNarrow_color":"444444","V4LLPanel_HintBlock_width":"157","V4LLPanel_HintBlock_height":"78","V4LLPanel_HintBlock_right":"16","V4LLPanel_HintBlock_FirstLineText":"Browse together","V4LLPanel_HintBlock_FirstLineText_font_family":"Trebuchet MS","V4LLPanel_HintBlock_FirstLineText_font_size":"14","V4LLPanel_HintBlock_FirstLineText_font_weight":"bold","V4LLPanel_HintBlock_FirstLineText_font_style":"normal","V4LLPanel_HintBlock_FirstLineText_color":"343434","V4LLPanel_HintBlock_SecondLineText":"with our experts online","V4LLPanel_HintBlock_SecondLineText_font_family":"Trebuchet MS","V4LLPanel_HintBlock_SecondLineText_font_size":"10","V4LLPanel_HintBlock_SecondLineText_font_weight":"normal","V4LLPanel_HintBlock_SecondLineText_font_style":"normal","V4LLPanel_HintBlock_SecondLineText_color":"343434","V4LLPanel_InnerTitle_font_family":"Tahoma","V4LLPanel_InnerTitle_font_size":"14","V4LLPanel_InnerTitle_color":"444444","V4LLPanel_width":"284","V4LLPanel_PanelClose_right":"6","V4LLPanel_TogglerText_font_family":"Tahoma","V4LLPanel_TogglerText_font_size":"14","V4LLPanel_TogglerText_color":"444444","V4LLPanel_passToBeginText_color":"444444","V4LLPanel_passToBeginText_font_size":"14","V4LLPanel_PhoneNumber_font_family":"Trebuchet MS","V4LLPanel_PhoneNumber_digits_font_family":"Trebuchet MS","V4LLPanel_phoneNum_font_size":"16","V4LLPanel_provideCodeMessage_color":"444444","V4LLPanel_provideCodeMessage_font_size":"14","V4LLPanel_provideCodeMessage_font_family":"Trebuchet MS","V4LLPanel_NumberBox_background_color":"ececec","V4LLPanel_NumberBox_color":"444444","V4LLPanel_NumberBox_font_size":"24","V4LLPanel_NumberBox_font_family":"Trebuchet MS","V4LLPanel_TermsAndConditions_font_size":"10","V4LLPanel_TermsAndConditions_color":"6e6e6e","V4LLPanel_TermsAndConditions_font_family":"Trebuchet MS","V4LLPanel_PoweredBy_color":"696969","V4LLPanel_PoweredBy_font_family":"Trebuchet MS","V4LLPanel_PoweredBy_font_size":"10","V4LLPanel_notconnected_header_text":"Co-browse","V4LLPanel_notconnected_provideNumber_text":"Provide the ID number below","V4LLPanel_notconnected_callUsAt_text":"","V4LLPanel_notconnected_phoneNumber":"","V4LLPanel_notconnected_poweredBy_text":"Powered by Oracle Co-browse","V4LLPanel_notconnected_termsAndConditions_text":"","V4LLPanel_position":"bottom_right","V4LLPanel_position_offset":"16","V4LLPanel_header_height":"39","V4LLPanel_header_logo_right_gap":"7","V4LLPanel_header_text":"Co-browse","V4LLPanel_header_text_color":"444444","V4LLPanel_header_text_font_family":"Tahoma","V4LLPanel_header_text_font_size":"14","V4LLPanel_header_text_font_weight":"normal","V4LLPanel_header_text_font_style":"normal","V4LLPanel_header_number_color":"444444","V4LLPanel_header_number_font_family":"Tahoma","V4LLPanel_header_number_font_size":"14","V4LLPanel_Connected_content_height":"74","V4LLPanel_Connected_content_text":"Expert connected","V4LLPanel_Connected_content_text_color":"444444","V4LLPanel_Connected_content_text_font_family":"Trebuchet MS","V4LLPanel_Connected_content_text_font_size":"20","V4LLPanel_Connected_content_text_font_weight":"normal","V4LLPanel_Connected_content_text_font_style":"normal","V4LLPanel_Connected_disconnect_height":"57","V4LLPanel_Connected_disconnect_button_text":"Disconnect","V4LLPanel_Connected_disconnect_button_text_color":"fefefe","V4LLPanel_Connected_disconnect_button_text_hover_color":"ffffff","V4LLPanel_Connected_disconnect_button_text_font_family":"Trebuchet MS","V4LLPanel_Connected_disconnect_button_text_font_size":"14","V4LLPanel_Connected_disconnect_button_text_font_weight":"normal","V4LLPanel_Connected_disconnect_button_text_font_style":"normal","V4LLPanel_Connected_footer_height":"32","V4LLPanel_Connected_footer_text":"powered by Oracle Co-browsing","V4LLPanel_Connected_footer_text_color":"444444","V4LLPanel_Connected_footer_text_font_family":"Trebuchet MS","V4LLPanel_Connected_footer_text_font_size":"10","V4LLPanel_Connected_footer_text_font_weight":"normal","V4LLPanel_Connected_footer_text_font_style":"normal","V4LLPanel_Connected_collapsed_height":"33","V4LLPanel_notSupported_width":"285","V4LLPanel_notSupported_height":"47","V4LLPanel_notSupported_right":"16","V4LLPanel_notSupported_header_text":"Co-browse","V4LLPanel_Title_notSupported_font_family":"Tahoma","V4LLPanel_Title_notSupported_font_size":"14","V4LLPanel_Title_notSupported_color":"444444","V4LLPanel_HintBlock_notSupported_width":"157","V4LLPanel_HintBlock_notSupported_height":"78","V4LLPanel_HintBlock_notSupported_right":"16","V4LLPanel_GenericToggler_notSupported_width":"157","V4LLPanel_notSupported_text":"Your browser does not support Co-browsing option. Expert will be happy to assist you over the phone.","V4LLPanel_notSupportedEnvText_notSupported_font_family":"Trebuchet MS","V4LLPanel_notSupportedEnvText_notSupported_font_size":"10","V4LLPanel_notSupportedEnvText_notSupported_color":"444444","V4LLPanel_notSupported_moreInfoText":"More info","V4LLPanel_moreInfoLink_notSupported_font_family":"Trebuchet MS","V4LLPanel_moreInfoLink_notSupported_font_size":"10","V4LLPanel_moreInfoLink_notSupported_color":"68769d","V4LLPanel_termsAndConditionsWindow_font_family":"Tahoma","V4LLPanel_termsAndConditionsWindow_color":"444444","V4LLPanel_termsAndConditionsWindow_font_size":"12","V4LLPanel_termsAndConditionsWindow_startSessionButton_color":"fefefe","V4LLPanel_termsAndConditionsWindow_startSessionButton_font_size":"12","V4LLPanel_termsAndConditionsWindow_startSessionButton_font_family":"Verdana","V4LLPanel_termsAndConditionsWindow_startSessionButton_text":"Start Session Now","V4LLPanel_TermsAndConditionsWindowHeadline_font_family":"Tahoma","V4LLPanel_TermsAndConditionsWindowHeadline_color":"444444","V4LLPanel_TermsAndConditionsWindowHeadline_font_size":"14","V4LLPanel_TermsAndConditionsWindowScrollBar_TrackBG_color":"0f0e0f","V4LLPanel_TermsAndConditionsWindowScrollBar_DragBG_color":"6f6f6f","V4LLPanel_TermsAndConditionsWindowHeadline":"","V4LLPanel_TermsAndConditionsWindowText":"","V4LLPanel_WaitingWindowBackgroundColor":"2f2f2f","V4LLPanel_WaitingWindowHeadlineText":"Co-Browse","V4LLPanel_WaitingWindowHeadlineTextFontFamily":"Tahoma","V4LLPanel_WaitingWindowHeadlineTextFontSize":"12","V4LLPanel_WaitingWindowHeadlineTextFontColor":"ffffff","V4LLPanel_WaitingWindowBodyTextFontFamily":"Trebuchet MS","V4LLPanel_WaitingWindowBodyTextFontColor":"e9e9e9","V4LLPanel_WaitingWindowBodyTextFontSize":"14","V4LLPanel_WaitingWindowBodyText":"Client is navigating to a new page","V4LLPanel_DisconnectConfirmWindow_background_color":"ffffff","V4LLPanel_DisconnectConfirmWindow_border_color":"aeaeae","V4LLPanel_DisconnectConfirmWindow_text_font_size":"14","V4LLPanel_DisconnectConfirmWindow_text_color":"444444","V4LLPanel_DisconnectConfirmWindow_text_font_weight":"normal","V4LLPanel_DisconnectConfirmWindow_text_font_style":"normal","V4LLPanel_DisconnectConfirmWindow_text_font_family":"Trebuchet MS","V4LLPanel_DisconnectConfirmWindow_text":"Are you sure you want to terminate this session?","V4LLPanel_DisconnectConfirmWindow_text_no":"No","V4LLPanel_DisconnectConfirmWindow_text_yes":"Yes","V4LLPanel_CloseConfirmButton_text_color":"ffffff","V4LLPanel_CloseConfirmButton_hover_text_color":"ffffff","V4LLPanel_CloseConfirmButton_text_font_family":"Trebuchet MS","V4LLPanel_CloseConfirmButton_text_font_size":"18","V4LLPanel_CloseConfirmButton_text_font_weight":"normal","V4LLPanel_CloseConfirmButton_text_font_style":"normal","V4LLPanel_CloseConfirmButton_text":"Are you sure you want to terminate this session?","V4LLPanel_CloseConfirmButton_text_no":"No","V4LLPanel_CloseConfirmButton_text_yes":"Yes","closeSessionEndWindowLink_text":"Close","ADA_V4LLPanel_PanelClose":"Collapse Browse with Specialist widget","ADA_V4LLPanel_CollapsedNumContNarrow":"Expand Browse with Specialist widget","ADA_V4LLPanel_PanelMinimize":"Collapse Browse with Specialist widget","ADA_V4LLPanel_PanelClose_disconnect":"Disconnect session for browse with specialist","ADA_V4LLPanel_CloseDeclineButton":"Decline session end","ADA_V4LLPanel_CloseConfirmButton":"Confirm session end","ADA_V4LLPanel_DisconnectConfirmWindow_infoEnd":"End of informational layer","ADA_V4LLPanel_DisconnectTrigger":"Disconnect session for browse with specialist","ADA_V4LLPanel_notconnected_poweredBy_modalEnd":"End of Modal Layer","ADA_V4LLPanel_CollapsedNumContNarrow_connected":"Expert connected","ADA_V4LLPanel_PanelClose_close":"Close","ADA_V4LLPanel_CloseDeclineButtonTC":"Decline session end","ADA_V4LLPanel_CloseConfirmButtonTC":"Confirm session end","ADA_V4LLPanel_modalEnd":"End of modal dialog","ADA_V4LLPanel_closeSessionEndWindowLink":"Close Session Ended dialog","LL_sessionEnded_popup_font_family":"Trebuchet MS","LL_sessionEnded_popup_font_size":"12","LL_sessionEnded_title_font_family":"Trebuchet MS","LL_sessionEnded_title_font_size":"34","LL_sessionEnded_description_font_family":"Trebuchet MS","LL_sessionEnded_description_font_size":"22","LL_sessionEnded_Close_Modal_Window_button_font_family":"Trebuchet MS","LL_sessionEnded_Close_Modal_Window_button_font_size":"14","LL_sessionEnded_feedback_font_family":"Trebuchet MS","LL_sessionEnded_feedback_font_size":"14","LL_sessionEnded_window_title":"Session ended","LL_sessionEnded_window_text":"You can now close this window","LL_sessionEnded_window_leave_feedback_text":"Please leave feedback","TrueView_Button":"True View","TrueView_InfoTitle":"True View Mode","TrueView_InfoDes":"Adapt your view to actual client screen size","TrueView_State_on":"ON","TrueView_State_off":"OFF","v4_activated_text":"Activated","LL_sessionEnded_popup_background_color":"ffffff","LL_sessionEnded_title_font_color":"da0000","LL_sessionEnded_description_font_color":"464646","LL_sessionEnded_Close_Modal_Window_button_width":"61","LL_CloseModal_Link_buttom_color":"ffffff","LL_Feedback_Button_color":"838383","partialSupported_PanelClose_background":"/framework/1511/resources/images/V4LLPanel/white/partialSupported_PanelClose_background.png","partialSupported_separator":"/framework/1511/resources/images/V4LLPanel/white/partialSupported_separator.png","syncIsLostText_PanelClose_background":"/framework/1511/resources/images/V4LLPanel/white/syncIsLostText_PanelClose_background.png","syncIsLostText_separator":"/framework/1511/resources/images/V4LLPanel/white/syncIsLostText_separator.png","V4LLPanel_redirect_popup_cancel_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_redirect_popup_cancel_background.png","V4LLPanel_redirect_popup_separator":"/framework/1511/resources/images/V4LLPanel/white/syncIsLostText_separator.png","activateACBButton_image":"/framework/1511/resources/images/activateButton_gray.png","activateACBButton_image_hover":"/framework/1511/resources/images/activateButton_red.png","V4LLPanel_CollapsedNarrowNoAgent_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_CollapsedNarrowNoAgent_background.png","V4LLPanel_InnerLogo_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_InnerLogo_background.png","V4LLPanel_HintBlock_background":"/framework/1511/resources/images/V4LLPanel/V4LLPanelhoverTooltipBg.png","V4LLPanel_notConnected_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_notConnected_background.png","V4LLPanel_PanelClose_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanelMinimizeBottom_white.png","LLpassToBeginText_background":"/framework/1511/resources/images/V4LLPanel/white/LLpassToBeginText_background.png","V4LLPanel_PhoneNumber_background":"/company/config/53779276/v4_RELY/res/nikesc53779276us2//images/1033/V4LLPanel_PhoneNumber_background.png","V4LLPanel_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_background.png","V4LLPanel_separator":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_separator.png","V4LLPanel_header_logo":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_header_logo.png","V4LLPanel_header_close_image":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_header_close_image.png","V4LLPanel_Connected_disconnect_button":"/framework/1511/resources/images/V4LLPanel/V4LLPanelDisconnectButton.png","V4LLPanel_Connected_disconnect_button_hover":"/framework/1511/resources/images/V4LLPanel/V4LLPanelDisconnectButton_hover.png","V4LLPanel_Connected_disconnect_button_pressed":"/framework/1511/resources/images/V4LLPanel/V4LLPanelDisconnectButton_hover.png","V4LLPanel_Connected_collapsed_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_Connected_collapsed_background.png","V4LLPanel_notSupported_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_notSupported_background.png","V4LLPanel_notSupported_logo":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_notSupported_logo.png","V4LLPanel_PanelClose_notSupported_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_PanelClose_notSupported_background.png","V4LLPanel_HintBlock_notSupported_background":"/framework/1511/resources/images/V4LLPanel/V4LLPanelhoverTooltipBg.png","V4LLPanel_GenericToggler_notSupported_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_GenericToggler_notSupported_background.png","V4LLPanel_termsAndConditionsWindow_textShadow":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_termsAndConditionsWindow_textShadow.png","V4LLPanel_termsAndConditionsWindow_startSessionButton":"/framework/1511/resources/images/V4LLPanel/V4LLPanelStartSessionNowGray.png","V4LLPanel_termsAndConditionsWindow_startSessionButtonHover":"/framework/1511/resources/images/V4LLPanel/V4LLPanelStartSessionNow.jpg","V4LLPanel_WaitingWindowSeparator":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanelSepLine_white.png","V4LLPanel_WaitingWindowLogo":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanelLogo_white.png","V4LLPanel_WaitingWindowClose":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanel_redirect_popup_cancel_background.png","V4LLPanel_WaitingWindowPreloader":"/framework/1511/resources/images/V4LLPanel/wait.gif","V4LLPanel_PanelMinimizeButton_background":"/framework/1511/resources/images/V4LLPanel/V4LLPanelMinimize.png","V4LLPanel_PanelCloseButton_background":"/framework/1511/resources/images/V4LLPanel/white/V4LLPanelCloseButton_white.png","V4LLPanel_CloseConfirmButton_background":"/framework/1511/resources/images/V4LLPanel/V4LLPanelDisconnectButton.png","V4LLPanel_CloseConfirmButton_background_hover":"/framework/1511/resources/images/V4LLPanel/V4LLPanelDisconnectButton_hover.png","LL_sessionEnded_popup_close_button":"/framework/1511/resources/images/V4LLPanel/session_ended_close_button.png","LL_sessionEnded_popup_cancel_button":"/framework/1511/resources/images/V4LLPanel/closeicon.png","LL_sessionEnded_popup_image":"/framework/1511/resources/images/V4LLPanel/stopwatch.png","FAQURL":"/framework/faq/faq.aspx","PrivacyURL":"","V4LLPanel_FAQURL":"","V4LLPanel_PhoneNumberURL":"","V4LLPanel_MoreInfo":""};
        if (LL_CustomUI) {
            LL_CustomUI.siteCode = LL_Deployment.siteCode;
            LL_CustomUI.isTermsAndConditionsEnabled = !!LL_CustomUI.V4LLPanel_TermsAndConditionsWindowText;
            LL_CustomUI.language = "1033";
        }

//inline prototypes 
//moved to pageManipulation.js
//service functions
window.LL_Utils=window.LL_Utils||{$:function(t){return"string"==typeof t?document.getElementById(t):t},removeNodes:function(t){for(var e="string"==typeof t?t.split(","):[t],n=0;n<e.length;n++){var i="string"==typeof e[n]?e[n].replace(/\s/g,""):e[n];if(i){var l=LL_Utils.$(i);l&&l.parentNode&&l.parentNode.removeChild(l)}}},loadScript:function(t,e,n,i,l){LL_Utils.removeNodes(t);var r=document.getElementsByTagName("head")[0],s=document.createElement("script");s.setAttribute("type","text/javascript"),s.setAttribute("id",t),s.setAttribute("loaded","false"),s.src=e,s.onload=s.onreadystatechange=function(){"false"!==this.getAttribute("loaded")||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(this.setAttribute("loaded","true"),
// Handle memory leak in IE
this.onload=this.onreadystatechange=this.onerror=null,LL_Utils.removeNodes(this),n&&n.apply(this,[]))},s.onerror=function(t,e,n){i||"false"===this.getAttribute("loaded")&&(this.setAttribute("loaded","true"),
// Handle memory leak in IE
this.onload=this.onreadystatechange=this.onerror=null,LL_Utils.removeNodes(this),l&&l.apply(this,[]))},r.appendChild(s),i&&function(t,e,n,l,r){setTimeout(function(){if(LL_Utils.$(t)){/*still not loaded, retry*/
var i="&rnd=",s=e.indexOf(i);-1!==s&&(e=e.substring(0,s-1)),e+=i+Math.random(),LL_Utils.loadScript(t,e,n,l,r)}},i)}(t,e,n,i,l)},require:function(t,e,n,i){var l=t,r=t?t.split("."):t;if(r&&2===r.length&&(l=r[0]),l in window&&"undefined"!=typeof window[l]){var s=!0;if(r&&2===r.length&&(s=r[1]in window[l]&&"undefined"!=typeof window[l][r[1]]),s)return void(n&&n.apply(this,[!0]))}return e?(LL_Utils.loadScript("id_"+t,e,function(){
//script is loaded - our object should exist by now
l=t,r=t?t.split("."):t,2===r.length&&(l=r[0]),l in window&&"undefined"!=typeof window[l]&&(!r||2!==r.length||r[1]in window[l]&&"undefined"!=typeof window[l][r[1]])||(LL_Utils.intervals.clear(t),i&&i.apply(this,["ERR_INV_CONTENT: "+e+" did not resolve "+t]))},void 0,function(){LL_Utils.intervals.clear(t),i&&i.apply(this,["ERR_LOAD_ERROR: "+e])}),void function(t,e,n,i){LL_Utils.___internals.require_internal(t,e,n,i)}(t,e,n,i)):void(i&&i.apply(this,["ERR_NO_FILE"]))},timers:{get:function(t){return LL_Utils.___internals.timerCollection[t]},set:function(t,e,n){LL_Utils.timers.clear(t),LL_Utils.___internals.timerCollection[t]=setTimeout(e,n)},clear:function(t){LL_Utils.___internals.timerCollection[t]&&(clearTimeout(LL_Utils.___internals.timerCollection[t]),LL_Utils.___internals.timerCollection[t]=0,delete LL_Utils.___internals.timerCollection[t])}},intervals:{get:function(t){return LL_Utils.___internals.intervalCollection[t]},set:function(t,e,n){LL_Utils.intervals.clear(t),LL_Utils.___internals.intervalCollection[t]=setInterval(e,n)},clear:function(t){LL_Utils.___internals.intervalCollection[t]&&(clearInterval(LL_Utils.___internals.intervalCollection[t]),LL_Utils.___internals.intervalCollection[t]=0,delete LL_Utils.___internals.intervalCollection[t])}},___internals:{timerCollection:{},intervalCollection:{},require_internal:function(t,e,n,i){var l=0;LL_Utils.intervals.set(t,function(){var r=t,s=t?t.split("."):t;if(s&&2===s.length&&(r=s[0]),r in window&&"undefined"!=typeof window[r]){var o=!0;if(s&&2===s.length&&(o=s[1]in window[r]&&"undefined"!=typeof window[r][s[1]]),o)return LL_Utils.intervals.clear(t),void(n&&n.apply(this,[!1]))}l++,l>144&&(LL_Utils.intervals.clear(t),navigator.onLine===!1&&i&&i.apply(this,["ERR_OFFLINE: "+e]),
//try loading the file again
LL_Utils.require(t,e,function(){n&&n.apply(this,[!1])},i))},333)}}},window.LL_Session=window.LL_Session||{states:{INIT:1,READY:2,STARTING:3,ACTIVE:5,DISCONNECTING:6,ERROR:7},currentState:{get:function(){return LL_Session.currentState.___internals.stateID},change:function(t){if(LL_Session.currentState.___internals.stateID!==t){LL_Session.currentState.___internals.stateID=t;for(var e=LL_Session.currentState.___internals.listeners,n=0;n<e.length;n++)e[n]&&function(t,e){setTimeout(function(){t.apply(this,[e])},0)}(e[n],t)}},listen:function(t){var e=LL_Session.currentState.___internals.listeners;try{-1===e.indexOf(t)&&e.push(t)}catch(n){for(var i=-1,l=0;l<e.length;l++)if(e[l]===t){i=l;break}-1===i&&e.push(t)}},removeListener:function(t){for(var e=LL_Session.currentState.___internals.listeners,n=e.length-1;n>=0;n--)e[n]===t&&delete e[n]},___internals:{stateID:void 0,listeners:[]}},mode:null,presentationCode:null,presentationToken:null,SID:null,mode:null,___internals:{}};
    LL_Deployment.init();

