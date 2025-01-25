"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[60308],{9137:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>a});var c=o(6254);const i={},d=(0,o(32991).A)(i,[["render",function(e,t){const o=(0,c.g2)("RouteLink");return(0,c.uX)(),(0,c.CE)("div",null,[t[8]||(t[8]=(0,c.Lk)("h1",{id:"schneider-electric-s520619",tabindex:"-1"},[(0,c.Lk)("a",{class:"header-anchor",href:"#schneider-electric-s520619"},[(0,c.Lk)("span",null,"Schneider Electric S520619")])],-1)),(0,c.Lk)("table",null,[t[6]||(t[6]=(0,c.Lk)("thead",null,[(0,c.Lk)("tr",null,[(0,c.Lk)("th"),(0,c.Lk)("th")])],-1)),(0,c.Lk)("tbody",null,[t[2]||(t[2]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Model"),(0,c.Lk)("td",null,"S520619")],-1)),(0,c.Lk)("tr",null,[t[1]||(t[1]=(0,c.Lk)("td",null,"Vendor",-1)),(0,c.Lk)("td",null,[(0,c.bF)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,c.k6)((()=>t[0]||(t[0]=[(0,c.eW)("Schneider Electric")]))),_:1})])]),t[3]||(t[3]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Description"),(0,c.Lk)("td",null,"Wiser Odace Smart thermostat")],-1)),t[4]||(t[4]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Exposes"),(0,c.Lk)("td",null,"keypad_lockout, schneider_pilot_mode, temperature_display_mode, climate (occupied_heating_setpoint, local_temperature, system_mode, pi_heating_demand), temperature, occupancy, linkquality")],-1)),t[5]||(t[5]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Picture"),(0,c.Lk)("td",null,[(0,c.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/S520619.png",alt:"Schneider Electric S520619"})])],-1))])]),t[9]||(t[9]=(0,c.Lk)("h2",{id:"options",tabindex:"-1"},[(0,c.Lk)("a",{class:"header-anchor",href:"#options"},[(0,c.Lk)("span",null,"Options")])],-1)),(0,c.Lk)("p",null,[(0,c.Lk)("em",null,[(0,c.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,c.k6)((()=>t[7]||(t[7]=[(0,c.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,c.Fv)('<ul><li><p><code>measurement_poll_interval</code>: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of <code>-1</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="keypad-lockout-binary" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-binary"><span>Keypad lockout (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. If value equals <code>lock1</code> keypad lockout is ON, if <code>unlock</code> OFF.</p><h3 id="schneider-pilot-mode-enum" tabindex="-1"><a class="header-anchor" href="#schneider-pilot-mode-enum"><span>Schneider pilot mode (enum)</span></a></h3><p>Controls piloting mode. Value can be found in the published state on the <code>schneider_pilot_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schneider_pilot_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schneider_pilot_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>contactor</code>, <code>pilot</code>.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum"><span>Temperature display mode (enum)</span></a></h3><p>The temperature format displayed on the thermostat screen. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>4</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>cool</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17))])}]]),a=JSON.parse('{"path":"/devices/S520619.html","title":"Schneider Electric S520619 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric S520619 control via MQTT","description":"Integrate your Schneider Electric S520619 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:11:47.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Keypad lockout (binary)","slug":"keypad-lockout-binary","link":"#keypad-lockout-binary","children":[]},{"level":3,"title":"Schneider pilot mode (enum)","slug":"schneider-pilot-mode-enum","link":"#schneider-pilot-mode-enum","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1737814624000},"filePathRelative":"devices/S520619.md"}')}}]);