"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[25199],{19883:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>m,data:()=>k});var s=n(86904);const t=(0,s.Lk)("h1",{id:"icasa-iczb-kpd18s",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#icasa-iczb-kpd18s"},[(0,s.Lk)("span",null,"iCasa ICZB-KPD18S")])],-1),i=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1),l=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"ICZB-KPD18S")],-1),o=(0,s.Lk)("td",null,"Vendor",-1),c=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Zigbee 3.0 Keypad Pulse 8S")],-1),d=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"battery, action, linkquality")],-1),r=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ICZB-KPD18S.png",alt:"iCasa ICZB-KPD18S"})])],-1),p=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To Reset the iCasa ICZB-KPD18S do the following:</p><ol><li>Press and hold down both OFF button and the ON button until the LED indicator on the remote turns on.</li><li>Than immediately click OFF button 5 times. 3) The LED status indicator flashes 3 times to indicate successful reset.</li></ol><p>Pairing mode:</p><ol><li>Press and hold down OFF and ON button simultaneously until the status LED indicator on the remote turns on, then immediately click ON button.</li><li>The status LED indicator on the remote will blink fast.</li><li>When the pairing is successful the status LED indicator on the remote will blink 6 times.</li></ol><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event"><span>Deprecated click event</span></a></h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="legacy-integration" tabindex="-1"><a class="header-anchor" href="#legacy-integration"><span>Legacy integration</span></a></h3><p>By default (for backwards compatibility purposes) the legacy integration is enabled. For new users it is recommended to <strong>disable</strong> this as it has several fundamental problems. To disable the legacy integration add the following to your <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',14),u=(0,s.Fv)('<ul><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Note: will only work when legacy: false is set. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>recall_1</code>, <code>recall_2</code>, <code>recall_3</code>, <code>recall_4</code>, <code>recall_5</code>, <code>recall_6</code>, <code>store_1</code>, <code>store_2</code>, <code>store_3</code>, <code>store_4</code>, <code>store_5</code>, <code>store_6</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),h={},m=(0,n(22652).A)(h,[["render",function(e,a){const n=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[t,(0,s.Lk)("table",null,[i,(0,s.Lk)("tbody",null,[l,(0,s.Lk)("tr",null,[o,(0,s.Lk)("td",null,[(0,s.bF)(n,{to:"/supported-devices/#v=iCasa"},{default:(0,s.k6)((()=>[(0,s.eW)("iCasa")])),_:1})])]),c,d,r])]),p,(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>[(0,s.eW)("How to use device type specific configuration")])),_:1})])]),u])}]]),k=JSON.parse('{"path":"/devices/ICZB-KPD18S.html","title":"iCasa ICZB-KPD18S control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"iCasa ICZB-KPD18S control via MQTT","description":"Integrate your iCasa ICZB-KPD18S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-11-09T18:37:38.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Deprecated click event","slug":"deprecated-click-event","link":"#deprecated-click-event","children":[]},{"level":3,"title":"Legacy integration","slug":"legacy-integration","link":"#legacy-integration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724940618000},"filePathRelative":"devices/ICZB-KPD18S.md"}')}}]);