

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BJYbJQaf.js","_app/immutable/chunks/scheduler.vVxgJjNz.js","_app/immutable/chunks/index.RFs9ZdB2.js"];
export const stylesheets = [];
export const fonts = [];
