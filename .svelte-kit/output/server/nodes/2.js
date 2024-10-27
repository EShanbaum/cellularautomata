

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.nCp3sNkJ.js","_app/immutable/chunks/scheduler.vVxgJjNz.js","_app/immutable/chunks/index.RFs9ZdB2.js"];
export const stylesheets = ["_app/immutable/assets/2.BRN5H5hj.css"];
export const fonts = [];
