var killErrors=function(value){return true};window.onerror=null;window.onerror=killErrors;var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F)}return out}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c2==-1);if(c2==-1)break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return out;c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1)break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return out;c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1)break;out+=String.fromCharCode(((c3&0x03)<<6)|c4)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i)}else if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break}}return out}
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('Q.3w=m(){o(Q.E=="1k"){f.D=$(Q).p()-$(".f").2D().17-15;f.O=$(Q).k()-$(".f").2D().1h-15;f.J=f.O;o(28==1){f.J-=20}$(".f").p(f.D);$(".f").k(f.O);$("#1y").p(f.D);$("#1y").k(f.O);$("#2S").p(f.D);$("#2S").k(f.J)}};B f={\'2o\':m(){o(e.F>0){e.1C(e.C+1,e.F)}},\'2r\':m(){U e.F>0?e.1r(e.C+1,e.F):\'\'},\'2H\':m(){o(e.F+1!=e.25){e.1C(e.C+1,e.F+2)}},\'2n\':m(){U e.F+1<=e.25?e.1r(e.C+1,e.F+2):\'\'},\'1r\':m(s,n){U 4j.1p(\'{1i}\',s).1p(\'{1i}\',s).1p(\'{2Q}\',n).1p(\'{2Q}\',n)},\'1C\':m(s,n){24.1a=e.1r(s,n)},\'2f\':m(){e.22=\'\';21(i=0;i<e.H.X.G;i++){X=e.H.X[i];K=e.H.K[i];1Z="";1Y=\'T\';1X=\'W\';18=K.R(\'#\');21(j=0;j<18.G;j++){x=18[j].R(\'$\');E=\'\';K=\'\';1d=\'\';1s=\'\';o(x.G>1){E=x[0];K=x[1];o(x.G>2){1s=x[2]}}1u{E="第"+(j+1)+"集";K=x[0]}o(e.C==i&&e.F==j){1Y=\'1W\';1X=\'1V\';1d="1d";e.25=18.G;e.4h=K;e.2q=E;o(1s!=\'\'){e.1F=1s}o(j<18.G-1){x=18[j+1].R(\'$\');o(x.G>1){1T=x[0];1R=x[1]}1u{1T="第"+(j+1)+"集";1R=x[0]}e.4g=1R;e.4e=1T}}1Z+=\'<1j><a 1E="\'+1d+\'" 1a="1m:1n(0)" 1o="f.1C(\'+(i+1)+\',\'+(j+1)+\');U 1f;" >\'+E+\'</a></1j>\'}e.22+=\'<L v="1Q\'+i+\'" 1E="\'+1Y+\'"><T 1o="f.2F(\'+i+\',\'+(e.H.X.G-1)+\')">\'+47[X]+\'</T>\'+\'<1t v="1g\'+i+\'" I="19:\'+1X+\'">\'+1Z+\'</1t></L>\'}},\'2U\':m(){$(\'#1e\').2e()},\'2F\':m(a,n){B b=$(\'#1g\'+a).2g(\'19\');21(B i=0;i<=n;i++){$(\'#1Q\'+i).2j(\'2k\',\'T\');$(\'#1g\'+i).1b()}o(b==\'W\'){$(\'#1g\'+a).1N();$(\'#1Q\'+a).2j(\'2k\',\'1W\')}1u{$(\'#1g\'+a).1b()}},\'40\':m(){o(28==0){$("#1M").1b()}o(3Y==0){$("#1e").1b()}3X(m(){f.2y()},e.2A*3W);$("#2C").1J(0).1H=\'\'+\'正在播放：\'+e.2q+\'\';$("#1e").1J(0).1H=\'<L 1E="A" v="A" I="k:\'+e.J+\'1U;">\'+e.22+\'</L>\';$("#1G").1J(0).1H=\'<2I v="1y" 1i="\'+e.2K+\'" 3S="0" 3P="2P" p="u%" k="\'+e.J+\'" I="2R:3N;z-3H:3G;"></2I>\'+e.3F+\'\';1K.1L(\'<1B\'+\'1z 1i="\'+\'//3E.3C.3A/3z/1h.2l\'+\'"></1B\'+\'1z>\')},\'3y\':m(){B w=e.D-u;B h=e.J-u;B l=(e.D-w)/2;B t=(e.J-h)/2+20;$(".2p").2g({\'p\':w,\'k\':h,\'17\':l,\'1h\':t});$(".2p").2e()},\'2y\':m(){$(\'#1y\').1b()},\'3x\':m(){e.2E=1f;$(\'#1S\').3v().1N();$(\'#1S\').1N()},\'2u\':m(){B a=3u.R(\',\');1K.1L(\'<I>.f{2w: #\'+a[0]+\';16-1x:3t;r:#\'+a[1]+\';1v:1l;Z:1l;2R:3p;V:1A;p:\'+(e.D==0?\'u%\':e.D+\'1U\')+\';k:\'+e.O+\'1U;}.f a{r:#\'+a[2]+\';Y-23:W}a:3o{Y-23: 32;}.f a:30{Y-23: W;}.f 1c{p:u%;k:u%;}.f 1t,1j,T{ 1v:1l; Z:1l; 2Z-I:W}.f #1M{Y-26:2Y;k:3B; 1D-k:29;16-1x:2T;}.f #2a{p:2W;}.f #27{p:2X;} .f #2a{Y-26:17;Z-17:1w}.f #27{Y-26:2N;Z-2N:1w}.f #1G{p:u%;k:u%;V:1A;}.f #1e{k:u%;V-y:2L;}.f #A{p:31;V:2L;N-33-r:#\'+a[7]+\';N-34-r:#\'+a[8]+\';N-35-r: #\'+a[9]+\';N-36-r:#\'+a[10]+\';N-37-r: #\'+a[11]+\';N-38-r:#\'+a[12]+\';N-39-r:#\'+a[13]+\';N-3a-r:#\'+a[14]+\';}.f #A 1t{ 3b:3c; 1v:1w 1l}.f #A 1j{ k:29; 1D-k:29;V: 1A; Y-V: 3d; 3e-3f: 3g;}.f #A 1j a{Z-17:3h; 19:1V; 16-1x:2T}.f #A T{ 3i:3j;16-1x:3k;16-3l: "宋体";16-3m:3n;k:2J;1D-k:2J;2w:#\'+a[3]+\';Z-17:1w; 1v-3q:3r}.f #A .T{r:#\'+a[4]+\'}.f #A .1W{r:#\'+a[5]+\'}.f #A .3s{19:1V}.f #A .1d{r:#\'+a[6]+\'} </I><L 1E="f"><1c 2z="0" 2v="0" 2t="0"><P><q 2m="2"><1c 2z="0" 2v="0" 2t="0" v="1M"><P><q p="u" v="2a"><a 1P="1O" 1a="1m:1n(0)" 1o="f.2o();U 1f;">上一集</a> <a 1P="1O" 1a="1m:1n(0)" 1o="f.2H();U 1f;">下一集</a></q><q v="2V"><L v="2C" I="k:2i;1D-k:2i;V:1A"></L></q><q p="u" v="27"><a 1P="1O" 1a="1m:1n(0)" 3D="f.2U();U 1f;">开/关列表</a></q></P></1c></q></P><P I="19:W"><q 2m="2" v="1S" I="19:W"></q></P><P><q v="1G" 2h="1h">&2d;</q><q v="1e" 2h="1h">&2d;</q></P></1c></L>\');1K.1L(\'<1B\'+\'1z 1i="\'+e.2c+e.1F+\'.2l"></1B\'+\'1z>\')},\'2b\':m(){},\'3I\':m(){e.2E=3J;e.S=24.1a;e.3K=24.3L;e.H={\'X\':3M.R(\'$$$\'),\'1I\':3O.R(\'$$$\'),\'2O\':3Q.R(\'$$$\'),\'K\':3R.R(\'$$$\')};B c=3T.3U.3V();e.D=Q.E==\'1k\'?2B:(2x==0?\'u%\':2x);e.O=Q.E==\'1k\'?2s:3Z;o(c.M("41")>0||c.M("42")>0||c.M("43")>0||c.M("44")>0||c.M("45")>0||c.M("46")>0){e.D=Q.E==\'1k\'?2B:(2G==0?\'u%\':2G);e.O=Q.E==\'1k\'?2s:48}e.J=e.O;o(28==1){e.J-=20}o(e.S.M(\'#\')>-1){e.S=e.S.49(0,e.S.M(\'#\'))}e.2K=4a;e.4b=4c;e.2A=4d;e.2M=4f;B a=e.S.1q(/\\d+.*(4i)/g)[0].1q(/\\d+/g);o(a.G<3){a=e.S.1q(/\\d+.*/g)[0].1q(/\\d+/g)}B b=a.G;e.4k=a[(b-3)]*1;e.C=a[(b-2)]*1-1;e.F=a[(b-1)]*1-1;e.1F=e.H.X[e.C];e.4l=e.H.1I[e.C]==\'2P\'?\'\':4m[e.H.1I[e.C]];e.4n=e.H.2O[e.C];e.2f();e.4o=e.2n();e.4p=e.2r();e.2c=4q+\'4r/\';o(e.2M=="4s"){f.2b()}1u{f.2u()}}};',62,277,'||||||||||||||this|MacPlayer|||||height||function||if|width|td|color|||100|id||urlinfo|||rightlist|var|Src|Width|name|Num|length|Data|style|Height|url|div|indexOf|scrollbar|HeightAll|tr|window|split|Url|h2|return|overflow|none|from|text|padding|||||||font|left|urlarr|display|href|hide|table|list_on|playright|false|sub|top|src|li|macopen1|0px|javascript|void|onclick|replace|match|GetUrl|from1|ul|else|margin|5px|size|buffer|ipt|hidden|scr|Go|line|class|PlayFrom|playleft|innerHTML|server|get|document|write|playtop|show|_self|target|main|url1|install|name1|px|block|h2_on|sub_on|sid_on|listr||for|RightList|decoration|location|PlayUrlLen|align|topright|mac_showtop|21px|topleft|Down|Path|nbsp|toggle|GetList|css|valign|26px|attr|className|js|colspan|GetNextUrl|GoPreUrl|MacBuffer|PlayName|GetPreUrl|mac_heightpop|cellspacing|Play|cellpadding|background|mac_width|AdsEnd|border|Second|mac_widthpop|topdes|offset|Status|Tabs|mac_widthmob|GoNextUrl|iframe|25px|Prestrain|auto|Flag|right|note|no|num|position|Player|12px|ShowList|topcc|150px|100px|center|list|active|120px|underline|face|arrow|track|highlight|shadow|3dlight|darkshadow|base|clear|both|ellipsis|white|space|nowrap|15px|cursor|pointer|13px|family|weight|normal|hover|relative|bottom|1px|ul_on|14px|mac_colors|parent|onresize|Install|ShowBuffer|html|com|20px|maccms|onClick|union|Html|99998|index|Init|true|Par|search|mac_from|absolute|mac_server|scrolling|mac_note|mac_url|frameBorder|navigator|userAgent|toLowerCase|1000|setTimeout|mac_showlist|mac_height|Show|android|mobile|ipod|ios|iphone|ipad|mac_show|mac_heightmob|substr|mac_prestrain|Buffer|mac_buffer|mac_second|PalyName1|mac_flag|PlayUrl1|PlayUrl|htm|mac_link|Id|PlayServer|mac_show_server|PlayNote|NextUrl|PreUrl|SitePath|player|down'.split('|'),0,{}));MacPlayer.Init();