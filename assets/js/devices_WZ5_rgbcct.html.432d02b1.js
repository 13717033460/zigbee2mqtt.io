"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68430],{93839:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>q,data:()=>g});var u=t(86904);const c=(0,u.Lk)("h1",{id:"skydance-wz5-rgbcct",tabindex:"-1"},[(0,u.Lk)("a",{class:"header-anchor",href:"#skydance-wz5-rgbcct"},[(0,u.Lk)("span",null,"Skydance WZ5_rgbcct")])],-1),d=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("th"),(0,u.Lk)("th")])],-1),i=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Model"),(0,u.Lk)("td",null,"WZ5_rgbcct")],-1),l=(0,u.Lk)("td",null,"Vendor",-1),s=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Description"),(0,u.Lk)("td",null,"Zigbee & RF 5 in 1 LED controller (RGB+CCT mode)")],-1),a=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Exposes"),(0,u.Lk)("td",null,"light (state, brightness, color_hs, color_temp), white_brightness, linkquality")],-1),r=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Picture"),(0,u.Lk)("td",null,[(0,u.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WZ5_rgbcct.png",alt:"Skydance WZ5_rgbcct"})])],-1),n=(0,u.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_hs</code>, <code>color_temp</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>250</code> and <code>454</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepted: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h3 id="white-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#white-brightness-numeric"><span>White brightness (numeric)</span></a></h3><p>White brightness of this light. Value can be found in the published state on the <code>white_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;white_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>254</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),h={},q=(0,t(22652).A)(h,[["render",function(e,o){const t=(0,u.g2)("RouteLink");return(0,u.uX)(),(0,u.CE)("div",null,[c,(0,u.Lk)("table",null,[d,(0,u.Lk)("tbody",null,[i,(0,u.Lk)("tr",null,[l,(0,u.Lk)("td",null,[(0,u.bF)(t,{to:"/supported-devices/#v=Skydance"},{default:(0,u.k6)((()=>[(0,u.eW)("Skydance")])),_:1})])]),s,a,r])]),n])}]]),g=JSON.parse('{"path":"/devices/WZ5_rgbcct.html","title":"Skydance WZ5_rgbcct control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Skydance WZ5_rgbcct control via MQTT","description":"Integrate your Skydance WZ5_rgbcct via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"White brightness (numeric)","slug":"white-brightness-numeric","link":"#white-brightness-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724940618000},"filePathRelative":"devices/WZ5_rgbcct.md"}')}}]);