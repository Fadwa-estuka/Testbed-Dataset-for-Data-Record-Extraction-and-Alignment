var DIGIOH_API={};var DIGIOH_VARS={};var DIGIOH_CUSTOM_JS_GLOBAL={};var DIGIOH_CUSTOM_JS={};var DIGIOH_VENDOR_GUID='ffc155a5-eba8-47bf-8e99-ed72cbcffdaf';var DIGIOH_KEEN_WRITE_KEY="2F6DA646A8B57BF1D72399F563EDDA9A9026186355A37FEBA5AF6C66213ED76D6420CBAEF5D821AD3B8E7F625CA1784E290CF5AF2B5EEAEDD4C612CFB5568E658E78A62F5F2D9F9320F8E152B0478588C7C591E635823EB6FC29FB1C9452BBD47348C25618FFE1F3957887EBFFB311BBF1E115A1935DE4AE57514FA4BB840D3C3849BDD19A15612A8E4A4DF363A4B6D1C59321B7D043F806B784289A2F822768BC2D9328825F4AC02416FD9023B55B9BF10192BB435DA7764CC077192885019A811EC03ADD101C6D9471F80107C1E613806A2390CC530A7FA9DB9C5CC31157FD84AA168229FBD0295BA09286BF3AAE50BBDB3099BE8F27C43ADFE965630A4314ABB8A834FF2EBD6E1E67B6714AEB4454C146A1EEA2AB13ABE0026215E2070F4803DB734F0006C2A1254CE1A3B246590A5073086985C22B013AA2A14E6BD2B11A2065304B320B67134485E7E1D9060F3831B1DCB20902DFEFA3DFCDD0E1067B8C18C77B02C5008D85C1530854F854BBF8";var DIGIOH_CDN_DOMAIN='www.lightboxcdn.com';var DIGIOH_CLIENT_IP='[#######DIGIOH_CLIENT_IP#######]';var DIGIOH_CACHE_VERSION='636223519862599118';var DIGIOH_EMBED_TYPE='lightning';var DIGIOH_LIGHTBOX_CONDITIONS=[];var DIGIOH_LIGHTBOX_EFFECTS={};var DIGIOH_LIGHTBOX_NAMES={};var DIGIOH_LIGHTBOX_IDS={};var DIGIOH_VARIATION_TO_BOX_MAP={};DIGIOH_API.DIGIOH_LIGHTBOX_SETTINGS={};DIGIOH_LIGHTBOX_NAMES['d19ae783-e13f-43ff-85cb-e41ca3edc9f5']='164899 (rename) (restored 11-28-2016)';DIGIOH_LIGHTBOX_NAMES['7546fa00-1387-48de-ade2-106f98751216']='Rugby (desktop)  Version B';DIGIOH_LIGHTBOX_NAMES['9154b907-ca9b-45c1-9e41-89612d3f915e']='SNF AA Inline 753x150';DIGIOH_LIGHTBOX_NAMES['e44eb732-5ec3-4b6d-9f82-e9122fe1de0e']='SNF AA Inline 1068x75';DIGIOH_LIGHTBOX_NAMES['2baa5e1d-d801-4bb5-8f2f-d2f39bb82826']='SNF AA Inline 300x150';DIGIOH_LIGHTBOX_NAMES['23d5d5b2-5385-4caf-a3c4-8b5384c7678e']='Rugby (Live Player Inline)';DIGIOH_LIGHTBOX_NAMES['3aeaa1cd-76ed-4553-a102-8666fb6ec8c2']='Rugby Inline 753x300';DIGIOH_LIGHTBOX_NAMES['e4e71c31-48d4-4fa6-8766-4e84b38a38d2']='Rugby Inline 1068x330';DIGIOH_LIGHTBOX_NAMES['7c2a7258-3d41-478b-92d0-fc41744860d9']='Rugby Inline 300x300';DIGIOH_LIGHTBOX_NAMES['861c6a3d-6225-4900-8bd4-225030181c52']='Rugby New 753x100';DIGIOH_LIGHTBOX_NAMES['2248cb92-10aa-4455-ba52-5cd05e72fae8']='Rugby New 1068x50';DIGIOH_LIGHTBOX_NAMES['5d49974a-250a-4cdf-bde1-2a0aaafab2d0']='Rugby NEw 300x100';DIGIOH_LIGHTBOX_NAMES['dadeee1f-c6a9-4408-8217-26ae656b34d6']='NHL Generic 2017 (Desktop) ';DIGIOH_LIGHTBOX_NAMES['4a0a48db-2c5f-4759-928e-ca525b1cfb59']='NHL Generic 2017 (Mobile-Sidebar) ';DIGIOH_LIGHTBOX_NAMES['52a7e1c4-ded0-4885-a592-aa40fb2b494b']='NHL Generic Inline 2017 300x150';DIGIOH_LIGHTBOX_NAMES['46dd0018-6514-43b9-ae9a-a5665f3187f1']='NHL Generic Inline 2017 753x150';DIGIOH_LIGHTBOX_NAMES['303d499a-0ec7-4eac-b24b-7f69b8cddb92']='NHL Generic Inline 2017 1068x75 ';DIGIOH_LIGHTBOX_NAMES['4d2cda95-4562-45bc-b4dd-0430fdb4dd21']='Winter Olympic (Desktop)  ';DIGIOH_LIGHTBOX_NAMES['bc3758bf-9af7-43d7-999b-8b4559c3a6b2']='Winter Olympic (Mobile-Sidebar)  ';DIGIOH_LIGHTBOX_IDS['d19ae783-e13f-43ff-85cb-e41ca3edc9f5']='164899';DIGIOH_LIGHTBOX_IDS['7546fa00-1387-48de-ade2-106f98751216']='177569';DIGIOH_LIGHTBOX_IDS['9154b907-ca9b-45c1-9e41-89612d3f915e']='177791';DIGIOH_LIGHTBOX_IDS['e44eb732-5ec3-4b6d-9f82-e9122fe1de0e']='177792';DIGIOH_LIGHTBOX_IDS['2baa5e1d-d801-4bb5-8f2f-d2f39bb82826']='177826';DIGIOH_LIGHTBOX_IDS['23d5d5b2-5385-4caf-a3c4-8b5384c7678e']='177942';DIGIOH_LIGHTBOX_IDS['3aeaa1cd-76ed-4553-a102-8666fb6ec8c2']='178432';DIGIOH_LIGHTBOX_IDS['e4e71c31-48d4-4fa6-8766-4e84b38a38d2']='178440';DIGIOH_LIGHTBOX_IDS['7c2a7258-3d41-478b-92d0-fc41744860d9']='178441';DIGIOH_LIGHTBOX_IDS['861c6a3d-6225-4900-8bd4-225030181c52']='178659';DIGIOH_LIGHTBOX_IDS['2248cb92-10aa-4455-ba52-5cd05e72fae8']='178660';DIGIOH_LIGHTBOX_IDS['5d49974a-250a-4cdf-bde1-2a0aaafab2d0']='178661';DIGIOH_LIGHTBOX_IDS['dadeee1f-c6a9-4408-8217-26ae656b34d6']='178705';DIGIOH_LIGHTBOX_IDS['4a0a48db-2c5f-4759-928e-ca525b1cfb59']='178706';DIGIOH_LIGHTBOX_IDS['52a7e1c4-ded0-4885-a592-aa40fb2b494b']='178707';DIGIOH_LIGHTBOX_IDS['46dd0018-6514-43b9-ae9a-a5665f3187f1']='178855';DIGIOH_LIGHTBOX_IDS['303d499a-0ec7-4eac-b24b-7f69b8cddb92']='178856';DIGIOH_LIGHTBOX_IDS['4d2cda95-4562-45bc-b4dd-0430fdb4dd21']='179013';DIGIOH_LIGHTBOX_IDS['bc3758bf-9af7-43d7-999b-8b4559c3a6b2']='179015';DIGIOH_LIGHTBOX_CONDITIONS[0]={};DIGIOH_LIGHTBOX_CONDITIONS[0].lightbox_guid='d19ae783-e13f-43ff-85cb-e41ca3edc9f5';DIGIOH_LIGHTBOX_CONDITIONS[0].conditions=[[{"p":"S_current_page_url","o":"contains","v":"?rugbytest","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[1]={};DIGIOH_LIGHTBOX_CONDITIONS[1].lightbox_guid='7546fa00-1387-48de-ade2-106f98751216';DIGIOH_LIGHTBOX_CONDITIONS[1].conditions=[[{"p":"E_lightbox_activity","o":"equals","v":"submit","s":[],"sd":"","ed":""},{"p":"E_visitor_activity_session","o":"equals","v":"1","s":[],"sd":"","ed":""},{"p":"S_current_page_url","o":"contains","v":"rugby","s":[],"sd":"","ed":""},{"p":"I_days_since_last_view","o":"greater_than","v":"1","s":[],"sd":"","ed":""},{"p":"I_total_time_seconds","o":"greater_than","v":"6","s":[],"sd":"","ed":""},{"p":"E_device","o":"equals","v":"Desktop/Laptop","s":[],"sd":"","ed":""},{"p":"S_current_page_url","o":"does_not_contain","v":"http://www.nbcsports.com/rugby/signup","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[2]={};DIGIOH_LIGHTBOX_CONDITIONS[2].lightbox_guid='9154b907-ca9b-45c1-9e41-89612d3f915e';DIGIOH_LIGHTBOX_CONDITIONS[2].conditions=[[{"p":"S_current_page_url","o":"contains","v":"http://www.nbcsports.com/snf-all-access","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[3]={};DIGIOH_LIGHTBOX_CONDITIONS[3].lightbox_guid='e44eb732-5ec3-4b6d-9f82-e9122fe1de0e';DIGIOH_LIGHTBOX_CONDITIONS[3].conditions=[[{"p":"S_current_page_url","o":"contains","v":"http://www.nbcsports.com/snf-all-access","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[4]={};DIGIOH_LIGHTBOX_CONDITIONS[4].lightbox_guid='2baa5e1d-d801-4bb5-8f2f-d2f39bb82826';DIGIOH_LIGHTBOX_CONDITIONS[4].conditions=[[{"p":"S_current_page_url","o":"contains","v":"http://www.nbcsports.com/snf-all-access","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[5]={};DIGIOH_LIGHTBOX_CONDITIONS[5].lightbox_guid='23d5d5b2-5385-4caf-a3c4-8b5384c7678e';DIGIOH_LIGHTBOX_CONDITIONS[5].conditions=[[{"p":"S_current_page_url","o":"in_set_contains","s":["http://devstream.nbcsports.com/snf/tests/lightbox-test/","http://cms.devstream.nbcsports.com/page/nbcsn/lightbox-test-2","http://cms.devstream.nbcsports.com/page/snf/kickoff","http://stage.cms.devstream.nbcsports.com/page/snf/kickoff","http://devstream.nbcsports.com/snf/tests/lightbox-test-2/","http://stream.nbcsports.com/snf/index_kickoff.html?pid","http://stream.nbcsports.com/rugby/"],"v":"","sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[6]={};DIGIOH_LIGHTBOX_CONDITIONS[6].lightbox_guid='3aeaa1cd-76ed-4553-a102-8666fb6ec8c2';DIGIOH_LIGHTBOX_CONDITIONS[6].conditions=[[{"p":"S_current_page_url","o":"contains","v":"http://www.nbcsports.com/rugby/signup","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[7]={};DIGIOH_LIGHTBOX_CONDITIONS[7].lightbox_guid='e4e71c31-48d4-4fa6-8766-4e84b38a38d2';DIGIOH_LIGHTBOX_CONDITIONS[7].conditions=[[{"p":"S_current_page_url","o":"contains","v":"www.nbcsports.com/rugby/signup","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[8]={};DIGIOH_LIGHTBOX_CONDITIONS[8].lightbox_guid='7c2a7258-3d41-478b-92d0-fc41744860d9';DIGIOH_LIGHTBOX_CONDITIONS[8].conditions=[[{"p":"S_current_page_url","o":"contains","v":"http://www.nbcsports.com/rugby/signup","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[9]={};DIGIOH_LIGHTBOX_CONDITIONS[9].lightbox_guid='861c6a3d-6225-4900-8bd4-225030181c52';DIGIOH_LIGHTBOX_CONDITIONS[9].conditions=[[{"p":"S_current_page_url","o":"equals","v":"http://www.nbcsports.com/rugby","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[10]={};DIGIOH_LIGHTBOX_CONDITIONS[10].lightbox_guid='2248cb92-10aa-4455-ba52-5cd05e72fae8';DIGIOH_LIGHTBOX_CONDITIONS[10].conditions=[[{"p":"S_current_page_url","o":"equals","v":"http://www.nbcsports.com/rugby","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[11]={};DIGIOH_LIGHTBOX_CONDITIONS[11].lightbox_guid='5d49974a-250a-4cdf-bde1-2a0aaafab2d0';DIGIOH_LIGHTBOX_CONDITIONS[11].conditions=[[{"p":"S_current_page_url","o":"equals","v":"http://www.nbcsports.com/rugby","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[12]={};DIGIOH_LIGHTBOX_CONDITIONS[12].lightbox_guid='dadeee1f-c6a9-4408-8217-26ae656b34d6';DIGIOH_LIGHTBOX_CONDITIONS[12].conditions=[[{"p":"E_lightbox_activity","o":"equals","v":"submit","s":[],"sd":"","ed":""},{"p":"E_visitor_activity_session","o":"equals","v":"1","s":[],"sd":"","ed":""},{"p":"S_current_page_url","o":"contains","v":"nhl","s":[],"sd":"","ed":""},{"p":"I_days_since_last_view","o":"greater_than","v":"1","s":[],"sd":"","ed":""},{"p":"I_total_time_seconds","o":"greater_than","v":"6","s":[],"sd":"","ed":""},{"p":"E_device","o":"equals","v":"Desktop/Laptop","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[13]={};DIGIOH_LIGHTBOX_CONDITIONS[13].lightbox_guid='4a0a48db-2c5f-4759-928e-ca525b1cfb59';DIGIOH_LIGHTBOX_CONDITIONS[13].conditions=[[{"p":"E_lightbox_activity","o":"equals","v":"submit","s":[],"sd":"","ed":""},{"p":"E_visitor_activity_session","o":"equals","v":"1","s":[],"sd":"","ed":""},{"p":"I_days_since_last_view","o":"greater_than","v":"1","s":[],"sd":"","ed":""},{"p":"S_current_page_url","o":"contains","v":"nhl","s":[],"sd":"","ed":""},{"p":"E_device","o":"equals","v":"Phone/Tablet","s":[],"sd":"","ed":""},{"p":"I_total_time_seconds","o":"greater_than","v":"6","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[14]={};DIGIOH_LIGHTBOX_CONDITIONS[14].lightbox_guid='52a7e1c4-ded0-4885-a592-aa40fb2b494b';DIGIOH_LIGHTBOX_CONDITIONS[14].conditions=[[{"p":"S_current_page_url","o":"contains","v":"http://qa.nbcsports.com/nhl-all-access","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[15]={};DIGIOH_LIGHTBOX_CONDITIONS[15].lightbox_guid='46dd0018-6514-43b9-ae9a-a5665f3187f1';DIGIOH_LIGHTBOX_CONDITIONS[15].conditions=[[{"p":"S_current_page_url","o":"contains","v":"http://qa.nbcsports.com/nhl-all-access","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[16]={};DIGIOH_LIGHTBOX_CONDITIONS[16].lightbox_guid='303d499a-0ec7-4eac-b24b-7f69b8cddb92';DIGIOH_LIGHTBOX_CONDITIONS[16].conditions=[[{"p":"S_current_page_url","o":"contains","v":"http://qa.nbcsports.com/nhl-all-access","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[17]={};DIGIOH_LIGHTBOX_CONDITIONS[17].lightbox_guid='4d2cda95-4562-45bc-b4dd-0430fdb4dd21';DIGIOH_LIGHTBOX_CONDITIONS[17].conditions=[[{"p":"E_lightbox_activity","o":"equals","v":"submit","s":[],"sd":"","ed":""},{"p":"E_visitor_activity_session","o":"equals","v":"1","s":[],"sd":"","ed":""},{"p":"I_days_since_last_view","o":"greater_than","v":"1","s":[],"sd":"","ed":""},{"p":"I_total_time_seconds","o":"greater_than","v":"6","s":[],"sd":"","ed":""},{"p":"E_device","o":"equals","v":"Desktop/Laptop","s":[],"sd":"","ed":""},{"p":"S_current_page_url","o":"contains","v":"http://www.nbcsports.com/","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_CONDITIONS[18]={};DIGIOH_LIGHTBOX_CONDITIONS[18].lightbox_guid='bc3758bf-9af7-43d7-999b-8b4559c3a6b2';DIGIOH_LIGHTBOX_CONDITIONS[18].conditions=[[{"p":"E_lightbox_activity","o":"equals","v":"submit","s":[],"sd":"","ed":""},{"p":"E_visitor_activity_session","o":"equals","v":"1","s":[],"sd":"","ed":""},{"p":"I_days_since_last_view","o":"greater_than","v":"1","s":[],"sd":"","ed":""},{"p":"E_device","o":"equals","v":"Phone/Tablet","s":[],"sd":"","ed":""},{"p":"I_total_time_seconds","o":"greater_than","v":"6","s":[],"sd":"","ed":""},{"p":"S_current_page_url","o":"contains","v":"olympics","s":[],"sd":"","ed":""}]];DIGIOH_LIGHTBOX_EFFECTS['d19ae783-e13f-43ff-85cb-e41ca3edc9f5']={"widget_type":"sidebar","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":true,"display_on_page_load":false,"css_positioning":"fixed","width":152,"height":36,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Free Trial","font":{"family":"'lucida sans unicode', 'Lucida Grande', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"16","bold":true,"italic":false,"underline":false},"font_hover":{"family":"'lucida sans unicode', 'Lucida Grande', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"16","bold":true,"italic":false,"underline":false},"font_focus":{"family":"'lucida sans unicode', 'Lucida Grande', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"16","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":6},"background":{"color":"rgb(255, 217, 102)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(255, 217, 102)","gradient":"rgb(230, 145, 56)","image":"","repeat":"no-repeat","position":"left top","use_gradient":true,"use_image":false},"background_focus":{"color":"rgb(255, 217, 102)","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":100,"scroll_down":100},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0}},"width":367,"height":343,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600}};DIGIOH_LIGHTBOX_EFFECTS['7546fa00-1387-48de-ade2-106f98751216']={"widget_type":"sidebar","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_focus":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":100,"scroll_down":100},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":379,"height":251,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"always","removal_rules":"keep","custom_js_rules":"all","position_using":"absolute","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"placement":"top","page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0}},"thxwidth":379,"thxheight":251,"ep1width":379,"ep1height":251,"ep2width":379,"ep2height":251,"ep3width":379,"ep3height":251,"ep4width":379,"ep4height":251,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['9154b907-ca9b-45c1-9e41-89612d3f915e']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":569,"height":150,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":569,"thxheight":150,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":true,"box_width":100,"box_height":0,"width_max":1000,"width_min":569,"height_max":150,"height_min":150},"thxresponsive":{"use":true,"box_width":100,"box_height":0,"width_max":1000,"width_min":569,"height_max":150,"height_min":150},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['e44eb732-5ec3-4b6d-9f82-e9122fe1de0e']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":1065,"height":76,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":1065,"thxheight":76,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":76,"height_min":76},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['2baa5e1d-d801-4bb5-8f2f-d2f39bb82826']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":300,"height":156,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":10,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":300,"thxheight":156,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":true,"box_width":100,"box_height":0,"width_max":1000,"width_min":300,"height_max":156,"height_min":156},"thxresponsive":{"use":true,"box_width":100,"box_height":0,"width_max":1000,"width_min":300,"height_max":156,"height_min":156},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['23d5d5b2-5385-4caf-a3c4-8b5384c7678e']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":640,"height":250,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"#temp-pass","jquery_method":"before","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":5,"right":0,"bottom":23,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":640,"thxheight":250,"ep1width":640,"ep1height":150,"ep2width":640,"ep2height":150,"ep3width":640,"ep3height":150,"ep4width":640,"ep4height":150,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['3aeaa1cd-76ed-4553-a102-8666fb6ec8c2']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":751,"height":251,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":751,"thxheight":251,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":true,"box_width":100,"box_height":0,"width_max":753,"width_min":753,"height_max":250,"height_min":250},"thxresponsive":{"use":true,"box_width":100,"box_height":0,"width_max":751,"width_min":751,"height_max":250,"height_min":250},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['e4e71c31-48d4-4fa6-8766-4e84b38a38d2']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":1065,"height":278,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"submit","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":1065,"thxheight":277,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":true,"box_width":100,"box_height":0,"width_max":1065,"width_min":1065,"height_max":275,"height_min":275},"thxresponsive":{"use":true,"box_width":100,"box_height":0,"width_max":1065,"width_min":1065,"height_max":275,"height_min":275},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['7c2a7258-3d41-478b-92d0-fc41744860d9']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":300,"height":301,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":10,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":300,"thxheight":301,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":true,"box_width":100,"box_height":0,"width_max":300,"width_min":300,"height_max":301,"height_min":301},"thxresponsive":{"use":true,"box_width":100,"box_height":0,"width_max":300,"width_min":300,"height_max":301,"height_min":301},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['861c6a3d-6225-4900-8bd4-225030181c52']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":753,"height":100,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":753,"thxheight":100,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":true,"box_width":100,"box_height":0,"width_max":753,"width_min":753,"height_max":100,"height_min":100},"thxresponsive":{"use":true,"box_width":100,"box_height":0,"width_max":753,"width_min":753,"height_max":100,"height_min":100},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['2248cb92-10aa-4455-ba52-5cd05e72fae8']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":1065,"height":60,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"submit","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":1065,"thxheight":60,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":76,"height_min":76},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":76,"height_min":76},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['5d49974a-250a-4cdf-bde1-2a0aaafab2d0']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":300,"height":100,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":10,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":300,"thxheight":100,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":false,"box_width":100,"box_height":0,"width_max":1000,"width_min":300,"height_max":156,"height_min":156},"thxresponsive":{"use":false,"box_width":100,"box_height":0,"width_max":1000,"width_min":300,"height_max":156,"height_min":156},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['dadeee1f-c6a9-4408-8217-26ae656b34d6']={"widget_type":"sidebar","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_focus":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":379,"height":251,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"always","removal_rules":"keep","custom_js_rules":"all","position_using":"absolute","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"placement":"top","page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0}},"thxwidth":379,"thxheight":251,"ep1width":379,"ep1height":251,"ep2width":379,"ep2height":251,"ep3width":379,"ep3height":251,"ep4width":379,"ep4height":251,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['4a0a48db-2c5f-4759-928e-ca525b1cfb59']={"widget_type":"sidebar","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_focus":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":300,"height":220,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"always","removal_rules":"keep","custom_js_rules":"all","position_using":"absolute","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"placement":"top","page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0}},"thxwidth":300,"thxheight":218,"ep1width":302,"ep1height":199,"ep2width":302,"ep2height":199,"ep3width":302,"ep3height":199,"ep4width":302,"ep4height":199,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['52a7e1c4-ded0-4885-a592-aa40fb2b494b']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_focus":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":301,"height":150,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"placement":"top","page_overlap":"move","css_positioning":"absolute","close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0}},"thxwidth":300,"thxheight":150,"ep1width":302,"ep1height":199,"ep2width":302,"ep2height":199,"ep3width":302,"ep3height":199,"ep4width":302,"ep4height":199,"responsive":{"use":true,"box_width":100,"box_height":0,"width_max":500,"width_min":300,"height_max":150,"height_min":150},"thxresponsive":{"use":true,"box_width":100,"box_height":0,"width_max":500,"width_min":289,"height_max":150,"height_min":150},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['46dd0018-6514-43b9-ae9a-a5665f3187f1']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":753,"height":150,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":569,"thxheight":150,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":true,"box_width":100,"box_height":0,"width_max":1000,"width_min":569,"height_max":150,"height_min":150},"thxresponsive":{"use":true,"box_width":100,"box_height":0,"width_max":1000,"width_min":569,"height_max":150,"height_min":150},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['303d499a-0ec7-4eac-b24b-7f69b8cddb92']={"widget_type":"inline","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"Fresh Content, Straight to your Inbox!","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":true},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(24, 41, 57)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":1065,"height":76,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"conditions","removal_rules":"keep","custom_js_rules":"all","position_using":"smart_tag","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","custom_function":"//PARAMS: (window, document, $, lightbox_id, dom_id, style_string) ==> EX:  window.setTimeout(function() { $('#' + dom_id).detach().appendTo('#DestinationContainerNode').show(); }, 1000);","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0},"placement":"top"},"thxwidth":1065,"thxheight":76,"ep1width":756,"ep1height":100,"ep2width":756,"ep2height":100,"ep3width":756,"ep3height":100,"ep4width":756,"ep4height":100,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":76,"height_min":76},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['4d2cda95-4562-45bc-b4dd-0430fdb4dd21']={"widget_type":"sidebar","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_focus":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":379,"height":251,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"always","removal_rules":"keep","custom_js_rules":"all","position_using":"absolute","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"placement":"top","page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0}},"thxwidth":379,"thxheight":251,"ep1width":379,"ep1height":251,"ep2width":379,"ep2height":251,"ep3width":379,"ep3height":251,"ep4width":379,"ep4height":251,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};DIGIOH_LIGHTBOX_EFFECTS['bc3758bf-9af7-43d7-999b-8b4559c3a6b2']={"widget_type":"sidebar","fancybox":{"speed":{"open":500,"close":500},"animation":{"open":"fade","close":"fade"},"easing":{"open":"swing","close":"swing"},"position":{"top":5,"left":5},"overlay":{"close_click":false,"background":{"color":"rgba(0, 0, 0, 0.44)","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false}},"close_button":{"display":true,"type":"default","image":"","position":"top-right","offset_x":-18,"offset_y":-18},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":292,"height":35,"padding":{"top":10,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_hover":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"font_focus":{"family":"__google__'Montserrat', sans-serif","color":"rgb(67, 67, 67)","align":"center","size":"14","bold":true,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"none","radius":"0"},"border_hover":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"border_focus":{"width":2,"color":"#ff0000","style":"none","radius":"0"},"background":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"rgb(253, 184, 19)","gradient":"rgb(204, 204, 204)","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"sidebar":{"css_positioning":"fixed","position":"bottom-right","speed":{"open":500,"close":500},"animation":{"open":"slideLeft","close":"slideRight"},"easing":{"open":"swing","close":"swing"},"close_button":{"display":true,"type":"default","image":"","position":"top-left","offset_x":-18,"offset_y":-18},"auto_close":{"click":false,"time":0,"scroll_up":0,"scroll_down":0},"teaser":{"display":false,"display_on_page_load":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0,"follow_me":false}},"width":300,"height":225,"iframe":{"use_custom":false,"is_self_hosted":false,"self_hosted_url":"","html_last_uploaded":"","width":750,"height":600},"inline":{"display_rules":"always","removal_rules":"keep","custom_js_rules":"all","position_using":"absolute","position":{"top":0,"right":0,"bottom":0,"left":0},"jquery_selector":"body","jquery_method":"append","margin":{"top":0,"right":0,"bottom":0,"left":0},"float":"none","clear":"none","border":{"width":0,"color":"#cccccc","style":"solid","radius":0},"css":"overflow:visible;"},"banner":{"placement":"top","page_overlap":"move","css_positioning":"absolute","close_button":{"display":false,"type":"default","image":"","position":"top-left","offset_x":0,"offset_y":0},"css":"overflow:visible;","teaser":{"display":false,"display_on_page_load":false,"follow_me":false,"css_positioning":"fixed","width":0,"height":0,"padding":{"top":0,"right":0,"bottom":0,"left":0},"text":"","font":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"font_hover":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"font_focus":{"family":"Arial, Helvetica, sans-serif","color":"#ffffff","align":"center","size":14,"bold":false,"italic":false,"underline":false,"vspace":0},"border":{"width":2,"color":"#ffffff","style":"solid","radius":6},"border_hover":{"width":2,"color":"#ff0000","style":"solid","radius":6},"border_focus":{"width":2,"color":"#ff0000","style":"solid","radius":6},"background":{"color":"#000000","gradient":"#000000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_hover":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"background_focus":{"color":"#ff0000","gradient":"#ff0000","image":"","repeat":"no-repeat","position":"left top","use_gradient":false,"use_image":false},"position":"bottom-right","offset_x":0,"offset_y":0}},"thxwidth":300,"thxheight":225,"ep1width":302,"ep1height":199,"ep2width":302,"ep2height":199,"ep3width":302,"ep3height":199,"ep4width":302,"ep4height":199,"responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"thxresponsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep1responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep2responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep3responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300},"ep4responsive":{"use":false,"box_width":30,"box_height":30,"width_max":1000,"width_min":300,"height_max":1000,"height_min":300}};var DIGIOH_PUBLISHED_VARIATIONS_ARR=[];var DIGIOH_PRIMARY_VARIATIONS_ARR=[];var DIGIOH_EFFECTS_IMAGE_CACHE_ARR=[];var DIGIOH_SETTINGS_IMAGE_CACHE_ARR=[];var DIGIOH_LIGHTBOX_MASTER_RULES={"OneBoxPerPageview":false,"OneBoxPerSession":false,"OneBoxPerVisitor":false,"StopAfterFormSubmitted":false,"DisableIfCookiesDisabled":false,"IgnoreForInlineBoxes":true};var DIGIOH_LIGHTBOX_TEASER_PRELOAD_ARR=[];var DIGIOH_LIGHTBOX_TEASER_FOLLOW_ME_ARR=[];var DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR=[];var DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR=['9154b907-ca9b-45c1-9e41-89612d3f915e','e44eb732-5ec3-4b6d-9f82-e9122fe1de0e','2baa5e1d-d801-4bb5-8f2f-d2f39bb82826','23d5d5b2-5385-4caf-a3c4-8b5384c7678e','3aeaa1cd-76ed-4553-a102-8666fb6ec8c2','e4e71c31-48d4-4fa6-8766-4e84b38a38d2','7c2a7258-3d41-478b-92d0-fc41744860d9','861c6a3d-6225-4900-8bd4-225030181c52','2248cb92-10aa-4455-ba52-5cd05e72fae8','5d49974a-250a-4cdf-bde1-2a0aaafab2d0','52a7e1c4-ded0-4885-a592-aa40fb2b494b','46dd0018-6514-43b9-ae9a-a5665f3187f1','303d499a-0ec7-4eac-b24b-7f69b8cddb92'];var DIGIOH_LIGHTBOX_INLINE_DEPENDENT_ARR=[];var DIGIOH_LIGHTBOX_PRELOAD_ARR=[];var DIGIOH_LIGHTBOX_MOBILE_DEVICE_ARR=[];var DIGIOH_LIGHTBOX_DESKTOP_DEVICE_ARR=['7546fa00-1387-48de-ade2-106f98751216','dadeee1f-c6a9-4408-8217-26ae656b34d6','4d2cda95-4562-45bc-b4dd-0430fdb4dd21'];var DIGIOH_LIGHTBOX_UNCATEGORIZED_DEVICE_ARR=['d19ae783-e13f-43ff-85cb-e41ca3edc9f5','9154b907-ca9b-45c1-9e41-89612d3f915e','e44eb732-5ec3-4b6d-9f82-e9122fe1de0e','2baa5e1d-d801-4bb5-8f2f-d2f39bb82826','23d5d5b2-5385-4caf-a3c4-8b5384c7678e','3aeaa1cd-76ed-4553-a102-8666fb6ec8c2','e4e71c31-48d4-4fa6-8766-4e84b38a38d2','7c2a7258-3d41-478b-92d0-fc41744860d9','861c6a3d-6225-4900-8bd4-225030181c52','2248cb92-10aa-4455-ba52-5cd05e72fae8','5d49974a-250a-4cdf-bde1-2a0aaafab2d0','4a0a48db-2c5f-4759-928e-ca525b1cfb59','52a7e1c4-ded0-4885-a592-aa40fb2b494b','46dd0018-6514-43b9-ae9a-a5665f3187f1','303d499a-0ec7-4eac-b24b-7f69b8cddb92','bc3758bf-9af7-43d7-999b-8b4559c3a6b2'];var DIGIOH_SPLIT_TESTS_ARR=[];var DIGIOH_USE_BUGSNAG=false;var DIGIOH_USE_CONSOLE=true;var DIGIOH_USE_RESPONSIVE=true;var DIGIOH_USE_REAL_TIME_SUBMISSIONS=false;var DIGIOH_IS_PREVIEW=false;var DIGIOH_IS_DEV=false;var DIGIOH_BLIP_LZ='NoIg7GB0Bs2QnABkgJgIxpAGgAQgCxxrQCsqJakGJ2e0KqayaAHCzCrSPY8xaui4pE8KkgRwkQxHBRzIUNAGZE02fMUzpotOJL4q-7WOT6ELY7uRKlqY.12il-NQIZlhnXCDRhb-MiZKVks9AylvYVEHeCh8LzxhdQYoT1DTA2VVSJk3GFRnVzl3VHj0.N0XHJ0wqjBsxNzihTEqxuSW9AtqyBioCMaajKolbsHe4NiCtpAkvLgSMdmm-Vkynr7GJaiJsVT18atezPoi-UDCLl9.QMRghuWh46pL72vSk-QwGZ2j-CIVOUzCwEssOroqFoekczBgZu8ApDKIsrn5IIigpDoKibkiXti3miMXcqGh4UTbpQDiBKXVwksmLZRGBJGAuGB2GgSKlWFQ5FxoJzBaSyCjvMLiJyydN2VBvmJbChCuKhVLbgS8BzDDz2CgNeApcx6qgoXRVaTMoCVVQJVy-aCtRgjcg0tbJSLzOzDXVmPAlhAFJl4IqlPrHdytqSHgH5boQzRvLSyQCHmgUB404weeTFfgTjzU2iUHmbftQe9iyddcq8BWS8RUiRC7n81scR8bbrqZnhAZ0CnpFBRpAWFBBVxCDaPMJSZgNpRhKKljx0Mx8FS2W904wGOgeXO6LumCOiMJ7JNFGSBUe11SE3gk5Om9feCPbCwlC.VyNREqHr9xCUSYZhXY9k3ReAvzAycwEg8UbyoNgTyg290X1UDmCUX9BHg19wzgw9Xw.EcQIQ1h2FDCciFIAQXS5c89l6JZJ2IacXXXFDSjIfBNzwFiaLkOjP28fi2JNB4JVtTR0LI9d0WXMiWB0UjX1YURthWBgIThdtK1LOoGSLetoFSRByyM1tKl04zFHqdtERYe59QRMhHJHczcTckJCU84Irx89FXMoAYfAs.TiFBHZ-EXEZU23dAjx5e9Qt8-17KCmBnIpEdkWbQKctiziuUoNgiqwgoZNUngyUikQTAQQIFNUpDi147hFPYMBQQwn8ZVw78tT8MrfxsYaPiKlr8AI9rmurf86uixBAn8wjv2UEbpp6slkWSrbyuLA9Hnq-APCy1K9WsqsDMuztAwY3QC3KIgmoGzlvnKE67ACxFxBCgDkE-2Azi0nR-RycEdFOaFftue6pjkSrv2IkKtsW3bZPcYTVrA.bdCKnhuQYmKLvnE1GrhxQrWx5AWCIPGciHdhRxgabhEZkc5Xm9nmY.QdIGHZmwGStn-aZsdhcQbmx31EWBblH5JdFjmFFZxW5YUQ7ZbFhQNKlhRaqeVhAg5Pn1aGgK9IbBAuaVwW2q15WTImnRzep.FGHxrSZbV7WyXtn3lbTTWA-ZrkbfV5QseWPXlH9mOa2j23FBIWr4-9mOMFN32wcaGOKCz5X0wL0OAmLscy75cPs6jh3Q.p3Ok5.IrJyU5u4FHT3UHTxvlF1xulQruPG9VjPU.77uI6rwOlAlvXiwrskFb1vv1bPBme-DmOl57.Aa5DxQx4j14G4j2ee4n338BX327gr4M74v5X4E34ft.V0r18nqfmdiEAAF0gA__';DIGIOH_CUSTOM_JS={runCustomJsOnDocumentReady:function(window,document,$){try{DIGIOH_CUSTOM_JS_GLOBAL={};DIGIOH_CUSTOM_JS_GLOBAL.foundMatch=false;DIGIOH_CUSTOM_JS_GLOBAL.jQmixpo=JQUERY_DIGIOH('div.mixpo_positioning_takeover_mask');window.setInterval(function(){if(JQUERY_DIGIOH('div.mixpo_positioning_takeover_mask').length)
{DIGIOH_CUSTOM_JS_GLOBAL.foundMatch=false;JQUERY_DIGIOH('div.mixpo_positioning_takeover_mask').each(function(){var style=$(this).attr('style');if(style.indexOf('visibility: inherit')>=0||style.indexOf('visibility:inherit')>=0){DIGIOH_CUSTOM_JS_GLOBAL.foundMatch=true;JQUERY_DIGIOH.fb_digioh.close(true);DIGIOH_CUSTOM_JS.log('Digioh Lightbox closed (Document Ready) due to Ad detection!');}});}},1000);}
catch(e){DIGIOH_CUSTOM_JS.log('ERROR: runCustomJsOnDocumentReady() - '+ e.message);}
return true;},runCustomJsBeforeLightboxDisplay:function(window,document,$,lightbox_id,variation_id){try{var localMatchVar=false;if(DIGIOH_CUSTOM_JS_GLOBAL.foundMatch){localMatchVar=true;}
else if(JQUERY_DIGIOH('div.mixpo_positioning_takeover_mask').length){JQUERY_DIGIOH('div.mixpo_positioning_takeover_mask').each(function(){var style=$(this).attr('style');if(style.indexOf('visibility: inherit')>=0||style.indexOf('visibility:inherit')>=0){localMatchVar=true;}});}
if(localMatchVar){DIGIOH_CUSTOM_JS.log('DIGIOH:  lightbox closed in Before Lightbox Display custom JS due to Ad detection!');return false;}else{DIGIOH_CUSTOM_JS.log('DIGIOH:  no ad detected in Before Lightbox Display custom JS, proceeding with lightbox rules.');}}
catch(e){DIGIOH_CUSTOM_JS.log('ERROR: runCustomJsBeforeLightboxDisplay() - '+ e.message);}
return true;},runCustomJsOnLightboxDisplay:function(window,document,$,lightbox_id,variation_id){try{window.setTimeout(function(){if(lightbox_id=='4d2cda95-4562-45bc-b4dd-0430fdb4dd21'){JQUERY_DIGIOH('#lightbox-iframe-'+ lightbox_id).parent().css({'z-index':'100000'});DIGIOH_CUSTOM_JS.log('DIGIOH: z-index set to 100000 for lightbox '+ lightbox_id);}else{JQUERY_DIGIOH('#lightbox-iframe-'+ lightbox_id).parent().css({'z-index':'100'});DIGIOH_CUSTOM_JS.log('DIGIOH: z-index set to 100 for lightbox '+ lightbox_id);}},1000);}
catch(e){DIGIOH_CUSTOM_JS.log('ERROR: runCustomJsOnLightboxDisplay() - '+ e.message);}},runCustomJsOnLightboxSubmit:function(window,document,$,lightbox_id,variation_id){try{}
catch(e){DIGIOH_CUSTOM_JS.log('ERROR: runCustomJsOnLightboxSubmit() - '+ e.message);}},runCustomJsOnLightboxRedirect:function(window,document,$,lightbox_id,variation_id){try{}
catch(e){DIGIOH_CUSTOM_JS.log('ERROR: runCustomJsOnLightboxRedirect() - '+ e.message);}},runCustomJsOnLightboxDownload:function(window,document,$,lightbox_id,variation_id){try{}
catch(e){DIGIOH_CUSTOM_JS.log('ERROR: runCustomJsOnLightboxDownload() - '+ e.message);}},runCustomJsOnLightboxClose:function(window,document,$,lightbox_id,variation_id){try{}
catch(e){DIGIOH_CUSTOM_JS.log('ERROR: runCustomJsOnLightboxClose() - '+ e.message);}},log:function(msg){try{if(typeof console!=="undefined"&&typeof DIGIOH_USE_CONSOLE!=="undefined"&&DIGIOH_USE_CONSOLE){console.log(msg);}}
catch(e){}}};var DIGIOH_WIN_PARENT;var DIGIOH_DOC_PARENT;var DIGIOH_WIN_CHILD;if(DIGIOH_EMBED_TYPE=='lightning'){DIGIOH_WIN_PARENT=window.parent;DIGIOH_DOC_PARENT=window.parent.document;DIGIOH_WIN_CHILD=window;}else{DIGIOH_WIN_PARENT=window;DIGIOH_DOC_PARENT=window.document;DIGIOH_WIN_CHILD=window;}
if(DIGIOH_DOC_PARENT&&DIGIOH_DOC_PARENT.getElementById(DIGIOH_VENDOR_GUID)!==null){DIGIOH_DOC_PARENT.getElementById(DIGIOH_VENDOR_GUID).style.display='none';}
var DIGIOH_LIGHTBOX_ANALYTICS={};var DIGIOH_BUGSNAG=null;if(typeof DIGIOH_USE_BUGSNAG!=='undefined'&&DIGIOH_USE_BUGSNAG&&typeof Bugsnag==='undefined'){}
if(typeof DIGIOH_USE_BUGSNAG!=='undefined'&&DIGIOH_USE_BUGSNAG&&typeof Bugsnag!=='undefined'){DIGIOH_BUGSNAG=Bugsnag.noConflict();DIGIOH_BUGSNAG.apiKey="00d2a439021e5fddb74074eecbfa2ca5";DIGIOH_BUGSNAG.autoNotify=false;}
!function(a,c,b){if(typeof define=="function"&&define.amd){define("keen",[],function(d){return b()})}if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b()}else{c[a]=b()}}("Keen",this,function(Keen){;function Keen(config){this.configure(config||{})}Keen.version="3.1.0";Keen.utils={};Keen.canXHR=false;if(typeof XMLHttpRequest==="object"||typeof XMLHttpRequest==="function"){if("withCredentials"in new XMLHttpRequest()){Keen.canXHR=true}}Keen.urlMaxLength=16000;if(navigator.userAgent.indexOf("MSIE")!==-1||navigator.appVersion.indexOf("Trident/")>0){Keen.urlMaxLength=2000}Keen.enabled=true;Keen.loaded=true;Keen.ready=function(callback){if(Keen.loaded){callback()}else{Keen.on("ready",callback)}};Keen.debug=false;Keen.log=function(message){if(Keen.debug&&typeof console=="object"){console.log("[Keen IO]",message)}};var Events=Keen.Events={on:function(name,callback){this.listeners||(this.listeners={});var events=this.listeners[name]||(this.listeners[name]=[]);events.push({callback:callback});return this},once:function(name,callback,context){var self=this;var once=_once(function(){self.off(name,once);callback.apply(this,arguments)});once._callback=callback;return self.on(name,once,context)},off:function(name,callback,context){if(!this.listeners){return this}if(!name&&!callback&&!context){this.listeners=void 0;return this}var names=[];if(name){names.push(name)}else{_each(this.listeners,function(value,key){names.push(key)})}for(var i=0,length=names.length;i<length;i++){name=names[i];var events=this.listeners[name];if(!events){continue}if(!callback&&!context){delete this.listeners[name];continue}var remaining=[];for(var j=0,k=events.length;j<k;j++){var event=events[j];if(callback&&callback!==event.callback&&callback!==event.callback._callback||context&&context!==event.context){remaining.push(event)}}if(remaining.length){this.listeners[name]=remaining}else{delete this.listeners[name]}}return this},trigger:function(name){if(!this.listeners){return this}var args=Array.prototype.slice.call(arguments,1);var events=this.listeners[name]||[];for(var i=0;i<events.length;i++){events[i]["callback"].apply(this,args)}return this}};function _once(func){var ran=false,memo;return function(){if(ran){return memo}ran=true;memo=func.apply(this,arguments);func=null;return memo}}_extend(Keen.prototype,Events);_extend(Keen,Events);function _loadAsync(){var loaded=window.Keen,cached=window._Keen||{},clients,ready;if(loaded&&cached){clients=cached.clients||{},ready=cached.ready||[];for(var instance in clients){if(clients.hasOwnProperty(instance)){var client=clients[instance];for(var method in Keen.prototype){if(Keen.prototype.hasOwnProperty(method)){loaded.prototype[method]=Keen.prototype[method]}}loaded.Query=(Keen.Query)?Keen.Query:function(){};loaded.Visualization=(Keen.Visualization)?Keen.Visualization:function(){};if(client._config){client.configure.call(client,client._config);client._config=undefined;try{delete client._config}catch(e){}}if(client._setGlobalProperties){var globals=client._setGlobalProperties;for(var i=0;i<globals.length;i++){client.setGlobalProperties.apply(client,globals[i])}client._setGlobalProperties=undefined;try{delete client._setGlobalProperties}catch(e){}}if(client._addEvent){var queue=client._addEvent||[];for(var i=0;i<queue.length;i++){client.addEvent.apply(client,queue[i])}client._addEvent=undefined;try{delete client._addEvent}catch(e){}}var callback=client._on||[];if(client._on){for(var i=0;i<callback.length;i++){client.on.apply(client,callback[i])}client.trigger("ready");client._on=undefined;try{delete client._on}catch(e){}}}}for(var i=0;i<ready.length;i++){var callback=ready[i];Keen.once("ready",function(){callback()})}}}Keen.prototype.addEvent=function(eventCollection,payload,success,error){var response;if(!eventCollection||typeof eventCollection!=="string"){response="Event not recorded: Collection name must be a string";Keen.log(response);if(error){error.call(this,response)}return}_uploadEvent.apply(this,arguments)};Keen.prototype.configure=function(cfg){var config=cfg||{};if(!Keen.canXHR&&config.requestType==="xhr"){config.requestType="jsonp"}if(config.host){config.host.replace(/.*?:\/\//g,"")}if(config.protocol&&config.protocol==="auto"){config.protocol=location.protocol.replace(/:/g,"")}this.config={projectId:config.projectId,writeKey:config.writeKey,readKey:config.readKey,masterKey:config.masterKey,requestType:config.requestType||"jsonp",host:config.host||"api.keen.io/3.0",protocol:config.protocol||"https",globalProperties:null};this.trigger("ready");Keen.trigger("client",this,config)};Keen.prototype.masterKey=function(str){if(!arguments.length){return this.config.masterKey}this.config.masterKey=(str?String(str):null);return this};Keen.prototype.projectId=function(str){if(!arguments.length){return this.config.projectId}this.config.projectId=(str?String(str):null);return this};Keen.prototype.readKey=function(str){if(!arguments.length){return this.config.readKey}this.config.readKey=(str?String(str):null);return this};Keen.prototype.setGlobalProperties=function(newGlobalProperties){if(newGlobalProperties&&typeof(newGlobalProperties)=="function"){this.config.globalProperties=newGlobalProperties}else{Keen.log("Invalid value for global properties: "+ newGlobalProperties)}};Keen.prototype.trackExternalLink=function(jsEvent,eventCollection,payload,timeout,timeoutCallback){var evt=jsEvent,target=(evt.currentTarget)?evt.currentTarget:(evt.srcElement||evt.target),timer=timeout||500,triggered=false,targetAttr="",callback,win;if(target.getAttribute!==void 0){targetAttr=target.getAttribute("target")}else{if(target.target){targetAttr=target.target}}if((targetAttr=="_blank"||targetAttr=="blank")&&!evt.metaKey){win=window.open("about:blank");win.document.location=target.href}if(target.nodeName==="A"){callback=function(){if(!triggered&&!evt.metaKey&&(targetAttr!=="_blank"&&targetAttr!=="blank")){triggered=true;window.location=target.href}}}else{if(target.nodeName==="FORM"){callback=function(){if(!triggered){triggered=true;target.submit()}}}else{Keen.log("#trackExternalLink method not attached to an <a> or <form> DOM element")}}if(timeoutCallback){callback=function(){if(!triggered){triggered=true;timeoutCallback()}}}_uploadEvent.call(this,eventCollection,payload,callback,callback);setTimeout(callback,timer);if(!evt.metaKey){return false}};Keen.prototype.url=function(path){return this.config.protocol+"://"+ this.config.host+ path};Keen.prototype.writeKey=function(str){if(!arguments.length){return this.config.writeKey}this.config.writeKey=(str?String(str):null);return this};function _clone(target){return JSON.parse(JSON.stringify(target))}function _each(o,cb,s){var n;if(!o){return 0}s=!s?o:s;if(o instanceof Array){for(n=0;n<o.length;n++){if(cb.call(s,o[n],n,o)===false){return 0}}}else{for(n in o){if(o.hasOwnProperty(n)){if(cb.call(s,o[n],n,o)===false){return 0}}}}return 1}_extend(Keen.utils,{each:_each});function _extend(target){for(var i=1;i<arguments.length;i++){for(var prop in arguments[i]){target[prop]=arguments[i][prop]}}return target}_extend(Keen.utils,{extend:_extend});function _parseParams(str){var urlParams={},match,pl=/\+/g,search=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "))},query=str.split("?")[1];while(!!(match=search.exec(query))){urlParams[decode(match[1])]=decode(match[2])}return urlParams}_extend(Keen.utils,{parseParams:_parseParams});function _sendBeacon(url,params,success,error){var successCallback=success,errorCallback=error,loaded=false,img=document.createElement("img");success=null;error=null;img.onload=function(){loaded=true;if("naturalHeight"in this){if(this.naturalHeight+ this.naturalWidth===0){this.onerror();return}}else{if(this.width+ this.height===0){this.onerror();return}}if(successCallback){successCallback({created:true});successCallback=errorCallback=null}};img.onerror=function(){loaded=true;if(errorCallback){errorCallback();successCallback=errorCallback=null}};img.src=url+"&c=clv1"}function _sendJsonp(url,params,success,error){var timestamp=new Date().getTime(),successCallback=success,errorCallback=error,script=document.createElement("script"),parent=document.getElementsByTagName("head")[0],callbackName="keenJSONPCallback",loaded=false;success=null;error=null;callbackName+=timestamp;while(callbackName in window){callbackName+="a"}window[callbackName]=function(response){if(loaded===true){return}loaded=true;if(successCallback&&response){successCallback(response)}cleanup()};script.src=url+"&jsonp="+ callbackName;parent.appendChild(script);script.onreadystatechange=function(){if(loaded===false&&this.readyState==="loaded"){loaded=true;if(errorCallback){errorCallback()}}};script.onerror=function(){if(loaded===false){loaded=true;if(errorCallback){errorCallback()}cleanup()}};function cleanup(){window[callbackName]=undefined;try{delete window[callbackName]}catch(e){}successCallback=errorCallback=null;parent.removeChild(script)}}function _sendXhr(method,url,headers,body,success,error){var ids=["MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],successCallback=success,errorCallback=error,payload,xhr;success=null;error=null;if(window.XMLHttpRequest){xhr=new XMLHttpRequest()}else{for(var i=0;i<ids.length;i++){try{xhr=new ActiveXObject(ids[i]);break}catch(e){}}}xhr.onreadystatechange=function(){var response;if(xhr.readyState==4){if(xhr.status>=200&&xhr.status<300){try{response=JSON.parse(xhr.responseText)}catch(e){Keen.log("Could not parse HTTP response: "+ xhr.responseText);if(errorCallback){errorCallback(xhr,e);successCallback=errorCallback=null}}if(successCallback&&response){successCallback(response);successCallback=errorCallback=null}}else{Keen.log("HTTP request failed.");if(errorCallback){errorCallback(xhr,null);successCallback=errorCallback=null}}}};xhr.open(method,url,true);_each(headers,function(value,key){xhr.setRequestHeader(key,value)});if(body){payload=JSON.stringify(body)}if(method&&method.toUpperCase()==="GET"){xhr.send()}else{if(method&&method.toUpperCase()==="POST"){xhr.send(payload)}}}function _uploadEvent(eventCollection,payload,success,error){var urlBase,urlQueryString,reqType,data;if(!Keen.enabled){Keen.log("Event not recorded: Keen.enabled = false");return}if(!this.projectId()){Keen.log("Event not recorded: Missing projectId property");return}if(!this.writeKey()){Keen.log("Event not recorded: Missing writeKey property");return}urlBase=this.url("/projects/"+ this.projectId()+"/events/"+ eventCollection);urlQueryString="";reqType=this.config.requestType;data={};if(this.config.globalProperties){data=this.config.globalProperties(eventCollection)}_each(payload,function(value,key){data[key]=value});if(reqType!=="xhr"){urlQueryString+="?api_key="+ encodeURIComponent(this.writeKey());urlQueryString+="&data="+ encodeURIComponent(Keen.Base64.encode(JSON.stringify(data)));urlQueryString+="&modified="+ encodeURIComponent(new Date().getTime());if(String(urlBase+ urlQueryString).length<Keen.urlMaxLength){if(reqType==="jsonp"){_sendJsonp(urlBase+ urlQueryString,null,success,error)}else{_sendBeacon(urlBase+ urlQueryString,null,success,error)}return}}if(Keen.canXHR){_sendXhr("POST",urlBase,{Authorization:this.writeKey(),"Content-Type":"application/json"},data,success,error)}else{Keen.log("Event not sent: URL length exceeds current browser limit, and XHR (POST) is not supported.")}return};Keen.Base64={map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(n){var o="",i=0,m=this.map,i1,i2,i3,e1,e2,e3,e4;n=this.utf8.encode(n);while(i<n.length){i1=n.charCodeAt(i++);i2=n.charCodeAt(i++);i3=n.charCodeAt(i++);e1=(i1>>2);e2=(((i1&3)<<4)|(i2>>4));e3=(isNaN(i2)?64:((i2&15)<<2)|(i3>>6));e4=(isNaN(i2)||isNaN(i3))?64:i3&63;o=o+ m.charAt(e1)+ m.charAt(e2)+ m.charAt(e3)+ m.charAt(e4)}return o},decode:function(n){var o="",i=0,m=this.map,cc=String.fromCharCode,e1,e2,e3,e4,c1,c2,c3;n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<n.length){e1=m.indexOf(n.charAt(i++));e2=m.indexOf(n.charAt(i++));e3=m.indexOf(n.charAt(i++));e4=m.indexOf(n.charAt(i++));c1=(e1<<2)|(e2>>4);c2=((e2&15)<<4)|(e3>>2);c3=((e3&3)<<6)|e4;o=o+(cc(c1)+((e3!=64)?cc(c2):""))+(((e4!=64)?cc(c3):""))}return this.utf8.decode(o)},utf8:{encode:function(n){var o="",i=0,cc=String.fromCharCode,c;while(i<n.length){c=n.charCodeAt(i++);o=o+((c<128)?cc(c):((c>127)&&(c<2048))?(cc((c>>6)|192)+ cc((c&63)|128)):(cc((c>>12)|224)+ cc(((c>>6)&63)|128)+ cc((c&63)|128)))}return o},decode:function(n){var o="",i=0,cc=String.fromCharCode,c2,c;while(i<n.length){c=n.charCodeAt(i);o=o+((c<128)?[cc(c),i++][0]:((c>191)&&(c<224))?[cc(((c&31)<<6)|((c2=n.charCodeAt(i+ 1))&63)),(i+=2)][0]:[cc(((c&15)<<12)|(((c2=n.charCodeAt(i+ 1))&63)<<6)|((c3=n.charCodeAt(i+ 2))&63)),(i+=3)][0])}return o}}};;if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+ n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+ f(this.getUTCMonth()+ 1)+"-"+ f(this.getUTCDate())+"T"+ f(this.getUTCHours())+":"+ f(this.getUTCMinutes())+":"+ f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+ string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+ a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+ string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+ gap+ partial.join(",\n"+ gap)+"\n"+ mind+"]":"["+ partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+ v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+ v)}}}}v=partial.length===0?"{}":gap?"{\n"+ gap+ partial.join(",\n"+ gap)+"\n"+ mind+"}":"{"+ partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+ a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+ text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());(function(root,factory){root.utils.domready=factory()}(Keen,function(ready){var fns=[],fn,f=false,doc=document,testEl=doc.documentElement,hack=testEl.doScroll,domContentLoaded="DOMContentLoaded",addEventListener="addEventListener",onreadystatechange="onreadystatechange",readyState="readyState",loadedRgx=hack?/^loaded|^c/:/^loaded|c/,loaded=loadedRgx.test(doc[readyState]);function flush(f){loaded=1;while(f=fns.shift()){f()}}doc[addEventListener]&&doc[addEventListener](domContentLoaded,fn=function(){doc.removeEventListener(domContentLoaded,fn,f);flush()},f);hack&&doc.attachEvent(onreadystatechange,fn=function(){if(/^c/.test(doc[readyState])){doc.detachEvent(onreadystatechange,fn);flush()}});return(ready=hack?function(fn){self!=top?loaded?fn():fns.push(fn):function(){try{testEl.doScroll("left")}catch(e){return setTimeout(function(){ready(fn)},50)}fn()}()}:function(fn){loaded?fn():fns.push(fn)})}));if(Keen.loaded){setTimeout(function(){Keen.utils.domready(function(){Keen.trigger("ready")})},0)}_loadAsync();return Keen});var LZString=function(){function e(a,b){if(!d[a]){d[a]={};for(var c=0;c<a.length;c++)d[a][a.charAt(c)]=c}return d[a][b]}var a=String.fromCharCode,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",d={},f={compressToBase64:function(a){if(null==a)return"";var c=f._compress(a,6,function(a){return b.charAt(a)}),d=c.length%4;return 1==d&&(c+="==="),2==d&&(c+="=="),3==d&&(c+="="),c=c.split("+").join("-").split("/").join(".").split("=").join("_")},decompressFromBase64:function(a){return null==a?"":""==a?null:(a=a.split("-").join("+").split(".").join("/").split("_").join("="),f._decompress(a.length,32,function(c){return e(b,a.charAt(c))}))},compressToUTF16:function(b){return null==b?"":f._compress(b,15,function(b){return a(b+32)})+" "},decompressFromUTF16:function(a){return null==a?"":""==a?null:f._decompress(a.length,16384,function(b){return a.charCodeAt(b)-32})},compressToUint8Array:function(a){for(var b=f.compress(a),c=new Uint8Array(2*b.length),d=0,e=b.length;d<e;d++){var g=b.charCodeAt(d);c[2*d]=g>>>8,c[2*d+1]=g%256}return c},decompressFromUint8Array:function(b){if(null===b||void 0===b)return f.decompress(b);for(var c=new Array(b.length/2),d=0,e=c.length;d<e;d++)c[d]=256*b[2*d]+b[2*d+1];var g=[];return c.forEach(function(b){g.push(a(b))}),f.decompress(g.join(""))},compressToEncodedURIComponent:function(a){return null==a?"":f._compress(a,6,function(a){return c.charAt(a)})},decompressFromEncodedURIComponent:function(a){return null==a?"":""==a?null:(a=a.replace(/ /g,"+"),f._decompress(a.length,32,function(b){return e(c,a.charAt(b))}))},compress:function(b){return f._compress(b,16,function(b){return a(b)})},_compress:function(a,b,c){if(null==a)return"";var d,e,q,f={},g={},h="",i="",j="",k=2,l=3,m=2,n=[],o=0,p=0;for(q=0;q<a.length;q+=1)if(h=a.charAt(q),Object.prototype.hasOwnProperty.call(f,h)||(f[h]=l++,g[h]=!0),i=j+h,Object.prototype.hasOwnProperty.call(f,i))j=i;else{if(Object.prototype.hasOwnProperty.call(g,j)){if(j.charCodeAt(0)<256){for(d=0;d<m;d++)o<<=1,p==b-1?(p=0,n.push(c(o)),o=0):p++;for(e=j.charCodeAt(0),d=0;d<8;d++)o=o<<1|1&e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e>>=1}else{for(e=1,d=0;d<m;d++)o=o<<1|e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e=0;for(e=j.charCodeAt(0),d=0;d<16;d++)o=o<<1|1&e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e>>=1}k--,0==k&&(k=Math.pow(2,m),m++),delete g[j]}else for(e=f[j],d=0;d<m;d++)o=o<<1|1&e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e>>=1;k--,0==k&&(k=Math.pow(2,m),m++),f[i]=l++,j=String(h)}if(""!==j){if(Object.prototype.hasOwnProperty.call(g,j)){if(j.charCodeAt(0)<256){for(d=0;d<m;d++)o<<=1,p==b-1?(p=0,n.push(c(o)),o=0):p++;for(e=j.charCodeAt(0),d=0;d<8;d++)o=o<<1|1&e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e>>=1}else{for(e=1,d=0;d<m;d++)o=o<<1|e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e=0;for(e=j.charCodeAt(0),d=0;d<16;d++)o=o<<1|1&e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e>>=1}k--,0==k&&(k=Math.pow(2,m),m++),delete g[j]}else for(e=f[j],d=0;d<m;d++)o=o<<1|1&e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e>>=1;k--,0==k&&(k=Math.pow(2,m),m++)}for(e=2,d=0;d<m;d++)o=o<<1|1&e,p==b-1?(p=0,n.push(c(o)),o=0):p++,e>>=1;for(;;){if(o<<=1,p==b-1){n.push(c(o));break}p++}return n.join("")},decompress:function(a){return null==a?"":""==a?null:f._decompress(a.length,32768,function(b){return a.charCodeAt(b)})},_decompress:function(b,c,d){var f,l,m,n,o,p,q,r,e=[],g=4,h=4,i=3,j="",k=[],s={val:d(0),position:c,index:1};for(l=0;l<3;l+=1)e[l]=l;for(n=0,p=Math.pow(2,2),q=1;q!=p;)o=s.val&s.position,s.position>>=1,0==s.position&&(s.position=c,s.val=d(s.index++)),n|=(o>0?1:0)*q,q<<=1;switch(f=n){case 0:for(n=0,p=Math.pow(2,8),q=1;q!=p;)o=s.val&s.position,s.position>>=1,0==s.position&&(s.position=c,s.val=d(s.index++)),n|=(o>0?1:0)*q,q<<=1;r=a(n);break;case 1:for(n=0,p=Math.pow(2,16),q=1;q!=p;)o=s.val&s.position,s.position>>=1,0==s.position&&(s.position=c,s.val=d(s.index++)),n|=(o>0?1:0)*q,q<<=1;r=a(n);break;case 2:return""}for(e[3]=r,m=r,k.push(r);;){if(s.index>b)return"";for(n=0,p=Math.pow(2,i),q=1;q!=p;)o=s.val&s.position,s.position>>=1,0==s.position&&(s.position=c,s.val=d(s.index++)),n|=(o>0?1:0)*q,q<<=1;switch(r=n){case 0:for(n=0,p=Math.pow(2,8),q=1;q!=p;)o=s.val&s.position,s.position>>=1,0==s.position&&(s.position=c,s.val=d(s.index++)),n|=(o>0?1:0)*q,q<<=1;e[h++]=a(n),r=h-1,g--;break;case 1:for(n=0,p=Math.pow(2,16),q=1;q!=p;)o=s.val&s.position,s.position>>=1,0==s.position&&(s.position=c,s.val=d(s.index++)),n|=(o>0?1:0)*q,q<<=1;e[h++]=a(n),r=h-1,g--;break;case 2:return k.join("")}if(0==g&&(g=Math.pow(2,i),i++),e[r])j=e[r];else{if(r!==h)return null;j=m+m.charAt(0)}k.push(j),e[h++]=m+j.charAt(0),g--,m=j,0==g&&(g=Math.pow(2,i),i++)}}};return f}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+ a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+ k,n=e[m]||e["* "+ k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+ k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+ m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+ f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+ e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+ e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+ e[g]))||0:d-=parseFloat(f.css(a,"border"+ e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+ e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+ e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+ e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+ i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+ c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length- 1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+ a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+ c:b&&(d.selector=this.selector+"."+ b+"("+ c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+ 1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+ b))();e.error("Invalid JSON: "+ b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+ c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+ c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j- 1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+ b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test("Â ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+ o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+ k+"border:5px solid #000;padding:0;'",o="<div "+ n+"><div></div></div>"+"<table "+ n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+ j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+ m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+ Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+ d[1]:"";if(c===b){h=this.triggerHandler("getData"+ d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+ d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+ d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+ 1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)- 1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+ b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+ e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+ b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+ g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+ c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+ a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+ this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+ 1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+ d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+ b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+ b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+ m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+ b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+ l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+ f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+ i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+ h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+ h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+ b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+ e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+ a.guid)||0)%d;f._data(this,"lastToggle"+ a.guid,e+ 1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+ w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length- 1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b- 1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length- 1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length- 1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+ a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+ a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+ h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+ a[2]||a[2]);a[2]=b[1]+(b[2]||1)- 0,a[3]=b[3]- 0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+ a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length- 1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]- 0},gt:function(a,b,c){return b>c[3]- 0},nth:function(a,b,c){return c[3]- 0===b},eq:function(a,b,c){return c[3]- 0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex- e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+ e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length- g.length)===g:f==="|="?e===g||e.substr(0,g.length+ 1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b- 0+ 1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+ o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex- b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+ d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+ n+"'] "+ b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+ a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+ V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m- 1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+ a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+ k+ m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length- 1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof(r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+ 1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+ 1)*+g[2]+ parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/ 100 + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || ""; c.zoom = 1; if (b >= 1 && f.trim(g.replace(bq, "")) === "") { c.removeAttribute("filter"); if (d && !d.filter) return } c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e } }), f(function () { f.support.reliableMarginRight || (f.cssHooks.marginRight = { get: function (a, b) { var c; f.swap(a, { display: "inline-block" }, function () { b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight }); return c } }) }), c.defaultView && c.defaultView.getComputedStyle && (bA = function (a, b) { var c, d, e; b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))); return c }), c.documentElement.currentStyle && (bB = function (a, b) { var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style; f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)); return f === "" ? "auto" : f }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) { var b = a.offsetWidth, c = a.offsetHeight; return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none" }, f.expr.filters.visible = function (a) { return !f.expr.filters.hidden(a) }); var bD = /%20/g, bE = /\[\]$/, bF = /\r?\n/g, bG = /#.*$/, bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bK = /^(?:GET|HEAD)$/, bL = /^\/\//, bM = /\?/, bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bO = /^(?:select|textarea)/i, bP = /\s+/, bQ = /([?&])_=[^&]*/, bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bS = f.fn.load, bT = {}, bU = {}, bV, bW, bX = ["*/"] + ["*"]; try { bV = e.href } catch (bY) { bV = c.createElement("a"), bV.href = "", bV = bV.href } bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({ load: function (a, c, d) { if (typeof a != "string" && bS) return bS.apply(this, arguments); if (!this.length) return this; var e = a.indexOf(" "); if (e >= 0) { var g = a.slice(e, a.length); a = a.slice(0, e) } var h = "GET"; c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST")); var i = this; f.ajax({ url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) { c = a.responseText, a.isResolved() && (a.done(function (a) { c = a }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a]) } }); return this }, serialize: function () { return f.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { return this.elements ? f.makeArray(this.elements) : this }).filter(function () { return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type)) }).map(function (a, b) { var c = f(this).val(); return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) { return { name: b.name, value: a.replace(bF, "\r\n") } }) : { name: b.name, value: c.replace(bF, "\r\n") } }).get() } }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) { f.fn[b] = function (a) { return this.on(b, a) } }), f.each(["get", "post"], function (a, c) { f[c] = function (a, d, e, g) { f.isFunction(d) && (g = g || e, e = d, d = b); return f.ajax({ type: c, url: a, data: d, success: e, dataType: g }) } }), f.extend({ getScript: function (a, c) { return f.get(a, b, c, "script") }, getJSON: function (a, b, c) { return f.get(a, b, c, "json") }, ajaxSetup: function (a, b) { b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b); return a }, ajaxSettings: { url: bV, isLocal: bJ.test(bW[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bX }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML }, flatOptions: { context: !0, url: !0 } }, ajaxPrefilter: bZ(bT), ajaxTransport: bZ(bU), ajax: function (a, c) { function w(a, c, l, m) { if (s !== 2) { s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0; var o, r, u, w = c, x = l ? cb(d, v, l) : b, y, z; if (a >= 200 && a < 300 || a === 304) { if (d.ifModified) { if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y; if (z = v.getResponseHeader("Etag")) f.etag[k] = z } if (a === 304) w = "notmodified", o = !0; else try { r = cc(d, x), w = "success", o = !0 } catch (A) { w = "parsererror", u = A } } else { u = w; if (!w || a) w = "error", a < 0 && (a = 0) } v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop")) } } typeof a == "object" && (c = a, a = b), c = c || {}; var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = { readyState: 0, setRequestHeader: function (a, b) { if (!s) { var c = a.toLowerCase(); a = m[c] = m[c] || a, l[a] = b } return this }, getAllResponseHeaders: function () { return s === 2 ? n : null }, getResponseHeader: function (a) { var c; if (s === 2) { if (!o) { o = {}; while (c = bH.exec(n)) o[c[1].toLowerCase()] = c[2] } c = o[a.toLowerCase()] } return c === b ? null : c }, overrideMimeType: function (a) { s || (d.mimeType = a); return this }, abort: function (a) { a = a || "abort", p && p.abort(a), w(0, a); return this } }; h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) { if (a) { var b; if (s < 2) for (b in a) j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b) } return this }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v); if (s === 2) return !1; t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart"); if (!d.hasContent) { d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url; if (d.cache === !1) { var x = f.now(), y = d.url.replace(bQ, "$1_=" + x); d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "") } } (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]); for (u in d.headers) v.setRequestHeader(u, d.headers[u]); if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) { v.abort(); return !1 } for (u in { success: 1, error: 1, complete: 1 }) v[u](d[u]); p = b$(bU, d, c, v); if (!p) w(-1, "No Transport"); else { v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () { v.abort("timeout") }, d.timeout)); try { s = 1, p.send(l, w) } catch (z) { if (s < 2) w(-1, z); else throw z } } return v }, param: function (a, c) { var d = [], e = function (a, b) { b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; c === b && (c = f.ajaxSettings.traditional); if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () { e(this.name, this.value) }); else for (var g in a) ca(g, a[g], c, e); return d.join("&").replace(bD, "+") } }), f.extend({ active: 0, lastModified: {}, etag: {} }); var cd = f.now(), ce = /(\=)\?(&|$)|\?\?/i; f.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { return f.expando + "_" + cd++ } }), f.ajaxPrefilter("json jsonp", function (b, c, d) { var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string"; if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) { var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2"; b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) { g = [a] }, d.always(function () { a[h] = i, g && f.isFunction(i) && a[h](g[0]) }), b.converters["script json"] = function () { g || f.error(h + " was not called"); return g[0] }, b.dataTypes[0] = "json"; return "script" } }), f.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function (a) { f.globalEval(a); return a } } }), f.ajaxPrefilter("script", function (a) { a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), f.ajaxTransport("script", function (a) { if (a.crossDomain) { var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement; return { send: function (f, g) { d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) { if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success") }, e.insertBefore(d, e.firstChild) }, abort: function () { d && d.onload(0, 1) } } } }); var cf = a.ActiveXObject ? function () { for (var a in ch) ch[a](0, 1) } : !1, cg = 0, ch; f.ajaxSettings.xhr = a.ActiveXObject ? function () { return !this.isLocal && ci() || cj() } : ci, function (a) { f.extend(f.support, { ajax: !!a, cors: !!a && "withCredentials" in a }) }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) { if (!c.crossDomain || f.support.cors) { var d; return { send: function (e, g) { var h = c.xhr(), i, j; c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async); if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j]; c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest"); try { for (j in e) h.setRequestHeader(j, e[j]) } catch (k) { } h.send(c.hasContent && c.data || null), d = function (a, e) { var j, k, l, m, n; try { if (d && (e || h.readyState === 4)) { d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]); if (e) h.readyState !== 4 && h.abort(); else { j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText; try { k = h.statusText } catch (o) { k = "" } !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204) } } } catch (p) { e || g(-1, p) } m && g(j, k, m, l) }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d) }, abort: function () { d && d(0, 1) } } } }); var ck = {}, cl, cm, cn = /^(?:toggle|show|hide)$/, co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cp, cq = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cr; f.fn.extend({ show: function (a, b, c) { var d, e; if (a || a === 0) return this.animate(cu("show", 3), a, b, c); for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName))); for (g = 0; g < h; g++) { d = this[g]; if (d.style) { e = d.style.display; if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || "" } } return this }, hide: function (a, b, c) { if (a || a === 0) return this.animate(cu("hide", 3), a, b, c); var d, e, g = 0, h = this.length; for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e)); for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none"); return this }, _toggle: f.fn.toggle, toggle: function (a, b, c) { var d = typeof a == "boolean"; f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () { var b = d ? a : f(this).is(":hidden"); f(this)[b ? "show" : "hide"]() }) : this.animate(cu("toggle", 3), a, b, c); return this }, fadeTo: function (a, b, c, d) { return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { function g() { e.queue === !1 && f._mark(this); var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o; b.animatedProperties = {}; for (i in a) { g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing"; if (h === "hide" && d || h === "show" && !d) return b.complete.call(this); c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1)) } b.overflow != null && (this.style.overflow = "hidden"); for (i in a) j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, "")); return !0 } var e = f.speed(b, c, d); if (f.isEmptyObject(a)) return this.each(e.complete, [!1]); a = f.extend({}, a); return e.queue === !1 ? this.each(g) : this.queue(e.queue, g) }, stop: function (a, c, d) { typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []); return this.each(function () { function h(a, b, c) { var e = b[c]; f.removeData(a, c, !0), e.stop(d) } var b, c = !1, e = f.timers, g = f._data(this); d || f._unmark(!0, this); if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b); for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1)); (!d || !c) && f.dequeue(this, a) }) } }), f.each({ slideDown: cu("show", 1), slideUp: cu("hide", 1), slideToggle: cu("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { f.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), f.extend({ speed: function (a, b, c) { var d = a && typeof a == "object" ? f.extend({}, a) : { complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b }; d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default; if (d.queue == null || d.queue === !0) d.queue = "fx"; d.old = d.complete, d.complete = function (a) { f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this) }; return d }, easing: { linear: function (a, b, c, d) { return c + d * a }, swing: function (a, b, c, d) { return (-Math.cos(a * Math.PI) / 2 + .5) * d + c } }, timers: [], fx: function (a, b, c) { this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {} } }), f.fx.prototype = { update: function () { this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this) }, cur: function () { if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop]; var a, b = f.css(this.elem, this.prop); return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a }, custom: function (a, c, d) { function h(a) { return e.step(a) } var e = this, g = f.fx; this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () { e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start) }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval)) }, show: function () { var a = f._data(this.elem, "fxshow" + this.prop); this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show() }, hide: function () { this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0) }, step: function (a) { var b, c, d, e = cr || cs(), g = !0, h = this.elem, i = this.options; if (a || e >= i.duration + this.startTime) { this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0; for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1); if (g) { i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) { h.style["overflow" + b] = i.overflow[a] }), i.hide && f(h).hide(); if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0); d = i.complete, d && (i.complete = !1, d.call(h)) } return !1 } i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(); return !0 } }, f.extend(f.fx, { tick: function () { var a, b = f.timers, c = 0; for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1); b.length || f.fx.stop() }, interval: 13, stop: function () { clearInterval(cp), cp = null }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function (a) { f.style(a.elem, "opacity", a.now) }, _default: function (a) { a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now } } }), f.each(["width", "height"], function (a, b) { f.fx.step[b] = function (a) { f.style(a.elem, b, Math.max(0, a.now) + a.unit) } }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) { return f.grep(f.timers, function (b) { return a === b.elem }).length }); var cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i; "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) { var b = this[0], c; if (a) return this.each(function (b) { f.offset.setOffset(this, a, b) }); if (!b || !b.ownerDocument) return null; if (b === b.ownerDocument.body) return f.offset.bodyOffset(b); try { c = b.getBoundingClientRect() } catch (d) { } var e = b.ownerDocument, g = e.documentElement; if (!c || !f.contains(g, b)) return c ? { top: c.top, left: c.left } : { top: 0, left: 0 }; var h = e.body, i = cy(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0, l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop, m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j, o = c.left + m - k; return { top: n, left: o } } : f.fn.offset = function (a) { var b = this[0]; if (a) return this.each(function (b) { f.offset.setOffset(this, a, b) }); if (!b || !b.ownerDocument) return null; if (b === b.ownerDocument.body) return f.offset.bodyOffset(b); var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft; while ((b = b.parentNode) && b !== i && b !== h) { if (f.support.fixedPosition && k.position === "fixed") break; c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c } if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft; f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft)); return { top: l, left: m } }, f.offset = { bodyOffset: function (a) { var b = a.offsetTop, c = a.offsetLeft; f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0); return { top: b, left: c } }, setOffset: function (a, b, c) { var d = f.css(a, "position"); d === "static" && (a.style.position = "relative"); var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n; j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k) } }, f.fn.extend({ position: function () { if (!this[0]) return null; var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset(); c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0; return { top: c.top - d.top, left: c.left - d.left } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || c.body; while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent; return a }) } }), f.each(["Left", "Top"], function (a, c) { var d = "scroll" + c; f.fn[d] = function (c) { var e, g; if (c === b) { e = this[0]; if (!e) return null; g = cy(e); return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d] } return this.each(function () { g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c }) } }), f.each(["Height", "Width"], function (a, c) { var d = c.toLowerCase(); f.fn["inner" + c] = function () { var a = this[0]; return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null }, f.fn["outer" + c] = function (a) { var b = this[0]; return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null }, f.fn[d] = function (a) { var e = this[0]; if (!e) return a == null ? null : this; if (f.isFunction(a)) return this.each(function (b) { var c = f(this); c[d](a.call(this, b, c[d]())) }); if (f.isWindow(e)) { var g = e.document.documentElement["client" + c], h = e.document.body; return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g } if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]); if (a === b) { var i = f.css(e, d), j = parseFloat(i); return f.isNumeric(j) ? j : i } return this.css(d, typeof a == "string" ? a : a + "px") } }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () { return f })})(DIGIOH_WIN_PARENT);var JQUERY_DIGIOH=DIGIOH_WIN_PARENT.jQuery.noConflict(true);JQUERY_DIGIOH.idleTimer=function(firstParam,elem,opts){opts=JQUERY_DIGIOH.extend({startImmediately:true,idle:false,enabled:true,timeout:30000,events:"mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove"},opts);elem=elem||DIGIOH_WIN_PARENT.document;var jqElem=JQUERY_DIGIOH(elem),obj=jqElem.data("idleTimerObj")||{},toggleIdleState=function(myelem){if(typeof myelem==="number"){myelem=undefined;}
var obj=JQUERY_DIGIOH.data(myelem||elem,"idleTimerObj");obj.idle=!obj.idle;var elapsed=(+new Date())- obj.olddate;obj.olddate=+new Date();if(obj.idle&&(elapsed<opts.timeout)){obj.idle=false;DIGIOH_WIN_PARENT.clearTimeout(JQUERY_DIGIOH.idleTimer.tId);if(opts.enabled){JQUERY_DIGIOH.idleTimer.tId=DIGIOH_WIN_PARENT.setTimeout(toggleIdleState,opts.timeout);}
return;}
var event=JQUERY_DIGIOH.Event(JQUERY_DIGIOH.data(elem,"idleTimer",obj.idle?"idle":"active")+".idleTimer");JQUERY_DIGIOH(elem).trigger(event);},stop=function(jqElem){var obj=jqElem.data("idleTimerObj")||{};obj.enabled=false;DIGIOH_WIN_PARENT.clearTimeout(obj.tId);jqElem.off(".idleTimer");};obj.olddate=obj.olddate||+new Date();if(typeof firstParam==="number"){opts.timeout=firstParam;}else if(firstParam==="destroy"){stop(jqElem);return this;}else if(firstParam==="getElapsedTime"){return(+new Date())- obj.olddate;}
jqElem.on(JQUERY_DIGIOH.trim((opts.events+" ").split(" ").join(".idleTimer ")),function(){var obj=JQUERY_DIGIOH.data(this,"idleTimerObj");DIGIOH_WIN_PARENT.clearTimeout(obj.tId);if(obj.enabled){if(obj.idle){toggleIdleState(this);}
obj.tId=DIGIOH_WIN_PARENT.setTimeout(toggleIdleState,obj.timeout);}});obj.idle=opts.idle;obj.enabled=opts.enabled;obj.timeout=opts.timeout;if(opts.startImmediately){obj.tId=DIGIOH_WIN_PARENT.setTimeout(toggleIdleState,obj.timeout);}
jqElem.data("idleTimer","active");jqElem.data("idleTimerObj",obj);};JQUERY_DIGIOH.fn.idleTimer=function(firstParam,opts){if(!opts){opts={};}
if(this[0]){JQUERY_DIGIOH.idleTimer(firstParam,this[0],opts);}
return this;};if(DIGIOH_EMBED_TYPE==='inline'){}
var DIGIOH_STORAGE={data:{},callbacks:{},set:function(){if(typeof DIGIOH_STORAGE.data!=='object'||DIGIOH_STORAGE.data===null){DIGIOH_STORAGE.data={};}
if(DIGIOH_LOCAL_STORAGE.isWorking){DIGIOH_LOCAL_STORAGE.set(DIGIOH_STORAGE.data);}else{DIGIOH_COOKIE.set(DIGIOH_VENDOR_GUID,JSON.stringify(DIGIOH_STORAGE.data));}},get:function(callback){if(DIGIOH_LOCAL_STORAGE.isWorking){DIGIOH_LOCAL_STORAGE.get(callback);}else{callback(DIGIOH_COOKIE.getEncoded(DIGIOH_VENDOR_GUID));}},erase:function(){if(DIGIOH_LOCAL_STORAGE.isWorking){DIGIOH_LOCAL_STORAGE.erase();}else{DIGIOH_COOKIE.erase(DIGIOH_VENDOR_GUID);}}};var DIGIOH_LOCAL_STORAGE={isWorking:false,isWorkingFinished:false,callbacks:{},set:function(value){var data_val='';if(typeof value!=='object'||value===null){data_val=LZString.compressToBase64(JSON.stringify({}));}else{data_val=LZString.compressToBase64(JSON.stringify(value));}
var obj={operation:"set",value:data_val,vid:DIGIOH_VENDOR_GUID};DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');},get:function(callback){var identifier=new Date().getTime();var obj={operation:"get",identifier:identifier,vid:DIGIOH_VENDOR_GUID};DIGIOH_LOCAL_STORAGE.callbacks[identifier]=callback;DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');},erase:function(){var obj={operation:"erase",vid:DIGIOH_VENDOR_GUID};DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');},setInner:function(key,value){var data_type='';var data_val='';if(typeof value==='undefined'||value===null){data_val=LZString.compressToBase64('');data_type='string';}else if(typeof value==='object'){data_val=LZString.compressToBase64(JSON.stringify(value));data_type='object';}else{data_val=LZString.compressToBase64(value.toString());data_type=(typeof value);}
var obj={operation:"set_inner",key:key,value:data_val,type:data_type,vid:DIGIOH_VENDOR_GUID};DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');},getInner:function(key,callback){var identifier=new Date().getTime();var obj={operation:"get_inner",key:key,identifier:identifier,vid:DIGIOH_VENDOR_GUID};DIGIOH_LOCAL_STORAGE.callbacks[identifier]=callback;DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');},eraseInner:function(key){var obj={operation:"erase_inner",key:key,vid:DIGIOH_VENDOR_GUID};DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');},setManual:function(key,value){var data_val='';if(typeof value==='undefined'||value===null){data_val=LZString.compressToBase64('');}else if(typeof value==='object'){data_val=LZString.compressToBase64(JSON.stringify(value));}else{data_val=LZString.compressToBase64(value.toString());}
var obj={operation:"set_manual",key:key,value:data_val,vid:DIGIOH_VENDOR_GUID};DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');},getManual:function(key,callback){var identifier=new Date().getTime();var obj={operation:"get_manual",key:key,identifier:identifier,vid:DIGIOH_VENDOR_GUID};DIGIOH_LOCAL_STORAGE.callbacks[identifier]=callback;DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');},eraseManual:function(key){var obj={operation:"erase_manual",key:key,vid:DIGIOH_VENDOR_GUID};DIGIOH_WIN_PARENT.frames['DigiohLocalStorageIframe'].postMessage(JSON.stringify(obj),'https://www.lightboxcdn.com');}};var DIGIOH_COOKIE={set:function(name,value,days){DIGIOH_COOKIE.trySet(name,value,true,days);},setDecoded:function(name,value,days){DIGIOH_COOKIE.trySet(name,value,false,days);},trySet:function(name,value,encode,days,cookie_domain_override){var domain,domainParts,date,expires,host;var enc='';if(value){if(encode){enc=LZString.compressToBase64(value);}else{enc=value;}}
if(typeof days==='undefined'){days=3650;}
date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+ date.toGMTString();host=location.host;if(cookie_domain_override){DIGIOH_DOC_PARENT.cookie=name+"="+ enc+ expires+"; path=/; domain="+ cookie_domain_override;}
else if(host.split('.').length===1){DIGIOH_DOC_PARENT.cookie=name+"="+ enc+ expires+"; path=/";}
else if(DIGIOH_VENDOR_GUID=='5fb5fbce-1665-4cb1-a778-84825f66a775'&&host.indexOf('golfchannel.com')>=0){DIGIOH_DOC_PARENT.cookie=name+"="+ enc+ expires+"; path=/; domain=.golfchannel.com";}
else{domainParts=host.split('.').reverse();var wasWritten=false;var idx=1;var cv='';while(!wasWritten&&idx<domainParts.length){domain="";for(var i=idx;i>=0;i--){domain+='.'+ domainParts[i];}
DIGIOH_DOC_PARENT.cookie=name+"="+ enc+ expires+"; path=/; domain="+ domain;cv=DIGIOH_COOKIE.getEncoded(name);wasWritten=(cv!=null&&cv==enc);idx++;if(!wasWritten){}}}},get:function(name,is_plain_text){var enc=DIGIOH_COOKIE.getEncoded(name);if(enc!==null&&typeof enc!=='undefined'){if(is_plain_text){return enc;}else{return LZString.decompressFromBase64(enc);}}
return null;},getEncoded:function(name){var nameEQ=name+"=";var ca=DIGIOH_DOC_PARENT.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length);}
if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;},erase:function(name){DIGIOH_COOKIE.setDecoded(name,'hi',-1);},eraseWithoutDomain:function(name){var date=new Date();date.setTime(date.getTime()+(-1*24*60*60*1000));var expires="; expires="+ date.toGMTString();DIGIOH_DOC_PARENT.cookie=name+"="+'hi'+ expires+"; path=/";},eraseWithSpecificDomain:function(name,domain){var date=new Date();date.setTime(date.getTime()+(-1*24*60*60*1000));var expires="; expires="+ date.toGMTString();DIGIOH_DOC_PARENT.cookie=name+"="+'hi'+ expires+"; path=/; domain="+ domain;}};(function(window,document,$,undefined){var H=$("html"),W=$(window),D=$(document),F=$.fb_digioh=function(){F.open.apply(this,arguments)},IE=navigator.userAgent.match(/msie/i),didUpdate=null,isTouch=document.createTouch!==undefined,isQuery=function(obj){return obj&&obj.hasOwnProperty&&obj instanceof $},isString=function(str){return str&&$.type(str)==="string"},isPercentage=function(str){return isString(str)&&str.indexOf("%")>0},isScrollable=function(el){return(el&&!(el.style.overflow&&el.style.overflow==="hidden")&&((el.clientWidth&&el.scrollWidth>el.clientWidth)||(el.clientHeight&&el.scrollHeight>el.clientHeight)))},getScalar=function(orig,dim){var value=parseInt(orig,10)||0;if(dim&&isPercentage(orig)){value=F.getViewport()[dim]/100*value}return Math.ceil(value)},getValue=function(value,dim){return getScalar(value,dim)+"px"};$.extend(F,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!isTouch,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fb_digioh":true}},iframe:{scrolling:"auto",preload:true},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fb_digioh-wrap" tabIndex="-1"><div class="fb_digioh-skin"><div class="fb_digioh-outer"><div class="fb_digioh-inner"></div></div></div></div>',image:'<img class="fb_digioh-image" src="{href}" alt="" />',iframe:'<iframe id="fb_digioh-frame{rnd}" name="fb_digioh-frame{rnd}" class="fb_digioh-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(IE?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fb_digioh-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fb_digioh-item fb_digioh-close" href="javascript:;"></a>',next:'<a title="Next" class="fb_digioh-nav fb_digioh-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fb_digioh-nav fb_digioh-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:true,title:true},onCancel:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeChange:$.noop,beforeClose:$.noop,afterClose:$.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(group,opts){if(!group){return}if(!$.isPlainObject(opts)){opts={}}if(false===F.close(true)){return}if(!$.isArray(group)){group=isQuery(group)?$(group).get():[group]}$.each(group,function(i,element){var obj={},href,title,content,type,rez,hrefParts,selector;if($.type(element)==="object"){if(element.nodeType){element=$(element)}if(isQuery(element)){obj={href:element.data("fb_digioh-href")||element.attr("href"),title:element.data("fb_digioh-title")||element.attr("title"),isDom:true,element:element};if($.metadata){$.extend(true,obj,element.metadata())}}else{obj=element}}href=opts.href||obj.href||(isString(element)?element:null);title=opts.title!==undefined?opts.title:obj.title||"";content=opts.content||obj.content;type=content?"html":(opts.type||obj.type);if(!type&&obj.isDom){type=element.data("fb_digioh-type");if(!type){rez=element.prop("class").match(/fb_digioh\.(\w+)/);type=rez?rez[1]:null}}if(isString(href)){if(!type){if(F.isImage(href)){type="image"}else{if(F.isSWF(href)){type="swf"}else{if(href.charAt(0)==="#"){type="inline"}else{if(isString(element)){type="html";content=element}}}}}if(type==="ajax"){hrefParts=href.split(/\s+/,2);href=hrefParts.shift();selector=hrefParts.shift()}}if(!content){if(type==="inline"){if(href){content=$(isString(href)?href.replace(/.*(?=#[^\s]+$)/,""):href)}else{if(obj.isDom){content=element}}}else{if(type==="html"){content=href}else{if(!type&&!href&&obj.isDom){type="inline";content=element}}}}$.extend(obj,{href:href,type:type,content:content,title:title,selector:selector});group[i]=obj});F.opts=$.extend(true,{},F.defaults,opts);if(opts.keys!==undefined){F.opts.keys=opts.keys?$.extend({},F.defaults.keys,opts.keys):false}F.group=group;return F._start(F.opts.index)},cancel:function(){var coming=F.coming;if(!coming||false===F.trigger("onCancel")){return}F.hideLoading();if(F.ajaxLoad){F.ajaxLoad.abort()}F.ajaxLoad=null;if(F.imgPreload){F.imgPreload.onload=F.imgPreload.onerror=null}if(coming.wrap){coming.wrap.stop(true,true).trigger("onReset").remove()}F.coming=null;if(!F.current){F._afterZoomOut(coming)}},close:function(event){F.cancel();if(false===F.trigger("beforeClose")){return}F.unbindEvents();if(!F.isActive){return}if(!F.isOpen||event===true){$(".fb_digioh-wrap").stop(true).trigger("onReset").remove();F._afterZoomOut()}else{F.isOpen=F.isOpened=false;F.isClosing=true;$(".fb_digioh-item, .fb_digioh-nav").remove();F.wrap.stop(true,true).removeClass("fb_digioh-opened");F.transitions[F.current.closeMethod]()}},play:function(action){var clear=function(){clearTimeout(F.player.timer)},set=function(){clear();if(F.current&&F.player.isActive){F.player.timer=setTimeout(F.next,F.current.playSpeed)}},stop=function(){clear();D.unbind(".player");F.player.isActive=false;F.trigger("onPlayEnd")},start=function(){if(F.current&&(F.current.loop||F.current.index<F.group.length- 1)){F.player.isActive=true;D.bind({"onCancel.player beforeClose.player":stop,"onUpdate.player":set,"beforeLoad.player":clear});set();F.trigger("onPlayStart")}};if(action===true||(!F.player.isActive&&action!==false)){start()}else{stop()}},next:function(direction){var current=F.current;if(current){if(!isString(direction)){direction=current.direction.next}F.jumpto(current.index+ 1,direction,"next")}},prev:function(direction){var current=F.current;if(current){if(!isString(direction)){direction=current.direction.prev}F.jumpto(current.index- 1,direction,"prev")}},jumpto:function(index,direction,router){var current=F.current;if(!current){return}index=getScalar(index);F.direction=direction||current.direction[(index>=current.index?"next":"prev")];F.router=router||"jumpto";if(current.loop){if(index<0){index=current.group.length+(index%current.group.length)}index=index%current.group.length}if(current.group[index]!==undefined){F.cancel();F._start(index)}},reposition:function(e,onlyAbsolute){var current=F.current,wrap=current?current.wrap:null,pos;if(wrap){pos=F._getPosition(onlyAbsolute);if(e&&e.type==="scroll"){delete pos.position;wrap.stop(true,true).animate(pos,200)}else{wrap.css(pos);current.pos=$.extend({},current.dim,pos)}}},update:function(e){var type=(e&&e.type),anyway=!type||type==="orientationchange";if(anyway){clearTimeout(didUpdate);didUpdate=null}if(!F.isOpen||didUpdate){return}didUpdate=setTimeout(function(){var current=F.current;if(!current||F.isClosing){return}F.wrap.removeClass("fb_digioh-tmp");if(anyway||type==="load"||(type==="resize"&&current.autoResize)){F._setDimension()}if(!(type==="scroll"&&current.canShrink)){F.reposition(e)}F.trigger("onUpdate");didUpdate=null},(anyway&&!isTouch?0:300))},toggle:function(action){if(F.isOpen){F.current.fitToView=$.type(action)==="boolean"?action:!F.current.fitToView;if(isTouch){F.wrap.removeAttr("style").addClass("fb_digioh-tmp");F.trigger("onUpdate")}F.update()}},hideLoading:function(){D.unbind(".loading");$("#fb_digioh-loading").remove()},showLoading:function(){var el,viewport;F.hideLoading();el=$('<div id="fb_digioh-loading"><div></div></div>').click(F.cancel).appendTo("body");D.bind("keydown.loading",function(e){if((e.which||e.keyCode)===27){e.preventDefault();F.cancel()}});if(!F.defaults.fixed){viewport=F.getViewport();el.css({position:"absolute",top:(viewport.h*0.5)+ viewport.y,left:(viewport.w*0.5)+ viewport.x})}},getViewport:function(){var locked=(F.current&&F.current.locked)||false,rez={x:W.scrollLeft(),y:W.scrollTop()};if(locked){rez.w=locked[0].clientWidth;rez.h=locked[0].clientHeight}else{rez.w=isTouch&&window.innerWidth?window.innerWidth:W.width();rez.h=isTouch&&window.innerHeight?window.innerHeight:W.height()}return rez},unbindEvents:function(){if(F.wrap&&isQuery(F.wrap)){F.wrap.unbind(".fb")}D.unbind(".fb");W.unbind(".fb")},bindEvents:function(){var current=F.current,keys;if(!current){return}W.bind("orientationchange.fb"+(isTouch?"":" resize.fb")+(current.autoCenter&&!current.locked?" scroll.fb":""),F.update);keys=current.keys;if(keys){D.bind("keydown.fb",function(e){var code=e.which||e.keyCode,target=e.target||e.srcElement;if(code===27&&F.coming){return false}if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&!(target&&(target.type||$(target).is("[contenteditable]")))){$.each(keys,function(i,val){if(current.group.length>1&&val[code]!==undefined){F[i](val[code]);e.preventDefault();return false}if($.inArray(code,val)>-1){F[i]();e.preventDefault();return false}})}})}if($.fn.mousewheel&&current.mouseWheel){F.wrap.bind("mousewheel.fb",function(e,delta,deltaX,deltaY){var target=e.target||null,parent=$(target),canScroll=false;while(parent.length){if(canScroll||parent.is(".fb_digioh-skin")||parent.is(".fb_digioh-wrap")){break}canScroll=isScrollable(parent[0]);parent=$(parent).parent()}if(delta!==0&&!canScroll){if(F.group.length>1&&!current.canShrink){if(deltaY>0||deltaX>0){F.prev(deltaY>0?"down":"left")}else{if(deltaY<0||deltaX<0){F.next(deltaY<0?"up":"right")}}e.preventDefault()}}})}},trigger:function(event,o){var ret,obj=o||F.coming||F.current;if(!obj){return}if($.isFunction(obj[event])){ret=obj[event].apply(obj,Array.prototype.slice.call(arguments,1))}if(ret===false){return false}if(obj.helpers){$.each(obj.helpers,function(helper,opts){if(opts&&F.helpers[helper]&&$.isFunction(F.helpers[helper][event])){F.helpers[helper][event]($.extend(true,{},F.helpers[helper].defaults,opts),obj)}})}D.trigger(event)},isImage:function(str){return isString(str)&&str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(str){return isString(str)&&str.match(/\.(swf)((\?|#).*)?$/i)},_start:function(index){var coming={},obj,href,type,margin,padding;index=getScalar(index);obj=F.group[index]||null;if(!obj){return false}coming=$.extend(true,{},F.opts,obj);margin=coming.margin;padding=coming.padding;if($.type(margin)==="number"){coming.margin=[margin,margin,margin,margin]}if($.type(padding)==="number"){coming.padding=[padding,padding,padding,padding]}if(coming.modal){$.extend(true,coming,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})}if(coming.autoSize){coming.autoWidth=coming.autoHeight=true}if(coming.width==="auto"){coming.autoWidth=true}if(coming.height==="auto"){coming.autoHeight=true}coming.group=F.group;coming.index=index;F.coming=coming;if(false===F.trigger("beforeLoad")){F.coming=null;return}type=coming.type;href=coming.href;if(!type){F.coming=null;if(F.current&&F.router&&F.router!=="jumpto"){F.current.index=index;return F[F.router](F.direction)}return false}F.isActive=true;if(type==="image"||type==="swf"){coming.autoHeight=coming.autoWidth=false;coming.scrolling="visible"}if(type==="image"){coming.aspectRatio=true}if(type==="iframe"&&isTouch){coming.scrolling="scroll"}coming.wrap=$(coming.tpl.wrap).addClass("fb_digioh-"+(isTouch?"mobile":"desktop")+" fb_digioh-type-"+ type+" fb_digioh-tmp "+ coming.wrapCSS).appendTo(coming.parent||"body");$.extend(coming,{skin:$(".fb_digioh-skin",coming.wrap),outer:$(".fb_digioh-outer",coming.wrap),inner:$(".fb_digioh-inner",coming.wrap)});$.each(["Top","Right","Bottom","Left"],function(i,v){coming.skin.css("padding"+ v,getValue(coming.padding[i]))});F.trigger("onReady");if(type==="inline"||type==="html"){if(!coming.content||!coming.content.length){return F._error("content")}}else{if(!href){return F._error("href")}}if(type==="image"){F._loadImage()}else{if(type==="ajax"){F._loadAjax()}else{if(type==="iframe"){F._loadIframe()}else{F._afterLoad()}}}},_error:function(type){$.extend(F.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:type,content:F.coming.tpl.error});F._afterLoad()},_loadImage:function(){var img=F.imgPreload=new Image();img.onload=function(){this.onload=this.onerror=null;F.coming.width=this.width/F.opts.pixelRatio;F.coming.height=this.height/F.opts.pixelRatio;F._afterLoad()};img.onerror=function(){this.onload=this.onerror=null;F._error("image")};img.src=F.coming.href;if(img.complete!==true){F.showLoading()}},_loadAjax:function(){var coming=F.coming;F.showLoading();F.ajaxLoad=$.ajax($.extend({},coming.ajax,{url:coming.href,error:function(jqXHR,textStatus){if(F.coming&&textStatus!=="abort"){F._error("ajax",jqXHR)}else{F.hideLoading()}},success:function(data,textStatus){if(textStatus==="success"){coming.content=data;F._afterLoad()}}}))},_loadIframe:function(){var coming=F.coming,iframe=$(coming.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr("scrolling",isTouch?"auto":coming.iframe.scrolling).attr("src",coming.href);$(coming.wrap).bind("onReset",function(){try{$(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}});if(coming.iframe.preload){F.showLoading();iframe.one("load",function(){$(this).data("ready",1);if(!isTouch){$(this).bind("load.fb",F.update)}$(this).parents(".fb_digioh-wrap").width("100%").removeClass("fb_digioh-tmp").show();F._afterLoad()})}coming.content=iframe.appendTo(coming.inner);if(!coming.iframe.preload){F._afterLoad()}},_preloadImages:function(){var group=F.group,current=F.current,len=group.length,cnt=current.preload?Math.min(current.preload,len- 1):0,item,i;for(i=1;i<=cnt;i+=1){item=group[(current.index+ i)%len];if(item.type==="image"&&item.href){new Image().src=item.href}}},_afterLoad:function(){var coming=F.coming,previous=F.current,placeholder="fb_digioh-placeholder",current,content,type,scrolling,href,embed;F.hideLoading();if(!coming||F.isActive===false){return}if(false===F.trigger("afterLoad",coming,previous)){coming.wrap.stop(true).trigger("onReset").remove();F.coming=null;return}if(previous){F.trigger("beforeChange",previous);previous.wrap.stop(true).removeClass("fb_digioh-opened").find(".fb_digioh-item, .fb_digioh-nav").remove()}F.unbindEvents();current=coming;content=coming.content;type=coming.type;scrolling=coming.scrolling;$.extend(F,{wrap:current.wrap,skin:current.skin,outer:current.outer,inner:current.inner,current:current,previous:previous});href=current.href;switch(type){case"inline":case"ajax":case"html":if(current.selector){content=$("<div>").html(content).find(current.selector)}else{if(isQuery(content)){if(!content.data(placeholder)){content.data(placeholder,$('<div class="'+ placeholder+'"></div>').insertAfter(content).hide())}content=content.show().detach();current.wrap.bind("onReset",function(){if($(this).find(content).length){content.hide().replaceAll(content.data(placeholder)).data(placeholder,false)}})}}break;case"image":content=current.tpl.image.replace("{href}",href);break;case"swf":content='<object id="fb_digioh-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+ href+'"></param>';embed="";$.each(current.swf,function(name,val){content+='<param name="'+ name+'" value="'+ val+'"></param>';embed+=" "+ name+'="'+ val+'"'});content+='<embed src="'+ href+'" type="application/x-shockwave-flash" width="100%" height="100%"'+ embed+"></embed></object>";break}if(!(isQuery(content)&&content.parent().is(current.inner))){current.inner.append(content)}F.trigger("beforeShow");current.inner.css("overflow",scrolling==="yes"?"scroll":(scrolling==="no"?"hidden":scrolling));F._setDimension();F.reposition();F.isOpen=false;F.coming=null;F.bindEvents();if(!F.isOpened){$(".fb_digioh-wrap").not(current.wrap).stop(true).trigger("onReset").remove()}else{if(previous.prevMethod){F.transitions[previous.prevMethod]()}}F.transitions[F.isOpened?current.nextMethod:current.openMethod]();F._preloadImages()},_setDimension:function(){var viewport=F.getViewport(),steps=0,canShrink=false,canExpand=false,wrap=F.wrap,skin=F.skin,inner=F.inner,current=F.current,width=current.width,height=current.height,minWidth=current.minWidth,minHeight=current.minHeight,maxWidth=current.maxWidth,maxHeight=current.maxHeight,scrolling=current.scrolling,scrollOut=current.scrollOutside?current.scrollbarWidth:0,margin=current.margin,wMargin=getScalar(margin[1]+ margin[3]),hMargin=getScalar(margin[0]+ margin[2]),wPadding,hPadding,wSpace,hSpace,origWidth,origHeight,origMaxWidth,origMaxHeight,ratio,width_,height_,maxWidth_,maxHeight_,iframe,body;wrap.add(skin).add(inner).width("auto").height("auto").removeClass("fb_digioh-tmp");wPadding=getScalar(skin.outerWidth(true)- skin.width());hPadding=getScalar(skin.outerHeight(true)- skin.height());wSpace=wMargin+ wPadding;hSpace=hMargin+ hPadding;origWidth=isPercentage(width)?(viewport.w- wSpace)*getScalar(width)/ 100 : width; origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height; if (current.type === "iframe") { iframe = current.content; if (current.autoHeight && iframe.data("ready") === 1) { try { if (iframe[0].contentWindow.document.location) { inner.width(origWidth).height(9999); body = iframe.contents().find("body"); if (scrollOut) { body.css("overflow-x", "hidden") } origHeight = body.outerHeight(true) } } catch (e) { } } } else { if (current.autoWidth || current.autoHeight) { inner.addClass("fb_digioh-tmp"); if (!current.autoWidth) { inner.width(origWidth) } if (!current.autoHeight) { inner.height(origHeight) } if (current.autoWidth) { origWidth = inner.width() } if (current.autoHeight) { origHeight = inner.height() } inner.removeClass("fb_digioh-tmp") } } width = getScalar(origWidth); height = getScalar(origHeight); ratio = origWidth / origHeight; minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, "w") - wSpace : minWidth); maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, "w") - wSpace : maxWidth); minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, "h") - hSpace : minHeight); maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, "h") - hSpace : maxHeight); origMaxWidth = maxWidth; origMaxHeight = maxHeight; if (current.fitToView) { maxWidth = Math.min(viewport.w - wSpace, maxWidth); maxHeight = Math.min(viewport.h - hSpace, maxHeight) } maxWidth_ = viewport.w - wMargin; maxHeight_ = viewport.h - hMargin; if (current.aspectRatio) { if (width > maxWidth) { width = maxWidth; height = getScalar(width / ratio) } if (height > maxHeight) { height = maxHeight; width = getScalar(height * ratio) } if (width < minWidth) { width = minWidth; height = getScalar(width / ratio) } if (height < minHeight) { height = minHeight; width = getScalar(height * ratio) } } else { width = Math.max(minWidth, Math.min(width, maxWidth)); if (current.autoHeight && current.type !== "iframe") { inner.width(width); height = inner.height() } height = Math.max(minHeight, Math.min(height, maxHeight)) } if (current.fitToView) { inner.width(width).height(height); wrap.width(width + wPadding); width_ = wrap.width(); height_ = wrap.height(); if (current.aspectRatio) { while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) { if (steps++ > 19) { break } height = Math.max(minHeight, Math.min(maxHeight, height - 10)); width = getScalar(height * ratio); if (width < minWidth) { width = minWidth; height = getScalar(width / ratio) } if (width > maxWidth) { width = maxWidth; height = getScalar(width / ratio) } inner.width(width).height(height); wrap.width(width + wPadding); width_ = wrap.width(); height_ = wrap.height() } } else { width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_))); height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_))) } } if (scrollOut && scrolling === "auto" && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) { width += scrollOut } inner.width(width).height(height); wrap.width(width + wPadding); width_ = wrap.width(); height_ = wrap.height(); canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight; canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight)); $.extend(current, { dim: { width: getValue(width_), height: getValue(height_) }, origWidth: origWidth, origHeight: origHeight, canShrink: canShrink, canExpand: canExpand, wPadding: wPadding, hPadding: hPadding, wrapSpace: height_ - skin.outerHeight(true), skinSpace: skin.height() - height }); if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) { inner.height("auto") } }, _getPosition: function (onlyAbsolute) { var current = F.current, viewport = F.getViewport(), margin = current.margin, width = F.wrap.width() + margin[1] + margin[3], height = F.wrap.height() + margin[0] + margin[2], rez = { position: "absolute", top: margin[0], left: margin[3] }; if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) { rez.position = "fixed" } else { if (!current.locked) { rez.top += viewport.y; rez.left += viewport.x } } rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio))); rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio))); return rez }, _afterZoomIn: function () { var current = F.current; if (!current) { return } F.isOpen = F.isOpened = true; F.wrap.css("overflow", "visible").addClass("fb_digioh-opened"); F.update(); if (current.closeClick || (current.nextClick && F.group.length > 1)) { F.inner.css("cursor", "pointer").bind("click.fb", function (e) { if (!$(e.target).is("a") && !$(e.target).parent().is("a")) { e.preventDefault(); F[current.closeClick ? "close" : "next"]() } }) } if (current.closeBtn) { $(current.tpl.closeBtn).appendTo(F.skin).bind("click.fb", function (e) { e.preventDefault(); F.close() }) } if (current.arrows && F.group.length > 1) { if (current.loop || current.index > 0) { $(current.tpl.prev).appendTo(F.outer).bind("click.fb", F.prev) } if (current.loop || current.index < F.group.length - 1) { $(current.tpl.next).appendTo(F.outer).bind("click.fb", F.next) } } F.trigger("afterShow"); if (!current.loop && current.index === current.group.length - 1) { F.play(false) } else { if (F.opts.autoPlay && !F.player.isActive) { F.opts.autoPlay = false; F.play() } } }, _afterZoomOut: function (obj) { obj = obj || F.current; $(".fb_digioh-wrap").trigger("onReset").remove(); $.extend(F, { group: {}, opts: {}, router: false, current: null, isActive: false, isOpened: false, isOpen: false, isClosing: false, wrap: null, skin: null, outer: null, inner: null }); F.trigger("afterClose", obj) } }); F.transitions = { getOrigPosition: function () { var current = F.current, element = current.element, orig = current.orig, pos = {}, width = 50, height = 50, hPadding = current.hPadding, wPadding = current.wPadding, viewport = F.getViewport(); if (!orig && current.isDom && element.is(":visible")) { orig = element.find("img:first"); if (!orig.length) { orig = element } } if (isQuery(orig)) { pos = orig.offset(); if (orig.is("img")) { width = orig.outerWidth(); height = orig.outerHeight() } } else { pos.top = viewport.y + (viewport.h - height) * current.topRatio; pos.left = viewport.x + (viewport.w - width) * current.leftRatio } if (F.wrap.css("position") === "fixed" || current.locked) { pos.top -= viewport.y; pos.left -= viewport.x } pos = { top: getValue(pos.top - hPadding * current.topRatio), left: getValue(pos.left - wPadding * current.leftRatio), width: getValue(width + wPadding), height: getValue(height + hPadding) }; return pos }, step: function (now, fx) { var ratio, padding, value, prop = fx.prop, current = F.current, wrapSpace = current.wrapSpace, skinSpace = current.skinSpace; if (prop === "width" || prop === "height") { ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start); if (F.isClosing) { ratio = 1 - ratio } padding = prop === "width" ? current.wPadding : current.hPadding; value = now - padding; F.skin[prop](getScalar(prop === "width" ? value : value - (wrapSpace * ratio))); F.inner[prop](getScalar(prop === "width" ? value : value - (wrapSpace * ratio) - (skinSpace * ratio))) } }, zoomIn: function () { var current = F.current, startPos = current.pos, effect = current.openEffect, elastic = effect === "elastic", endPos = $.extend({ opacity: 1 }, startPos); delete endPos.position; if (elastic) { startPos = this.getOrigPosition(); if (current.openOpacity) { startPos.opacity = 0.1 } } else { if (effect === "fade") { startPos.opacity = 0.1 } } F.wrap.css(startPos).animate(endPos, { duration: effect === "none" ? 0 : current.openSpeed, easing: current.openEasing, step: elastic ? this.step : null, complete: F._afterZoomIn }) }, zoomOut: function () { var current = F.current, effect = current.closeEffect, elastic = effect === "elastic", endPos = { opacity: 0.1 }; if (elastic) { endPos = this.getOrigPosition(); if (current.closeOpacity) { endPos.opacity = 0.1 } } F.wrap.animate(endPos, { duration: effect === "none" ? 0 : current.closeSpeed, easing: current.closeEasing, step: elastic ? this.step : null, complete: F._afterZoomOut }) }, changeIn: function () { var current = F.current, effect = current.nextEffect, startPos = current.pos, endPos = { opacity: 1 }, direction = F.direction, distance = 200, field; startPos.opacity = 0.1; if (effect === "elastic") { field = direction === "down" || direction === "up" ? "top" : "left"; if (direction === "down" || direction === "right") { startPos[field] = getValue(getScalar(startPos[field]) - distance); endPos[field] = "+=" + distance + "px" } else { startPos[field] = getValue(getScalar(startPos[field]) + distance); endPos[field] = "-=" + distance + "px" } } if (effect === "none") { F._afterZoomIn() } else { F.wrap.css(startPos).animate(endPos, { duration: current.nextSpeed, easing: current.nextEasing, complete: F._afterZoomIn }) } }, changeOut: function () { var previous = F.previous, effect = previous.prevEffect, endPos = { opacity: 0.1 }, direction = F.direction, distance = 200; if (effect === "elastic") { endPos[direction === "down" || direction === "up" ? "top" : "left"] = (direction === "up" || direction === "left" ? "-" : "+") + "=" + distance + "px" } previous.wrap.animate(endPos, { duration: effect === "none" ? 0 : previous.prevSpeed, easing: previous.prevEasing, complete: function () { $(this).trigger("onReset").remove() } }) } }; F.helpers.overlay = { defaults: { closeClick: true, speedOut: 200, showEarly: true, css: {}, locked: !isTouch, fixed: true }, overlay: null, fixed: false, el: $("html"), create: function (opts) { opts = $.extend({}, this.defaults, opts); if (this.overlay) { this.close() } this.overlay = $('<div class="fb_digioh-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent); this.fixed = false; if (opts.fixed && F.defaults.fixed) { this.overlay.addClass("fb_digioh-overlay-fixed"); this.fixed = true } }, open: function (opts) { var that = this; opts = $.extend({}, this.defaults, opts); if (this.overlay) { this.overlay.unbind(".overlay").width("auto").height("auto") } else { this.create(opts) } if (!this.fixed) { W.bind("resize.overlay", $.proxy(this.update, this)); this.update() } if (opts.closeClick) { this.overlay.bind("click.overlay", function (e) { if ($(e.target).hasClass("fb_digioh-overlay")) { if (F.isActive) { F.close() } else { that.close() } return false } }) } this.overlay.css(opts.css).show() }, close: function () { var scrollV, scrollH; W.unbind("resize.overlay"); if (this.el.hasClass("fb_digioh-lock")) { $(".fb_digioh-margin").removeClass("fb_digioh-margin"); scrollV = W.scrollTop(); scrollH = W.scrollLeft(); this.el.removeClass("fb_digioh-lock"); W.scrollTop(scrollV).scrollLeft(scrollH) } $(".fb_digioh-overlay").remove().hide(); $.extend(this, { overlay: null, fixed: false }) }, update: function () { var width = "100%", offsetWidth; this.overlay.width(width).height("100%"); if (IE) { offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth); if (D.width() > offsetWidth) { width = D.width() } } else { if (D.width() > W.width()) { width = D.width() } } this.overlay.width(width).height(D.height()) }, onReady: function (opts, obj) { var overlay = this.overlay; $(".fb_digioh-overlay").stop(true, true); if (!overlay) { this.create(opts) } if (opts.locked && this.fixed && obj.fixed) { if (!overlay) { this.margin = D.height() > W.height() ? $("html").css("margin-right").replace("px", "") : false } obj.locked = this.overlay.append(obj.wrap); obj.fixed = false } if (opts.showEarly === true) { this.beforeShow.apply(this, arguments) } }, beforeShow: function (opts, obj) { var scrollV, scrollH; if (obj.locked) { if (this.margin !== false) { $("*").filter(function () { return ($(this).css("position") === "fixed" && !$(this).hasClass("fb_digioh-overlay") && !$(this).hasClass("fb_digioh-wrap")) }).addClass("fb_digioh-margin"); this.el.addClass("fb_digioh-margin") } scrollV = W.scrollTop(); scrollH = W.scrollLeft(); this.el.addClass("fb_digioh-lock"); W.scrollTop(scrollV).scrollLeft(scrollH) } this.open(opts) }, onUpdate: function () { if (!this.fixed) { this.update() } }, afterClose: function (opts) { if (this.overlay && !F.coming) { this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this)) } } }; F.helpers.title = { defaults: { type: "float", position: "bottom" }, beforeShow: function (opts) { var current = F.current, text = current.title, type = opts.type, title, target; if ($.isFunction(text)) { text = text.call(current.element, current) } if (!isString(text) || $.trim(text) === "") { return } title = $('<div class="fb_digioh-title fb_digioh-title-' + type + '-wrap">' + text + "</div>"); switch (type) { case "inside": target = F.skin; break; case "outside": target = F.wrap; break; case "over": target = F.inner; break; default: target = F.skin; title.appendTo("body"); if (IE) { title.width(title.width()) } title.wrapInner('<span class="child"></span>'); F.current.margin[2] += Math.abs(getScalar(title.css("margin-bottom"))); break } title[(opts.position === "top" ? "prependTo" : "appendTo")](target) } }; $.fn.fb_digioh = function (options) { var index, that = $(this), selector = this.selector || "", run = function (e) { var what = $(this).blur(), idx = index, relType, relVal; if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is(".fb_digioh-wrap")) { relType = options.groupAttr || "data-fb_digioh-group"; relVal = what.attr(relType); if (!relVal) { relType = "rel"; relVal = what.get(0)[relType] } if (relVal && relVal !== "" && relVal !== "nofollow") { what = selector.length ? $(selector) : that; what = what.filter("[" + relType + '="' + relVal + '"]'); idx = what.index(this) } options.index = idx; if (F.open(what, options) !== false) { e.preventDefault() } } }; options = options || {}; index = options.index || 0; if (!selector || options.live === false) { that.unbind("click.fb-start").bind("click.fb-start", run) } else { D.undelegate(selector, "click.fb-start").delegate(selector + ":not('.fb_digioh-item, .fb_digioh-nav')", "click.fb-start", run) } this.filter("[data-fb_digioh-start=1]").trigger("click"); return this }; D.ready(function () { var w1, w2; if ($.scrollbarWidth === undefined) { $.scrollbarWidth = function () { var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), child = parent.children(), width = child.innerWidth() - child.height(99).innerWidth(); parent.remove(); return width } } if ($.support.fixedPosition === undefined) { $.support.fixedPosition = (function () { var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo("body"), fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15); elem.remove(); return fixed }()) } $.extend(F.defaults, { scrollbarWidth: $.scrollbarWidth(), fixed: $.support.fixedPosition, parent: $("body") }); w1 = $(window).width(); H.addClass("fb_digioh-lock-test"); w2 = $(window).width(); H.removeClass("fb_digioh-lock-test"); $("<style type='text/css'>.fb_digioh-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head") }) }(DIGIOH_WIN_PARENT, DIGIOH_WIN_PARENT.document, JQUERY_DIGIOH));JQUERY_DIGIOH.easing['jswing']=JQUERY_DIGIOH.easing['swing'];JQUERY_DIGIOH.extend(JQUERY_DIGIOH.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return JQUERY_DIGIOH.easing[JQUERY_DIGIOH.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+ b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t- 2)+ b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+ b;return-c/2*((--t)*(t- 2)- 1)+ b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+ b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d- 1)*t*t+ 1)+ b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+ b;return c/2*((t-=2)*t*t+ 2)+ b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+ b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d- 1)*t*t*t- 1)+ b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+ b;return-c/2*((t-=2)*t*t*t- 2)+ b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+ b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d- 1)*t*t*t*t+ 1)+ b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+ b;return c/2*((t-=2)*t*t*t*t+ 2)+ b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+ c+ b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+ b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)- 1)+ b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d- 1))+ b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+ c:c*(-Math.pow(2,-10*t/d)+ 1)+ b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+ c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t- 1))+ b;return c/2*(-Math.pow(2,-10*--t)+ 2)+ b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)- 1)+ b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d- 1)*t)+ b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1- t*t)- 1)+ b;return c/2*(Math.sqrt(1-(t-=2)*t)+ 1)+ b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+ c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d- s)*(2*Math.PI)/ p)) + b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+ c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d- s)*(2*Math.PI)/ p) + c + b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+ c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d- s)*(2*Math.PI)/ p)) + b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d- s)*(2*Math.PI)/ p) * .5 + c + b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+ 1)*t- s)+ b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d- 1)*t*((s+ 1)*t+ s)+ 1)+ b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+ 1)*t- s))+ b;return c/2*((t-=2)*t*(((s*=(1.525))+ 1)*t+ s)+ 2)+ b;},easeInBounce:function(x,t,b,c,d){return c- JQUERY_DIGIOH.easing.easeOutBounce(x,d- t,0,c,d)+ b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+ b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+ b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+ b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+ b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return JQUERY_DIGIOH.easing.easeInBounce(x,t*2,0,c,d)*.5+ b;return JQUERY_DIGIOH.easing.easeOutBounce(x,t*2- d,0,c,d)*.5+ c*.5+ b;}});(function($,window){function noop(){}
function genericCallback(data){lastValue=[data];}
function callIfDefined(method,object,parameters){return method&&method.apply(object.context||object,parameters);}
function qMarkOrAmp(url){return/\?/.test(url)?"&":"?";}
var
STR_ASYNC="async",STR_CHARSET="charset",STR_EMPTY="",STR_ERROR="error",STR_INSERT_BEFORE="insertBefore",STR_JQUERY_JSONP="_jqjsp",STR_ON="on",STR_ON_CLICK=STR_ON+"click",STR_ON_ERROR=STR_ON+ STR_ERROR,STR_ON_LOAD=STR_ON+"load",STR_ON_READY_STATE_CHANGE=STR_ON+"readystatechange",STR_READY_STATE="readyState",STR_REMOVE_CHILD="removeChild",STR_SCRIPT_TAG="<script>",STR_SUCCESS="success",STR_TIMEOUT="timeout",win=window,Deferred=$.Deferred,head=$("head")[0]||document.documentElement,pageCache={},count=0,lastValue,xOptionsDefaults={callback:STR_JQUERY_JSONP,url:location.href},opera=win.opera,oldIE=!!$("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;function jsonp(xOptions){xOptions=$.extend({},xOptionsDefaults,xOptions);var successCallback=xOptions.success,errorCallback=xOptions.error,completeCallback=xOptions.complete,dataFilter=xOptions.dataFilter,callbackParameter=xOptions.callbackParameter,successCallbackName=xOptions.callback,cacheFlag=xOptions.cache,pageCacheFlag=xOptions.pageCache,charset=xOptions.charset,url=xOptions.url,data=xOptions.data,timeout=xOptions.timeout,pageCached,done=0,cleanUp=noop,supportOnload,supportOnreadystatechange,firstChild,script,scriptAfter,timeoutTimer;Deferred&&Deferred(function(defer){defer.done(successCallback).fail(errorCallback);successCallback=defer.resolve;errorCallback=defer.reject;}).promise(xOptions);xOptions.abort=function(){!(done++)&&cleanUp();};if(callIfDefined(xOptions.beforeSend,xOptions,[xOptions])===!1||done){return xOptions;}
url=url||STR_EMPTY;data=data?((typeof data)=="string"?data:$.param(data,xOptions.traditional)):STR_EMPTY;url+=data?(qMarkOrAmp(url)+ data):STR_EMPTY;callbackParameter&&(url+=qMarkOrAmp(url)+ encodeURIComponent(callbackParameter)+"=?");!cacheFlag&&!pageCacheFlag&&(url+=qMarkOrAmp(url)+"_"+(new Date()).getTime()+"=");url=url.replace(/=\?(&|$)/,"="+ successCallbackName+"$1");function notifySuccess(json){if(!(done++)){cleanUp();pageCacheFlag&&(pageCache[url]={s:[json]});dataFilter&&(json=dataFilter.apply(xOptions,[json]));callIfDefined(successCallback,xOptions,[json,STR_SUCCESS,xOptions]);callIfDefined(completeCallback,xOptions,[xOptions,STR_SUCCESS]);}}
function notifyError(type){if(!(done++)){cleanUp();pageCacheFlag&&type!=STR_TIMEOUT&&(pageCache[url]=type);callIfDefined(errorCallback,xOptions,[xOptions,type]);callIfDefined(completeCallback,xOptions,[xOptions,type]);}}
if(pageCacheFlag&&(pageCached=pageCache[url])){pageCached.s?notifySuccess(pageCached.s[0]):notifyError(pageCached);}else{win[successCallbackName]=genericCallback;script=$(STR_SCRIPT_TAG)[0];script.id=STR_JQUERY_JSONP+ count++;if(charset){script[STR_CHARSET]=charset;}
opera&&opera.version()<11.60?((scriptAfter=$(STR_SCRIPT_TAG)[0]).text="document.getElementById('"+ script.id+"')."+ STR_ON_ERROR+"()"):(script[STR_ASYNC]=STR_ASYNC);if(oldIE){script.htmlFor=script.id;script.event=STR_ON_CLICK;}
script[STR_ON_LOAD]=script[STR_ON_ERROR]=script[STR_ON_READY_STATE_CHANGE]=function(result){if(!script[STR_READY_STATE]||!/i/.test(script[STR_READY_STATE])){try{script[STR_ON_CLICK]&&script[STR_ON_CLICK]();}catch(_){}
result=lastValue;lastValue=0;result?notifySuccess(result[0]):notifyError(STR_ERROR);}};script.src=url;cleanUp=function(i){timeoutTimer&&clearTimeout(timeoutTimer);script[STR_ON_READY_STATE_CHANGE]=script[STR_ON_LOAD]=script[STR_ON_ERROR]=null;head[STR_REMOVE_CHILD](script);scriptAfter&&head[STR_REMOVE_CHILD](scriptAfter);};head[STR_INSERT_BEFORE](script,(firstChild=head.firstChild));scriptAfter&&head[STR_INSERT_BEFORE](scriptAfter,firstChild);timeoutTimer=timeout>0&&setTimeout(function(){notifyError(STR_TIMEOUT);},timeout);}
return xOptions;}
jsonp.setup=function(xOptions){$.extend(xOptionsDefaults,xOptions);};$.jsonp=jsonp;})(JQUERY_DIGIOH,DIGIOH_WIN_PARENT);var DeviceAtlas=DeviceAtlas||{},DeviceAtlas=function(e,d,f,u){var c={apiVersion:"1.4",propsCache:"",cookieName:DeviceAtlas.cookieName||"DAPROPS",cookieExpiryDays:DeviceAtlas.cookieExpiryDays||1,cookieDomain:DeviceAtlas.cookieDomain||null,cookiePath:DeviceAtlas.cookiePath||"/",divStyle:null,ns:{svg:"http://www.w3.org/2000/svg"},cssPrfxs:["Webkit","Moz","O","ms","Khtml"],fncPrfxs:["webkit","moz","o","ms","khtml"],properties:DeviceAtlas.properties||{},getPropertiesAsString:function(){return this.propsCache},getBattery:function(){return"undefined"===typeof this.battery?null:this.battery}},g={},n={"js.accessDom":function(){return!!d.getElementById&&!!d.getElementsByTagName&&!!d.getElementsByName},cookieSupport:function(){return r()},"css.animations":function(){return k("animationName")},"css.columns":function(){return k("columnCount")},"css.transforms":function(){return!!t(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},"css.transitions":function(){return k("transitionProperty")},deviceAspectRatio:function(){var a;a:{a="2/3 40/71 3/4 16/9 16/10 375/667 9/16 10/16".split(" ");if("undefined"!=typeof e.matchMedia)for(var b in a)if(e.matchMedia("(device-aspect-ratio:"+a[b]+")").matches){a=a[b]+"";break a}a=null}return a},devicePixelRatio:function(){var a=1;try{a=e.devicePixelRatio}catch(b){}return a+""},displayColorDepth:function(){return screen.colorDepth},flashCapable:function(){try{if(f.plugins&&0<f.plugins.length&&f.mimeTypes&&f.mimeTypes["application/x-shockwave-flash"]&&f.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return!0;if("function"==typeof ActiveXObject||"object"==typeof ActiveXObject){var a=["ShockwaveFlash.ShockwaveFlash.7","ShockwaveFlash.ShockwaveFlash.7","ShockwaveFlash.ShockwaveFlash"],b;for(b in a)try{return new ActiveXObject(a[b]),!0}catch(l){}}}catch(l){}return!1},"html.audio":function(){if(!d.createElement)return!1;var a,b=new Boolean;a=d.createElement("audio");try{if(b=!!a.canPlayType)b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),b.mp3=a.canPlayType("audio/mpeg;"),b.wav=a.canPlayType('audio/wav; codecs="1"'),b.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(l){}return b.valueOf()},"html.canvas":function(){if(!d.createElement)return!1;var a;a=d.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},"html.inlinesvg":function(){if(!d.createElement)return!1;var a;a=d.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==c.ns.svg},"html.svg":function(){return!!d.createElementNS&&!!d.createElementNS(c.ns.svg,"svg").createSVGRect},"html.video":function(){if(!d.createElement)return!1;var a,b=new Boolean;a=d.createElement("video");try{if(b=!!a.canPlayType)b.ogg=a.canPlayType('video/ogg; codecs="theora"'),b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"')||a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'),b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}catch(l){}return b.valueOf()},"js.applicationCache":function(){return!!e.applicationCache},"js.deviceMotion":function(){return!!e.DeviceMotionEvent},"js.deviceOrientation":function(){return"js.deviceOrientation"in g?g["js.deviceOrientation"]:!1},"js.geoLocation":function(){return!!f.geolocation},"js.indexedDB":function(){return m(e,"indexedDB")},"js.json":function(){return"object"==typeof JSON&&"function"==typeof JSON.stringify},"js.localStorage":function(){try{return!!localStorage.getItem}catch(a){return!1}},"js.modifyCss":function(){if(!d.createElement)return!1;var a;a=d.createElement("div");if("object"!=typeof a.style||"undefined"==typeof a.style.display)return!1;a.style.display="none";return"none"==a.style.display},"js.modifyDom":function(){if(!d.createElement||!d.appendChild)return!1;var a,b;a=d.createElement("span");b=d.createElement("div");b.appendChild(a);return b==a.parentNode},"js.querySelector":function(){return!!d.querySelector},"js.sessionStorage":function(){try{return!!sessionStorage.getItem}catch(a){return!1}},"js.supportBasicJavaScript":function(){return"function"!=typeof alert||"function"!=typeof confirm||"function"!=typeof setTimeout||"function"!=typeof setInterval?!1:!!d.location&&!!d.forms},"js.supportConsoleLog":function(){return"object"==typeof console&&"function"==typeof console.log},"js.supportEventListener":function(){return!!e.addEventListener},"js.supportEvents":function(){var a={submit:"form",click:"input",change:"input",load:"img",select:"input"},b;for(b in a){var c;c=b;if(d.createElement){var h,e;h=d.createElement(a[b]);c="on"+c;e=c in h;e||(h.setAttribute||(h=d.createElement("div")),h.setAttribute&&h.removeAttribute&&(h.setAttribute(c,""),e="function"==typeof h[c]));c=e}else c=!1;if(!c)return!1}return!0},"js.touchEvents":function(){return"ontouchstart"in e},"js.webGl":function(){return!!e.WebGLRenderingContext},"js.webSockets":function(){return m(e,"WebSocket")},"js.webSqlDatabase":function(){return!!e.openDatabase},"js.webWorkers":function(){return!!e.Worker},"js.xhr":function(){return"function"==typeof XMLHttpRequest||"object"==typeof XMLHttpRequest},orientation:function(){return"undefined"!=typeof e.orientation?e.orientation:null},userMedia:function(){return m(f,"getUserMedia")},"js.battery":function(){if(!("js.battery"in g)){var a=f.battery||f.webkitBattery||f.mozBattery;a&&(c.battery=a)}return!!c.battery}},k=function(a){var b=a.charAt(0).toUpperCase()+a.substr(1);a=(a+" "+c.cssPrfxs.join(b+" ")+b).split(" ");return t(a)},t=function(a){if(!d.createElement)return null;null==c.divStyle&&(c.divStyle=d.createElement("div").style);if("undefined"==typeof c.divStyle)return null;for(var b in a)if("undefined"!=typeof c.divStyle[a[b]])return!0;return!1},m=function(a,b){if(a[b])return!0;for(var d=b.charAt(0).toUpperCase()+b.substr(1),e=-1,f=c.fncPrfxs.length;++e<f;)if(a[c.fncPrfxs[e]+d])return 1<f&&(c.fncPrfxs=[c.fncPrfxs[e]],c.cssPrfxs=[c.cssPrfxs[e]]),!0;return!1},p=function(a,b){var d;-1!=a.indexOf(".")?(d=a.split("."),"undefined"==typeof c[d[0]]&&(c[d[0]]={}),c[d[0]][d[1]]=b):c[a]=b;g[a]=b},r=function(){return"undefined"==typeof f.cookieEnabled&&"string"==typeof d.cookie?!0:!!f.cookieEnabled},q=function(a){if(r()){a=new Date;a.setDate(a.getDate()+
c.cookieExpiryDays);var b="";null!=c.cookieDomain&&(b=";domain="+c.cookieDomain);}};(function(){if(e.addEventListener&&e.removeEventListener){var a=function(b){null!=b&&null!=b.alpha&&(p("js.deviceOrientation",!0),q(g));e.removeEventListener("deviceorientation",a,!1)};e.addEventListener("deviceorientation",a,!1)}})();(function(){("undefined"===typeof c.battery||null==c.battery)&&f.getBattery&&f.getBattery().then(function(a){c.battery=a;p("js.battery",!0);q(g)},function(a){})})();(function(){var a,b;for(b in c.properties)n[b]=c.properties[b];for(b in n)a=n[b](),null!=a&&"undefined"!=typeof a&&p(b,a)})();c.propsCache=function(a){var b="",c,d;for(d in a)c=a[d],c="boolean"==typeof c?"b":"number"==typeof c?"i":"s",b+=c+d+":"+("b"==c?a[d]+0:a[d])+"|";return b.slice(0,-1)}(g);q(g);return c}(window,document,navigator);function DIGIOH_ANALYTICS($,showErrors,vendorGUID,isPreview,baseUrl){this.jQuery=$;this.ShowErrors=showErrors;this.BaseDomain=baseUrl;this.IsNewSession=true;this.IsNewVisitor=true;this.RanSetCurrent=false;this.PageviewStart=(new Date()).getTime();this.SessionStart=0;this.SessionLengthTicks=3600000;this.OverwriteCurrentCookie=false;this.PreviousPageviewTs=0;this.VARS={};this.VARS.VendorGuid=vendorGUID;this.VARS.IsLoaded=false;this.VARS.IsPreview=isPreview;this.VARS.current_page_url="";this.VARS.referring_website_url="";this.VARS.landing_page="";this.VARS.landing_page_ip="";this.VARS.date_of_visit=0;this.VARS.web_source="Direct Traffic";this.VARS.past_visits=0;this.VARS.page_visits=0;this.VARS.pages_navigated="";this.VARS.search_engine="";this.VARS.device="";this.VARS.device_apple="";this.VARS.browser_type="";this.VARS.browser_version="";this.VARS.operating_system="";this.VARS.utm_campaign_source="";this.VARS.utm_campaign_medium="";this.VARS.utm_campaign_term="";this.VARS.utm_campaign_content="";this.VARS.utm_campaign_name="";this.VARS.total_time_seconds=0;this.VARS.active_time_seconds=0;this.VARS.idle_time_seconds=0;this.VARS.continent="";this.VARS.continent_name="";this.VARS.country="";this.VARS.country_name="";this.VARS.region_name="";this.VARS.state="";this.VARS.city="";this.VARS.ip_address="";this.VARS.zipcode = "";
    this.VARS.latitude = 0;
    this.VARS.longitude = 0;
    this.VARS.metro_code = "";
    this.VARS.time_zone = "";
    this.VARS.area_code = "";

    this.VARS.scroll_percent = 0;
    this.VARS.scroll_pixels = 0;
    this.VARS.exit_intent = "";
    this.VARS.click_jquery_selector = {};
    this.VARS.hover_jquery_selector = {};
    this.VARS.exists_jquery_selector = {};
    this.VARS.lightbox_activity = {};
    this.VARS.master_rules = {};
    this.VARS.lightbox_events = {};

    this.VARS.DeviceAtlas = {};
    this.VARS.DeviceAtlas.primaryHardwareType = "";
    this.VARS.DeviceAtlas.mobileDevice = "";
    this.VARS.DeviceAtlas.isApp = "";
    this.VARS.DeviceAtlas.isTablet = "";
    this.VARS.DeviceAtlas.isMobilePhone = "";
    this.VARS.DeviceAtlas.model = "";
    this.VARS.DeviceAtlas.vendor = "";
    this.VARS.DeviceAtlas.touchScreen = "";
    this.VARS.DeviceAtlas.osName = "";
    this.VARS.DeviceAtlas.osVersion = "";
    this.VARS.DeviceAtlas.browserName = "";
    this.VARS.DeviceAtlas.browserVersion = "";
    this.VARS.DeviceAtlas.osAndroid = "";
    this.VARS.DeviceAtlas.osiOs = "";

    this.VARS.geo_source = "";
    this.VARS.device_source = "";

    this.VARS.PagesNavigated = new Array();
    this.VARS.PastVisitsText = "";
}

DIGIOH_ANALYTICS.prototype.onDocumentReady = function () {
    try {
        this.setDevice();
        this.setCurrent();
        this.setPrevious();
    }
    catch (error) {
        this.logError(error, "onDocumentReady");
    }
};

DIGIOH_ANALYTICS.prototype.loadAllVars = function () {
    try {
        this.getCurrent();
        this.getPrevious();
    }
    catch (error) {
        this.logError(error, "loadAllVars");
    }
};

DIGIOH_ANALYTICS.prototype.getDeviceAtlasServerPropsMap = function () {
    try {
        var x = {};

        x.ea = 'bjs.webGl';
        x.eb = 'bjs.geoLocation';
        x.ec = 'bjs.webSqlDatabase';
        x.ed = 'bjs.indexedDB';
        x.ef = 'bjs.webSockets';
        x.eg = 'bjs.localStorage';
        x.eh = 'bjs.sessionStorage';
        x.ei = 'bjs.webWorkers';
        x.ej = 'bjs.applicationCache';
        x.ek = 'bjs.supportBasicJavaScript';
        x.el = 'bjs.modifyDom';
        x.em = 'bjs.modifyCss';
        x.en = 'bjs.supportEvents';
        x.eo = 'bjs.touchEvents';
        x.ep = 'bjs.supportEventListener';
        x.eq = 'bjs.xhr';
        x.er = 'bjs.supportConsoleLog';
        x.es = 'bjs.json';
        x.et = 'bjs.deviceOrientation';
        x.eu = 'bjs.deviceMotion';
        x.ev = 'bjs.querySelector';
        x.ew = 'bjs.battery';
        x.ex = 'bjs.accessDom';

        x.fa = 'bhtml.canvas';
        x.fb = 'bhtml.video';
        x.fc = 'bhtml.audio';
        x.fd = 'bhtml.svg';
        x.fe = 'bhtml.inlinesvg';

        x.ga = 'bcss.animations';
        x.gb = 'bcss.columns';
        x.gc = 'bcss.transforms';
        x.ge = 'bcss.transitions';

        x.ba = 'js.webSockets';
        x.bb = 'js.deviceMotion';
        x.bd = 'js.applicationCache';
        x.bg = 'js.xhr';
        x.bi = 'js.deviceOrientation';
        x.bl = 'js.webWorkers';
        x.bm = 'js.querySelector';
        x.bp = 'js.json';
        x.bs = 'js.supportEventListener';
        x.bz = 'js.localStorage';
        x.cd = 'js.supportEvents';
        x.cl = 'js.touchEvents';
        x.ci = 'js.geoLocation';
        x.cr = 'js.webGl';
        x.cx = 'js.indexedDB';
        x.db = 'js.modifyCss';
        x.dc = 'js.webSqlDatabase';
        x.dg = 'js.sessionStorage';
        x.dh = 'js.supportConsoleLog';
        x.dq = 'js.modifyDom';
        x.ds = 'js.supportBasicJavaScript';
        x.dt = 'js.battery';
        x.du = 'js.accessDom';

        x.ck = 'html.svg';
        x.cn = 'html.inlinesvg';
        x.ch = 'html.video';
        x.bt = 'html.audio';
        x.df = 'html.canvas';

        x.dd = 'css.transforms';
        x.de = 'css.columns';
        x.bc = 'css.animations';
        x.bq = 'css.transitions';

        x.bu = 'image.Jpg';
        x.cc = 'image.Gif87';
        x.ce = 'image.Png';
        x.cu = 'image.Gif89a';
        x.ca = 'markup.xhtmlMp10';
        x.bw = 'markup.wml1';
        x.cm = 'markup.xhtmlBasic10';
        x.cy = 'markup.xhtmlMp12';
        x.cz = 'markup.xhtmlMp11';

        x.ha = 'iorientation';
        x.hb = 'idisplayColorDepth';
        x.hc = 'idevicePixelRatio';

        x.ia = 'bcookieSupport';
        x.ib = 'bflashCapable';
        x.ic = 'baccessDom';
        x.ie = 'buserMedia';

        x.ja = 'sdeviceAspectRatio';
        x.jb = 'sdevicePixelRatio';

        x.aa = 'touchScreen';
        x.ab = 'isBrowser';
        x.ac = 'isMobilePhone';
        x.ad = 'primaryHardwareType';
        x.ae = 'isFilter';
        x.af = 'mobileDevice';
        x.ag = 'isSpam';
        x.ah = 'isGamesConsole';
        x.ai = 'isMasqueradingAsDesktop';
        x.aj = 'botName';
        x.ak = 'marketingName';
        x.al = 'manufacturer';
        x.am = 'yearReleased';
        x.an = 'displayWidth';
        x.ao = 'displayHeight';
        x.ap = 'diagonalScreenSize';
        x.aq = 'displayPpi';
        x.ar = 'devicePixelRatio';
        x.as = 'displayColorDepth';
        x.at = 'nfc';
        x.au = 'camera';
        x.av = 'osProprietary';
        x.aw = 'developerPlatform';
        x.ax = 'developerPlatformVersion';
        x.ay = 'language';
        x.az = 'languageLocale';
        x.be = 'jsr139';
        x.bf = 'jqm';
        x.bh = 'uriSchemeSms';
        x.bj = 'id';
        x.bk = 'https';
        x.bn = 'umts';
        x.bo = 'usableDisplayWidth';
        x.br = 'supportsClientSide';
        x.bv = 'isSpam';
        x.bx = 'jsr118';
        x.by = 'hspaEvolved';
        x.cb = 'uriSchemeTel';
        x.cf = 'jsr37';
        x.cg = 'jsr30';
        x.cj = 'flashCapable';
        x.co = 'hsdpa';
        x.cp = 'memoryLimitMarkup';
        x.cq = 'memoryLimitDownload';
        x.cs = 'edge';
        x.ct = 'vCardDownload';
        x.cv = 'drmOmaCombinedDelivery';
        x.cw = 'usableDisplayHeight';
        x.da = 'drmOmaSeparateDelivery';
        x.di = 'gprs';
        x.dj = 'lteAdvanced';
        x.dk = 'lte';
        x.dl = 'memoryLimitEmbeddedMedia';
        x.dm = 'hscsd';
        x.dn = 'cookieSupport';
        x.do = 'uriSchemeSmsTo';
        x.dp = 'csd';
        x.dr = 'drmOmaForwardLock';
        x.dv = 'accessDom';
        x.dw = 'userMedia';
        x.dx = 'orientation';

        x.a = 'isRobot';
        x.b = 'osRim';
        x.c = 'isDownloader';
        x.d = 'osWindowsRt';
        x.e = 'isEReader';
        x.f = 'osWindowsMobile';
        x.g = 'isTablet';
        x.h = 'osVersion';
        x.i = 'osWindowsPhone';
        x.j = 'isFeedReader';
        x.k = 'vendor';
        x.l = 'osSymbian';
        x.m = 'browserVersion';
        x.n = 'browserName';
        x.o = 'model';
        x.p = 'isChecker';
        x.q = 'osiOs';
        x.r = 'osBada';
        x.s = 'isTV';
        x.t = 'osWebOs';
        x.u = 'isMediaPlayer';
        x.v = 'osAndroid';
        x.w = 'isSetTopBox';
        x.x = 'isApp';
        x.y = 'osName';
        x.z = 'browserRenderingEngine';

        return x;
    }
    catch (err) {
        this.logError(err, 'getDeviceAtlasServerPropsMap');
    }
}

DIGIOH_ANALYTICS.prototype.getDeviceAtlasServerPropsArr = function () {
    try {
        return ['ea', 'eb', 'ec', 'ed', 'ef', 'eg', 'eh', 'ei', 'ej', 'ek', 'el', 'em', 'en', 'eo', 'ep', 'eq', 'er', 'es', 'et', 'eu', 'ev', 'ew', 'ex', 'fa', 'fb', 'fc', 'fd', 'fe', 'ga', 'gb', 'gc', 'ge', 'ba', 'bb', 'bd', 'bg', 'bi', 'bl', 'bm', 'bp', 'bs', 'bz', 'cd', 'cl', 'ci', 'cr', 'cx', 'db', 'dc', 'dg', 'dh', 'dq', 'ds', 'dt', 'du', 'ck', 'cn', 'ch', 'bt', 'df', 'dd', 'de', 'bc', 'bq', 'bu', 'cc', 'ce', 'cu', 'ca', 'bw', 'cm', 'cy', 'cz', 'ha', 'hb', 'hc', 'ia', 'ib', 'ic', 'ie', 'ja', 'jb', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az', 'be', 'bf', 'bh', 'bj', 'bk', 'bn', 'bo', 'br', 'bv', 'bx', 'by', 'cb', 'cf', 'cg', 'cj', 'co', 'cp', 'cq', 'cs', 'ct', 'cv', 'cw', 'da', 'di', 'dj', 'dk', 'dl', 'dm', 'dn', 'do', 'dp', 'dr', 'dv', 'dw', 'dx', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    }
    catch (err) {
        this.logError(err, 'getDeviceAtlasServerPropsArr');
    }
}

DIGIOH_ANALYTICS.prototype.getDeviceAtlasServerPropsInclude = function () {
    try {
        return ',primaryHardwareType,mobileDevice,isApp,isTablet,isMobilePhone,model,vendor,touchScreen,osName,osVersion,browserName,browserVersion,osAndroid,osiOs,';
    }
    catch (err) {
        this.logError(err, 'getDeviceAtlasServerPropsInclude');
    }
}

DIGIOH_ANALYTICS.prototype.reduceDeviceAtlasServerProps = function (invalObj) {
    try {
        if (typeof invalObj !== 'object' || !invalObj) {
            return {};
        }

        var DEVICE_ATLAS_SERVER_PROPS_MAP = this.getDeviceAtlasServerPropsMap();
        var DEVICE_ATLAS_SERVER_PROPS_ARR = this.getDeviceAtlasServerPropsArr();
        var DEVICE_ATLAS_SERVER_PROPS_INCLUDE = this.getDeviceAtlasServerPropsInclude();

        var outval = invalObj;

        if (outval.hasOwnProperty('properties') && typeof outval.properties === 'object' && outval.properties) {
            outval = outval.properties;
        }

        var prop = '';

        for (var i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
            prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
            if (DEVICE_ATLAS_SERVER_PROPS_MAP.hasOwnProperty(prop) && DEVICE_ATLAS_SERVER_PROPS_MAP[prop] && outval.hasOwnProperty(DEVICE_ATLAS_SERVER_PROPS_MAP[prop]) && DEVICE_ATLAS_SERVER_PROPS_INCLUDE.indexOf(',' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + ',') === -1) {
                delete outval[DEVICE_ATLAS_SERVER_PROPS_MAP[prop]];
            }
        }

        outval = JSON.stringify(outval);

        for (var i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
            prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
            if (DEVICE_ATLAS_SERVER_PROPS_MAP.hasOwnProperty(prop) && DEVICE_ATLAS_SERVER_PROPS_MAP[prop] && outval.indexOf('"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '"') >= 0) {
                outval = outval.replace(('"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '"'), ('"' + prop + '"'));
            }
        }

        outval = outval.replace(new RegExp(':false,', 'g'), ':"-",');
        outval = outval.replace(new RegExp(':true,', 'g'), ':"_",');

        outval = outval.replace(new RegExp(':false}', 'g'), ':"-"}');
        outval = outval.replace(new RegExp(':true}', 'g'), ':"_"}');

        return JSON.parse(outval);
    }
    catch (err) {
        this.logError(err, 'reduceDeviceAtlasServerProps');
        return invalObj;
    }
}

DIGIOH_ANALYTICS.prototype.expandDeviceAtlasServerProps = function (invalObj) {
    try {
        if (typeof invalObj !== 'object' || !invalObj) {
            return {};
        }

        var DEVICE_ATLAS_SERVER_PROPS_MAP = this.getDeviceAtlasServerPropsMap();
        var DEVICE_ATLAS_SERVER_PROPS_ARR = this.getDeviceAtlasServerPropsArr();
        var DEVICE_ATLAS_SERVER_PROPS_INCLUDE = this.getDeviceAtlasServerPropsInclude();

        var outval = invalObj;

        if (outval.hasOwnProperty('properties') && typeof outval.properties === 'object' && outval.properties) {
            outval = outval.properties;
        }

        outval = JSON.stringify(outval);

        var prop = '';

        for (var i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
            prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
            if (DEVICE_ATLAS_SERVER_PROPS_MAP.hasOwnProperty(prop) && outval.indexOf('"' + prop + '"') >= 0) {
                outval = outval.replace(('"' + prop + '"'), ('"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '"'));
            }
        }

        outval = outval.replace(new RegExp(':"-"}', 'g'), ':false}');
        outval = outval.replace(new RegExp(':"_"}', 'g'), ':true}');

        outval = outval.replace(new RegExp(':"-",', 'g'), ':false,');
        outval = outval.replace(new RegExp(':"_",', 'g'), ':true,');

        return JSON.parse(outval);
    }
    catch (err) {
        this.logError(err, 'expandDeviceAtlasServerProps');
        return invalObj;
    }
}


DIGIOH_ANALYTICS.prototype.expandDeviceAtlasServerPropsFromModulus = function (inval) {
    try {
        if (inval === '' || !inval) {
            return '';
        }

        var DEVICE_ATLAS_SERVER_PROPS_MAP = this.getDeviceAtlasServerPropsMap();
        var DEVICE_ATLAS_SERVER_PROPS_ARR = this.getDeviceAtlasServerPropsArr();

        var outval = '{"' + inval.split('zzzz').join('"') + '"}';

        outval = outval.split('~').join('|#');
        outval = outval.split('*').join('|@');

        outval = outval.split('|').join('":"');
        outval = outval.split('$').join('":');
        outval = outval.split('@').join('_","');
        outval = outval.split('#').join('-","');
        outval = outval.split('%').join('","');
        outval = outval.split('^').join(',"');

        outval = outval.split('aaaa').join('~');
        outval = outval.split('bbbb').join('*');
        outval = outval.split('cccc').join('|');
        outval = outval.split('dddd').join('$');
        outval = outval.split('eeee').join('@');
        outval = outval.split('ffff').join('#');
        outval = outval.split('gggg').join('%');
        outval = outval.split('hhhh').join('^');

        outval = outval.split(':"-"').join(':false');
        outval = outval.split(':"_"').join(':true');

        var prop = '';

        for (var i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
            prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
            if (DEVICE_ATLAS_SERVER_PROPS_MAP.hasOwnProperty(prop)) {
                if (outval.indexOf(',"' + prop + '":') >= 0) {
                    outval = outval.replace((',"' + prop + '":'), (',"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '":'));
                }
                else if (outval.indexOf('{"' + prop + '":') >= 0) {
                    outval = outval.replace(('{"' + prop + '":'), ('{"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '":'));
                }
            }
        }

        // logger('EXPANDDEVICEATLASSERVERPROPS....');
        // console.log(JSON.parse(outval));

        return outval;
    }
    catch (err) {
        this.logError(err, 'expandDeviceAtlasServerPropsFromModulus');
        return inval;
    }
}


DIGIOH_ANALYTICS.prototype.setGeoAndDeviceData = function (json) {
    try {
        var geoCookieMissing = false;
        var deviceCookieMissing = false;

        if (typeof json === 'object' && json.hasOwnProperty("geo") && json.geo.hasOwnProperty("ip") && json.geo.ip) {
            if (!this.VARS.ip_address) {
                geoCookieMissing = true;
            }

            this.VARS.ip_address = json.geo.ip;
            this.VARS.landing_page_ip = json.geo.ip;

            if (json.geo.hasOwnProperty("continent_code") && json.geo.continent_code != null) this.VARS.continent = json.geo.continent_code;
            if (json.geo.hasOwnProperty("continent_name") && json.geo.continent_name != null) this.VARS.continent_name = json.geo.continent_name;
            if (json.geo.hasOwnProperty("country_code") && json.geo.country_code != null) this.VARS.country = json.geo.country_code;
            if (json.geo.hasOwnProperty("country_name") && json.geo.country_name != null) this.VARS.country_name = json.geo.country_name;
            if (json.geo.hasOwnProperty("region_name") && json.geo.region_name != null) this.VARS.region_name = json.geo.region_name;
            if (json.geo.hasOwnProperty("region_code") && json.geo.region_code != null) this.VARS.state = json.geo.region_code;
            if (json.geo.hasOwnProperty("city") && json.geo.city != null) this.VARS.city = json.geo.city;
            if (json.geo.hasOwnProperty("zipcode") && json.geo.zipcode != null) this.VARS.zipcode = json.geo.zipcode;
            if (json.geo.hasOwnProperty("latitude") && json.geo.latitude != null) this.VARS.latitude = json.geo.latitude;
            if (json.geo.hasOwnProperty("longitude") && json.geo.longitude != null) this.VARS.longitude = json.geo.longitude;
            if (json.geo.hasOwnProperty("metro_code") && json.geo.metro_code != null) this.VARS.metro_code = json.geo.metro_code;
            if (json.geo.hasOwnProperty("time_zone") && json.geo.time_zone != null) this.VARS.time_zone = json.geo.time_zone;
            if (json.geo.hasOwnProperty("area_code") && json.geo.area_code != null) this.VARS.area_code = json.geo.area_code;
            this.VARS.geo_source = "modulus-maxmind";
        }

        if (typeof json === 'object' && json.hasOwnProperty("da") && json.da) {
            if (!this.VARS.DeviceAtlas.primaryHardwareType) {
                deviceCookieMissing = true;
            }

            var expanded = JSON.parse(this.expandDeviceAtlasServerPropsFromModulus(json.da));
            this.VARS.DeviceAtlas = expanded;

            this.logger('DIGIOH: successfully expanded the reduced device props from modulus:');
            this.logger(this.VARS.DeviceAtlas);

            if (json.hasOwnProperty("devsrc")) {
                this.VARS.device_source = "modulus_" + json.devsrc;
            } else {
                this.VARS.device_source = "modulus_unspecified";
            }
        }
        else if (typeof json === 'object' && json.hasOwnProperty("device") && typeof json.device === 'object' && json.device && json.device.hasOwnProperty("properties") && typeof json.device.properties === 'object' && json.device.properties && json.device.properties.hasOwnProperty("primaryHardwareType") && json.device.properties.primaryHardwareType) {
            if (!this.VARS.DeviceAtlas.primaryHardwareType) {
                deviceCookieMissing = true;
            }

            this.VARS.DeviceAtlas = json.device.properties;

            if (json.hasOwnProperty("devsrc")) {
                this.VARS.device_source = "modulus_" + json.devsrc;
            } else {
                this.VARS.device_source = "modulus_unspecified";
            }
        }
        else if (typeof json === 'object' && json.hasOwnProperty("device") && typeof json.device === 'object' && json.device && json.device.hasOwnProperty("primaryHardwareType") && json.device.primaryHardwareType) {
            if (!this.VARS.DeviceAtlas.primaryHardwareType) {
                deviceCookieMissing = true;
            }

            this.VARS.DeviceAtlas = json.device;

            if (json.hasOwnProperty("devsrc")) {
                this.VARS.device_source = "modulus_" + json.devsrc;
            } else {
                this.VARS.device_source = "modulus_unspecified";
            }
        }



        if (geoCookieMissing || deviceCookieMissing) {
            var cookieName = "__bxcurr";

            var cobj = DIGIOH_STORAGE.data[cookieName];
            if (typeof cobj !== 'object' || cobj === null) {
                cobj = {};
            }

            if (geoCookieMissing) {
                cobj['ip'] = this.VARS.ip_address;
                cobj['geo_co'] = this.VARS.continent;
                cobj['geo_cc'] = this.VARS.country;
                cobj['geo_cn'] = this.VARS.country_name;
                cobj['geo_rn'] = this.VARS.region_name;
                cobj['geo_s'] = this.VARS.state;
                cobj['geo_c'] = this.VARS.city;
                cobj['geo_z'] = this.VARS.zipcode;
                cobj['geo_lat'] = this.VARS.latitude;
                cobj['geo_lon'] = this.VARS.longitude;
                cobj['geo_mc'] = this.VARS.metro_code;
                cobj['geo_tz'] = this.VARS.time_zone;
                cobj['geo_ac'] = this.VARS.area_code;
                //this.logger('DIGIOH: wrote geo data to cookie.  analytics.setGeoAndDeviceData()');
            }

            if (deviceCookieMissing) {
                cobj['device_atlas'] = this.reduceDeviceAtlasServerProps(this.VARS.DeviceAtlas);
                deviceCookieMissing = true;
                //this.logger('DIGIOH: wrote device data to cookie.  analytics.setGeoAndDeviceData()');
            }

            if (geoCookieMissing || deviceCookieMissing) {
                //DIGIOH_COOKIE.set(cookieName, JSON.stringify(cobj));
                DIGIOH_STORAGE.data[cookieName] = cobj;
                DIGIOH_STORAGE.set();
            }
        }
    }
    catch (error) {
        this.logError(error, "setGeoAndDeviceData");
    }
};

DIGIOH_ANALYTICS.prototype.getGeoAndDeviceDataFromCookie = function () {
    try {
        var cookieName = "__bxcurr";
        //var cookieVal = DIGIOH_COOKIE.get(cookieName);
        //if (cookieVal === null) {
        //    cookieVal = '';
        //}

        var cookieVal = DIGIOH_STORAGE.data[cookieName];

        //if (cookieVal != null && cookieVal.length > 0 && cookieVal.indexOf("{") === 0) {
        //var cobj = JSON.parse(cookieVal);

        var cobj = {};
        if (cookieVal !== null && typeof cookieVal === 'object') {
            cobj = cookieVal;
        } else if (typeof cookieVal === 'string' && cookieVal.length > 0 && cookieVal.indexOf("{") === 0) {
            cobj = JSON.parse(cookieVal);
        }

        if (cobj !== null && typeof cobj === 'object') {
            this.VARS.geo_source = "cookie";
            this.VARS.device_source = "cookie";

            if (cobj.hasOwnProperty('ip')) this.VARS.ip_address = cobj['ip'];
            if (cobj.hasOwnProperty('ip')) this.VARS.landing_page_ip = cobj['ip'];
            if (cobj.hasOwnProperty('geo_co')) this.VARS.continent = cobj['geo_co'];
            if (cobj.hasOwnProperty('geo_cc')) this.VARS.country = cobj['geo_cc'];
            if (cobj.hasOwnProperty('geo_cn')) this.VARS.country_name = cobj['geo_cn'];
            if (cobj.hasOwnProperty('geo_rn')) this.VARS.region_name = cobj['geo_rn'];
            if (cobj.hasOwnProperty('geo_s')) this.VARS.state = cobj['geo_s'];
            if (cobj.hasOwnProperty('geo_c')) this.VARS.city = cobj['geo_c'];
            if (cobj.hasOwnProperty('geo_z')) this.VARS.zipcode = cobj['geo_z'];
            if (cobj.hasOwnProperty('geo_lat')) this.VARS.latitude = cobj['geo_lat'];
            if (cobj.hasOwnProperty('geo_lon')) this.VARS.longitude = cobj['geo_lon'];
            if (cobj.hasOwnProperty('geo_mc')) this.VARS.metro_code = cobj['geo_mc'];
            if (cobj.hasOwnProperty('geo_tz')) this.VARS.time_zone = cobj['geo_tz'];
            if (cobj.hasOwnProperty('geo_ac')) this.VARS.area_code = cobj['geo_ac'];


            if (cobj.hasOwnProperty('device_atlas') && typeof cobj['device_atlas'] === 'object' && cobj['device_atlas']) {
                this.VARS.DeviceAtlas = this.expandDeviceAtlasServerProps(cobj['device_atlas']);
            } else {
                if (cobj.hasOwnProperty('da_pht')) { this.VARS.DeviceAtlas.primaryHardwareType = cobj['da_pht']; delete cobj['da_pht']; }
                if (cobj.hasOwnProperty('da_md')) { this.VARS.DeviceAtlas.mobileDevice = cobj['da_md']; delete cobj['da_md']; }
                if (cobj.hasOwnProperty('da_ia')) { this.VARS.DeviceAtlas.isApp = cobj['da_ia']; delete cobj['da_ia']; }
                if (cobj.hasOwnProperty('da_it')) { this.VARS.DeviceAtlas.isTablet = cobj['da_it']; delete cobj['da_it']; }
                if (cobj.hasOwnProperty('da_imp')) { this.VARS.DeviceAtlas.isMobilePhone = cobj['da_imp']; delete cobj['da_imp']; }
                if (cobj.hasOwnProperty('da_m')) { this.VARS.DeviceAtlas.model = cobj['da_m']; delete cobj['da_m']; }
                if (cobj.hasOwnProperty('da_v')) { this.VARS.DeviceAtlas.vendor = cobj['da_v']; delete cobj['da_v']; }
                if (cobj.hasOwnProperty('da_ts')) { this.VARS.DeviceAtlas.touchScreen = cobj['da_ts']; delete cobj['da_ts']; }
                if (cobj.hasOwnProperty('da_osn')) { this.VARS.DeviceAtlas.osName = cobj['da_osn']; delete cobj['da_osn']; }
                if (cobj.hasOwnProperty('da_osv')) { this.VARS.DeviceAtlas.osVersion = cobj['da_osv']; delete cobj['da_osv']; }
                if (cobj.hasOwnProperty('da_brn')) { this.VARS.DeviceAtlas.browserName = cobj['da_brn']; delete cobj['da_brn']; }
                if (cobj.hasOwnProperty('da_brv')) { this.VARS.DeviceAtlas.browserVersion = cobj['da_brv']; delete cobj['da_brv']; }
                if (cobj.hasOwnProperty('da_osa')) { this.VARS.DeviceAtlas.osAndroid = cobj['da_osa']; delete cobj['da_osa']; }
                if (cobj.hasOwnProperty('da_osi')) { this.VARS.DeviceAtlas.osiOs = cobj['da_osi']; delete cobj['da_osi']; }

                cobj['device_atlas'] = this.reduceDeviceAtlasServerProps(this.VARS.DeviceAtlas);

                //DIGIOH_COOKIE.set(cookieName, JSON.stringify(cobj));
                DIGIOH_STORAGE.data[cookieName] = cobj;
                DIGIOH_STORAGE.set();
            }

            if (this.VARS.DeviceAtlas.primaryHardwareType) {
                this.logger('DIGIOH: found device data from cookie (' + this.VARS.DeviceAtlas.primaryHardwareType + ')');
            }

            if (this.VARS.ip_address) {
                this.logger('DIGIOH: found geo data from cookie (' + this.VARS.ip_address + ')');
            }

            //this.logger(JSON.stringify(cobj, null, 2));
        }
    }
    catch (error) {
        this.logError(error, "getGeoAndDeviceDataFromCookie");
    }
};

DIGIOH_ANALYTICS.prototype.loadMasterRulesViewEvents = function () {
    try {
        var lbEvMap = this.VARS.lightbox_events;
        var foundViewEvent = false;
        var lastViewTimestamp = 0;
        var viewTimestamp = 0;

        var ignoreInline = false;
        if (typeof DIGIOH_LIGHTBOX_MASTER_RULES !== "undefined" && (typeof DIGIOH_LIGHTBOX_MASTER_RULES.IgnoreForInlineBoxes === "undefined" || DIGIOH_LIGHTBOX_MASTER_RULES.IgnoreForInlineBoxes === true)) {
            this.logger("IgnoreForInlineBoxes: Master rule ignoring inline lightboxes (view events).");
            ignoreInline = true;
        }

        for (lbid in lbEvMap) {
            var isInline = DIGIOH_API.LIGHTBOX.isInlineLightbox(lbid);

            if (ignoreInline && isInline) {
                this.logger('DIGIOH: loadMasterRulesViewEvents ==> ignoreInline ==> ' + lbid);
                continue;
            }
            else if (lbEvMap.hasOwnProperty(lbid) && lbEvMap[lbid].hasOwnProperty('view') && lbEvMap[lbid]['view']['cnt'] > 0 && lbEvMap[lbid]['view']['ts'].length > 0) {
                foundViewEvent = true;
                this.logger('DIGIOH: loadMasterRulesViewEvents ==> foundViewEvent ==> ' + lbid);
                var ts_len = lbEvMap[lbid]['view']['ts'].length;
                viewTimestamp = lbEvMap[lbid]['view']['ts'][ts_len - 1];
                if (lastViewTimestamp < viewTimestamp) {
                    lastViewTimestamp = viewTimestamp;
                }
            }
        }

        if (this.IsNewVisitor) {
            this.VARS.master_rules["Once per visitor"] = true;
            this.VARS.master_rules["Once per session"] = true;
            this.VARS.master_rules["Once per pageview"] = true;
        } else if (this.IsNewSession) {
            this.VARS.master_rules["Once per visitor"] = !foundViewEvent;
            this.VARS.master_rules["Once per session"] = true;
            this.VARS.master_rules["Once per pageview"] = true;
        } else {
            this.VARS.master_rules["Once per visitor"] = !foundViewEvent;
            this.VARS.master_rules["Once per session"] = !foundViewEvent || (lastViewTimestamp < this.SessionStart);
            this.VARS.master_rules["Once per pageview"] = !foundViewEvent || (lastViewTimestamp < this.PageviewStart);
        }
    }
    catch (error) {
        this.logError(error, "loadMasterRulesViewEvents");
    }
};

DIGIOH_ANALYTICS.prototype.loadMasterRulesSubmitEvents = function () {
    try {
        var lbEvMap = this.VARS.lightbox_events;
        var foundSubmitEvent = false;
        var lastSubmitTimestamp = 0;
        var submitTimestamp = 0;

        var ignoreInline = false;
        if (typeof DIGIOH_LIGHTBOX_MASTER_RULES !== "undefined" && (typeof DIGIOH_LIGHTBOX_MASTER_RULES.IgnoreForInlineBoxes === "undefined" || DIGIOH_LIGHTBOX_MASTER_RULES.IgnoreForInlineBoxes === true)) {
            this.logger("IgnoreForInlineBoxes: Master rule ignoring inline lightboxes (submit events).");
            ignoreInline = true;
        }

        for (lbid in lbEvMap) {
            var isInline = DIGIOH_API.LIGHTBOX.isInlineLightbox(lbid);

            if (ignoreInline && isInline) {
                this.logger('DIGIOH: loadMasterRulesSubmitEvents ==> ignoreInline ==> ' + lbid);
                continue;
            }
            else if (lbEvMap.hasOwnProperty(lbid) && lbEvMap[lbid].hasOwnProperty('submit') && lbEvMap[lbid]['submit']['cnt'] > 0) {
                foundSubmitEvent = true;
                this.logger('DIGIOH: loadMasterRulesSubmitEvents ==> foundSubmitEvent ==> ' + lbid);
                break;
            }
        }

        this.VARS.master_rules["Until form is submitted"] = !foundSubmitEvent;
    }
    catch (error) {
        this.logError(error, "loadMasterRulesSubmitEvents");
    }
};

DIGIOH_ANALYTICS.prototype.loadLightboxActivity = function () {
    try {
        this.loadAllEventsByLightboxGuid();
        this.loadMasterRulesViewEvents();
        this.loadMasterRulesSubmitEvents();

        //this.logger(this.VARS.lightbox_events, true);

        var lbEvMap = this.VARS.lightbox_events;
        var viewTimestamp = 0;

        for (lbid in lbEvMap) {
            if (lbEvMap.hasOwnProperty(lbid)) {
                if (!this.VARS.lightbox_activity.hasOwnProperty(lbid)) {
                    this.VARS.lightbox_activity[lbid] = {};
                }

                this.VARS.lightbox_activity[lbid]["Until form is submitted"] = (!lbEvMap[lbid].hasOwnProperty('submit') || lbEvMap[lbid]['submit']['cnt'] == 0); //true only if visitor doesn't contain a "submit" event for this lightbox
                this.VARS.lightbox_activity[lbid]["Until lightbox is closed"] = (!lbEvMap[lbid].hasOwnProperty('close') || lbEvMap[lbid]['close']['cnt'] == 0); //true only if visitor doesn't contain a "close" event for this lightbox

                if (lbEvMap[lbid].hasOwnProperty('view') && lbEvMap[lbid]['view']['cnt'] > 0 && lbEvMap[lbid]['view']['ts'].length > 0) {
                    var ts_len = lbEvMap[lbid]['view']['ts'].length;
                    viewTimestamp = lbEvMap[lbid]['view']['ts'][ts_len - 1];
                    this.VARS.lightbox_activity[lbid]["Days since last view"] = Math.floor((this.PageviewStart - viewTimestamp) / (1000 * 60 * 60 * 24));
                } else {
                    viewTimestamp = 0;
                    this.VARS.lightbox_activity[lbid]["Days since last view"] = -1;
                }

                //var isInline = DIGIOH_API.LIGHTBOX.isInlineLightbox(lbid);

                if (this.IsNewVisitor) {
                    this.VARS.lightbox_activity[lbid]["Once per visitor"] = true; //true because brand new visitor
                    this.VARS.lightbox_activity[lbid]["Once per session"] = true; //true because brand new visitor
                    this.VARS.lightbox_activity[lbid]["Once per pageview"] = true; //true because brand new visitor
                } else if (this.IsNewSession) {
                    this.VARS.lightbox_activity[lbid]["Once per visitor"] = (!lbEvMap[lbid].hasOwnProperty('view') || lbEvMap[lbid]['view']['cnt'] == 0); //true only if visitor doesn't contain a "view" event for this lightbox
                    this.VARS.lightbox_activity[lbid]["Once per session"] = true; //true because brand new session
                    this.VARS.lightbox_activity[lbid]["Once per pageview"] = true; //true because brand new session
                } else {
                    this.VARS.lightbox_activity[lbid]["Once per visitor"] = (!lbEvMap[lbid].hasOwnProperty('view') || lbEvMap[lbid]['view']['cnt'] == 0); //true only if visitor doesn't contain a "view" event for this lightbox
                    this.VARS.lightbox_activity[lbid]["Once per session"] = (!lbEvMap[lbid].hasOwnProperty('view') || lbEvMap[lbid]['view']['cnt'] == 0) || (viewTimestamp > 0 && viewTimestamp < this.SessionStart); //or, has property, but timestamp of "view" event is older than session start
                    this.VARS.lightbox_activity[lbid]["Once per pageview"] = (!lbEvMap[lbid].hasOwnProperty('view') || lbEvMap[lbid]['view']['cnt'] == 0) || (viewTimestamp > 0 && viewTimestamp < this.PageviewStart); //or, has property, but timestamp of "view" event is older than pageview start
                }
            }
        }
    }
    catch (error) {
        this.logError(error, "loadLightboxActivity");
    }
};




DIGIOH_ANALYTICS.prototype.getBaseDomain = function (host) {
    var baseName = this.getBaseDomainName(host);
    var baseDomain = host.substring(host.indexOf(baseName));
    return baseDomain;
};

DIGIOH_ANALYTICS.prototype.getBaseDomainName = function (url) {
    //http://stackoverflow.com/questions/8253136/how-to-get-domain-name-only-using-javascript
    try {
        var TLDs = ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--0zwm56d", "xn--11b5bs3a9aj6g", "xn--3e0b707e", "xn--45brj9c", "xn--80akhbyknj4f", "xn--90a3ac", "xn--9t4b11yi5a", "xn--clchc0ea0b2g2a9gcd", "xn--deba0ad", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--g6w251d", "xn--gecrj9c", "xn--h2brj9c", "xn--hgbk6aj7f53bba", "xn--hlcj6aya9esc7a", "xn--j6w193g", "xn--jxalpdlp", "xn--kgbechtv", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgbaam7a8h", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zckzah", "xxx", "ye", "yt", "za", "zm", "zw"].join();
        var parts = url.split('.');
        if (parts[0] === 'www' && parts[1] !== 'com') {
            parts.shift();
        }
        var ln = parts.length
          , i = ln
          , minLength = parts[parts.length - 1].length
          , part;

        // iterate backwards
        while (part = parts[--i]) {
            // stop when we find a non-TLD part
            if (i === 0                    // 'asia.com' (last remaining must be the SLD)
                || i < ln - 2                // TLDs only span 2 levels
                || part.length < minLength // 'www.cn.com' (valid TLD as second-level domain)
                || TLDs.indexOf(part) < 0  // officialy not a TLD
            ) {
                return part;
            }
        }
    }
    catch (error) {
        this.logError(error, "getBaseDomainName");
    }
};

DIGIOH_ANALYTICS.prototype.formatDate = function (d) {
    try {
        if (d.getMonth && d.getDate && d.getFullYear) {
            var time = (1 + d.getMonth()) + "/" + d.getDate() + "/" + d.getFullYear() + " ";
            var hours = d.getHours();
            var minutes = this.padStr(d.getMinutes());
            if (hours > 12)
                time += (hours - 12) + ":" + minutes + " PM";
            else if (hours == 12)
                time += "12:" + minutes + " PM";
            else if (hours == 0)
                time += "12:" + minutes + " AM";
            else
                time += hours + ":" + minutes + " AM";

            return time;
        }

        return "";
    }
    catch (error) {
        this.logError(error, "formatDate");
    }
};

DIGIOH_ANALYTICS.prototype.formatDateWithSeconds = function (d) {
    try {
        var time = (1 + d.getMonth()) + "/" + d.getDate() + "/" + d.getFullYear() + " ";
        var hours = d.getHours();
        var minutes = this.padStr(d.getMinutes());
        var seconds = this.padStr(d.getSeconds());
        if (hours > 12)
            time += (hours - 12) + ":" + minutes + ":" + seconds + " PM";
        else if (hours == 12)
            time += "12:" + minutes + ":" + seconds + " PM";
        else if (hours == 0)
            time += "12:" + minutes + ":" + seconds + " AM";
        else
            time += hours + ":" + minutes + ":" + seconds + " AM";

        return time;
    }
    catch (error) {
        this.logError(error, "formatDateWithSeconds");
    }
};

DIGIOH_ANALYTICS.prototype.formatDateWithSecondsForSalesforce = function (d) {
    try {
        //yyyy-MM-dd HH:mm:ss
        return d.getFullYear() + "-" + this.padStr(1 + d.getMonth()) + "-" + d.getDate() + " " + this.padStr(d.getHours()) + ":" + this.padStr(d.getMinutes()) + ":" + this.padStr(d.getSeconds());
    }
    catch (error) {
        this.logError(error, "formatDateWithSecondsForSalesforce");
    }
};

DIGIOH_ANALYTICS.prototype.getReadableHMS = function (seconds) {
    try {
        if (seconds < 60) {
            return seconds + " secs";
        } else if (seconds < 3600) {
            var minutes = Math.floor(seconds / 60);
            seconds = seconds - (minutes * 60);
            return minutes + " mins " + seconds + " secs";
        } else {
            var hours = Math.floor(seconds / 3600);
            seconds = seconds - (hours * 3600);
            var minutes = Math.floor(seconds / 60);
            seconds = seconds - (minutes * 60);
            return hours + " hrs " + minutes + " mins " + seconds + " secs";
        }
    }
    catch (error) {
        this.logError(error, "getReadableHMS");
    }
};

DIGIOH_ANALYTICS.prototype.padStr = function (i) {
    try {
        return (i < 10) ? "0" + i : "" + i;
    }
    catch (error) {
        this.logError(error, "padStr");
    }
};

DIGIOH_ANALYTICS.prototype.getSearchEngine = function (url) {
    try {
        if (!url) {
            return "";
        }

        var bd = url.toLowerCase();

        if (bd.indexOf('http://') === 0)
            bd = bd.substring(7);
        else if (bd.indexOf('https://') === 0)
            bd = bd.substring(8);

        if (bd.indexOf('?') > 0)
            bd = bd.split('?')[0];
        if (bd.indexOf('/') > 0)
            bd = bd.split('/')[0];
        if (bd.indexOf('#') > 0)
            bd = bd.split('#')[0];
        if (bd.indexOf(':') > 0)
            bd = bd.split(':')[0];

        if (bd.indexOf('.google.') >= 0 || bd.indexOf('google.') === 0)
            return 'google';
        if (bd.indexOf('.bing.') >= 0 || bd.indexOf('bing.') === 0)
            return 'bing';
        if (bd.indexOf('.yahoo.') >= 0 || bd.indexOf('yahoo.') === 0)
            return 'yahoo';
        if (bd.indexOf('.ask.') >= 0 || bd.indexOf('ask.') === 0)
            return 'ask';
        if (bd.indexOf('.aol.') >= 0 || bd.indexOf('aol.') === 0)
            return 'aol';
        if (bd.indexOf('.myway.') >= 0 || bd.indexOf('myway.') === 0)
            return 'myway';
        if (bd.indexOf('.baidu.') >= 0 || bd.indexOf('baidu.') === 0)
            return 'baidu';
        if (bd.indexOf('.yandex.') >= 0 || bd.indexOf('yandex.') === 0)
            return 'yandex';
        if (bd.indexOf('.excite.') >= 0)
            return 'excite';
        if (bd.indexOf('.duckduckgo.') >= 0 || bd.indexOf('duckduckgo.') === 0)
            return 'duckduckgo';
        if (bd.indexOf('.lycos.') >= 0)
            return 'lycos';
        if (bd.indexOf('.wolframalpha.') >= 0 || bd.indexOf('wolframalpha.') === 0)
            return 'wolframalpha';
        if (bd.indexOf('.wow.com') >= 0)
            return 'wow';
        if (bd.indexOf('.webcrawler.') >= 0 || bd.indexOf('webcrawler.') === 0)
            return 'webcrawler';
        if (bd.indexOf('.mywebsearch.') >= 0 || bd.indexOf('mywebsearch.') === 0)
            return 'mywebsearch';
        if (bd.indexOf('.infospace.') >= 0 || bd.indexOf('infospace.') === 0)
            return 'infospace';
        if (bd.indexOf('.info.com') >= 0)
            return 'info';
        if (bd.indexOf('.contenko.') >= 0)
            return 'contenko';
        if (bd.indexOf('.dogpile.') >= 0)
            return 'dogpile';
        if (bd.indexOf('.alhea.') >= 0)
            return 'alhea';
        if (bd.indexOf('.ixquick.') >= 0 || bd.indexOf('ixquick.') === 0)
            return 'ixquick';

        return "";
    }
    catch (error) {
        this.logError(error, "getSearchEngine");
        return "";
    }
};

DIGIOH_ANALYTICS.prototype.isGoogleAdWordsUrl = function (url, search_engine) {
    try {
        if (!url || !search_engine || search_engine.toLowerCase() !== "google")
            return false;

        return (url.toLowerCase().indexOf('/aclk?') !== -1);
    }
    catch (error) {
        this.logError(error, "isGoogleAdWordsUrl");
        return false;
    }
};

DIGIOH_ANALYTICS.prototype.isFacebookUrl = function (url) {
    try {
        if (!url) {
            return false;
        }

        var bd = url.toLowerCase();

        if (bd.indexOf('http://') === 0)
            bd = bd.substring(7);
        else if (bd.indexOf('https://') === 0)
            bd = bd.substring(8);

        if (bd.indexOf('?') > 0)
            bd = bd.split('?')[0];
        if (bd.indexOf('/') > 0)
            bd = bd.split('/')[0];
        if (bd.indexOf('#') > 0)
            bd = bd.split('#')[0];
        if (bd.indexOf(':') > 0)
            bd = bd.split(':')[0];

        if (bd.indexOf('.facebook.com') >= 0 || bd.indexOf('facebook.com') === 0)
            return true;
        else
            return false;
    }
    catch (error) {
        this.logError(error, "isFacebookUrl");
        return false;
    }
};

DIGIOH_ANALYTICS.prototype.isAndroidAppUrl = function (url) {
    try {
        if (!url) {
            return false;
        }

        var bd = url.toLowerCase();

        if (bd.indexOf('android-app://') === 0)
            return true;
        else
            return false;
    }
    catch (error) {
        this.logError(error, "isAndroidAppUrl");
        return false;
    }
};

DIGIOH_ANALYTICS.prototype.removeUrlBeginning = function (url) {
    try {
        if (url.length == 0) return "";

        if (url.toLowerCase().indexOf('https://www.') == 0) return url.substring(12);
        else if (url.toLowerCase().indexOf('http://www.') == 0) return url.substring(11);
        else if (url.toLowerCase().indexOf('https://') == 0) return url.substring(8);
        else if (url.toLowerCase().indexOf('http://') == 0) return url.substring(7);
        else return url;
    }
    catch (error) {
        this.logError(error, "removeUrlBeginning");
        return "";
    }
};

DIGIOH_ANALYTICS.prototype.removeUrlProtocol = function (url) {
    try {
        if (url.length == 0) return "";

        if (url.toLowerCase().indexOf('https://') == 0) return url.substring(8);
        else if (url.toLowerCase().indexOf('http://') == 0) return url.substring(7);
        else return url;
    }
    catch (error) {
        this.logError(error, "removeUrlProtocol");
    }
};

DIGIOH_ANALYTICS.prototype.removeUrlEnding = function (url) {
    try {
        if (url.length == 0) return "";

        var ending = url.substring(url.length - 1);
        if (ending == '/' || ending == '#' || ending == '?' || ending == '&') {
            url = url.substring(0, url.length - 1);
        }
        return url;
    }
    catch (error) {
        this.logError(error, "removeUrlEnding");
    }
};

DIGIOH_ANALYTICS.prototype.getUrlBaseDomain = function (url) {
    try {
        if (url == undefined || url.length == 0) return "";

        var a = url.split(/\/\//g)[1].split(/[:\/?#]/)[0].split('.');
        var f = (a.length > 1 ? (a[a.length - 2] + '.' + a[a.length - 1]) : "").toLowerCase();

        return f;
    }
    catch (error) {
        this.logError(error, "getUrlBaseDomain");
    }
};

DIGIOH_ANALYTICS.prototype.getUrlSubdomain = function (url) {
    try {
        if (url.length == 0) return "";

        return this.removeUrlBeginning(url).split(/[:\/?#]/)[0];
    }
    catch (error) {
        this.logError(error, "getUrlSubdomain");
    }
};

DIGIOH_ANALYTICS.prototype.doSubdomainsMatch = function (url1, url2) {
    try {
        return (url1.length > 0 && url2.length > 0 && this.getUrlSubdomain(url1).toLowerCase() == this.getUrlSubdomain(url2).toLowerCase());
    }
    catch (error) {
        this.logError(error, "doSubdomainsMatch");
    }
};

DIGIOH_ANALYTICS.prototype.hasUTMCampaign = function (url) {
    try {
        if (url.length > 0 && url.indexOf('?') !== -1) {
            var queryString = url.split('?')[1];
            if (queryString.length > 0 && queryString.indexOf('=') !== -1) {
                var queryVars = queryString.split('&');
                for (var i = 0; i < queryVars.length; i++) {
                    var pair = queryVars[i].split('=');
                    if (decodeURIComponent(pair[0]).toLowerCase() == "utm_campaign") {
                        return true;
                    }
                }
            }
        }
    }
    catch (error) {
        this.logError(error, "hasUTMCampaign");
    }

    return false;
};

DIGIOH_ANALYTICS.prototype.isStringAnInteger = function (str) {
    try {
        if (str.length == 0) return false;
        return !isNaN(str);
    }
    catch (error) {
        this.logError(error, "isStringAnInteger");
    }

    return false;
};

DIGIOH_ANALYTICS.prototype.updateLightboxActivity = function (eventKey, lid, timestamp) {
    try {
        this.logger('updateLightboxActivity: ' + eventKey + ' ==> ' + lid);

        if (!this.VARS.lightbox_activity.hasOwnProperty(lid)) {
            this.VARS.lightbox_activity[lid] = {};
        }

        var ignoreInline = false;
        if (typeof DIGIOH_LIGHTBOX_MASTER_RULES !== "undefined" && (typeof DIGIOH_LIGHTBOX_MASTER_RULES.IgnoreForInlineBoxes === "undefined" || DIGIOH_LIGHTBOX_MASTER_RULES.IgnoreForInlineBoxes === true)) {
            //this.logger("DIGIOH: updateLightboxActivity ==> IgnoreForInlineBoxes Master rule ignoring inline lightboxes (view events).");
            ignoreInline = true;
        }

        var isInline = DIGIOH_API.LIGHTBOX.isInlineLightbox(lid);

        if (ignoreInline && isInline) {
            this.logger('DIGIOH: updateLightboxActivity ==> ignoreInline ==> ' + lid);
        }

        if (eventKey === 'view') {
            this.VARS.lightbox_activity[lid]["Once per visitor"] = false;
            this.VARS.lightbox_activity[lid]["Once per session"] = false;
            this.VARS.lightbox_activity[lid]["Once per pageview"] = false;
            this.VARS.lightbox_activity[lid]["Days since last view"] = 0;

            if (!ignoreInline || !isInline) {
                this.VARS.master_rules["Once per visitor"] = false;
                this.VARS.master_rules["Once per session"] = false;
                this.VARS.master_rules["Once per pageview"] = false;
            }
        } else if (eventKey == 'submit') {
            this.VARS.lightbox_activity[lid]["Until form is submitted"] = false;
            if (!ignoreInline || !isInline) {
                this.VARS.master_rules["Until form is submitted"] = false;
            }
        } else if (eventKey == 'close') {
            this.VARS.lightbox_activity[lid]["Until lightbox is closed"] = false;
        }
    }
    catch (error) {
        this.logError(error, "updateLightboxActivity");
    }
};


//  |id:4efe5200-6208-4728-82aa-16b98d6a340c*view:12:1428957817,1428957817,1428957817,1428957817,1428957817,...*submit:7:1428957817,1428957817,1428957817,...|id:.....
DIGIOH_ANALYTICS.prototype.setLightboxEvent = function (eventKey, lid) {
    try {
        var cookieName = "__bxevents";
        var timestamp = new Date().getTime();

        if (!this.VARS.lightbox_events.hasOwnProperty(lid)) {
            this.VARS.lightbox_events[lid] = { 'view': { 'cnt': 0, 'ts': [] }, 'submit': { 'cnt': 0, 'ts': [] }, 'redirect': { 'cnt': 0, 'ts': [] }, 'download': { 'cnt': 0, 'ts': [] }, 'close': { 'cnt': 0, 'ts': [] } };
        }

        if (!this.VARS.lightbox_events[lid].hasOwnProperty(eventKey)) {
            this.VARS.lightbox_events[lid][eventKey] = { 'cnt': 1, 'ts': [] };
        } else {
            this.VARS.lightbox_events[lid][eventKey]['cnt']++;
        }

        //MaxLength check, comment out for now
        //if (DIGIOH_WIN_PARENT.location.host.indexOf('barrons.com') >= 0 && this.VARS.lightbox_events[lid][eventKey]['ts'].length >= 2) {
        //    this.VARS.lightbox_events[lid][eventKey]['ts'].shift();
        //}

        if (this.VARS.lightbox_events[lid][eventKey]['ts'].length >= 20) {
            //this.VARS.lightbox_events[lid][eventKey]['ts'].shift();
            //remove the 2nd from first event, so we maintain a record of the very first event.
            this.VARS.lightbox_events[lid][eventKey]['ts'].splice(1, 1);
        }

        this.VARS.lightbox_events[lid][eventKey]['ts'].push(timestamp);
        this.updateLightboxActivity(eventKey, lid, timestamp);

        //var cookieVal = JSON.stringify(this.VARS.lightbox_events);
        //DIGIOH_COOKIE.set(cookieName, cookieVal);

        DIGIOH_STORAGE.data[cookieName] = this.VARS.lightbox_events;
        DIGIOH_STORAGE.set();

    }
    catch (error) {
        this.logError(error, "setLightboxEvent");
    }
};

//  id:4efe5200-6208-4728-82aa-16b98d6a340c*view:12:1428957817,1428957817,1428957817,1428957817,1428957817,...*submit:7:1428957817,1428957817,1428957817,...
DIGIOH_ANALYTICS.prototype.parseLightboxEvents = function (boxEvents) {
    var hash = { 'view': { 'cnt': 0, 'ts': [] }, 'submit': { 'cnt': 0, 'ts': [] }, 'redirect': { 'cnt': 0, 'ts': [] }, 'download': { 'cnt': 0, 'ts': [] }, 'close': { 'cnt': 0, 'ts': [] } };
    try {
        var parts = boxEvents.split('*');
        var event;
        for (var x = 1; x < parts.length; x++) {
            if (parts[x].indexOf(':') > 0) {
                event = parts[x].split(':');
                if (event.length == 3 && hash.hasOwnProperty(event[0])) {
                    if (this.isStringAnInteger(event[1])) {
                        hash[event[0]]['cnt'] = parseInt(event[1]);
                    }
                    if (event[2].indexOf(',') > 0) {
                        var tss = event[2].split(',');
                        for (var y = 0; y < tss.length; y++) {
                            if (this.isStringAnInteger(tss[y])) {
                                hash[event[0]]['ts'].push(parseInt(tss[y]));
                            }
                        }
                    } else if (this.isStringAnInteger(event[2])) {
                        hash[event[0]]['ts'].push(parseInt(event[2]));
                    } else {
                        //this.logger('missed ts for ' + event[0] + ' event');
                    }
                }
            }
        }
    }
    catch (error) {
        this.logError(error, "parseLightboxEvents");
    }

    return hash;
};

//  |id:4efe5200-6208-4728-82aa-16b98d6a340c*view:12:1428957817,1428957817,1428957817,1428957817,1428957817,...*submit:7:1428957817,1428957817,1428957817,...|id:.....
DIGIOH_ANALYTICS.prototype.loadAllEventsByLightboxGuid = function () {
    try {
        var cookieName = "__bxevents";
        //var cookieVal = DIGIOH_COOKIE.get(cookieName);
        //if (cookieVal === null) {
        //    cookieVal = '';
        //}

        var cookieVal = DIGIOH_STORAGE.data[cookieName];

        var lbid;

        if (cookieVal) {
            if (typeof cookieVal === 'string' && cookieVal.indexOf('id:') >= 0 && cookieVal.indexOf('{') === -1) {
                if (cookieVal.indexOf('|') > 0) {
                    var parts = cookieVal.split('|');
                    for (var x = 0; x < parts.length; x++) {
                        if (parts[x].indexOf('id:') == 0 && parts[x].indexOf('*') > 0) {
                            lbid = parts[x].split('*')[0].split(':')[1];
                            this.VARS.lightbox_events[lbid] = this.parseLightboxEvents(parts[x]);
                        }
                    }
                } else if (cookieVal.indexOf("id:") == 0 && cookieVal.indexOf('*') > 0) {
                    lbid = cookieVal.split('*')[0].split(':')[1];
                    this.VARS.lightbox_events[lbid] = this.parseLightboxEvents(cookieVal);
                }

                //DIGIOH_COOKIE.set(cookieName, JSON.stringify(this.VARS.lightbox_events));
                DIGIOH_STORAGE.data["__bxevents"] = this.VARS.lightbox_events;
                DIGIOH_STORAGE.set();

            } else if (typeof cookieVal === 'string' && cookieVal.indexOf('{') === 0) {
                this.VARS.lightbox_events = JSON.parse(cookieVal);
            } else if (typeof cookieVal === 'object' && cookieVal !== null) {
                this.VARS.lightbox_events = cookieVal;
            }
        }
    }
    catch (error) {
        this.logError(error, "loadAllEventsByLightboxGuid");
    }
};

//returns: # of occurrances of event (int)
DIGIOH_ANALYTICS.prototype.getLightboxEventCount = function (eventKey, lightboxGUID, isLightboxIndependent, excludeLightboxGUID) {
    var eventCount = 0;

    try {
        var lbEvMap = this.VARS.lightbox_events;
        var viewTimestamp = 0;

        for (lbid in lbEvMap) {
            if ((lbid == lightboxGUID || isLightboxIndependent) && lbEvMap.hasOwnProperty(lbid) && lbEvMap[lbid].hasOwnProperty(eventKey)) {
                if (!isLightboxIndependent && lbid == lightboxGUID)
                    eventCount += lbEvMap[lbid][eventKey]['cnt'];
                else if (isLightboxIndependent && excludeLightboxGUID == '')
                    eventCount += lbEvMap[lbid][eventKey]['cnt'];
                else if (isLightboxIndependent && excludeLightboxGUID != '' && excludeLightboxGUID != lbid)
                    eventCount += lbEvMap[lbid][eventKey]['cnt'];
            }
        }

        return eventCount;
    }
    catch (error) {
        this.logError(error, "getLightboxEventCount");
    }

    return eventCount;
};

DIGIOH_ANALYTICS.prototype.getEventCountByLightbox = function (eventKey, lightboxGUID) {
    return this.getLightboxEventCount(eventKey, lightboxGUID, false, '');
};

DIGIOH_ANALYTICS.prototype.getEventCountAcrossAllLightboxes = function (eventKey) {
    return this.getLightboxEventCount(eventKey, '', true, '');
};

DIGIOH_ANALYTICS.prototype.getEventCountAcrossAllLightboxesExcept = function (eventKey, excludeLightboxGUID) {
    return this.getLightboxEventCount(eventKey, '', true, excludeLightboxGUID);
};



DIGIOH_ANALYTICS.prototype.setCurrent = function () {
    try {
        //var maxCookieLength = 1500;
        var maxCookieLength = 3000000;

        var cookieName = "__bxcurr";
        //var cookieVal = DIGIOH_COOKIE.get(cookieName);
        //if (cookieVal === null) {
        //    cookieVal = '';
        //}

        var cookieVal = DIGIOH_STORAGE.data[cookieName];

        var timestamp = new Date().getTime();

        var referring_url = "";
        var search_engine = "";
        if (DIGIOH_DOC_PARENT.referrer && DIGIOH_DOC_PARENT.referrer.length > 7) {
            referring_url = DIGIOH_DOC_PARENT.referrer;
            search_engine = this.getSearchEngine(referring_url);
        }

        var current_url = "";
        var domain_base = "";
        var domain_ending = "";
        var domain_protocol = "";
        if (DIGIOH_WIN_PARENT.location.href) {
            current_url = DIGIOH_WIN_PARENT.location.href;
            domain_protocol = DIGIOH_WIN_PARENT.location.protocol;
            domain_base = DIGIOH_WIN_PARENT.location.host;
            domain_ending = DIGIOH_WIN_PARENT.location.pathname + DIGIOH_WIN_PARENT.location.search + DIGIOH_WIN_PARENT.location.hash;
            this.VARS.current_page_url = current_url;
        }
        //this.logger('current_page_url: ' + current_url);

        var areMatchingDomains = this.doSubdomainsMatch(referring_url, current_url);
        var foundReferrer = referring_url.length > 0;

        if (cookieVal) {
            if (areMatchingDomains) {
                this.OverwriteCurrentCookie = false;
            }
            else if (foundReferrer && this.isGoogleAdWordsUrl(referring_url, search_engine)) {
                this.OverwriteCurrentCookie = true;
            }
            else if (foundReferrer && this.isFacebookUrl(referring_url)) {
                this.OverwriteCurrentCookie = true;
            }
            else if (foundReferrer && search_engine !== "") {
                this.OverwriteCurrentCookie = true;
                this.VARS.search_engine = search_engine;
            }
            else if (foundReferrer && !areMatchingDomains) {
                this.OverwriteCurrentCookie = true;
            }
            //else if (this.hasUTMCampaign(current_url) && (!foundReferrer || !areMatchingDomains)) {
            //    this.OverwriteCurrentCookie = true;
            //}
            //else if (foundReferrer && cookieVal.indexOf("__rurl:") !== -1 && cookieVal.split("__rurl:")[1].length == 0) {
            //    this.OverwriteCurrentCookie = true;
            //}
        }
        else {
            cookieVal = "";
            this.OverwriteCurrentCookie = true;
            //if (foundReferrer && areMatchingDomains) referring_url = "";
        }

        if (this.VARS.IsPreview) {
            this.OverwriteCurrentCookie = true;
        }

        if (typeof cookieVal === 'string' && cookieVal.indexOf('__prot:') >= 0) {

            var cParts;

            //Calculate Previous Pageview Timestamp
            this.PreviousPageviewTs = 0;

            if (cookieVal.indexOf("__ppts:") > 0) {
                cParts = cookieVal.split("__ppts:");
                this.PreviousPageviewTs = parseInt(cParts[1]);
                cookieVal = cParts[0] + "__ppts:" + timestamp + "__ppts:" + cParts[2];
            }

            if (this.PreviousPageviewTs == 0) {
                if (cookieVal.indexOf("__vurl:") > 0) {
                    cParts = cookieVal.split('__vurl:');
                    cookieVal = cParts[0] + "__ppts:" + timestamp + "__ppts:";
                } else if (cookieVal.indexOf("__prot") >= 0) {
                    cookieVal += "__ppts:" + timestamp + "__ppts:";
                }

                if (cookieVal.indexOf("__lts:") > 0) {
                    cParts = cookieVal.split("__lts:");
                    this.PreviousPageviewTs = parseInt(cParts[1]);
                }
            }

            //Calculate Page Visits
            this.VARS.page_visits = 0;

            if (cookieVal.indexOf("__pvcnt:") > 0) {
                cParts = cookieVal.split("__pvcnt:");
                this.VARS.page_visits = parseInt(cParts[1]) + 1;
                cookieVal = cParts[0] + "__pvcnt:" + this.VARS.page_visits + "__pvcnt:" + cParts[2];
            }

            if (this.VARS.page_visits == 0) {
                this.VARS.page_visits = 1;

                if (cookieVal.indexOf("__vurl:") > 0) {
                    cParts = cookieVal.split('__vurl:');
                    cookieVal = cParts[0] + "__pvcnt:" + this.VARS.page_visits + "__pvcnt:";
                } else if (cookieVal.indexOf("__prot") >= 0) {
                    cookieVal += "__pvcnt:" + this.VARS.page_visits + "__pvcnt:";
                }
            }


            //Calculate Session
            this.IsNewSession = false;

            if (timestamp - this.PreviousPageviewTs > this.SessionLengthTicks) {
                this.SessionStart = timestamp;
                this.IsNewSession = true;
            }
            else if (cookieVal.indexOf("__ss:") > 0) {
                cParts = cookieVal.split("__ss:");
                this.SessionStart = parseInt(cParts[1]);
                this.IsNewSession = false;
            }

            if (this.SessionStart == 0) {
                this.SessionStart = timestamp;
                this.IsNewSession = true;
            }

            if (this.IsNewSession) {
                if (cookieVal.indexOf("__ss:") > 0) {
                    cParts = cookieVal.split('__ss:');
                    cookieVal = cParts[0] + "__ss:" + this.SessionStart + "__ss:" + cParts[2];
                }
                else if (cookieVal.indexOf("__vurl:") > 0) {
                    cParts = cookieVal.split('__vurl:');
                    cookieVal = cParts[0] + "__ss:" + this.SessionStart + "__ss:";
                } else if (cookieVal.indexOf("__prot") >= 0) {
                    cookieVal += "__ss:" + this.SessionStart + "__ss:";
                }

                //this.logger("New Session: " + new Date(this.SessionStart).toLocaleString());
            }
            else {
                //this.logger("Existing Session: " + new Date(this.SessionStart).toLocaleString());
            }


            //Write Cookie
            if (this.OverwriteCurrentCookie) {
                cookieVal = "__prot:" + domain_protocol + "__prot:";
                cookieVal += "__dom:" + domain_base + "__dom:";
                cookieVal += "__rurl:" + referring_url + "__rurl:";
                cookieVal += "__lurl:" + domain_ending + "__lurl:";
                cookieVal += "__lts:" + timestamp + "__lts:";
                cookieVal += "__dev:" + this.VARS.device + "__dev:";
                cookieVal += "__os:" + this.VARS.operating_system + "__os:";
                cookieVal += "__bt:" + this.VARS.browser_type + "__bt:";
                cookieVal += "__bv:" + this.VARS.browser_version + "__bv:";
                cookieVal += "__ip:" + this.VARS.ip_address + "__ip:";

                if (this.VARS.continent) cookieVal += "__geo_co:" + this.VARS.continent + "__geo_co:";
                if (this.VARS.country) cookieVal += "__geo_cc:" + this.VARS.country + "__geo_cc:";
                if (this.VARS.country_name) cookieVal += "__geo_cn:" + this.VARS.country_name + "__geo_cn:";
                if (this.VARS.region_name) cookieVal += "__geo_rn:" + this.VARS.region_name + "__geo_rn:";
                if (this.VARS.state) cookieVal += "__geo_s:" + this.VARS.state + "__geo_s:";
                if (this.VARS.city) cookieVal += "__geo_c:" + this.VARS.city + "__geo_c:";
                if (this.VARS.zipcode) cookieVal += "__geo_z:" + this.VARS.zipcode + "__geo_z:";
                if (this.VARS.latitude) cookieVal += "__geo_lat:" + this.VARS.latitude + "__geo_lat:";
                if (this.VARS.longitude) cookieVal += "__geo_lon:" + this.VARS.longitude + "__geo_lon:";
                if (this.VARS.metro_code) cookieVal += "__geo_mc:" + this.VARS.metro_code + "__geo_mc:";
                if (this.VARS.time_zone) cookieVal += "__geo_tz:" + this.VARS.time_zone + "__geo_tz:";
                if (this.VARS.area_code) cookieVal += "__geo_ac:" + this.VARS.area_code + "__geo_ac:";

                cookieVal += "__ppts:" + timestamp + "__ppts:";
                cookieVal += "__pvcnt:" + this.VARS.page_visits + "__pvcnt:";
                cookieVal += "__ss:" + this.SessionStart + "__ss:";
            }
            else if (cookieVal.indexOf(domain_ending) === -1 && domain_ending.length > 0) {
                cookieVal += "__purl:" + domain_ending + "__purl:";
            }

            var cobj = {};
            cobj['prot'] = (cookieVal.indexOf('__prot:') >= 0 ? (cookieVal.split('__prot:')[1]) : domain_protocol);
            cobj['dom'] = (cookieVal.indexOf('__dom:') >= 0 ? (cookieVal.split('__dom:')[1]) : domain_base);
            cobj['rurl'] = (cookieVal.indexOf('__rurl:') >= 0 ? (cookieVal.split('__rurl:')[1]) : referring_url);
            cobj['lurl'] = (cookieVal.indexOf('__lurl:') >= 0 ? (cookieVal.split('__lurl:')[1]) : domain_ending);
            cobj['lts'] = (cookieVal.indexOf('__lts:') >= 0 ? parseInt(cookieVal.split('__lts:')[1]) : timestamp);
            cobj['dev'] = (cookieVal.indexOf('__dev:') >= 0 ? (cookieVal.split('__dev:')[1]) : this.VARS.device);
            cobj['os'] = (cookieVal.indexOf('__os:') >= 0 ? (cookieVal.split('__os:')[1]) : this.VARS.operating_system);
            cobj['bt'] = (cookieVal.indexOf('__bt:') >= 0 ? (cookieVal.split('__bt:')[1]) : this.VARS.browser_type);
            cobj['bv'] = (cookieVal.indexOf('__bv:') >= 0 ? (cookieVal.split('__bv:')[1]) : this.VARS.browser_version);

            cobj['ip'] = (cookieVal.indexOf('__ip:') >= 0 ? (cookieVal.split('__ip:')[1]) : this.VARS.ip_address);
            cobj['geo_co'] = (cookieVal.indexOf('__geo_co:') >= 0 ? (cookieVal.split('__geo_co:')[1]) : this.VARS.continent);
            cobj['geo_cc'] = (cookieVal.indexOf('__geo_cc:') >= 0 ? (cookieVal.split('__geo_cc:')[1]) : this.VARS.country);
            cobj['geo_cn'] = (cookieVal.indexOf('__geo_cn:') >= 0 ? (cookieVal.split('__geo_cn:')[1]) : this.VARS.country_name);
            cobj['geo_rn'] = (cookieVal.indexOf('__geo_rn:') >= 0 ? (cookieVal.split('__geo_rn:')[1]) : this.VARS.region_name);
            cobj['geo_s'] = (cookieVal.indexOf('__geo_s:') >= 0 ? (cookieVal.split('__geo_s:')[1]) : this.VARS.state);
            cobj['geo_c'] = (cookieVal.indexOf('__geo_c:') >= 0 ? (cookieVal.split('__geo_c:')[1]) : this.VARS.city);
            cobj['geo_z'] = (cookieVal.indexOf('__geo_z:') >= 0 ? (cookieVal.split('__geo_z:')[1]) : this.VARS.zipcode);
            cobj['geo_lat'] = (cookieVal.indexOf('__geo_lat:') >= 0 ? parseInt(cookieVal.split('__geo_lat:')[1]) : this.VARS.latitude);
            cobj['geo_lon'] = (cookieVal.indexOf('__geo_lon:') >= 0 ? parseInt(cookieVal.split('__geo_lon:')[1]) : this.VARS.longitude);
            cobj['geo_mc'] = (cookieVal.indexOf('__geo_mc:') >= 0 ? (cookieVal.split('__geo_mc:')[1]) : this.VARS.metro_code);
            cobj['geo_tz'] = (cookieVal.indexOf('__geo_tz:') >= 0 ? (cookieVal.split('__geo_tz:')[1]) : this.VARS.time_zone);
            cobj['geo_ac'] = (cookieVal.indexOf('__geo_ac:') >= 0 ? (cookieVal.split('__geo_ac:')[1]) : this.VARS.area_code);

            cobj['ppts'] = (cookieVal.indexOf('__ppts:') >= 0 ? parseInt(cookieVal.split('__ppts:')[1]) : timestamp);
            cobj['pvcnt'] = (cookieVal.indexOf('__pvcnt:') >= 0 ? parseInt(cookieVal.split('__pvcnt:')[1]) : this.VARS.page_visits);
            cobj['ss'] = (cookieVal.indexOf('__ss:') >= 0 ? parseInt(cookieVal.split('__ss:')[1]) : this.SessionStart);

            if (cobj['rurl'].length > 350) {
                cobj['rurl'] = cobj['rurl'].substr(0, 350);
            }

            if (cobj['lurl'].length > 350) {
                cobj['lurl'] = cobj['lurl'].substr(0, 350);
            }

            cobj['purl'] = [];
            if (cookieVal.indexOf('__purl:') >= 0) {
                var purls = cookieVal.split('__purl:');
                if (purls.length > 2) {
                    var purl_len_tot = 0;
                    for (var i = 1; i < purls.length - 1; i++) {
                        if (purls[i].length > 0 && (purls[i].length + purl_len_tot) < 50000) {
                            cobj['purl'].push(purls[i]);
                            purl_len_tot += purls[i].length;
                        }
                    }
                }
            }

            //this.logger(cobj, true);

            //cookieVal = JSON.stringify(cobj);

            //if (JSON.stringify(cobj).length > maxCookieLength && cobj['purl'].length > 10) {
            //    cobj['purl'].splice(2, 1);
            //    //cookieVal = JSON.stringify(cobj);
            //}

            DIGIOH_STORAGE.data[cookieName] = cobj;
            DIGIOH_STORAGE.set();
        } else {
            var cobj = {};

            if (typeof cookieVal === 'object' && cookieVal !== null) {
                cobj = cookieVal;
            }
            else if (typeof cookieVal === 'string' && cookieVal.length > 0 && cookieVal.indexOf('{') >= 0 && cookieVal.indexOf('{') <= 2) {
                cobj = JSON.parse(cookieVal);
            }

            //Calculate Previous Pageview Timestamp
            this.PreviousPageviewTs = 0;

            if (cobj.hasOwnProperty('ppts')) {
                this.PreviousPageviewTs = cobj['ppts'];
            }

            cobj['ppts'] = timestamp;

            if (this.PreviousPageviewTs == 0 && cobj.hasOwnProperty('lts')) {
                this.PreviousPageviewTs = cobj['lts'];
            }

            //Calculate Page Visits
            this.VARS.page_visits = 0;

            if (cobj.hasOwnProperty('pvcnt')) {
                this.VARS.page_visits = cobj['pvcnt'] + 1;
                cobj['pvcnt'] = cobj['pvcnt'] + 1;
            } else {
                this.VARS.page_visits = 1;
                cobj['pvcnt'] = 1;
            }

            //Calculate Session
            this.IsNewSession = false;

            if (timestamp - this.PreviousPageviewTs > this.SessionLengthTicks) {
                this.SessionStart = timestamp;
                this.IsNewSession = true;
            }
            else if (cobj.hasOwnProperty('ss')) {
                this.SessionStart = cobj['ss'];
                this.IsNewSession = false;
            }

            if (this.SessionStart == 0) {
                this.SessionStart = timestamp;
                this.IsNewSession = true;
            }

            if (this.IsNewSession) {
                cobj['ss'] = this.SessionStart;
                //this.logger("New Session: " + new Date(this.SessionStart).toLocaleString());
            }
            else {
                //this.logger("Existing Session: " + new Date(this.SessionStart).toLocaleString());
            }

            //Write Cookie
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('prot')) cobj['prot'] = domain_protocol;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('dom')) cobj['dom'] = domain_base;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('rurl')) cobj['rurl'] = ((referring_url.length > 350) ? referring_url.substr(0, 350) : referring_url);
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('lurl')) cobj['lurl'] = ((domain_ending.length > 350) ? domain_ending.substr(0, 350) : domain_ending);
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('lts')) cobj['lts'] = timestamp;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('dev')) cobj['dev'] = this.VARS.device;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('os')) cobj['os'] = this.VARS.operating_system;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('bt')) cobj['bt'] = this.VARS.browser_type;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('bv')) cobj['bv'] = this.VARS.browser_version;

            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('ip')) cobj['ip'] = this.VARS.ip_address;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_co')) cobj['geo_co'] = this.VARS.continent;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_cc')) cobj['geo_cc'] = this.VARS.country;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_cn')) cobj['geo_cn'] = this.VARS.country_name;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_rn')) cobj['geo_rn'] = this.VARS.region_name;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_s')) cobj['geo_s'] = this.VARS.state;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_c')) cobj['geo_c'] = this.VARS.city;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_z')) cobj['geo_z'] = this.VARS.zipcode;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_lat')) cobj['geo_lat'] = this.VARS.latitude;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_lon')) cobj['geo_lon'] = this.VARS.longitude;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_mc')) cobj['geo_mc'] = this.VARS.metro_code;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_tz')) cobj['geo_tz'] = this.VARS.time_zone;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_ac')) cobj['geo_ac'] = this.VARS.area_code;

            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('ppts')) cobj['ppts'] = timestamp;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('pvcnt')) cobj['pvcnt'] = this.VARS.page_visits;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('ss')) cobj['ss'] = this.SessionStart;
            if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('purl')) cobj['purl'] = [];

            if (!this.OverwriteCurrentCookie && domain_ending.length > 0) {
                if (!cobj.hasOwnProperty('purl') || cobj['purl'].length === 0) {
                    cobj['purl'] = [domain_ending];
                }
                else {
                    var purls = cobj['purl'].join('|');
                    if (domain_ending.length > 0 && purls.indexOf(domain_ending) === -1 && (purls.length + domain_ending.length) < 50000) {
                        cobj['purl'].push(domain_ending);
                    }
                }
            }

            //this.logger(cobj, true);

            //cookieVal = JSON.stringify(cobj);

            //if (JSON.stringify(cobj).length > maxCookieLength && cobj['purl'].length > 10) {
            //    cobj['purl'].splice(2, 1);
            //    //cookieVal = JSON.stringify(cobj);
            //}

            
            if (typeof DIGIOH_BUGSNAG !== 'undefined' && DIGIOH_BUGSNAG !== null) {
                var actualLenth = JSON.stringify(cobj).length;
                if (actualLenth > maxCookieLength) {
                    DIGIOH_BUGSNAG.notify(this.VARS.VendorGuid + "_LocalStorage_" + maxCookieLength,
                        this.VARS.VendorGuid + " LocalStorage length greater than " + maxCookieLength + " (" + actualLenth + ")");
                }
            }

            DIGIOH_STORAGE.data[cookieName] = cobj;
            DIGIOH_STORAGE.set();
        }

        //DIGIOH_COOKIE.set(cookieName, cookieVal);

        this.RanSetCurrent = true;
    }
    catch (error) {
        this.logError(error, "setCurrent");
    }
};

DIGIOH_ANALYTICS.prototype.getCurrent = function () {
    try {
        var cookieName = "__bxcurr";
        //var cookieVal = DIGIOH_COOKIE.get(cookieName);
        //if (cookieVal === null) {
        //    cookieVal = '';
        //}

        var cookieVal = DIGIOH_STORAGE.data[cookieName];

        if (cookieVal) {
            var cobj = {};

            if (typeof cookieVal === 'string' && cookieVal.indexOf("{") >= 0 && cookieVal.indexOf("{") <= 2) {
                cobj = JSON.parse(cookieVal);
            } else if (typeof cookieVal === 'object') {
                cobj = cookieVal;
            }

            if (cobj.hasOwnProperty('rurl')) {
                var refUrl = cobj['rurl'];
                if (refUrl.length > 0 && refUrl.indexOf("://") !== -1) {
                    this.VARS.referring_website_url = refUrl;

                    var search_engine = this.getSearchEngine(refUrl);
                    this.VARS.search_engine = search_engine;

                    var isAdWords = false;
                    var isSearchEngine = false;

                    if (this.isFacebookUrl(refUrl)) {
                        this.VARS.web_source = "Facebook";
                    } else if (this.isAndroidAppUrl(refUrl)) {
                        this.VARS.web_source = "Android App";
                    } else if (this.isGoogleAdWordsUrl(refUrl, search_engine)) {
                        this.VARS.web_source = "Google AdWords";
                        isAdWords = true;
                    } else if (search_engine !== "") {
                        this.VARS.web_source = "Organic Search";
                        isSearchEngine = true;
                    }
                }
            }

            var domain_protocol = (cobj.hasOwnProperty('prot') && cobj['prot']) ? cobj['prot'] : "https:";
            var domain_base = (cobj.hasOwnProperty('dom') && cobj['dom']) ? cobj['dom'] : DIGIOH_WIN_PARENT.location.host;

            //this.VARS.landing_page
            if (cobj.hasOwnProperty('lurl')) {
                this.VARS.landing_page = domain_protocol + "//" + domain_base + cobj['lurl'];

                //this.VARS.web_source
                if (this.VARS.referring_website_url.length > 0 && this.VARS.web_source != "Google AdWords" && this.VARS.web_source != "Organic Search" && !this.doSubdomainsMatch(this.VARS.referring_website_url, this.VARS.landing_page)) {
                    this.VARS.web_source = "Referring Website";
                }

                //Google utm parameters will be appended to landing page url for Google AdWords, Google Analtyics, and possibly even for email campains or referring websites.
                if (this.VARS.landing_page.length > 0 && this.VARS.landing_page.indexOf('?') !== -1) {
                    var queryString = this.VARS.landing_page.split('?')[1];
                    if (queryString.length > 0 && queryString.indexOf('=') !== -1) {
                        var queryVars = queryString.split('&');
                        for (var i = 0; i < queryVars.length; i++) {
                            var pair = queryVars[i].split('=');
                            var pairKey = decodeURIComponent(pair[0]).toLowerCase();

                            if (pairKey == "utm_source" || pairKey == "utm_campaign_source" || pairKey == "campaign_source") {
                                this.VARS.utm_campaign_source = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                            else if (pairKey == "utm_medium" || pairKey == "utm_campaign_medium" || pairKey == "campaign_medium") {
                                this.VARS.utm_campaign_medium = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                            else if (pairKey == "utm_term" || pairKey == "utm_campaign_term" || pairKey == "campaign_term") {
                                this.VARS.utm_campaign_term = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                            else if (pairKey == "utm_content" || pairKey == "utm_campaign_content" || pairKey == "campaign_content") {
                                this.VARS.utm_campaign_content = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                            else if (pairKey == "utm_campaign" || pairKey == "utm_campaign_name" || pairKey == "campaign_name") {
                                this.VARS.utm_campaign_name = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                        }
                    }
                }
            }

            this.VARS.device = cobj.hasOwnProperty('dev') ? cobj['dev'] : '';
            this.VARS.operating_system = cobj.hasOwnProperty('os') ? cobj['os'] : '';
            this.VARS.browser_type = cobj.hasOwnProperty('bt') ? cobj['bt'] : '';
            this.VARS.browser_version = cobj.hasOwnProperty('bv') ? cobj['bv'] : '';
            this.VARS.date_of_visit = cobj.hasOwnProperty('lts') ? cobj['lts'] : 0;
            this.VARS.ip_address = cobj.hasOwnProperty('ip') ? cobj['ip'] : '';
            this.VARS.landing_page_ip = cobj.hasOwnProperty('ip') ? cobj['ip'] : '';
            this.VARS.continent = cobj.hasOwnProperty('geo_co') ? cobj['geo_co'] : '';
            this.VARS.country = cobj.hasOwnProperty('geo_cc') ? cobj['geo_cc'] : '';
            this.VARS.country_name = cobj.hasOwnProperty('geo_cn') ? cobj['geo_cn'] : '';
            this.VARS.region_name = cobj.hasOwnProperty('geo_rn') ? cobj['geo_rn'] : '';
            this.VARS.state = cobj.hasOwnProperty('geo_s') ? cobj['geo_s'] : '';
            this.VARS.city = cobj.hasOwnProperty('geo_c') ? cobj['geo_c'] : '';
            this.VARS.zipcode = cobj.hasOwnProperty('geo_z') ? cobj['geo_z'] : '';
            this.VARS.latitude = cobj.hasOwnProperty('geo_lat') ? cobj['geo_lat'] : 0;
            this.VARS.longitude = cobj.hasOwnProperty('geo_lon') ? cobj['geo_lon'] : 0;
            this.VARS.metro_code = cobj.hasOwnProperty('geo_mc') ? cobj['geo_mc'] : '';
            this.VARS.time_zone = cobj.hasOwnProperty('geo_tz') ? cobj['geo_tz'] : '';
            this.VARS.area_code = cobj.hasOwnProperty('geo_ac') ? cobj['geo_ac'] : '';


            //this.VARS.PagesNavigated
            if (cobj.hasOwnProperty('purl') && cobj['purl'].length > 0) {
                var pvResultArray = new Array();
                var pvCurr = '';

                if (this.VARS.landing_page.length > 0) {
                    this.VARS.pages_navigated = this.VARS.landing_page + "|";
                    pvResultArray.push(this.VARS.landing_page);
                }

                for (var i = 0; i < cobj['purl'].length; i++) {
                    if (cobj['purl'][i].length > 0) {
                        pvCurr = domain_protocol + "//" + domain_base + cobj['purl'][i];
                        pvResultArray.push(pvCurr);
                        this.VARS.pages_navigated += pvCurr + " | ";
                        //this.logger(pvCurr);
                    }
                }
                if (this.VARS.pages_navigated.indexOf("|") >= 0) {
                    this.VARS.pages_navigated = this.VARS.pages_navigated.substring(0, this.VARS.pages_navigated.length - 1);
                }
                this.VARS.PagesNavigated = pvResultArray;
            } else if (this.VARS.landing_page.length > 0) {
                this.VARS.pages_navigated = this.VARS.landing_page;
                this.VARS.PagesNavigated = new Array();
                this.VARS.PagesNavigated.push(this.VARS.landing_page);
                //this.logger(this.VARS.pages_navigated);
            }

            if (this.VARS.date_of_visit > 0) {
                //var dt = new Date(this.VARS.date_of_visit);
                //this.VARS.date_of_visit = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, 0, 0, 0);
                this.VARS.date_of_visit = new Date(this.VARS.date_of_visit);
            } else {
                //var dt = new Date();
                //this.VARS.date_of_visit = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, 0, 0, 0);
                this.VARS.date_of_visit = new Date();
            }
        }
    }
    catch (error) {
        this.logError(error, "getCurrent");
    }

    return false;
};

DIGIOH_ANALYTICS.prototype.getCurrentEncoded = function () {
    try {
        return DIGIOH_COOKIE.getEncoded("__bxcurr");
    }
    catch (error) {
        this.logError(error, "getCurrentEncoded");
    }
};


DIGIOH_ANALYTICS.prototype.setPrevious = function () {
    try {
        var cookieName = "__bxprev";
        //var cookieVal = DIGIOH_COOKIE.get(cookieName);
        //if (cookieVal === null) {
        //    cookieVal = '';
        //}
        //DIGIOH_COOKIE.eraseWithoutDomain('__bxprev');

        var cookieVal = DIGIOH_STORAGE.data[cookieName];

        var timestamp = new Date().getTime();

        if (cookieVal && ((typeof cookieVal === 'string' && cookieVal.length > 0) || (typeof cookieVal === 'object' && cookieVal.hasOwnProperty('days')))) {
            this.IsNewVisitor = false;

            if (!this.VARS.IsPreview) {
                var cobj = {};

                if (typeof cookieVal === 'object') {
                    cobj = cookieVal;
                }
                else if (typeof cookieVal === 'string' && cookieVal.indexOf('{') >= 0 && cookieVal.indexOf('{') <= 2) {
                    cobj = JSON.parse(cookieVal);
                }

                if (cobj && cobj.hasOwnProperty('days')) {
                    var allDays = cobj['days'];

                    var prev = new Date(allDays[allDays.length - 1]);
                    prev = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate(), 0, 0, 0, 0);

                    var curr = new Date(timestamp);
                    curr = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(), 0, 0, 0, 0);

                    if (curr.getTime() > prev.getTime()) {
                        //MaxLength adjustment, commented out for now
                        //if (cookieVal.length > 1000) {
                        //    allDays.splice(0, 1);
                        //}

                        allDays.push(timestamp);

                        cobj['days'] = allDays;

                        //cookieVal = JSON.stringify(cobj);
                        //DIGIOH_COOKIE.set(cookieName, cookieVal);
                        DIGIOH_STORAGE.data[cookieName] = cobj;
                        DIGIOH_STORAGE.set();
                    }
                }
                else if (typeof cookieVal === 'string' && cookieVal.length > 0 && cookieVal.indexOf('|') >= 0) {
                    var allDays = cookieVal.split("|");

                    var prev = new Date(parseInt(allDays[allDays.length - 1]));
                    prev = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate(), 0, 0, 0, 0);

                    var curr = new Date(timestamp);
                    curr = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(), 0, 0, 0, 0);

                    if (curr.getTime() > prev.getTime()) {
                        //MaxLength adjustment, commented out for now
                        //if (cookieVal.length > 1000) {
                        //    allDays.splice(0, 1);
                        //}

                        allDays.push(timestamp + '');

                        var cobj = {};
                        cobj['days'] = [];

                        for (var i = 0; i < allDays.length; i++) {
                            cobj['days'].push(parseInt(allDays[i]));
                        }

                        //cookieVal = JSON.stringify(cobj);
                        //DIGIOH_COOKIE.set(cookieName, cookieVal);
                        DIGIOH_STORAGE.data[cookieName] = cobj;
                        DIGIOH_STORAGE.set();
                    }
                }
            }
        }
        else {
            var cobj = {};
            cobj['days'] = [timestamp];

            //cookieVal = JSON.stringify(cobj);
            //DIGIOH_COOKIE.set(cookieName, cookieVal);
            DIGIOH_STORAGE.data[cookieName] = cobj;
            DIGIOH_STORAGE.set();
        }
    }
    catch (error) {
        this.logError(error, "setPrevious");
    }
};

DIGIOH_ANALYTICS.prototype.getPrevious = function () {
    try {
        var cookieName = "__bxprev";
        //var cookieVal = DIGIOH_COOKIE.get(cookieName);
        //if (cookieVal === null) {
        //    cookieVal = '';
        //}

        var cookieVal = DIGIOH_STORAGE.data[cookieName];

        if (cookieVal) {
            var cobj = {};

            if (typeof cookieVal === 'object') {
                cobj = cookieVal;
            }
            else if (typeof cookieVal === 'string' && cookieVal.length > 0 && cookieVal.indexOf('{') >= 0 && cookieVal.indexOf('{') <= 2) {
                cobj = JSON.parse(cookieVal);
            }

            if (cobj && cobj.hasOwnProperty('days')) {
                var timestamp_array = cobj['days'];
                this.VARS.past_visits = timestamp_array.length - 1;
                for (var i = 1; i < timestamp_array.length; i++) {
                    this.VARS.PastVisitsText += this.formatDate(new Date(timestamp_array[i]));
                    if (i < timestamp_array.length - 1) {
                        this.VARS.PastVisitsText += ", ";
                    }
                }
            } else {
                this.VARS.past_visits = 0;
                this.VARS.PastVisitsText = this.formatDate(new Date().getTime());
            }
        } else {
            this.VARS.past_visits = 0;
            this.VARS.PastVisitsText = this.formatDate(new Date().getTime());
        }
    }
    catch (error) {
        this.logError(error, "getPrevious");
    }
};

DIGIOH_ANALYTICS.prototype.getPreviousEncoded = function () {
    try {
        return DIGIOH_COOKIE.getEncoded("__bxprev");
    }
    catch (error) {
        this.logError(error, "getPreviousEncoded");
    }
};

DIGIOH_ANALYTICS.prototype.setDevice = function () {
    try {
        var headerValue = navigator.userAgent || navigator.vendor || window.opera;

        var mobileDevice = "";
        var isMobileDevice = false;
        if (/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(headerValue) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(headerValue.substr(0, 4))) {
            isMobileDevice = true;
        }

        if (isMobileDevice) {
            if (/ipad/i.test(headerValue)) mobileDevice = "iPad";
            else if (/ipod/i.test(headerValue)) mobileDevice = "iPod";
            else if (/iphone/i.test(headerValue)) mobileDevice = "iPhone";
            else if (/android/i.test(headerValue)) mobileDevice = "Android";
            else if (/kindle/i.test(headerValue)) mobileDevice = "Kindle";
            else if (/blackberry|symbian/i.test(headerValue)) mobileDevice = "BlackBerry";
            else if (/windows (ce|phone)|iemobile/i.test(headerValue)) mobileDevice = "Windows Mobile";

            this.VARS.device = "Phone/Tablet";
        } else {
            this.VARS.device = "Desktop/Laptop";
        }

        var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "unknown"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "unknown"; this.OS = this.searchString(this.dataOS) || "unknown" }, searchString: function (data) { for (var i = 0; i < data.length; i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) !== -1) return data[i].identity } else if (dataProp) return data[i].identity } }, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index + this.versionSearchString.length + 1)) }, dataBrowser: [{ string: navigator.userAgent, subString: "Chrome", identity: "Chrome" }, { string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" }, { string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" }, { prop: window.opera, identity: "Opera", versionSearch: "Version" }, { string: navigator.vendor, subString: "iCab", identity: "iCab" }, { string: navigator.vendor, subString: "KDE", identity: "Konqueror" }, { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" }, { string: navigator.vendor, subString: "Camino", identity: "Camino" }, { string: navigator.userAgent, subString: "Netscape", identity: "Netscape" }, { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" }, { string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" }, { string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }], dataOS: [{ string: navigator.platform, subString: "Win", identity: "Windows" }, { string: navigator.platform, subString: "Mac", identity: "Mac" }, { string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod" }, { string: navigator.platform, subString: "Linux", identity: "Linux" }] };
        BrowserDetect.init();

        if (BrowserDetect.OS && BrowserDetect.OS.length > 0 && BrowserDetect.OS != "unknown") {
            if (BrowserDetect.OS == "Mac") {
                this.VARS.operating_system = "Apple";
            } else if (BrowserDetect.OS.indexOf("iPhone") > -1) {
                this.VARS.operating_system = "Apple";
                this.VARS.device = "Phone/Tablet";
            } else {
                this.VARS.operating_system = BrowserDetect.OS;
            }
        } else {
            this.VARS.operating_system = "";
        }

        if (mobileDevice != "") {
            this.VARS.device = "Phone/Tablet";

            if (mobileDevice == "iPad" || mobileDevice == "iPod" || mobileDevice == "iPhone") {
                this.VARS.operating_system = "Apple";
                this.VARS.device_apple = mobileDevice;
            } else if (mobileDevice == "Android") {
                this.VARS.operating_system = "Android";
            } else if (mobileDevice == "Windows Mobile") {
                this.VARS.operating_system = "Windows";
            } else if (mobileDevice == "Kindle") {
                this.VARS.operating_system = "Kindle";
            } else if (mobileDevice == "BlackBerry") {
                this.VARS.operating_system = "BlackBerry";
            }
        }

        if (BrowserDetect.browser && BrowserDetect.browser.length > 0 && BrowserDetect.browser != "unknown") {
            if (BrowserDetect.browser == "Explorer") {
                this.VARS.browser_type = "Internet Explorer";
            } else if (BrowserDetect.browser == "Mozilla" && this.VARS.operating_system == "Windows") {
                this.VARS.browser_type = "Internet Explorer";
            } else {
                this.VARS.browser_type = BrowserDetect.browser;
            }

            if (BrowserDetect.version && BrowserDetect.version != "unknown") {
                this.VARS.browser_version = BrowserDetect.version;
            } else {
                this.VARS.browser_version = 0;
            }
        } else {
            this.VARS.browser_type = "";
        }

        //this.logger(this.VARS.device + ", " + this.VARS.operating_system + ", " + this.VARS.browser_type + ", " + this.VARS.browser_version);
    }
    catch (error) {
        this.logError(error, "setDevice");
    }
};

DIGIOH_ANALYTICS.prototype.logger = function (msg, isJson) {
    try {
        if (!this.ShowErrors)
            return;

        if (typeof console !== "undefined") {
            if (isJson) {
                try {
                    console.log(JSON.stringify(msg, undefined, 2));
                } catch (e1) {
                    if (SHOW_ERRORS) this.logError(e1, "logger");
                }
            } else {
                console.log(msg);
            }
        }
    }
    catch (e2) {
        //if (SHOW_ERRORS) this.logError(e2, "logger");
    }
};

DIGIOH_ANALYTICS.prototype.logError = function (e, function_name) {
    var fn = 'analytics.js';
    if (this.VARS.IsPreview) fn = 'analytics.js';

    if (typeof DIGIOH_BUGSNAG !== 'undefined' && DIGIOH_BUGSNAG !== null) {
        DIGIOH_BUGSNAG.notifyException(e, "[DIGIOH_EXCEPTION_JS] " + fn + " - (analytics) - " + function_name + " - (" + this.BaseDomain + ")");
    }

    this.logger("ERROR: in " + fn + " - (analytics) - " + function_name + "()");
    this.logger(e.message);
};














(function (window, document, iframewin) {
    var VENDOR_GUID = DIGIOH_VENDOR_GUID;
    var IS_PREVIEW = (typeof DIGIOH_IS_PREVIEW !== "undefined" && DIGIOH_IS_PREVIEW === true);
    var IS_DEV = (typeof DIGIOH_IS_DEV !== "undefined" && DIGIOH_IS_DEV == true);
    var PROTOCOL = ('https:' == document.location.protocol ? 'https://' : 'http://');

    var __CDNDomainWithProtocol = PROTOCOL + DIGIOH_CDN_DOMAIN;
    var __CDNStaticFilesPath = PROTOCOL + DIGIOH_CDN_DOMAIN + '/static/';
    var __CDNVendorFilesPath = PROTOCOL + DIGIOH_CDN_DOMAIN + '/vendor/';

    var CLOSE_BUTTON_URL = PROTOCOL + "cdn.jsdelivr.net/fancybox/2.1.5/fancybox_sprite.png";

    var BASE_URL = PROTOCOL + document.location.href.split('/')[2];
    if (BASE_URL.indexOf('?') > 0) BASE_URL = BASE_URL.split('?')[0];
    if (BASE_URL.indexOf('#') > 0) BASE_URL = BASE_URL.split('#')[0];

    var SHOW_ERRORS = (typeof console !== "undefined" && typeof DIGIOH_USE_CONSOLE !== "undefined" && DIGIOH_USE_CONSOLE) || IS_DEV;
    var LIGHTBOX_GUID = '';
    var CLIENT_GUID = '';
    var KEEN_CLIENT = '';
    var WIDGET_DIV = '';
    var CURRENT_IFRAME_SRC = '';
    var SIDEBAR_ELEMENT_ID = '';
    var CHILD_READY = {};
    var GEO_IP = {};
    var GEO_LOADED = false;
    var GEO_LOADING = false;
    var CLICK_SELECTORS = new Array();
    var HOVER_SELECTORS = new Array();
    var EXISTS_SELECTORS = new Array();
    var SCROLL_BOXES_ARR = new Array();
    var EXIT_BOXES_ARR = new Array();
    var TIME_BOXES_ARR = new Array();
    var LOADED_LIGHTBOXES = ['temp1', 'temp2'];

    var KEEN_SCHEMA = {};
    var LIGHTBOX_OPEN_TIME = 0;

    var CURR_SCROLL_TOP = 0;
    var TEASER_LIGHTBOX_GUIDS = {};
    var FOCUSED_SIDEBAR_BANNER_GUIDS = {};
    var PREVENT_SIDEBAR_CLOSE_GUIDS = {};
    var ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS = {};
    var ELIGIBLE_SIDEBAR_CLOSE_SCROLL_SIDS = {};
    var IS_REDIRECTING_PARENT = false;
    var IS_PREVIEW_EVENT = false;
    var CURR_TIME = 0;

    var WAS_IMPRESSION_REGISTERED = {};
    var WAS_REDIRECT_REGISTERED = {};
    var WAS_SUBMIT_REGISTERED = {};
    var WAS_DOWNLOAD_REGISTERED = {};
    var WAS_CUSTOM_EVENT_REGISTERED = {};

    var LIGHTBOX_TO_VARIATION_MAP = {};
    var PRELOADED_LIGHTBOXES = [];
    var PRELOADED_LIGHTBOXES_LOADED = [];

    var EFFECTS = DIGIOH_LIGHTBOX_EFFECTS;

    var CONDITION_SELECTOR_BOXES_MAP = {};
    var SIDEBAR_CLOSE_MAP = {};
    var BANNER_CLOSE_MAP = {};

    var LOADED_BOX_DOM_ID_MAP = {};
    var MOBILE_SCROLL_TOP_MAP = {};

    var COOKIES_DISABLED = false;

    var DIGIOH_IDENTITY_CHILD_IFRAME = null;

    var jqWin;
    var jqDoc;
    var body;

    var TS_EVAL_PREV = {};
    var SS_EVAL_PREV = {};

    var IDLE_PERIOD = 5; //seconds

    var IDLE_INTERVAL = 0;
    var TOTAL_INTERVAL = 0;
    var IDLE_TIME = 0;
    var TOTAL_TIME = 0;

    var ERROR_LOG_TEMP_ARR = [];

    var AB_BOXES_TAKE_MAP = {};
    var AB_BOXES_SKIP_MAP = {};

    var BLIP_ARR = [];
    var BLIP_MATCHED = -1;

    var FirebaseRef = null;
    var IsFirebaseRefSet = false;
    var FirebaseTimeOffset = 0;
    var IsFirebaseTimeSet = false;
    var IsFirebaseLoaded = false;

    var FANCY_REPOSITION_LOCKED = {};
    var CURRENT_PAGE_DIMS_RESPONSIVE = {};
    var CURRENT_PAGE_DIMS = {};
    var CURRENT_PAGE = {};

    var ANALYTICS_JSONP_RESPONSE = {};
    var INIT_DEPENDENT_SCRIPTS_HAS_RUN = false;

    var isEmbedInlineLightboxConditionsFormsFinished = false;
    var DIGIOH_LIGHTBOX_INLINE_DISPLAYED = [];

    if (typeof DIGIOH_LIGHTBOX_NAMES === 'undefined') {
        DIGIOH_LIGHTBOX_NAMES = {};
    }

    if (typeof DIGIOH_LIGHTBOX_IDS === 'undefined') {
        DIGIOH_LIGHTBOX_IDS = {};
    }

    if (typeof DIGIOH_LIGHTBOX_TEASER_PRELOAD_ARR === 'undefined') {
        DIGIOH_LIGHTBOX_TEASER_PRELOAD_ARR = [];
    }

    if (typeof DIGIOH_LIGHTBOX_TEASER_FOLLOW_ME_ARR === 'undefined') {
        DIGIOH_LIGHTBOX_TEASER_FOLLOW_ME_ARR = [];
    }

    if (typeof DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR === 'undefined') {
        DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR = [];
    }

    if (typeof DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR === 'undefined') {
        DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR = [];
    }

    if (typeof DIGIOH_LIGHTBOX_INLINE_DEPENDENT_ARR === 'undefined') {
        DIGIOH_LIGHTBOX_INLINE_DEPENDENT_ARR = [];
    }

    function hideEmbedDivContainer() {
        var wd = document.getElementById(VENDOR_GUID);
        if (wd !== null) wd.style.display = 'none';
    }

    function appendFbDigiohCss() {
        var h = document.head || document.getElementsByTagName('head')[0];
        var l = document.createElement('link');
        l.type = 'text/css';
        l.rel = 'stylesheet';
        l.media = 'screen';
        l.href = __CDNStaticFilesPath + 'fb_digioh.2.1.5.css' + '?cb=' + DIGIOH_CACHE_VERSION;
        h.appendChild(l);

        //var css = "";
        //css += "#fb_digioh-loading {display: none !important;}";
        //css += " ";
        //css += ".fb_digioh-skin {background-color: transparent; box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;}";
        //var s = document.createElement('style');
        //s.type = 'text/css';
        //if (s.styleSheet) s.styleSheet.cssText = css;
        //else s.appendChild(document.createTextNode(css));
        //h.appendChild(s);
    }

    function preloadEffectsImages() {
        if (typeof DIGIOH_EFFECTS_IMAGE_CACHE_ARR !== "undefined" && DIGIOH_EFFECTS_IMAGE_CACHE_ARR.length > 0) {
            var preloadedImages = new Array();
            for (var i = 0; i < DIGIOH_EFFECTS_IMAGE_CACHE_ARR.length; i++) {
                preloadedImages[i] = new Image();
                preloadedImages[i].src = PROTOCOL + "s3.lightboxcdn.com/vendors/" + VENDOR_GUID + "/uploads/" + DIGIOH_EFFECTS_IMAGE_CACHE_ARR[i];
                //var src = PROTOCOL + "s3.lightboxcdn.com/vendors/" + VENDOR_GUID + "/uploads/" + DIGIOH_EFFECTS_IMAGE_CACHE_ARR[i];
                //JQUERY_DIGIOH('body').append("<img src='" + src + "' style='margin-left: -9999px;' />");
                //JQUERY_DIGIOH('body').append("<div style='background: url(" + src + ") no-repeat -9999px -9999px;'></div>");
            }
            var preloadedCloseButton = new Image();
            preloadedCloseButton.src = CLOSE_BUTTON_URL; //PROTOCOL + "cdn.jsdelivr.net/fancybox/2.1.5/fancybox_sprite.png";
        }
    }

    function preloadSettingsImages() {
        if (typeof DIGIOH_SETTINGS_IMAGE_CACHE_ARR !== "undefined" && DIGIOH_SETTINGS_IMAGE_CACHE_ARR.length > 0) {
            var preloadedImages = new Array();
            for (var i = 0; i < DIGIOH_SETTINGS_IMAGE_CACHE_ARR.length; i++) {
                preloadedImages[i] = new Image();
                preloadedImages[i].src = PROTOCOL + "s3.lightboxcdn.com/vendors/" + VENDOR_GUID + "/uploads/" + DIGIOH_SETTINGS_IMAGE_CACHE_ARR[i];
            }
        }
    }

    function generateGuid() {
        //var d = new Date().getTime();
        //var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        //    var r = (d + Math.random() * 16) % 16 | 0;
        //    d = Math.floor(d / 16);
        //    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        //});
        //return uuid;

        var ts = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return uuid + '-' + ts;
    }

    function loadClientGuid() {
        try {
            if (!DIGIOH_STORAGE.data.hasOwnProperty("__bxcid") || typeof DIGIOH_STORAGE.data["__bxcid"] !== 'string' || DIGIOH_STORAGE.data["__bxcid"].length < 7) {
                DIGIOH_STORAGE.data["__bxcid"] = generateGuid();
            }
            CLIENT_GUID = DIGIOH_STORAGE.data["__bxcid"];
        }
        catch (e) {
            logError(e, "loadClientGuid");
        }
    }

    var loadAllClientSideDataFromCookie = function (foundData) {
        try {
            logger('loadAllClientSideDataFromCookie(' + foundData + ')');

            var cookieVal = '';

            if (!foundData) {
                //try loading from cookie v2
                cookieVal = DIGIOH_COOKIE.get(DIGIOH_VENDOR_GUID);
                if (cookieVal !== null && cookieVal.length > 0 && cookieVal.indexOf("{") >= 0 && cookieVal.indexOf("{") <= 2) {
                    var json = JSON.parse(cookieVal);
                    if (typeof json === 'object' && json !== null && json.hasOwnProperty('__bxcurr')) {
                        DIGIOH_STORAGE.data = json;
                        DIGIOH_STORAGE.set();

                        DIGIOH_COOKIE.erase("__bxcurr");
                        DIGIOH_COOKIE.erase("__bxprev");
                        DIGIOH_COOKIE.erase("__bxevents");
                        DIGIOH_COOKIE.erase("__bxcid");
                        DIGIOH_COOKIE.erase("__bxtest");
                        DIGIOH_COOKIE.erase('__lbxcurr');
                        DIGIOH_COOKIE.erase('__lbxprev');
                        DIGIOH_COOKIE.erase('__lbxevents');
                        DIGIOH_COOKIE.erase('__lbxcid');

                        foundData = true;
                    }
                }
            }

            if (!foundData) {
                //try loading from cookie v1
                DIGIOH_STORAGE.data = {};

                cookieVal = DIGIOH_COOKIE.get("__bxcurr");
                if (cookieVal !== null && cookieVal.length > 0 && cookieVal.indexOf("{") >= 0 && cookieVal.indexOf("{") <= 2) {
                    DIGIOH_STORAGE.data["__bxcurr"] = JSON.parse(cookieVal);
                } else if (cookieVal !== null && cookieVal) {
                    DIGIOH_STORAGE.data["__bxcurr"] = cookieVal;
                } else {
                    DIGIOH_STORAGE.data["__bxcurr"] = {};
                }

                cookieVal = DIGIOH_COOKIE.get("__bxprev");
                if (cookieVal !== null && cookieVal.length > 0 && cookieVal.indexOf("{") >= 0 && cookieVal.indexOf("{") <= 2) {
                    DIGIOH_STORAGE.data["__bxprev"] = JSON.parse(cookieVal);
                } else if (cookieVal !== null && cookieVal) {
                    DIGIOH_STORAGE.data["__bxprev"] = cookieVal;
                } else {
                    DIGIOH_STORAGE.data["__bxprev"] = {};
                }

                cookieVal = DIGIOH_COOKIE.get("__bxevents");
                if (cookieVal !== null && cookieVal.length > 0 && cookieVal.indexOf("{") >= 0 && cookieVal.indexOf("{") <= 2) {
                    DIGIOH_STORAGE.data["__bxevents"] = JSON.parse(cookieVal);
                } else if (cookieVal !== null && cookieVal) {
                    DIGIOH_STORAGE.data["__bxevents"] = cookieVal;
                } else {
                    DIGIOH_STORAGE.data["__bxevents"] = {};
                }

                cookieVal = DIGIOH_COOKIE.getEncoded("__bxcid");
                if (cookieVal !== null && cookieVal.length > 0) {
                    DIGIOH_STORAGE.data["__bxcid"] = cookieVal;
                    logger('found existing client_id: ' + cookieVal);
                } else {
                    DIGIOH_STORAGE.data["__bxcid"] = generateGuid();
                    logger('generated new client_id: ' + DIGIOH_STORAGE.data["__bxcid"]);
                }

                DIGIOH_STORAGE.set();

                if (DIGIOH_LOCAL_STORAGE.isWorking) {
                    DIGIOH_COOKIE.erase(DIGIOH_VENDOR_GUID);
                }

                DIGIOH_COOKIE.erase("__bxcurr");
                DIGIOH_COOKIE.erase("__bxprev");
                DIGIOH_COOKIE.erase("__bxevents");
                DIGIOH_COOKIE.erase("__bxcid");
                DIGIOH_COOKIE.erase("__bxtest");
                DIGIOH_COOKIE.erase('__lbxcurr');
                DIGIOH_COOKIE.erase('__lbxprev');
                DIGIOH_COOKIE.erase('__lbxevents');
                DIGIOH_COOKIE.erase('__lbxcid');
            }

            if (!DIGIOH_STORAGE.data.hasOwnProperty("__bxcurr")) {
                DIGIOH_STORAGE.data["__bxcurr"] = {};
            }

            if (!DIGIOH_STORAGE.data.hasOwnProperty("__bxprev")) {
                DIGIOH_STORAGE.data["__bxprev"] = {};
            }

            if (!DIGIOH_STORAGE.data.hasOwnProperty("__bxevents")) {
                DIGIOH_STORAGE.data["__bxevents"] = {};
            }

            if (!DIGIOH_STORAGE.data.hasOwnProperty("__bxcid")) {
                DIGIOH_STORAGE.data["__bxcid"] = generateGuid();
            }

            afterDomLoadedAndStorageLoadedAndPostMessageInit();
        }
        catch (e) {
            logError(e, "loadAllClientSideDataFromCookie");
            afterDomLoadedAndStorageLoadedAndPostMessageInit();
        }
    }

    var loadAllClientSideDataFromLocalStorage = function () {
        try {
            logger('loadAllClientSideDataFromLocalStorage()');

            if (DIGIOH_LOCAL_STORAGE.isWorking) {
                DIGIOH_LOCAL_STORAGE.get(function (val) {
                    var foundData = false;

                    if (typeof val === 'string' && val.length > 7) {
                        var jsonStr = LZString.decompressFromBase64(val);
                        if (jsonStr && jsonStr.indexOf('{') === 0) {
                            logger('Local Storage size ==> compressed / json : ' + val.length + ' / ' + jsonStr.length);
                            var json = JSON.parse(jsonStr);
                            if (typeof json === 'object' && json !== null && json.hasOwnProperty('__bxcurr')) {
                                DIGIOH_STORAGE.data = json;
                                foundData = true;
                                logger(DIGIOH_STORAGE.data);
                            }
                        }
                    }

                    loadAllClientSideDataFromCookie(foundData);
                });
            } else {
                loadAllClientSideDataFromCookie(false);
            }
        }
        catch (e) {
            logError(e, "loadAllClientSideDataFromLocalStorage");
            loadAllClientSideDataFromCookie(false);
        }
    }

    function setIsLocalStorageWorking(cnt) {
        try {
            logger('setIsLocalStorageWorking(' + cnt + ')');

            var testVal = 'abcxyz';

            DIGIOH_LOCAL_STORAGE.setManual('__bxtest', testVal);
            
            DIGIOH_LOCAL_STORAGE.getManual('__bxtest', function (val) {
                DIGIOH_LOCAL_STORAGE.isWorkingFinished = true;

                if (typeof val === 'string' && LZString.decompressFromBase64(val) === testVal) {
                    DIGIOH_LOCAL_STORAGE.isWorking = true;
                } else {
                    DIGIOH_LOCAL_STORAGE.isWorking = false;
                }

                if (!DIGIOH_LOCAL_STORAGE.isWorking && cnt < 5) {
                    logger('setIsLocalStorageWorking failed: cnt=' + cnt + ', val=' + LZString.decompressFromBase64(val) + ', testVal=' + testVal);
                    var newCnt = cnt + 1;
                    setTimeout(setIsLocalStorageWorking, 1000, newCnt);
                } else {
                    logger('setIsLocalStorageWorking(' + cnt + ') ==> succeeded');
                    loadAllClientSideDataFromLocalStorage();
                }
            });
            
        }
        catch (e) {
            logError(e, "setIsLocalStorageWorking");
            DIGIOH_LOCAL_STORAGE.isWorking = false;
            logger('setIsLocalStorageWorking exception: cnt=' + cnt);
            loadAllClientSideDataFromLocalStorage();
        }
    }

    var areCookiesDisabled = function () {
        try {
            if (COOKIES_DISABLED) {
                return true;
            }

            DIGIOH_COOKIE.setDecoded('__bxtest', 'xyz');
            var cv = DIGIOH_COOKIE.getEncoded('__bxtest');
            if (cv != null && cv === 'xyz') {
                COOKIES_DISABLED = false;
                return false;
            } else {
                COOKIES_DISABLED = true;
                return true;
            }
        }
        catch (e) {
            logError(e, "areCookiesDisabled");
            COOKIES_DISABLED = true;
            return true;
        }
    }

    var tryLoadGeoIp = function (is_first_pass, cb) {
        try {
            if (typeof cb === 'undefined' || typeof cb !== 'function' || cb === null) {
                cb = function () { return; };
            }

            if (GEO_LOADED) {
                logger('GeoIP already Loaded');
                cb();
            } else if (GEO_LOADING) {
                logger('GeoIP in the process of Loading...');
                cb();
            } else {
                if (typeof GEO_IP === 'object' && GEO_IP.hasOwnProperty('ip') && GEO_IP.ip.length > 7) {
                    logger('Using GeoIP from Memory (1)');
                    GEO_LOADED = true;

                    if (JQUERY_DIGIOH.inArray(GEO_IP.ip, BLIP_ARR) > -1) {
                        GEO_IP.blip_matched = 1;
                        BLIP_MATCHED = 1;
                    } else {
                        GEO_IP.blip_matched = 0;
                        BLIP_MATCHED = 0;
                    }

                    cb();
                } else {
                    if (!is_first_pass || doConditionsUseGeo()) {
                        if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address == '') {
                            logger('Using GeoIP from Modulus');

                            GEO_LOADING = true;

                            //JQUERY_DIGIOH.ajax({
                            //    url: ((PROTOCOL === 'https://' ? 'https://' : 'http://') + 'lightboxgeoip-57909.onmodulus.net/geoip'),
                            //    cache: false,
                            //    timeout: 3000,
                            //    dataType: "json",
                            //    data: {},
                            //    success: function (result) {
                            //        tryLoadGeoIpSuccess(result, cb);
                            //    },
                            //    error: function (jqXHR, textStatus, errorThrown) {
                            //        tryLoadGeoIpError(jqXHR, cb);
                            //    }
                            //});

                            JQUERY_DIGIOH.jsonp({
                                url: ((PROTOCOL === 'https://' ? 'https://' : 'http://') + 'lightboxgeoipjsonp-88248.onmodulus.net/jsonp_geoip' + "?callback=?"),
                                cache: false,
                                timeout: 10000,
                                error: function (xOptions, textStatus) {
                                    //textStatus: "error" or "timeout"

                                    if (textStatus) {
                                        if (textStatus === "error") {
                                            logErrorText("tryLoadGeoIpJSONP_ERROR", 'tryLoadGeoIpJSONP_ERROR');
                                        } else if (textStatus === "timeout") {
                                            logErrorText("tryLoadGeoIpJSONP_TIMEOUT", 'tryLoadGeoIpJSONP_TIMEOUT');
                                        } else {
                                            logErrorText("tryLoadGeoIpJSONP_ERROR_OTHER_1", 'tryLoadGeoIpJSONP_ERROR_OTHER_1');
                                        }
                                    } else {
                                        logErrorText("tryLoadGeoIpJSONP_ERROR_OTHER_2", 'tryLoadGeoIpJSONP_ERROR_OTHER_2');
                                    }

                                    tryLoadGeoIpError(xOptions, cb);
                                },
                                success: function (json, textStatus, xOptions) {
                                    //textStatus: "success" (always)
                                    if (typeof json === "object") {
                                        if (json.hasOwnProperty('ip') && json.ip) {
                                            logger("tryLoadGeoIp ==> (success) (" + json.ip + ")");
                                        } else if (json.hasOwnProperty('ex_msg') && json.hasOwnProperty('ex_subj') && json.ex_subj) {
                                            logErrorText("tryLoadGeoIpJSONP_SERVER_EX_" + json.ex_subj, json.ex_msg);
                                        } else {
                                            logErrorText("tryLoadGeoIpJSONP_SERVER_EX_OTHER", "tryLoadGeoIpJSONP_SERVER_EX_OTHER");
                                        }
                                    } else {
                                        logErrorText("tryLoadGeoIpJSONP_SUCCESS_MISSING_IP", 'tryLoadGeoIpJSONP_SUCCESS_MISSING_IP');
                                    }

                                    tryLoadGeoIpSuccess(json, cb);
                                },
                                complete: function (xOptions, textStatus) {
                                    //textStatus: "success", "error" or "timeout"
                                    //complete() is always called - after error() or after success()
                                }
                            });

                        } else {
                            logger('Using GeoIP from Memory (2)');
                            GEO_LOADED = true;
                            cb();
                        }
                    } else {
                        logger('Not Using GeoIP on first pass (no conditions are using Geo rules)');
                        cb();
                    }
                }
            }
        } catch (e) {
            logError(e, "tryLoadGeoIp");
            GEO_LOADED = false;
            GEO_IP = {};
            cb();
        }
    }

    function tryLoadGeoIpSuccess(result, cb) {
        try {
            if (typeof result === 'object' && result.hasOwnProperty('ip') && result.ip !== null && result.ip.length > 7) {
                logger('tryLoadGeoIpSuccess');
                logger(result);

                GEO_LOADED = true;
                GEO_IP = {};

                if (result.hasOwnProperty("ip") && result.ip !== null) GEO_IP.ip = result.ip;
                if (result.hasOwnProperty("continentCode") && result.continentCode !== null) GEO_IP.continent_code = result.continentCode;
                if (result.hasOwnProperty("countryCode") && result.countryCode !== null) GEO_IP.country_code = result.countryCode;
                if (result.hasOwnProperty("countryName") && result.countryName !== null) GEO_IP.country_name = result.countryName.replace('+', ' ');
                if (result.hasOwnProperty("regionName") && result.regionName !== null) GEO_IP.region_name = result.regionName.replace('+', ' ');
                if (result.hasOwnProperty("region") && result.region !== null) GEO_IP.region_code = result.region;
                if (result.hasOwnProperty("city") && result.city !== null) GEO_IP.city = result.city.replace('+', ' ');
                if (result.hasOwnProperty("postalCode") && result.postalCode !== null) GEO_IP.zipcode = result.postalCode;
                if (result.hasOwnProperty("latitude") && result.latitude !== null) GEO_IP.latitude = result.latitude;
                if (result.hasOwnProperty("longitude") && result.longitude !== null) GEO_IP.longitude = result.longitude;

                if (result.hasOwnProperty("timezone") && result.timezone !== null) GEO_IP.time_zone = decodeURIComponent(result.timezone);
                if (result.hasOwnProperty("areaCode") && result.areaCode !== null) GEO_IP.area_code = result.areaCode;

                if (result.hasOwnProperty("dmaCode") && result.dmaCode !== null) GEO_IP.metro_code = result.dmaCode;
                else if (result.hasOwnProperty("metroCode") && result.metroCode !== null) GEO_IP.metro_code = result.metroCode;

                GEO_IP.geo_source = 'modulus-node-maxmind';

                if (JQUERY_DIGIOH.inArray(result.ip, BLIP_ARR) > -1) {
                    GEO_IP.blip_matched = 1;
                    BLIP_MATCHED = 1;
                } else {
                    GEO_IP.blip_matched = 0;
                    BLIP_MATCHED = 0;
                }

                DIGIOH_LIGHTBOX_ANALYTICS.setGeoData(GEO_IP);
                setKeenSchemaAfterGeoIp();
                cb();
            } else {
                logger('tryLoadGeoIpSuccess: result object was invalid');
                cb();
            }
        }
        catch (e) {
            logError(e, "tryLoadGeoIpSuccess");
            cb();
        }

        GEO_LOADING = false;
    }

    function tryLoadGeoIpError(jqXHR, cb) {
        try {
            logger('tryLoadGeoIpError');
            logger(jqXHR);
            cb();
        }
        catch (e) {
            logError(e, "tryLoadGeoIpError");
            cb();
        }

        GEO_LOADING = false;
    }

    function setKeenSchemaAfterGeoIpAndDevice() {
        if (typeof KEEN_SCHEMA === 'object' && KEEN_SCHEMA.hasOwnProperty('geoip') && typeof GEO_IP === 'object' && GEO_IP.hasOwnProperty('ip') && GEO_IP.ip.length > 7) {
            KEEN_SCHEMA.geoip = {
                ip_address: DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address,
                continent_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.continent,
                country_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.country,
                country_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.country_name,
                region_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.state,
                region_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.region_name,
                city: DIGIOH_LIGHTBOX_ANALYTICS.VARS.city,
                zipcode: DIGIOH_LIGHTBOX_ANALYTICS.VARS.zipcode,
                metro_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.metro_code,
                time_zone: DIGIOH_LIGHTBOX_ANALYTICS.VARS.time_zone,
                area_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.area_code,
                latitude: DIGIOH_LIGHTBOX_ANALYTICS.VARS.latitude,
                longitude: DIGIOH_LIGHTBOX_ANALYTICS.VARS.longitude,
                geo_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.geo_source,
                blip_matched: BLIP_MATCHED
            };

            KEEN_SCHEMA.device_atlas = {
                primaryHardwareType: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType,
                isApp: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isApp,
                isTablet: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isTablet,
                isMobilePhone: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isMobilePhone,
                model: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.model,
                vendor: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.vendor,
                touchScreen: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.touchScreen,
                osName: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.osName,
                osVersion: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.osVersion,
                browserName: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.browserName,
                browserVersion: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.browserVersion,
                osAndroid: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.osAndroid,
                osiOs: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.osiOs,
                device_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.device_source
            };
        }
    }

    function tryLoadMaxmind() {
        try {
            var frameSrc = __CDNStaticFilesPath + 'maxmind.html#' + encodeURIComponent(document.location.href);
            body.append("<iframe src='" + frameSrc + "' sandbox='allow-same-origin allow-top-navigation allow-scripts' width='1' height='1' frameborder='0' scrolling='no' style='position: absolute; right: -10px; top: -10px;'></iframe>");
        }
        catch (e) {
            logError(e, "tryLoadMaxmind");
        }
    }

    function afterDomLoaded() {
        try {
            JQUERY_DIGIOH(document).ready(function () {
                initPostMessageReceiver();

                //Register a callback before loading the child iframe, so we're ready to receive the postMessage once the child iframe finishes loading
                DIGIOH_LOCAL_STORAGE.callbacks['999999999'] = function (val) {
                    logger('identityChildReady999999999: ' + val);
                    setIsLocalStorageWorking(0);
                };

                //After the child iframe (identity.html) loads, it will postMessage to the above callback, signaling us to continue
                createIdentityIframe();

                //Just in case the child iframe misses the postMessage callback above, use a side check to ensure continuation
                setTimeout(function () {
                    if (!DIGIOH_LOCAL_STORAGE.isWorkingFinished) {
                        logger('Calling setIsLocalStorageWorking using short circuit!!!!');
                        setIsLocalStorageWorking(0);
                    } else {
                        logger('DIGIOH_LOCAL_STORAGE.isWorkingFinished: ' + DIGIOH_LOCAL_STORAGE.isWorkingFinished.toString() + ' (skipping short circuit)');
                    }
                }, 2000);
            });
        }
        catch (e) {
            logError(e, "afterDomLoaded");
        }
    }

    function afterDomLoadedAndStorageLoadedAndPostMessageInit() {
        try {
            logger('afterDomLoadedAndStorageLoadedAndPostMessageInit()');

            //logger('DIGIOH_LOCAL_STORAGE.isWorking: ' + DIGIOH_LOCAL_STORAGE.isWorking);
            //logger(DIGIOH_STORAGE.data);

            loadClientGuid();

            jqWin = JQUERY_DIGIOH(window);
            jqDoc = JQUERY_DIGIOH(document);
            body = JQUERY_DIGIOH('body');

            if (JQUERY_DIGIOH('.digioh-lightbox-container').length) {
                WIDGET_DIV = JQUERY_DIGIOH("div.digioh-lightbox-container:first");
                WIDGET_DIV.hide();
            }

            logger('DIGIOH_USE_BUGSNAG: ' + DIGIOH_USE_BUGSNAG);

            preloadEffectsImages();
            preloadSettingsImages();

            initBugsnag();
            initKeen();

            DIGIOH_LIGHTBOX_ANALYTICS = new DIGIOH_ANALYTICS(JQUERY_DIGIOH, SHOW_ERRORS, VENDOR_GUID, IS_PREVIEW, BASE_URL);
            DIGIOH_LIGHTBOX_ANALYTICS.getGeoAndDeviceDataFromCookie();

            initDigiohVars();

            if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address != '') {
                if (JQUERY_DIGIOH.inArray(DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address, BLIP_ARR) > -1) {
                    BLIP_MATCHED = 1;
                } else {
                    BLIP_MATCHED = 0;
                    //logger("BLIP_ARR:");
                    //logger(JSON.stringify(BLIP_ARR));
                }
            }

            //embedInlineLightboxAlwaysForms();
            //tryLoadGeoIp(true, initDependentScripts);

            pageviewGeoDevice();
        }
        catch (e) {
            logError(e, "afterDomLoadedAndStorageLoadedAndPostMessageInit");
        }
    }




    //https://deviceatlas.com/device-data/explorer/#defined_property_values/19/4751724

    function isPhone() {
        try {
            if (typeof DIGIOH_LIGHTBOX_ANALYTICS === 'object' && DIGIOH_LIGHTBOX_ANALYTICS !== null && DIGIOH_LIGHTBOX_ANALYTICS.hasOwnProperty('VARS') && typeof DIGIOH_LIGHTBOX_ANALYTICS.VARS === 'object' && DIGIOH_LIGHTBOX_ANALYTICS.VARS !== null) {

                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.hasOwnProperty('DeviceAtlas') && typeof DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas === 'object') {
                    if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('isMobilePhone') && DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isMobilePhone !== '') {
                        return DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isMobilePhone;
                    }

                    if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('primaryHardwareType') && DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType !== '') {
                        return (DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType === 'Mobile Phone');
                    }
                }

                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device) {
                    if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device === 'Phone/Tablet') {
                        if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.hasOwnProperty('device_apple') && DIGIOH_LIGHTBOX_ANALYTICS.VARS.device_apple) {
                            if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device_apple.toLowerCase() === 'iphone') {
                                return true;
                            } else {
                                return false;
                            }
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                }
            }
        }
        catch (e) {
            logError(e, "isPhone");
        }

        return '';
    }

    function isTablet() {
        try {
            if (typeof DIGIOH_LIGHTBOX_ANALYTICS === 'object' && DIGIOH_LIGHTBOX_ANALYTICS !== null && DIGIOH_LIGHTBOX_ANALYTICS.hasOwnProperty('VARS') && typeof DIGIOH_LIGHTBOX_ANALYTICS.VARS === 'object' && DIGIOH_LIGHTBOX_ANALYTICS.VARS !== null) {

                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.hasOwnProperty('DeviceAtlas') && typeof DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas === 'object') {
                    if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('isTablet') && DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isTablet !== '') {
                        return DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isTablet;
                    }

                    if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('primaryHardwareType') && DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType !== '') {
                        return (DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType === 'Tablet');
                    }
                }

                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device) {
                    if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device === 'Phone/Tablet') {
                        if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.hasOwnProperty('device_apple') && DIGIOH_LIGHTBOX_ANALYTICS.VARS.device_apple) {
                            if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device_apple.toLowerCase() === 'ipad') {
                                return true;
                            } else {
                                return false;
                            }
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                }
            }
        }
        catch (e) {
            logError(e, "isTablet");
        }

        return '';
    }

    function isMobile() {
        try {
            if (typeof DIGIOH_LIGHTBOX_ANALYTICS === 'object' && DIGIOH_LIGHTBOX_ANALYTICS !== null && DIGIOH_LIGHTBOX_ANALYTICS.hasOwnProperty('VARS') && typeof DIGIOH_LIGHTBOX_ANALYTICS.VARS === 'object' && DIGIOH_LIGHTBOX_ANALYTICS.VARS !== null) {
                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.hasOwnProperty('DeviceAtlas') && typeof DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas === 'object') {
                    if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('mobileDevice') && DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.mobileDevice !== '') {
                        return DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.mobileDevice;
                    }
                }

                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device && DIGIOH_LIGHTBOX_ANALYTICS.VARS.device === 'Phone/Tablet') {
                    return true;
                }
            }

            return (isPhone() || isTablet());
        }
        catch (e) {
            logError(e, "isMobile");
        }

        return '';
    }

    function isDesktop() {
        try {
            if (typeof DIGIOH_LIGHTBOX_ANALYTICS === 'object' && DIGIOH_LIGHTBOX_ANALYTICS !== null && DIGIOH_LIGHTBOX_ANALYTICS.hasOwnProperty('VARS') && typeof DIGIOH_LIGHTBOX_ANALYTICS.VARS === 'object' && DIGIOH_LIGHTBOX_ANALYTICS.VARS !== null) {
                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.hasOwnProperty('DeviceAtlas') && typeof DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas === 'object') {
                    if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('primaryHardwareType') && DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType === 'Desktop') {
                        return true;
                    }
                }

                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device && DIGIOH_LIGHTBOX_ANALYTICS.VARS.device === 'Desktop/Laptop') {
                    return true;
                }
            }

            return (!isPhone() && !isTablet());
        }
        catch (e) {
            logError(e, "isDesktop");
        }

        return '';
    }


    function embedInlineLightboxAlwaysForms() {
        try {
            for (var i = 0; i < DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR.length; i++) {
                embedInlineLightboxForm(DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR[i]);
                DIGIOH_LIGHTBOX_INLINE_DISPLAYED.push(DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR[i]);
            }
            logger('ran embedInlineLightboxAlwaysForms: ' + DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR.length);
        }
        catch (e) {
            logError(e, "embedInlineLightboxAlwaysForms");
        }
    }

    function embedInlineLightboxForm(lid) {
        try {
            //logger('running embedInlineLightboxForm: ' + lid);
            //logger(EFFECTS[lid].inline, true);

            if (EFFECTS[lid].inline.removal_rules === 'remove') {
                if (DIGIOH_LIGHTBOX_ANALYTICS.getEventCountByLightbox("submit", lid) > 0 || DIGIOH_LIGHTBOX_ANALYTICS.getEventCountByLightbox("redirect", lid) > 0) {
                    logger('DIGIOH: Inline Form - Removal Rules - remove after conversion ');
                    return false;
                }
            }


            var var_id = '';
            var orig_lid = lid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
                var_id = lid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
            }


            if (!IS_PREVIEW || IS_DEV) {
                if (doesInlineLightboxHaveCustomJsType(lid, 'display') || doesInlineLightboxHaveCustomJsType(lid, 'all')) {
                    var customJsResult = DIGIOH_CUSTOM_JS.runCustomJsBeforeLightboxDisplay(window, document, JQUERY_DIGIOH, orig_lid, var_id);
                    logger('DIGIOH: runCustomJsBeforeLightboxDisplay - ' + lid);
                    if (!customJsResult) {
                        logger('DIGIOH_CUSTOM_JS.runCustomJsBeforeLightboxDisplay - prevented lightbox ' + lid + ' from being displayed');
                        return false;
                    }
                }
            }


            var style = '';

            var pref = getPagePref(lid);
            var is_responsive = false;
            if (EFFECTS[lid].hasOwnProperty(pref + 'responsive') && EFFECTS[lid][pref + 'responsive'].use) {
                //style += "width:100%;";
                //style += "height:100%;";
                is_responsive = true;
            } else {
                style += "width:" + getBoxWidth(lid) + "px;";
                style += "height:" + getBoxHeight(lid) + "px;";
            }

            style += "z-index:9938010;";

            style += 'border-color:' + EFFECTS[lid].inline.border.color + ';';
            style += 'border-style:' + EFFECTS[lid].inline.border.style + ';';
            style += 'border-width:' + EFFECTS[lid].inline.border.width + 'px;';
            style += 'border-radius:' + EFFECTS[lid].inline.border.radius + 'px;';

            //logger('position_using: ' + EFFECTS[lid].inline.position_using);

            if (IS_PREVIEW) {
                style += 'position:absolute;';

                if (is_responsive) {
                    style += 'top:0;';
                    style += 'left:0;';
                } else {
                    style += 'top:50%;';
                    style += 'left:50%;';
                    style += 'margin-top:' + (1 - Math.round(getBoxHeight(lid) / 2)) + 'px;';
                    style += 'margin-left:' + (1 - Math.round(getBoxWidth(lid) / 2)) + 'px;';
                }

                if (EFFECTS[lid].inline.css.indexOf(':') > 0 && EFFECTS[lid].inline.css.indexOf(';') > 0) {
                    style += EFFECTS[lid].inline.css;
                }

                preloadIframe(lid, style, '', '', '');

            } else if (EFFECTS[lid].inline.position_using == 'absolute' || EFFECTS[lid].inline.position_using == 'fixed') {
                style += 'position:' + EFFECTS[lid].inline.position_using + ';';

                if (EFFECTS[lid].inline.position.top > 0 || EFFECTS[lid].inline.position.bottom == 0) {
                    style += 'top:' + EFFECTS[lid].inline.position.top + 'px;';
                } else {
                    style += 'bottom:' + EFFECTS[lid].inline.position.bottom + 'px;';
                }

                if (EFFECTS[lid].inline.position.left > 0 || EFFECTS[lid].inline.position.right == 0) {
                    style += 'left:' + EFFECTS[lid].inline.position.left + 'px;';
                } else {
                    style += 'right:' + EFFECTS[lid].inline.position.right + 'px;';
                }

                if (EFFECTS[lid].inline.css.indexOf(':') > 0 && EFFECTS[lid].inline.css.indexOf(';') > 0) {
                    style += EFFECTS[lid].inline.css;
                }

                preloadIframe(lid, style, '', '', '');

            } else if (EFFECTS[lid].inline.position_using == 'jquery_selector') {
                var jquery_selector = EFFECTS[lid].inline.jquery_selector;
                var jquery_method = EFFECTS[lid].inline.jquery_method;
                var clear = '';

                if (EFFECTS[lid].inline.margin.top > 0)
                    style += 'margin-top:' + EFFECTS[lid].inline.margin.top + 'px;';
                if (EFFECTS[lid].inline.margin.right > 0)
                    style += 'margin-right:' + EFFECTS[lid].inline.margin.right + 'px;';
                if (EFFECTS[lid].inline.margin.bottom > 0)
                    style += 'margin-bottom:' + EFFECTS[lid].inline.margin.bottom + 'px;';
                if (EFFECTS[lid].inline.margin.left > 0)
                    style += 'margin-left:' + EFFECTS[lid].inline.margin.left + 'px;';

                if (EFFECTS[lid].inline.float !== 'none' && EFFECTS[lid].inline.float !== '') {
                    style += 'float:' + EFFECTS[lid].inline.float + ';';

                    if (EFFECTS[lid].inline.clear !== 'none' && EFFECTS[lid].inline.clear !== '') {
                        clear = '<div style="float:none;clear:' + EFFECTS[lid].inline.clear + ';"></div>';
                    }
                }

                if (EFFECTS[lid].inline.css.indexOf(':') > 0 && EFFECTS[lid].inline.css.indexOf(';') > 0) {
                    style += EFFECTS[lid].inline.css;
                }

                preloadIframe(lid, style, jquery_selector, jquery_method, clear);

            } else if (EFFECTS[lid].inline.position_using == 'smart_tag') {
                var jquery_selector = '';

                //if (orig_lid === lid && DIGIOH_LIGHTBOX_IDS.hasOwnProperty(orig_lid)) {
                //    jquery_selector = '#lightbox-inline-form-' + DIGIOH_LIGHTBOX_IDS[orig_lid];
                //}
                //else if (var_id === lid && DIGIOH_LIGHTBOX_IDS.hasOwnProperty(var_id)) {
                //    jquery_selector = '#variation-inline-form-' + DIGIOH_LIGHTBOX_IDS[var_id];
                //}

                if (var_id === lid) {
                    jquery_selector = '#variation-inline-form-' + var_id;
                } else {
                    jquery_selector = '#lightbox-inline-form-' + lid;
                }

                var jquery_method = EFFECTS[lid].inline.jquery_method || 'append';

                style += 'margin-top:' + EFFECTS[lid].inline.margin.top + 'px;';
                style += 'margin-right:' + EFFECTS[lid].inline.margin.right + 'px;';
                style += 'margin-bottom:' + EFFECTS[lid].inline.margin.bottom + 'px;';
                style += 'margin-left:' + EFFECTS[lid].inline.margin.left + 'px;';

                if (EFFECTS[lid].inline.css.indexOf(':') > 0 && EFFECTS[lid].inline.css.indexOf(';') > 0) {
                    style += EFFECTS[lid].inline.css;
                }

                preloadIframe(lid, style, jquery_selector, jquery_method, '');

            } else if (EFFECTS[lid].inline.position_using == 'custom_function') {
                preloadIframe(lid, style, '', '', '');
            } else {
                logger('found no effects for inline form');
            }
        }
        catch (e) {
            logError(e, "embedInlineLightboxForm");
        }
    }

    function initDigiohVars() {
        try {
            if (typeof DIGIOH_VARS === 'undefined') {
                DIGIOH_VARS = {};
            }

            try {
                if (typeof DIGIOH_BLIP_LZ !== 'undefined') {
                    BLIP_ARR = JSON.parse(LZString.decompressFromBase64(DIGIOH_BLIP_LZ));
                }
            }
            catch (e1) {
                BLIP_ARR = [];
                logErrorText("DIGIOH_BLIP_LZ_INITDIGIOHVARS", "DIGIOH_BLIP_LZ_INITDIGIOHVARS");
            }
        }
        catch (e) {
            logError(e, "initDigiohVars");
        }
    }

    function initDependentScripts() {
        try {
            if (!INIT_DEPENDENT_SCRIPTS_HAS_RUN) {
                INIT_DEPENDENT_SCRIPTS_HAS_RUN = true;

                initAnalytics();
                initFancyboxEffects();

                var customJsResult = true;
                if (!IS_PREVIEW || IS_DEV) {
                    customJsResult = DIGIOH_CUSTOM_JS.runCustomJsOnDocumentReady(window, document, JQUERY_DIGIOH);
                    logger('DIGIOH: runCustomJsOnDocumentReady()');
                }

                if (customJsResult) {
                    initConditions();
                } else {
                    logger('runCustomJsOnDocumentReady() returned false, execution of JS has been stopped.  Checking for embedded inline forms...');

                    setEligibleInlineLightboxesAfterDocReadyFalseCustomJS();

                    if (DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR.length > 0 || DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR.length > 0) {
                        initABSplitTests();
                        initVariations();
                        initLightboxActivity();
                        buildConditionSelectorsToBoxesMap();

                        embedInlineLightboxAlwaysForms();
                        embedInlineLightboxConditionsForms();
                    }
                }
            }
        }
        catch (e) {
            logError(e, "initDependentScripts");
        }
    }

    function setEligibleInlineLightboxesAfterDocReadyFalseCustomJS() {
        try {
            var NEW_ALWAYS_ARR = [];
            for (var i = 0; i < DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR.length; i++) {
                cjs = EFFECTS[DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR[i]].inline.custom_js_rules;
                if (cjs !== 'all' && cjs.indexOf('ready') === -1) {
                    NEW_ALWAYS_ARR.push(DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR[i]);
                }
            }
            DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR = NEW_ALWAYS_ARR;

            var NEW_CONDITIONS_ARR = [];
            var cjs = '';
            for (var i = 0; i < DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR.length; i++) {
                cjs = EFFECTS[DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[i]].inline.custom_js_rules;
                if (cjs !== 'all' && cjs.indexOf('ready') === -1) {
                    NEW_CONDITIONS_ARR.push(DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[i]);
                }
            }
            DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR = NEW_CONDITIONS_ARR;
        }
        catch (e) {
            logError(e, "setEligibleInlineLightboxesAfterDocReadyFalseCustomJS");
        }
    }

    function doesInlineLightboxHaveCustomJsType(lid, cjsType) {
        try {
            var idxArrAlways = JQUERY_DIGIOH.inArray(lid, DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR);
            var idxArrConditions = JQUERY_DIGIOH.inArray(lid, DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR);
            var cjsVal = '';

            if (idxArrAlways >= 0) {
                cjsVal = EFFECTS[DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR[idxArrAlways]].inline.custom_js_rules;
            } else if (idxArrConditions >= 0) {
                cjsVal = EFFECTS[DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[idxArrConditions]].inline.custom_js_rules;
            }

            var foundType = (cjsVal.indexOf(cjsType) >= 0);
            //logger('doesInlineLightboxHaveCustomJsType: ' + foundType);
            return foundType;
        }
        catch (e) {
            logError(e, "doesInlineLightboxHaveCustomJsType");
        }
    }

    function cleanTextForLogging(txt) {
        try {
            if (typeof txt === 'string') {
                return txt.trim().split(' ').join('_').toUpperCase().replace(/[^a-zA-Z0-9]/g, '');
            } else if (typeof txt === 'number') {
                return (txt + '').trim();
            } else {
                return 'NA';
            }
        } catch (e) {
            logError(e, "cleanTextForLogging");
            return txt;
        }
    }

    function padStr(i) {
        try {
            return (i < 10) ? ("0" + i) : ("" + i);
        }
        catch (e) {
            logError(e, "padStr");
        }
    };

    function getFirebaseYmdh() {
        try {
            var x = new Date();
            var utc_ts = x.getTime() + x.getTimezoneOffset() * 60 * 1000;
            var d = new Date(utc_ts);

            var mth = padStr(1 + d.getMonth());
            var day = padStr(d.getDate());
            var hrs = padStr(d.getHours());

            var ymdh = d.getFullYear() + '-' + mth + '-' + day + '-' + hrs;

            return ymdh;
        }
        catch (e) {
            logError(e, "getFirebaseYmdh");
            return '----';
        }
    }

    function getNextModulusClusterNumber(prevCluster) {
        try {
            var nextCluster = 1;

            if (typeof prevCluster !== 'number' || prevCluster <= 0) {
                nextCluster = getRandomInt(1, 3);
            } else if (prevCluster >= 3) {
                nextCluster = 1;
            } else {
                nextCluster = prevCluster + 1;
            }

            return nextCluster;
        }
        catch (e) {
            logError(e, "getNextModulusClusterNumber");
            return 1;
        }
    }

    function getModulusClusterEndpoint(nextCluster) {
        var testing = false;
        var use_cluster_group_123 = true;
        var use_cluster_group_456 = false;

        if (testing) {
            return (PROTOCOL + 'lightboxanalyticstesting-93828.onmodulus.net/');
        }
        else if (use_cluster_group_123) {
            try {
                if (nextCluster == 1)
                    return (PROTOCOL + 'boxcdn01-61693.onmodulus.net/');
                else if (nextCluster == 2)
                    return (PROTOCOL + 'boxcdn02-61704.onmodulus.net/');
                else if (nextCluster == 3)
                    return (PROTOCOL + 'boxcdn03-61705.onmodulus.net/');
                else
                    return (PROTOCOL + 'boxcdn01-61693.onmodulus.net/');
            }
            catch (e) {
                logError(e, "getModulusClusterEndpoint");
                return (PROTOCOL + 'boxcdn01-61693.onmodulus.net/');
            }
        }
        else if (use_cluster_group_456) {
            try {
                if (nextCluster == 1)
                    return (PROTOCOL + 'boxcdn04-94051.onmodulus.net/');
                else if (nextCluster == 2)
                    return (PROTOCOL + 'boxcdn05-94052.onmodulus.net/');
                else if (nextCluster == 3)
                    return (PROTOCOL + 'boxcdn06-94053.onmodulus.net/');
                else
                    return (PROTOCOL + 'boxcdn04-94051.onmodulus.net/');
            }
            catch (e) {
                logError(e, "getModulusClusterEndpoint");
                return (PROTOCOL + 'boxcdn04-94051.onmodulus.net/');
            }
        }
        else {
            return (PROTOCOL + 'lightboxanalytics-rjsteffes.c9users.io/');
        }
    }


    function pageviewGeoDevice() {
        try {
            if (!IS_PREVIEW) {
                var use_geo = '0';
                if (!DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address) {
                    use_geo = '1';
                }

                var use_device = '0';
                if (!DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType) {
                    use_device = '1';
                }

                var clientProps = '';

                //if (typeof DeviceAtlas !== 'undefined') {
                //    clientProps = DeviceAtlas.getPropertiesAsString();
                //    if (typeof clientProps === 'string' && clientProps.indexOf('|') >= 0 && clientProps.split('|').length > 4) {
                //        clientProps = '&x_da_cp=' + encodeURIComponent(reduceClientProps(clientProps));
                //    }
                //} else {
                //    logger('DeviceAtlas is undefined');
                //}

                //analyticsModulusXHR(0, 0, 'pageviews/xhr/' + VENDOR_GUID);
                //analyticsJSONP(0, 0, 'pageviews/jsonp/' + VENDOR_GUID);
                //analyticsModulusXHR(0, 0, 'pageview?request_format=xhr&user_guid=' + VENDOR_GUID + '&use_geo=' + use_geo + '&use_device=' + use_device + clientProps);
                //analyticsNextCascade('', 0, 'pageview?user_guid=' + VENDOR_GUID + '&use_geo=' + use_geo + '&use_device=' + use_device + clientProps);
                analyticsNextCascade('', 0, 'pageview?user_guid=' + VENDOR_GUID + '&use_geo=' + use_geo + '&use_device=' + use_device);
            } else {
                initDependentScripts();
            }
        }
        catch (e) {
            logError(e, "pageviewGeoDevice");
            initDependentScripts();
        }
    }

    function analyticsNextCascade(next_cascade_type, cluster_num, path) {
        try {
            var supportsXHR = true;
            var supportsCanvas = true;

            try {
                if (typeof DeviceAtlas === 'object' && DeviceAtlas !== null) {
                    if (DeviceAtlas.hasOwnProperty('js') && DeviceAtlas.js.hasOwnProperty('xhr') && !DeviceAtlas.js.xhr) {
                        supportsXHR = false;
                    }
                    if (DeviceAtlas.hasOwnProperty('html') && DeviceAtlas.html.hasOwnProperty('canvas') && !DeviceAtlas.html.canvas) {
                        supportsCanvas = false;
                    }
                }
            }
            catch (err) {
            }

            if (next_cascade_type === 'jsonp' || next_cascade_type === '' || !next_cascade_type) {
                analyticsJSONP(0, cluster_num, path);
            }
            else if (supportsXHR && next_cascade_type === 'xhr') {
                analyticsModulusXHR(0, cluster_num, path);
            }
            else if (next_cascade_type === 'beacon') {
                analyticsModulusBEACON(cluster_num, path, supportsCanvas);
            }
            else if (next_cascade_type === 'firebase' && path.indexOf('pageview?') === -1) {
                analyticsFirebaseAJAX(path);
            }
            else if (next_cascade_type === 'keen' && path.indexOf('pageview?') === -1) {
                keenLightboxDisplay(path);
            }
            else {
                analyticsModulusBEACON(cluster_num, path, supportsCanvas);
            }
        }
        catch (e) {
            logError(e, "analyticsNextCascade");
        }
    }

    function analyticsJSONP(attemptNum, clusterNum, path) {
        try {
            var nextClusterNum = getNextModulusClusterNumber(clusterNum);
            var nextClusterEndpoint = getModulusClusterEndpoint(nextClusterNum);

            if (attemptNum >= 2) {
                logErrorText('analyticsJSONP_FAILED_MAX_ATTEMPTS', 'Failed after 2 attempts.');
                analyticsNextCascade('keen', nextClusterNum, path);
            } else {

                if (attemptNum === 0) {
                    ANALYTICS_JSONP_RESPONSE['attempt'] = false;

                    window.setTimeout(function () {
                        if (path.indexOf('pageview?') >= 0 && ANALYTICS_JSONP_RESPONSE['attempt'] === false) {
                            //initDependentScripts();
                            logErrorText('analyticsJSONP_TIMEOUT_PAGEVIEW', 'analyticsJSONP_TIMEOUT_PAGEVIEW');
                            analyticsNextCascade('beacon', nextClusterNum, path);
                        } else if (path.indexOf('event?') >= 0 && ANALYTICS_JSONP_RESPONSE['attempt'] === false) {
                            logErrorText('analyticsJSONP_TIMEOUT_EVENT', 'analyticsJSONP_TIMEOUT_EVENT');
                            analyticsNextCascade('keen', nextClusterNum, path);
                        }
                    }, 4000);
                }

                var jsonpSent = new Date().getTime();

                JQUERY_DIGIOH.ajax({
                    //type: "GET",
                    //jsonp: 'callback',
                    dataType: 'jsonp', // Tell jQuery we're expecting JSONP
                    url: (nextClusterEndpoint + path + "&request_format=jsonp&cache_breaker=" + (new Date().getTime())),
                    //cache: true, //see jquery documentation.  settings ?cb={timestamp} manually has better known result.
                    //crossDomain: true,
                    //processData: false,
                    //async: true,
                    //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    //contentType: 'application/json; charset=utf-8',
                    //contentType: 'text/plain',
                    //dataType: 'json', //the type of data you are expecting back from the server
                    //data: {},
                    success: function (json) {
                        //var json = {};

                        //try {
                        //    if (htmltext) {
                        //        json = JSON.parse(htmltext);
                        //        logger(json);
                        //    }
                        //}
                        //catch (err) {
                        //    logger('analyticsJSONP_PARSE_ERROR: ' + err.message);
                        //    json = 'parse_error';
                        //}

                        //if (json === 'parse_error') {
                        //    logErrorText('analyticsJSONP_PARSE_ERROR', 'analyticsJSONP_PARSE_ERROR');
                        //    analyticsNextCascade('keen', nextClusterNum, path);
                        //}
                        logger('DIGIOH: api latency ' + (new Date().getTime() - jsonpSent) + 'ms');
                        ANALYTICS_JSONP_RESPONSE['attempt'] = true;

                        if (json && typeof json === 'object' && json !== null && json.hasOwnProperty('msg')) {
                            if (json.msg == 'success') {
                                //logger('analyticsJSONP: ' + path);

                                if (path.indexOf('pageview?') >= 0) {

                                    if (json.hasOwnProperty("geo") && json.geo.hasOwnProperty("ip") && json.geo.ip) {
                                        if (JQUERY_DIGIOH.inArray(json.geo.ip, BLIP_ARR) > -1) {
                                            json.geo.blip_matched = 1;
                                            BLIP_MATCHED = 1;
                                        } else {
                                            json.geo.blip_matched = 0;
                                            BLIP_MATCHED = 0;
                                        }
                                    }

                                    //if (json.hasOwnProperty("devsrc")) {
                                    //    logger('DIGIOH: devsrc=' + json.devsrc);
                                    //} else {
                                    //    logger('DIGIOH: devsrc=cookie');
                                    //}

                                    //if (json.hasOwnProperty("err")) {
                                    //    logger('DIGIOH: analyticsJSONP err from server - ' + json.err);
                                    //}

                                    //if (json.hasOwnProperty("errmsg")) {
                                    //    logger('DIGIOH: analyticsJSONP errmsg from server - ' + json.errmsg);
                                    //}

                                    logger(JSON.stringify(json, null, 2));

                                    DIGIOH_LIGHTBOX_ANALYTICS.setGeoAndDeviceData(json);
                                    setKeenSchemaAfterGeoIpAndDevice();
                                    initDependentScripts();
                                }


                            } else if (json.msg == 'toobusy') {
                                logger('analyticsJSONP: toobusy');
                                window.setTimeout(function () {
                                    analyticsJSONP(attemptNum + 1, nextClusterNum, path);
                                }, 200);
                            } else if (json.msg == 'stop_responding_to_requests') {
                                logger('analyticsJSONP: stop_responding_to_requests');
                                analyticsJSONP(attemptNum + 1, nextClusterNum, path);
                            } else if (json.msg === 'invalid_params' || json.msg === 'invalid_guid' || json.msg === 'exception') {
                                logErrorText('analyticsJSONP_' + json.msg.toUpperCase(), 'analyticsJSONP_' + json.msg.toUpperCase());
                                analyticsNextCascade('keen', nextClusterNum, path);
                            } else {
                                logErrorText('analyticsJSONP_SUCCESS_OTHER_1', 'analyticsJSONP_SUCCESS_OTHER_1');
                                analyticsNextCascade('keen', nextClusterNum, path);
                            }
                        } else {
                            logErrorText('analyticsJSONP_SUCCESS_OTHER_2', 'analyticsJSONP_SUCCESS_OTHER_2');
                            analyticsNextCascade('keen', nextClusterNum, path);
                        }
                    },
                    error: function (htmltext, textStatus, errorThrown) {
                        logger('jsonP response: ' + (new Date().getTime() - jsonpSent) + 'ms');
                        ANALYTICS_JSONP_RESPONSE['attempt'] = true;

                        if (textStatus === 'timeout') {
                            logErrorText('analyticsJSONP_TIMEOUT', 'analyticsJSONP_TIMEOUT');
                            analyticsJSONP(attemptNum + 1, nextClusterNum, path);
                        } else if (textStatus === 'error') {
                            logErrorText('analyticsJSONP_ERROR', 'analyticsJSONP_ERROR');
                            analyticsNextCascade('keen', nextClusterNum, path);
                        } else {
                            logErrorText('analyticsJSONP_ERROR_OTHER', 'analyticsJSONP_ERROR_OTHER');
                            analyticsNextCascade('keen', nextClusterNum, path);
                        }
                    }
                });

                //logger('jsonpNonBlocking: true');
            }
        }
        catch (e) {
            logErrorText('analyticsJSONP_CLIENT_EXCEPTION', 'client_exception');
            analyticsNextCascade('keen', nextClusterNum, path);
        }
    }

    function analyticsModulusBEACON(clusterNum, path, supportsCanvas) {
        try {
            var nextClusterNum = getNextModulusClusterNumber(clusterNum);
            var nextClusterEndpoint = getModulusClusterEndpoint(nextClusterNum);

            var src = (nextClusterEndpoint + path + "&request_format=beacon&cache_breaker=" + (new Date().getTime()));
            var img = new Image();
            img.src = src;
        }
        catch (e) {
            logErrorText("analyticsModulusBEACON_CLIENT_EXCEPTION", 'client_exception');
        }

        if (path.indexOf('pageview?') >= 0) {
            initDependentScripts();
        }
    }



    //function analyticsModulusXHR(attemptNum, clusterNum, path) {
    //    try {
    //        var nextClusterNum = getNextModulusClusterNumber(clusterNum);
    //        var nextClusterEndpoint = getModulusClusterEndpoint(nextClusterNum);

    //        if (attemptNum >= 3) {
    //            logErrorText('analyticsModulusXHR_FAILED_MAX_ATTEMPTS', 'Failed after 3 attempts.');
    //            analyticsNextCascade('keen', nextClusterNum, path);
    //        } else {
    //            JQUERY_DIGIOH.ajax({
    //                type: "GET",
    //                jsonp: false,
    //                url: (nextClusterEndpoint + path + "&request_format=xhr&cache_breaker=" + (new Date().getTime())),
    //                cache: true, //see jquery documentation.  settings ?cb={timestamp} manually has better known result.
    //                crossDomain: true,
    //                processData: false,
    //                timeout: 3000,
    //                async: true,
    //                //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    //                //contentType: 'application/json; charset=utf-8',
    //                contentType: 'text/plain',
    //                //dataType: 'json', //the type of data you are expecting back from the server
    //                dataType: 'html',
    //                data: '',
    //                success: function (htmltext) {
    //                    var json = {};

    //                    try {
    //                        if (htmltext) {
    //                            json = JSON.parse(htmltext);
    //                            logger(json);
    //                        }
    //                    }
    //                    catch (err) {
    //                        logger('analyticsModulusXHR_PARSE_ERROR: ' + err.message);
    //                        json = 'parse_error';
    //                    }

    //                    if (json === 'parse_error') {
    //                        logErrorText('analyticsModulusXHR_PARSE_ERROR', 'analyticsModulusXHR_PARSE_ERROR');
    //                        analyticsNextCascade('firebase', nextClusterNum, path);
    //                    }
    //                    else if (json && typeof json === 'object' && json !== null && json.hasOwnProperty('msg')) {
    //                        if (json.msg == 'success') {
    //                            logger('analyticsModulusXHR: success');


    //                            if (path.indexOf('pageview?') >= 0) {

    //                                if (json.hasOwnProperty("geo") && json.geo.hasOwnProperty("ip") && json.geo.ip) {
    //                                    if (JQUERY_DIGIOH.inArray(json.geo.ip, BLIP_ARR) > -1) {
    //                                        json.geo.blip_matched = 1;
    //                                        BLIP_MATCHED = 1;
    //                                    } else {
    //                                        json.geo.blip_matched = 0;
    //                                        BLIP_MATCHED = 0;
    //                                    }
    //                                }

    //                                DIGIOH_LIGHTBOX_ANALYTICS.setGeoAndDeviceData(json);
    //                                setKeenSchemaAfterGeoIpAndDevice();
    //                                initDependentScripts();
    //                            }


    //                        } else if (json.msg == 'toobusy') {
    //                            logger('analyticsModulusXHR: toobusy');
    //                            window.setTimeout(function () {
    //                                analyticsModulusXHR(attemptNum + 1, nextClusterNum, path);
    //                            }, 200);
    //                        } else if (json.msg == 'stop_responding_to_requests') {
    //                            logger('analyticsModulusXHR: stop_responding_to_requests');
    //                            analyticsModulusXHR(attemptNum + 1, nextClusterNum, path);
    //                        } else if (json.msg === 'invalid_params' || json.msg === 'invalid_guid' || json.msg === 'exception') {
    //                            logErrorText('analyticsModulusXHR_' + json.msg.toUpperCase(), 'analyticsModulusXHR_' + json.msg.toUpperCase());
    //                            analyticsNextCascade('keen', nextClusterNum, path);
    //                        } else {
    //                            logErrorText('analyticsModulusXHR_SUCCESS_OTHER_1', 'analyticsModulusXHR_SUCCESS_OTHER_1');
    //                            analyticsNextCascade('keen', nextClusterNum, path);
    //                        }
    //                    } else {
    //                        logErrorText('analyticsModulusXHR_SUCCESS_OTHER_2', 'analyticsModulusXHR_SUCCESS_OTHER_2');
    //                        analyticsNextCascade('keen', nextClusterNum, path);
    //                    }
    //                },
    //                error: function (htmltext, textStatus, errorThrown) {
    //                    if (textStatus === 'timeout') {
    //                        logErrorText('analyticsModulusXHR_TIMEOUT', 'analyticsModulusXHR_TIMEOUT');
    //                        analyticsNextCascade('keen', nextClusterNum, path);
    //                    } else if (textStatus === 'error') {
    //                        logErrorText('analyticsModulusXHR_ERROR', 'analyticsModulusXHR_ERROR');
    //                        analyticsNextCascade('keen', nextClusterNum, path);
    //                    } else {
    //                        logErrorText('analyticsModulusXHR_ERROR_OTHER', 'analyticsModulusXHR_ERROR_OTHER');
    //                        analyticsNextCascade('keen', nextClusterNum, path);
    //                    }
    //                }
    //            });

    //        }
    //    }
    //    catch (e) {
    //        logErrorText('analyticsModulusXHR_CLIENT_EXCEPTION', 'client_exception');
    //        analyticsNextCascade('keen', nextClusterNum, path);
    //    }
    //}



    //function analyticsFirebaseAJAX(path) {
    //    try {
    //        //status of the request ("success", "notmodified", "nocontent", "error", "timeout", "abort", or "parsererror")
    //        var data = "";
    //        JQUERY_DIGIOH.ajax({
    //            accept: "application/json",
    //            type: 'POST',
    //            contentType: "application/json; charset=utf-8",
    //            dataType: "json",
    //            url: "https://digioh.firebaseio.com/lightbox_analytics/errors/" + path.split('/').join('____') + ".json",
    //            data: JSON.stringify(data)
    //        }).always(function (data, textStatus, errorThrown) {
    //            if (textStatus && textStatus === 'success' && typeof data === 'object' && data.hasOwnProperty('name') && data.name.length > 7) {
    //                logger(textStatus + ': ' + JSON.stringify(data));
    //            } else if (textStatus) {
    //                logErrorText("analyticsFirebaseAJAX_ERROR", "analyticsFirebaseAJAX_ERROR");
    //                analyticsNextCascade('keen', 0, path);
    //            } else {
    //                logErrorText("analyticsFirebaseAJAX_ERROR", "analyticsFirebaseAJAX_ERROR");
    //                analyticsNextCascade('keen', 0, path);
    //            }

    //            //logErrorText("analyticsModulusXHR_DISPLAYS_FAILURE_COUNTER", 'analyticsModulusXHR_DISPLAYS_FAILURE_COUNTER');
    //        });
    //    }
    //    catch (e) {
    //        logErrorText("analyticsFirebaseAJAX_EXCEPTION", 'analyticsFirebaseAJAX_EXCEPTION');
    //        analyticsNextCascade('keen', 0, path);
    //    }
    //}



    //function analyticsJSONP(attemptNum, clusterNum, path) {
    //    try {
    //        var nextClusterNum = getNextModulusClusterNumber(clusterNum);
    //        var nextClusterEndpoint = getModulusClusterEndpoint(nextClusterNum);

    //        if (attemptNum >= 3 && attemptNum < 7) {
    //            logErrorText("analyticsJSONP_FAILED_MAX_ATTEMPTS", 'Failed after 3 attempts.');
    //            //analyticsNextCascade('firebase', nextClusterNum, path);
    //            analyticsNextCascade('keen', nextClusterNum, path);
    //        } else {


    //            JQUERY_DIGIOH.jsonp({
    //                url: (nextClusterEndpoint + path + "?callback=?"),
    //                cache: false,
    //                timeout: 10000,
    //                error: function (xOptions, textStatus) {
    //                    //textStatus: "error" or "timeout"
    //                    if (textStatus) {
    //                        if (textStatus === "error") {
    //                            logErrorText("analyticsJSONP_ERROR", 'analyticsJSONP_ERROR');
    //                        } else if (textStatus === "timeout") {
    //                            logErrorText("analyticsJSONP_TIMEOUT", 'analyticsJSONP_TIMEOUT');
    //                        } else {
    //                            logErrorText("analyticsJSONP_ERROR_OTHER_1", 'analyticsJSONP_ERROR_OTHER_1');
    //                        }
    //                    } else {
    //                        logErrorText("analyticsJSONP_ERROR_OTHER_2", 'analyticsJSONP_ERROR_OTHER_2');
    //                    }

    //                    analyticsJSONP(attemptNum + 1, nextClusterNum, path);
    //                },
    //                success: function (json, textStatus, xOptions) {
    //                    //textStatus: "success" (always)
    //                    var retryJSONP = false;

    //                    if (typeof json === "object" && json.hasOwnProperty("msg")) {
    //                        if (json.msg == 'success') {
    //                            logger('analyticsJSONP: success (' + path + ')');
    //                        } else if (json.msg == 'toobusy') {
    //                            logErrorText("analyticsJSONP_TOOBUSY", 'analyticsJSONP_TOOBUSY');
    //                            retryJSONP = true;
    //                        } else if (json.msg == 'stop_responding_to_requests') {
    //                            logErrorText("analyticsJSONP_STOP_RESPONDING_TO_REQUESTS", 'analyticsJSONP_STOP_RESPONDING_TO_REQUESTS');
    //                            retryJSONP = true;
    //                        } else if (json.msg === 'invalid_params') {
    //                            logErrorText("analyticsJSONP_INVALID_PARAMS", "analyticsJSONP_INVALID_PARAMS");
    //                            retryJSONP = true;
    //                        } else if (json.msg === 'invalid_guid') {
    //                            logErrorText("analyticsJSONP_INVALID_GUID", "analyticsJSONP_INVALID_GUID");
    //                            retryJSONP = true;
    //                        } else if (json.msg === 'server_exception') {
    //                            logErrorText("analyticsJSONP_SERVER_EXCEPTION", "analyticsJSONP_SERVER_EXCEPTION");
    //                            retryJSONP = true;
    //                        } else if (typeof json.msg === "string") {
    //                            logErrorText("analyticsJSONP_SUCCESS_OTHER_" + json.msg, "analyticsJSONP_SUCCESS_OTHER_" + json.msg);
    //                        } else {
    //                            logErrorText("analyticsJSONP_SUCCESS_OTHER_1", 'analyticsJSONP_SUCCESS_OTHER_1');
    //                        }
    //                    } else {
    //                        logErrorText("analyticsJSONP_SUCCESS_OTHER_2", 'analyticsJSONP_SUCCESS_OTHER_2');
    //                    }

    //                    if (retryJSONP) {
    //                        window.setTimeout(function () {
    //                            analyticsJSONP(attemptNum + 1, nextClusterNum, path);
    //                        }, 200);
    //                    }
    //                },
    //                complete: function (xOptions, textStatus) {
    //                    //textStatus: "success", "error" or "timeout"
    //                    //complete() is always called - after error() or after success()
    //                }
    //            });
    //        }
    //    }
    //    catch (e) {
    //        logErrorText("analyticsJSONP_CLIENT_EXCEPTION", 'client_exception');
    //        //analyticsNextCascade('firebase', nextClusterNum, path);
    //        analyticsNextCascade('keen', nextClusterNum, path);
    //    }
    //}

    //function analyticsJSONP(attemptNum, clusterNum, path) {
    //    try {
    //        var nextClusterNum = getNextModulusClusterNumber(clusterNum);
    //        var nextClusterEndpoint = getModulusClusterEndpoint(nextClusterNum);

    //        if (attemptNum >= 3 && attemptNum < 7) {
    //            logErrorText("analyticsJSONP_FAILED_MAX_ATTEMPTS", 'Failed after 3 attempts.');
    //            //analyticsNextCascade('firebase', nextClusterNum, path);
    //            analyticsNextCascade('keen', nextClusterNum, path);
    //        } else {
    //            JQUERY_DIGIOH.ajax({
    //                url: (nextClusterEndpoint + path),
    //                cache: false,
    //                dataType: "jsonp",
    //                data: {},
    //                success: function (json) {
    //                    if (json && typeof json === 'object' && json.hasOwnProperty('msg')) {
    //                        if (json.msg == 'success') {
    //                            logger('analyticsJSONP: success');
    //                        } else if (json.msg == 'toobusy') {
    //                            logger('analyticsJSONP: toobusy');
    //                            window.setTimeout(function () {
    //                                analyticsJSONP(attemptNum + 1, nextClusterNum, path);
    //                            }, 200);
    //                        } else if (json.msg == 'stop_responding_to_requests') {
    //                            logger('analyticsJSONP: stop_responding_to_requests');
    //                            analyticsJSONP(attemptNum + 1, nextClusterNum, path);
    //                        } else if (json.msg === 'invalid_params' || json.msg === 'invalid_guid' || json.msg === 'server_exception') {
    //                            logErrorText("analyticsJSONP_" + json.msg.toUpperCase(), "analyticsJSONP_" + json.msg.toUpperCase());
    //                            analyticsNextCascade('firebase', nextClusterNum, path);
    //                        } else {
    //                            logErrorText("analyticsJSONP_SUCCESS_OTHER_1", 'analyticsJSONP_SUCCESS_OTHER_1');
    //                            analyticsNextCascade('firebase', nextClusterNum, path);
    //                        }
    //                    } else {
    //                        logErrorText("analyticsJSONP_SUCCESS_OTHER_2", 'analyticsJSONP_SUCCESS_OTHER_2');
    //                        analyticsNextCascade('firebase', nextClusterNum, path);
    //                    }
    //                },
    //                error: function (json, textStatus, errorThrown) {
    //                    if (textStatus === 'timeout') {
    //                        logErrorText("analyticsJSONP_TIMEOUT", 'analyticsJSONP_TIMEOUT');
    //                        analyticsNextCascade('firebase', nextClusterNum, path);
    //                    } else if (textStatus === 'error') {
    //                        logErrorText("analyticsJSONP_ERROR", 'analyticsJSONP_ERROR');
    //                        analyticsNextCascade('firebase', nextClusterNum, path);
    //                    } else {
    //                        logErrorText("analyticsJSONP_ERROR_OTHER", 'analyticsJSONP_ERROR_OTHER');
    //                        analyticsNextCascade('firebase', nextClusterNum, path);
    //                    }
    //                }
    //            });
    //        }
    //    }
    //    catch (e) {
    //        logErrorText("analyticsJSONP_CLIENT_EXCEPTION", 'client_exception');
    //        //analyticsNextCascade('firebase', nextClusterNum, path);
    //        analyticsNextCascade('keen', nextClusterNum, path);
    //    }
    //}


    function keenLightboxDisplay(path) {
        try {
            var path_parts = path.split('/');
            var orig_lid = path_parts[4];
            var var_id = path_parts[5];
            var ab_test_id = path_parts[6];

            if (ab_test_id.indexOf('?') > 0) {
                ab_test_id = ab_test_id.split('?')[0];
            }

            if (!IS_PREVIEW) {
                if (!WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid)) {
                    logErrorText("IMPRESSION_NOT_FOUND_INVALID_DISPLAY", "IMPRESSION_NOT_FOUND_INVALID_DISPLAY");
                    return;
                }
                else if (WAS_IMPRESSION_REGISTERED[orig_lid] > 10) {
                    logErrorText("MAX_DISPLAY_COUNT_REACHED", "MAX_DISPLAY_COUNT_REACHED");
                    return;
                }

                if (BLIP_MATCHED === 1) {
                    logErrorText("BLIP_MATCHED_INVALID_DISPLAY", "BLIP_MATCHED_INVALID_DISPLAY");
                    return;
                }
            }

            var lightbox_display = {};
            lightbox_display.cache_version = DIGIOH_CACHE_VERSION;
            lightbox_display.is_preview = IS_PREVIEW;
            lightbox_display.ip_address = "${keen.ip}";
            lightbox_display.user_agent = "${keen.user_agent}";
            lightbox_display.vendor_id = VENDOR_GUID;
            lightbox_display.client_id = CLIENT_GUID;
            lightbox_display.event_id = generateGuid();
            lightbox_display.lightbox_id = orig_lid;
            lightbox_display.variation_id = var_id;
            lightbox_display.ab_test_id = ab_test_id;

            KEEN_CLIENT.addEvent("lightbox_display", lightbox_display, function (res, err) {
                if (res && typeof res === 'object' && res.hasOwnProperty('created') && res.created === true) {
                    logger('keenLightboxDisplayJSONP: success!');
                    logger(res);
                } else if (err) {
                    logErrorText("keenLightboxDisplayJSONP_ERROR", "keenLightboxDisplayJSONP_ERROR");
                    analyticsModulusBEACON(0, path);
                }
                else {
                    logErrorText("keenLightboxDisplayJSONP_ERROR_OTHER", "keenLightboxDisplayJSONP_ERROR_OTHER");
                    analyticsModulusBEACON(0, path);
                }
            });
        }
        catch (e) {
            logErrorText("keenLightboxDisplayJSONP_EXCEPTION", "keenLightboxDisplayJSONP_EXCEPTION");
            analyticsModulusBEACON(0, path);
        }
    }

    //function analyticsPageview() {
    //    try {
    //        if (!IS_PREVIEW) {
    //            //analyticsModulusXHR(0, 0, 'pageviews/xhr/' + VENDOR_GUID);
    //            //analyticsJSONP(0, 0, 'pageviews/jsonp/' + VENDOR_GUID);
    //            analyticsModulusXHR(0, 0, 'pageview?request_format=xhr&user_guid=' + VENDOR_GUID + '&use_geo=1&use_device=1');
    //        }
    //    }
    //    catch (e) {
    //        logError(e, "analyticsPageview");
    //    }
    //}


    function analyticsLightboxDisplay(lbid) {
        try {
            var var_id = '';
            var orig_lid = lbid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lbid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lbid];
                var_id = lbid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lbid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lbid];
            }

            var splitId = 'empty';
            if (var_id.length > 7 && AB_BOXES_TAKE_MAP.hasOwnProperty(var_id)) {
                splitId = AB_BOXES_TAKE_MAP[var_id];
            } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(orig_lid)) {
                splitId = AB_BOXES_TAKE_MAP[orig_lid];
            }

            if (var_id === '') {
                var_id = 'empty';
            }

            if (!WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid)) {
                WAS_IMPRESSION_REGISTERED[orig_lid] = 0;
            }
            WAS_IMPRESSION_REGISTERED[orig_lid]++;

            if (WAS_IMPRESSION_REGISTERED[orig_lid] > 10) {
                logErrorText("MAX_DISPLAY_COUNT_REACHED", "MAX_DISPLAY_COUNT_REACHED");
                return;
            }

            if (!IS_PREVIEW) {
                if (BLIP_MATCHED === 1) {
                    logErrorText("BLIP_MATCHED_INVALID_DISPLAY", "BLIP_MATCHED_INVALID_DISPLAY");
                    return;
                }
            }

            //analyticsModulusXHR(0, 0, 'events/displays/xhr/' + VENDOR_GUID + '/' + orig_lid + '/' + var_id + '/' + splitId);
            //analyticsJSONP(0, 0, 'events/displays/jsonp/' + VENDOR_GUID + '/' + orig_lid + '/' + var_id + '/' + splitId);
            //analyticsModulusXHR(0, 0, 'event?event_type=displays&request_format=xhr&user_guid=' + VENDOR_GUID + '&box_guid=' + orig_lid + '&var_guid=' + var_id + '&split_guid=' + splitId);
            analyticsNextCascade('', 0, 'event?event_type=displays&user_guid=' + VENDOR_GUID + '&box_guid=' + orig_lid + '&var_guid=' + var_id + '&split_guid=' + splitId);
        }
        catch (e) {
            logError(e, "analyticsLightboxDisplay");
        }
    }

    function initBugsnag() {
        if (typeof DIGIOH_BUGSNAG !== 'undefined' && DIGIOH_BUGSNAG !== null) {
            DIGIOH_BUGSNAG.user = {
                vendor_guid: VENDOR_GUID
            };

            processStoredExceptions();
        }
    }

    function initKeen() {
        try {
            KEEN_CLIENT = new Keen({
                projectId: "53ab77e2c9e1637d8a000000",
                writeKey: DIGIOH_KEEN_WRITE_KEY
                //requestType: "jsonp" ("beacon", "xhr")
            });
        }
        catch (e) {
            logError(e, "initKeen");
        }
    }

    function initKeenSchema() {
        try {
            KEEN_SCHEMA = {
                cache_version: DIGIOH_CACHE_VERSION,
                is_preview: IS_PREVIEW,
                ip_address: "${keen.ip}",
                user_agent: "${keen.user_agent}",
                vendor_id: VENDOR_GUID,
                client_id: CLIENT_GUID,
                referrer_url: document.referrer,
                page_url: document.location.href,
                geoip: {
                    ip_address: DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address,
                    continent_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.continent,
                    country_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.country,
                    country_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.country_name,
                    region_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.state,
                    region_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.region_name,
                    city: DIGIOH_LIGHTBOX_ANALYTICS.VARS.city,
                    zipcode: DIGIOH_LIGHTBOX_ANALYTICS.VARS.zipcode,
                    metro_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.metro_code,
                    time_zone: DIGIOH_LIGHTBOX_ANALYTICS.VARS.time_zone,
                    area_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.area_code,
                    latitude: DIGIOH_LIGHTBOX_ANALYTICS.VARS.latitude,
                    longitude: DIGIOH_LIGHTBOX_ANALYTICS.VARS.longitude,
                    geo_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.geo_source,
                    blip_matched: BLIP_MATCHED
                },
                device: {
                    hardware: DIGIOH_LIGHTBOX_ANALYTICS.VARS.device,
                    os: DIGIOH_LIGHTBOX_ANALYTICS.VARS.operating_system,
                    browser_type: DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type,
                    browser_version: DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_version
                },
                entry_point: {
                    referrer_url: DIGIOH_LIGHTBOX_ANALYTICS.VARS.referring_website_url,
                    landing_page_url: DIGIOH_LIGHTBOX_ANALYTICS.VARS.landing_page,
                    landing_page_ip: DIGIOH_LIGHTBOX_ANALYTICS.VARS.landing_page_ip,
                    landing_page_date: DIGIOH_LIGHTBOX_ANALYTICS.VARS.date_of_visit,
                    web_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.web_source,
                    past_visits: DIGIOH_LIGHTBOX_ANALYTICS.VARS.past_visits,
                    page_visits: DIGIOH_LIGHTBOX_ANALYTICS.VARS.page_visits,
                    search_engine: DIGIOH_LIGHTBOX_ANALYTICS.VARS.search_engine,
                    utm_campaign_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_source,
                    utm_campaign_medium: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_medium,
                    utm_campaign_term: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_term,
                    utm_campaign_content: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_content,
                    utm_campaign_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_name
                }
            };

            KEEN_SCHEMA.keen = {};

            KEEN_SCHEMA.keen.addons = [
                {
                    name: "keen:ip_to_geo",
                    input: {
                        ip: "ip_address"
                    },
                    output: "ip_to_geo_addon"
                },
                {
                    name: "keen:ua_parser",
                    input: {
                        ua_string: "user_agent"
                    },
                    output: "ua_parser_addon"
                },
                {
                    name: "keen:url_parser",
                    input: {
                        url: "page_url"
                    },
                    output: "url_parser_addon"
                },
                {
                    name: "keen:referrer_parser",
                    input: {
                        referrer_url: "referrer_url",
                        page_url: "page_url"
                    },
                    output: "referrer_parser_addon"
                }
            ];

            if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.latitude && DIGIOH_LIGHTBOX_ANALYTICS.VARS.longitude) {
                KEEN_SCHEMA.keen.location = {};
                KEEN_SCHEMA.keen.location.coordinates = [DIGIOH_LIGHTBOX_ANALYTICS.VARS.latitude, DIGIOH_LIGHTBOX_ANALYTICS.VARS.longitude];
            }

            //logger(KEEN_SCHEMA, true);
        }
        catch (e) {
            logError(e, "initKeenSchema");
        }
    }

    function mergeObjectData(obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
        for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }

        logger(obj3, true);

        return obj3;
    }

    function keenLightboxRedirect(lid) {
        var event_guid = generateGuid();

        try {
            var var_id = '';
            var orig_lid = lid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
                var_id = lid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
            }

            var ab_test_id = '';
            if (var_id != '' && AB_BOXES_TAKE_MAP.hasOwnProperty(var_id)) {
                ab_test_id = AB_BOXES_TAKE_MAP[var_id];
            } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(orig_lid)) {
                ab_test_id = AB_BOXES_TAKE_MAP[orig_lid];
            }

            if (!WAS_REDIRECT_REGISTERED.hasOwnProperty(orig_lid)) {
                WAS_REDIRECT_REGISTERED[orig_lid] = 0;
            }
            WAS_REDIRECT_REGISTERED[orig_lid]++;

            if (!IS_PREVIEW) {
                if (!WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid)) {
                    logErrorText("IMPRESSION_NOT_FOUND_INVALID_REDIRECT", "IMPRESSION_NOT_FOUND_INVALID_REDIRECT");
                    return;
                }

                if (WAS_REDIRECT_REGISTERED[orig_lid] > 5) {
                    logErrorText("MAX_REDIRECT_COUNT_REACHED", "MAX_REDIRECT_COUNT_REACHED");
                    return;
                }

                if (BLIP_MATCHED === 1) {
                    logErrorText("BLIP_MATCHED_INVALID_REDIRECT", "BLIP_MATCHED_INVALID_REDIRECT");
                    return;
                }
            }

            updateKeenSchemaBeforeSending();

            var lightbox_redirect = KEEN_SCHEMA;
            lightbox_redirect.event_id = event_guid;
            lightbox_redirect.lightbox_id = orig_lid;
            lightbox_redirect.variation_id = var_id;
            lightbox_redirect.ab_test_id = ab_test_id;
            lightbox_redirect.page_total_time = TOTAL_TIME;
            lightbox_redirect.page_active_time = TOTAL_TIME - IDLE_TIME;
            lightbox_redirect.page_idle_time = IDLE_TIME;
            lightbox_redirect.impressions_on_page = (WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid) ? WAS_IMPRESSION_REGISTERED[orig_lid] : 0);
            lightbox_redirect.redirects_on_page = WAS_REDIRECT_REGISTERED[orig_lid];

            if (var_id && EFFECTS.hasOwnProperty(var_id)) {
                lightbox_redirect.widget_type = EFFECTS[var_id].widget_type;
            } else {
                lightbox_redirect.widget_type = EFFECTS[orig_lid].widget_type;
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(orig_lid)) {
                lightbox_redirect.lightbox_name = DIGIOH_LIGHTBOX_NAMES[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(var_id)) {
                lightbox_redirect.variation_name = DIGIOH_LIGHTBOX_NAMES[var_id];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(orig_lid)) {
                lightbox_redirect.lightbox_short_id = DIGIOH_LIGHTBOX_IDS[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(var_id)) {
                lightbox_redirect.variation_short_id = DIGIOH_LIGHTBOX_IDS[var_id];
            }

            KEEN_CLIENT.addEvent("lightbox_redirect", lightbox_redirect, function (res, err) {
                if (res && typeof res === 'object' && res.hasOwnProperty('created') && res.created === true) {
                    logger('keenLightboxRedirect: success!');
                    logger(res);
                } else if (err) {
                    logErrorText("keenLightboxRedirect_ERROR", "keenLightboxRedirect_ERROR");
                }
                else {
                    logErrorText("keenLightboxRedirect_ERROR_OTHER", "keenLightboxRedirect_ERROR_OTHER");
                }
            });

            LIGHTBOX_OPEN_TIME = TOTAL_TIME;
        }
        catch (e) {
            logErrorText("keenLightboxRedirect_EXCEPTION", "keenLightboxRedirect_EXCEPTION");
        }
    }

    function keenLightboxDownload(lid) {
        try {
            var event_guid = generateGuid();

            var var_id = '';
            var orig_lid = lid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
                var_id = lid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
            }

            var ab_test_id = '';
            if (var_id != '' && AB_BOXES_TAKE_MAP.hasOwnProperty(var_id)) {
                ab_test_id = AB_BOXES_TAKE_MAP[var_id];
            } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(orig_lid)) {
                ab_test_id = AB_BOXES_TAKE_MAP[orig_lid];
            }

            if (!WAS_DOWNLOAD_REGISTERED.hasOwnProperty(orig_lid)) {
                WAS_DOWNLOAD_REGISTERED[orig_lid] = 0;
            }
            WAS_DOWNLOAD_REGISTERED[orig_lid]++;

            if (!IS_PREVIEW) {
                if (!WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid)) {
                    logErrorText("IMPRESSION_NOT_FOUND_INVALID_DOWNLOAD", "IMPRESSION_NOT_FOUND_INVALID_DOWNLOAD");
                    return;
                }

                if (WAS_DOWNLOAD_REGISTERED[orig_lid] > 5) {
                    logErrorText("MAX_DOWNLOAD_COUNT_REACHED", "MAX_DOWNLOAD_COUNT_REACHED");
                    return;
                }

                if (BLIP_MATCHED === 1) {
                    logErrorText("BLIP_MATCHED_INVALID_DOWNLOAD", "BLIP_MATCHED_INVALID_DOWNLOAD");
                    return;
                }
            }

            updateKeenSchemaBeforeSending();

            var lightbox_download = KEEN_SCHEMA;
            lightbox_download.event_id = event_guid;
            lightbox_download.lightbox_id = orig_lid;
            lightbox_download.variation_id = var_id;
            lightbox_download.ab_test_id = ab_test_id;
            lightbox_download.page_total_time = TOTAL_TIME;
            lightbox_download.page_active_time = TOTAL_TIME - IDLE_TIME;
            lightbox_download.page_idle_time = IDLE_TIME;
            lightbox_download.impressions_on_page = (WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid) ? WAS_IMPRESSION_REGISTERED[orig_lid] : 0);
            lightbox_download.downloads_on_page = WAS_DOWNLOAD_REGISTERED[orig_lid];

            if (var_id && EFFECTS.hasOwnProperty(var_id)) {
                lightbox_download.widget_type = EFFECTS[var_id].widget_type;
            } else {
                lightbox_download.widget_type = EFFECTS[orig_lid].widget_type;
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(orig_lid)) {
                lightbox_download.lightbox_name = DIGIOH_LIGHTBOX_NAMES[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(var_id)) {
                lightbox_download.variation_name = DIGIOH_LIGHTBOX_NAMES[var_id];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(orig_lid)) {
                lightbox_download.lightbox_short_id = DIGIOH_LIGHTBOX_IDS[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(var_id)) {
                lightbox_download.variation_short_id = DIGIOH_LIGHTBOX_IDS[var_id];
            }

            KEEN_CLIENT.addEvent("lightbox_download", lightbox_download, function (res, err) {
                if (res && typeof res === 'object' && res.hasOwnProperty('created') && res.created === true) {
                    logger('keenLightboxDownload: success!');
                    logger(res);
                } else if (err) {
                    logErrorText("keenLightboxDownload_ERROR", "keenLightboxDownload_ERROR");
                }
                else {
                    logErrorText("keenLightboxDownload_ERROR_OTHER", "keenLightboxDownload_ERROR_OTHER");
                }
            });

            LIGHTBOX_OPEN_TIME = TOTAL_TIME;
        }
        catch (e) {
            logErrorText("keenLightboxDownload_EXCEPTION", "keenLightboxDownload_EXCEPTION");
        }
    }

    function keenLightboxSubmit(form_data, lid, sid) {
        try {
            var var_id = '';
            var orig_lid = lid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
                var_id = lid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
            }

            var ab_test_id = '';
            if (var_id != '' && AB_BOXES_TAKE_MAP.hasOwnProperty(var_id)) {
                ab_test_id = AB_BOXES_TAKE_MAP[var_id];
            } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(orig_lid)) {
                ab_test_id = AB_BOXES_TAKE_MAP[orig_lid];
            }

            if (!WAS_SUBMIT_REGISTERED.hasOwnProperty(orig_lid)) {
                WAS_SUBMIT_REGISTERED[orig_lid] = 0;
            }
            WAS_SUBMIT_REGISTERED[orig_lid]++;

            if (!IS_PREVIEW) {
                if (!WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid)) {
                    logErrorText("IMPRESSION_NOT_FOUND_INVALID_SUBMIT", "IMPRESSION_NOT_FOUND_INVALID_SUBMIT");
                    return;
                }

                if (WAS_SUBMIT_REGISTERED[orig_lid] > 5) {
                    logErrorText("MAX_SUBMIT_COUNT_REACHED", "MAX_SUBMIT_COUNT_REACHED");
                    return;
                }

                if (BLIP_MATCHED === 1) {
                    logErrorText("BLIP_MATCHED_INVALID_SUBMIT", "BLIP_MATCHED_INVALID_SUBMIT");
                    return;
                }
            }

            updateKeenSchemaBeforeSending();

            var lightbox_submit = KEEN_SCHEMA;
            lightbox_submit.event_id = generateGuid();
            lightbox_submit.submission_id = sid;
            lightbox_submit.lightbox_id = orig_lid;
            lightbox_submit.variation_id = var_id;
            lightbox_submit.ab_test_id = ab_test_id;
            lightbox_submit.lightbox_open_time = TOTAL_TIME - LIGHTBOX_OPEN_TIME;
            lightbox_submit.page_total_time = TOTAL_TIME;
            lightbox_submit.page_active_time = TOTAL_TIME - IDLE_TIME;
            lightbox_submit.page_idle_time = IDLE_TIME;
            lightbox_submit.impressions_on_page = (WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid) ? WAS_IMPRESSION_REGISTERED[orig_lid] : 0);
            lightbox_submit.submits_on_page = WAS_SUBMIT_REGISTERED[orig_lid];

            if (var_id && EFFECTS.hasOwnProperty(var_id)) {
                lightbox_submit.widget_type = EFFECTS[var_id].widget_type;
            } else {
                lightbox_submit.widget_type = EFFECTS[orig_lid].widget_type;
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(orig_lid)) {
                lightbox_submit.lightbox_name = DIGIOH_LIGHTBOX_NAMES[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(var_id)) {
                lightbox_submit.variation_name = DIGIOH_LIGHTBOX_NAMES[var_id];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(orig_lid)) {
                lightbox_submit.lightbox_short_id = DIGIOH_LIGHTBOX_IDS[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(var_id)) {
                lightbox_submit.variation_short_id = DIGIOH_LIGHTBOX_IDS[var_id];
            }

            var submit_schema = mergeObjectData(lightbox_submit, form_data);

            KEEN_CLIENT.addEvent("lightbox_submit", submit_schema, function (res, err) {
                if (res && typeof res === 'object' && res.hasOwnProperty('created') && res.created === true) {
                    logger('keenLightboxSubmit: success!');
                    logger(res);
                } else if (err) {
                    logErrorText("keenLightboxSubmit_ERROR", "keenLightboxSubmit_ERROR");
                }
                else {
                    logErrorText("keenLightboxSubmit_ERROR_OTHER", "keenLightboxSubmit_ERROR_OTHER");
                }
            });
        }
        catch (e) {
            logErrorText("keenLightboxSubmit_EXCEPTION", "keenLightboxSubmit_EXCEPTION");
        }
    }

    function keenLightboxPageChange(lid, page_prefix) {
        try {
            var event_guid = generateGuid();

            var var_id = '';
            var orig_lid = lid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
                var_id = lid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
            }

            var ab_test_id = '';
            if (var_id != '' && AB_BOXES_TAKE_MAP.hasOwnProperty(var_id)) {
                ab_test_id = AB_BOXES_TAKE_MAP[var_id];
            } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(orig_lid)) {
                ab_test_id = AB_BOXES_TAKE_MAP[orig_lid];
            }

            //if (!WAS_DOWNLOAD_REGISTERED.hasOwnProperty(orig_lid)) {
            //    WAS_DOWNLOAD_REGISTERED[orig_lid] = 0;
            //}
            //WAS_DOWNLOAD_REGISTERED[orig_lid]++;

            if (!IS_PREVIEW) {
                if (!WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid)) {
                    logErrorText("IMPRESSION_NOT_FOUND_INVALID_PAGE_CHANGE", "IMPRESSION_NOT_FOUND_INVALID_PAGE_CHANGE");
                    return;
                }

                //if (WAS_DOWNLOAD_REGISTERED[orig_lid] > 5) {
                //    logErrorText("MAX_DOWNLOAD_COUNT_REACHED", "MAX_DOWNLOAD_COUNT_REACHED");
                //    return;
                //}

                if (BLIP_MATCHED === 1) {
                    logErrorText("BLIP_MATCHED_INVALID_PAGE_CHANGE", "BLIP_MATCHED_INVALID_PAGE_CHANGE");
                    return;
                }
            }

            if (page_prefix === '' || page_prefix === 'main') {
                page_prefix = 'main_page';
            } else if (page_prefix === 'thx' || page_prefix === 'thx_') {
                page_prefix = 'thank_you_page';
            } else if (page_prefix === 'ep1' || page_prefix === 'ep1_') {
                page_prefix = 'extra_page_1';
            } else if (page_prefix === 'ep2' || page_prefix === 'ep2_') {
                page_prefix = 'extra_page_2';
            } else if (page_prefix === 'ep3' || page_prefix === 'ep3_') {
                page_prefix = 'extra_page_3';
            } else if (page_prefix === 'ep4' || page_prefix === 'ep4_') {
                page_prefix = 'extra_page_4';
            }

            updateKeenSchemaBeforeSending();

            var lightbox_page_change = KEEN_SCHEMA;
            lightbox_page_change.event_id = event_guid;
            lightbox_page_change.lightbox_id = orig_lid;
            lightbox_page_change.variation_id = var_id;
            lightbox_page_change.ab_test_id = ab_test_id;
            lightbox_page_change.page_total_time = TOTAL_TIME;
            lightbox_page_change.page_active_time = TOTAL_TIME - IDLE_TIME;
            lightbox_page_change.page_idle_time = IDLE_TIME;
            lightbox_page_change.impressions_on_page = (WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid) ? WAS_IMPRESSION_REGISTERED[orig_lid] : 0);
            lightbox_page_change.page_name = page_prefix;

            if (var_id && EFFECTS.hasOwnProperty(var_id)) {
                lightbox_page_change.widget_type = EFFECTS[var_id].widget_type;
            } else {
                lightbox_page_change.widget_type = EFFECTS[orig_lid].widget_type;
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(orig_lid)) {
                lightbox_page_change.lightbox_name = DIGIOH_LIGHTBOX_NAMES[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(var_id)) {
                lightbox_page_change.variation_name = DIGIOH_LIGHTBOX_NAMES[var_id];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(orig_lid)) {
                lightbox_page_change.lightbox_short_id = DIGIOH_LIGHTBOX_IDS[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(var_id)) {
                lightbox_page_change.variation_short_id = DIGIOH_LIGHTBOX_IDS[var_id];
            }

            KEEN_CLIENT.addEvent("lightbox_page_change", lightbox_page_change, function (res, err) {
                if (res && typeof res === 'object' && res.hasOwnProperty('created') && res.created === true) {
                    logger('keenLightboxPageChange: success!');
                    logger(res);
                } else if (err) {
                    logErrorText("keenLightboxPageChange_ERROR", "keenLightboxPageChange_ERROR");
                }
                else {
                    logErrorText("keenLightboxPageChange_ERROR_OTHER", "keenLightboxPageChange_ERROR_OTHER");
                }
            });

            LIGHTBOX_OPEN_TIME = TOTAL_TIME;
        }
        catch (e) {
            logErrorText("keenLightboxPageChange_EXCEPTION", "keenLightboxPageChange_EXCEPTION");
        }
    }

    function keenLightboxDebug(lid, additional_data_obj) {
        try {
            var event_guid = generateGuid();

            var var_id = '';
            var orig_lid = lid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
                var_id = lid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
            }

            var ab_test_id = '';
            if (var_id != '' && AB_BOXES_TAKE_MAP.hasOwnProperty(var_id)) {
                ab_test_id = AB_BOXES_TAKE_MAP[var_id];
            } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(orig_lid)) {
                ab_test_id = AB_BOXES_TAKE_MAP[orig_lid];
            }

            updateKeenSchemaBeforeSending();

            var lightbox_debug = KEEN_SCHEMA;
            lightbox_debug.event_id = event_guid;
            lightbox_debug.lightbox_id = orig_lid;
            lightbox_debug.variation_id = var_id;
            lightbox_debug.ab_test_id = ab_test_id;
            lightbox_debug.page_total_time = TOTAL_TIME;
            lightbox_debug.page_active_time = TOTAL_TIME - IDLE_TIME;
            lightbox_debug.page_idle_time = IDLE_TIME;
            lightbox_debug.impressions_on_page = (WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid) ? WAS_IMPRESSION_REGISTERED[orig_lid] : 0);

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(orig_lid)) {
                lightbox_debug.lightbox_name = DIGIOH_LIGHTBOX_NAMES[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_NAMES.hasOwnProperty(var_id)) {
                lightbox_debug.variation_name = DIGIOH_LIGHTBOX_NAMES[var_id];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(orig_lid)) {
                lightbox_debug.lightbox_short_id = DIGIOH_LIGHTBOX_IDS[orig_lid];
            }

            if (DIGIOH_LIGHTBOX_IDS.hasOwnProperty(var_id)) {
                lightbox_debug.variation_short_id = DIGIOH_LIGHTBOX_IDS[var_id];
            }

            if (typeof additional_data_obj !== 'undefined' && additional_data_obj !== null) {
                var debug_schema = mergeObjectData(lightbox_debug, additional_data_obj);
                KEEN_CLIENT.addEvent("lightbox_debug", debug_schema);
            } else {
                KEEN_CLIENT.addEvent("lightbox_debug", lightbox_debug);
            }
        }
        catch (e) {
            logError(e, "keenLightboxDebug");
        }
    }

    function updateKeenSchemaBeforeSending() {
        try {
            KEEN_SCHEMA.geoip = {
                ip_address: DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address,
                continent_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.continent,
                country_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.country,
                country_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.country_name,
                region_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.state,
                region_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.region_name,
                city: DIGIOH_LIGHTBOX_ANALYTICS.VARS.city,
                zipcode: DIGIOH_LIGHTBOX_ANALYTICS.VARS.zipcode,
                metro_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.metro_code,
                time_zone: DIGIOH_LIGHTBOX_ANALYTICS.VARS.time_zone,
                area_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.area_code,
                latitude: DIGIOH_LIGHTBOX_ANALYTICS.VARS.latitude,
                longitude: DIGIOH_LIGHTBOX_ANALYTICS.VARS.longitude,
                geo_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.geo_source,
                blip_matched: BLIP_MATCHED
            };

            KEEN_SCHEMA.device_atlas = {
                primaryHardwareType: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType,
                isApp: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isApp,
                isTablet: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isTablet,
                isMobilePhone: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.isMobilePhone,
                model: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.model,
                vendor: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.vendor,
                touchScreen: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.touchScreen,
                osName: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.osName,
                osVersion: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.osVersion,
                browserName: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.browserName,
                browserVersion: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.browserVersion,
                osAndroid: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.osAndroid,
                osiOs: DIGIOH_LIGHTBOX_ANALYTICS.VARS.DeviceAtlas.osiOs,
                device_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.device_source
            };

            KEEN_SCHEMA.device = {
                hardware: DIGIOH_LIGHTBOX_ANALYTICS.VARS.device,
                os: DIGIOH_LIGHTBOX_ANALYTICS.VARS.operating_system,
                browser_type: DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type,
                browser_version: DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_version
            };

            KEEN_SCHEMA.entry_point = {
                referrer_url: DIGIOH_LIGHTBOX_ANALYTICS.VARS.referring_website_url,
                landing_page_url: DIGIOH_LIGHTBOX_ANALYTICS.VARS.landing_page,
                landing_page_ip: DIGIOH_LIGHTBOX_ANALYTICS.VARS.landing_page_ip,
                landing_page_date: DIGIOH_LIGHTBOX_ANALYTICS.VARS.date_of_visit,
                web_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.web_source,
                past_visits: DIGIOH_LIGHTBOX_ANALYTICS.VARS.past_visits,
                page_visits: DIGIOH_LIGHTBOX_ANALYTICS.VARS.page_visits,
                search_engine: DIGIOH_LIGHTBOX_ANALYTICS.VARS.search_engine,
                utm_campaign_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_source,
                utm_campaign_medium: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_medium,
                utm_campaign_term: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_term,
                utm_campaign_content: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_content,
                utm_campaign_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_name
            };
        }
        catch (e) {
            logError(e, "updateKeenSchemaBeforeSending");
        }
    }

    function postToKeen(post_query, lid, sid) {
        try {
            //var src = "https://account.digioh.com/Keen/PostToKeen";
            //var parent_base_dom_lower = document.location.href.toLowerCase().replace("https://", "").replace("http://", "");
            //if (parent_base_dom_lower.indexOf("lightbox-robert.azurewebsites.net") == 0) {
            //    src = "https://lightbox-robert.azurewebsites.net/Keen/PostToKeen";
            //} else if (parent_base_dom_lower.indexOf("lightbox-staging.azurewebsites.net") == 0) {
            //    src = "https://lightbox-staging.azurewebsites.net/Keen/PostToKeen";
            //}

            var src = "https://lightboxsubmit.azurewebsites.net/Keen/PostToKeen";

            //if (IS_DEV) {
            //    src = "https://lightbox-robert.azurewebsites.net/Keen/PostToKeen";
            //}

            var var_id = '';
            var orig_lid = lid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
                var_id = lid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
            }

            var ab_test_id = '';
            if (var_id != '' && AB_BOXES_TAKE_MAP.hasOwnProperty(var_id)) {
                ab_test_id = AB_BOXES_TAKE_MAP[var_id];
            } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(orig_lid)) {
                ab_test_id = AB_BOXES_TAKE_MAP[orig_lid];
            }


            if (!IS_PREVIEW) {
                if (!WAS_IMPRESSION_REGISTERED.hasOwnProperty(orig_lid)) {
                    logger("IMPRESSION_NOT_FOUND_INVALID_SUBMIT_POSTTOKEEN", "IMPRESSION_NOT_FOUND_INVALID_SUBMIT_POSTTOKEEN");
                    return;
                }

                if (WAS_SUBMIT_REGISTERED.hasOwnProperty(orig_lid) && WAS_SUBMIT_REGISTERED[orig_lid] > 5) {
                    logger("MAX_SUBMIT_COUNT_REACHED_POSTTOKEEN", "MAX_SUBMIT_COUNT_REACHED_POSTTOKEEN");
                    return;
                }

                if (BLIP_MATCHED === 1) {
                    logger("BLIP_MATCHED_INVALID_SUBMIT_POSTTOKEEN", "BLIP_MATCHED_INVALID_SUBMIT_POSTTOKEEN");
                    return;
                }
            }


            var required_params = '';
            required_params += '_uid=' + VENDOR_GUID + '&';
            required_params += '_lid=' + orig_lid + '&';
            required_params += '_vid=' + var_id + '&';
            required_params += '_tid=' + ab_test_id + '&';
            required_params += '_cid=' + CLIENT_GUID + '&';
            required_params += '_sid=' + sid + '&';

            var query = "?" + required_params + post_query;

            var extended_data = {};
            //extended_data.entry_point = {};

            extended_data.g = {};
            //extended_data.g.c = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.city);
            //extended_data.g.rn = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.region_name);
            //extended_data.g.cc = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.country);
            //extended_data.g.cn = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.country_name);
            //extended_data.g.co = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.continent);
            //extended_data.g.ip = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address);
            //extended_data.g.z = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.zipcode);

            //extended_data.ws = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.web_source);
            //extended_data.se = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.search_engine);
            //extended_data.pv = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.page_visits);
            //extended_data.pa = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.past_visits);
            //extended_data.rurl = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.referring_website_url);
            //extended_data.lurl = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.landing_page);

            //extended_data.dev = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.device);
            //extended_data.bt = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type);
            //extended_data.bv = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_version);
            //extended_data.os = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.operating_system);

            //extended_data.ldt = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.date_of_visit);

            //extended_data.utm_s = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_source);
            //extended_data.utm_m = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_medium);
            //extended_data.utm_t = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_term);
            //extended_data.utm_c = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_content);
            //extended_data.utm_n = encodeURIComponent(DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_name);

            //if (IS_DEV) extended_data.is_dev = 1;
            //else extended_data.is_dev = 0;

            //if (IS_PREVIEW) extended_data.is_prev = 1;
            //else extended_data.is_prev = 0;
            var qsext = "";
            qsext += (DIGIOH_LIGHTBOX_ANALYTICS.VARS.city || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.region_name || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.country || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.country_name || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.continent || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.zipcode || '');

            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.web_source || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.search_engine || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.page_visits || '0');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.past_visits || '0');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.referring_website_url || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.landing_page || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.current_page_url || '');

            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.device || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_version || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.operating_system || '');

            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.date_of_visit || '');

            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_source || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_medium || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_term || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_content || '');
            qsext += "|_-_|" + (DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_name || '');

            if (IS_DEV) qsext += "|_-_|1";
            else qsext += "|_-_|0";

            if (IS_PREVIEW) qsext += "|_-_|1";
            else qsext += "|_-_|0";

            //query += "_ed=" + LZString.compressToBase64(JSON.stringify(extended_data));
            query += "&_ext=" + LZString.compressToBase64(qsext);




            //Integrations Custom Mapping
            if (window.DIGIOH_API.LIGHTBOX.hasOwnProperty('INTEGRATION_MAP') && window.DIGIOH_API.LIGHTBOX.INTEGRATION_MAP !== null && typeof window.DIGIOH_API.LIGHTBOX.INTEGRATION_MAP === 'object') {
                var iov = '';

                for (var iprop in window.DIGIOH_API.LIGHTBOX.INTEGRATION_MAP) {
                    if (window.DIGIOH_API.LIGHTBOX.INTEGRATION_MAP.hasOwnProperty(iprop)) {
                        if (iov !== '') {
                            iov += '|';
                        }
                        iov += iprop + '=' + window.DIGIOH_API.LIGHTBOX.INTEGRATION_MAP[iprop];
                    }
                }

                if (iov !== '') {
                    query += "&_iov=" + LZString.compressToBase64(iov);
                }
            }



            var img = new Image();
            img.src = (src + query);
        }
        catch (e) {
            logError(e, "postToKeen");
        }
    }

    function initAnalytics() {
        try {
            DIGIOH_LIGHTBOX_ANALYTICS.onDocumentReady();
            DIGIOH_LIGHTBOX_ANALYTICS.loadAllVars();
            DIGIOH_LIGHTBOX_ANALYTICS.VARS.IsLoaded = true;

            startIdleTimer();
            initKeenSchema();

            //analyticsPageview();


            //logger(DIGIOH_LIGHTBOX_ANALYTICS.VARS, true);
        }
        catch (e) {
            logError(e, "initAnalytics");
        }
    }

    function embedInlineLightboxConditionsForms() {
        try {
            if (!isEmbedInlineLightboxConditionsFormsFinished) {
                isEmbedInlineLightboxConditionsFormsFinished = true;
                for (var i = 0; i < DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR.length; i++) {
                    if (IS_PREVIEW || checkConditions('', DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[i], '') === DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[i]) {
                        embedInlineLightboxForm(DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[i]);
                        DIGIOH_LIGHTBOX_INLINE_DISPLAYED.push(DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[i]);
                    }
                }
            }
        }
        catch (e) {
            logError(e, "embedInlineLightboxConditionsForms");
        }
    }

    function keepSendingResizeToChildUntilReceived(resize_obj, lbid, retry_delay, cnt) {
        try {
            var resizeReceivedByChild = sendMessageToIframe(resize_obj, lbid);
            if (!resizeReceivedByChild && cnt * retry_delay < 5000) {
                if (EFFECTS[lbid].widget_type === 'inline' || LIGHTBOX_GUID === lbid)
                    window.setTimeout(function () {
                        keepSendingResizeToChildUntilReceived(resize_obj, lbid, retry_delay, cnt + 1);
                    }, retry_delay);
            } else if (cnt > 0 && resizeReceivedByChild) {
                logger('DIGIOH:  keepSendingResizeToChildUntilReceived: ' + cnt + ' misses before SUCCEEDING: ' + lbid);
            } else if (!resizeReceivedByChild && cnt * retry_delay >= 5000) {
                logger('DIGIOH:  keepSendingResizeToChildUntilReceived: ' + cnt + ' misses before FAILING: ' + lbid);
            }
        }
        catch (e) {
            logError(e, "keepSendingResizeToChildUntilReceived");
        }
    }

    function getPagePref(lbid) {
        try {
            var pref = '';
            if (CURRENT_PAGE.hasOwnProperty(lbid) && CURRENT_PAGE[lbid] !== '' && CURRENT_PAGE[lbid] !== 'main' && CURRENT_PAGE[lbid]) {
                pref = CURRENT_PAGE[lbid];
            }

            return pref;
        }
        catch (e) {
            logError(e, "getPagePref");
            return '';
        }
    }

    function responsiveResizeCheck(trigger_source) {
        try {
            if (LIGHTBOX_GUID && LIGHTBOX_GUID !== '' && EFFECTS[LIGHTBOX_GUID].widget_type !== 'inline') {
                var dom_id = getLightboxDomId(LIGHTBOX_GUID);

                var pref = getPagePref(LIGHTBOX_GUID);

                //logger('DIGIOH: responsiveResizeCheck from ' + trigger_source);

                if (EFFECTS[LIGHTBOX_GUID].hasOwnProperty(pref + 'responsive') && EFFECTS[LIGHTBOX_GUID][pref + 'responsive'].use) {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);

                    CURRENT_PAGE_DIMS_RESPONSIVE[LIGHTBOX_GUID] = { width: dims_obj.width, height: dims_obj.height };

                    if (EFFECTS[LIGHTBOX_GUID].widget_type === 'sidebar') {
                        if (FOCUSED_SIDEBAR_BANNER_GUIDS.hasOwnProperty(LIGHTBOX_GUID) && FOCUSED_SIDEBAR_BANNER_GUIDS[LIGHTBOX_GUID] && isMobile()) {
                            if (trigger_source === 'mobile_orientation_change') {
                                JQUERY_DIGIOH('#' + dom_id).attr('style', getSidebarPositionMobileFocused(EFFECTS[LIGHTBOX_GUID].sidebar, LIGHTBOX_GUID));
                            } else {
                                return;
                            }
                        } else {
                            JQUERY_DIGIOH('#' + dom_id).attr('style', getSidebarPositionAfterAnimation(EFFECTS[LIGHTBOX_GUID].sidebar, LIGHTBOX_GUID));
                        }
                    }

                    if (EFFECTS[LIGHTBOX_GUID].widget_type === 'banner') {
                        if (FOCUSED_SIDEBAR_BANNER_GUIDS.hasOwnProperty(LIGHTBOX_GUID) && FOCUSED_SIDEBAR_BANNER_GUIDS[LIGHTBOX_GUID] && isMobile()) {
                            if (trigger_source === 'mobile_orientation_change') {
                                JQUERY_DIGIOH('#' + dom_id).attr('style', getBannerPositionMobileFocused(EFFECTS[LIGHTBOX_GUID].banner, LIGHTBOX_GUID));
                            } else {
                                return;
                            }
                        } else {
                            JQUERY_DIGIOH('#' + dom_id).attr('style', getBannerPosition(EFFECTS[LIGHTBOX_GUID].banner, LIGHTBOX_GUID));
                        }

                        if (!EFFECTS[LIGHTBOX_GUID].banner.hasOwnProperty('placement') || EFFECTS[LIGHTBOX_GUID].banner.placement !== 'bottom') {
                            if (JQUERY_DIGIOH('#digioh-banner-spacer-' + LIGHTBOX_GUID).length) {
                                var banner_height = getResponsiveBoxHeight(LIGHTBOX_GUID);
                                JQUERY_DIGIOH('#digioh-banner-spacer-' + LIGHTBOX_GUID).height(banner_height);
                            }
                        }
                    }

                    if (EFFECTS[LIGHTBOX_GUID].widget_type === 'fancybox') {
                        FANCY_REPOSITION_LOCKED[LIGHTBOX_GUID] = true;

                        var left_new = Math.round(((jqWin.width() - dims_obj.width) / 2) + jqWin.scrollLeft());
                        var top_new = Math.round(((jqWin.height() - dims_obj.height) / 2) + jqWin.scrollTop());

                        var wrap = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first');
                        wrap.css({ 'left': left_new, 'top': top_new, 'width': dims_obj.width + 'px', 'height': dims_obj.height + 'px' });

                        JQUERY_DIGIOH('#' + dom_id).css({ 'left': left_new, 'top': top_new, 'width': dims_obj.width + 'px', 'height': dims_obj.height + 'px' });

                        //logger('Lightbox (window.resize): ' + 'left=' + left_new + ', top=' + top_new + ', width=' + dims_obj.width + 'px' + ', height=' + dims_obj.height + 'px');
                    }

                    keepSendingResizeToChildUntilReceived({ sender: 'digioh', action: 'dimensions_changed', widget_type: EFFECTS[LIGHTBOX_GUID].widget_type, width: dims_obj.width, height: dims_obj.height }, LIGHTBOX_GUID, 100, 0);
                }
            }

            for (var i = 0; i < DIGIOH_LIGHTBOX_INLINE_DISPLAYED.length; i++) {
                var lbid = DIGIOH_LIGHTBOX_INLINE_DISPLAYED[i];
                var dom_id = getLightboxDomId(lbid);

                var pref = getPagePref(lbid);

                if (EFFECTS[lbid].widget_type === 'inline' && EFFECTS[lbid].hasOwnProperty(pref + 'responsive') && EFFECTS[lbid][pref + 'responsive'].use && JQUERY_DIGIOH('#' + dom_id).length) {
                    inlineResponsiveResizing(lbid, dom_id, (new Date().getTime()), 0, 0);
                }
            }
        }
        catch (e) {
            logError(e, "responsiveResizeCheck");
        }
    }

    function doOnOrientationChange() {
        try {
            responsiveResizeCheck('mobile_orientation_change');
            window.setTimeout(function () {
                responsiveResizeCheck('mobile_orientation_change');
            }, 350);
            window.setTimeout(function () {
                responsiveResizeCheck('mobile_orientation_change');
            }, 850);
        }
        catch (e) {
            logError(e, "doOnOrientationChange");
        }
    }

    function responsiveResizeOnWindowResize() {
        try {
            jqWin.resize(function () {
                responsiveResizeCheck('window_resize');
            });
        }
        catch (e) {
            logError(e, "responsiveResizeOnWindowResize");
        }
    }

    function initConditions() {
        try {
            if (!IS_PREVIEW) {
                initABSplitTests();
                initVariations();
                initLightboxActivity();
                buildConditionSelectorsToBoxesMap();

                responsiveResizeOnWindowResize();

                if (isMobile()) {
                    window.addEventListener('orientationchange', doOnOrientationChange);
                }

                embedInlineLightboxAlwaysForms();
                embedInlineLightboxConditionsForms();

                //logger(DIGIOH_LIGHTBOX_CONDITIONS);
                //logger(CONDITION_SELECTOR_BOXES_MAP);

                logger('DIGIOH: checkLightboxMasterRules() called from initConditions()');

                if (checkLightboxMasterRules()) {
                    preloadLightboxes();

                    if (VENDOR_GUID != "13511-7341134d-8e07-40ab-b595-a3d69d7a4501" || document.location.href.indexOf("ecospaints.net/shop-by-color-reds") !== -1) {
                        checkConditionsPreloadTeasers();
                    }

                    initExistsSelectors();
                    initClickSelectors();
                    initHoverSelectors();
                    initScrollSelectors();
                    initExitSelectors();

                    checkConditionsLoad();
                }
            } else {
                initVariations();

                embedInlineLightboxAlwaysForms();
                embedInlineLightboxConditionsForms();

                responsiveResizeOnWindowResize();

                if (isMobile()) {
                    window.addEventListener('orientationchange', doOnOrientationChange);
                }

                LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;

                if (typeof IS_VARIATION_PREVIEW !== 'undefined' && IS_VARIATION_PREVIEW === 'true' && VARIATION_GUID_PREVIEW && VARIATION_GUID_PREVIEW.length > 7) {
                    if (!LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(LIGHTBOX_GUID)) {
                        LIGHTBOX_TO_VARIATION_MAP[LIGHTBOX_GUID] = VARIATION_GUID_PREVIEW;
                    }

                    if (!DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(VARIATION_GUID_PREVIEW)) {
                        DIGIOH_VARIATION_TO_BOX_MAP[VARIATION_GUID_PREVIEW] = LIGHTBOX_GUID_PREVIEW;
                    }

                    LIGHTBOX_GUID = VARIATION_GUID_PREVIEW;
                    LIGHTBOX_GUID_PREVIEW = VARIATION_GUID_PREVIEW;
                }

                if (!EFFECTS.hasOwnProperty(LIGHTBOX_GUID)) {
                    EFFECTS[LIGHTBOX_GUID] = new DIGIOH_DEFAULT_EFFECTS();
                }

                var effects = EFFECTS[LIGHTBOX_GUID];

                IS_PREVIEW_EVENT = (IS_PREVIEW_CLICK || IS_PREVIEW_HOVER || IS_PREVIEW_SCROLL || IS_PREVIEW_EXIT);

                //preloadIframe(LIGHTBOX_GUID);
                preloadLightboxes();

                logger(DIGIOH_LIGHTBOX_PRELOAD_ARR);

                //logger("effects.widget_type = " + effects.widget_type);

                if (VENDOR_GUID != "13511-7341134d-8e07-40ab-b595-a3d69d7a4501" || document.location.href.indexOf("ecospaints.net/shop-by-color-reds") !== -1) {
                    if (effects.widget_type == "sidebar" && effects.sidebar.teaser && effects.sidebar.teaser.display_on_page_load) {
                        openTeaser(effects.sidebar.teaser, LIGHTBOX_GUID);
                    } else if (effects.widget_type == "fancybox" && effects.fancybox.teaser && effects.fancybox.teaser.display_on_page_load) {
                        openTeaser(effects.fancybox.teaser, LIGHTBOX_GUID);
                    }
                }

                LIGHTBOX_GUID = '';

                if (typeof IS_PREVIEW_CLICK !== "undefined" && IS_PREVIEW_CLICK) {
                    JQUERY_DIGIOH("#preview_click_selector").click(function (e) {
                        e.preventDefault();
                        if (LIGHTBOX_GUID == '') {
                            LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                            DIGIOH_LIGHTBOX_ANALYTICS.VARS.click_jquery_selector["#preview_click_selector"] = true;
                            loadLightbox();
                            DIGIOH_LIGHTBOX_ANALYTICS.VARS.click_jquery_selector["#preview_click_selector"] = false;
                        }
                    });
                } else if (typeof IS_PREVIEW_HOVER !== "undefined" && IS_PREVIEW_HOVER) {
                    DIGIOH_LIGHTBOX_ANALYTICS.VARS.hover_jquery_selector["#preview_hover_selector"] = false;
                    JQUERY_DIGIOH("#preview_hover_selector").mouseenter(function () {
                        if (LIGHTBOX_GUID == '') {
                            LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                            DIGIOH_LIGHTBOX_ANALYTICS.VARS.hover_jquery_selector["#preview_hover_selector"] = true;
                            loadLightbox();
                        }
                    }).mouseleave(function () {
                        DIGIOH_LIGHTBOX_ANALYTICS.VARS.hover_jquery_selector["#preview_hover_selector"] = false;
                    });
                } else if (typeof IS_PREVIEW_SCROLL !== "undefined" && IS_PREVIEW_SCROLL) {
                    DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels_prev = 0;
                    DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels = 0;
                    jqWin.scroll(function () {
                        DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels = Math.round(jqWin.scrollTop());
                        if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels < DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels_prev) {
                            DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels_prev = DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels;
                        }

                        if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels >= 300 + DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels_prev) {
                            if (LIGHTBOX_GUID == '') {
                                LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                                DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels_prev = DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels;
                                loadLightbox();
                            }
                        }
                    });
                } else if (typeof IS_PREVIEW_EXIT !== "undefined" && IS_PREVIEW_EXIT) {
                    var mousex = -1;
                    var mousey = -1;
                    var lastmousex = -1;
                    var lastmousey = -1;
                    var lastmousetime;
                    var mousetravel = 0;

                    var directionx = '';
                    var directiony = '';

                    var pageWidth = jqWin.width();
                    var pageHeight = jqWin.height();
                    var yOffset = jqWin.scrollTop();

                    jqDoc.mousemove(function (e) {
                        mousex = e.pageX;
                        mousey = e.pageY;

                        if (lastmousex > -1) {
                            mousetravel = Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));

                            if (mousex < lastmousex) directionx = 'left';
                            else directionx = 'right';

                            if (mousey < lastmousey) directiony = 'up';
                            else directiony = 'down';
                        }


                        lastmousex = mousex;
                        lastmousey = mousey;
                    });

                    jqDoc.mouseleave(function () {
                        var yOffset = jqWin.scrollTop();

                        if (LIGHTBOX_GUID == '') {
                            if (directiony == 'up' && mousey < yOffset + 20 && mousetravel > 3) {
                                LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                                loadLightbox();
                            } else if (directiony == 'down' && mousey > pageHeight + yOffset - 20 && mousetravel > 3) {
                                LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                                loadLightbox();
                            } else if (directionx == 'right' && mousex > pageWidth - 20 && mousetravel > 3) {
                                LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                                loadLightbox();
                            } else if (directionx == 'left' && mousex < 20 && mousetravel > 3) {
                                LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                                loadLightbox();
                            }
                        }
                    });

                    jqWin.resize(function () {
                        pageWidth = jqWin.width();
                        pageHeight = jqWin.height();
                        yOffset = jqWin.scrollTop();
                    });
                } else {
                    LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                }

                if (EFFECTS[LIGHTBOX_GUID_PREVIEW].hasOwnProperty('iframe') && EFFECTS[LIGHTBOX_GUID_PREVIEW]['iframe']['use_custom']) {
                    if (typeof DigiohPreviewOnScriptLoaded !== "undefined") {
                        DigiohPreviewOnScriptLoaded();
                    }

                    if (!IS_PREVIEW_EVENT) {
                        window.setTimeout(loadLightbox, 500);
                    }
                }

            }
        }
        catch (e) {
            logError(e, "initConditions");
        }
    }

    function buildConditionSelectorsToBoxesMap() {
        try {
            var rule_prop = '';
            var rule_operator = '';
            var rule_val = '';
            var rule_set = [];
            var lbid = '';
            var event_type = '';

            CONDITION_SELECTOR_BOXES_MAP['click'] = {};
            CONDITION_SELECTOR_BOXES_MAP['hover'] = {};
            CONDITION_SELECTOR_BOXES_MAP['exists'] = {};

            for (var i = 0; i < DIGIOH_LIGHTBOX_CONDITIONS.length; i++) {
                DIGIOH_LIGHTBOX_CONDITIONS[i].has_only_load_rules = false;
                DIGIOH_LIGHTBOX_CONDITIONS[i].has_exists_rules = false;
                DIGIOH_LIGHTBOX_CONDITIONS[i].has_click_rules = false;
                DIGIOH_LIGHTBOX_CONDITIONS[i].has_hover_rules = false;
                DIGIOH_LIGHTBOX_CONDITIONS[i].has_scroll_rules = false;
                DIGIOH_LIGHTBOX_CONDITIONS[i].has_exit_rules = false;
                DIGIOH_LIGHTBOX_CONDITIONS[i].has_time_rules = false;

                lbid = DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid;

                for (var x = 0; x < DIGIOH_LIGHTBOX_CONDITIONS[i].conditions.length; x++) {
                    for (var y = 0; y < DIGIOH_LIGHTBOX_CONDITIONS[i].conditions[x].length; y++) {
                        rule_prop = DIGIOH_LIGHTBOX_CONDITIONS[i].conditions[x][y]['p'];
                        rule_operator = DIGIOH_LIGHTBOX_CONDITIONS[i].conditions[x][y]['o'];
                        rule_val = DIGIOH_LIGHTBOX_CONDITIONS[i].conditions[x][y]['v'];
                        rule_set = DIGIOH_LIGHTBOX_CONDITIONS[i].conditions[x][y]['s'];
                        event_type = '';

                        if (rule_prop == 'I_total_time_seconds' || rule_prop == 'I_active_time_seconds' || rule_prop == 'I_idle_time_seconds') {
                            DIGIOH_LIGHTBOX_CONDITIONS[i].has_time_rules = true;
                            if (JQUERY_DIGIOH.inArray(lbid, TIME_BOXES_ARR) == -1) {
                                TIME_BOXES_ARR.push(lbid);
                            }
                        } else if (rule_prop == 'I_scroll_percent' || rule_prop == 'I_scroll_pixels') {
                            DIGIOH_LIGHTBOX_CONDITIONS[i].has_scroll_rules = true;
                            if (JQUERY_DIGIOH.inArray(lbid, SCROLL_BOXES_ARR) == -1) {
                                SCROLL_BOXES_ARR.push(lbid);
                            }
                        } else if (rule_prop == 'E_exit_intent') {
                            DIGIOH_LIGHTBOX_CONDITIONS[i].has_exit_rules = true;
                            if (JQUERY_DIGIOH.inArray(lbid, EXIT_BOXES_ARR) == -1) {
                                EXIT_BOXES_ARR.push(lbid);
                            }
                        } else if (rule_prop == 'C_click_jquery_selector') {
                            DIGIOH_LIGHTBOX_CONDITIONS[i].has_click_rules = true;
                            event_type = 'click';
                        } else if (rule_prop == 'C_hover_jquery_selector') {
                            DIGIOH_LIGHTBOX_CONDITIONS[i].has_hover_rules = true;
                            event_type = 'hover';
                        } else if (rule_prop == 'C_exists_jquery_selector') {
                            DIGIOH_LIGHTBOX_CONDITIONS[i].has_exists_rules = true;
                            event_type = 'exists';
                            logger('HTML Exists Rule: ' + lbid + ', ' + rule_val);
                        }

                        if (event_type != '') {
                            if (rule_operator == 'in_set' || rule_operator == 'not_in_set') {
                                for (var k = 0; k < rule_set.length; k++) {
                                    if (rule_set[k] != '') {
                                        if (!CONDITION_SELECTOR_BOXES_MAP[event_type].hasOwnProperty(rule_set[k])) {
                                            CONDITION_SELECTOR_BOXES_MAP[event_type][rule_set[k]] = [lbid];
                                        } else if (JQUERY_DIGIOH.inArray(lbid, CONDITION_SELECTOR_BOXES_MAP[event_type][rule_set[k]]) == -1) {
                                            CONDITION_SELECTOR_BOXES_MAP[event_type][rule_set[k]].push(lbid);
                                        }

                                        if (event_type == 'click' && JQUERY_DIGIOH.inArray(rule_set[k], CLICK_SELECTORS) == -1) {
                                            CLICK_SELECTORS.push(rule_set[k]);
                                        } else if (event_type == 'hover' && JQUERY_DIGIOH.inArray(rule_set[k], HOVER_SELECTORS) == -1) {
                                            HOVER_SELECTORS.push(rule_set[k]);
                                        } else if (event_type == 'exists' && JQUERY_DIGIOH.inArray(rule_set[k], EXISTS_SELECTORS) == -1) {
                                            EXISTS_SELECTORS.push(rule_set[k]);
                                        }
                                    }
                                }
                            } else {
                                if (rule_val != '') {
                                    if (!CONDITION_SELECTOR_BOXES_MAP[event_type].hasOwnProperty(rule_val)) {
                                        CONDITION_SELECTOR_BOXES_MAP[event_type][rule_val] = [lbid];
                                    } else if (JQUERY_DIGIOH.inArray(lbid, CONDITION_SELECTOR_BOXES_MAP[event_type][rule_val]) == -1) {
                                        CONDITION_SELECTOR_BOXES_MAP[event_type][rule_val].push(lbid);
                                    }

                                    if (event_type == 'click' && JQUERY_DIGIOH.inArray(rule_val, CLICK_SELECTORS) == -1) {
                                        CLICK_SELECTORS.push(rule_val);
                                    } else if (event_type == 'hover' && JQUERY_DIGIOH.inArray(rule_val, HOVER_SELECTORS) == -1) {
                                        HOVER_SELECTORS.push(rule_val);
                                    } else if (event_type == 'exists' && JQUERY_DIGIOH.inArray(rule_val, EXISTS_SELECTORS) == -1) {
                                        EXISTS_SELECTORS.push(rule_val);
                                    }
                                }
                            }
                        }

                    }
                }

                DIGIOH_LIGHTBOX_CONDITIONS[i].has_only_load_rules = !(DIGIOH_LIGHTBOX_CONDITIONS[i].has_click_rules ||
                                                                        DIGIOH_LIGHTBOX_CONDITIONS[i].has_hover_rules ||
                                                                        DIGIOH_LIGHTBOX_CONDITIONS[i].has_scroll_rules ||
                                                                        DIGIOH_LIGHTBOX_CONDITIONS[i].has_exit_rules ||
                                                                        DIGIOH_LIGHTBOX_CONDITIONS[i].has_time_rules);

            }
        }
        catch (e) {
            logError(e, "buildConditionSelectorsToBoxesMap");
        }
    }

    function doConditionsUseGeo() {
        try {
            var rule_prop = '';
            for (var i = 0; i < DIGIOH_LIGHTBOX_CONDITIONS.length; i++) {
                for (var x = 0; x < DIGIOH_LIGHTBOX_CONDITIONS[i].conditions.length; x++) {
                    for (var y = 0; y < DIGIOH_LIGHTBOX_CONDITIONS[i].conditions[x].length; y++) {
                        rule_prop = DIGIOH_LIGHTBOX_CONDITIONS[i].conditions[x][y]['p'];
                        if (rule_prop == 'E_continent' || rule_prop == 'E_country' || rule_prop == 'E_state' || rule_prop == 'S_city' || rule_prop == 'S_ip_address' || rule_prop == 'S_zipcode' || rule_prop == 'I_latitude' || rule_prop == 'I_longitude' || rule_prop == 'S_metro_code' || rule_prop == 'S_area_code') {
                            return true;
                        }
                    }
                }
            }
        }
        catch (e) {
            logError(e, "doConditionsUseGeo");
        }

        return false;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function initVariations() {
        var keepVariation = false;
        for (var variation_guid in DIGIOH_VARIATION_TO_BOX_MAP) {
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(variation_guid) && DIGIOH_VARIATION_TO_BOX_MAP[variation_guid].length > 7) {
                if (AB_BOXES_SKIP_MAP.hasOwnProperty(variation_guid)) {
                    keepVariation = false;
                } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(variation_guid)) {
                    keepVariation = true;
                } else if (DIGIOH_PRIMARY_VARIATIONS_ARR.length > 0 && DIGIOH_PRIMARY_VARIATIONS_ARR.join(',').indexOf(variation_guid) >= 0) {
                    keepVariation = true;
                } else {
                    keepVariation = false;
                }

                if (!keepVariation) {
                    if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(variation_guid)) {
                        //logger("Removed Variation from DIGIOH_VARIATION_TO_BOX_MAP: " + variation_guid + " > " + DIGIOH_VARIATION_TO_BOX_MAP[variation_guid]);
                        delete DIGIOH_VARIATION_TO_BOX_MAP[variation_guid];
                    }
                }
            }
        }

        for (var variation_guid in DIGIOH_VARIATION_TO_BOX_MAP) {
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(variation_guid) && DIGIOH_VARIATION_TO_BOX_MAP[variation_guid].length > 7) {
                if (AB_BOXES_SKIP_MAP.hasOwnProperty(variation_guid)) {
                    keepVariation = false;
                } else if (AB_BOXES_TAKE_MAP.hasOwnProperty(variation_guid)) {
                    keepVariation = true;
                } else if (DIGIOH_PRIMARY_VARIATIONS_ARR.length > 0 && DIGIOH_PRIMARY_VARIATIONS_ARR.join(',').indexOf(variation_guid) >= 0) {
                    keepVariation = true;
                } else {
                    keepVariation = false;
                }

                if (keepVariation) {
                    LIGHTBOX_TO_VARIATION_MAP[DIGIOH_VARIATION_TO_BOX_MAP[variation_guid]] = variation_guid;
                    //logger("Added Variation to LIGHTBOX_TO_VARIATION_MAP: " + DIGIOH_VARIATION_TO_BOX_MAP[variation_guid] + " > " + variation_guid);
                }
            }
        }

        //logger("Remaining Active Variations...");

        //for (var variation_guid in DIGIOH_VARIATION_TO_BOX_MAP) {
        //    if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(variation_guid)) {
        //        logger("DIGIOH_VARIATION_TO_BOX_MAP: " + variation_guid + " > " + DIGIOH_VARIATION_TO_BOX_MAP[variation_guid]);
        //    }
        //}

        //for (var box_guid in LIGHTBOX_TO_VARIATION_MAP) {
        //    if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(box_guid)) {
        //        logger("LIGHTBOX_TO_VARIATION_MAP: " + box_guid + " > " + LIGHTBOX_TO_VARIATION_MAP[box_guid]);
        //    }
        //}
    }

    var initABSplitTests = function () {
        try {
            if (typeof DIGIOH_SPLIT_TESTS_ARR === 'undefined') {
                return false;
            }

            var utcNowMillisJs = new Date().getTime();
            var foundMatch = false;
            var tp = getRandomInt(1, 100);
            var lp = getRandomInt(1, 100);
            var dist = 0;
            var test_type = 'multivariate';
            var skip = false;

            for (var i = 0; i < DIGIOH_SPLIT_TESTS_ARR.length; i++) {
                skip = false;

                if (!DIGIOH_SPLIT_TESTS_ARR[i].hasOwnProperty('test_type') || DIGIOH_SPLIT_TESTS_ARR[i].test_type == 'multivariate') {
                    test_type = 'multivariate';
                } else if (DIGIOH_SPLIT_TESTS_ARR[i].hasOwnProperty('test_type') && DIGIOH_SPLIT_TESTS_ARR[i].test_type == 'box_variation') {
                    test_type = 'box_variation';
                } else if (DIGIOH_SPLIT_TESTS_ARR[i].hasOwnProperty('test_type') && DIGIOH_SPLIT_TESTS_ARR[i].test_type == 'variation_variation') {
                    test_type = 'variation_variation';
                } else {
                    logger('Skipping AB Test (No Test Type Specified): ' + DIGIOH_SPLIT_TESTS_ARR[i].name);
                    skip = true;
                }

                if (!skip && DIGIOH_SPLIT_TESTS_ARR[i].start_date >= utcNowMillisJs) {
                    logger('Skipping AB Test (' + test_type + ') (Start Date): ' + DIGIOH_SPLIT_TESTS_ARR[i].name);
                    skip = true;
                }

                if (!skip && DIGIOH_SPLIT_TESTS_ARR[i].end_date <= utcNowMillisJs) {
                    logger('Skipping AB Test (' + test_type + ') (End Date): ' + DIGIOH_SPLIT_TESTS_ARR[i].name);
                    skip = true;
                }

                if (!skip && DIGIOH_SPLIT_TESTS_ARR[i].traffic_percent < tp) {
                    logger('Skipping AB Test (' + test_type + ') (Traffic Percent): ' + DIGIOH_SPLIT_TESTS_ARR[i].name + ', and associated Lightboxes...');

                    if (test_type == 'multivariate') {
                        var box_guids = DIGIOH_SPLIT_TESTS_ARR[i].box_guids.split(',');
                        for (var j = 0; j < box_guids.length; j++) {
                            AB_BOXES_SKIP_MAP[box_guids[j]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                            logger('Skipping Lightbox : ' + box_guids[j]);
                        }
                    }

                    skip = true;
                }

                if (skip) {
                    if (DIGIOH_SPLIT_TESTS_ARR[i].variation_guids.length > 0) {
                        var var_guids = DIGIOH_SPLIT_TESTS_ARR[i].variation_guids.split(',');
                        for (var j = 0; j < var_guids.length; j++) {
                            if (DIGIOH_SPLIT_TESTS_ARR[i].primary_variation_guids.indexOf(var_guids[j]) === -1) {
                                //If we are skipping the split test, then make sure only "IsPrimary" variations remain for display
                                AB_BOXES_SKIP_MAP[var_guids[j]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                            }
                        }
                    }

                    continue;
                }

                if (test_type == 'multivariate') {
                    //Multivariate Test
                    var box_guids = DIGIOH_SPLIT_TESTS_ARR[i].box_guids.split(',');

                    if (box_guids.length < 2) {
                        logger('Skipping AB Test (Multivariate) (Box GUIDs length = ' + box_guids.length + ', min 2): ' + DIGIOH_SPLIT_TESTS_ARR[i].name);
                        continue;
                    }

                    var matchedBoxGuid = '';
                    foundMatch = false;
                    dist = 100 / box_guids.length;

                    for (var k = 0; k < box_guids.length; k++) {
                        if (foundMatch) {
                            AB_BOXES_SKIP_MAP[box_guids[k]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                            logger('Skipped Lightbox (Multivariate) (' + box_guids[k] + ') for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');
                        } else if ((k * dist > lp) || ((k + 1) * dist < lp)) {
                            AB_BOXES_SKIP_MAP[box_guids[k]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                            logger('Skipped Lightbox (Multivariate) (' + box_guids[k] + ') for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');
                        } else {
                            AB_BOXES_TAKE_MAP[box_guids[k]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                            foundMatch = true;
                            matchedBoxGuid = box_guids[k];
                            logger('Activated Lightbox (Multivariate) (' + box_guids[k] + ') for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');
                        }
                    }

                    if (!foundMatch) {
                        if (AB_BOXES_SKIP_MAP.hasOwnProperty(box_guids[0])) {
                            delete AB_BOXES_SKIP_MAP[box_guids[0]];
                            logger('Removed Lightbox (Multivariate) (' + box_guids[0] + ') from Skipped Map, for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');
                        }

                        AB_BOXES_TAKE_MAP[box_guids[0]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                        matchedBoxGuid = box_guids[0];
                        logger('Defaulting to first Lightbox in AB Test, due to no match of lp: ' + lp);
                        logger('Activated Lightbox (Multivariate) (' + box_guids[0] + ') for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');
                    }

                    if (matchedBoxGuid.length > 7) {
                        for (var var_guid in DIGIOH_VARIATION_TO_BOX_MAP) {
                            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(var_guid) && DIGIOH_VARIATION_TO_BOX_MAP[var_guid] == matchedBoxGuid) {
                                AB_BOXES_SKIP_MAP[var_guid] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                            }
                        }
                    }
                } else if (test_type == 'box_variation') {
                    //AB Test (Box vs. Variation)
                    var box_guid = DIGIOH_SPLIT_TESTS_ARR[i].box_guids;
                    var variation_guid = DIGIOH_SPLIT_TESTS_ARR[i].variation_guids;

                    if (box_guid.length < 7 || box_guid.indexOf(',') >= 0) {
                        logger('Skipping AB Test (Box vs. Variation) (Box GUID invalid): ' + box_guid + ', for AB Test: ' + DIGIOH_SPLIT_TESTS_ARR[i].name);
                        continue;
                    }

                    if (variation_guid.length <= 1 || variation_guid.indexOf(',') >= 0) {
                        logger('Skipping AB Test (Box vs. Variation) (Variation GUID invalid): ' + variation_guid + ', for AB Test: ' + DIGIOH_SPLIT_TESTS_ARR[i].name);
                        continue;
                    }

                    if (lp < 50) {
                        //Choose Box
                        AB_BOXES_TAKE_MAP[box_guid] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                        AB_BOXES_SKIP_MAP[variation_guid] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;

                        logger('Activated Lightbox (Lightbox vs. Variation) (' + box_guid + ') for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');
                        logger('Skipping Variation (Lightbox vs. Variation) (' + variation_guid + ') for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');

                    } else {
                        //Choose Variation
                        AB_BOXES_TAKE_MAP[variation_guid] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;

                        logger('Activated Variation (Lightbox vs. Variation) (' + variation_guid + ') for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');
                        logger('Skipping Lightbox (Lightbox vs. Variation) (' + box_guid + ') for AB Test (' + DIGIOH_SPLIT_TESTS_ARR[i].split_guid + ')');
                    }

                } else if (test_type == 'variation_variation') {
                    //AB Test (Variation vs. Variation)
                    var box_guid = DIGIOH_SPLIT_TESTS_ARR[i].box_guids;
                    var variation_guids = DIGIOH_SPLIT_TESTS_ARR[i].variation_guids.split(',');

                    if (box_guid.length < 7 || box_guid.indexOf(',') >= 0) {
                        logger('Skipping AB Test (Variation vs. Variation) (Box GUID invalid): ' + box_guid + ', for AB Test: ' + DIGIOH_SPLIT_TESTS_ARR[i].name);
                        continue;
                    }

                    if (variation_guids.length != 2) {
                        logger('Skipping AB Test (Variation vs. Variation) (Variation GUIDs = ' + DIGIOH_SPLIT_TESTS_ARR[i].variation_guids + ', must be 2 variations): ' + DIGIOH_SPLIT_TESTS_ARR[i].name);
                        continue;
                    }

                    if (lp < 50) {
                        //Choose Variation 0
                        AB_BOXES_TAKE_MAP[variation_guids[0]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                        AB_BOXES_SKIP_MAP[variation_guids[1]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                    } else {
                        //Choose Variation 1
                        AB_BOXES_TAKE_MAP[variation_guids[1]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                        AB_BOXES_SKIP_MAP[variation_guids[0]] = DIGIOH_SPLIT_TESTS_ARR[i].split_guid;
                    }
                }
            }

            return '';
        }
        catch (e) {
            logError(e, "initABSplitTests");
        }

        return '';
    }

    var checkConditions = function (hook, lbguidToMatch, selector) {
        try {
            var foundMatch = false;

            if (lbguidToMatch === undefined)
                lbguidToMatch = '';

            if (selector === undefined)
                selector = '';

            for (var i = 0; i < DIGIOH_LIGHTBOX_CONDITIONS.length; i++) {
                if (lbguidToMatch === '' && AB_BOXES_SKIP_MAP.hasOwnProperty(DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid)) {
                    //logger('Skipped checkConditions for Lightbox ' + DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid + ' due to AB_BOXES_SKIP_MAP');
                    continue;
                } else if (lbguidToMatch === '' && isInlineLightbox(DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid)) {
                    continue;
                }

                if (lbguidToMatch != '') {
                    if (DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid == lbguidToMatch) {
                        foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                        if (foundMatch) {
                            return DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid;
                        } else {
                            return '';
                        }
                    }
                } else if (selector != '') {
                    if (CONDITION_SELECTOR_BOXES_MAP.hasOwnProperty(hook) && CONDITION_SELECTOR_BOXES_MAP[hook].hasOwnProperty(selector) && JQUERY_DIGIOH.inArray(DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, CONDITION_SELECTOR_BOXES_MAP[hook][selector]) > -1) {
                        foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                    }
                } else if (hook == 'load' && DIGIOH_LIGHTBOX_CONDITIONS[i].has_only_load_rules) {
                    foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                } else if (hook == 'exists' && DIGIOH_LIGHTBOX_CONDITIONS[i].has_exists_rules) {
                    foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                } else if (hook == 'click' && DIGIOH_LIGHTBOX_CONDITIONS[i].has_click_rules) {
                    foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                } else if (hook == 'hover' && DIGIOH_LIGHTBOX_CONDITIONS[i].has_hover_rules) {
                    foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                } else if (hook == 'scroll' && DIGIOH_LIGHTBOX_CONDITIONS[i].has_scroll_rules) {
                    foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                } else if (hook == 'exit' && DIGIOH_LIGHTBOX_CONDITIONS[i].has_exit_rules) {
                    foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                } else if (hook == 'time' && DIGIOH_LIGHTBOX_CONDITIONS[i].has_time_rules) {
                    foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, false, false);
                }

                if (foundMatch) {
                    return DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid;
                }
            }

            return '';
        }
        catch (e) {
            logError(e, "checkConditions");
        }

        return '';
    }

    function evalConditions(conditions, lbid, vars, eval_preload_teaser, is_follow_me_teaser) {
        if (typeof AB_BOXES_SKIP_MAP !== 'undefined' && AB_BOXES_SKIP_MAP.hasOwnProperty(lbid)) {
            return false;
        }

        if (typeof is_follow_me_teaser === 'undefined' || !is_follow_me_teaser) {
            is_follow_me_teaser = false;
        }

        var or_blocks = [];
        var or_block_json = [];
        //var or_block_rule_output = [];
        var json_rule = {};

        try {
            var skip_device_rules = false;

            //if (vars.device && JQUERY_DIGIOH.inArray(lbid, DIGIOH_LIGHTBOX_UNCATEGORIZED_DEVICE_ARR) === -1) {
            //    if (vars.device === 'Desktop/Laptop' && JQUERY_DIGIOH.inArray(lbid, DIGIOH_LIGHTBOX_DESKTOP_DEVICE_ARR) === -1) {
            //        return false;
            //    } else if (vars.device === 'Phone/Tablet' && JQUERY_DIGIOH.inArray(lbid, DIGIOH_LIGHTBOX_MOBILE_DEVICE_ARR) === -1) {
            //        return false;
            //    } else if (JQUERY_DIGIOH.inArray(lbid, DIGIOH_LIGHTBOX_DESKTOP_DEVICE_ARR) !== -1 || JQUERY_DIGIOH.inArray(lbid, DIGIOH_LIGHTBOX_MOBILE_DEVICE_ARR) !== -1) {
            //        skip_device_rules = true;
            //    }
            //}


            for (var x = 0; x < conditions.length; x++) {
                or_blocks[x] = true;
                or_block_json[x] = [];
                //or_block_rule_output[x] = false;
                for (var y = 0; y < conditions[x].length; y++) {
                    json_rule = evalRule(conditions[x][y]['p'], conditions[x][y]['o'], conditions[x][y]['s'], conditions[x][y]['v'], conditions[x][y]['sd'], conditions[x][y]['ed'], lbid, vars, eval_preload_teaser, is_follow_me_teaser, skip_device_rules);
                    or_block_json[x].push(json_rule);

                    //if (conditions[x][y]['p'] == 'I_total_time_seconds' || conditions[x][y]['p'] == 'I_active_time_seconds' || conditions[x][y]['p'] == 'I_idle_time_seconds' || conditions[x][y]['p'] == 'I_scroll_percent' || conditions[x][y]['p'] == 'I_scroll_pixels' || conditions[x][y]['p'] == 'C_click_jquery_selector' || conditions[x][y]['p'] == 'C_hover_jquery_selector' || conditions[x][y]['p'] == 'E_exit_intent') {

                    //}

                    if (!json_rule.rule_result) {
                        or_blocks[x] = false;
                        break;
                    }
                }

                if (or_blocks[x] == true) {
                    //if (eval_preload_teaser) {
                    //    logger('Teaser Preload Conditions Passed for Lightbox ' + lbid);
                    //} else {
                    //    logger('---------------------------------');
                    //    logger('Conditions Passed for Lightbox ' + lbid);
                    //    logger(or_block_json, true);
                    //    logger('---------------------------------');
                    //}

                    return true;
                }
            }
        }
        catch (e) {
            logError(e, "evalConditions");
        }

        //if (eval_preload_teaser) {
        //    logger('Teaser Preload Conditions Failed for Lightbox ' + lbid);
        //} else {
        //    logger('---------------------------------');
        //    logger('Conditions Failed for Lightbox ' + lbid);
        //    logger(or_block_json, true);
        //    logger('---------------------------------');
        //}

        return false;
    }

    function evalPrint(json) {
        try {
            logger(json, true);
        }
        catch (e) {
            logError(e, "evalPrint");
        }
    }

    function evalRule(rule_prop, rule_operator, rule_set, rule_val, rule_start_date, rule_end_date, lbid, vars, eval_preload_teaser, is_follow_me_teaser, skip_device_rules) {
        if (typeof is_follow_me_teaser === 'undefined' || !is_follow_me_teaser) {
            is_follow_me_teaser = false;
        }

        var res = {};
        res.rule_func = 'evalRule';
        res.rule_prop = rule_prop;
        res.rule_operator = rule_operator;
        res.rule_val = rule_val;
        res.rule_set = rule_set;
        res.rule_visual = '';
        res.rule_message = '';
        res.rule_error = false;
        res.rule_result = false;
        res.is_preload_teaser_eval = eval_preload_teaser;
        res.is_follow_me_teaser = is_follow_me_teaser;



        //if (typeof DIGIOH_USE_GEO_IP == 'undefined' || !DIGIOH_USE_GEO_IP) {
        //    if (rule_prop == 'E_continent' || rule_prop == 'E_country' || rule_prop == 'E_state' || rule_prop == 'S_city' || rule_prop == 'S_ip_address' || rule_prop == 'S_zipcode' || rule_prop == 'I_latitude' || rule_prop == 'I_longitude' || rule_prop == 'S_metro_code' || rule_prop == 'S_area_code') {
        //        return true;
        //    }
        //}

        if (eval_preload_teaser) {
            //Ignore for "follow me":
            //Time (ie. seconds on page), Click, Hover, Scroll, Exit Intent, Max displays per pageview, Max displays per session, Max displays per visitor
            if (is_follow_me_teaser) {
                if (rule_prop == 'I_total_time_seconds' || rule_prop == 'I_active_time_seconds' || rule_prop == 'I_idle_time_seconds' || rule_prop == 'I_scroll_percent' || rule_prop == 'I_scroll_pixels' || rule_prop == 'C_click_jquery_selector' || rule_prop == 'C_hover_jquery_selector' || rule_prop == 'E_exit_intent' || rule_prop == 'E_visitor_activity_visitor' || rule_prop == 'E_visitor_activity_session' || rule_prop == 'E_visitor_activity_pageview') {
                    res.rule_message = 'teaser follow me is automatically evaluated as true for the following rule event types:  time, scroll, click, hover, exit, max displays per pageview, max displays per session, max displays per visitor';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                }
            }

            if (!is_follow_me_teaser) {
                if (rule_prop == 'I_total_time_seconds' || rule_prop == 'I_active_time_seconds' || rule_prop == 'I_idle_time_seconds' || rule_prop == 'I_scroll_percent' || rule_prop == 'I_scroll_pixels' || rule_prop == 'C_click_jquery_selector' || rule_prop == 'C_hover_jquery_selector' || rule_prop == 'E_exit_intent') {
                    res.rule_message = 'teaser preloading is automatically evaluated as true for the following rule event types:  time, scroll, click, hover, exit';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                }
            }
        }

        if (rule_prop == 'E_lightbox_activity') {
            if (!vars.lightbox_events.hasOwnProperty(lbid)) {
                res.rule_message = 'no events found for this lightbox, so continue displaying';
                res.rule_visual = res.rule_message;
                res.rule_result = true;
                return res;
            } else if (rule_operator == 'equals') {
                if (!vars.lightbox_events[lbid].hasOwnProperty(rule_val) || vars.lightbox_events[lbid][rule_val]['cnt'] == 0) {
                    res.rule_message = 'no ' + rule_val + ' events found for this lightbox, so continue displaying';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                }
                else if (eval_preload_teaser && is_follow_me_teaser && rule_val == 'close') {
                    res.rule_message = 'continue displaying follow me teaser, even though lightbox close events were found';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                }
                else {
                    res.rule_message = vars.lightbox_events[lbid][rule_val]['cnt'] + ' ' + rule_val + ' events found for this lightbox, so stop displaying';
                    res.rule_visual = res.rule_message;
                    res.rule_result = false;
                    return res;
                }
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (vars.lightbox_events[lbid].hasOwnProperty(rule_set[x]) && vars.lightbox_events[lbid][rule_set[x]]['cnt'] > 0) {
                        if (eval_preload_teaser && is_follow_me_teaser) {
                            if (rule_set[x] != 'close') {
                                res.rule_message = vars.lightbox_events[lbid][rule_set[x]]['cnt'] + ' ' + rule_set[x] + ' events found for this lightbox, so stop displaying follow me teaser';
                                res.rule_visual = res.rule_message;
                                res.rule_result = false;
                                return res;
                            }
                        }
                        else {
                            res.rule_message = vars.lightbox_events[lbid][rule_set[x]]['cnt'] + ' ' + rule_set[x] + ' events found for this lightbox, so stop displaying';
                            res.rule_visual = res.rule_message;
                            res.rule_result = false;
                            return res;
                        }
                    }
                }
                res.rule_message = 'no matching events found for this lightbox, so continue displaying';
                res.rule_visual = res.rule_message;
                res.rule_result = true;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }

        if (rule_prop == 'D_date_range') {
            var curr_date = new Date();
            var compare_date = (curr_date.getMonth() + 1) + '/' + curr_date.getDate() + '/' + curr_date.getFullYear();
            return evalRuleDate(rule_prop, rule_operator, rule_start_date, rule_end_date, compare_date);
        }

        if (rule_prop == 'D_date_of_visit') {
            var compare_date = (vars.date_of_visit.getMonth() + 1) + '/' + vars.date_of_visit.getDate() + '/' + vars.date_of_visit.getFullYear();
            return evalRuleDate(rule_prop, rule_operator, rule_start_date, rule_end_date, compare_date);
        }

        if (rule_prop == 'E_visitor_activity_visitor') {
            if (!vars.lightbox_events.hasOwnProperty(lbid)) {
                res.rule_message = 'no displays found for this lightbox, so continue displaying';
                res.rule_visual = res.rule_message;
                res.rule_result = true;
                return res;
            } else if (rule_operator == 'equals') {
                if (!vars.lightbox_events[lbid].hasOwnProperty('view')) {
                    res.rule_message = 'no displays found for this lightbox, so continue displaying';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                } else if (vars.lightbox_events[lbid]['view']['cnt'] < parseInt(rule_val)) {
                    res.rule_message = vars.lightbox_events[lbid]['view']['cnt'] + ' displays found for this lightbox, so continue displaying (max of ' + rule_val + ' displays per visitor)';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                } else {
                    res.rule_message = vars.lightbox_events[lbid]['view']['cnt'] + ' displays found for this lightbox, so stop displaying (max of ' + rule_val + ' displays allowed per visitor)';
                    res.rule_visual = res.rule_message;
                    res.rule_result = false;
                    return res;
                }
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }

        if (rule_prop == 'E_visitor_activity_session') {
            if (!vars.lightbox_events.hasOwnProperty(lbid)) {
                res.rule_message = 'no session displays found for this lightbox, so continue displaying';
                res.rule_visual = res.rule_message;
                res.rule_result = true;
                return res;
            } else if (rule_operator == 'equals') {
                if (!vars.lightbox_events[lbid].hasOwnProperty('view') || !vars.lightbox_events[lbid]['view'].hasOwnProperty('ts') || vars.lightbox_events[lbid]['view']['ts'].length == 0) {
                    res.rule_message = 'no session displays found for this lightbox, so continue displaying';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                }
                //logger('vars.SessionStart: ' + DIGIOH_LIGHTBOX_ANALYTICS.SessionStart);
                //logger(vars.lightbox_events[lbid], true);
                var session_display_cnt = 0;
                for (var x = 0; x < vars.lightbox_events[lbid]['view']['ts'].length; x++) {
                    if (vars.lightbox_events[lbid]['view']['ts'][x] >= DIGIOH_LIGHTBOX_ANALYTICS.SessionStart) {
                        session_display_cnt++;
                    }
                }
                if (session_display_cnt < parseInt(rule_val)) {
                    res.rule_message = session_display_cnt + ' session displays found for this lightbox, so continue displaying (max of ' + rule_val + ' displays allowed per session)';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                } else {
                    res.rule_message = session_display_cnt + ' session displays found for this lightbox, so stop displaying (max of ' + rule_val + ' displays allowed per session)';
                    res.rule_visual = res.rule_message;
                    res.rule_result = false;
                    return res;
                }
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }

        if (rule_prop == 'E_visitor_activity_pageview') {
            if (!vars.lightbox_events.hasOwnProperty(lbid)) {
                res.rule_message = 'no current page displays found for this lightbox, so continue displaying';
                res.rule_visual = res.rule_message;
                res.rule_result = true;
                return res;
            } else if (rule_operator == 'equals') {
                if (!vars.lightbox_events[lbid].hasOwnProperty('view') || !vars.lightbox_events[lbid]['view'].hasOwnProperty('ts') || vars.lightbox_events[lbid]['view']['ts'].length == 0) {
                    res.rule_message = 'no current page displays found for this lightbox, so continue displaying';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                }
                var pageview_display_cnt = 0;
                for (var x = 0; x < vars.lightbox_events[lbid]['view']['ts'].length; x++) {
                    if (vars.lightbox_events[lbid]['view']['ts'][x] >= DIGIOH_LIGHTBOX_ANALYTICS.PageviewStart) {
                        pageview_display_cnt++;
                    }
                }
                if (pageview_display_cnt < parseInt(rule_val)) {
                    res.rule_message = pageview_display_cnt + ' session displays found for this lightbox, so continue displaying (max of ' + rule_val + ' displays allowed per pageview)';
                    res.rule_visual = res.rule_message;
                    res.rule_result = true;
                    return res;
                } else {
                    res.rule_message = pageview_display_cnt + ' session displays found for this lightbox, so stop displaying (max of ' + rule_val + ' displays allowed per pageview)';
                    res.rule_visual = res.rule_message;
                    res.rule_result = false;
                    return res;
                }
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }

        if (rule_prop == 'I_page_visits') {
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, vars.page_visits);
        }

        if (rule_prop == 'I_past_visits') {
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, vars.past_visits);
        }

        if (rule_prop == 'I_days_since_last_view') {
            if (!vars.lightbox_activity.hasOwnProperty(lbid) || vars.lightbox_activity[lbid]["Days since last view"] == -1) {
                res.rule_message = 'no displays found for this lightbox, so continue displaying';
                res.rule_visual = res.rule_message;
                res.rule_result = true;
                return res;
            }
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, vars.lightbox_activity[lbid]["Days since last view"]);
        }

        if (rule_prop == 'I_total_time_seconds') {
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, vars.total_time_seconds);
        }

        if (rule_prop == 'I_active_time_seconds') {
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, vars.active_time_seconds);
        }

        if (rule_prop == 'I_idle_time_seconds') {
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, vars.idle_time_seconds);
        }

        if (rule_prop == 'I_scroll_percent') {
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, vars.scroll_percent);
        }

        if (rule_prop == 'I_scroll_pixels') {
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, vars.scroll_pixels);
        }

        if (rule_prop == 'I_browser_version') {
            if (isNaN(vars.browser_version)) {
                res.rule_message = 'browser version is Not a Number (NaN), so evaluate to false';
                res.rule_visual = res.rule_message;
                res.rule_result = false;
                return res;
            }
            var browser_version = Math.floor(parseFloat(vars.browser_version));
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, browser_version);
        }

        if (rule_prop == 'I_latitude') {
            if (isNaN(vars.latitude)) {
                res.rule_message = 'latitude is Not a Number (NaN), so evaluate to false';
                res.rule_visual = res.rule_message;
                res.rule_result = false;
                return res;
            }
            var latitude = Math.floor(parseFloat(vars.latitude));
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, latitude);
        }

        if (rule_prop == 'I_longitude') {
            if (isNaN(vars.longitude)) {
                res.rule_message = 'longitude is Not a Number (NaN), so evaluate to false';
                res.rule_visual = res.rule_message;
                res.rule_result = false;
                return res;
            }
            var longitude = Math.floor(parseFloat(vars.longitude));
            return evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, longitude);
        }

        if (rule_prop == 'E_web_source') {
            return evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, vars.web_source);
        }

        if (rule_prop == 'E_search_engine') {
            return evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, vars.search_engine);
        }

        if (rule_prop == 'E_device') {
            return evalRuleDeviceEnum(rule_prop, rule_operator, rule_set, rule_val, vars.device);
        }

        if (rule_prop == 'E_browser_type') {
            return evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, vars.browser_type);
        }

        if (rule_prop == 'E_operating_system') {
            return evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, vars.operating_system);
        }

        if (rule_prop == 'E_country') {
            //logger(rule_prop + ', ' + rule_val + ', ' + vars.country);
            return evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, vars.country);
        }

        if (rule_prop == 'E_state') {
            //logger(rule_prop + ', ' + rule_val + ', ' + vars.state);
            return evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, vars.state);
        }

        if (rule_prop == 'E_continent') {
            //logger(rule_prop + ', ' + rule_val + ', ' + vars.continent);
            return evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, vars.continent);
        }

        if (rule_prop == 'S_current_page_url') {
            return evalRuleUrl(rule_prop, rule_operator, rule_set, rule_val, vars.current_page_url);
        }

        if (rule_prop == 'S_referring_website_url') {
            return evalRuleUrl(rule_prop, rule_operator, rule_set, rule_val, vars.referring_website_url);
        }

        if (rule_prop == 'S_landing_page') {
            return evalRuleUrl(rule_prop, rule_operator, rule_set, rule_val, vars.landing_page);
        }

        if (rule_prop == 'S_pages_navigated') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.pages_navigated);
        }

        if (rule_prop == 'S_city') {
            //logger(rule_prop + ', ' + rule_val + ', ' + vars.city);
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.city);
        }

        if (rule_prop == 'S_ip_address') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.ip_address);
        }

        if (rule_prop == 'S_zipcode') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.zipcode);
        }

        if (rule_prop == 'S_metro_code') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.metro_code);
        }

        if (rule_prop == 'S_area_code') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.area_code);
        }

        if (rule_prop == 'S_utm_campaign_name') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.utm_campaign_name);
        }

        if (rule_prop == 'S_utm_campaign_source') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.utm_campaign_source);
        }

        if (rule_prop == 'S_utm_campaign_content') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.utm_campaign_content);
        }

        if (rule_prop == 'S_utm_campaign_term') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.utm_campaign_term);
        }

        if (rule_prop == 'S_utm_campaign_medium') {
            return evalRuleString(rule_prop, rule_operator, rule_set, rule_val, vars.utm_campaign_medium);
        }

        if (rule_prop == 'C_click_jquery_selector') {
            if (rule_operator == 'equals') {
                if (rule_val == '') {
                    res.rule_visual = 'you entered a blank jquery click selector, which will automatically evaluate to false';
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_result = (vars.click_jquery_selector.hasOwnProperty(rule_val) && vars.click_jquery_selector[rule_val] == true);
                    res.rule_visual = 'jquery click selector (' + rule_val + ') occurred (' + res.rule_result + ')';
                    res.rule_message = res.rule_visual;
                    return res;
                }
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] != '' && vars.click_jquery_selector.hasOwnProperty(rule_set[x]) && vars.click_jquery_selector[rule_set[x]] == true) {
                        res.rule_result = true;
                        res.rule_visual = 'jquery click selector (' + rule_set[x] + ') from group item number (' + x + ') occurred (' + res.rule_result + ')';
                        res.rule_message = res.rule_visual;
                        return res;
                    }
                }
                res.rule_result = false;
                res.rule_visual = 'jquery click selector from set did not occur';
                res.rule_message = res.rule_visual;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }

        if (rule_prop == 'C_hover_jquery_selector') {
            if (rule_operator == 'equals') {
                if (rule_val == '') {
                    res.rule_visual = 'you entered a blank jquery hover selector, which will automatically evaluate to false';
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_result = (vars.hover_jquery_selector.hasOwnProperty(rule_val) && vars.hover_jquery_selector[rule_val] == true);
                    res.rule_visual = 'jquery hover selector (' + rule_val + ') occurred (' + res.rule_result + ')';
                    res.rule_message = res.rule_visual;
                    return res;
                }
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] != '' && vars.hover_jquery_selector.hasOwnProperty(rule_set[x]) && vars.hover_jquery_selector[rule_set[x]] == true) {
                        res.rule_result = true;
                        res.rule_visual = 'jquery hover selector (' + rule_set[x] + ') from group item number (' + x + ') occurred (' + res.rule_result + ')';
                        res.rule_message = res.rule_visual;
                        return res;
                    }
                }
                res.rule_result = false;
                res.rule_visual = 'jquery hover selector from set did not occur';
                res.rule_message = res.rule_visual;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }

        if (rule_prop == 'C_exists_jquery_selector') {
            if (rule_operator == 'equals') {
                if (rule_val == '') {
                    res.rule_visual = 'you entered a blank jquery exists selector, which will automatically evaluate to false';
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_result = (vars.exists_jquery_selector.hasOwnProperty(rule_val) && vars.exists_jquery_selector[rule_val] == true);
                    res.rule_visual = 'jquery exists selector (' + rule_val + ') exists (' + res.rule_result + ')';
                    res.rule_message = res.rule_visual;
                    return res;
                }
            } else if (rule_operator == 'does_not_equal') {
                if (rule_val == '') {
                    res.rule_visual = 'you entered a blank jquery exists selector, which will automatically evaluate to false';
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_result = (!vars.exists_jquery_selector.hasOwnProperty(rule_val) || vars.exists_jquery_selector[rule_val] == false);
                    res.rule_visual = 'jquery exists selector (' + rule_val + ') does not exist (' + res.rule_result + ')';
                    res.rule_message = res.rule_visual;
                    return res;
                }
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] != '' && vars.exists_jquery_selector.hasOwnProperty(rule_set[x]) && vars.exists_jquery_selector[rule_set[x]] == true) {
                        res.rule_result = true;
                        res.rule_visual = 'jquery exists selector (' + rule_set[x] + ') from group item number (' + x + ') exists (' + res.rule_result + ') (success)';
                        res.rule_message = res.rule_visual;
                        return res;
                    }
                }
                res.rule_result = false;
                res.rule_visual = 'jquery exists selector from set did not occur (failure)';
                res.rule_message = res.rule_visual;
                return res;
            } else if (rule_operator == 'not_in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] != '' && vars.exists_jquery_selector.hasOwnProperty(rule_set[x]) && vars.exists_jquery_selector[rule_set[x]] == true) {
                        res.rule_result = false;
                        res.rule_visual = 'jquery exists selector (' + rule_set[x] + ') from group item number (' + x + ') exists (' + res.rule_result + ') (failure)';
                        res.rule_message = res.rule_visual;
                        return res;
                    }
                }
                res.rule_result = true;
                res.rule_visual = 'jquery exists selector from set did not occur (success)';
                res.rule_message = res.rule_visual;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }

        if (rule_prop == 'E_exit_intent') {
            return evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, vars.exit_intent);
        }

        if (rule_prop == 'L_any_other_box') {
            if (rule_operator == 'equals') {
                var occurrances = DIGIOH_LIGHTBOX_ANALYTICS.getEventCountAcrossAllLightboxesExcept(rule_val, lbid);
                res.rule_result = (occurrances > 0);
                res.rule_visual = rule_val + ' event has occurred ' + occurrances + ' times across all other lightboxes, so this rule is evaluated as ' + res.rule_result;
                res.rule_message = res.rule_visual;
                return res;
            } else if (rule_operator == 'does_not_equal') {
                var occurrances = DIGIOH_LIGHTBOX_ANALYTICS.getEventCountAcrossAllLightboxesExcept(rule_val, lbid);
                res.rule_result = (occurrances == 0);
                res.rule_visual = rule_val + ' event has occurred ' + occurrances + ' times across all other lightboxes, so this rule is evaluated as ' + res.rule_result;
                res.rule_message = res.rule_visual;
                return res;
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    var occurrances = DIGIOH_LIGHTBOX_ANALYTICS.getEventCountAcrossAllLightboxesExcept(rule_set[x], lbid);
                    if (occurrances > 0) {
                        res.rule_result = true;
                        res.rule_visual = rule_set[x] + ' event from group has occurred ' + occurrances + ' times across all other lightboxes, so this rule is evaluated as ' + res.rule_result;
                        res.rule_message = res.rule_visual;
                        return res;
                    }
                }
                res.rule_result = false;
                res.rule_visual = 'no events from group have occurred across all other lightboxes, so this rule is evaluated as ' + res.rule_result;
                res.rule_message = res.rule_visual;
                return res;
            } else if (rule_operator == 'not_in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    var occurrances = DIGIOH_LIGHTBOX_ANALYTICS.getEventCountAcrossAllLightboxesExcept(rule_set[x], lbid);
                    if (occurrances > 0) {
                        res.rule_result = false;
                        res.rule_visual = rule_set[x] + ' event from group has occurred ' + occurrances + ' times across all other lightboxes, so this rule is evaluated as ' + res.rule_result;
                        res.rule_message = res.rule_visual;
                        return res;
                    }
                }
                res.rule_result = true;
                res.rule_visual = 'no events from group have occurred across all other lightboxes, so this rule is evaluated as ' + res.rule_result;
                res.rule_message = res.rule_visual;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }

        if (rule_prop.indexOf('L_other_box_') == 0) {
            var other_lbguid = rule_prop.split('_')[3];
            if (rule_operator == 'equals') {
                var occurrances = DIGIOH_LIGHTBOX_ANALYTICS.getEventCountByLightbox(rule_val, other_lbguid);
                res.rule_result = (occurrances > 0);
                res.rule_visual = rule_val + ' event has occurred ' + occurrances + ' times for other lightbox guid ' + other_lbguid + ', so this rule is evaluated as ' + res.rule_result;
                res.rule_message = res.rule_visual;
                return res;
            } else if (rule_operator == 'does_not_equal') {
                var occurrances = DIGIOH_LIGHTBOX_ANALYTICS.getEventCountByLightbox(rule_val, other_lbguid);
                res.rule_result = (occurrances == 0);
                res.rule_visual = rule_val + ' event has occurred ' + occurrances + ' times for other lightbox guid ' + other_lbguid + ', so this rule is evaluated as ' + res.rule_result;
                res.rule_message = res.rule_visual;
                return res;
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    var occurrances = DIGIOH_LIGHTBOX_ANALYTICS.getEventCountByLightbox(rule_set[x], other_lbguid);
                    if (occurrances > 0) {
                        res.rule_result = true;
                        res.rule_visual = rule_set[x] + ' event from group has occurred ' + occurrances + ' times for other lightbox guid ' + other_lbguid + ', so this rule is evaluated as ' + res.rule_result;
                        res.rule_message = res.rule_visual;
                        return res;
                    }
                }
                res.rule_result = false;
                res.rule_visual = 'no events from group for other lightbox guid ' + other_lbguid + ' have occurred, so this rule is evaluated as ' + res.rule_result;
                res.rule_message = res.rule_visual;
                return res;
            } else if (rule_operator == 'not_in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    var occurrances = DIGIOH_LIGHTBOX_ANALYTICS.getEventCountByLightbox(rule_set[x], other_lbguid);
                    if (occurrances > 0) {
                        res.rule_result = false;
                        res.rule_visual = rule_set[x] + ' event from group has occurred ' + occurrances + ' times for other lightbox guid ' + other_lbguid + ', so this rule is evaluated as ' + res.rule_result;
                        res.rule_message = res.rule_visual;
                        return res;
                    }
                }
                res.rule_result = true;
                res.rule_visual = 'no events in from group for other lightbox guid ' + other_lbguid + ' have occurred, so this rule is evaluated as ' + res.rule_result;
                res.rule_message = res.rule_visual;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }
    }

    function evalRuleString(rule_prop, rule_operator, rule_set, rule_val, compare_val) {
        var res = {};
        res.rule_func = 'evalRuleString';
        res.rule_prop = rule_prop;
        res.rule_operator = rule_operator;
        res.rule_set = rule_set;
        res.rule_val = rule_val;
        res.rule_compare_val = compare_val;
        res.rule_visual = '';
        res.rule_message = '';
        res.rule_error = false;
        res.rule_result = false;

        try {
            if (rule_operator == 'equals') {
                res.rule_visual = compare_val + ' EQUALS ' + rule_val;
                res.rule_message = res.rule_visual;
                res.rule_result = (compare_val == rule_val);
                return res;
            } else if (rule_operator == 'does_not_equal') {
                res.rule_visual = compare_val + ' DOES NOT EQUAL ' + rule_val;
                res.rule_message = res.rule_visual;
                res.rule_result = (compare_val != rule_val);
                return res;
            } else if (rule_operator == 'starts_with') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' STARTS WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' STARTS WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = stringStartsWith(compare_val, rule_val);
                    return res;
                }
            } else if (rule_operator == 'does_not_start_with') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' DOES NOT START WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' DOES NOT START WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = !stringStartsWith(compare_val, rule_val);
                    return res;
                }
            } else if (rule_operator == 'ends_with') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' ENDS WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' ENDS WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = stringEndsWith(compare_val, rule_val);
                    return res;
                }
            } else if (rule_operator == 'does_not_end_with') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' DOES NOT END WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' DOES NOT END WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = !stringEndsWith(compare_val, rule_val);
                    return res;
                }
            } else if (rule_operator == 'contains') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' CONTAINS ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' CONTAINS ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = (compare_val.indexOf(rule_val) >= 0);
                    return res;
                }
            } else if (rule_operator == 'does_not_contain') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' DOES NOT CONTAIN ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' DOES NOT CONTAIN ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = (compare_val.indexOf(rule_val) == -1);
                    return res;
                }
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (compare_val == rule_set[x]) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (success)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = true;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (failure)';
                res.rule_message = res.rule_visual;
                res.rule_result = false;
                return res;
            } else if (rule_operator == 'not_in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (compare_val == rule_set[x]) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (failure)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = false;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (success)';
                res.rule_message = res.rule_visual;
                res.rule_result = true;
                return res;
            } else if (rule_operator == 'in_set_contains') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] != '' && compare_val.indexOf(rule_set[x]) >= 0) {
                        res.rule_visual = compare_val + ' CONTAINS VALUE #' + x + ' IN GROUP (' + rule_set[x] + ') (success)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = true;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' CONTAINS NO VALUES IN GROUP (failure)';
                res.rule_message = res.rule_visual;
                res.rule_result = false;
                return res;
            } else if (rule_operator == 'not_in_set_contains') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] != '' && compare_val.indexOf(rule_set[x]) >= 0) {
                        res.rule_visual = compare_val + ' CONTAINS VALUE #' + x + ' IN GROUP (' + rule_set[x] + ') (failure)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = false;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' CONTAINS NO VALUES IN GROUP (success)';
                res.rule_message = res.rule_visual;
                res.rule_result = true;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }
        catch (e) {
            logError(e, "evalRuleString");

            res.rule_error = true;
            res.rule_result = false;
            res.rule_message = e.message;
            return res;
        }
    }

    function evalRuleUrl(rule_prop, rule_operator, rule_set, rule_val, compare_val) {
        var res = {};
        res.rule_func = 'evalRuleUrl';
        res.rule_prop = rule_prop;
        res.rule_operator = rule_operator;
        res.rule_set = rule_set;
        res.rule_val = rule_val;
        res.rule_compare_val = compare_val;
        res.rule_visual = '';
        res.rule_message = '';
        res.rule_error = false;
        res.rule_result = false;

        try {
            if (rule_operator == 'equals') {
                res.rule_visual = compare_val + ' EQUALS ' + rule_val;
                res.rule_message = res.rule_visual;
                res.rule_result = compareUrlEqualityWithAndWithoutTrailingSlash(compare_val, rule_val);
                return res;
            } else if (rule_operator == 'does_not_equal') {
                res.rule_visual = compare_val + ' DOES NOT EQUAL ' + rule_val;
                res.rule_message = res.rule_visual;
                res.rule_result = !compareUrlEqualityWithAndWithoutTrailingSlash(compare_val, rule_val);
                return res;
            } else if (rule_operator == 'starts_with') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' STARTS WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' STARTS WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = stringStartsWith(compare_val.toLowerCase(), rule_val.toLowerCase());
                    return res;
                }
            } else if (rule_operator == 'does_not_start_with') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' DOES NOT START WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' DOES NOT START WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = !stringStartsWith(compare_val.toLowerCase(), rule_val.toLowerCase());
                    return res;
                }
            } else if (rule_operator == 'ends_with') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' ENDS WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' ENDS WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = compareUrlEndingWithAndWithoutTrailingSlash(compare_val, rule_val);
                    return res;
                }
            } else if (rule_operator == 'does_not_end_with') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' DOES NOT END WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' DOES NOT END WITH ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = !compareUrlEndingWithAndWithoutTrailingSlash(compare_val, rule_val);
                    return res;
                }
            } else if (rule_operator == 'contains') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' CONTAINS ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' CONTAINS ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = (compare_val.toLowerCase().indexOf(rule_val.toLowerCase()) >= 0);
                    return res;
                }
            } else if (rule_operator == 'does_not_contain') {
                if (rule_val == '') {
                    res.rule_visual = compare_val + ' DOES NOT CONTAIN ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = false;
                    return res;
                } else {
                    res.rule_visual = compare_val + ' DOES NOT CONTAIN ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = (compare_val.toLowerCase().indexOf(rule_val.toLowerCase()) == -1);
                    return res;
                }
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (compareUrlEqualityWithAndWithoutTrailingSlash(compare_val, rule_set[x])) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (success)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = true;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (failure)';
                res.rule_message = res.rule_visual;
                res.rule_result = false;
                return res;
            } else if (rule_operator == 'not_in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (compareUrlEqualityWithAndWithoutTrailingSlash(compare_val, rule_set[x])) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (failure)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = false;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (success)';
                res.rule_message = res.rule_visual;
                res.rule_result = true;
                return res;
            } else if (rule_operator == 'in_set_contains') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] != '' && compare_val.toLowerCase().indexOf(rule_set[x].toLowerCase()) >= 0) {
                        res.rule_visual = compare_val + ' CONTAINS VALUE #' + x + ' IN GROUP (' + rule_set[x] + ') (success)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = true;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' CONTAINS NO VALUES IN GROUP (failure)';
                res.rule_message = res.rule_visual;
                res.rule_result = false;
                return res;
            } else if (rule_operator == 'not_in_set_contains') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] != '' && compare_val.toLowerCase().indexOf(rule_set[x].toLowerCase()) >= 0) {
                        res.rule_visual = compare_val + ' CONTAINS VALUE #' + x + ' IN GROUP (' + rule_set[x] + ') (failure)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = false;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' CONTAINS NO VALUES IN GROUP (success)';
                res.rule_message = res.rule_visual;
                res.rule_result = true;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }
        catch (e) {
            logError(e, "evalRuleUrl");

            res.rule_error = true;
            res.rule_result = false;
            res.rule_message = e.message;
            return res;
        }
    }

    function evalRuleDeviceEnum(rule_prop, rule_operator, rule_set, rule_val, compare_val_orig) {
        var res = {};
        res.rule_func = 'evalRuleDeviceEnum';
        res.rule_prop = rule_prop;
        res.rule_operator = rule_operator;
        res.rule_set = rule_set;
        res.rule_val = rule_val;
        res.rule_compare_val = compare_val_orig;
        res.rule_visual = '';
        res.rule_message = '';
        res.rule_error = false;
        res.rule_result = false;

        var compare_val = compare_val_orig;

        try {
            if (rule_operator == 'equals') {
                if (rule_val && rule_val.indexOf('Desktop/Laptop') === -1 && rule_val.indexOf('Phone/Tablet') === -1) {
                    if (isPhone()) {
                        compare_val = 'Phone';
                    } else if (isTablet()) {
                        compare_val = 'Tablet';
                    } else {
                        compare_val = 'Desktop';
                    }
                } else {
                    compare_val = compare_val_orig;
                }

                res.rule_visual = compare_val + ' EQUALS ' + rule_val;
                res.rule_message = res.rule_visual;
                res.rule_result = (compare_val == rule_val);
                //logger(res.rule_visual);
                return res;
            } else if (rule_operator == 'does_not_equal') {
                if (rule_val && rule_val.indexOf('Desktop/Laptop') === -1 && rule_val.indexOf('Phone/Tablet') === -1) {
                    if (isPhone()) {
                        compare_val = 'Phone';
                    } else if (isTablet()) {
                        compare_val = 'Tablet';
                    } else {
                        compare_val = 'Desktop';
                    }
                } else {
                    compare_val = compare_val_orig;
                }

                res.rule_visual = compare_val + ' DOES NOT EQUAL ' + rule_val;
                res.rule_message = res.rule_visual;
                res.rule_result = (compare_val != rule_val);
                //logger(res.rule_visual);
                return res;
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] && rule_set[x].indexOf('Desktop/Laptop') === -1 && rule_set[x].indexOf('Phone/Tablet') === -1) {
                        if (isPhone()) {
                            compare_val = 'Phone';
                        } else if (isTablet()) {
                            compare_val = 'Tablet';
                        } else {
                            compare_val = 'Desktop';
                        }
                    } else {
                        compare_val = compare_val_orig;
                    }

                    if (compare_val == rule_set[x]) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (success)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = true;
                        logger(res.rule_visual);
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (failure)';
                res.rule_message = res.rule_visual;
                res.rule_result = false;
                //logger(res.rule_visual);
                return res;
            } else if (rule_operator == 'not_in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (rule_set[x] && rule_set[x].indexOf('Desktop/Laptop') === -1 && rule_set[x].indexOf('Phone/Tablet') === -1) {
                        if (isPhone()) {
                            compare_val = 'Phone';
                        } else if (isTablet()) {
                            compare_val = 'Tablet';
                        } else {
                            compare_val = 'Desktop';
                        }
                    } else {
                        compare_val = compare_val_orig;
                    }

                    if (compare_val == rule_set[x]) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (failure)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = false;
                        //logger(res.rule_visual);
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (success)';
                res.rule_message = res.rule_visual;
                res.rule_result = true;
                //logger(res.rule_visual);
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                //logger(res.rule_visual);
                return res;
            }
        }
        catch (e) {
            logError(e, "evalRuleDeviceEnum");

            res.rule_visual = 'ERROR: ' + e.message;
            res.rule_error = true;
            res.rule_result = false;
            res.rule_message = e.message;
            //logger(res.rule_visual);
            return res;
        }
    }

    function evalRuleEnum(rule_prop, rule_operator, rule_set, rule_val, compare_val) {
        var res = {};
        res.rule_func = 'evalRuleEnum';
        res.rule_prop = rule_prop;
        res.rule_operator = rule_operator;
        res.rule_set = rule_set;
        res.rule_val = rule_val;
        res.rule_compare_val = compare_val;
        res.rule_visual = '';
        res.rule_message = '';
        res.rule_error = false;
        res.rule_result = false;

        try {
            if (rule_operator == 'equals') {
                res.rule_visual = compare_val + ' EQUALS ' + rule_val;
                res.rule_message = res.rule_visual;
                res.rule_result = (compare_val == rule_val);
                return res;
            } else if (rule_operator == 'does_not_equal') {
                res.rule_visual = compare_val + ' DOES NOT EQUAL ' + rule_val;
                res.rule_message = res.rule_visual;
                res.rule_result = (compare_val != rule_val);
                return res;
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (compare_val == rule_set[x]) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (success)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = true;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (failure)';
                res.rule_message = res.rule_visual;
                res.rule_result = false;
                return res;
            } else if (rule_operator == 'not_in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (compare_val == rule_set[x]) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (failure)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = false;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (success)';
                res.rule_message = res.rule_visual;
                res.rule_result = true;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }
        catch (e) {
            logError(e, "evalRuleEnum");

            res.rule_error = true;
            res.rule_result = false;
            res.rule_message = e.message;
            return res;
        }
    }

    function evalRuleInt(rule_prop, rule_operator, rule_set, rule_val, compare_val) {
        var res = {};
        res.rule_func = 'evalRuleInt';
        res.rule_prop = rule_prop;
        res.rule_operator = rule_operator;
        res.rule_set = rule_set;
        res.rule_val = rule_val;
        res.rule_compare_val = compare_val;
        res.rule_visual = '';
        res.rule_message = '';
        res.rule_error = false;
        res.rule_result = false;

        try {
            if (rule_operator == 'equals') {
                if (!isStringAnInteger(rule_val)) {
                    res.rule_error = true;
                    res.rule_message = 'value is not a number';
                    return res;
                } else {
                    res.rule_visual = compare_val + ' EQUALS ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = (compare_val == parseInt(rule_val));
                    return res;
                }
            } else if (rule_operator == 'does_not_equal') {
                if (!isStringAnInteger(rule_val)) {
                    res.rule_error = true;
                    res.rule_message = 'value is not a number';
                    return res;
                } else {
                    res.rule_visual = compare_val + ' DOES NOT EQUAL ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = (compare_val != parseInt(rule_val));
                    return res;
                }
            } else if (rule_operator == 'less_than') {
                if (!isStringAnInteger(rule_val)) {
                    res.rule_error = true;
                    res.rule_message = 'value is not a number';
                    return res;
                } else {
                    res.rule_visual = compare_val + ' LESS THAN ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = (compare_val < parseInt(rule_val));
                    return res;
                }
            } else if (rule_operator == 'greater_than') {
                if (!isStringAnInteger(rule_val)) {
                    res.rule_error = true;
                    res.rule_message = 'value is not a number';
                    return res;
                } else {
                    res.rule_visual = compare_val + ' GREATER THAN ' + rule_val;
                    res.rule_message = res.rule_visual;
                    res.rule_result = (compare_val > parseInt(rule_val));
                    return res;
                }
            } else if (rule_operator == 'in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (isStringAnInteger(rule_set[x]) && compare_val == parseInt(rule_set[x])) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (success)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = true;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (failure)';
                res.rule_message = res.rule_visual;
                res.rule_result = false;
                return res;
            } else if (rule_operator == 'not_in_set') {
                for (var x = 0; x < rule_set.length; x++) {
                    if (isStringAnInteger(rule_set[x]) && compare_val == parseInt(rule_set[x])) {
                        res.rule_visual = compare_val + ' MATCHED VALUE #' + x + ' IN GROUP (failure)';
                        res.rule_message = res.rule_visual;
                        res.rule_result = false;
                        return res;
                    }
                }
                res.rule_visual = compare_val + ' MATCHED NO VALUES IN GROUP (success)';
                res.rule_message = res.rule_visual;
                res.rule_result = true;
                return res;
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }
        catch (e) {
            logError(e, "evalRuleInt");

            res.rule_error = true;
            res.rule_result = false;
            res.rule_message = e.message;
            return res;
        }
    }

    function evalRuleDate(rule_prop, rule_operator, rule_start_date, rule_end_date, compare_date) {
        var res = {};
        res.rule_func = 'evalRuleDate';
        res.rule_prop = rule_prop;
        res.rule_operator = rule_operator;
        res.rule_start_date = rule_start_date;
        res.rule_end_date = rule_end_date;
        res.rule_compare_date = compare_date;
        res.rule_visual = '';
        res.rule_message = '';
        res.rule_error = false;
        res.rule_result = false;

        try {
            var start_date_parts = [];
            var end_date_parts = [];
            var compare_date_parts = [];

            var start;
            var end;
            var compare;

            //parse comparison date
            if (compare_date.indexOf('/') == -1) {
                res.rule_message = 'comparison date in invalid format, does not contain slash: ' + compare_date;
                res.rule_error = true;
                return res;
            }
            compare_date_parts = compare_date.split('/');
            if (compare_date_parts.length != 3) {
                res.rule_message = 'comparison date in invalid format, less than 3 date parts: ' + compare_date;
                res.rule_error = true;
                return res;
            }
            compare = new Date(parseInt(compare_date_parts[2]), parseInt(compare_date_parts[0] - 1), parseInt(compare_date_parts[1]), 0, 0, 0);

            //parse start date
            if (rule_start_date.indexOf('/') == -1) {
                res.rule_message = 'start date in invalid format, does not contain slash: ' + rule_start_date;
                res.rule_error = true;
                return res;
            }
            start_date_parts = rule_start_date.split('/');
            if (start_date_parts.length != 3) {
                res.rule_message = 'start date in invalid format, less than 3 date parts: ' + rule_start_date;
                res.rule_error = true;
                return res;
            }
            start = new Date(parseInt(start_date_parts[2]), parseInt(start_date_parts[0] - 1), parseInt(start_date_parts[1]), 0, 0, 0);

            if (rule_operator == 'equals') {
                res.rule_visual = (compare.getMonth() + 1) + '/' + compare.getDate() + '/' + compare.getFullYear() + ' EQUALS ' + rule_start_date;
                res.rule_result = (compare.getTime() == start.getTime());
                return res;
            } else if (rule_operator == 'does_not_equal') {
                res.rule_visual = (compare.getMonth() + 1) + '/' + compare.getDate() + '/' + compare.getFullYear() + ' DOES NOT EQUAL ' + rule_start_date;
                res.rule_result = (compare.getTime() != start.getTime());
                return res;
            } else if (rule_operator == 'less_than') {
                res.rule_visual = (compare.getMonth() + 1) + '/' + compare.getDate() + '/' + compare.getFullYear() + ' LESS THAN ' + rule_start_date;
                res.rule_result = (compare.getTime() < start.getTime());
                return res;
            } else if (rule_operator == 'greater_than') {
                res.rule_visual = (compare.getMonth() + 1) + '/' + compare.getDate() + '/' + compare.getFullYear() + ' GREATER THAN ' + rule_start_date;
                res.rule_result = (compare.getTime() > start.getTime());
                return res;
            } else if (rule_operator == 'between' || rule_operator == 'is_not_between') {
                //parse end date
                if (rule_end_date.indexOf('/') == -1) {
                    res.rule_message = 'end date in invalid format, does not contain slash: ' + rule_end_date;
                    res.rule_error = true;
                    return res;
                }
                end_date_parts = rule_end_date.split('/');
                if (end_date_parts.length != 3) {
                    res.rule_message = 'end date in invalid format, less than 3 date parts: ' + rule_end_date;
                    res.rule_error = true;
                    return res;
                }
                end = new Date(parseInt(end_date_parts[2]), parseInt(end_date_parts[0] - 1), parseInt(end_date_parts[1]), 0, 0, 0);

                if (end.getTime() < start.getTime()) {
                    res.rule_message = 'start date must be less than or equal to end date: ' + rule_start_date + ' (start date), ' + rule_end_date + ' (end date)';
                    res.rule_error = true;
                    return res;
                }

                if (rule_operator == 'between') {
                    res.rule_visual = (compare.getMonth() + 1) + '/' + compare.getDate() + '/' + compare.getFullYear() + ' BETWEEN ' + rule_start_date + ', ' + rule_end_date;
                    res.rule_result = (compare.getTime() >= start.getTime() && compare.getTime() <= end.getTime());
                    return res;
                } else if (rule_operator == 'is_not_between') {
                    res.rule_visual = (compare.getMonth() + 1) + '/' + compare.getDate() + '/' + compare.getFullYear() + ' IS NOT BETWEEN ' + rule_start_date + ', ' + rule_end_date;
                    res.rule_result = (compare.getTime() < start.getTime() || compare.getTime() > end.getTime());
                    return res;
                } else {
                    res.rule_message = 'invalid operator: ' + rule_operator;
                    res.rule_error = true;
                    res.result = false;
                    return res;
                }
            } else {
                res.rule_message = 'invalid operator: ' + rule_operator;
                res.rule_error = true;
                res.result = false;
                return res;
            }
        }
        catch (e) {
            logError(e, "evalRuleDate");

            res.rule_error = true;
            res.rule_result = false;
            res.rule_message = e.message;
            return res;
        }
    }

    function initLightboxActivity() {
        try {
            DIGIOH_LIGHTBOX_ANALYTICS.loadLightboxActivity();
        }
        catch (e) {
            logError(e, "initLightboxActivity");
        }
    }

    function checkLightboxMasterRules() {
        try {
            if (typeof DIGIOH_LIGHTBOX_MASTER_RULES !== "undefined") {
                if (typeof DIGIOH_LIGHTBOX_MASTER_RULES.OneBoxPerPageview !== "undefined" && DIGIOH_LIGHTBOX_MASTER_RULES.OneBoxPerPageview === true && DIGIOH_LIGHTBOX_ANALYTICS.VARS.master_rules["Once per pageview"] === false) {
                    logger("OneBoxPerPageview: Master rule prevented further execution.");
                    return false;
                }

                if (typeof DIGIOH_LIGHTBOX_MASTER_RULES.OneBoxPerSession !== "undefined" && DIGIOH_LIGHTBOX_MASTER_RULES.OneBoxPerSession === true && DIGIOH_LIGHTBOX_ANALYTICS.VARS.master_rules["Once per session"] === false) {
                    logger("OneBoxPerSession:  Master rule prevented further execution.");
                    return false;
                }

                if (typeof DIGIOH_LIGHTBOX_MASTER_RULES.OneBoxPerVisitor !== "undefined" && DIGIOH_LIGHTBOX_MASTER_RULES.OneBoxPerVisitor === true && DIGIOH_LIGHTBOX_ANALYTICS.VARS.master_rules["Once per visitor"] === false) {
                    logger("OneBoxPerVisitor:  Master rule prevented further execution.");
                    return false;
                }

                if (typeof DIGIOH_LIGHTBOX_MASTER_RULES.StopAfterFormSubmitted !== "undefined" && DIGIOH_LIGHTBOX_MASTER_RULES.StopAfterFormSubmitted === true && DIGIOH_LIGHTBOX_ANALYTICS.VARS.master_rules["Until form is submitted"] === false) {
                    logger("StopAfterFormSubmitted:  Master rule prevented further execution.");
                    return false;
                }

                if (typeof DIGIOH_LIGHTBOX_MASTER_RULES.DisableIfCookiesDisabled !== "undefined" && DIGIOH_LIGHTBOX_MASTER_RULES.DisableIfCookiesDisabled === true && areCookiesDisabled()) {
                    logger("DisableIfCookiesDisabled:  Cookies are currently disabled in this browser.  Preventing further execution.");
                    return false;
                }
            }

            return true;
        }
        catch (e) {
            logError(e, "checkLightboxMasterRules");
            return true;
        }
    }

    function updateLightboxActivityView(lid) {
        try {
            DIGIOH_LIGHTBOX_ANALYTICS.setLightboxEvent("view", lid);
        }
        catch (e) {
            logError(e, "updateLightboxActivityView");
        }
    }

    function updateLightboxActivityClose(lid) {
        try {
            DIGIOH_LIGHTBOX_ANALYTICS.setLightboxEvent("close", lid);
        }
        catch (e) {
            logError(e, "updateLightboxActivityClose");
        }
    }

    function updateLightboxActivitySubmit(lid) {
        try {
            DIGIOH_LIGHTBOX_ANALYTICS.setLightboxEvent("submit", lid);
        }
        catch (e) {
            logError(e, "updateLightboxActivitySubmit");
        }
    }

    var initExistsSelectors = function () {
        try {
            for (var x = 0; x < EXISTS_SELECTORS.length; x++) {
                if (JQUERY_DIGIOH(EXISTS_SELECTORS[x]).length) {
                    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exists_jquery_selector[EXISTS_SELECTORS[x]] = true;
                } else {
                    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exists_jquery_selector[EXISTS_SELECTORS[x]] = false;
                }
            }
        }
        catch (e) {
            logError(e, "initExistsSelectors");
        }
    }

    function initClickSelectors() {
        try {
            for (var x = 0; x < CLICK_SELECTORS.length; x++) {

                DIGIOH_LIGHTBOX_ANALYTICS.VARS.click_jquery_selector[CLICK_SELECTORS[x]] = false;

                //JQUERY_DIGIOH(CLICK_SELECTORS[x]).click(function (e) {
                JQUERY_DIGIOH(document).on('click', CLICK_SELECTORS[x], function (e) {
                    e.preventDefault();
                    var curr = JQUERY_DIGIOH(this)[0];
                    for (var y = 0; y < CLICK_SELECTORS.length; y++) {
                        var elements = JQUERY_DIGIOH(CLICK_SELECTORS[y]);
                        for (var w = 0; w < elements.length; w++) {
                            if (elements[w] == curr) {
                                //logger("clicked: " + CLICK_SELECTORS[y]);
                                DIGIOH_LIGHTBOX_ANALYTICS.VARS.click_jquery_selector[CLICK_SELECTORS[y]] = true;
                                checkConditionsClick(CLICK_SELECTORS[y]);
                                break;
                            }
                        }
                    }
                });

            }
        }
        catch (e) {
            logError(e, "initClickSelectors");
        }
    }

    var checkConditionsClick = function (selector) {
        try {
            if (LIGHTBOX_GUID == '') {
                var lbguid = checkConditions('click', '', selector);
                if (lbguid && lbguid.length > 0 && LIGHTBOX_GUID == '') {
                    LIGHTBOX_GUID = lbguid;
                    loadLightbox();
                }
            }

            DIGIOH_LIGHTBOX_ANALYTICS.VARS.click_jquery_selector[selector] = false;
        }
        catch (e) {
            logError(e, "checkConditionsClick");
        }
    }

    function initHoverSelectors() {
        try {
            for (var x = 0; x < HOVER_SELECTORS.length; x++) {

                DIGIOH_LIGHTBOX_ANALYTICS.VARS.hover_jquery_selector[HOVER_SELECTORS[x]] = false;

                JQUERY_DIGIOH(HOVER_SELECTORS[x]).mouseenter(function () {
                    var curr = JQUERY_DIGIOH(this)[0];
                    for (var y = 0; y < HOVER_SELECTORS.length; y++) {
                        var elements = JQUERY_DIGIOH(HOVER_SELECTORS[y]);
                        for (var w = 0; w < elements.length; w++) {
                            if (elements[w] == curr) {
                                //logger("mouseenter: " + HOVER_SELECTORS[y]);
                                DIGIOH_LIGHTBOX_ANALYTICS.VARS.hover_jquery_selector[HOVER_SELECTORS[y]] = true;
                                checkConditionsHover(HOVER_SELECTORS[y]);
                                break;
                            }
                        }
                    }
                }).mouseleave(function () {
                    var curr = JQUERY_DIGIOH(this)[0];
                    for (var y = 0; y < HOVER_SELECTORS.length; y++) {
                        var elements = JQUERY_DIGIOH(HOVER_SELECTORS[y]);
                        for (var w = 0; w < elements.length; w++) {
                            if (elements[w] == curr) {
                                //logger("mouseleave: " + HOVER_SELECTORS[y]);
                                DIGIOH_LIGHTBOX_ANALYTICS.VARS.hover_jquery_selector[HOVER_SELECTORS[y]] = false;
                                break;
                            }
                        }
                    }
                });

            }
        }
        catch (e) {
            logError(e, "initHoverSelectors");
        }
    }

    var checkConditionsHover = function (selector) {
        try {
            if (LIGHTBOX_GUID == '') {
                var lbguid = checkConditions('hover', '', selector);
                if (lbguid && lbguid.length > 0 && LIGHTBOX_GUID == '') {
                    LIGHTBOX_GUID = lbguid;
                    loadLightbox();
                }
            }

            //DIGIOH_LIGHTBOX_ANALYTICS.VARS.hover_jquery_selector[selector] = false;
        }
        catch (e) {
            logError(e, "checkConditionsHover");
        }
    }

    function initScrollSelectors() {
        try {
            if (SCROLL_BOXES_ARR.length > 0) {
                jqWin.scroll(function () {
                    DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels = Math.round(jqWin.scrollTop());
                    DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_percent = Math.round(100 * jqWin.scrollTop() / (jqDoc.height() - jqWin.height()));
                    checkConditionsScroll();
                });
            }
        }
        catch (e) {
            logError(e, "initScrollSelectors");
        }
    }

    var checkConditionsScroll = function () {
        try {
            var lbguidCurr = '';
            var lbguidMatch = '';
            var ss = SCROLL_BOXES_ARR;
            for (var x = 0; x < ss.length; x++) {
                if (!SS_EVAL_PREV.hasOwnProperty(ss[x])) {
                    SS_EVAL_PREV[ss[x]] = false;
                }

                lbguidCurr = checkConditions('scroll', ss[x], '');
                if (lbguidCurr && lbguidCurr.length > 0) {
                    if (lbguidMatch == '' && !SS_EVAL_PREV[ss[x]]) {
                        lbguidMatch = lbguidCurr;
                    }
                    SS_EVAL_PREV[ss[x]] = true;
                } else {
                    SS_EVAL_PREV[ss[x]] = false;
                }

                //DIGIOH_LIGHTBOX_ANALYTICS.VARS.scroll_pixels
            }

            if (lbguidMatch && lbguidMatch.length > 0 && LIGHTBOX_GUID == '') {
                LIGHTBOX_GUID = lbguidMatch;
                loadLightbox();
            }
        }
        catch (e) {
            logError(e, "checkConditionsScroll");
        }
    }

    function initExitSelectors() {
        try {
            //https://github.com/joemingna/exit-intent-plugin/blob/master/js/exitPlugin.js

            if (EXIT_BOXES_ARR.length > 0) {
                var mousex = -1;
                var mousey = -1;
                var lastmousex = -1;
                var lastmousey = -1;
                var lastmousetime;
                var mousetravel = 0;

                var directionx = '';
                var directiony = '';

                var pageWidth = jqWin.width();
                var pageHeight = jqWin.height();
                var yOffset = jqWin.scrollTop();
                //var exitWindow = parseInt(pageWidth / 2, 10);

                jqDoc.mousemove(function (e) {
                    mousex = e.pageX;
                    mousey = e.pageY;

                    if (lastmousex > -1) {
                        mousetravel = Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
                        //mousetravel = Math.ceil(Math.sqrt(Math.pow(Math.ceil(Math.abs(mousex - lastmousex)), 2) + Math.pow(Math.ceil(Math.abs(mousey - lastmousey)), 2)));
                    }

                    if (mousex < lastmousex) directionx = 'left';
                    else directionx = 'right';

                    if (mousey <= lastmousey) directiony = 'up';
                    else directiony = 'down';

                    lastmousex = mousex;
                    lastmousey = mousey;
                });

                jqDoc.mouseleave(function () {
                    var yOffset = jqWin.scrollTop();

                    var relative_y = yOffset - mousey;
                    var relative_x = jqWin.width() - mousex;

                    logger('Exit intent detected, with mousetravel = ' + mousetravel);

                    if (directiony == 'up') {
                        DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window top";
                        logger("Exit intent: Mouse exits window top");
                        checkConditionsExit();
                    }
                    else if (directiony == 'down') {
                        DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window bottom";
                        logger("Exit intent: Mouse exits window bottom");
                        checkConditionsExit();
                    }
                    else if (directionx == 'right') {
                        DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window right";
                        logger("Exit intent: Mouse exits window right");
                        checkConditionsExit();
                    }
                    else if (directionx == 'left') {
                        DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window left";
                        logger("Exit intent: Mouse exits window left");
                        checkConditionsExit();
                    }
                    else {
                        logger('Exit intent: skipped checkConditionsExit');
                    }

                    //if (directiony == 'up' && mousey < yOffset + 10 && mousetravel >= 0) {
                    //    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window top";
                    //    logger("Exit intent: Mouse exits window top");
                    //    checkConditionsExit();
                    //}
                    //else if (directiony == 'down' && mousey > pageHeight + yOffset - 10 && mousetravel >= 0) {
                    //    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window bottom";
                    //    logger("Exit intent: Mouse exits window bottom");
                    //    checkConditionsExit();
                    //}
                    //else if (directionx == 'right' && mousex > pageWidth - 10 && mousetravel >= 0) {
                    //    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window right";
                    //    logger("Exit intent: Mouse exits window right");
                    //    checkConditionsExit();
                    //}
                    //else if (directionx == 'left' && mousex < 10 && mousetravel >= 0) {
                    //    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window left";
                    //    logger("Exit intent: Mouse exits window left");
                    //    checkConditionsExit();
                    //}
                    //else {
                    //    logger('Exit intent: skipped checkConditionsExit');
                    //}

                    //if (directiony == 'up' && mousey < yOffset + 20 && mousetravel > 9) {
                    //    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window top";
                    //    logger("Exit intent: Mouse exits window top");
                    //    checkConditionsExit();
                    //}
                    //else if (directiony == 'down' && mousey > pageHeight + yOffset - 20 && mousetravel > 9) {
                    //    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window bottom";
                    //    logger("Exit intent: Mouse exits window bottom");
                    //    checkConditionsExit();
                    //}
                    //else if (directionx == 'right' && mousex > pageWidth - 20 && mousetravel > 9) {
                    //    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window right";
                    //    logger("Exit intent: Mouse exits window right");
                    //    checkConditionsExit();
                    //}
                    //else if (directionx == 'left' && mousex < 20 && mousetravel > 9) {
                    //    DIGIOH_LIGHTBOX_ANALYTICS.VARS.exit_intent = "Mouse exits window left";
                    //    logger("Exit intent: Mouse exits window left");
                    //    checkConditionsExit();
                    //}
                    //else {
                    //    logger('Exit intent: skipped checkConditionsExit');
                    //}

                    //if ((mousey < yOffset + 20 && mousetravel > 9 && mousex < exitWindow) || (mousey < yOffset + 20 && mousetravel > 9 && mousex > pageWidth - exitWindow)) {
                    //    checkConditionsExit();
                    //}
                });

                jqWin.resize(function () {
                    pageWidth = jqWin.width();
                    pageHeight = jqWin.height();
                    yOffset = jqWin.scrollTop();
                    //exitWindow = parseInt(pageWidth / 2, 10);
                });
            }
        }
        catch (e) {
            logError(e, "initExitSelectors");
        }
    }

    var checkConditionsExit = function () {
        try {
            if (LIGHTBOX_GUID == '') {
                var lbguid = checkConditions('exit', '', '');
                if (lbguid && lbguid.length > 0 && LIGHTBOX_GUID == '') {
                    LIGHTBOX_GUID = lbguid;
                    loadLightbox();
                }
            }
        }
        catch (e) {
            logError(e, "checkConditionsExit");
        }
    }

    var checkConditionsLoad = function () {
        try {
            if (LIGHTBOX_GUID == '') {
                var lbguid = checkConditions('load', '', '');
                if (lbguid && lbguid.length > 0 && LIGHTBOX_GUID == '') {
                    LIGHTBOX_GUID = lbguid;
                    loadLightbox();
                }
            }
        }
        catch (e) {
            logError(e, "checkConditionsLoad");
        }
    }

    var checkConditionsTime = function () {
        try {
            var lbguidCurr = '';
            var lbguidMatch = '';
            var ts = TIME_BOXES_ARR;
            for (var x = 0; x < ts.length; x++) {
                if (!TS_EVAL_PREV.hasOwnProperty(ts[x])) {
                    TS_EVAL_PREV[ts[x]] = false;
                }

                lbguidCurr = checkConditions('time', ts[x], '');
                if (lbguidCurr && lbguidCurr.length > 0) {
                    if (lbguidMatch == '' && !TS_EVAL_PREV[ts[x]]) {
                        lbguidMatch = lbguidCurr;
                        //logger("checkConditionsTime:  lbguidMatch = " + lbguidMatch);
                    }
                    TS_EVAL_PREV[ts[x]] = true;
                } else {
                    TS_EVAL_PREV[ts[x]] = false;
                }
            }

            if (lbguidMatch && lbguidMatch.length > 0 && LIGHTBOX_GUID == '') {
                //logger('lbguidMatch: ' + lbguidMatch);
                LIGHTBOX_GUID = lbguidMatch;
                loadLightbox();
            }
        }
        catch (e) {
            logError(e, "checkConditionsTime");
        }
    }

    function checkConditionsPreloadTeasers() {
        try {
            var lbguid = '';
            var var_id = '';
            var foundMatch = false;

            if (DIGIOH_LIGHTBOX_TEASER_PRELOAD_ARR.length > 0 || DIGIOH_LIGHTBOX_TEASER_FOLLOW_ME_ARR.length > 0) {
                for (var i = 0; i < DIGIOH_LIGHTBOX_CONDITIONS.length; i++) {
                    foundMatch = false;
                    lbguid = DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid;

                    var_id = '';
                    if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lbguid)) {
                        var_id = LIGHTBOX_TO_VARIATION_MAP[lbguid];
                    }

                    var skipToNext = false;
                    for (var j = 0; j < DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR.length; j++) {
                        if (lbguid === DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[j]) {
                            skipToNext = true;
                            break;
                        } else if (var_id && var_id === DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR[j]) {
                            skipToNext = true;
                            break;
                        }
                    }

                    if (!skipToNext) {
                        if (var_id.length > 10) {
                            if (JQUERY_DIGIOH.inArray(var_id, DIGIOH_LIGHTBOX_TEASER_FOLLOW_ME_ARR) > -1) {
                                foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, lbguid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, true, true);
                                if (foundMatch)
                                    logger('** Opening Follow Me Teaser');
                            }
                            else if (JQUERY_DIGIOH.inArray(var_id, DIGIOH_LIGHTBOX_TEASER_PRELOAD_ARR) > -1) {
                                foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, lbguid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, true, false);
                            }
                        }
                        else {
                            if (JQUERY_DIGIOH.inArray(lbguid, DIGIOH_LIGHTBOX_TEASER_FOLLOW_ME_ARR) > -1) {
                                foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, lbguid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, true, true);
                                if (foundMatch)
                                    logger('** Opening Follow Me Teaser');
                            } else if (JQUERY_DIGIOH.inArray(lbguid, DIGIOH_LIGHTBOX_TEASER_PRELOAD_ARR) > -1) {
                                foundMatch = evalConditions(DIGIOH_LIGHTBOX_CONDITIONS[i].conditions, lbguid, DIGIOH_LIGHTBOX_ANALYTICS.VARS, true, false);
                            }
                        }

                        if (foundMatch) {
                            var open_id = lbguid;
                            if (var_id.length > 7) {
                                open_id = var_id;
                            }

                            if (EFFECTS[open_id]['widget_type'] == 'sidebar') {
                                //logger('** Opening Preloaded Teaser: ' + open_id);
                                openTeaser(EFFECTS[open_id].sidebar.teaser, open_id);
                            } else if (EFFECTS[open_id]['widget_type'] == 'fancybox') {
                                //logger('** Opening Preloaded Teaser: ' + open_id);
                                openTeaser(EFFECTS[open_id].fancybox.teaser, open_id);
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            logError(e, "checkConditionsPreloadTeasers");
        }
    }

    function setLightboxDomId(lid) {
        try {
            if (!LOADED_BOX_DOM_ID_MAP.hasOwnProperty(lid) || LOADED_BOX_DOM_ID_MAP[lid].length < 10) {
                LOADED_BOX_DOM_ID_MAP[lid] = 'lightbox-' + lid + '-' + new Date().getTime();
            }

            return LOADED_BOX_DOM_ID_MAP[lid];
        }
        catch (e) {
            logError(e, "setLightboxDomId");
        }

        return '';
    }

    var getLightboxDomId = function (lid) {
        try {
            if (LOADED_BOX_DOM_ID_MAP.hasOwnProperty(lid) && LOADED_BOX_DOM_ID_MAP[lid].length > 10) {
                return LOADED_BOX_DOM_ID_MAP[lid];
            }
        }
        catch (e) {
            logError(e, "getLightboxDomId");
        }

        return '';
    }

    function preloadLightboxes() {
        try {
            if (DIGIOH_LIGHTBOX_PRELOAD_ARR.length > 0) {
                for (var x = 0; x < DIGIOH_LIGHTBOX_PRELOAD_ARR.length; x++) {
                    preloadIframe(DIGIOH_LIGHTBOX_PRELOAD_ARR[x]);
                }
            }
        }
        catch (e) {
            logError(e, "preloadLightboxes");
        }
    }


    function inlineResponsiveResizing(lbid, dom_id, start_time, prev_width, prev_height) {
        try {
            var current_time = new Date().getTime();
            var diff_in_millis = current_time - start_time;

            var new_width = 0;
            var new_height = 0;
            if (JQUERY_DIGIOH('#' + dom_id).length) {
                new_width = JQUERY_DIGIOH('#' + dom_id).width();
                new_height = JQUERY_DIGIOH('#' + dom_id).height();
            }

            //wMax = getResponsiveBoxWidthMax(lbid);
            //wMin = getResponsiveBoxWidthMin(lbid);
            hMax = getResponsiveBoxHeightMax(lbid);
            hMin = getResponsiveBoxHeightMin(lbid);

            //if (new_width > wMax) {
            //    new_width = wMax;
            //    JQUERY_DIGIOH('#' + dom_id).width(new_width);
            //}

            //if (new_width < wMin) {
            //    new_width = wMin;
            //    JQUERY_DIGIOH('#' + dom_id).width(new_width);
            //}

            if (diff_in_millis > 300) {
                if (new_height > hMax) {
                    new_height = hMax;
                    JQUERY_DIGIOH('#' + dom_id).height(new_height);
                }

                if (new_height < hMin) {
                    new_height = hMin;
                    JQUERY_DIGIOH('#' + dom_id).height(new_height);
                }
            }

            if (new_width !== prev_width || new_height !== prev_height) {
                window.setTimeout(function () {
                    inlineResponsiveResizing(lbid, dom_id, start_time, new_width, new_height);
                }, 100);
            }
            else {
                CURRENT_PAGE_DIMS_RESPONSIVE[lbid] = { width: new_width, height: new_height };

                if (diff_in_millis < 1000) {
                    sendMessageToIframe({ sender: 'digioh', action: 'dimensions_changed', widget_type: EFFECTS[lbid].widget_type, width: new_width, height: new_height }, lbid);

                    window.setTimeout(function () {
                        inlineResponsiveResizing(lbid, dom_id, start_time, new_width, new_height);
                    }, 100);
                } else {
                    keepSendingResizeToChildUntilReceived({ sender: 'digioh', action: 'dimensions_changed', widget_type: EFFECTS[lbid].widget_type, width: new_width, height: new_height }, lbid, 100, 0);
                }
            }
        }
        catch (e) {
            logError(e, "inlineResponsiveResizing");
        }
    }


    function preloadIframe(lid, inline_style, inline_jquery_selector, inline_jquery_method, inline_clear) {
        try {
            if (typeof inline_style === 'undefined' || inline_style === null)
                inline_style = '';

            if (typeof inline_jquery_selector === 'undefined' || inline_jquery_selector === null)
                inline_jquery_selector = '';

            if (typeof inline_jquery_method === 'undefined' || inline_jquery_method === null)
                inline_jquery_method = '';

            if (typeof inline_clear === 'undefined' || inline_clear === null)
                inline_clear = '';


            var isVariation = false;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                isVariation = true;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                lid = LIGHTBOX_TO_VARIATION_MAP[lid];
                isVariation = true;
            } else if (DIGIOH_PUBLISHED_VARIATIONS_ARR.length > 0 && DIGIOH_PUBLISHED_VARIATIONS_ARR.join(',').indexOf(lid) >= 0) {
                logger('** Skipping Preload Variation, it is ineligible: ' + lid);
                return;
            }

            if (JQUERY_DIGIOH.inArray(lid, PRELOADED_LIGHTBOXES) == -1) {
                PRELOADED_LIGHTBOXES.push(lid);
                //logger('** Preload Lightbox Started: ' + lid);
            } else {
                //logger('** Already Preloaded Lightbox: ' + lid);
                return;
            }

            var dom_id = setLightboxDomId(lid);
            var add_classes = 'preloaded_lightbox';


            var pref = getPagePref(lid);

            var widthAndHeight = '';
            var widthAndHeightInlineResponsive = '';


            var using_custom_iframe = (EFFECTS[lid].hasOwnProperty('iframe') && EFFECTS[lid]['iframe']['use_custom']);

            if (using_custom_iframe) {
                widthAndHeight += 'width: ' + EFFECTS[lid]['iframe']['width'] + 'px;';
                widthAndHeight += 'height: ' + EFFECTS[lid]['iframe']['height'] + 'px;';

                add_classes += ' preloaded_custom_iframe';
            } else {
                if (EFFECTS[lid].hasOwnProperty(pref + 'responsive') && EFFECTS[lid][pref + 'responsive'].use) {
                    widthAndHeight += 'width: ' + getResponsiveBoxWidth(lid) + 'px;';
                    widthAndHeight += 'height: ' + getResponsiveBoxHeight(lid) + 'px;';

                    var wMax = getResponsiveBoxWidthMax(lid);
                    var wMin = getResponsiveBoxWidthMin(lid);
                    var hMax = getResponsiveBoxHeightMax(lid);
                    var hMin = getResponsiveBoxHeightMin(lid);

                    widthAndHeightInlineResponsive = ";width:" + getResponsiveBoxWidthPercent(lid) + "%;height:" + getResponsiveBoxHeightPercent(lid) + "%;";
                    widthAndHeightInlineResponsive += "max-width:" + wMax + "px;" + "min-width:" + wMin + "px;" + "max-height:" + hMax + "px;" + "min-height:" + hMin + "px;";
                } else {
                    widthAndHeight += 'width: ' + getBoxWidth(lid) + 'px;';
                    widthAndHeight += 'height: ' + getBoxHeight(lid) + 'px;';
                }

                //logger('widthAndHeight: ' + widthAndHeight);
            }



            //setIframeSrc(lid, true);

            if (EFFECTS[lid]['widget_type'] === 'fancybox') {
                //body.append("<div id='" + dom_id + "' class='" + add_classes + "' style='z-index: 9948035; position: absolute; display: none; left: -2000px; top: -2000px; overflow: visible !important;'><div title='Close' class='digioh_fb_close' style='" + getCloseButtonStyle(EFFECTS[lid].fancybox.close_button, EFFECTS[lid].widget_type) + "'></div><iframe src=" + CURRENT_IFRAME_SRC + " width='" + getBoxWidth(lid) + "' height='" + getBoxHeight(lid) + "' frameborder='0' scrolling='no'></iframe></div>");
                body.append("<div id='" + dom_id + "' class='" + add_classes + "' style='z-index: 9948035; position: absolute; display: none; left: -2000px; top: -2000px; overflow: visible !important; " + widthAndHeight + "'><div title='Close' class='digioh_fb_close' style='" + getCloseButtonStyle(EFFECTS[lid].fancybox.close_button, EFFECTS[lid].widget_type) + "'></div></div>");

                JQUERY_DIGIOH('#' + dom_id + ' .digioh_fb_close').click(function () {
                    JQUERY_DIGIOH.fb_digioh.close();
                });
            } else if (EFFECTS[lid]['widget_type'] === 'banner') {
                body.append("<div id='" + dom_id + "' class='" + add_classes + "' style='display: none; " + getBannerPosition(EFFECTS[lid].banner, lid) + "'><div title='Close' class='digioh-banner-iframe-close' style='" + getCloseButtonStyle(EFFECTS[lid].banner.close_button, EFFECTS[lid].widget_type) + "'></div></div>");
            } else if (EFFECTS[lid]['widget_type'] === 'sidebar') {
                body.append("<div id='" + dom_id + "' class='" + add_classes + "' style='display: none; " + getSidebarPosition(EFFECTS[lid].sidebar, lid) + "'><div title='Close' class='digioh-sidebar-iframe-close' style='" + getCloseButtonStyle(EFFECTS[lid].sidebar.close_button, EFFECTS[lid].widget_type) + "'></div></div>");
            } else if (EFFECTS[lid]['widget_type'] === 'inline' && inline_style == '') {
                return;
            } else if (EFFECTS[lid]['widget_type'] === 'inline' && inline_style !== '') {

                if (inline_style.indexOf('position:') === -1) {
                    inline_style = 'position:relative;' + inline_style;
                }

                if (IS_PREVIEW) {
                    JQUERY_DIGIOH('body').append('<div id="' + dom_id + '" style="' + inline_style + widthAndHeightInlineResponsive + '"></div>');
                } else if (EFFECTS[lid].inline.position_using == 'custom_function') {
                    JQUERY_DIGIOH('body').append('<div id="' + dom_id + '" style="' + inline_style + widthAndHeightInlineResponsive + '"></div>');
                    JQUERY_DIGIOH('#' + dom_id).hide();
                }
                else if (inline_jquery_selector === '') {
                    JQUERY_DIGIOH('body').append('<div id="' + dom_id + '" style="' + inline_style + widthAndHeightInlineResponsive + '"></div>');
                } else {
                    if (JQUERY_DIGIOH(inline_jquery_selector).length) {
                        if (JQUERY_DIGIOH(inline_jquery_selector).length > 1) {
                            JQUERY_DIGIOH(inline_jquery_selector)[0][inline_jquery_method]('<div id="' + dom_id + '" style="' + inline_style + widthAndHeightInlineResponsive + '"></div>' + inline_clear);
                        } else {
                            JQUERY_DIGIOH(inline_jquery_selector)[inline_jquery_method]('<div id="' + dom_id + '" style="' + inline_style + widthAndHeightInlineResponsive + '"></div>' + inline_clear);
                        }
                    } else {
                        logger('DIGIOH: inline lightbox jquery_selector not found on page: ' + inline_jquery_selector);
                        return;
                    }
                }
            }

            if (using_custom_iframe) {
                if (EFFECTS[lid]['iframe']['is_self_hosted']) {
                    if (PROTOCOL == 'https://' && EFFECTS[lid]['iframe']['self_hosted_url'].indexOf('http://') == 0) {
                        CURRENT_IFRAME_SRC = "https://" + EFFECTS[lid]['iframe']['self_hosted_url'].substring(7);
                    } else {
                        CURRENT_IFRAME_SRC = EFFECTS[lid]['iframe']['self_hosted_url'];
                    }
                } else {
                    if (isVariation) {
                        if (!IS_PREVIEW) {
                            CURRENT_IFRAME_SRC = __CDNVendorFilesPath + VENDOR_GUID + '/variation/' + lid + '/custom_iframe.html?v=' + EFFECTS[lid]['iframe']['html_last_uploaded'];
                        } else {
                            CURRENT_IFRAME_SRC = __CDNVendorFilesPath + VENDOR_GUID + '/variation/' + lid + '/custom_iframe_preview.html?v=' + EFFECTS[lid]['iframe']['html_last_uploaded'];
                        }
                    } else {
                        if (!IS_PREVIEW) {
                            CURRENT_IFRAME_SRC = __CDNVendorFilesPath + VENDOR_GUID + '/lightbox/' + lid + '/custom_iframe.html?v=' + EFFECTS[lid]['iframe']['html_last_uploaded'];
                        } else {
                            CURRENT_IFRAME_SRC = __CDNVendorFilesPath + VENDOR_GUID + '/lightbox/' + lid + '/custom_iframe_preview.html?v=' + EFFECTS[lid]['iframe']['html_last_uploaded'];
                        }
                    }
                }

                JQUERY_DIGIOH('#' + dom_id).append("<iframe src=" + CURRENT_IFRAME_SRC + " width='" + getBoxWidth(lid) + "' height='" + getBoxHeight(lid) + "' frameborder='0' scrolling='no'></iframe>");

                if (JQUERY_DIGIOH.inArray(lid, PRELOADED_LIGHTBOXES_LOADED) == -1) {
                    PRELOADED_LIGHTBOXES_LOADED.push(lid);
                    //logger('** Preload Lightbox Loaded (custom iframe): ' + lid);
                }
            } else {
                loadLightningIframe(lid, dom_id);

                if (EFFECTS[lid]['widget_type'] === 'inline') {
                    registerLightboxShow(lid);

                    if (EFFECTS[lid].hasOwnProperty(pref + 'responsive') && EFFECTS[lid][pref + 'responsive'].use) {
                        inlineResponsiveResizing(lid, dom_id, (new Date().getTime()), 0, 0);
                    }
                }
            }

            if (EFFECTS[lid]['widget_type'] === 'inline' && inline_style !== '' && EFFECTS[lid].inline.position_using === 'custom_function') {
                if (!isVariation && DIGIOH_LIGHTBOX_IDS.hasOwnProperty(lid) && DIGIOH_CUSTOM_JS.hasOwnProperty('InlineLightboxFormPositionCustomFunction_' + DIGIOH_LIGHTBOX_IDS[lid])) {
                    DIGIOH_CUSTOM_JS['InlineLightboxFormPositionCustomFunction_' + DIGIOH_LIGHTBOX_IDS[lid]](window, document, JQUERY_DIGIOH, lid, dom_id, inline_style);
                }
                else if (isVariation && DIGIOH_LIGHTBOX_IDS.hasOwnProperty(lid) && DIGIOH_CUSTOM_JS.hasOwnProperty('InlineLightboxFormPositionCustomFunction_VAR_' + DIGIOH_LIGHTBOX_IDS[lid])) {
                    DIGIOH_CUSTOM_JS['InlineLightboxFormPositionCustomFunction_VAR_' + DIGIOH_LIGHTBOX_IDS[lid]](window, document, JQUERY_DIGIOH, lid, dom_id, inline_style);
                }
            }

        }
        catch (e) {
            logError(e, "preloadIframe");
        }
    }

    var loadLightbox = function (lid_override) {
        try {
            if (lid_override && LIGHTBOX_GUID == '') {
                LIGHTBOX_GUID = lid_override;
            } else if (!checkLightboxMasterRules()) {
                logger('DIGIOH: checkLightboxMasterRules() called from loadLightbox() - prevented display - ' + LIGHTBOX_GUID);
                LIGHTBOX_GUID = '';
                return false;
            }

            var var_id = '';
            var orig_lid = LIGHTBOX_GUID;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(LIGHTBOX_GUID)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[LIGHTBOX_GUID];
                var_id = LIGHTBOX_GUID;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(LIGHTBOX_GUID)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[LIGHTBOX_GUID];
            }

            if (var_id !== '' && var_id.length > 7) {
                LIGHTBOX_GUID = var_id;
            }

            if (!IS_PREVIEW || IS_DEV) {
                if (!isInlineLightbox(LIGHTBOX_GUID)) {
                    var customJsResult = DIGIOH_CUSTOM_JS.runCustomJsBeforeLightboxDisplay(window, document, JQUERY_DIGIOH, orig_lid, var_id);
                    logger('DIGIOH: runCustomJsBeforeLightboxDisplay - ' + LIGHTBOX_GUID);
                    if (!customJsResult) {
                        logger('DIGIOH_CUSTOM_JS.runCustomJsBeforeLightboxDisplay - prevented lightbox ' + LIGHTBOX_GUID + ' from being displayed');
                        return false;
                    }
                }
            }

            LOADED_LIGHTBOXES.push(LIGHTBOX_GUID);

            if (EFFECTS[LIGHTBOX_GUID].hasOwnProperty('iframe') && EFFECTS[LIGHTBOX_GUID]['iframe']['use_custom']) {
                EFFECTS[LIGHTBOX_GUID].width = EFFECTS[LIGHTBOX_GUID]['iframe']['width'];
                EFFECTS[LIGHTBOX_GUID].height = EFFECTS[LIGHTBOX_GUID]['iframe']['height'];
            }

            if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) > -1) {
                //showPreloadedLightbox();
                tryShowPreloadedLightbox();
            } else {
                //showLightbox();
                preloadIframe(LIGHTBOX_GUID);
                tryShowPreloadedLightbox();
            }

            //tryLoadGeoIp(false, function () { return; });
        }
        catch (e) {
            logError(e, "loadLightbox");
        }
    }

    function tryShowPreloadedLightbox() {
        if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES_LOADED) > -1) {
            showPreloadedLightbox();
        } else {
            setTimeout(tryShowPreloadedLightbox, 100);
        }
    }

    function showPreloadedLightbox() {
        try {
            if (EFFECTS[LIGHTBOX_GUID].widget_type === "fancybox") {
                initFancybox(true);
            } else if (EFFECTS[LIGHTBOX_GUID].widget_type === "sidebar") {
                showPreloadedSidebar(LIGHTBOX_GUID);
            } else if (EFFECTS[LIGHTBOX_GUID].widget_type === "banner") {
                showPreloadedBanner(LIGHTBOX_GUID);
            }
        }
        catch (e) {
            logError(e, "showPreloadedLightbox");
        }
    }

    function showPreloadedSidebar(lid) {
        try {
            SIDEBAR_CLOSE_MAP[lid] = 0;

            var dom_id = getLightboxDomId(lid);

            if (dom_id != '' && JQUERY_DIGIOH('#' + dom_id).length) {
                var ele = JQUERY_DIGIOH('#' + dom_id);
                ele.attr('style', getSidebarPosition(EFFECTS[lid].sidebar, lid));

                showSidebar(lid);
            } else {
                initSidebar(lid);
            }
        }
        catch (e) {
            logError(e, "showPreloadedSidebar");
        }
    }

    function showPreloadedBanner(lid) {
        try {
            BANNER_CLOSE_MAP[lid] = 0;

            var dom_id = getLightboxDomId(lid);

            if (dom_id != '' && JQUERY_DIGIOH('#' + dom_id).length) {
                var ele = JQUERY_DIGIOH('#' + dom_id);
                ele.attr('style', getBannerPosition(EFFECTS[lid].banner, lid));

                showBanner(lid);
            } else {
                initBanner(lid);
            }
        }
        catch (e) {
            logError(e, "showPreloadedBanner");
        }
    }

    function showLightbox() {
        try {
            if (EFFECTS[LIGHTBOX_GUID].widget_type === "fancybox") {
                initFancybox(false);
            } else if (EFFECTS[LIGHTBOX_GUID].widget_type === "sidebar") {
                initSidebar(LIGHTBOX_GUID);
            } else if (EFFECTS[LIGHTBOX_GUID].widget_type === "banner") {
                initBanner(LIGHTBOX_GUID);
            }
        }
        catch (e) {
            logError(e, "showLightbox");
        }
    }

    function initSidebar(lid) {
        try {
            var dom_id = setLightboxDomId(lid);

            if (JQUERY_DIGIOH('#' + dom_id).length) {
                showSidebar(lid);
            } else {
                //body.append("<div id='" + dom_id + "' style='" + getSidebarPosition(EFFECTS[lid].sidebar, lid) + "'><div title='Close' class='digioh-sidebar-iframe-close' style='" + getCloseButtonStyle(EFFECTS[lid].sidebar.close_button, EFFECTS[lid].widget_type) + "'></div><iframe src=" + CURRENT_IFRAME_SRC + " width='" + getBoxWidth(lid) + "' height='" + getBoxHeight(lid) + "' frameborder='0' scrolling='no'></iframe></div>");
                body.append("<div id='" + dom_id + "' style='" + getSidebarPosition(EFFECTS[lid].sidebar, lid) + "'><div title='Close' class='digioh-sidebar-iframe-close' style='" + getCloseButtonStyle(EFFECTS[lid].sidebar.close_button, EFFECTS[lid].widget_type) + "'></div></div>");
                loadLightningIframe(lid, dom_id);
                if (EFFECTS[lid].hasOwnProperty('iframe') && EFFECTS[lid]['iframe']['use_custom']) {
                    showSidebar(lid);
                }
            }
        }
        catch (e) {
            logError(e, "initSidebar");
        }
    }

    function initBanner(lid) {
        try {
            var dom_id = setLightboxDomId(lid);

            if (JQUERY_DIGIOH('#' + dom_id).length) {
                showBanner(lid);
            } else {
                body.append("<div id='" + dom_id + "' style='" + getBannerPosition(EFFECTS[lid].sidebar, lid) + "'><div title='Close' class='digioh-sidebar-iframe-close' style='" + getCloseButtonStyle(EFFECTS[lid].banner.close_button, EFFECTS[lid].widget_type) + "'></div></div>");
                loadLightningIframe(lid, dom_id);
                if (EFFECTS[lid].hasOwnProperty('iframe') && EFFECTS[lid]['iframe']['use_custom']) {
                    showBanner(lid);
                }
            }
        }
        catch (e) {
            logError(e, "initBanner");
        }
    }

    function showBanner(lid) {
        try {
            BANNER_CLOSE_MAP[lid] = 0;

            var dom_id = getLightboxDomId(lid);

            JQUERY_DIGIOH('#' + dom_id + ' .digioh-banner-iframe-close').click(function () {
                closeBanner(lid);
            });

            //if (effectsHasTeaserDisplayBanner(lid)) {
            //    closeTeaser(EFFECTS[lid].banner.teaser, lid, false);
            //}

            if (EFFECTS[lid].banner.close_button.display) {
                JQUERY_DIGIOH('#' + dom_id + ' .digioh-banner-iframe-close').css({ 'display': 'block' });
            }

            if (!EFFECTS[lid].banner.hasOwnProperty('placement') || EFFECTS[lid].banner.placement !== 'bottom') {
                if (EFFECTS[lid].banner.page_overlap === 'move') {
                    var banner_height = getActualBoxWidthAndHeight(lid).height;
                    JQUERY_DIGIOH('body').prepend("<div id='digioh-banner-spacer-" + lid + "' style='width:100%; height:" + banner_height + "px;'></div>");
                }
            }

            var ele = JQUERY_DIGIOH('#' + dom_id);
            ele.attr('style', getBannerPosition(EFFECTS[lid].banner, lid));
            ele.show();

            registerLightboxShow(lid);
            //registerCloseBannerClick(lid);
            //registerCloseBannerScroll(lid);
            //registerCloseBannerTime(lid);
            registerMobileSidebarToLightboxConversion(lid, dom_id);
        }
        catch (e) {
            logError(e, "showBanner");
        }
    }

    function showSidebar(lid) {
        try {
            SIDEBAR_CLOSE_MAP[lid] = 0;

            var dom_id = getLightboxDomId(lid);

            JQUERY_DIGIOH('#' + dom_id + ' .digioh-sidebar-iframe-close').click(function () {
                closeSidebar(lid);
            });

            if (effectsHasTeaserDisplaySidebar(lid)) {
                closeTeaser(EFFECTS[lid].sidebar.teaser, lid, false);
            }

            if (EFFECTS[lid].sidebar.close_button.display) {
                JQUERY_DIGIOH('#' + dom_id + ' .digioh-sidebar-iframe-close').css({ 'display': 'block' });
            }

            var oa = getOpenAnimation(EFFECTS[lid].sidebar, lid);
            
            if (!oa) {
                oa = {};
                var ele = JQUERY_DIGIOH('#' + dom_id);
                ele.attr('style', getSidebarPosition(EFFECTS[lid].sidebar, lid));
                ele.show();

                registerLightboxShow(lid);
                registerCloseSidebarClick(lid);
                registerCloseSidebarScroll(lid);
                registerCloseSidebarTime(lid);
            } else {
                //logger('DIGIOH: getOpenAnimation...');
                //logger(oa);

                JQUERY_DIGIOH('#' + dom_id).show().animate({ top: oa.top, left: oa.left }, {
                    duration: EFFECTS[lid].sidebar.speed.open,
                    easing: EFFECTS[lid].sidebar.easing.open,
                    complete: function () {
                        registerLightboxShow(lid);
                        registerCloseSidebarClick(lid);
                        registerCloseSidebarScroll(lid);
                        registerCloseSidebarTime(lid);
                        ////registerSidebarMobileFixedPosition(lid, dom_id);

                        var sbp = getSidebarPosition(EFFECTS[lid].sidebar, lid);
                        var sbpaa = getSidebarPositionAfterAnimation(EFFECTS[lid].sidebar, lid);
                        if (sbp !== sbpaa) {
                            JQUERY_DIGIOH('#' + dom_id).attr('style', sbpaa);
                            logger('DIGIOH: getSidebarPositionAfterAnimation() ==> override (sbpaa) (sbp)');
                            logger(sbpaa);
                            logger(sbp);
                        }

                        registerMobileSidebarToLightboxConversion(lid, dom_id);
                    }
                });
            }
        }
        catch (e) {
            logError(e, "showSidebar");
        }
    }


    function registerMobileSidebarToLightboxConversion(lid, dom_id) {
        try {
            if (!MOBILE_SCROLL_TOP_MAP.hasOwnProperty(lid) && isMobile()) {
                MOBILE_SCROLL_TOP_MAP[lid] = Math.round(jqWin.scrollTop());

                var ele = JQUERY_DIGIOH('#' + dom_id);
                //var is_jq_scroll_registered = false;
                //var is_focused = false;
                //var is_blurred = false;

                //var css_top = '';
                //var css_left = '';
                //var css_margin_left = '';

                //var has_fancybox_fix_displayed = false;

                var origStyle = '';

                JQUERY_DIGIOH('#lightbox-iframe-' + lid).contents().find('input').each(function () {
                    JQUERY_DIGIOH(this).focus(function () {

                        //logger('scrollTop: ' + jqWin.scrollTop());

                        PREVENT_SIDEBAR_CLOSE_GUIDS[lid] = true;

                        if (EFFECTS[lid].widget_type === 'sidebar' && EFFECTS[lid].sidebar.css_positioning === 'fixed') {
                            origStyle = ele.attr('style');

                            FOCUSED_SIDEBAR_BANNER_GUIDS[lid] = true;

                            ele.attr('style', getSidebarPositionMobileFocused(EFFECTS[lid].sidebar, lid));

                            for (var i = 1; i <= 5; i++) {
                                window.setTimeout(function () {
                                    ele.attr('style', getSidebarPositionMobileFocused(EFFECTS[lid].sidebar, lid));
                                }, (100 * i * 2));
                            }
                        }

                        if (EFFECTS[lid].widget_type === 'banner' && EFFECTS[lid].banner.css_positioning === 'fixed') {
                            origStyle = ele.attr('style');

                            FOCUSED_SIDEBAR_BANNER_GUIDS[lid] = true;

                            ele.attr('style', getBannerPositionMobileFocused(EFFECTS[lid].banner, lid));

                            for (var i = 1; i <= 5; i++) {
                                window.setTimeout(function () {
                                    ele.attr('style', getBannerPositionMobileFocused(EFFECTS[lid].banner, lid));
                                }, (100 * i * 2));
                            }
                        }



                        //if (!has_fancybox_fix_displayed) {
                        //    has_fancybox_fix_displayed = true;

                        //    ele.attr('style', 'z-index: 9948035; display: block; position: absolute; left: -2000px; top: -2000px; overflow: visible !important;');
                        //    if (EFFECTS[lid].widget_type === 'sidebar') {
                        //        ele.find('.digioh-sidebar-iframe-close').addClass('digioh_fb_close').removeClass('digioh-sidebar-iframe-close');
                        //    } else if (EFFECTS[lid].widget_type === 'banner') {
                        //        ele.find('.digioh-banner-iframe-close').addClass('digioh_fb_close').removeClass('digioh-banner-iframe-close');
                        //    }
                        //    window.setTimeout(function () {
                        //        fancyboxMobileSidebarFix(lid);
                        //        logger('fancyboxMobileSidebarFix()');
                        //    }, 200);
                        //}

                    }).blur(function () {
                        //if (EFFECTS[lid].sidebar.css_positioning === 'fixed') {
                        //    ele.attr('style', origStyle);
                        //}
                    });
                });
            }
        }
        catch (e) {
            logError(e, "registerMobileSidebarToLightboxConversion");
        }
    }


    function getMobileSidebarToLightboxConversionPositionCss(lid, position_type) {
        try {
            var css_top = '';
            var css_left = '';
            var css_margin_left = '';

            var jqW = jqWin.width();
            var jqH = jqWin.height();
            var winW = window.innerWidth || jqW;
            var winH = window.innerHeight || jqH;

            var scrollTop = jqWin.scrollTop();
            var scrollLeft = jqWin.scrollLeft();
            var hasScrollbar = true;
            var isPortrait = true;

            //logger('scrollTop: ' + scrollTop);
            //logger('winH/jqH: ' + winH + '/' + jqH);
            //logger('winW/jqW: ' + winW + '/' + jqW);

            if (winH > winW) {
                //iPhone in Portrait
                isPortrait = true;

                if (winH - jqH <= 10) {
                    //With Scrollbar
                    winH = Math.round(winH * 52 / 94);
                    hasScrollbar = true;
                } else {
                    //Without Scrollbar
                    winH = Math.round(winH * 55 / 97);
                    hasScrollbar = false;
                }
            } else {
                //iPhone in Landscape
                isPortrait = false;

                if (jqH - winH <= 10) {
                    //Without Scrollbar
                    winH = Math.round(winH * 24 / 58);
                    hasScrollbar = false;
                } else {
                    //With Scrollbar
                    winH = Math.round(winH * 18 / 51);
                    hasScrollbar = true;
                }
            }

            //69 = winH - jqH (portrait without scrollbar)
            //44 = jqH - winH (landscape with scrollbar)


            if (typeof position_type !== 'string' || position_type !== 'absolute') {
                position_type = 'fixed';
            } else {
                position_type = 'absolute';
            }


            css_top = (Math.round(scrollTop) + 20 + 'px');

            if ((getBoxWidth(lid) + 20) >= winW) {
                if (scrollLeft > 0) {
                    css_left = Math.round(scrollLeft) + 10 + 'px';
                } else {
                    css_left = '10px';
                }
            } else {
                if (scrollLeft > 0) {
                    css_left = Math.round(scrollLeft) + Math.round(winW / 2) - Math.round(getBoxWidth(lid) / 2) + 'px';
                } else {
                    css_left = Math.round(winW / 2) - Math.round(getBoxWidth(lid) / 2) + 'px';
                }
            }

            position_type = 'absolute';
            css_margin_left = '0px';

            var css_obj = {
                'top': css_top,
                'left': css_left,
                'width': (getBoxWidth(lid) + 'px'),
                'height': (getBoxHeight(lid) + 'px')
            };

            var style_attr = "position: absolute; z-index: 9948030; top: " + css_top + "; left: " + css_left + "; width: " + getBoxWidth(lid) + "px; height: " + getBoxHeight(lid) + "px;";

            return style_attr;
        }
        catch (e) {
            logError(e, "getMobileSidebarToLightboxConversionPositionCss");
        }
    }


    //function registerSidebarMobileFixedPosition(lid, dom_id) {
    //    if (!MOBILE_SCROLL_TOP_MAP.hasOwnProperty(lid) && EFFECTS[lid].sidebar.css_positioning == "fixed" && DIGIOH_LIGHTBOX_ANALYTICS.VARS.device == 'Phone/Tablet') {
    //        MOBILE_SCROLL_TOP_MAP[lid] = 0;

    //        var ele = JQUERY_DIGIOH('#' + dom_id);
    //        var winH = window.innerHeight;
    //        var eleTop = ele.offset().top;
    //        var posy = EFFECTS[lid].sidebar.position.split('-')[0];

    //        ele.css({ 'position': 'absolute' });

    //        MOBILE_SCROLL_TOP_MAP[lid] = Math.round(jqWin.scrollTop());

    //        if (posy == 'top') {
    //            ele.css('top', MOBILE_SCROLL_TOP_MAP[lid] + 'px');
    //        } else if (posy == 'center') {
    //            ele.css('top', Math.round(MOBILE_SCROLL_TOP_MAP[lid] + (winH / 2) - (getBoxHeight(lid) / 2)) + 'px');
    //        } else if (posy == 'bottom') {
    //            ele.css('top', Math.round(MOBILE_SCROLL_TOP_MAP[lid] + winH - getBoxHeight(lid)) + 'px');
    //        }

    //        jqWin.scroll(function () {
    //            ele.css('top', Math.round(jqWin.scrollTop()) + 'px');
    //        });
    //    }
    //}



    function setIframeSrc(lid, is_preload) {
        try {
            if (typeof is_preload !== "undefined" && is_preload) is_preload = true;
            else is_preload = false;

            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                isVariation = true;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                lid = LIGHTBOX_TO_VARIATION_MAP[lid];
                isVariation = true;
            }

            if (EFFECTS[lid].hasOwnProperty('iframe') && EFFECTS[lid]['iframe']['use_custom']) {
                if (EFFECTS[lid]['iframe']['is_self_hosted']) {
                    if (PROTOCOL == 'https://' && EFFECTS[lid]['iframe']['self_hosted_url'].indexOf('http://') == 0) {
                        CURRENT_IFRAME_SRC = "https://" + EFFECTS[lid]['iframe']['self_hosted_url'].substring(7);
                    } else {
                        CURRENT_IFRAME_SRC = EFFECTS[lid]['iframe']['self_hosted_url'];
                    }
                } else {
                    if (isVariation) {
                        if (!IS_PREVIEW) {
                            CURRENT_IFRAME_SRC = __CDNVendorFilesPath + VENDOR_GUID + '/variation/' + lid + '/custom_iframe.html?v=' + EFFECTS[lid]['iframe']['html_last_uploaded'];
                        } else {
                            CURRENT_IFRAME_SRC = __CDNVendorFilesPath + VENDOR_GUID + '/variation/' + lid + '/custom_iframe_preview.html?v=' + EFFECTS[lid]['iframe']['html_last_uploaded'];
                        }
                    } else {
                        if (!IS_PREVIEW) {
                            CURRENT_IFRAME_SRC = __CDNVendorFilesPath + VENDOR_GUID + '/lightbox/' + lid + '/custom_iframe.html?v=' + EFFECTS[lid]['iframe']['html_last_uploaded'];
                        } else {
                            CURRENT_IFRAME_SRC = __CDNVendorFilesPath + VENDOR_GUID + '/lightbox/' + lid + '/custom_iframe_preview.html?v=' + EFFECTS[lid]['iframe']['html_last_uploaded'];
                        }
                    }
                }
            } else {

                if (IS_DEV) CURRENT_IFRAME_SRC = __CDNStaticFilesPath + 'lightbox_dev.html?';
                else CURRENT_IFRAME_SRC = __CDNStaticFilesPath + 'lightbox.html?';

                //CURRENT_IFRAME_SRC = __CDNStaticFilesPath + 'lightbox.html?';

                CURRENT_IFRAME_SRC += 'wt=' + EFFECTS[lid]['widget_type'];
                CURRENT_IFRAME_SRC += '&se=' + (SHOW_ERRORS ? '1' : '0');
                CURRENT_IFRAME_SRC += '&prev=' + (IS_PREVIEW ? '1' : '0');
                CURRENT_IFRAME_SRC += '&vid=' + VENDOR_GUID;
                CURRENT_IFRAME_SRC += '&lid=' + lid;
                CURRENT_IFRAME_SRC += '&is_var=' + (isVariation ? '1' : '0');
                CURRENT_IFRAME_SRC += '&purl=' + window.location.host;

                if (DIGIOH_CACHE_VERSION) {
                    CURRENT_IFRAME_SRC += '&cb=' + DIGIOH_CACHE_VERSION;
                } else {
                    CURRENT_IFRAME_SRC += '&cb=' + (new Date().getTime());
                }
            }
        }
        catch (e) {
            logError(e, "setIframeSrc");
        }
    }



    function loadLightningIframe(lid, append_to_element_id) {
        try {
            var isVariation = false;
            var actual_lid = lid;
            var var_id = '';
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                var_id = lid;
                actual_lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
                isVariation = true;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
                actual_lid = lid;
                isVariation = true;
                lid = var_id;
            }
            

            var iframe_id = 'lightbox-iframe-' + lid;

            var iframe_position = 'absolute';
            if (isMobile()) {
                iframe_position = 'relative';
            }


            var settingsFile = "";
            var varIdOrLid = "";

            if (isVariation && var_id) {
                settingsFile += "/variation/" + var_id;
                varIdOrLid = var_id;
            } else {
                settingsFile += "/lightbox/" + lid;
                varIdOrLid = lid;
            }

            if (!IS_PREVIEW) {
                settingsFile += "/settings.js";
            } else {
                settingsFile += "/settings_preview.js";
            }

            if (typeof DIGIOH_CACHE_VERSION === 'undefined') {
                DIGIOH_CACHE_VERSION = (new Date().getTime());
            }

            if (!window.DIGIOH_API.DIGIOH_LIGHTBOX_SETTINGS.hasOwnProperty(varIdOrLid)) {
                JQUERY_DIGIOH.ajax({
                    url: PROTOCOL +
                        'www.lightboxcdn.com/vendor/' +
                        VENDOR_GUID +
                        settingsFile +
                        '?cb=' +
                        DIGIOH_CACHE_VERSION,
                    crossDomain: true,
                    dataType: "script",
                    cache: true
                });
            } else {
                logger('settings.js already preloaded for ' + varIdOrLid);
            }

            JQUERY_DIGIOH("<iframe id='" + iframe_id + "' width='100%' height='100%' frameborder='0' scrolling='no' style='display:block;position:" + iframe_position + ";margin:0;padding:0;border:none;width:100%;height:100%;'></iframe>").bind('load', function (event) {
                var cwd = null;
                if (this.contentDocument) {// FF Chrome
                    cwd = this.contentDocument;
                } else if (this.contentWindow) {// IE
                    cwd = this.contentWindow.document;
                }

                if (cwd == null) {
                    return;
                }

                var s;
                var cwh = cwd.getElementsByTagName('head')[0];

                var z = "";
                z += "<scr";
                z += "ipt type='text/javascript'>";
                //[#######LIGHTBOX_BUILDER_JS_EMBED#######]
                z += "<";
                z += "/scr" + "ipt>";

                var scriptInit = '';
                //scriptInit += "var jQuery;";
                //scriptInit += "var $;";
                //scriptInit += "window.jQuery = function (selector) { return parent.DIGIOH_API.LIGHTBOX.JQUERY_DIGIOH(selector, document); };";
                //scriptInit += "jQuery = parent.DIGIOH_API.LIGHTBOX.JQUERY_DIGIOH.extend(jQuery, parent.DIGIOH_API.LIGHTBOX.JQUERY_DIGIOH);";
                //scriptInit += "window.$ = jQuery;";
                //scriptInit += "$ = window.$;";

                //scriptInit += "parent.inherit(window)(function () {";
                //scriptInit += "console.log('inherited $ from parent');";
                //scriptInit += "});";

                scriptInit += "var PROTOCOL = '" + PROTOCOL + "';";
                scriptInit += "var WIDGET_TYPE = '" + EFFECTS[lid]['widget_type'] + "';";
                scriptInit += "var DIGIOH_CACHE_VERSION = '" + DIGIOH_CACHE_VERSION + "';";
                scriptInit += "var PARENT_URL = '" + PROTOCOL + window.location.host + "';";
                scriptInit += "var IS_PRODUCTION = " + (IS_DEV ? 'false' : 'true') + ";";
                scriptInit += "var IS_PREVIEW = " + (IS_PREVIEW ? 'true' : 'false') + ";";
                scriptInit += "var SHOW_ERRORS = " + (SHOW_ERRORS ? 'true' : 'false') + ";";
                scriptInit += "var IS_IE_9_OR_LESS = false;";
                scriptInit += "var VENDOR_GUID = '" + VENDOR_GUID + "';";
                scriptInit += "var VARIATION_GUID = '" + var_id + "';";
                scriptInit += "var LIGHTBOX_GUID = '" + actual_lid + "';";

                if (typeof DIGIOH_USE_RESPONSIVE !== 'undefined' && DIGIOH_USE_RESPONSIVE) {
                    scriptInit += "var DIGIOH_USE_RESPONSIVE = true;";
                } else {
                    scriptInit += "var DIGIOH_USE_RESPONSIVE = false;";
                }

                if (typeof DIGIOH_USE_BUGSNAG !== 'undefined' && DIGIOH_USE_BUGSNAG) {
                    scriptInit += "var DIGIOH_USE_BUGSNAG = true;";
                } else {
                    scriptInit += "var DIGIOH_USE_BUGSNAG = false;";
                }

                s = cwd.createElement('script');
                s.type = 'text/javascript';
                if (typeof s.textContent !== "undefined") {
                    s.textContent = scriptInit;
                } else {
                    s.innerText = scriptInit;
                }
                cwh.appendChild(s);

                //s = cwd.createElement('script');
                //s.type = 'text/javascript';
                //s.src = PROTOCOL + 'ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
                //cwh.appendChild(s);

                s = cwd.createElement('script');
                s.type = 'text/javascript';
                s.src = PROTOCOL + 'www.lightboxcdn.com/vendor/' + VENDOR_GUID + '/' + 'lightbox_builder.js' + '?cb=' + DIGIOH_CACHE_VERSION;
                cwh.appendChild(s);
            }).appendTo('#' + append_to_element_id);
        }
        catch (e) {
            logError(e, "loadLightningIframe");
        }
    }

    function tryInitFancyboxWhenChildReady(lid, attempts) {
        if (LIGHTBOX_GUID !== lid || attempts > 30) {
            logger('tryInitFancyboxWhenChildReady - cancelled after ' + attempts + ' attempts');
            return;
        } else if (!CHILD_READY.hasOwnProperty(lid) || CHILD_READY[lid] != true) {
            window.setTimeout(function () {
                tryInitFancyboxWhenChildReady(lid, attempts++);
            }, 100);
        } else {
            logger('tryInitFancyboxWhenChildReady - loaded after ' + attempts + ' attempts');
            initFancybox(true);
        }
    }

    function initFancybox(is_preloaded) {
        try {
            var lbid = LIGHTBOX_GUID;

            if (is_preloaded) is_preloaded = true;
            else is_preloaded = false;

            if (effectsHasTeaserDisplayFancybox(lbid)) {
                closeTeaser(EFFECTS[lbid].fancybox.teaser, lbid, false);
            }

            if (!is_preloaded) {
                preloadIframe(lbid);
                tryInitFancyboxWhenChildReady(lbid, 1);
                return;
            }

            var dom_id = getLightboxDomId(lbid);

            var fb = {};

            var dims_box = getActualBoxWidthAndHeight(lbid);

            if (is_preloaded) {
                fb = {
                    content: "<div class='fb_digioh-content'></div>",
                    width: dims_box.width,
                    height: dims_box.height,
                    autoSize: false,
                    scrolling: 'no',
                    arrows: false,
                    padding: 0,
                    autoCenter: (!isMobile()),
                    fixed: (!isMobile()),
                    //fixed: false,
                    keys: {
                        close: 0
                    }
                };

                fb.afterShow = function () {
                    registerLightboxShow(lbid);

                    var wrap = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first');
                    var preload = JQUERY_DIGIOH('#' + dom_id);
                    var position = wrap.offset(); // position = { left: 42, top: 567 }
                    preload.css(position);
                    preload.show();
                };

                fb.onUpdate = function () {
                    if (!FANCY_REPOSITION_LOCKED.hasOwnProperty(lbid) || !FANCY_REPOSITION_LOCKED[lbid]) {
                        var wrap = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first');
                        var preload = JQUERY_DIGIOH('#' + dom_id);
                        var position = wrap.offset();
                        preload.css(position);
                    }
                };

                fb.afterClose = function () {
                    JQUERY_DIGIOH('#' + dom_id).hide();
                    JQUERY_DIGIOH("body").css({ 'overflow-y': 'visible' });
                    JQUERY_DIGIOH('#' + dom_id).css({ 'opacity': 1 });
                    registerLightboxClose(lbid);

                    if (FANCY_REPOSITION_LOCKED.hasOwnProperty(lbid)) {
                        FANCY_REPOSITION_LOCKED[lbid] = false;
                    }
                };

            } else {
                //Theoretically, this "else" section should never run because of the recursive "tryInitFancyboxWhenChildReady()" call above

                setIframeSrc(lbid, false);

                fb = {
                    type: 'iframe',
                    href: CURRENT_IFRAME_SRC,
                    preload: true,
                    height: getBoxHeight(lbid),
                    width: getBoxWidth(lbid),
                    autoSize: false,
                    scrolling: 'no',
                    arrows: false,
                    padding: 0,
                    iframe: { scrolling: 'no', preload: true },
                    autoCenter: (!isMobile()),
                    fixed: (!isMobile()),
                    //fixed: false,
                    keys: {
                        close: 0
                    }
                };

                fb.beforeShow = function () {
                    //var contentHeight = WIDGET_DIV.height();
                    //if (body.height() < contentHeight + 50) {
                    //    this.height = contentHeight + 5;
                    //    JQUERY_DIGIOH.fb_digioh.reposition();
                    //}

                    JQUERY_DIGIOH('.fb_digioh-skin').append('<div title="Close" class="digioh_fb_close" style="' + getCloseButtonStyle(EFFECTS[lbid].fancybox.close_button, EFFECTS[lbid].widget_type) + '"></div>');

                    //if (EFFECTS[lbid].hasOwnProperty('border')) {
                    //    JQUERY_DIGIOH('.fb_digioh-skin').css('border-radius', EFFECTS[lbid].border.radius + 'px');
                    //}

                    JQUERY_DIGIOH('.digioh_fb_close').click(function () {
                        JQUERY_DIGIOH.fb_digioh.close();
                    });
                };

                fb.afterShow = function () {
                    registerLightboxShow(lbid);
                    //JQUERY_DIGIOH('.fb_digioh-skin').append('<div title="Close" class="digioh_fb_close" style="' + getCloseButtonStyle(EFFECTS[lbid].fancybox.close_button, EFFECTS[lbid].widget_type) + '"></div>');
                };

                fb.afterClose = function () {
                    JQUERY_DIGIOH("body").css({ 'overflow-y': 'visible' });
                    registerLightboxClose(lbid);
                };
            }



            fb.beforeLoad = function () {
                JQUERY_DIGIOH.fb_digioh.hideLoading();
                JQUERY_DIGIOH("body").css({ 'overflow-y': 'hidden' });
            };



            fb.helpers = {
                overlay: {
                    closeClick: EFFECTS[lbid].fancybox.overlay.close_click, // prevents closing when clicking OUTSIDE fancybox 
                    css: getBackgroundStyle(EFFECTS[lbid].fancybox.overlay.background) // or your preferred hex color value
                    //, locked: true
                }
            };

            fb.topRatio = (EFFECTS[lbid].fancybox.position.top / 10);
            fb.leftRatio = (EFFECTS[lbid].fancybox.position.left / 10);


            if (EFFECTS[lbid].fancybox.animation.open != "fade" && EFFECTS[lbid].fancybox.animation.open != "elastic") {
                fb.openEffect = "fade";
                fb.openMethod = EFFECTS[lbid].fancybox.animation.open + "In";
            } else {
                fb.openEffect = EFFECTS[lbid].fancybox.animation.open;
                fb.openMethod = 'zoomInCustom';
            }

            if (EFFECTS[lbid].fancybox.animation.open != "fade") {
                fb.openEasing = EFFECTS[lbid].fancybox.easing.open; //easing doesn't work well with fade animations
            }

            fb.openSpeed = EFFECTS[lbid].fancybox.speed.open;

            if (EFFECTS[lbid].fancybox.animation.close != "fade" && EFFECTS[lbid].fancybox.animation.close != "elastic") {
                fb.closeEffect = "fade";
                fb.closeMethod = EFFECTS[lbid].fancybox.animation.close + "Out";
            } else {
                fb.closeEffect = EFFECTS[lbid].fancybox.animation.close;
                fb.closeMethod = 'zoomOutCustom';
            }

            if (EFFECTS[lbid].fancybox.animation.close != "fade") {
                fb.closeEasing = EFFECTS[lbid].fancybox.easing.close; //easing doesn't work well with fade animations
            }

            fb.closeSpeed = EFFECTS[lbid].fancybox.speed.close;

            //fb.tpl = {
            //    closeBtn: '<div title="Close" id="digioh_fb_close" style="' + getCloseButtonStyle(EFFECTS[lbid].fancybox.close_button, EFFECTS[lbid].widget_type) + '"></div>'
            //};

            //fb.tpl = {
            //    closeBtn: '<a title="Close" id="digioh_fb_close" href="javascript:;"></a>'
            //};

            fb.tpl = {
                closeBtn: '<div title="Close" id="digioh_fb_close_hide" style="display:none;"></div>'
            };

            //logger('openEffect: ' + fb.openEffect);
            //logger('openMethod: ' + fb.openMethod);
            //logger('openEasing: ' + fb.openEasing);
            //logger('closeEffect: ' + fb.closeEffect);
            //logger('closeMethod: ' + fb.closeMethod);
            //logger('closeEasing: ' + fb.closeEasing);

            JQUERY_DIGIOH.fb_digioh.open(fb);
        }
        catch (e) {
            logError(e, "initFancybox");
        }
    }

    function fancyboxMobileSidebarFix(lbid) {
        try {
            var dom_id = getLightboxDomId(lbid);

            var dims_box = getActualBoxWidthAndHeight(lbid);

            var fb = {
                content: '<div></div>',
                width: dims_box.width,
                height: dims_box.height,
                autoSize: false,
                scrolling: 'no',
                arrows: false,
                padding: 0,
                autoCenter: false,
                fixed: false,
                keys: {
                    close: 0
                }
            };

            fb.afterShow = function () {
                var wrap = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first');
                var preload = JQUERY_DIGIOH('#' + dom_id);
                var position = wrap.offset(); // position = { left: 42, top: 567 }
                preload.css(position);
                preload.show();
            };

            fb.onUpdate = function () {
                if (!FANCY_REPOSITION_LOCKED.hasOwnProperty(lbid) || !FANCY_REPOSITION_LOCKED[lbid]) {
                    var wrap = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first');
                    var preload = JQUERY_DIGIOH('#' + dom_id);
                    var position = wrap.offset(); // position = { left: 42, top: 567 }
                    preload.css(position);
                }
            };

            fb.afterClose = function () {
                JQUERY_DIGIOH('#' + dom_id).hide();
                JQUERY_DIGIOH("body").css({ 'overflow-y': 'visible' });
                JQUERY_DIGIOH('#' + dom_id).css({ 'opacity': 1 });
                registerLightboxClose(lbid);
            };

            fb.beforeLoad = function () {
                JQUERY_DIGIOH.fb_digioh.hideLoading();
                JQUERY_DIGIOH("body").css({ 'overflow-y': 'hidden' });
            };

            fb.helpers = {
                overlay: {
                    closeClick: false, // prevents closing when clicking OUTSIDE fancybox 
                    css: { "background-color": "rgba(0, 0, 0, 0)", "opacity": "0" } // or your preferred hex color value rgba(0, 0, 0, 0.439216)
                }
            };

            fb.topRatio = (1 / 10);
            fb.leftRatio = (5 / 10);

            fb.openEffect = "fade";
            fb.openMethod = "slideDownIn";
            fb.closeEffect = "fade";
            fb.closeMethod = "slideUpOut";

            fb.openSpeed = 50;
            fb.closeSpeed = 100;

            fb.tpl = {
                closeBtn: '<div title="Close" id="digioh_fb_close_hide" style="display:none;"></div>'
            };

            JQUERY_DIGIOH('#' + dom_id + ' .digioh_fb_close').click(function () {
                JQUERY_DIGIOH.fb_digioh.close();
            });

            JQUERY_DIGIOH.fb_digioh.open(fb);
        }
        catch (e) {
            logError(e, "fancyboxMobileSidebarFix");
        }
    }

    function initFancyboxEffects() {
        try {
            (function (JQUERY_DIGIOH, F) {
                F.transitions.slideDownIn = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var endPos = F._getPosition(true);
                    var animatePx = (parseInt(endPos.top, 10) + dims_obj.height) + 'px';
                    endPos.top = (dims_obj.height * -1) + 'px';

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.css(endPos).show().animate({
                            top: '+=' + animatePx
                        }, {
                            easing: F.current.openEasing,
                            duration: F.current.openSpeed,
                            complete: F._afterZoomIn
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).css(endPos).show().animate({
                            top: '+=' + animatePx
                        }, {
                            easing: F.current.openEasing,
                            duration: F.current.openSpeed,
                            complete: F._afterZoomIn
                        });
                    }
                };

                F.transitions.slideDownOut = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var winHeight = JQUERY_DIGIOH(window).height();
                    var widgetTop = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first').offset().top;
                    var animatePx = Math.ceil(winHeight - widgetTop) + 'px';

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.removeClass('fb_digioh-opened').animate({
                            top: '+=' + animatePx
                        }, {
                            easing: F.current.closeEasing,
                            duration: F.current.closeSpeed,
                            complete: F._afterZoomOut
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        F.wrap.removeClass('fb_digioh-opened');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).animate({
                            top: '+=' + animatePx
                        }, {
                            easing: F.current.closeEasing,
                            duration: F.current.closeSpeed,
                            complete: F._afterZoomOut
                        });
                    }
                };

                F.transitions.slideUpIn = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var endPos = F._getPosition(true);
                    var winHeight = JQUERY_DIGIOH(window).height();
                    var animatePx = Math.ceil(winHeight - parseInt(endPos.top, 10)) + 'px';
                    endPos.top = Math.ceil(winHeight) + 'px';

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.css(endPos).show().animate({
                            top: '-=' + animatePx
                        }, {
                            easing: F.current.openEasing,
                            duration: F.current.openSpeed,
                            complete: F._afterZoomIn
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).css(endPos).show().animate({
                            top: '-=' + animatePx
                        }, {
                            easing: F.current.openEasing,
                            duration: F.current.openSpeed,
                            complete: F._afterZoomIn
                        });
                    }
                };

                F.transitions.slideUpOut = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var endPos = F._getPosition(true);
                    var animatePx = (parseInt(endPos.top, 10) + dims_obj.height) + 'px';

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.removeClass('fb_digioh-opened').animate({
                            top: '-=' + animatePx
                        }, {
                            easing: F.current.closeEasing,
                            duration: F.current.closeSpeed,
                            complete: F._afterZoomOut
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        F.wrap.removeClass('fb_digioh-opened');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).animate({
                            top: '-=' + animatePx
                        }, {
                            easing: F.current.closeEasing,
                            duration: F.current.closeSpeed,
                            complete: F._afterZoomOut
                        });
                    }
                };

                F.transitions.slideLeftIn = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var winWidth = JQUERY_DIGIOH(window).width();
                    var endPos = F._getPosition(true);
                    var animatePx = Math.ceil(winWidth - parseInt(endPos.left, 10)) + 'px';
                    endPos.left = Math.ceil(winWidth) + 'px';

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.css(endPos).show().animate({
                            left: '-=' + animatePx
                        }, {
                            easing: F.current.openEasing,
                            duration: F.current.openSpeed,
                            complete: F._afterZoomIn
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).css(endPos).show().animate({
                            left: '-=' + animatePx
                        }, {
                            easing: F.current.openEasing,
                            duration: F.current.openSpeed,
                            complete: F._afterZoomIn
                        });
                    }
                };

                F.transitions.slideLeftOut = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var widgetLeft = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first').offset().left;
                    var animatePx = Math.ceil(widgetLeft + dims_obj.width) + 'px';

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.removeClass('fb_digioh-opened').animate({
                            left: '-=' + animatePx
                        }, {
                            easing: F.current.closeEasing,
                            duration: F.current.closeSpeed,
                            complete: F._afterZoomOut
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        F.wrap.removeClass('fb_digioh-opened');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).animate({
                            left: '-=' + animatePx
                        }, {
                            easing: F.current.closeEasing,
                            duration: F.current.closeSpeed,
                            complete: F._afterZoomOut
                        });
                    }
                };

                F.transitions.slideRightIn = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var endPos = F._getPosition(true);
                    var animatePx = Math.ceil(parseInt(endPos.left, 10) + dims_obj.width) + 'px';
                    endPos.left = (dims_obj.width * -1) + 'px';

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.css(endPos).show().animate({
                            left: '+=' + animatePx
                        }, {
                            easing: F.current.openEasing,
                            duration: F.current.openSpeed,
                            complete: F._afterZoomIn
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).css(endPos).show().animate({
                            left: '+=' + animatePx
                        }, {
                            easing: F.current.openEasing,
                            duration: F.current.openSpeed,
                            complete: F._afterZoomIn
                        });
                    }
                };

                F.transitions.slideRightOut = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var winWidth = JQUERY_DIGIOH(window).width();
                    var widgetLeft = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first').offset().left;
                    var animatePx = Math.ceil(winWidth - widgetLeft) + 'px';

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.removeClass('fb_digioh-opened').animate({
                            left: '+=' + animatePx
                        }, {
                            easing: F.current.closeEasing,
                            duration: F.current.closeSpeed,
                            complete: F._afterZoomOut
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        F.wrap.removeClass('fb_digioh-opened');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).animate({
                            left: '+=' + animatePx
                        }, {
                            easing: F.current.closeEasing,
                            duration: F.current.closeSpeed,
                            complete: F._afterZoomOut
                        });
                    }
                };

                F.transitions.zoomInCustom = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var current = F.current,
				    startPos = current.pos,
				    effect = current.openEffect,
				    elastic = effect === 'elastic',
				    endPos = JQUERY_DIGIOH.extend({ opacity: 1 }, startPos);

                    // Remove "position" property that breaks older IE
                    delete endPos.position;

                    if (elastic) {
                        startPos = this.getOrigPosition();
                        if (current.openOpacity) {
                            startPos.opacity = 0.1;
                        }
                    } else if (effect === 'fade') {
                        startPos.opacity = 0.1;
                    }

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.css(startPos).animate(endPos, {
                            duration: effect === 'none' ? 0 : current.openSpeed,
                            easing: current.openEasing,
                            step: elastic ? this.step : null,
                            complete: F._afterZoomIn
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).css(startPos).show().animate(endPos, {
                            duration: effect === 'none' ? 0 : current.openSpeed,
                            easing: current.openEasing,
                            step: elastic ? this.step : null,
                            complete: F._afterZoomIn
                        }).css('overflow', 'visible');
                    }
                };

                F.transitions.zoomOutCustom = function () {
                    var dims_obj = getActualBoxWidthAndHeight(LIGHTBOX_GUID);
                    var current = F.current,
				    effect = current.closeEffect,
				    elastic = effect === 'elastic',
				    endPos = { opacity: 0.1 };

                    if (elastic) {
                        endPos = this.getOrigPosition();

                        if (current.closeOpacity) {
                            endPos.opacity = 0.1;
                        }
                    }

                    if (JQUERY_DIGIOH.inArray(LIGHTBOX_GUID, PRELOADED_LIGHTBOXES) == -1) {
                        F.wrap.animate(endPos, {
                            duration: effect === 'none' ? 0 : current.closeSpeed,
                            easing: current.closeEasing,
                            step: elastic ? this.step : null,
                            complete: F._afterZoomOut
                        });
                    } else {
                        //logger('** animating preloaded lightbox');
                        JQUERY_DIGIOH('#' + getLightboxDomId(LIGHTBOX_GUID)).animate(endPos, {
                            duration: effect === 'none' ? 0 : current.closeSpeed,
                            easing: current.closeEasing,
                            step: elastic ? this.step : null,
                            complete: F._afterZoomOut
                        });
                    }
                };
            }(JQUERY_DIGIOH, JQUERY_DIGIOH.fb_digioh));
        }
        catch (e) {
            logError(e, "initFancyboxEffects");
        }
    }

    function createIdentityIframe() {
        try {
            var src = 'https://www.lightboxcdn.com/static/identity.html'; // + encodeURIComponent(document.location.href);
            src += '?purl=' + encodeURIComponent(window.location.href); //(PROTOCOL + window.location.host);
            src += '&vid=' + VENDOR_GUID;
            src += '&se=' + (SHOW_ERRORS ? '1' : '0');
            src += '&prev=' + (IS_PREVIEW ? '1' : '0');

            if (DIGIOH_CACHE_VERSION) {
                src += '&cb=' + DIGIOH_CACHE_VERSION;
            } else {
                src += '&cb=' + (new Date().getTime());
            }

            DIGIOH_IDENTITY_CHILD_IFRAME = JQUERY_DIGIOH('<iframe name="DigiohLocalStorageIframe" id="DigiohLocalStorageIframe" src="' + src + '" width="1" height="1" style="display: none; width: 1px; height: 1px; left: -1000px; top: -1000px;" frameborder="0" scrolling="no"></iframe>').appendTo('body');
        }
        catch (e) {
            logError(e, "createIdentityIframe");
        }
    }





    function initPostMessageReceiver() {
        try {
            if (window.addEventListener) {
                window.addEventListener("message", runPostMessageReceiver, false);
            }
            else {
                window.attachEvent("message", runPostMessageReceiver);
            }
        }
        catch (e) {
            logError(e, "initPostMessageReceiver");
        }
    }

    function runPostMessageReceiver(e) {
        try {
            var postMessageDomain = __CDNDomainWithProtocol;

            //logger(e);

            var origin = e.origin || e.originalEvent.origin;

            if (e.source && e.source === window.frames['DigiohLocalStorageIframe']) {
                //logger('runPostMessageReceiver: origin=' + origin);
                //logger('got event in parent!');
                //logger(e);

                var data = /^#localStorage#(\d+)(null)?#([\S\s]*)/.exec(e.data);
                if (data) {
                    //logger('runPostMessageReceiver:data');
                    //logger(data);
                    if (DIGIOH_LOCAL_STORAGE.callbacks[data[1]]) {
                        DIGIOH_LOCAL_STORAGE.callbacks[data[1]](data[2] === 'null' ? null : data[3]);
                    }
                    delete DIGIOH_LOCAL_STORAGE.callbacks[data[1]];
                }
            } else if (origin !== postMessageDomain) {
                //logger('runPostMessageReceiver version B: origin: ' + origin);
                return;
            } else {
                logger('runPostMessageReceiver (version C) origin=' + origin);
                processPostMessage(parsePostMessageResult(e.data));
            }
        }
        catch (e) {
            logError(e, "runPostMessageReceiver");
        }
    }

    function sendIdentityPostMessage(msgObj) {
        try {
            var postMessageContentWindow = DIGIOH_IDENTITY_CHILD_IFRAME.get(0).contentWindow;

            //var cwd = null;
            //if (this.contentDocument) {// FF Chrome
            //    cwd = this.contentDocument;
            //} else if (DIGIOH_IDENTITY_CHILD_IFRAME.contentWindow) {// IE
            //    cwd = this.contentWindow.document;
            //}
            //if (cwd == null) {
            //    return;
            //}

            var src = 'https://www.lightboxcdn.com/static/identity.html';
            src += '?parent_url=' + encodeURIComponent(document.location.href);//(PROTOCOL + window.location.host);//

            //src += '&se=' + (SHOW_ERRORS ? '1' : '0');
            //src += '&prev=' + (IS_PREVIEW ? '1' : '0');
            //src += '&vid=' + VENDOR_GUID;

            if (DIGIOH_CACHE_VERSION) {
                src += '&cb=' + DIGIOH_CACHE_VERSION;
            } else {
                src += '&cb=' + (new Date().getTime());
            }

            //LocalStorageSetItem("mykey", "myval");

            //DIGIOH_LOCAL_STORAGE.setAll({some: "obj2", wwz: "keyslab2"});

            DIGIOH_LOCAL_STORAGE.getAll(function (value) {
                value = LZString.decompressFromBase64(value);
                console.log('got local storage item (mykey2) back in parent with value: ' + value);
            });

            //DIGIOH_LOCAL_STORAGE.eraseAll();

            //JQUERY_DIGIOH.postMessage(msgObj, src, postMessageContentWindow);
        }
        catch (e) {
            logError(e, "sendIdentityPostMessage");
        }
    }

    function initPostMessageReceiverOld() {
        try {
            var postMessageDomain = 'https://www.lightboxcdn.com';

            JQUERY_DIGIOH.receiveMessage(function (e) {
                console.log(e);
                processPostMessage(parsePostMessageResult(e.data));
            }, postMessageDomain);
        }
        catch (e) {
            logError(e, "initPostMessageReceiverOld");
        }
    }

    //function initPostMessageIdentityReceiver() {
    //    try {
    //        window.addEventListener('message', function (event) {

    //            console.log('Received message from child iframe');

    //            if (event.source === window.frames['DigiohLocalStorageIframe']) {

    //                //console.log(event);
    //                var data = /^#localStorage#(\d+)(null)?#([\S\s]*)/.exec(event.data);
    //                if (data) {
    //                    if (LocalStorageCallbacks[data[1]]) {
    //                        LocalStorageCallbacks[data[1]](data[2] === 'null' ? null : data[3]);
    //                    }
    //                    delete LocalStorageCallbacks[data[1]];
    //                }
    //            }
    //        }, false);
    //    }
    //    catch (e) {
    //        logError(e, "initPostMessageIdentityReceiver");
    //    }
    //}

    function processPostMessage(e, lid) {
        try {
            if (typeof lid !== 'undefined' && lid && !CHILD_READY.hasOwnProperty(lid)) {
                CHILD_READY[lid] = true;
            }

            //logger(e.data);

            //var hash = parsePostMessageResult(e.data);
            var hash = e;

            if (!hash.hasOwnProperty('sender') || (hash.hasOwnProperty('digioh_identity') && hash.digioh_identity)) {
                logger('processPostMessage: ');
                logger(hash);
            }

            if (hash.hasOwnProperty('child_action') && hash.hasOwnProperty('lightbox_id')) {
                if (hash.child_action == 'close_lightbox') {
                    if (EFFECTS.hasOwnProperty(hash.lightbox_id) && EFFECTS[hash.lightbox_id].widget_type === "sidebar") {
                        if (hash.trigger == 'form_submit') {
                            EFFECTS[hash.lightbox_id].sidebar.teaser.display = false;
                        }
                        closeSidebar(hash.lightbox_id);
                    } else if (EFFECTS.hasOwnProperty(hash.lightbox_id) && EFFECTS[hash.lightbox_id].widget_type === "banner") {
                        closeBanner(hash.lightbox_id);
                    } else if (EFFECTS.hasOwnProperty(hash.lightbox_id) && EFFECTS[hash.lightbox_id].widget_type === "fancybox") {
                        if (hash.trigger == 'form_submit') {
                            EFFECTS[hash.lightbox_id].fancybox.teaser.display = false;
                        }
                        JQUERY_DIGIOH.fb_digioh.close(true);
                    }
                } else if (hash.child_action == 'redirect_parent' && hash.hasOwnProperty('url') && hash.url.length > 7) {
                    if (hash.hasOwnProperty('ui_trigger')) {
                        if (!IS_REDIRECTING_PARENT) {
                            IS_REDIRECTING_PARENT = true;

                            if (hash.ui_trigger.indexOf('button') === 0) {
                                //var event_guid = generateGuid();
                                //azureEvent('lightbox_redirect', event_guid, hash.lightbox_id);
                                keenLightboxRedirect(hash.lightbox_id);

                                var var_id = '';
                                var orig_lid = hash.lightbox_id;
                                if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(hash.lightbox_id)) {
                                    orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[hash.lightbox_id];
                                    var_id = hash.lightbox_id;
                                } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(hash.lightbox_id)) {
                                    var_id = LIGHTBOX_TO_VARIATION_MAP[hash.lightbox_id];
                                }

                                if (!IS_PREVIEW || IS_DEV) {
                                    if (!isInlineLightbox(hash.lightbox_id) || doesInlineLightboxHaveCustomJsType(hash.lightbox_id, 'all')) {
                                        DIGIOH_CUSTOM_JS.runCustomJsOnLightboxRedirect(window, document, JQUERY_DIGIOH, orig_lid, var_id);
                                        logger('DIGIOH: runCustomJsOnLightboxRedirect - ' + hash.lightbox_id);
                                    }
                                }

                                DIGIOH_LIGHTBOX_ANALYTICS.setLightboxEvent("redirect", orig_lid);
                            }

                            window.setTimeout(function () {
                                window.location.href = hash.url;
                            }, 300);
                        }
                    }
                } else if (hash.child_action == 'lightbox_open' && hash.hasOwnProperty('lightbox_open') && hash.lightbox_open.length > 7) {
                    if (!IS_REDIRECTING_PARENT) {
                        IS_REDIRECTING_PARENT = true;

                        if (hash.hasOwnProperty('ui_trigger') && hash.ui_trigger == 'button') {
                            keenLightboxRedirect(hash.lightbox_id);

                            var var_id = '';
                            var orig_lid = hash.lightbox_id;
                            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(hash.lightbox_id)) {
                                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[hash.lightbox_id];
                                var_id = hash.lightbox_id;
                            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(hash.lightbox_id)) {
                                var_id = LIGHTBOX_TO_VARIATION_MAP[hash.lightbox_id];
                            }

                            if (!IS_PREVIEW || IS_DEV) {
                                if (!isInlineLightbox(hash.lightbox_id) || doesInlineLightboxHaveCustomJsType(hash.lightbox_id, 'all')) {
                                    DIGIOH_CUSTOM_JS.runCustomJsOnLightboxRedirect(window, document, JQUERY_DIGIOH, orig_lid, var_id);
                                    logger('DIGIOH: runCustomJsOnLightboxRedirect - ' + hash.lightbox_id);
                                }
                            }

                            DIGIOH_LIGHTBOX_ANALYTICS.setLightboxEvent("redirect", orig_lid);
                        }

                        if (EFFECTS.hasOwnProperty(hash.lightbox_id) && EFFECTS[hash.lightbox_id].widget_type === "sidebar") {
                            EFFECTS[hash.lightbox_id].sidebar.teaser.display = false;
                            closeSidebar(hash.lightbox_id);
                        } else if (EFFECTS.hasOwnProperty(hash.lightbox_id) && EFFECTS[hash.lightbox_id].widget_type === "banner") {
                            closeBanner(hash.lightbox_id);
                        } else {
                            EFFECTS[hash.lightbox_id].fancybox.teaser.display = false;
                            JQUERY_DIGIOH.fb_digioh.close(true);
                        }

                        var foundAnotherLightbox = false;

                        for (var i = 0; i < DIGIOH_LIGHTBOX_CONDITIONS.length; i++) {
                            if (hash.lightbox_open == DIGIOH_LIGHTBOX_CONDITIONS[i].lightbox_guid) {
                                foundAnotherLightbox = true;
                                tryOpenAnotherLightbox(hash.lightbox_open);
                                break;
                            }
                        }

                        if (!foundAnotherLightbox) {
                            logger('Action lightbox_open invalid, could not find another active Lightbox with GUID: ' + hash.lightbox_open);
                        }
                    }
                } else if (hash.child_action == 'download_file') {
                    //var event_guid = generateGuid();
                    //azureEvent('lightbox_download', event_guid, hash.lightbox_id);
                    keenLightboxDownload(hash.lightbox_id);


                    var var_id = '';
                    var orig_lid = hash.lightbox_id;
                    if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(hash.lightbox_id)) {
                        orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[hash.lightbox_id];
                        var_id = hash.lightbox_id;
                    } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(hash.lightbox_id)) {
                        var_id = LIGHTBOX_TO_VARIATION_MAP[hash.lightbox_id];
                    }

                    if (!IS_PREVIEW || IS_DEV) {
                        if (!isInlineLightbox(hash.lightbox_id) || doesInlineLightboxHaveCustomJsType(hash.lightbox_id, 'all')) {
                            DIGIOH_CUSTOM_JS.runCustomJsOnLightboxDownload(window, document, JQUERY_DIGIOH, orig_lid, var_id);
                            logger('DIGIOH: runCustomJsOnLightboxDownload - ' + hash.lightbox_id);
                        }
                    }

                    DIGIOH_LIGHTBOX_ANALYTICS.setLightboxEvent("download", orig_lid);

                    //logger('download event received by parent');

                    //var aid = 'digioh-download-' + new Date().getTime();
                    //JQUERY_DIGIOH('body').append("<a id='" + aid + "' style='visibility: hidden;' target='_blank' href='" + hash.url + "'></a>");
                    //JQUERY_DIGIOH('#' + aid).click();
                    //window.location.href = hash.url;
                } else if (hash.child_action == 'change_pages') {
                    var pref = hash.page_prefix.replace('_', '');
                    CURRENT_PAGE[hash.lightbox_id] = pref;

                    var dom_id = getLightboxDomId(hash.lightbox_id);
                    var dims_box = getActualBoxWidthAndHeight(hash.lightbox_id);

                    CURRENT_PAGE_DIMS[hash.lightbox_id] = { width: dims_box.width, height: dims_box.height };

                    keenLightboxPageChange(hash.lightbox_id, hash.page_prefix);

                    var offset_prev = JQUERY_DIGIOH('#' + dom_id).offset();

                    logger('Changed Pages: ' + pref + ' (' + dims_box.width + 'x' + dims_box.height + ')');

                    if (EFFECTS[hash.lightbox_id].widget_type === 'inline') {
                        if (EFFECTS[hash.lightbox_id].hasOwnProperty(pref + 'responsive') && EFFECTS[hash.lightbox_id][pref + 'responsive'].use) {
                            var wMax = getResponsiveBoxWidthMax(hash.lightbox_id);
                            var wMin = getResponsiveBoxWidthMin(hash.lightbox_id);
                            var hMax = getResponsiveBoxHeightMax(hash.lightbox_id);
                            var hMin = getResponsiveBoxHeightMin(hash.lightbox_id);

                            //widthAndHeightInlineResponsive = ";width:" + getResponsiveBoxWidthPercent(lid) + "%;height:" + getResponsiveBoxHeightPercent(lid) + "%;";
                            //widthAndHeightInlineResponsive += "max-width:" + wMax + "px;" + "min-width:" + wMin + "px;" + "max-height:" + hMax + "px;" + "min-height:" + hMin + "px;";
                            JQUERY_DIGIOH('#' + dom_id).css({ 'width': getResponsiveBoxWidthPercent(hash.lightbox_id) + '%', 'height': getResponsiveBoxHeightPercent(hash.lightbox_id) + '%', 'max-width': wMax + 'px', 'min-width': wMin + 'px', 'max-height': hMax + 'px', 'min-height': hMin + 'px' });
                        } else {
                            JQUERY_DIGIOH('#' + dom_id).css({ 'width': dims_box.width + 'px', 'height': dims_box.height + 'px' });
                        }
                    }



                    if (EFFECTS[hash.lightbox_id].widget_type === 'banner') {
                        JQUERY_DIGIOH('#' + dom_id).attr('style', getBannerPosition(EFFECTS[hash.lightbox_id].banner, hash.lightbox_id));

                        if (!EFFECTS[hash.lightbox_id].banner.hasOwnProperty('placement') || EFFECTS[hash.lightbox_id].banner.placement !== 'bottom') {
                            if (JQUERY_DIGIOH('#digioh-banner-spacer-' + hash.lightbox_id).length) {
                                JQUERY_DIGIOH('#digioh-banner-spacer-' + hash.lightbox_id).height(dims_box.height);
                            }
                        }
                    }



                    if (EFFECTS[hash.lightbox_id].widget_type === 'sidebar') {
                        JQUERY_DIGIOH('#' + dom_id).attr('style', getSidebarPositionAfterAnimation(EFFECTS[hash.lightbox_id].sidebar, hash.lightbox_id));
                    }



                    if (EFFECTS[hash.lightbox_id].widget_type === 'fancybox') {
                        FANCY_REPOSITION_LOCKED[LIGHTBOX_GUID] = true;

                        var left_new = Math.round(((jqWin.width() - dims_box.width) / 2) + jqWin.scrollLeft());
                        var top_new = Math.round(((jqWin.height() - dims_box.height) / 2) + jqWin.scrollTop());

                        var wrap = JQUERY_DIGIOH('.fb_digioh-wrap').filter(':first');
                        wrap.css({ 'left': left_new, 'top': top_new, 'width': dims_box.width + 'px', 'height': dims_box.height + 'px' });

                        JQUERY_DIGIOH('#' + dom_id).css({ 'left': left_new, 'top': top_new, 'width': dims_box.width + 'px', 'height': dims_box.height + 'px' });
                    }



                    if (EFFECTS[hash.lightbox_id].hasOwnProperty(pref + 'responsive') && EFFECTS[hash.lightbox_id][pref + 'responsive'].use) {
                        if (EFFECTS[hash.lightbox_id].widget_type !== 'inline') {
                            //JQUERY_DIGIOH('#lightbox-iframe-' + hash.lightbox_id).width(hash.width);
                            //JQUERY_DIGIOH('#lightbox-iframe-' + hash.lightbox_id).height(hash.height);
                            CURRENT_PAGE_DIMS_RESPONSIVE[hash.lightbox_id] = { width: dims_box.width, height: dims_box.height };
                            keepSendingResizeToChildUntilReceived({ sender: 'digioh', action: 'dimensions_changed', widget_type: EFFECTS[hash.lightbox_id].widget_type, width: dims_box.width, height: dims_box.height }, hash.lightbox_id, 100, 0);
                        } else {
                            inlineResponsiveResizing(hash.lightbox_id, dom_id, (new Date().getTime()), 0, 0);
                        }
                    }



                    //logger('Showing page: ' + hash.page_prefix + ', width: ' + hash.width + ', height: ' + hash.height);

                } else if (hash.child_action == 'register_analytics_submit' && hash.hasOwnProperty('submission') && hash.hasOwnProperty('post_to_keen')) {
                    //if (hash.hasOwnProperty('event_guid')) {
                    //    azureEvent('lightbox_submit', hash.event_guid, hash.lightbox_id);
                    //}
                    //logger(typeof JSON.parse);

                    if (!hash.hasOwnProperty('form_display')) {
                        logger("register_analytics_submit: hash does not have property - form_display");
                    }

                    if (!hash.hasOwnProperty('form_display') || hash.form_display == true) {
                        var sid = generateGuid();

                        DIGIOH_LIGHTBOX_ANALYTICS.form_submit_data = JSON.parse(LZString.decompressFromBase64(hash.submission));
                        DIGIOH_LIGHTBOX_ANALYTICS.form_submit_query = LZString.decompressFromBase64(hash.post_to_keen);

                        keenLightboxSubmit(DIGIOH_LIGHTBOX_ANALYTICS.form_submit_data, hash.lightbox_id, sid);

                        //if (typeof DIGIOH_USE_REAL_TIME_SUBMISSIONS !== 'undefined' && DIGIOH_USE_REAL_TIME_SUBMISSIONS === true) {
                        //    postToKeen(DIGIOH_LIGHTBOX_ANALYTICS.form_submit_query, hash.lightbox_id, sid);
                        //}

                        postToKeen(DIGIOH_LIGHTBOX_ANALYTICS.form_submit_query, hash.lightbox_id, sid);

                        registerLightboxSubmit(hash.lightbox_id);
                    } else {
                        logger("register_analytics_submit: prevented submit event from firing because form is turned off.");

                        DIGIOH_LIGHTBOX_ANALYTICS.form_submit_data = JSON.parse(LZString.decompressFromBase64(hash.submission));
                        keenLightboxDebug(hash.lightbox_id, DIGIOH_LIGHTBOX_ANALYTICS.form_submit_data);
                    }
                }
            }

            if (hash.hasOwnProperty('event')) {
                if (hash.event == 'mouseenter' && hash.hasOwnProperty('lightbox_id')) {
                    PREVENT_SIDEBAR_CLOSE_GUIDS[hash.lightbox_id] = true;
                    //logger("added PREVENT_SIDEBAR_CLOSE_GUID");
                } else if (hash.event == 'mouseleave' && hash.hasOwnProperty('lightbox_id')) {
                    if (PREVENT_SIDEBAR_CLOSE_GUIDS.hasOwnProperty(hash.lightbox_id)) {
                        delete PREVENT_SIDEBAR_CLOSE_GUIDS[hash.lightbox_id];
                        //logger("removed PREVENT_SIDEBAR_CLOSE_GUID");
                    }
                } else if (hash.event == 'input_focus' && hash.hasOwnProperty('lightbox_id')) {
                    if (isMobile()) {


                        //JQUERY_DIGIOH('#' + getLightboxDomId(hash.lightbox_id)).css('top', Math.round(jqWin.scrollTop()) + (jqWin.height() / 2) + EFFECTS[hash.lightbox_id].height + 'px');
                        //MOBILE_SCROLL_TOP_MAP[hash.lightbox_id] = 'freeze';
                        //window.setTimeout(function () {
                        //JQUERY_DIGIOH('#' + getLightboxDomId(hash.lightbox_id)).css(getMobileSidebarToLightboxConversionPositionCss(hash.lightbox_id, 'absolute'));
                        //JQUERY_DIGIOH('#' + getLightboxDomId(hash.lightbox_id)).attr('style', getMobileSidebarToLightboxConversionPositionCss(hash.lightbox_id));
                        //}, 200);

                        //fancyboxMobileSidebarFix(hash.lightbox_id);
                    }
                }
            }

            if (hash.hasOwnProperty('zipcode')) {
                if (hash.hasOwnProperty('sender') && hash.sender == 'maxmind2') {
                    if (hash.hasOwnProperty('callback_func') && hash.callback_func.length > 0) {
                        if (window.DIGIOH_API.LIGHTBOX.hasOwnProperty(hash.callback_func)) {
                            window.DIGIOH_API.LIGHTBOX[hash.callback_func](hash.ip);
                        }
                    }
                } else {
                    GEO_IP = hash;
                    if (GEO_IP.hasOwnProperty("country_name")) GEO_IP.country_name = GEO_IP.country_name.replace('+', ' ');
                    if (GEO_IP.hasOwnProperty("region_name")) GEO_IP.region_name = GEO_IP.region_name.replace('+', ' ');
                    if (GEO_IP.hasOwnProperty("city")) GEO_IP.city = GEO_IP.city.replace('+', ' ');
                    if (GEO_IP.hasOwnProperty("latitude") && GEO_IP.latitude) GEO_IP.latitude = parseFloat(GEO_IP.latitude);
                    if (GEO_IP.hasOwnProperty("longitude") && GEO_IP.longitude) GEO_IP.longitude = parseFloat(GEO_IP.longitude);
                    if (GEO_IP.hasOwnProperty("time_zone") && GEO_IP.time_zone) GEO_IP.time_zone = decodeURIComponent(GEO_IP.time_zone);

                    GEO_IP.geo_source = 'maxmind';

                    DIGIOH_LIGHTBOX_ANALYTICS.setGeoData(GEO_IP);
                    //logger(DIGIOH_LIGHTBOX_ANALYTICS.VARS, true);

                    initDependentScripts();
                }
            }

            if (hash.hasOwnProperty('loading_status') && hash.loading_status == "settings_applied") {
                if (hash.hasOwnProperty('widget_type') && hash.widget_type === "sidebar") {
                    if (JQUERY_DIGIOH.inArray(hash.lightbox_id, PRELOADED_LIGHTBOXES) === -1) {
                        showSidebar(hash.lightbox_id);
                    }
                } else if (hash.hasOwnProperty('widget_type') && hash.widget_type === "banner") {
                    if (JQUERY_DIGIOH.inArray(hash.lightbox_id, PRELOADED_LIGHTBOXES) === -1) {
                        showBanner(hash.lightbox_id);
                    }
                }

                if (JQUERY_DIGIOH.inArray(hash.lightbox_id, PRELOADED_LIGHTBOXES_LOADED) == -1) {
                    PRELOADED_LIGHTBOXES_LOADED.push(hash.lightbox_id);
                    //logger('** Preload Lightbox Loaded: ' + hash.lightbox_id);
                }

                //logger("settings_applied: " + hash.lightbox_id);

                if (IS_PREVIEW) {
                    logger("preview 1");
                    if (typeof DigiohPreviewOnScriptLoaded !== "undefined" && !wasScriptOnLoadedCalled) {
                        logger("preview 2");
                        DigiohPreviewOnScriptLoaded();

                        if (!IS_PREVIEW_EVENT) {
                            logger("preview 3");
                            LIGHTBOX_GUID = LIGHTBOX_GUID_PREVIEW;
                            window.setTimeout(loadLightbox, 500);
                        }
                    }
                }

                var pref = getPagePref(hash.lightbox_id);

                if (EFFECTS[hash.lightbox_id].hasOwnProperty(pref + 'responsive') && EFFECTS[hash.lightbox_id][pref + 'responsive'].use) {
                    if (EFFECTS[hash.lightbox_id].widget_type !== 'inline') {
                        var dims_box = getActualBoxWidthAndHeight(hash.lightbox_id);
                        CURRENT_PAGE_DIMS_RESPONSIVE[hash.lightbox_id] = { width: dims_box.width, height: dims_box.height };
                        keepSendingResizeToChildUntilReceived({ sender: 'digioh', action: 'dimensions_changed', widget_type: EFFECTS[hash.lightbox_id].widget_type, width: dims_box.width, height: dims_box.height }, hash.lightbox_id, 100, 0);
                    } else {
                        inlineResponsiveResizing(hash.lightbox_id, getLightboxDomId(hash.lightbox_id), (new Date().getTime()), 0, 0);
                    }
                }
            }

        }
        catch (e) {
            logError(e, "processPostMessage");
        }
    }

    function parsePostMessageResult(data) {
        try {
            var hash = {};

            if (data.indexOf('&') > 0) {
                var kvps = data.split('&');
                for (var x = 0; x < kvps.length; x++) {
                    if (kvps[x].indexOf('=') > 0) {
                        var kvp = kvps[x].split('=');
                        hash[kvp[0]] = decodeURIComponent(kvp[1]);
                        //logger(kvp[0] + '=' + kvp[1]);
                    }
                }
            } else if (data.indexOf('=') > 0) {
                var kvp = data.split('=');
                hash[kvp[0]] = decodeURIComponent(kvp[1]);
                //logger(kvp[0] + '=' + kvp[1]);
            }

            return hash;
        }
        catch (e) {
            logError(e, "parsePostMessageResult");
        }
    }

    function tryOpenAnotherLightbox(lid) {
        if (LIGHTBOX_GUID) {
            window.setTimeout(function () {
                //logger('waiting to load another lightbox: ' + lid);
                tryOpenAnotherLightbox(lid);
            }, 100);
        } else {
            //logger('loading another lightbox: ' + lid);
            LIGHTBOX_GUID = lid;
            loadLightbox();
            IS_REDIRECTING_PARENT = false;
        }
    }

    function getAnalyticsDataForSubmission(lid) {
        try {
            var var_id = '';
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lid)) {
                var_id = lid;
                lid = DIGIOH_VARIATION_TO_BOX_MAP[lid];
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lid];
            }

            var hash = {
                is_preview: IS_PREVIEW,
                vendor_id: VENDOR_GUID,
                client_id: CLIENT_GUID,
                lightbox_id: lid,
                variation_id: var_id,
                referrer_url: document.referrer,
                page_url: document.location.href,
                geoip: {
                    ip_address: DIGIOH_LIGHTBOX_ANALYTICS.VARS.ip_address,
                    continent_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.continent,
                    country_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.country,
                    country_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.country_name,
                    region_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.state,
                    region_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.region_name,
                    city: DIGIOH_LIGHTBOX_ANALYTICS.VARS.city,
                    zipcode: DIGIOH_LIGHTBOX_ANALYTICS.VARS.zipcode,
                    metro_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.metro_code,
                    time_zone: DIGIOH_LIGHTBOX_ANALYTICS.VARS.time_zone,
                    area_code: DIGIOH_LIGHTBOX_ANALYTICS.VARS.area_code,
                    latitude: DIGIOH_LIGHTBOX_ANALYTICS.VARS.latitude,
                    longitude: DIGIOH_LIGHTBOX_ANALYTICS.VARS.longitude
                },
                device: {
                    hardware: DIGIOH_LIGHTBOX_ANALYTICS.VARS.device,
                    os: DIGIOH_LIGHTBOX_ANALYTICS.VARS.operating_system,
                    browser_type: DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type,
                    browser_version: DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_version
                },
                entry_point: {
                    referrer_url: DIGIOH_LIGHTBOX_ANALYTICS.VARS.referring_website_url,
                    landing_page_url: DIGIOH_LIGHTBOX_ANALYTICS.VARS.landing_page,
                    landing_page_ip: DIGIOH_LIGHTBOX_ANALYTICS.VARS.landing_page_ip,
                    landing_page_date: DIGIOH_LIGHTBOX_ANALYTICS.VARS.date_of_visit,
                    web_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.web_source,
                    past_visits: DIGIOH_LIGHTBOX_ANALYTICS.VARS.past_visits,
                    page_visits: DIGIOH_LIGHTBOX_ANALYTICS.VARS.page_visits,
                    search_engine: DIGIOH_LIGHTBOX_ANALYTICS.VARS.search_engine,
                    utm_campaign_source: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_source,
                    utm_campaign_medium: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_medium,
                    utm_campaign_term: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_term,
                    utm_campaign_content: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_content,
                    utm_campaign_name: DIGIOH_LIGHTBOX_ANALYTICS.VARS.utm_campaign_name
                }
            };

            return hash;
        }
        catch (e) {
            logError(e, "getAnalyticsDataForSubmission");
        }
    }

    function effectsHasTeaserDisplayFancybox(lbid) {
        try {
            return (EFFECTS.hasOwnProperty(lbid) && EFFECTS[lbid].hasOwnProperty("fancybox") && EFFECTS[lbid]["fancybox"].hasOwnProperty("teaser") && (EFFECTS[lbid].fancybox.teaser.display || EFFECTS[lbid].fancybox.teaser.display_on_page_load));
        }
        catch (e) {
            logError(e, "effectsHasTeaserDisplayFancybox");
        }
    }

    function effectsHasTeaserDisplaySidebar(lbid) {
        try {
            return (EFFECTS.hasOwnProperty(lbid) && EFFECTS[lbid].hasOwnProperty("sidebar") && EFFECTS[lbid]["sidebar"].hasOwnProperty("teaser") && (EFFECTS[lbid].sidebar.teaser.display || EFFECTS[lbid].sidebar.teaser.display_on_page_load));
        }
        catch (e) {
            logError(e, "effectsHasTeaserDisplaySidebar");
        }
    }



    function registerCloseSidebarTime(lbid) {
        try {
            if (EFFECTS[lbid].sidebar.auto_close.time > 0) {
                window.setTimeout(function () {
                    if (!PREVENT_SIDEBAR_CLOSE_GUIDS.hasOwnProperty(lbid)) {
                        closeSidebar(lbid);
                    }
                }, (1000 * EFFECTS[lbid].sidebar.auto_close.time));
            }
        }
        catch (e) {
            logError(e, "registerCloseSidebarTime");
        }
    }

    function registerCloseSidebarScroll(lbid) {
        try {
            if (EFFECTS[lbid].sidebar.auto_close.scroll_up > 0 || EFFECTS[lbid].sidebar.auto_close.scroll_down > 0) {
                ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS[lbid] = Math.round(jqWin.scrollTop());

                if (!body.hasClass('digioh-sidebar-body-scroll')) {
                    body.addClass('digioh-sidebar-body-scroll');

                    jqWin.scroll(function () {
                        for (var key in ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS) {
                            if (EFFECTS[key].sidebar.auto_close.scroll_up > 0 && ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS[key] - jqWin.scrollTop() >= EFFECTS[key].sidebar.auto_close.scroll_up) {
                                if (!PREVENT_SIDEBAR_CLOSE_GUIDS.hasOwnProperty(key)) {
                                    closeSidebar(key);
                                }
                            } else if (EFFECTS[key].sidebar.auto_close.scroll_down > 0 && jqWin.scrollTop() - ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS[key] >= EFFECTS[key].sidebar.auto_close.scroll_down) {
                                if (!PREVENT_SIDEBAR_CLOSE_GUIDS.hasOwnProperty(key)) {
                                    closeSidebar(key);
                                }
                            }
                        }
                    });
                }
            }
        }
        catch (e) {
            logError(e, "registerCloseSidebarScroll");
        }
    }

    function registerCloseSidebarClick(lbid) {
        try {
            if (EFFECTS[lbid].sidebar.auto_close.click) {
                if (!body.hasClass('digioh-sidebar-body-click')) {
                    body.addClass('digioh-sidebar-body-click');
                }

                JQUERY_DIGIOH('.digioh-sidebar-body-click').click(function () {
                    closeSidebar(lbid);
                });
            }
        }
        catch (e) {
            logError(e, "registerCloseSidebarClick");
        }
    }

    var closeBanner = function (lbid) {
        try {
            if (!SIDEBAR_CLOSE_MAP.hasOwnProperty(lbid) || SIDEBAR_CLOSE_MAP[lbid] != 1) {
                SIDEBAR_CLOSE_MAP[lbid] = 1;

                if (body.hasClass('digioh-sidebar-body-click')) {
                    JQUERY_DIGIOH(".digioh-sidebar-body-click").off();
                    body.removeClass('digioh-sidebar-body-click');
                }

                if (PREVENT_SIDEBAR_CLOSE_GUIDS.hasOwnProperty(lbid)) {
                    delete PREVENT_SIDEBAR_CLOSE_GUIDS[lbid];
                }

                FOCUSED_SIDEBAR_BANNER_GUIDS[lbid] = false;

                if (ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS.hasOwnProperty(lbid)) {
                    delete ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS[lbid];
                }

                var dom_id = getLightboxDomId(lbid);

                registerLightboxClose(lbid);
                JQUERY_DIGIOH('#' + dom_id).hide();

                if (!EFFECTS[lbid].banner.hasOwnProperty('placement') || EFFECTS[lbid].banner.placement !== 'bottom') {
                    if (JQUERY_DIGIOH("#digioh-banner-spacer-" + lbid).length) {
                        JQUERY_DIGIOH("#digioh-banner-spacer-" + lbid).remove();
                    }
                }
            }
        }
        catch (e) {
            logError(e, "closeBanner");
        }
    }

    var closeSidebar = function (lbid) {
        try {
            if (!SIDEBAR_CLOSE_MAP.hasOwnProperty(lbid) || SIDEBAR_CLOSE_MAP[lbid] != 1) {
                SIDEBAR_CLOSE_MAP[lbid] = 1;

                if (body.hasClass('digioh-sidebar-body-click')) {
                    JQUERY_DIGIOH(".digioh-sidebar-body-click").off();
                    body.removeClass('digioh-sidebar-body-click');
                }

                if (PREVENT_SIDEBAR_CLOSE_GUIDS.hasOwnProperty(lbid)) {
                    delete PREVENT_SIDEBAR_CLOSE_GUIDS[lbid];
                }

                FOCUSED_SIDEBAR_BANNER_GUIDS[lbid] = false;

                if (ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS.hasOwnProperty(lbid)) {
                    delete ELIGIBLE_SIDEBAR_CLOSE_SCROLL_GUIDS[lbid];
                }

                var dom_id = getLightboxDomId(lbid);

                var ca = getCloseAnimation(EFFECTS[lbid].sidebar, lbid);
                if (!ca) {
                    ca = {};
                    registerLightboxClose(lbid);
                    JQUERY_DIGIOH('#' + dom_id).hide();
                } else {
                    JQUERY_DIGIOH('#' + dom_id).animate({ top: ca.top, left: ca.left }, {
                        duration: EFFECTS[lbid].sidebar.speed.close,
                        easing: EFFECTS[lbid].sidebar.easing.close,
                        complete: function () {
                            registerLightboxClose(lbid);
                            JQUERY_DIGIOH('#' + dom_id).hide();
                        }
                    });
                }
            }
        }
        catch (e) {
            logError(e, "closeSidebar");
        }
    }

    function openTeaser(teaser, lbid) {
        try {
            var teaserId = 'teaser-' + lbid;
            TEASER_LIGHTBOX_GUIDS[teaserId] = "open";

            if (!JQUERY_DIGIOH('#' + teaserId).length) {
                body.append("<div id=\"" + teaserId + "\" class=\"" + teaserId + "\" style=\"" + getTeaserStyle(teaser) + "\">" + teaser.text + "</div>");
                JQUERY_DIGIOH('#' + teaserId).css(getBackgroundStyle(teaser.background));
                JQUERY_DIGIOH('#' + teaserId).css(getBorderStyle(teaser.border));
                JQUERY_DIGIOH('#' + teaserId).css(getFontStyle(teaser.font));

                JQUERY_DIGIOH('#' + teaserId).click(function () {
                    if (LIGHTBOX_GUID == '') {
                        LIGHTBOX_GUID = JQUERY_DIGIOH(this).attr('id').substring(7);
                        closeTeaser(teaser, LIGHTBOX_GUID, true);
                    }
                });

                JQUERY_DIGIOH('#' + teaserId).mouseenter(function () {
                    JQUERY_DIGIOH('#' + teaserId).css(getBackgroundStyle(teaser.background_hover));
                    JQUERY_DIGIOH('#' + teaserId).css(getBorderStyle(teaser.border_hover));
                    JQUERY_DIGIOH('#' + teaserId).css(getFontStyle(teaser.font_hover));
                }).mouseleave(function () {
                    JQUERY_DIGIOH('#' + teaserId).css(getBackgroundStyle(teaser.background));
                    JQUERY_DIGIOH('#' + teaserId).css(getBorderStyle(teaser.border));
                    JQUERY_DIGIOH('#' + teaserId).css(getFontStyle(teaser.font));
                });

                JQUERY_DIGIOH('#' + teaserId).mousedown(function () {
                    JQUERY_DIGIOH('#' + teaserId).css(getBackgroundStyle(teaser.background_focus));
                    JQUERY_DIGIOH('#' + teaserId).css(getBorderStyle(teaser.border_focus));
                    JQUERY_DIGIOH('#' + teaserId).css(getFontStyle(teaser.font_focus));
                }).mouseup(function () {
                    JQUERY_DIGIOH('#' + teaserId).css(getBackgroundStyle(teaser.background_hover));
                    JQUERY_DIGIOH('#' + teaserId).css(getBorderStyle(teaser.border_hover));
                    JQUERY_DIGIOH('#' + teaserId).css(getFontStyle(teaser.font_hover));
                });
            }

            var oa = getTeaserOpenAnimation(teaser);

            JQUERY_DIGIOH('#' + teaserId).animate({ top: oa.top, left: oa.left, right: oa.right, bottom: oa.bottom }, {
                duration: 500,
                easing: "swing",
                complete: function () {

                }
            });
        }
        catch (e) {
            logError(e, "openTeaser");
        }
    }

    function closeTeaser(teaser, lbid, triggerLightboxLoad) {
        try {
            if (JQUERY_DIGIOH('#teaser-' + lbid).length) {
                var ca = getTeaserCloseAnimation(teaser);
                if (!ca) ca = {};

                JQUERY_DIGIOH('#teaser-' + lbid).animate({ top: ca.top, left: ca.left, right: ca.right, bottom: ca.bottom }, {
                    duration: 100,
                    easing: "swing",
                    complete: function () {
                        //JQUERY_DIGIOH('.teaser-' + lbid).each(function () { $(this).remove(); });
                        JQUERY_DIGIOH('#teaser-' + lbid).remove();
                        if (triggerLightboxLoad) {
                            loadLightbox();
                        }
                    }
                });
            }
        }
        catch (e) {
            logError(e, "closeTeaser");
        }
    }

    function getTeaserCloseAnimation(teaser) {
        try {
            var pos = teaser.position.split('-');
            var posx = pos[1];
            var posy = pos[0];

            var ca = {};

            if (posx == 'left') {
                if (posy == 'top') {
                    ca.left = "-=" + (teaser.width + teaser.offset_x) + "px";
                } else if (posy == 'center') {
                    ca.left = "-=" + (teaser.width + teaser.offset_x) + "px";
                } else if (posy == 'bottom') {
                    ca.bottom = "-=" + (teaser.height + teaser.offset_y) + "px";
                }
            } else if (posx == 'center') {
                if (posy == 'top') {
                    ca.top = "-=" + (teaser.height + teaser.offset_y) + "px";
                } else if (posy == 'bottom') {
                    ca.bottom = "-=" + (teaser.height + teaser.offset_y) + "px";
                }
            } else if (posx == 'right') {
                if (posy == 'top') {
                    ca.right = "-=" + (teaser.width + teaser.offset_x) + "px";
                } else if (posy == 'center') {
                    ca.right = "-=" + (teaser.width + teaser.offset_x) + "px";
                } else if (posy == 'bottom') {
                    ca.bottom = "-=" + (teaser.height + teaser.offset_y) + "px";
                }
            }

            return ca;
        }
        catch (e) {
            logError(e, "getTeaserCloseAnimation");
        }
    }

    function getTeaserOpenAnimation(teaser) {
        try {
            var pos = teaser.position.split('-');
            var posx = pos[1];
            var posy = pos[0];

            var oa = {};

            if (posx == 'left') {
                if (posy == 'top') {
                    oa.left = "+=" + (teaser.width + teaser.offset_x) + "px";
                } else if (posy == 'center') {
                    oa.left = "+=" + (teaser.width + teaser.offset_x) + "px";
                } else if (posy == 'bottom') {
                    oa.bottom = "+=" + (teaser.height + teaser.offset_y) + "px";
                }
            } else if (posx == 'center') {
                if (posy == 'top') {
                    oa.top = "+=" + (teaser.height + teaser.offset_y) + "px";
                } else if (posy == 'bottom') {
                    oa.bottom = "+=" + (teaser.height + teaser.offset_y) + "px";
                }
            } else if (posx == 'right') {
                if (posy == 'top') {
                    oa.right = "+=" + (teaser.width + teaser.offset_x) + "px";
                } else if (posy == 'center') {
                    oa.right = "+=" + (teaser.width + teaser.offset_x) + "px";
                } else if (posy == 'bottom') {
                    oa.bottom = "+=" + (teaser.height + teaser.offset_y) + "px";
                }
            }

            return oa;
        }
        catch (e) {
            logError(e, "getTeaserOpenAnimation");
        }
    }

    function getTeaserStyle(teaser) {
        try {
            var str = "cursor: pointer; z-index: 9948030; ";

            str += "position: " + teaser.css_positioning + "; ";
            str += "width: " + teaser.width + "px; ";
            str += "height: " + teaser.height + "px; ";

            str += "padding-top: " + teaser.padding.top + "px; ";
            str += "padding-right: " + teaser.padding.right + "px; ";
            str += "padding-bottom: " + teaser.padding.bottom + "px; ";
            str += "padding-left: " + teaser.padding.left + "px; ";

            var pos = teaser.position.split('-');
            var posx = pos[1];
            var posy = pos[0];

            if (posx == 'left') {
                if (posy == 'top') {
                    str += "left: -" + (teaser.width) + "px; "; //slideRight effect
                    str += "top: " + (teaser.offset_y) + "px; ";
                } else if (posy == 'center') {
                    str += "left: -" + (teaser.width) + "px; ";
                    str += "top: 50%; margin-top: -" + (Math.round(teaser.height / 2) + teaser.offset_y) + "px; "; //slideRight effect
                } else if (posy == 'bottom') {
                    str += "left: " + (teaser.offset_x) + "px; ";
                    str += "bottom: -" + (teaser.height) + "px; "; //slideUp effect
                }
            } else if (posx == 'center') {
                if (posy == 'top') {
                    str += "left: 50%; margin-left: -" + (Math.round(teaser.width / 2) + teaser.offset_x) + "px; "; //slideDown effect
                    str += "top: -" + (teaser.height) + "px; ";
                } else if (posy == 'bottom') {
                    str += "left: 50%; margin-left: -" + (Math.round(teaser.width / 2) + teaser.offset_x) + "px; "; //slideUp effect
                    str += "bottom: -" + (teaser.height) + "px; ";
                }
            } else if (posx == 'right') {
                if (posy == 'top') {
                    str += "right: -" + (teaser.width) + "px; "; //slideLeft effect
                    str += "top: " + (teaser.offset_y) + "px; ";
                } else if (posy == 'center') {
                    str += "right: -" + (teaser.width) + "px; ";
                    str += "top: 50%; margin-top: -" + (Math.round(teaser.height / 2) + teaser.offset_y) + "px; "; //slideLeft effect
                } else if (posy == 'bottom') {
                    str += "right: " + (teaser.offset_x) + "px; ";
                    str += "bottom: -" + (teaser.height) + "px; "; //slideUp effect
                }
            }

            return str;
        }
        catch (e) {
            logError(e, "getTeaserStyle");
        }
    }

    function getFontStyle(propFont) {
        try {
            var hash = {};
            hash["font-family"] = propFont.family;
            hash["font-weight"] = (propFont.bold ? "bold" : "normal");
            hash["font-style"] = (propFont.italic ? "italic" : "normal");
            hash["text-decoration"] = (propFont.underline ? "underline" : "none");
            hash["text-align"] = propFont.align;
            hash["font-size"] = propFont.size + "px";
            hash["color"] = propFont.color;
            return hash;
        }
        catch (e) {
            logError(e, "getFontStyle");
        }
    }

    function getBorderStyle(propBorder) {
        try {
            var hash = {};
            hash["border-color"] = propBorder.color;
            hash["border-style"] = propBorder.style;
            hash["border-width"] = propBorder.width + "px";
            hash["border-radius"] = propBorder.radius + "px";
            return hash;
        }
        catch (e) {
            logError(e, "getBorderStyle");
        }
    }

    function getBackgroundStyle(propBackground) {
        try {
            var hash = {};

            //http://stackoverflow.com/questions/2504071/is-it-possible-to-combine-a-background-image-and-css3-gradients

            if (propBackground.use_image && propBackground.image.length > 3 && propBackground.image != 'none') {
                //hash["background-image"] = "url(https://s3.lightboxcdn.com/vendors/" + VENDOR_GUID + "/uploads/" + propBackground.image + ")";
                hash["background-image"] = "url(" + PROTOCOL + "s3.lightboxcdn.com/vendors/" + VENDOR_GUID + "/uploads/" + propBackground.image + ")";
                hash["background-repeat"] = propBackground.repeat;
                hash["background-position"] = propBackground.position;
                hash["background-color"] = propBackground.color;
            }
            else if (propBackground.use_gradient && propBackground.gradient.length > 3) {
                hash["background-image"] = "none";

                if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type == "Chrome")
                    hash["background"] = "-webkit-gradient(linear, left top, left bottom, from(" + propBackground.color + "),to(" + propBackground.gradient + "))";
                else if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type == "Safari")
                    hash["background"] = "-webkit-linear-gradient(top, " + propBackground.color + "," + propBackground.gradient + ")";
                else if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type == "Opera")
                    hash["background"] = "-o-linear-gradient(top, " + propBackground.color + "," + propBackground.gradient + ")";
                else if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type == "Firefox")
                    hash["background"] = "-moz-linear-gradient(top, " + propBackground.color + "," + propBackground.gradient + ")";
                else if (DIGIOH_LIGHTBOX_ANALYTICS.VARS.browser_type == "Internet Explorer")
                    hash["background"] = "-ms-linear-gradient(top, " + propBackground.color + "," + propBackground.gradient + ")";
                else
                    hash["background"] = "linear-gradient(to bottom," + propBackground.color + "," + propBackground.gradient + ")";
            }
            else {
                hash["background-image"] = "none";
                hash["background-color"] = propBackground.color;
            }
            return hash;
        }
        catch (e) {
            logError(e, "getBackgroundStyle");
        }
    }

    function getCloseButtonStyle(prop, widget_type) {
        try {
            var str = "position: absolute; width: 36px; height: 36px; cursor: pointer; z-index: 9948040; background-image: url(" + CLOSE_BUTTON_URL + ");";

            if (prop.display && widget_type != "sidebar") str += "display: block; ";
            else str += "display: none; ";

            if (prop.position == 'top-left') {
                str += "top: " + prop.offset_y + "px; ";
                str += "left: " + prop.offset_x + "px; ";
            } else if (prop.position == 'top-right') {
                str += "top: " + prop.offset_y + "px; ";
                str += "right: " + prop.offset_x + "px; ";
            } else if (prop.position == 'bottom-left') {
                str += "bottom: " + prop.offset_y + "px; ";
                str += "left: " + prop.offset_x + "px; ";
            } else if (prop.position == 'bottom-right') {
                str += "bottom: " + prop.offset_y + "px; ";
                str += "right: " + prop.offset_x + "px; ";
            }

            return str;
        }
        catch (e) {
            logError(e, "getCloseButtonStyle");
        }
    }

    function getBannerPosition(prop, lid) {
        try {
            var str = "";

            if (prop.hasOwnProperty('placement') && prop.placement === 'bottom') {
                str += "position: fixed; ";
            } else if (prop.css_positioning == "fixed" && isMobile()) {
                //str = "position: absolute; ";
                str = "position: " + prop.css_positioning + "; ";
            } else {
                str = "position: " + prop.css_positioning + "; ";
            }

            //var scrollTop = JQUERY_DIGIOH(window).scrollTop();
            //str += "top: " + scrollTop + "px; ";

            var dims_box = getActualBoxWidthAndHeight(lid);

            str += "width: " + dims_box.width + "px; ";
            str += "height: " + dims_box.height + "px; ";
            str += "z-index: 9948030; ";
            str += "left: 50%; margin-left: -" + Math.round(dims_box.width / 2) + "px; ";

            if (prop.hasOwnProperty('placement') && prop.placement === 'bottom') {
                str += "bottom: 0px; ";
            } else {
                str += "top: 0px; ";
            }

            return str;
        }
        catch (e) {
            logError(e, "getBannerPosition");
        }
    }

    function getSidebarPosition(prop, lid) {
        try {
            var str = "";

            if (prop.css_positioning == "fixed" && isMobile()) {
                //str = "position: absolute; ";
                str = "position: " + prop.css_positioning + "; ";
            } else {
                str = "position: " + prop.css_positioning + "; ";
            }

            var actualWindowWidthPixels = JQUERY_DIGIOH(window).width();
            var actualWindowHeightPixels = JQUERY_DIGIOH(window).height();

            var dims_box = getActualBoxWidthAndHeight(lid);

            str += "width: " + dims_box.width + "px; ";
            str += "height: " + dims_box.height + "px; ";
            str += "z-index: 9948030; ";

            var pos = prop.position.split('-');
            var posx = pos[1];
            var posy = pos[0];

            if (prop.animation.open == "slideUp") {
                str += "top: " + Math.ceil(actualWindowHeightPixels) + "px; ";
            } else if (prop.animation.open == "slideDown") {
                str += "top: " + Math.ceil(-1 * dims_box.height) + "px; ";
            } else if (prop.animation.open == "slideRight") {
                str += "left: " + Math.ceil(-1 * dims_box.width) + "px; ";
            } else if (prop.animation.open == "slideLeft") {
                str += "left: " + Math.ceil(actualWindowWidthPixels) + "px; ";
            }

            if (prop.animation.open == "slideUp" || prop.animation.open == "slideDown") {
                if (posx == 'left') str += "left: 0px; ";
                else if (posx == 'center') str += "left: 50%; margin-left: -" + Math.round(dims_box.width / 2) + "px; ";
                else if (posx == 'right') str += "right: 0px; ";
            } else if (prop.animation.open == "slideLeft" || prop.animation.open == "slideRight") {
                if (posy == 'top') str += "top: 0px; ";
                else if (posy == 'center') str += "top: 50%; margin-top: -" + Math.round(dims_box.height / 2) + "px; ";
                else if (posy == 'bottom') str += "bottom: 0px; ";
            } else if (prop.animation.open == "fade" || prop.animation.open == "elastic") {
                if (posx == 'left') str += "left: 0px; ";
                else if (posx == 'center') str += "left: 50%; margin-left: -" + Math.round(dims_box.width / 2) + "px; ";
                else if (posx == 'right') str += "right: 0px; ";

                if (posy == 'top') str += "top: 0px; ";
                else if (posy == 'center') str += "top: 50%; margin-top: -" + Math.round(dims_box.height / 2) + "px; ";
                else if (posy == 'bottom') str += "bottom: 0px; ";
            }

            return str;
        }
        catch (e) {
            logError(e, "getSidebarPosition");
        }
    }

    function getSidebarPositionAfterAnimation(prop, lid) {
        try {
            var str = "";

            if (prop.css_positioning == "fixed" && isMobile()) {
                str = "position: " + prop.css_positioning + "; ";
            } else {
                str = "position: " + prop.css_positioning + "; ";
            }

            var dims_box = getActualBoxWidthAndHeight(lid);

            str += "width: " + dims_box.width + "px; ";
            str += "height: " + dims_box.height + "px; ";
            str += "z-index: 9948030; ";

            var pos = prop.position.split('-');
            var posx = pos[1];
            var posy = pos[0];

            if (posx == 'left') str += "left: 0px; ";
            else if (posx == 'center') str += "left: 50%; margin-left: -" + Math.round(dims_box.width / 2) + "px; ";
            else if (posx == 'right') str += "right: 0px; ";

            if (posy == 'top') str += "top: 0px; ";
            else if (posy == 'center') str += "top: 50%; margin-top: -" + Math.round(dims_box.height / 2) + "px; ";
            else if (posy == 'bottom') str += "bottom: 0px; ";

            return str;
        }
        catch (e) {
            logError(e, "getSidebarPositionAfterAnimation");
        }
    }

    function getSidebarPositionMobileFocused(prop, lid) {
        try {
            var str = "";

            str += "position: absolute; ";

            var dims_box = getActualBoxWidthAndHeight(lid);

            str += "width: " + dims_box.width + "px; ";
            str += "height: " + dims_box.height + "px; ";
            str += "z-index: 9948030; ";

            var pos = prop.position.split('-');
            var posx = pos[1];
            var posy = pos[0];

            //if (posx == 'left') str += "left: 0px; ";
            //else if (posx == 'center') str += "left: 50%; margin-left: -" + Math.round(dims_box.width / 2) + "px; ";
            //else if (posx == 'right') str += "right: 0px; ";

            str += "left: 50%; margin-left: -" + Math.round(dims_box.width / 2) + "px; ";

            //if (posy == 'top') str += "top: 0px; ";
            //else if (posy == 'center') str += "top: 50%; margin-top: -" + Math.round(dims_box.height / 2) + "px; ";
            //else if (posy == 'bottom') str += "bottom: 0px; ";

            str += "top: " + JQUERY_DIGIOH(window).scrollTop() + 'px;';

            return str;
        }
        catch (e) {
            logError(e, "getSidebarPositionMobileFocused");
        }
    }

    function getBannerPositionMobileFocused(prop, lid) {
        try {
            var str = "";

            str += "position: absolute; ";

            var dims_box = getActualBoxWidthAndHeight(lid);

            str += "width: " + dims_box.width + "px; ";
            str += "height: " + dims_box.height + "px; ";
            str += "z-index: 9948030; ";
            str += "left: 50%; margin-left: -" + Math.round(dims_box.width / 2) + "px; ";
            str += "top: " + JQUERY_DIGIOH(window).scrollTop() + 'px;';

            //if (prop.hasOwnProperty('placement') && prop.placement === 'bottom') {
            //    str += "bottom: 0px; ";
            //} else {
            //    str += "top: " + JQUERY_DIGIOH(window).scrollTop() + 'px;';
            //}

            return str;
        }
        catch (e) {
            logError(e, "getBannerPositionMobileFocused");
        }
    }

    function getOpenAnimation(prop, lbid) {
        try {
            var pos = prop.position.split('-');
            var posx = pos[1];
            var posy = pos[0];

            var oa = {};

            var actualWindowWidthPixels = JQUERY_DIGIOH(window).width();
            var actualWindowHeightPixels = JQUERY_DIGIOH(window).height();

            var dims_box = getActualBoxWidthAndHeight(lbid);

            if (prop.animation.open == "slideUp") {
                if (posy == 'top') {
                    oa.top = "-=" + Math.ceil(actualWindowHeightPixels) + "px";
                } else if (posy == 'center') {
                    oa.top = "-=" + Math.ceil((actualWindowHeightPixels / 2) + (dims_box.height / 2)) + "px";
                } else if (posy == 'bottom') {
                    oa.top = "-=" + Math.ceil(dims_box.height) + "px";
                }
                return oa;
            } else if (prop.animation.open == "slideDown") {
                if (posy == 'top') {
                    oa.top = "+=" + Math.ceil(dims_box.height) + "px";
                } else if (posy == 'center') {
                    oa.top = "+=" + Math.ceil((actualWindowHeightPixels / 2) + (dims_box.height / 2)) + "px";
                } else if (posy == 'bottom') {
                    oa.top = "+=" + Math.ceil(actualWindowHeightPixels) + "px";
                }
                return oa;
            } else if (prop.animation.open == "slideRight") {
                if (posx == 'left') {
                    oa.left = "+=" + Math.ceil(dims_box.width) + "px";
                } else if (posx == 'center') {
                    oa.left = "+=" + Math.ceil((actualWindowWidthPixels / 2) + (dims_box.width / 2)) + "px";
                } else if (posx == 'right') {
                    oa.left = "+=" + Math.ceil(actualWindowWidthPixels) + "px";
                }
                return oa;
            } else if (prop.animation.open == "slideLeft") {
                if (posx == 'left') {
                    oa.left = "-=" + Math.ceil(actualWindowWidthPixels) + "px";
                } else if (posx == 'center') {
                    oa.left = "-=" + Math.ceil((actualWindowWidthPixels / 2) + (dims_box.width / 2)) + "px";
                } else if (posx == 'right') {
                    oa.left = "-=" + Math.ceil(dims_box.width) + "px";
                }
                return oa;
            }

            return false;
        }
        catch (e) {
            logError(e, "getOpenAnimation");
        }
    }

    function getCloseAnimation(prop, lbid) {
        try {
            var pos = prop.position.split('-');
            var posx = pos[1];
            var posy = pos[0];

            var ca = {};

            var actualWindowWidthPixels = JQUERY_DIGIOH(window).width();
            var actualWindowHeightPixels = JQUERY_DIGIOH(window).height();

            var dims_box = getActualBoxWidthAndHeight(lbid);

            if (prop.animation.close == "slideUp") {
                if (posy == 'top') {
                    ca.top = "-=" + Math.ceil(dims_box.height) + "px";
                } else if (posy == 'center') {
                    ca.top = "-=" + Math.ceil((actualWindowHeightPixels / 2) + (dims_box.height / 2)) + "px";
                } else if (posy == 'bottom') {
                    ca.top = "-=" + Math.ceil(actualWindowHeightPixels) + "px";
                }
                return ca;
            } else if (prop.animation.close == "slideDown") {
                if (posy == 'top') {
                    ca.top = "+=" + Math.ceil(actualWindowHeightPixels) + "px";
                } else if (posy == 'center') {
                    ca.top = "+=" + Math.ceil((actualWindowHeightPixels / 2) + (dims_box.height / 2)) + "px";
                } else if (posy == 'bottom') {
                    ca.top = "+=" + Math.ceil(dims_box.height) + "px";
                }
                return ca;
            } else if (prop.animation.close == "slideRight") {
                if (posx == 'left') {
                    ca.left = "+=" + Math.ceil(actualWindowWidthPixels) + "px";
                } else if (posx == 'center') {
                    ca.left = "+=" + Math.ceil((actualWindowWidthPixels / 2) + (dims_box.width / 2)) + "px";
                } else if (posx == 'right') {
                    ca.left = "+=" + Math.ceil(dims_box.width) + "px";
                }
                return ca;
            } else if (prop.animation.close == "slideLeft") {
                if (posx == 'left') {
                    ca.left = "-=" + Math.ceil(dims_box.width) + "px";
                } else if (posx == 'center') {
                    ca.left = "-=" + Math.ceil((actualWindowWidthPixels / 2) + (dims_box.width / 2)) + "px";
                } else if (posx == 'right') {
                    ca.left = "-=" + Math.ceil(actualWindowWidthPixels) + "px";
                }
                return ca;
            }

            return false;
        }
        catch (e) {
            logError(e, "getCloseAnimation");
        }
    }

    function registerLightboxShow(lbid) {
        try {
            var var_id = '';
            var orig_lid = lbid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lbid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lbid];
                var_id = lbid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lbid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lbid];
            }

            logger('DIGIOH: registerLightboxShow: ' + lbid);

            updateLightboxActivityView(orig_lid);

            analyticsLightboxDisplay(lbid);

            if (!IS_PREVIEW || IS_DEV) {
                if (!isInlineLightbox(lbid) || doesInlineLightboxHaveCustomJsType(lbid, 'display') || doesInlineLightboxHaveCustomJsType(lbid, 'all')) {
                    DIGIOH_CUSTOM_JS.runCustomJsOnLightboxDisplay(window, document, JQUERY_DIGIOH, orig_lid, var_id);
                    logger('DIGIOH: runCustomJsOnLightboxDisplay - ' + lbid);
                }
            }
        }
        catch (e) {
            logError(e, "registerLightboxShow");
        }
    }

    var isInlineLightbox = function (lid) {
        try {
            var idxArrAlways = JQUERY_DIGIOH.inArray(lid, DIGIOH_LIGHTBOX_INLINE_ALWAYS_ARR);
            var idxArrConditions = JQUERY_DIGIOH.inArray(lid, DIGIOH_LIGHTBOX_INLINE_CONDITIONS_ARR);
            return (idxArrAlways >= 0 || idxArrConditions >= 0);
        }
        catch (e) {
            logError(e, "isInlineLightbox");
        }
    }

    function registerLightboxClose(lbid) {
        try {
            var var_id = '';
            var orig_lid = lbid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lbid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lbid];
                var_id = lbid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lbid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lbid];
            }

            updateLightboxActivityClose(orig_lid);

            if (!IS_PREVIEW || IS_DEV) {
                if (!isInlineLightbox(lbid) || doesInlineLightboxHaveCustomJsType(lbid, 'all')) {
                    DIGIOH_CUSTOM_JS.runCustomJsOnLightboxClose(window, document, JQUERY_DIGIOH, orig_lid, var_id);
                    logger('DIGIOH: runCustomJsOnLightboxClose - ' + lbid);
                }
            }

            logger('DIGIOH: checkLightboxMasterRules() called from registerLightboxClose() - ' + orig_lid + ', ' + var_id);

            if (checkLightboxMasterRules()) {
                if (effectsHasTeaserDisplayFancybox(lbid) && EFFECTS[lbid].widget_type == "fancybox") {
                    openTeaser(EFFECTS[lbid].fancybox.teaser, lbid);
                } else if (effectsHasTeaserDisplaySidebar(lbid) && EFFECTS[lbid].widget_type == "sidebar") {
                    openTeaser(EFFECTS[lbid].sidebar.teaser, lbid);
                }
            }

            LIGHTBOX_GUID = '';
        }
        catch (e) {
            logError(e, "registerLightboxClose");
        }
    }

    function registerLightboxSubmit(lbid) {
        try {
            var var_id = '';
            var orig_lid = lbid;
            if (DIGIOH_VARIATION_TO_BOX_MAP.hasOwnProperty(lbid)) {
                orig_lid = DIGIOH_VARIATION_TO_BOX_MAP[lbid];
                var_id = lbid;
            } else if (LIGHTBOX_TO_VARIATION_MAP.hasOwnProperty(lbid)) {
                var_id = LIGHTBOX_TO_VARIATION_MAP[lbid];
            }

            updateLightboxActivitySubmit(orig_lid);

            if (!IS_PREVIEW || IS_DEV) {
                if (!isInlineLightbox(lbid) || doesInlineLightboxHaveCustomJsType(lbid, 'submit') || doesInlineLightboxHaveCustomJsType(lbid, 'all')) {
                    DIGIOH_CUSTOM_JS.runCustomJsOnLightboxSubmit(window, document, JQUERY_DIGIOH, orig_lid, var_id);
                    logger('DIGIOH: runCustomJsOnLightboxSubmit - ' + lbid);
                }
            }
        }
        catch (e) {
            logError(e, "registerLightboxSubmit");
        }
    }

    function startIdleTimer() {
        try {
            JQUERY_DIGIOH.idleTimer(IDLE_PERIOD * 1000);

            JQUERY_DIGIOH(document).bind("idle.idleTimer", function () {
                IDLE_TIME += IDLE_PERIOD;
                IDLE_INTERVAL = iframewin.setInterval(idleTimerIncrement, 1000);
            });

            JQUERY_DIGIOH(document).bind("active.idleTimer", function () {
                if (IDLE_INTERVAL != 0) iframewin.clearInterval(IDLE_INTERVAL);
                IDLE_INTERVAL = 0;
            });

            TOTAL_INTERVAL = iframewin.setInterval(totalTimerIncrement, 1000);
        }
        catch (e) {
            logError(e, "startIdleTimer");
        }
    }

    function idleTimerIncrement() {
        try {
            IDLE_TIME += 1;
            DIGIOH_LIGHTBOX_ANALYTICS.VARS.idle_time_seconds = IDLE_TIME;
            //if (TIME_BOXES_ARR.length > 0) {
            //    checkConditionsTime();
            //}
            //logger("IDLE_TIME: " + IDLE_TIME);

        }
        catch (e) {
            logError(e, "idleTimerIncrement");
        }
    }

    function totalTimerIncrement() {
        try {
            TOTAL_TIME += 1;
            DIGIOH_LIGHTBOX_ANALYTICS.VARS.total_time_seconds = TOTAL_TIME;
            DIGIOH_LIGHTBOX_ANALYTICS.VARS.active_time_seconds = TOTAL_TIME - IDLE_TIME;

            if (TIME_BOXES_ARR.length > 0) {
                checkConditionsTime();
            }

            //logger("TOTAL_TIME: " + TOTAL_TIME);
        }
        catch (e) {
            logError(e, "totalTimerIncrement");
        }
    }

    function isStringAnInteger(str) {
        if (str.length == 0) return false;
        return !isNaN(str);
    }

    function stringEndsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    function stringStartsWith(str, prefix) {
        return str.indexOf(prefix) === 0;
    }

    function compareUrlEqualityWithAndWithoutTrailingSlash(urla, urlb) {
        try {
            if (urla.toLowerCase() == urlb.toLowerCase()) return true;

            if (urla.length > 1 && stringEndsWith(urla, '/')) urla = urla.substr(0, urla.length - 1);
            if (urlb.length > 1 && stringEndsWith(urlb, '/')) urlb = urlb.substr(0, urlb.length - 1);

            if (urla.toLowerCase() == urlb.toLowerCase()) return true;
            else return false;
        }
        catch (e) {
            logError(e, "compareUrlEqualityWithAndWithoutTrailingSlash");
            return false;
        }
    }

    function compareUrlEndingWithAndWithoutTrailingSlash(url, suffix) {
        try {
            if (stringEndsWith(url.toLowerCase(), suffix.toLowerCase())) return true;
            if (url.length > 1 && stringEndsWith(url, '/')) url = url.substr(0, url.length - 1);
            return stringEndsWith(url.toLowerCase(), suffix.toLowerCase());
        }
        catch (e) {
            logError(e, "compareUrlEndingWithAndWithoutTrailingSlash");
            return false;
        }
    }

    function logger(msg, isJson) {
        try {
            if (!SHOW_ERRORS)
                return;

            if (typeof console !== "undefined") {
                if (isJson) {
                    try {
                        console.log(JSON.stringify(msg, undefined, 2));
                    } catch (e1) {
                        logError(e1, "logger");
                    }
                } else {
                    console.log(msg);
                }
            }
        }
        catch (e2) {
            //if (SHOW_ERRORS) logError(e2, "logger");
        }
    }


    var TEXT_ERROR_LOG_ARR = [];

    function logErrorText(function_name, msg) {
        if (typeof DIGIOH_BUGSNAG !== 'undefined' && DIGIOH_BUGSNAG !== null) {
            processStoredTextErrors();
            DIGIOH_BUGSNAG.notify("[DIGIOH_EXCEPTION_JS] " + function_name, msg);
        } else {
            TEXT_ERROR_LOG_ARR.push({ msg: msg, fcn: function_name, processed: false });
        }

        if (function_name && function_name != "logger") {
            logger('ERROR: ' + function_name + '() - ' + msg);
        }
    }

    function processStoredTextErrors() {
        if (TEXT_ERROR_LOG_ARR.length > 0) {
            for (var i = 0; i < TEXT_ERROR_LOG_ARR.length; i++) {
                if (!TEXT_ERROR_LOG_ARR[i].processed) {
                    DIGIOH_BUGSNAG.notify("[DIGIOH_EXCEPTION_JS] " + TEXT_ERROR_LOG_ARR[i].fcn, TEXT_ERROR_LOG_ARR[i].msg);
                    TEXT_ERROR_LOG_ARR[i].processed = true;
                }
            }
        }
    }

    function logError(e, function_name) {
        if (typeof DIGIOH_BUGSNAG !== 'undefined' && DIGIOH_BUGSNAG !== null) {
            processStoredExceptions();

            var fn = 'main1.js';
            if (IS_PREVIEW) fn = 'main1.js';
            DIGIOH_BUGSNAG.notifyException(e, "[DIGIOH_EXCEPTION_JS] " + fn + " - " + function_name + " - (" + BASE_URL + ")");
        } else {
            ERROR_LOG_TEMP_ARR.push({ ex: e, fcn: function_name, processed: false });
        }

        if (function_name && function_name != "logger") {
            logger('ERROR: ' + function_name + '() - ' + e.message);
        }
    }

    function processStoredExceptions() {
        var fn = 'main1.js';
        if (IS_PREVIEW) fn = 'main1.js';

        if (ERROR_LOG_TEMP_ARR.length > 0) {
            for (var i = 0; i < ERROR_LOG_TEMP_ARR.length; i++) {
                if (!ERROR_LOG_TEMP_ARR[i].processed) {
                    DIGIOH_BUGSNAG.notifyException(ERROR_LOG_TEMP_ARR[i].ex, "[DIGIOH_EXCEPTION_JS] " + fn + " - " + ERROR_LOG_TEMP_ARR[i].fcn + " - (" + BASE_URL + ")");
                    ERROR_LOG_TEMP_ARR[i].processed = true;
                }
            }
        }
    }

    var addExistsSelector = function (selector) {
        if (JQUERY_DIGIOH.inArray(selector, EXISTS_SELECTORS) == -1) {
            EXISTS_SELECTORS.push(selector);
            buildConditionSelectorsToBoxesMap();
            initExistsSelectors();
            logger('addExistsSelector: ' + selector);
            //if (!CONDITION_SELECTOR_BOXES_MAP['exists'].hasOwnProperty(selector)) {
            //    CONDITION_SELECTOR_BOXES_MAP['exists'][selector] = [lbid];
            //} else if (JQUERY_DIGIOH.inArray(lbid, CONDITION_SELECTOR_BOXES_MAP['exists'][selector]) == -1) {
            //    CONDITION_SELECTOR_BOXES_MAP['exists'][selector].push(lbid);
            //}
        }
    }

    var removeExistsSelector = function (selector) {
        var idx = JQUERY_DIGIOH.inArray(selector, EXISTS_SELECTORS);

        if (idx > -1) {
            EXISTS_SELECTORS.splice(idx, 1);
            if (CONDITION_SELECTOR_BOXES_MAP['exists'].hasOwnProperty(selector)) {
                delete CONDITION_SELECTOR_BOXES_MAP['exists'][selector];
            }
            buildConditionSelectorsToBoxesMap();
            initExistsSelectors();
            logger('removeExistsSelector: ' + selector);
        }
    }

    var getExistsSelectors = function () {
        return EXISTS_SELECTORS;
    }

    var hasOpenLightboxes = function () {
        return (LIGHTBOX_GUID && LIGHTBOX_GUID != '');
    }

    var setLightboxID = function (lightbox_id) {
        LIGHTBOX_GUID = lightbox_id;
    }

    function getIntFromStringOrIntOrDecimal(the_num) {
        try {
            var out_num = 0;

            if (typeof the_num === 'undefined' || the_num === null || the_num === 0 || the_num === '') {
                return 0;
            }

            if (typeof the_num === 'string') {
                the_num = the_num.trim();
                if (the_num.indexOf('.') === 0) {
                    return 0;
                } else if (the_num.indexOf('.') > 0) {
                    return getIntFromStringOrIntOrDecimal(the_num.split('.')[0].trim());
                } else {
                    var parsed = parseInt(the_num.trim());
                    if (isNaN(parsed)) {
                        return 0;
                    } else {
                        return Math.round(parsed);
                    }
                }
            }

            if (typeof the_num === 'number') {
                return Math.round(the_num);
            }
        }
        catch (e) {
            logError(e, "getIntFromStringOrIntOrDecimal");
        }

        return the_num;
    }

    var getActualBoxWidthAndHeight = function (lbid) {
        try {
            var pref = getPagePref(lbid);

            var actualBoxWidthPixels = 0;
            var actualBoxHeightPixels = 0;

            if (EFFECTS[lbid].hasOwnProperty(pref + 'responsive') && EFFECTS[lbid][pref + 'responsive'].use) {
                actualBoxWidthPixels = getResponsiveBoxWidth(lbid);
                actualBoxHeightPixels = getResponsiveBoxHeight(lbid);
                FANCY_REPOSITION_LOCKED[lbid] = true;
                //logger('IS responsive (Width x Height): ' + actualBoxWidthPixels + ' x ' + actualBoxHeightPixels);
            } else {
                actualBoxWidthPixels = getBoxWidth(lbid);
                actualBoxHeightPixels = getBoxHeight(lbid);
                //logger('NOT responsive (Width x Height): ' + actualBoxWidthPixels + ' x ' + actualBoxHeightPixels);
            }

            return { width: actualBoxWidthPixels, height: actualBoxHeightPixels };
        }
        catch (e) {
            logError(e, "getActualBoxWidthAndHeight");
        }

        return { width: 500, height: 500 };
    }

    var getBoxWidth = function (lbid) {
        try {
            var pref = getPagePref(lbid);
            if (EFFECTS.hasOwnProperty(lbid) && EFFECTS[lbid].hasOwnProperty(pref + 'width') && EFFECTS[lbid][pref + 'width'] > 0) {
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'width']);
            } else {
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid].width);
            }
        }
        catch (e) {
            logError(e, "getBoxWidth");
        }

        return 600;
    }

    var getBoxHeight = function (lbid) {
        try {
            var pref = getPagePref(lbid);
            if (EFFECTS.hasOwnProperty(lbid) && EFFECTS[lbid].hasOwnProperty(pref + 'height') && EFFECTS[lbid][pref + 'height'] > 0) {
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'height']);
            } else {
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid].height);
            }
        }
        catch (e) {
            logError(e, "getBoxHeight");
        }

        return 400;
    }

    var getResponsiveBoxWidth = function (lbid) {
        try {
            var widthWin = JQUERY_DIGIOH(window).width();
            var widthPct = getResponsiveBoxWidthPercent(lbid);
            var widthActual = Math.round(widthWin * widthPct / 100);

            if (DIGIOH_USE_RESPONSIVE) {
                var widthMax = getResponsiveBoxWidthMax(lbid);
                if (widthActual > widthMax) {
                    widthActual = widthMax;
                }

                var widthMin = getResponsiveBoxWidthMin(lbid);
                if (widthActual < widthMin) {
                    widthActual = widthMin;
                }
            }

            return widthActual;
        }
        catch (e) {
            logError(e, "getResponsiveBoxWidth");
        }

        return 50;
    }

    var getResponsiveBoxHeight = function (lbid) {
        try {
            if (!DIGIOH_USE_RESPONSIVE) {
                return getBoxHeight(lbid);
            }

            var heightWin = JQUERY_DIGIOH(window).height();
            var heightPct = getResponsiveBoxHeightPercent(lbid);
            var heightActual = Math.round(heightWin * heightPct / 100);

            if (DIGIOH_USE_RESPONSIVE) {
                var heightMax = getResponsiveBoxHeightMax(lbid);
                if (heightActual > heightMax) {
                    heightActual = heightMax;
                }

                var heightMin = getResponsiveBoxHeightMin(lbid);
                if (heightActual < heightMin) {
                    heightActual = heightMin;
                }
            }

            return heightActual;
        }
        catch (e) {
            logError(e, "getResponsiveBoxHeight");
        }

        return 50;
    }

    var getResponsiveBoxWidthPercent = function (lbid) {
        try {
            if (!DIGIOH_USE_RESPONSIVE)
                return 100;

            var pref = getPagePref(lbid);
            if (EFFECTS[lbid].hasOwnProperty(pref + 'responsive'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'responsive'].box_width);
        }
        catch (e) {
            logError(e, "getResponsiveBoxWidthPercent");
        }

        return 100;
    }

    var getResponsiveBoxHeightPercent = function (lbid) {
        try {
            if (!DIGIOH_USE_RESPONSIVE)
                return 100;

            var pref = getPagePref(lbid);
            if (EFFECTS[lbid].hasOwnProperty(pref + 'responsive'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'responsive'].box_height);
        }
        catch (e) {
            logError(e, "getResponsiveBoxHeightPercent");
        }

        return 35;
    }

    var getResponsiveBoxWidthMax = function (lbid) {
        try {
            var pref = getPagePref(lbid);

            if (EFFECTS[lbid].hasOwnProperty(pref + 'responsive'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'responsive'].width_max);
            else if (EFFECTS[lbid].hasOwnProperty(pref + 'width'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'width']);
            else
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid].width);
        }
        catch (e) {
            logError(e, "getResponsiveBoxWidthMax");
        }

        return 1000;
    }

    var getResponsiveBoxHeightMax = function (lbid) {
        try {
            var pref = getPagePref(lbid);

            if (EFFECTS[lbid].hasOwnProperty(pref + 'responsive'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'responsive'].height_max);
            else if (EFFECTS[lbid].hasOwnProperty(pref + 'height'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'height']);
            else
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid].height);
        }
        catch (e) {
            logError(e, "getResponsiveBoxHeightMax");
        }

        return 600;
    }

    var getResponsiveBoxWidthMin = function (lbid) {
        try {
            var pref = getPagePref(lbid);

            if (EFFECTS[lbid].hasOwnProperty(pref + 'responsive'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'responsive'].width_min);
            else if (EFFECTS[lbid].hasOwnProperty(pref + 'width'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'width']);
            else
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid].width);
        }
        catch (e) {
            logError(e, "getResponsiveBoxWidthMin");
        }

        return 50;
    }

    var getResponsiveBoxHeightMin = function (lbid) {
        try {
            var pref = getPagePref(lbid);

            if (EFFECTS[lbid].hasOwnProperty(pref + 'responsive'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'responsive'].height_min);
            else if (EFFECTS[lbid].hasOwnProperty(pref + 'height'))
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid][pref + 'height']);
            else
                return getIntFromStringOrIntOrDecimal(EFFECTS[lbid].height);
        }
        catch (e) {
            logError(e, "getResponsiveBoxHeightMin");
        }

        return 50;
    }

    var closeAllOpenLightboxes = function () {
        if (LIGHTBOX_GUID && LIGHTBOX_GUID != '') {
            if (EFFECTS[LIGHTBOX_GUID]['widget_type'] == 'fancybox') {
                JQUERY_DIGIOH.fb_digioh.close();
                //var dom_id = getLightboxDomId(LIGHTBOX_GUID);
                //if (dom_id) {
                //    JQUERY_DIGIOH('#' + dom_id).hide();
                //}
                //registerLightboxClose(LIGHTBOX_GUID);
            } else {
                closeSidebar(LIGHTBOX_GUID);
            }
        }
    }

    var sendMessageToIframe = function (obj, lid) {
        try {
            if (document.getElementById('lightbox-iframe-' + lid) !== null) {
                document.getElementById('lightbox-iframe-' + lid).contentWindow.receiveMessageFromParent(obj);
                //logger('sendMessageToIframe (success): ' + lid);
                return true;
            } else {
                //logger('sendMessageToIframe (null): ' + lid);
                return false;
            }
        } catch (e) {
            logError(e, "sendMessageToIframe");
            return false;
        }
    }

    var receiveMessageFromIframe = function (obj, lid) {
        if (obj && obj.hasOwnProperty('message')) {
            logger(obj.message);
        }

        if (lid && obj && obj.hasOwnProperty('sender') && obj.sender === 'digioh') {
            //logger('receiveMessageFromIframe (success): ' + lid);
            processPostMessage(obj, lid);
        } else if (lid && obj) {
            //run custom javascript?
        } else {
            logger('receiveMessageFromIframe ERROR - not all parameters were set correctly');
        }
    }

    var relayMessageToIframe = function (obj, lid_source, lid_target) {
        if (obj && lid_source && lid_target && lid_source != lid_target && document.getElementById('lightbox-iframe-' + lid_source) !== null && document.getElementById('lightbox-iframe-' + lid_target) !== null && CHILD_READY.hasOwnProperty(lid_target) && CHILD_READY[lid_target] == true) {
            document.getElementById('lightbox-iframe-' + lid_target).contentWindow.receiveMessageFromIframe(obj, lid_source, lid_target);
        } else {
            logger('relayMessageToIframe ERROR - child not ready: ' + lid_target);
        }
    }

    DIGIOH_API.GET_ANALYTICS = function () {
        return DIGIOH_LIGHTBOX_ANALYTICS;
    }

    DIGIOH_API.GET_KEEN_SCHEMA = function () {
        return KEEN_SCHEMA;
    }

    DIGIOH_API.GET_KEEN_CLIENT = function () {
        return KEEN_CLIENT;
    }

    DIGIOH_API.GET_EFFECTS = function (lbid) {
        if (EFFECTS.hasOwnProperty(lbid)) {
            return EFFECTS[lbid];
        } else {
            return null;
        }
    }

    DIGIOH_API.GET_SETTINGS = function (lbid) {
        if (typeof DIGIOH_API.DIGIOH_LIGHTBOX_SETTINGS === 'object' && DIGIOH_API.DIGIOH_LIGHTBOX_SETTINGS !== null && DIGIOH_API.DIGIOH_LIGHTBOX_SETTINGS.hasOwnProperty(lbid)) {
            return DIGIOH_API.DIGIOH_LIGHTBOX_SETTINGS[lbid];
        } else {
            return null;
        }
    }

    DIGIOH_API.LIGHTBOX = {};
    DIGIOH_API.LIGHTBOX.loadLightbox = loadLightbox;
    DIGIOH_API.LIGHTBOX.closeSidebar = closeSidebar;
    DIGIOH_API.LIGHTBOX.getLightboxDomId = getLightboxDomId;

    DIGIOH_API.LIGHTBOX.getActualBoxWidthAndHeight = getActualBoxWidthAndHeight;
    DIGIOH_API.LIGHTBOX.getBoxWidth = getBoxWidth;
    DIGIOH_API.LIGHTBOX.getBoxHeight = getBoxHeight;
    DIGIOH_API.LIGHTBOX.getResponsiveBoxWidth = getResponsiveBoxWidth;
    DIGIOH_API.LIGHTBOX.getResponsiveBoxHeight = getResponsiveBoxHeight;
    DIGIOH_API.LIGHTBOX.getResponsiveBoxWidthPercent = getResponsiveBoxWidthPercent;
    DIGIOH_API.LIGHTBOX.getResponsiveBoxHeightPercent = getResponsiveBoxHeightPercent;
    DIGIOH_API.LIGHTBOX.getResponsiveBoxWidthMax = getResponsiveBoxWidthMax;
    DIGIOH_API.LIGHTBOX.getResponsiveBoxHeightMax = getResponsiveBoxHeightMax;
    DIGIOH_API.LIGHTBOX.getResponsiveBoxWidthMin = getResponsiveBoxWidthMin;
    DIGIOH_API.LIGHTBOX.getResponsiveBoxHeightMin = getResponsiveBoxHeightMin;

    DIGIOH_API.LIGHTBOX.tryLoadGeoIp = tryLoadGeoIp;

    DIGIOH_API.LIGHTBOX.sendMessageToIframe = sendMessageToIframe;
    DIGIOH_API.LIGHTBOX.receiveMessageFromIframe = receiveMessageFromIframe;
    DIGIOH_API.LIGHTBOX.relayMessageToIframe = relayMessageToIframe;

    DIGIOH_API.LIGHTBOX.setLightboxID = setLightboxID;
    DIGIOH_API.LIGHTBOX.hasOpenLightboxes = hasOpenLightboxes;
    DIGIOH_API.LIGHTBOX.closeAllOpenLightboxes = closeAllOpenLightboxes;

    DIGIOH_API.LIGHTBOX.initExistsSelectors = initExistsSelectors;
    DIGIOH_API.LIGHTBOX.addExistsSelector = addExistsSelector;
    DIGIOH_API.LIGHTBOX.getExistsSelectors = getExistsSelectors;

    DIGIOH_API.LIGHTBOX.checkConditions = checkConditions;
    DIGIOH_API.LIGHTBOX.checkConditionsClick = checkConditionsClick;
    DIGIOH_API.LIGHTBOX.checkConditionsHover = checkConditionsHover;
    DIGIOH_API.LIGHTBOX.checkConditionsScroll = checkConditionsScroll;
    DIGIOH_API.LIGHTBOX.checkConditionsExit = checkConditionsExit;
    DIGIOH_API.LIGHTBOX.checkConditionsLoad = checkConditionsLoad;
    DIGIOH_API.LIGHTBOX.checkConditionsTime = checkConditionsTime;

    DIGIOH_API.LIGHTBOX.isInlineLightbox = isInlineLightbox;

    DIGIOH_API.LIGHTBOX.INTEGRATION_MAP = {};

    DIGIOH_API.LIGHTBOX.JQUERY_DIGIOH = JQUERY_DIGIOH;
    DIGIOH_API.LIGHTBOX.DIGIOH_KEEN_WRITE_KEY = DIGIOH_KEEN_WRITE_KEY;
    DIGIOH_API.LIGHTBOX.KEEN_CLIENT = KEEN_CLIENT;
    DIGIOH_API.LIGHTBOX.LZString = LZString;
    DIGIOH_API.LIGHTBOX.DIGIOH_BUGSNAG = DIGIOH_BUGSNAG;

    window.DIGIOH_API = DIGIOH_API;

    hideEmbedDivContainer();
    appendFbDigiohCss();
    afterDomLoaded();

}(DIGIOH_WIN_PARENT, DIGIOH_DOC_PARENT, DIGIOH_WIN_CHILD));
