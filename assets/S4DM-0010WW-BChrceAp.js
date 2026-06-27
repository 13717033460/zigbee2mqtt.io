import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-Bn1rPXH3.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXOBAyDC.js";
//#region docs/devices/S4DM-0010WW.md
var _pageData = JSON.parse("{\"path\":\"/devices/S4DM-0010WW.html\",\"title\":\"Shelly S4DM-0010WW control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Shelly S4DM-0010WW control via MQTT\",\"description\":\"Integrate your Shelly Dimmer 0/1-10V PM Gen4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\"},\"git\":{\"updatedTime\":1781548941000,\"contributors\":[{\"name\":\"dwtaylornz\",\"username\":\"dwtaylornz\",\"email\":\"32386008+dwtaylornz@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/dwtaylornz\"}],\"changelog\":[{\"hash\":\"47851936ead18442aa5789a6f2eaf1017f911a38\",\"time\":1781548941000,\"email\":\"32386008+dwtaylornz@users.noreply.github.com\",\"author\":\"Darren Taylor\",\"message\":\"Add image and notes for Shelly Dimmer 0/1-10V PM Gen4 (S4DM-0010WW) (#5232)\"}]},\"filePathRelative\":\"devices/S4DM-0010WW.md\"}");
var _sfc_main = { name: "S4DM-0010WW.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[6] || (_cache[6] = createBaseVNode("h1", {
			id: "shelly-s4dm-0010ww",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#shelly-s4dm-0010ww"
		}, [createBaseVNode("span", null, "Shelly S4DM-0010WW")])], -1)),
		createBaseVNode("table", null, [_cache[5] || (_cache[5] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "S4DM-0010WW")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Shelly" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Shelly", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Dimmer 0/1-10V PM Gen4")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/S4DM-0010WW.png",
				alt: "Shelly S4DM-0010WW"
			})])], -1))
		])]),
		_cache[7] || (_cache[7] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Put the device into pairing mode by pressing the button <strong>5 times</strong>. The device will enter inclusion mode for <strong>3 minutes</strong>.</p><h3 id=\"switching-profiles\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switching-profiles\"><span>Switching profiles</span></a></h3><p>The device ships with the <strong>Matter</strong> profile enabled by default. To use it with Zigbee2MQTT, switch to the <strong>Zigbee</strong> profile by pressing the button <strong>5 times</strong>.</p>", 5))
	]);
}
var S4DM_0010WW_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, S4DM_0010WW_default as default };
