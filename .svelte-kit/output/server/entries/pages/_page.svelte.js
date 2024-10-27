import { c as create_ssr_component, d as createEventDispatcher, e as escape, f as add_attribute, h as each, v as validate_component } from "../../chunks/ssr.js";
const css$3 = {
  code: "div.svelte-d73ond{width:15px;height:15px;border-width:1px;border-color:#2A2A2A;border-style:solid}",
  map: '{"version":3,"file":"Tile.svelte","sources":["Tile.svelte"],"sourcesContent":["<script>\\n    import { createEventDispatcher } from \\"svelte\\";\\n\\n    /**\\n\\t * @type {string}\\n\\t */\\n     export let state = \\"off\\";\\n     \\n     /**\\n      * @type {number}\\n     */\\n\\n    export let x = 0;\\n\\n    /**\\n     * @type {number}\\n    */\\n\\n    export let y = 0;\\n\\n    export let style = \\"\\";\\n\\n    export let color = \\"#000000\\";\\n\\n    const dispatch = createEventDispatcher();\\n\\n    function updateState(){\\n        dispatch(\\"coords\\", { x, y });\\n    }\\n<\/script>\\n\\n<div on:click={updateState} style=\\"{style}; background-color: {color}\\">\\n    \\n</div>\\n\\n<style>\\n    div{\\n        width: 15px;\\n        height: 15px;\\n        border-width: 1px;\\n        border-color: #2A2A2A;\\n        border-style: solid;\\n    }\\n</style>"],"names":[],"mappings":"AAoCI,iBAAG,CACC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,CACjB,YAAY,CAAE,OAAO,CACrB,YAAY,CAAE,KAClB"}'
};
const Tile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { state = "off" } = $$props;
  let { x = 0 } = $$props;
  let { y = 0 } = $$props;
  let { style = "" } = $$props;
  let { color = "#000000" } = $$props;
  createEventDispatcher();
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$3);
  return `<div style="${escape(style, true) + "; background-color: " + escape(color, true)}" class="svelte-d73ond"></div>`;
});
const css$2 = {
  code: "div.svelte-18i87rm{display:inline-block}",
  map: '{"version":3,"file":"State.svelte","sources":["State.svelte"],"sourcesContent":["<script>\\n    /**\\n     * @type {string}\\n     */\\n    export let name;\\n\\n    /**\\n     * @type {string}\\n     */\\n    export let color;\\n<\/script>\\n\\n<div>\\n    <input type=\\"color\\" bind:value={color}/>\\n    <input type=\\"text\\" bind:value={name}/>\\n</div>\\n\\n<style>\\n    div{\\n        display: inline-block;\\n    }\\n</style>"],"names":[],"mappings":"AAkBI,kBAAG,CACC,OAAO,CAAE,YACb"}'
};
const State = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { color } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  return `<div class="svelte-18i87rm"><input type="color"${add_attribute("value", color, 0)}> <input type="text"${add_attribute("value", name, 0)}> </div>`;
});
const css$1 = {
  code: ".rule.svelte-1ui74i5.svelte-1ui74i5{display:grid;grid-template-columns:1fr 1fr}label.svelte-1ui74i5.svelte-1ui74i5{display:inline-block;vertical-align:middle}label.svelte-1ui74i5 span.svelte-1ui74i5{text-align:center}",
  map: '{"version":3,"file":"Rule.svelte","sources":["Rule.svelte"],"sourcesContent":["<script>\\n    /**\\n     * @type {number}\\n    */\\n    export let id;\\n\\n\\n    /**\\n     * @type {string[]}\\n     */\\n    export let sOptions;\\n\\n    /**\\n     * @type {string}\\n     */\\n    export let sFrom;\\n\\n    /**\\n     * @type {string}\\n     */\\n    export let sTo;\\n\\n    /**\\n     * @type {string}\\n    */\\n\\n    export let sNeighbor;\\n\\n    /**\\n     * @type {number[]}\\n     */\\n    export let nums = [];\\n<\/script>\\n\\n<div class=\\"rule\\">\\n    <span>\\n        <select bind:value={sFrom}>\\n            {#each sOptions as s}\\n                <option value={s}>{s}</option>\\n            {/each}\\n        </select>\\n        &rarr;\\n        <select bind:value={sTo}>\\n            {#each sOptions as s}\\n                <option value={s}>{s}</option>\\n            {/each}\\n        </select>\\n    </span>\\n\\n    <div>\\n        {#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as num}\\n            <label>\\n                <input \\n                    type=\\"checkbox\\"\\n                    value={num}\\n                    bind:group={nums}\\n                />\\n                <br />\\n                <span>{num}</span>\\n            </label>\\n        {/each}\\n        <select bind:value={sNeighbor}>\\n            {#each sOptions as s}\\n                <option value={s}>{s}</option>\\n            {/each}\\n        </select>\\n    </div>\\n</div>\\n\\n\\n<style>\\n    .rule{\\n        display: grid;\\n        grid-template-columns: 1fr 1fr;\\n    }\\n    label{\\n        display: inline-block;\\n        vertical-align: middle;\\n    }\\n    label span{\\n        text-align: center;\\n    }\\n\\n\\n</style>"],"names":[],"mappings":"AAuEI,mCAAK,CACD,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAC/B,CACA,mCAAK,CACD,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,MACpB,CACA,oBAAK,CAAC,mBAAI,CACN,UAAU,CAAE,MAChB"}'
};
const Rule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { sOptions } = $$props;
  let { sFrom } = $$props;
  let { sTo } = $$props;
  let { sNeighbor } = $$props;
  let { nums = [] } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.sOptions === void 0 && $$bindings.sOptions && sOptions !== void 0)
    $$bindings.sOptions(sOptions);
  if ($$props.sFrom === void 0 && $$bindings.sFrom && sFrom !== void 0)
    $$bindings.sFrom(sFrom);
  if ($$props.sTo === void 0 && $$bindings.sTo && sTo !== void 0)
    $$bindings.sTo(sTo);
  if ($$props.sNeighbor === void 0 && $$bindings.sNeighbor && sNeighbor !== void 0)
    $$bindings.sNeighbor(sNeighbor);
  if ($$props.nums === void 0 && $$bindings.nums && nums !== void 0)
    $$bindings.nums(nums);
  $$result.css.add(css$1);
  return `<div class="rule svelte-1ui74i5"><span><select>${each(sOptions, (s) => {
    return `<option${add_attribute("value", s, 0)}>${escape(s)}</option>`;
  })}</select>
        →
        <select>${each(sOptions, (s) => {
    return `<option${add_attribute("value", s, 0)}>${escape(s)}</option>`;
  })}</select></span> <div>${each([0, 1, 2, 3, 4, 5, 6, 7, 8], (num) => {
    return `<label class="svelte-1ui74i5"><input type="checkbox"${add_attribute("value", num, 0)}${~nums.indexOf(num) ? add_attribute("checked", true, 1) : ""}> <br> <span class="svelte-1ui74i5">${escape(num)}</span> </label>`;
  })} <select>${each(sOptions, (s) => {
    return `<option${add_attribute("value", s, 0)}>${escape(s)}</option>`;
  })}</select></div> </div>`;
});
const css = {
  code: ".board.svelte-7qhiye.svelte-7qhiye{display:grid;float:left}.controls.svelte-7qhiye.svelte-7qhiye{float:right}.state-controls.svelte-7qhiye.svelte-7qhiye{margin:20px 0px}.rule-group.svelte-7qhiye button.svelte-7qhiye{float:left}",
  map: '{"version":3,"file":"TileGroup.svelte","sources":["TileGroup.svelte"],"sourcesContent":["<script>\\n    import Tile from \\"./Tile.svelte\\";\\n    import State from \\"./State.svelte\\";\\n    import { tick } from \\"svelte\\";\\n\\timport Rule from \\"./Rule.svelte\\";\\n\\n    /**\\n     * @type {number}\\n    */\\n\\n    let size = 50;\\n\\n    /**\\n\\t * @type {{ x: number; y: number; state: string; }[]}\\n\\t */\\n    let tiles = [];\\n\\n    for (let i = 0; i < size; i++){\\n        for (let j = 0; j < size; j++){\\n            tiles.push({\\n                x: j,\\n                y: i,\\n                state: \\"off\\"\\n            });\\n        }\\n    }\\n\\n    let id = 1;\\n    let speed = 200;\\n    let exitPlay = false;\\n    let play = false;\\n    let loop = false;\\n\\n    let selectedState = \\"off\\";\\n\\n    /**\\n     * @type {{ name: string; color: string}[]}\\n     */\\n\\n    let statesArr = [{name: \\"off\\", color: \\"#000000\\"}, {name: \\"default\\", color:\\"#ffa500\\"}];\\n\\n    $: stateNames = statesArr.map(a => a.name);\\n    \\n    let rulesArr = [\\n        {id: id++, sFrom: \\"off\\", sTo: \\"default\\", sNeighbor: \\"default\\", nums: [3]},\\n        {id: id++, sFrom: \\"default\\", sTo: \\"off\\", sNeighbor: \\"default\\", nums: [0, 1, 4, 5, 6, 7, 8]}\\n    ]\\n\\n\\n    /**\\n\\t * @param {{ detail: { x: any; y: any; }; }} event\\n\\t */\\n    function handleClick(event){\\n        const { x, y } = event.detail\\n        \\n        tiles = tiles.map(tile => {\\n            if (tile.x === x && tile.y === y) {\\n                return {...tile, state: selectedState };\\n            }\\n            return tile;\\n        });\\n    }\\n\\n    \\n    async function clearTiles(){\\n        \\n        tiles = tiles.map(tile => {\\n            return {x: tile.x, y: tile.y, state: \\"off\\"}\\n        })\\n\\n        exitPlay = true;\\n        setTimeout(() => play=false, 200);\\n        exitPlay = false;\\n    }\\n\\n    /**\\n\\t * @param {number} i\\n\\t */\\n    function getNeighbors(i){\\n        let neighbors = [];\\n\\n        if (loop) {\\n            let top = i < size;\\n            let bottom = i >= (size * size) - size;\\n            let left = (i % size) == 0;\\n            let right = ((i + 1) % size) == 0;\\n\\n            if (top)    neighbors.push((size*size) - size + i);\\n            else        neighbors.push(i - size);\\n\\n            if (bottom) neighbors.push(i - (size*size - size));\\n            else        neighbors.push(i + size);\\n\\n            if (left)   neighbors.push(i + (size - 1));\\n            else        neighbors.push(i - 1);\\n\\n            if (right)  neighbors.push(i - (size - 1));\\n            else        neighbors.push(i + 1);\\n\\n\\n            // Top left corner\\n            if (top && left) neighbors.push(size*size - 1);\\n            else if (!top && left) neighbors.push(i - 1);\\n            else if (top && !left) neighbors.push(i + (size*size - size) - 1);\\n            else neighbors.push(i - size - 1);\\n\\n            // Top right corner\\n            if (top && right) neighbors.push(size*size - size);\\n            else if (top && !right) neighbors.push(i + (size*size - size) + 1);\\n            else if (!top && right) neighbors.push(i + 1 - size - size);\\n            else neighbors.push(i - (size - 1));\\n\\n            // Bottom left corner\\n            if (bottom && left) neighbors.push(size - 1);\\n            else if (bottom && !left) neighbors.push(i - (size*size - size) - 1);\\n            else if (!bottom && left) neighbors.push(i + size + size - 1);\\n            else neighbors.push(i + size - 1);\\n\\n            // Bottom right corner\\n            if (bottom && right) neighbors.push(0);\\n            if (bottom && !right) neighbors.push(i - (size*size - size) + 1);\\n            if (!bottom && right) neighbors.push(i + 1);\\n            else neighbors.push(i + size + 1);\\n        }\\n\\n        else{\\n            neighbors = [\\n                i + size,\\n                i - size\\n            ];\\n            if (((i + 1 ) % size) != 0) {\\n                neighbors.push(i + 1);\\n                neighbors.push(i - (size - 1));\\n                neighbors.push(i + size + 1);\\n            }\\n\\n            if ((i % size) != 0){\\n                neighbors.push(i - 1);\\n                neighbors.push(i - size - 1);\\n                neighbors.push(i + size - 1);\\n            }\\n        }\\n\\n        if (i == 0) console.log(neighbors);\\n        return neighbors;\\n    }\\n\\n    async function updateSize(){\\n        clearTiles();\\n        tiles = [];\\n\\n        for (let i = 0; i < size; i++){\\n            for (let j = 0; j < size; j++){\\n                tiles.push({\\n                    x: j,\\n                    y: i,\\n                    state: \\"off\\"\\n                });\\n            }\\n        }\\n        await tick();\\n    }\\n\\n\\n    /**\\n     * \\n     * @param {boolean} recursive\\n     */\\n    async function updateBoard(recursive){\\n        if (recursive) play = true;\\n        /**\\n\\t\\t * @type {{ x: number; y: number; state: string; }[]}\\n\\t\\t */\\n        let newTiles = []\\n\\n        for (let i = 0; i < size*size; i++){\\n            let neighborStates = new Map();\\n            stateNames.forEach(e => {\\n                neighborStates.set(e, 0);\\n            })\\n\\n            getNeighbors(i).forEach((e) => {\\n                if (e >= 0 && e < size*size){\\n                    let currState = tiles[e].state;\\n                    neighborStates.set(currState, neighborStates.get(currState) + 1);\\n                }\\n            });\\n\\n            newTiles[i] = tiles[i];\\n            rulesArr.forEach((e) => {\\n                if (tiles[i].state === e.sFrom && e.nums.includes(neighborStates.get(e.sNeighbor))){\\n                    newTiles[i] = {\\n                        x: tiles[i].x,\\n                        y: tiles[i].y,\\n                        state: e.sTo\\n                    }\\n                }\\n            })\\n        }\\n\\n        if (JSON.stringify(tiles) != JSON.stringify(newTiles)){\\n            tiles = newTiles;\\n            await tick();\\n            if (exitPlay){\\n                play = false;\\n                exitPlay = false;\\n            }\\n            else if (recursive){\\n                setTimeout(() => updateBoard(recursive), speed);\\n            }\\n        }\\n    }\\n\\n\\n\\n\\tfunction addState() {\\n\\t\\tstateNames = [...stateNames, \\"new\\"];\\n        statesArr = [...statesArr, {name: \\"new\\", color: \\"#ffffff\\"}]\\n\\t}\\n\\n    function addRule() {\\n        rulesArr = [...rulesArr, {id: id++, sFrom: \\"off\\", sTo: \\"off\\", sNeighbor: \\"off\\", nums: []}]\\n    }\\n\\n    function swapRule() {\\n        \\n    }\\n\\n    /**\\n\\t * @param {number} id\\n\\t */\\n    async function removeRule(id) {\\n        /**\\n\\t\\t * @type {{ id: number; sFrom: string; sTo: string; sNeighbor: string; nums: number[]; }[]}\\n\\t\\t */\\n        let newRulesArr = [];\\n        console.log(id);\\n\\n        rulesArr.forEach((e) => {\\n            if (e.id != id){\\n                newRulesArr.push(e);\\n            }\\n        });\\n\\n        rulesArr = newRulesArr;\\n        console.log(rulesArr);\\n    }\\n<\/script>\\n\\n<div class=\\"board\\" style=\\"grid-template-columns: repeat({size}, 0fr)\\" >\\n    {#each tiles as tile}\\n        <Tile x={tile.x} y={tile.y} state={tile.state} color={statesArr.find(e => e.name === tile.state)?.color} on:coords={handleClick}\\n            style={ tile.x === size/2 ? \\"border-color: #004400\\" : tile.y === size/2 ? \\"border-color: #440000\\" : \\"\\" }\\n        />\\n    {/each}\\n</div>\\n<div class=\\"controls\\">\\n    <!-- MAIN CONTROLS -->\\n    <button on:click={() => updateBoard(true)} disabled={play}>\\n        Play\\n    </button>\\n    <button on:click={() => updateBoard(false)} disabled={play}>\\n        Step\\n    </button>\\n    <button on:click={clearTiles} >\\n        Clear\\n    </button>\\n    <button on:click={() => exitPlay = true} disabled={!play}>\\n        Pause\\n    </button>\\n    Size\\n    <input type=\\"number\\" min=\\"5\\" max=\\"70\\" bind:value={size} on:change={updateSize}/>\\n    Speed\\n    <input type=\\"range\\" min=\\"10\\" max=\\"1000\\" bind:value={speed} />\\n    Loop\\n    <input type=\\"checkbox\\" bind:checked={loop}/>\\n    \\n    <!-- STATE CONTROLS -->\\n    <div class=\\"state-controls\\">\\n        {#each statesArr as s}\\n            <input type=\\"radio\\" value={s.name} bind:group={selectedState}/>\\n            <State bind:name={s.name} bind:color={s.color}/>\\n            <br />\\n        {/each}\\n        <button on:click={addState}>Add state</button>\\n    </div>\\n\\n    <!-- RULE CONTROLS -->\\n    <div class=\\"rule-controls\\">\\n        {#each rulesArr as r, i}\\n            <span class=\\"rule-group\\" id=\\"rules{i}\\">\\n                <button on:click={() => removeRule(r.id)}>\\n                    X\\n                </button>\\n                <Rule id={r.id} bind:sFrom={r.sFrom} bind:sTo={r.sTo} bind:sNeighbor={r.sNeighbor} bind:sOptions={stateNames} bind:nums={r.nums}/>\\n            </span>\\n        {/each}\\n        <button on:click={addRule}>Add rule</button>\\n    </div>\\n</div>\\n\\n\\n<style>\\n    .board{\\n        display: grid;\\n        float: left;\\n    }\\n    .controls{\\n        float: right;\\n    }\\n\\n    .state-controls{\\n        margin: 20px 0px;\\n    }\\n\\n    .rule-group button {\\n        float:left;\\n    }\\n</style>"],"names":[],"mappings":"AA+SI,kCAAM,CACF,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IACX,CACA,qCAAS,CACL,KAAK,CAAE,KACX,CAEA,2CAAe,CACX,MAAM,CAAE,IAAI,CAAC,GACjB,CAEA,yBAAW,CAAC,oBAAO,CACf,MAAM,IACV"}'
};
const TileGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stateNames;
  let size = 50;
  let tiles = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      tiles.push({ x: j, y: i, state: "off" });
    }
  }
  let id = 1;
  let speed = 200;
  let loop = false;
  let selectedState = "off";
  let statesArr = [{ name: "off", color: "#000000" }, { name: "default", color: "#ffa500" }];
  let rulesArr = [
    {
      id: id++,
      sFrom: "off",
      sTo: "default",
      sNeighbor: "default",
      nums: [3]
    },
    {
      id: id++,
      sFrom: "default",
      sTo: "off",
      sNeighbor: "default",
      nums: [0, 1, 4, 5, 6, 7, 8]
    }
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    stateNames = statesArr.map((a) => a.name);
    $$rendered = `<div class="board svelte-7qhiye" style="${"grid-template-columns: repeat(" + escape(size, true) + ", 0fr)"}">${each(tiles, (tile) => {
      return `${validate_component(Tile, "Tile").$$render(
        $$result,
        {
          x: tile.x,
          y: tile.y,
          state: tile.state,
          color: statesArr.find((e) => e.name === tile.state)?.color,
          style: tile.x === size / 2 ? "border-color: #004400" : tile.y === size / 2 ? "border-color: #440000" : ""
        },
        {},
        {}
      )}`;
    })}</div> <div class="controls svelte-7qhiye"> <button ${""}>Play</button> <button ${""}>Step</button> <button data-svelte-h="svelte-h1clvx">Clear</button> <button ${"disabled"}>Pause</button>
    Size
    <input type="number" min="5" max="70"${add_attribute("value", size, 0)}>
    Speed
    <input type="range" min="10" max="1000"${add_attribute("value", speed, 0)}>
    Loop
    <input type="checkbox"${add_attribute("checked", loop, 1)}>  <div class="state-controls svelte-7qhiye">${each(statesArr, (s) => {
      return `<input type="radio"${add_attribute("value", s.name, 0)}${s.name === selectedState ? add_attribute("checked", true, 1) : ""}> ${validate_component(State, "State").$$render(
        $$result,
        { name: s.name, color: s.color },
        {
          name: ($$value) => {
            s.name = $$value;
            $$settled = false;
          },
          color: ($$value) => {
            s.color = $$value;
            $$settled = false;
          }
        },
        {}
      )} <br>`;
    })} <button data-svelte-h="svelte-16d6i6y">Add state</button></div>  <div class="rule-controls">${each(rulesArr, (r, i) => {
      return `<span class="rule-group svelte-7qhiye" id="${"rules" + escape(i, true)}"><button class="svelte-7qhiye" data-svelte-h="svelte-1txgw5c">X</button> ${validate_component(Rule, "Rule").$$render(
        $$result,
        {
          id: r.id,
          sFrom: r.sFrom,
          sTo: r.sTo,
          sNeighbor: r.sNeighbor,
          sOptions: stateNames,
          nums: r.nums
        },
        {
          sFrom: ($$value) => {
            r.sFrom = $$value;
            $$settled = false;
          },
          sTo: ($$value) => {
            r.sTo = $$value;
            $$settled = false;
          },
          sNeighbor: ($$value) => {
            r.sNeighbor = $$value;
            $$settled = false;
          },
          sOptions: ($$value) => {
            stateNames = $$value;
            $$settled = false;
          },
          nums: ($$value) => {
            r.nums = $$value;
            $$settled = false;
          }
        },
        {}
      )} </span>`;
    })} <button data-svelte-h="svelte-8tncjs">Add rule</button></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TileGroup, "TileGroup").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
