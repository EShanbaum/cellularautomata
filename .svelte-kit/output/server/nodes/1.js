

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D4oPNGv5.js","_app/immutable/chunks/scheduler.vVxgJjNz.js","_app/immutable/chunks/index.RFs9ZdB2.js","_app/immutable/chunks/entry.BxF5jo-4.js"];
export const stylesheets = [];
export const fonts = [];
