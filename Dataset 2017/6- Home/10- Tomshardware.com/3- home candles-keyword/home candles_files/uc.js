sbi_sync_user=function(nw,nwlk,nwtype,delay){if(nwtype=='image'){if(delay==0){new Image().src=nwlk}else{setTimeout((function(){new Image().src=nwlk}),delay)}}else if(nwtype=='js'){try{var sb=document.createElement('script');sb.type='text/javascript';sb.async=true;sb.src=nwlk;var sc=document.getElementsByTagName('script')[0];sc.parentNode.insertBefore(sb,sc)}catch(e){}}else if(nwtype=='iframe'){try{var sb=document.createElement('iframe');sb.src=nwlk;sb.style.width='0px';sb.style.height='0px';sb.style.border='0px';document.body.appendChild(sb)}catch(e){}}};sbi_sync_user("bw", "http://x.bidswitch.net/sync?ssp=sonobi", "image", 0);
sbi_sync_user("gm", "http://ad.afy11.net/ad?mode=10&sspid=2585", "image", 0);
sbi_sync_user("ad", "http://dpm.demdex.net/ibs:dpid=87880&dpuuid=59c446c7-457a-5663-909d-eef0971bdb3f", "image", 0);
sbi_sync_user("rx", "http://sync.rhythmxchange.com/usersync2/sonobi", "image", 0);
sbi_sync_user("mm", "http://sync.mathtag.com/sync/img?cs_wd_sy=1&dp=43&redir=http%3A%2F%2Fsync.go.sonobi.com%2Fus.gif%3Fnw%3Dmediamath%26nuid%3D[MM_UUID]", "disable", 0);
(function(){var mid=document.createElement('script');mid.type='text/javascript';mid.setAttribute('data-partner','sonobi');mid.setAttribute('data-region','NA');mid.setAttribute('data-country','CA');mid.setAttribute('data-endpoint','us-west');mid.async=true;mid.src='http://assets.rubiconproject.com/utils/xapi/multi-sync.js';document.head.appendChild(mid)})();sbi_sync_user("td", "http://match.adsrvr.org/track/cmf/generic?ttd_pid=sonobi&ttd_tpi=1", "image", 0);
sbi_sync_user("pp", "http://bh.contextweb.com/bh/rtset?pid=560606&ev=1&rurl=http://sync.go.sonobi.com/us.gif?nw=pp&nuid=%%VGUID%%", "image", 0);
sbi_sync_user("an", "http://ib.adnxs.com/getuid?http://sync.go.sonobi.com/us.gif?nw=appnex&nuid=$UID", "image", 0);
