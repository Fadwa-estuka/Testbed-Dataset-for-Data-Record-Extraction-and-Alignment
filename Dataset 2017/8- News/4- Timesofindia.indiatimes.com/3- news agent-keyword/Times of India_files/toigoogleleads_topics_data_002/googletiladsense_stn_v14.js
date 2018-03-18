if (typeof (it_DescUrl) == "undefined") it_DescUrl = 1;
if (typeof (it_titleImg) == "undefined") it_titleImg = [0, ''];
if (typeof (it_showFieldSet) == "undefined") it_showFieldSet = [0, ''];
if (typeof (it_CheckAdFormat) == "undefined") it_CheckAdFormat = [0, 3];
if (typeof (it_bgcolor[3]) == "undefined") { it_bgcolor[3] = 'ffffff';}
if (typeof (it_bgcolor[4]) == "undefined") { it_bgcolor[4] = 'ffffff';}

function google_ad_request_done(google_ads) {
    try {
        var s = '';
        var i;
        if (google_ads.length == 0) {
            google_alternate_ad_url = ns_alternate_ad_url;
            return
        }
        if (google_ads[0].type == "image") {
            s += '<a href="' + google_ads[0].url + '" target="_blank" title="go to ' + google_ads[0].visible_url + '"><img border="0" src="' + google_ads[0].image_url + '"width="' + google_ads[0].image_width + '"height="' + google_ads[0].image_height + '"></a>'
        } else if (google_ads[0].type == "flash") {
            s += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="' + google_ad.image_width + '" HEIGHT="' + google_ad.image_height + '"><PARAM NAME="movie" VALUE="' + google_ad.image_url + '"><PARAM NAME="quality" VALUE="high"><PARAM NAME="AllowScriptAccess" VALUE="never"><PARAM NAME="wmode" VALUE="transparent"><EMBED src="' + google_ad.image_url + '" WIDTH="' + google_ad.image_width + '" HEIGHT="' + google_ad.image_height + '" TYPE="application/x-shockwave-flash" wmode="transparent" AllowScriptAccess="never" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>'
        } else if (google_ads[0].type == "html") {
            s += google_ads[0].snippet
        } else if (google_ads[0].type == "text") {
            tmpcols = it_params[8] / google_ads.length;
            if (google_ads.length < 1) {
                return
            }
            switch (it_params[10]) {
            case 0:
                {
                    if (it_showFieldSet[0] == 1) {
                        s += "<fieldset>";
                        if (it_showFieldSet[1] == 1) s += "<legend>" + it_showFieldSet[2] + "</legend>"
                    }
                    s += "<table cellpadding=\"" + it_table[0] + "\" cellspacing=\"" + it_table[1] + "\" width=\"" + it_params[8] + "\" ";
                    if (it_params[6] == 1) {
                        s += "height=\"" + it_params[9] + "\""
                    }
                    s += " style=\"border-style:" + it_border[10] + ";border-left-width:" + it_border[0] + "px;border-right-width:" + it_border[1] + "px;border-top-width:" + it_border[2] + "px;border-bottom-width:" + it_border[3] + "px;border-color: #" + it_border[8] + "\" border='0' bgcolor=\"#" + it_bgcolor[0] + "\">";
                    if (it_params[0] == 0) {
                        s += "<tr><td colspan=\"3\" height=\"20\" bgcolor=\"#" + it_bgcolor[1] + "\" style=\"";
                        for (j = 0; j < it_topfeedback.length; j += 2) {
                            s += it_topfeedback[j] + ':' + it_topfeedback[j + 1] + ';'
                        }
                        s += "\">";
                        if (google_info.feedback_url) {
                            s += "<a href=\"" + google_info.feedback_url + "\" target=\"_blank\" style=\"";
                            for (j = 0; j < it_abg.length; j += 2) {
                                s += it_abg[j] + ':' + it_abg[j + 1] + ';'
                            }
                            s += "\">Ads by Google</a>"
                        } else {
                            s += "<span style=\"";
                            for (j = 0; j < it_abg.length; j += 2) {
                                s += it_abg[j] + ':' + it_abg[j + 1] + ';'
                            }
                            s += "\">Ads By Google</span>"
                        }
                        s += "</td></tr>"
                    }
                    if (google_ads[0].type == 'text') {
                        for (i = 0; i < google_ads.length; ++i) {
                            if ((i % it_params[7]) == 0) {
                                s += "<tr><td valign=\"top\" align=\"left\">"
                            } else {
                                s += "<td valign=\"top\" align=\"left\">"
                            }
                            s += "<table cellspacing=\"" + it_table[2] + "\" cellspacing=\"" + it_table[3] + "\" ";
                            if (google_ads.length == 1) {
                                if (it_CheckAdFormat[0] == 1) {
                                    it_params[2] = it_CheckAdFormat[1];
                                    s += " width='100%'"
                                }
                            } else {
                                if (typeof (it_innerTableW) != 'undefined') {
                                    for (itTb = 0; itTb < it_innerTableW.length; itTb++) {
                                        if ((i == itTb) && (it_innerTableW.length > (i * 2))) {
                                            s += it_innerTableW[itTb + (i + 1)]
                                        }
                                    }
                                } else {
                                    s += " width='100%'"
                                }
                            }
                            s += " border='0' style=\"border-style:" + it_border[11] + ";border-left-width:" + it_border[4] + "px;border-right-width:" + it_border[5] + "px;border-top-width:" + it_border[6] + "px;border-bottom-width:" + it_border[7] + "px;border-color: #" + it_border[9] + "\"><tr>";
                            if (it_params[5] == 1) {
                                s += "<td valign=\"top\" width=\"2\" bgcolor=#" + it_bgcolor[0] + " style=\"";
                                for (j = 0; j < it_BCol.length; j += 2) {
                                    s += it_BCol[j] + ':' + it_BCol[j + 1] + ';'
                                }
                                s += "\" rowspan=\"2\">";
                                s += "<div align=top><img src='http://adscontent.indiatimes.com/photo/" + it_params[4] + ".cms'><img src='http://timesofindia.indiatimes.com/images/spacer.gif' width='6' height='0' border='0'></div></td><td bgcolor=#" + it_bgcolor[0] + " style=\"";
                                for (j = 0; j < it_BPadding.length; j += 2) {
                                    s += it_BPadding[j] + ':' + it_BPadding[j + 1] + ';'
                                }
                                s += "\" colspan=\"2\" "
                            } else {
                                s += "<td bgcolor=#" + it_bgcolor[2] + " style=\"";
                                for (j = 0; j < it_WBPadding.length; j += 2) {
                                    s += it_WBPadding[j] + ':' + it_WBPadding[j + 1] + ';'
                                }
                                s += "\" colspan=\"2\""
                            }
                            if (google_ads.length == 1) {
                                s += " valign=\"bottom\" height=\"50%\""
                            } else {
                                s += " valign=\"top\""
                            }
                            s += "><a href=\"" + google_ads[i].url + "\" target=\"_blank\" style=\"";
                            for (j = 0; j < it_title.length; j += 2) {
                                s += it_title[j] + ':' + it_title[j + 1] + ';'
                            }
                            s += "\" onmouseover=\"window.status='" + google_ads[i].visible_url.replace("&#39;", "\\'") + "';return true\" onmouseout=\"window.status='';return true\">" + google_ads[i].line1;
                            if (it_titleImg[0] == 1) {
                                s += "<span><img src='http://timesofindia.indiatimes.com/images/spacer.gif' width='6' height='0' border='0'><img src='" + it_titleImg[1] + "' border='0'></span>" + "</a>"
                            } else {
                                s += "</a>"
                            }
                            function adDescription() {
                                switch (it_params[2]) {
                                case 0:
                                    {
                                        //if (it_DescUrl == 0) {
                                            s += "</td></tr><tr><td ";
                                            if (it_params[5] == 1) {
                                                s += "style=\"";
                                                for (j = 0; j < it_BURL.length; j += 2) {
                                                    s += it_BURL[j] + ':' + it_BURL[j + 1] + ';'
                                                }
                                                s += "\""
                                            } else {
                                                s += "style=\"";
                                                for (j = 0; j < it_WBURL.length; j += 2) {
                                                    s += it_WBURL[j] + ':' + it_WBURL[j + 1] + ';'
                                                }
                                                s += "\""
                                            }
                                            s += " valign=\"top\" bgcolor='#" + it_bgcolor[3] + "'>"
                                        //} else {
                                        //    s += "<br>"
                                        //}
                                        break
                                    }
                                case 1:
                                case 2:
                                case 3:
                                    {
                                        if ((it_DescUrl == 1) || ((it_DescUrl == 0) && ((it_params[2] == 2) || (it_params[2] == 3)))) {
                                            if (it_showhide[1] == 1) {
                                                if ((it_params[2] == 3) && (it_DescUrl == 1)) {
                                                    s += "</td></tr><tr><td ";
                                                    if (it_params[5] == 1) {
                                                        s += "style=\"";
                                                        for (j = 0; j < it_BURL.length; j += 2) {
                                                            s += it_BURL[j] + ':' + it_BURL[j + 1] + ';'
                                                        }
                                                        s += "\""
                                                    } else {
                                                        s += "style=\"";
                                                        for (j = 0; j < it_WBURL.length; j += 2) {
                                                            s += it_WBURL[j] + ':' + it_WBURL[j + 1] + ';'
                                                        }
                                                        s += "\""
                                                    }
                                                    s += " valign=\"top\" bgcolor=#" + it_bgcolor[3] + ">"
                                                } else {
                                                    s += " <span style=\"color:" + it_params[1][1] + "\">" + it_params[1][0] + " <span>"
                                                }
                                            }
                                        } else {
                                            s += "</td></tr><tr><td ";
                                            if (it_params[5] == 1) {
                                                s += "style=\"";
                                                for (j = 0; j < it_BURL.length; j += 2) {
                                                    s += it_BURL[j] + ':' + it_BURL[j + 1] + ';'
                                                }
                                                s += "\""
                                            } else {
                                                s += "style=\"";
                                                for (j = 0; j < it_WBURL.length; j += 2) {
                                                    s += it_WBURL[j] + ':' + it_WBURL[j + 1] + ';'
                                                }
                                                s += "\""
                                            }
                                            s += " valign=\"top\" bgcolor=#" + it_bgcolor[3] + ">"
                                        }
                                        break
                                    }
                                }
                                if (it_showhide[1] == 1) {
                                    s += "<span style=\"";
                                    for (j = 0; j < it_desc.length; j += 2) {
                                        s += it_desc[j] + ':' + it_desc[j + 1] + ';'
                                    }
                                    s += "\">" + google_ads[i].line2;
                                    if (it_params[3] == 1) {
                                        s += " " + google_ads[i].line3
                                    }
                                    s += "</span>"
                                }
                                if ((it_DescUrl == 0) && (it_params[2] == 2)) {
                                    s += "</td></tr>"
                                }
                            }
                            function adVisibleUrl() {
                                switch (it_params[2]) {
                                case 0:
                                    {
                                        //if (it_DescUrl == 1) {
                                            s += "</td></tr><tr><td ";
                                            if (it_params[5] == 1) {
                                                s += "style=\"";
                                                for (j = 0; j < it_BURL.length; j += 2) {
                                                    s += it_BURL[j] + ':' + it_BURL[j + 1] + ';'
                                                }
                                                s += "\""
                                            } else {
                                                s += "style=\"";
                                                for (j = 0; j < it_WBURL.length; j += 2) {
                                                    s += it_WBURL[j] + ':' + it_WBURL[j + 1] + ';'
                                                }
                                                s += "\""
                                            }
                                            s += " valign=\"top\" bgcolor=#" + it_bgcolor[4] + ">"
                                        //} else {
                                        //    s += '<br>'
                                        //}
                                        if (it_showhide[2] == 1) {
                                            s += "<a href=\"" + google_ads[i].url + "\" target=\"_blank\" style=\"";
                                            for (j = 0; j < it_url.length; j += 2) {
                                                s += it_url[j] + ':' + it_url[j + 1] + ';'
                                            }
                                            s += "\" onmouseover=\"window.status='" + google_ads[i].visible_url.replace("&#39;", "\\'") + "';return true\" onmouseout=\"window.status='';return true\">" + google_ads[i].visible_url + "</a>"
                                        }
                                        break
                                    }
                                case 1:
                                case 3:
                                    {
                                        if (it_DescUrl == 0) {
                                            if (it_showhide[2] == 1) {
                                                if (it_params[2] == 3) {
                                                    s += "</td></tr><tr><td ";
                                                    if (it_params[5] == 1) {
                                                        s += "style=\"";
                                                        for (j = 0; j < it_BURL.length; j += 2) {
                                                            s += it_BURL[j] + ':' + it_BURL[j + 1] + ';'
                                                        }
                                                        s += "\""
                                                    } else {
                                                        s += "style=\"";
                                                        for (j = 0; j < it_WBURL.length; j += 2) {
                                                            s += it_WBURL[j] + ':' + it_WBURL[j + 1] + ';'
                                                        }
                                                        s += "\""
                                                    }
                                                    s += " valign=\"top\" bgcolor=#" + it_bgcolor[4] + ">"
                                                } else {
                                                    s += " <span style=\"color:" + it_params[1][3] + "\">" + it_params[1][2] + " <span>"
                                                }
                                            }
                                        } else if (it_params[2] == 3) {
                                            s += " <span style=\"color:" + it_params[1][3] + "\">" + it_params[1][2] + " <span>"
                                        } else {
                                            s += "</td></tr><tr><td ";
                                            if (it_params[5] == 1) {
                                                s += "style=\"";
                                                for (j = 0; j < it_BURL.length; j += 2) {
                                                    s += it_BURL[j] + ':' + it_BURL[j + 1] + ';'
                                                }
                                                s += "\""
                                            } else {
                                                s += "style=\"";
                                                for (j = 0; j < it_WBURL.length; j += 2) {
                                                    s += it_WBURL[j] + ':' + it_WBURL[j + 1] + ';'
                                                }
                                                s += "\""
                                            }
                                            s += " valign=\"top\" bgcolor=#" + it_bgcolor[4] + ">"
                                        }
                                        if (it_showhide[2] == 1) {
                                            s += "<a href=\"" + google_ads[i].url + "\" target=\"_blank\" style=\"";
                                            for (j = 0; j < it_url.length; j += 2) {
                                                s += it_url[j] + ':' + it_url[j + 1] + ';'
                                            }
                                            s += "\" onmouseover=\"window.status='" + google_ads[i].visible_url.replace("&#39;", "\\'") + "';return true\" onmouseout=\"window.status='';return true\">" + google_ads[i].visible_url + "</a>"
                                        }
                                        break
                                    }
                                case 2:
                                    {
                                        if (it_showhide[2] == 1) {
                                            s += " <span style=\"color:" + it_params[1][3] + "\">" + it_params[1][2] + " <span><a href=\"" + google_ads[i].url + "\" target=\"_blank\" style=\"";
                                            for (j = 0; j < it_url.length; j += 2) {
                                                s += it_url[j] + ':' + it_url[j + 1] + ';'
                                            }
                                            s += "\" onmouseover=\"window.status='" + google_ads[i].visible_url.replace("&#39;", "\\'") + "';return true\" onmouseout=\"window.status='';return true\">" + google_ads[i].visible_url + "</a>"
                                        }
                                        if (it_DescUrl == 1) {
                                            s += "</td></tr>";
                                            if ((it_params[0] == 1) && (i == google_ads.length - 1)) {
                                                s += "<tr><td style=\"padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:5px;\" height='0' valign=\"top\" bgcolor=#" + it_bgcolor[4] + ">"
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                            if (it_DescUrl == 1) {
                                adDescription();
                                adVisibleUrl()
                            } else {
                                adVisibleUrl();
                                adDescription()
                            }
                            if ((it_params[0] == 1) && (i == google_ads.length - 1)) {
                                /*s += "</td><td align=\"right\" valign=\"top\" bgcolor=\"#" + it_bgcolor[0] + "\" style=\"";
                                for (j = 0; j < it_bottomfeedback.length; j += 2) {
                                    s += it_bottomfeedback[j] + ':' + it_bottomfeedback[j + 1] + ';'
                                }
                                s += "\"></tr><tr><td colspan=\"2\" style=\"text-align:right;\" >";*/
								s += "</td></tr><tr><td colspan=\"2\" style=\"text-align:right;\" >";
                                if (google_info.feedback_url) {
                                    s += "<a href=\"" + google_info.feedback_url + "\" target=\"_blank\" style=\"";
                                    for (j = 0; j < it_abg.length; j += 2) {
                                        s += it_abg[j] + ':' + it_abg[j + 1] + ';'
                                    }
                                    s += "\">Ads by Google</a>"
                                } else {
                                    s += "<span style=\"";
                                    for (j = 0; j < it_abg.length; j += 2) {
                                        s += it_abg[j] + ':' + it_abg[j + 1] + ';'
                                    }
                                    s += "\">Ads By Google</span>"
                                }
                            }
                            s += "</td></tr></table>";
                            if ((i % it_params[7]) == 0) {
                                s += "</td>";
                                if (i == google_ads.length - 1) {
                                    s += "</tr>"
                                }
                            } else {
                                s += "</td></tr>"
                            }
                        }
                    }
                    s += "</table>";
                    if (it_showFieldSet[0] == 1) {
                        s += "</fieldset>"
                    }
                    break
                }
            }
        }
        document.write(s);
        return
    } catch (ex) {}
}