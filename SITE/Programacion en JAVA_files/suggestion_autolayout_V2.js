(function(){var a=function(b,d,h,k){if(4!=h.length)throw Error("The anchors should be an array of length 4.");b={type:"element",spec:{element:b}};d&&(b.alignments=d);d=["top","right","bottom","left"];for(var e=0;e<d.length;++e)h[e]&&(b[d[e]]=h[e]);void 0!==k&&(b.z_index=k);return b};var c={elements:{canvas:{type:"shape",node_id:"adContent",background_color_ids:"back1MCColor"},product1MCImage:{type:"product",node_id:"product-image"},logoMCImage:{type:"logo",node_id:"logo-image"},text1TFText:{type:"text",component_type:"headline",font_level:1,node_id:"headline",font_color_id:"text1TFTextColor",background_color_ids:"back1MCColor"},text2TFText:{type:"text",component_type:"description",font_level:2,node_id:"description",font_color_id:"text2TFTextColor",background_color_ids:"back1MCColor"},
clickTFText:{type:"button",node_id:"button",font_color_id:"clickTFTextColor",background_color_ids:"clickTFBackColor",weight:1/24}},variations:{tower1:{calibrations:["AspectRatioGE 1 0"],product1MCImage:a("product1MCImage","top",["0","0","50%","0"]),textBox:{type:"vertical-list",spec:{elements:["text1TFText","text2TFText"],margin:"auto",alignments:"top bottom"},alignments:"top bottom",top:"product1MCImage",bottom:"logoAndButton"},logoAndButton:{type:"auto-list",spec:{elements:["logoMCImage","clickTFText"],
margin:"auto",alignments:"bottom"},alignments:"bottom",top:"50%"}},banner1:{calibrations:["AspectRatioLE 0.5 0"],product1MCImage:a("product1MCImage","left",["0","50%","0","0"]),textBox:{type:"vertical-list",spec:{elements:["text1TFText","text2TFText"],margin:"auto"},alignments:"left",left:"product1MCImage",right:"logoAndButton"},logoAndButton:{type:"auto-list",spec:{elements:["logoMCImage","clickTFText"],margin:"auto",alignments:"right"},alignments:"right",left:"50%"}},banner2:{product1MCImage:a("product1MCImage",
"left",["0","50%","0","0"]),textBox:{type:"vertical-list",spec:{elements:["text1TFText","text2TFText"],margin:"auto"},left:"product1MCImage",bottom:"logoAndButton"},logoAndButton:{type:"horizontal-list",spec:{elements:["logoMCImage","clickTFText"],margin:"auto",alignments:"bottom"},alignments:"bottom",left:"product1MCImage"}},square1:{calibrations:["AspectRatioLE 0.8 0","AspectRatioGE 2.1 0"],product1MCImage:a("product1MCImage","left",["0","50%","0","0"]),textBox:{type:"vertical-list",spec:{elements:["text1TFText",
"text2TFText"],margin:"auto"},left:"product1MCImage",bottom:"logoAndButton"},logoAndButton:{type:"vertical-list",spec:{elements:["logoMCImage","clickTFText"],margin:"auto",alignments:"bottom"},alignments:"bottom",left:"product1MCImage"}},square2:{calibrations:["AspectRatioLE 0.8 0","AspectRatioGE 2.1 0"],product1MCImage:a("product1MCImage","top",["0","0","50%","0"]),text1TFText:a("text1TFText","top",["product1MCImage","","",""]),text2TFText:a("text2TFText","top",["text1TFText","logoAndButton","",
""]),logoAndButton:{type:"vertical-list",spec:{elements:["logoMCImage","clickTFText"],margin:"auto",alignments:"right bottom"},alignments:"right bottom",left:"50%",top:"text1TFText"}},smallSquare:{calibrations:["AspectRatioGE 2.1 0"],product1MCImage:a("product1MCImage","top",["0","0","40%","0"]),textBox1:a("text1TFText","top",["product1MCImage","","logoAndButton",""]),textBox2:a("text2TFText","",["product1MCImage","","logoAndButton",""],1),logoAndButton:{type:"vertical-list",spec:{elements:["logoMCImage",
"clickTFText"],margin:"auto"},top:"80%"}},smallBanner:{calibrations:["AspectRatioLE 0.5 0"],product1MCImage:a("product1MCImage","left",["0","50%","0","0"]),textBox1:a("text1TFText","",["","logoAndButton","","product1MCImage"]),textBox2:a("text2TFText","",["2%","logoAndButton","2%","product1MCImage"],1),logoAndButton:{type:"auto-list",spec:{elements:["logoMCImage","clickTFText"],margin:"auto",alignments:"right"},alignments:"right",left:"50%"}}}},f=function(b){window.renderAd(b,c)},g=["onAdData"],l=
this;g[0]in l||!l.execScript||l.execScript("var "+g[0]);for(var m;g.length&&(m=g.shift());)g.length||void 0===f?l=l[m]?l[m]:l[m]={}:l[m]=f;})()
