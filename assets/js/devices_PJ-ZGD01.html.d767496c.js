"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61929],{77116:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>r});var o=a(6254);const i={},n=(0,a(32991).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"tuya-pj-zgd01",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#tuya-pj-zgd01"},[(0,o.Lk)("span",null,"Tuya PJ-ZGD01")])],-1)),(0,o.Lk)("table",null,[t[7]||(t[7]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"PJ-ZGD01")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Tuya"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Garage door opener")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"trigger, countdown, garage_door_contact, run_time, open_alarm_time, status, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PJ-ZGD01.png",alt:"Tuya PJ-ZGD01"})])],-1)),t[6]||(t[6]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"White-label"),(0,o.Lk)("td",null,"MatSee Plus PJ-ZGD01")],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="trigger-binary" tabindex="-1"><a class="header-anchor" href="#trigger-binary"><span>Trigger (binary)</span></a></h3><p>Request door to close (= false) or open (= true), will not pulse output if contact shows door is already in requested state. Value can be found in the published state on the <code>trigger</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger&quot;: NEW_VALUE}</code>. If value equals <code>true</code> trigger is ON, if <code>false</code> OFF.</p><h3 id="countdown-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-numeric"><span>Countdown (numeric)</span></a></h3><p>Countdown to trigger door movement after a certain time, will pulse output in all cases. Value can be found in the published state on the <code>countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="garage-door-contact-binary" tabindex="-1"><a class="header-anchor" href="#garage-door-contact-binary"><span>Garage door contact (binary)</span></a></h3><p>Indicates if the garage door contact is closed (= true) or open (= false). Value can be found in the published state on the <code>garage_door_contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> garage door contact is ON, if <code>false</code> OFF.</p><h3 id="run-time-numeric" tabindex="-1"><a class="header-anchor" href="#run-time-numeric"><span>Run time (numeric)</span></a></h3><p>Configure the time to wait for the door contact status to change before triggering a run time alarm. Value can be found in the published state on the <code>run_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;run_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>120</code>. The unit of this value is <code>s</code>.</p><h3 id="open-alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#open-alarm-time-numeric"><span>Open alarm time (numeric)</span></a></h3><p>Configure the amount of time the door may be open before an open time alarm is triggered. Value can be found in the published state on the <code>open_alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>86400</code>. The unit of this value is <code>s</code>.</p><h3 id="status-enum" tabindex="-1"><a class="header-anchor" href="#status-enum"><span>Status (enum)</span></a></h3><p>Indicates run time alarm, door open alarm or noraml status, will not retunr to normal until door is triggered again. Value can be found in the published state on the <code>status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>Open Time Alarm</code>, <code>Run Time Alarm</code>, <code>Normal</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15))])}]]),r=JSON.parse('{"path":"/devices/PJ-ZGD01.html","title":"Tuya PJ-ZGD01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya PJ-ZGD01 control via MQTT","description":"Integrate your Tuya PJ-ZGD01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Trigger (binary)","slug":"trigger-binary","link":"#trigger-binary","children":[]},{"level":3,"title":"Countdown (numeric)","slug":"countdown-numeric","link":"#countdown-numeric","children":[]},{"level":3,"title":"Garage door contact (binary)","slug":"garage-door-contact-binary","link":"#garage-door-contact-binary","children":[]},{"level":3,"title":"Run time (numeric)","slug":"run-time-numeric","link":"#run-time-numeric","children":[]},{"level":3,"title":"Open alarm time (numeric)","slug":"open-alarm-time-numeric","link":"#open-alarm-time-numeric","children":[]},{"level":3,"title":"Status (enum)","slug":"status-enum","link":"#status-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1737814624000},"filePathRelative":"devices/PJ-ZGD01.md"}')}}]);