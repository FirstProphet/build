const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bw9a09n0.js","app":"_app/immutable/entry/app.BS5fbsmC.js","imports":["_app/immutable/entry/start.Bw9a09n0.js","_app/immutable/chunks/entry.FDrsO-P4.js","_app/immutable/chunks/runtime.BImtrf0m.js","_app/immutable/entry/app.BS5fbsmC.js","_app/immutable/chunks/runtime.BImtrf0m.js","_app/immutable/chunks/store.DppMPHr-.js","_app/immutable/chunks/disclose-version.CowVcU60.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CGKjzxKu.js')),
			__memo(() => import('./chunks/1-X-Hn_nLt.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
