var Mob = ((sessionStorage && sessionStorage.mobile) != undefined) || (navigator.userAgent.match(/iPad|iPhone|iPod|Android|Blackberry|Nokia|Mobi/i) != null);

function F1(ShowLoader) {
    var UA = navigator.userAgent;
    var IE = -1;
    if (UA.indexOf("MSIE") > -1) {
        var RE = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (RE.exec(UA) != null) {
            IE = parseFloat(RegExp.$1);
        }
    }
    if (IE == -1 && UA.indexOf("Trident") > -1) {
        IE = 10;
    }
    var HasTouch = (navigator.userAgent.match(/iPad|iPhone|iPod|Android/i) != null || screen.width <= 480) && ('ontouchstart' in document.documentElement);
    var MouseDown, MouseUp, MouseMove, MouseOver = "",
        MouseOut = "";
    if (HasTouch) {
        MouseDown = "ontouchstart";
        MouseUp = "ontouchend";
        MouseMove = "ontouchmove";
        MouseOver = "if(this.onmouseover){this.onmouseover();}";
        MouseOut = "if(this.onmouseout){this.onmouseout();}";
    } else {
        MouseDown = "onmousedown";
        MouseUp = "onmouseup";
        MouseMove = "onmousemove";
    }
    var MF = "hat_ani_clean/";
    var B = "";
    if (document.createElement("audio").canPlayType) {
        B += "<!DOC" + "TYPE html>";
    } else {
        B += "<!DOC" + "TYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
    }
    if (IE > -1 && IE < 9) {
        B += "<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"VML\" >";
    } else {
        B += "<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:svg=\"http://www.w3.org/2000/svg\" >";
    }
    B += "<head>";
    B += "<title>hatani</title>";
    B += "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />";
    if (IE > -1 && IE < 9) {
        B += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE7\" />";
    }
    B += "<style type=\"text/css\">";
    B += "div,input,textarea,video,object{display:none;position:absolute;padding:0;margin:0;}table,svg,img,iframe{border-collapse:collapse;table-layout:fixed;display:none;position:absolute;background-color:transparent;padding:0;margin:0;border-style:none;-webkit-user-select: none;-webkit-touch-callout: none;}td,tr,form{padding:0;margin:0;border-style:none;}img,image,v:image,svg:image{background-repeat:no-repeat;}html{-webkit-backface-visibility: hidden;}.Background{position:relative;display:block;}table{pointer-events:none;}body{margin:0;overflow:hidden;background-color:#FFFFFF;}";
    if (ShowLoader) {
        B += ".LoaderText{font-family:Arial;color:#808080;text-align:center;font-size:12px;vertical-align:top;padding:0;width:120px;height:26px;}.LoaderBorder{width:120px;height:10px;background-color:#A9A9A9;border:2px solid #808080;padding:0;font-size:1px;}.LoaderBar{position:relative;background-color:#A0D232;font-size:1px;width:0%;height:100%;margin:0;}.Loader{width:120px;}";
    }
    B += ".V1{cursor:default;font-size:10000px;overflow:hidden;}";
    if (IE > -1 && IE < 9) {
        B += "v\\:*{behavior:url(#default#VML);position:absolute;display:none;}";
    }
    B += "</style>";
    if (IE > -1 && IE < 9) {
        B += "<xml:namespace ns=\"urn:schemas-microsoft-com:vml\" V2=\"v\" />";
    }
    B += "<script type=\"text/javascript\">";
    B += "var V3,V4;";
    var V5 = 0;
    B += "var MF=\"" + MF + "\";";
    B += "var V6=1;";
    B += "var V7;";
    B += "var V8=new Array(21);";
    B += "var V9=new Array(\"Scene1\");";
    B += "var C0,C0L0S0;";
    B += "var V10=1;";
    B += "var V11=new Date();";
    B += "var V12=(Math.PI*2)/360,V13=0;";
    B += "var V14,V15=-1,V16=-1,V17=-1,V18=0,V19=0,V20=1,V21=21;";
    B += "var V22=\"none\",V23=\"block\",V24=\"TABLE\",V25=\"px\",V26=\"\";";
    B += "var IE=" + IE + ",V27=0;";
    B += "var V28=true,V29=false;";
    B += "function F2(e){e=F3(e);if(e!=null){if(e.stopPropagation){e.stopPropagation();}if(e.preventDefault){e.preventDefault();}e.cancelBubble = true;e.returnValue=false;}return false;}";
    B += "var V30=null;function F4(e){if(window.event){e=window.event;}if(e.touches){if(e.touches.length==0){return V30;}e=e.touches[0];}var Mouse=new Object();Mouse.X=e.clientX;Mouse.Y=e.clientY;";
    B += "var Scale=Math.min(V31/600,V32/400);";
    B += "Mouse.X=(Mouse.X-(V31-(Scale*600))/2)/Scale;";
    B += "Mouse.Y=(Mouse.Y-(V32-(Scale*400))/2)/Scale;";
    B += "V30=Mouse;return Mouse;}";
    B += "function F3(e){if(window.event){return window.event;}else{return e;}}";
    B += "function F5(Angle){return 90*Math.round((Angle-45)/90);}";
    if (IE > -1 && IE < 9) {
        B += "function F6(Style,NewFilter){";
        B += "var Filter=Style.indexOf(\"filter:\");";
        B += "if(Filter==-1){";
        B += "Style+=\"filter: progid:DXImageTransform.Microsoft.\"+NewFilter+\";\";";
        B += "}else{";
        B += "Style=Style.substring(0,Filter+7)+\" progid:DXImageTransform.Microsoft.\"+NewFilter+Style.substring(Filter+7,Style.length);";
        B += "}";
        B += "var MSFilter=Style.indexOf(\"-ms-filter:'\");";
        B += "if(MSFilter==-1){";
        B += "Style+=\"-ms-filter:'progid:DXImageTransform.Microsoft.\"+NewFilter+\"';\";";
        B += "}else{";
        B += "Style=Style.substring(0,MSFilter+12)+\"progid:DXImageTransform.Microsoft.\"+NewFilter+\", \"+Style.substring(MSFilter+12,Style.length);";
        B += "}";
        B += "return Style;";
        B += "}";
    }
    B += "var V31=0,V32=0;";
    B += "function F7() {if (parent.document.documentElement.clientWidth > 0){return parent.document.documentElement.clientWidth;}else{return F8(parent.window.innerWidth, parent.document.body.clientWidth);}}";
    B += "function F9() {if (parent.document.documentElement.clientHeight > 0){return parent.document.documentElement.clientHeight;}else{return F8(parent.window.innerHeight, parent.document.body.clientHeight);}}";
    B += "function F8(Value1, Value2) {";
    B += "var Value=0;";
    B += "if (!isNaN(Value1) && Value1 > Value) {Value= Value1;}if (!isNaN(Value2) && Value2 > Value) {Value= Value2;}";
    B += "return Value;";
    B += "}";
    B += "function F10() {V31=F7();V32=F9();if(!V29){V29=V31!=V16||V32!=V17;}V16=V31;V17=V32;}";
    B += "function F11(Id) {return document.getElementById(Id);}";
    B += "function F12(){";
    B += "C0L0S0.src=MF+\"619px-Top-hat.png\";";
    B += "}";
    B += "function F13(){";
    B += "V3=F11(\"L\");V33=F11(\"LB\");";
    B += "C0=F11(\"C0\");V7=C0;C0L0S0=F11(\"C0L0S0\");";
    B += "V16=-1;V17=-1;F10();";
    if (ShowLoader) {
        B += "V14=window.setTimeout(\"F14();\",100);";
    } else {
        B += "F12();";
        B += "V11=new Date();";
        B += "V14=window.setTimeout(\"F15();\",5);";
    }
    B += "}";
    B += "function F16(Type,Div,X,Y,Width,Height,Opacity,Angle,FontSize,BorderWidth){";
    B += "if(Opacity==0){Div.style.display=V22;return;}";
    B += "V26=\"\";";
    B += "if(FontSize<0){FontSize*=-Math.min(Width/200,Height/50);}";
    B += "V10=Math.min(V31/600,V32/400);";
    B += "X*=V10;Y*=V10;";
    B += "FontSize*=V10;BorderWidth*=V10;Width*=V10;Height*=V10;";
    B += "if(FontSize>0){V26+=\"font-size:\"+FontSize+\"px;\";}";
    B += "if(BorderWidth>0){V26+=\"border-width:\"+Math.round(BorderWidth)+\"px;\";Div.strokeWeight=BorderWidth.toString();}";
    B += "if(Div.style.cssText!=V26){Div.style.cssText=V26;}";
    B += "var NewLeft=X-(Width/2),NewTop=Y-(Height/2);";
    if (IE > -1 && IE < 9) {
        B += "Div.style.left=Math.round(NewLeft)+V25;";
        B += "Div.style.top=Math.round(NewTop)+V25;";
        B += "Div.style.width=(Math.round(NewLeft+Width)-Math.round(NewLeft))+V25;";
        B += "Div.style.height=(Math.round(NewTop+Height)-Math.round(NewTop))+V25;";
    } else {
        B += "Div.style.left=NewLeft.toFixed(2)+V25;";
        B += "Div.style.top=NewTop.toFixed(2)+V25;";
        B += "Div.style.width=Width.toFixed(2)+V25;";
        B += "Div.style.height=Height.toFixed(2)+V25;";
    }
    if (IE == -1 || IE > 8) {
        B += "if(Div.nodeName.toUpperCase()==V24){Div.style.display=V24;}else{";
    }
    B += "Div.style.display=V23;";
    if (IE == -1 || IE > 8) {
        B += "}";
    }
    B += "}";
    B += "function F17(Type,Div){";
    B += "V26=\"display:none;\";";
    B += "if(Div.style.cssText!=V26){Div.style.cssText=V26;}";
    B += "}";
    B += "function F18(Index){";
    B += "}";
    B += "function F19(Div,Clip){";
    B += "if(Clip){";
    B += "var Scale=Math.min(V31/600,V32/400);";
    B += "Div.style.cssText=\"left:\"+((V31-(Scale*600))/2)+\"px;top:\"+((V32-(Scale*400))/2)+\"px;width:\"+(Scale*600)+\"px;height:\"+(Scale*400)+\"px;display:block;overflow:hidden;\";";
    B += "}else{";
    B += "Div.style.cssText=\"left:0px;top:0px;width:\"+V31+\"px;height:\"+V32+\"px;display:block;overflow:hidden;\";";
    B += "}";
    B += "}";
    if (ShowLoader) {
        B += "function F14(){";
        T = 0;
        V5++;
        B += "F20(MF+\"619px-Top-hat.png\",true,false);";
        B += "V14=window.setTimeout(\"F21();\",15);";
        B += "}";
        B += "function F20(Filename,Wait,BackgroundImage){";
        B += "var I=document.createElement(\"img\");if(IE>8){I.style.cssText=\"position:absolute;width:1px;height:1px;display:block;\";document.getElementsByTagName(\"body\")[0].appendChild(I);}";
        B += "if(Wait){I.onload=function(){V27++;};I.onerror=function(){V27++;};}";
        B += "I.src=Filename;";
        B += "}";
        B += "function F21(){";
        if (V5 > 0) {
            B += "var Percent=Math.round(Math.min(100,(V27*100)/" + V5 + "));";
            B += "V33.style.width=Percent+\"%\";";
            B += "V3.style.display=V23;";
            B += "V3.style.left=Math.round((V31-L.clientWidth)*0.50)+V25;";
            B += "V3.style.top=Math.round((V32-L.clientHeight)*0.50)+V25;";
        }
        B += "if(V27>=" + V5 + "){";
        B += "V3.style.display=V22;";
        B += "F12();";
        B += "V11=new Date();";
        B += "V14=window.setTimeout(\"F15();\",15);";
        B += "}else{";
        B += "V14=window.setTimeout(\"F21();\",15);";
        B += "}}";
    }
    B += "function F22(){";
    B += "F19(V7,true);";
    B += "V29=false;";
    B += "}";
    B += "function F15(){";
    B += "if(V29){F22();}";
    B += "var CTime=new Date();";
    B += "var TSpan=CTime.getTime()-V11.getTime();";
    B += "V11=CTime;";
    B += "var SpanGap=Math.min(41,Math.max(1,41-TSpan+V18));";
    B += "V18=SpanGap;";
    B += "var Span=(TSpan/1000)*12;";
    B += "if(Span>1){Span=1;};if(Span<-1){Span=-1;};";
    B += "if(V28){V13+=Span*V6;}";
    B += "if(((V6>0&&V13>V21)||(V6<0&&V13<0))){V13=0;}";
    B += "var Pos=0,NX,NY,NA;";
    B += "switch(V19){";
    B += "case 0:";
    B += "if(V13>=0&&V13<21){Pos=(V13-0)/21;NX=148.61+(Pos*243.26);NY=108.43+(Pos*112.32);F16(1,C0L0S0,NX,NY,282.23+(Pos*-24.97),218.85+(Pos*-19.36),100,0,0,0);}";
    B += "if(V13>=21){F16(1,C0L0S0,391.87,220.74,257.25,199.49,100,0,0,0);}";
    B += "break;";
    B += "}";
    B += "var IntTime=parseInt(V13);if(IntTime!=V15){V15=IntTime;";
    B += "}";
    B += "V14=window.setTimeout(\"F15();\",SpanGap);";
    B += "}";
    B += "function F23(X,Y,OX,OY,Angle){X-=OX;Y-=OY;var r=Angle*(Math.PI/180);var ct=Math.cos(r);var st=Math.sin(r);var x=ct*X-st*Y;var y=st*X+ct*Y;var Point=new Object();Point.X=x+OX;Point.Y=y+OY;return Point;}";
    B += "<" + "/script>";
    B += "</" + "head>";
    B += "<body onload=\"window.setTimeout('F13();', 100);\" onresize=\"F10();\" onorientationchange=\"F10();\" ondragstart=\"return false;\" style=\"cursor:default;\" " + MouseDown + "=\"var m=F4(event);\">";
    if (ShowLoader) {
        B += "<table id=\"L\" class=\"Loader\"><tr><td class=\"LoaderText\">Hippo Studios</td></tr><tr><td ><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAB3RJTUUH3QcTFR0pNcsU2wAAAAlwSFlzAAAOwgAADsIBFShKgAAAAARnQU1BAACxjwv8YQUAAAbmSURBVHja7Rd9UJNl/Pe+78Y+nMONEYmuMRHTFAlMk0TNk1IHplkXaXYl15lXV10flmZ3lpdeX2eXlUIll2iZqEliiBlOFEuYfASiIsIG2/gYY4w19r29Pc+rmxuwnP1R//S7e/c8v++v5/097wCGAIF/OjWl+pam9fECIQ9ImqbZlaWKeN4oNmL5gHS7LV9iqVkP1hOtjbUAI9oo2gl0RlYBuJxaIDCCiXFSObC5AmD5RXu0ahgRLOYLjUZDZW/FMTkdsLn3U6A5nOsCiclpIQqktvVQh5+JweFYARVljehpAMtA5nWipnm/+cSB6dgkH+Mmk+md4t0xdF5e3gq4bag5m0Ybu0/3GbqK7RgPpOXPFwgKurXbxXfIdl0PEhVzjJ/Z2Y2ipb3gdOhA27wUNJqWo+TBXUS/38rYOGfAlX3QClEsnjpQygDDwQW7kw8ClI9YIgEymGnjf5szejQbxNEmiGKbYJx8OQ1FRUVUSaGU1rVX1/sFK48vp+vPveGLOHWUyIs31ti+nmNWtE4I6X8YpecGLZpst8c7u+3SE3HBPL5gKky+tzCWIAgjcUNYVLidMPH5LLT3BAQNBgLSF6YCQbChpFwBj2dfBIdNAx3Gt2FywiF0QjatZRrRfvU7NY8HIcoYPB5/NG5QzP8RKVMMLo3ZAjYr8u2zy0na6/6kunx19EhpxMfTkDrnApMpSVE3jyDJZugcb8kGlrq58IVwdbhjfCa0Nn1ta22s4Q/lXWsggc0REUwNTh6cQff31oQI3Dtnh2tSystcnIHT0Z/3U4Ho+aFGuj07Ho24lf8doBanomcm3jvt+mOD1tazwXzWrQzUVs5g5o/b7f5IWSzNEsUyZ0qMHhPekCMpIY9JNO3dYTLUlQtFCxlaw/n734y5M55pp8167bhflhii+LSyeG6hsauSwfWdFMxblAJjZS+Az4eH2U6QJb0HA4MTQSSK/VAslmxgItBc3fdn/lag0csdUMYwfWYSs4okD8G7719PnS+YAkeOHIW+znffCkSgvrLHU178DCUUhqYydAgOhRlzayk8cySqU8OVMTjsbmb1uN0hdLfLCbxRk/DWhybr4UvhPFSdaWFWi6k3hG42GuBceQOzJ2sr1saGM5A8YxXEy14EcVx8aOjz8kGC2llQUJDMcjlNYXPsbt+PQk2Axqo68BE4RxpYxJ/g9mrA2l8BGVn5K//2IM3NOqCrPf3U+JgYPFgHAvSOS68BvlBQ/e4k2VEjjgJISn4FEpIekSpWtxWFc6BUKotIxWrNrhEL2DTlMbxyebE5YyTD25masdO5bt26EwyCrqtNeFQX7xajcf06nZ+f/1iwMAqVUl/ZP3Cs8C76xIEUWqdhRjwf/gcMqDxPdbZ/471U+yStU+/y2e32tZjuchj3NVQ9TOP7vO63DLrfdPl3RKaG6hO37XEIWMyqiy2Nz0/14xyuFF1HFvB6rOgVdKAhOIiuIyfMXHhav3LVS6llZWUhr9UtA0AZohsPcvu6q9Z2tZckG/SnCHPfH8iBDbxegK4ePqQvmAhRUX8/W0lqFDqRCWicbVb19FLz5HK5Y1gAyJmiR6/8zGU3xEjGztH/8dub07TX9o9o0OUiwOWLhZSZ4xmcy0+Ee9KKYNmyZdDW1galxU9Db9cBiOKOg2n3HYXMzExQqVTQVLcFVUk+uOf7qxPWr19vIIKcP1B96tlzp0r3wAB6aVNSUMOo8BnpdGhYL56OPhtu5kCxhCAcMxtN/MvoK0wblL0AokXpYBtsQS3RILsCEI3bu1smkz0XXLc0p70XEhMj6z1BDr+NvKj3/cZfhtF9Xiuin7yJ+xzocePhRjFWvF7n1uPf3/15d0dpZN4RRAs90HbVGNw+UDfVQ5emdUT5vm494O97t9MJQtFyuHKl5RB2TSDFRedPrizTXvshYud+GBggIXHaCoge0xaxTpc+Hoy6n2HB8lK1bOKSKaTJULPxnzjHMCnlVViQfRDSMmrAYsmAnk4LU4mQ8vto0HeY0Z+dlYxcVk4JSMY9Ch3NX8jr6upWEW2XCwYvKHP/9bkaxRFD8oOqPJLLi9PfrjKLLYD07Mazz7zOk06d35SWPPsDz+3a4AmkYDabTfgMpF2s2qS6XLuNjESRpLhw/6Iz9dKEWQ8hlDmFyMZ9Dec3VjfXfRDRZKUoHsxaXFErlc1a5P+LEGW3dh5UKZ99pEd3Mqzj6bM/drV2Tty4ZMmSPESyBfOxDZtVe1ilzM026H4NayMlfbuzRZewQaFQfIVtDIt48+bN4pycnGwOh5Pm8XiENputp76+vnLNmjXVNzKm4Rawbdu2mKVLl2bx+XxsYzS2gQ5cZW5uripSG/8a/AVKgiR9ZzfJ2AAAAABJRU5ErkJggg==\" style=\"width:32px;height:32px;position:relative;padding-bottom:2px;display:block;padding-left:44px\" /></td></tr><tr><td class=\"LoaderBorder\"><div id=\"LB\" class=\"LoaderBar\"></div></td></tr></table>";
    }
    B += "<div id=\"C0\">";
    B += "<span id=\"C0L0\" >";
    if (IE > -1 && IE < 9) {
        B += "<v:image id=\"C0L0S0\" class=\"V1\" ></v:image>";
    } else {
        B += "<img id=\"C0L0S0\" class=\"V1\" />";
    }
    B += "</span>";
    B += "</div>";
    B += "</" + "body></html>";
    document.body.innerHTML = "<iframe id=\"Movie\" style=\"width:100%;height:100%;\" scrolling=\"no\" frameborder=\"0\"></iframe>";
    var IFrame = document.body.firstChild;
    var Doc = IFrame.contentDocument || IFrame.contentWindow.document;
    Doc.open();
    Doc.write(B);
    Doc.close();
}
window.onresize = function() {
    if (Mob) {
        if (window == window.top) {
            window.scrollTo(0, 0);
        }
    } else {
        document.getElementById('Movie').style.cssText = 'width:' + (window.innerWidth || document.documentElement.clientWidth) + 'px;height:' + (window.innerHeight || document.documentElement.clientHeight) + 'px;';
    }
}