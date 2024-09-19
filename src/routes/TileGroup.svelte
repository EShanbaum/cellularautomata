<script>
    import Tile from "./Tile.svelte";
    import State from "./State.svelte";
    import { tick } from "svelte";
	import Rule from "./Rule.svelte";

    /**
     * @type {number}
    */

    let size = 50;

    /**
	 * @type {{ x: number; y: number; state: string; }[]}
	 */
    let tiles = [];

    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            tiles.push({
                x: j,
                y: i,
                state: "off"
            });
        }
    }

    let id = 1;
    let speed = 200;
    let exitPlay = false;
    let play = false;
    let loop = false;

    let selectedState = "off";

    /**
     * @type {{ name: string; color: string}[]}
     */

    let statesArr = [{name: "off", color: "#000000"}, {name: "default", color:"#ffa500"}];

    $: stateNames = statesArr.map(a => a.name);
    
    let rulesArr = [
        {id: id++, sFrom: "off", sTo: "default", sNeighbor: "default", nums: [3]},
        {id: id++, sFrom: "default", sTo: "off", sNeighbor: "default", nums: [0, 1, 4, 5, 6, 7, 8]}
    ]


    /**
	 * @param {{ detail: { x: any; y: any; }; }} event
	 */
    function handleClick(event){
        const { x, y } = event.detail
        
        tiles = tiles.map(tile => {
            if (tile.x === x && tile.y === y) {
                return {...tile, state: selectedState };
            }
            return tile;
        });
    }

    
    async function clearTiles(){
        
        tiles = tiles.map(tile => {
            return {x: tile.x, y: tile.y, state: "off"}
        })

        exitPlay = true;
        setTimeout(() => play=false, 200);
        exitPlay = false;
    }

    /**
	 * @param {number} i
	 */
    function getNeighbors(i){
        let neighbors = [];

        if (loop) {
            let top = i < size;
            let bottom = i >= (size * size) - size;
            let left = (i % size) == 0;
            let right = ((i + 1) % size) == 0;

            if (top)    neighbors.push((size*size) - size + i);
            else        neighbors.push(i - size);

            if (bottom) neighbors.push(i - (size*size - size));
            else        neighbors.push(i + size);

            if (left)   neighbors.push(i + (size - 1));
            else        neighbors.push(i - 1);

            if (right)  neighbors.push(i - (size - 1));
            else        neighbors.push(i + 1);


            // Top left corner
            if (top && left) neighbors.push(size*size - 1);
            else if (!top && left) neighbors.push(i - 1);
            else if (top && !left) neighbors.push(i + (size*size - size) - 1);
            else neighbors.push(i - size - 1);

            // Top right corner
            if (top && right) neighbors.push(size*size - size);
            else if (top && !right) neighbors.push(i + (size*size - size) + 1);
            else if (!top && right) neighbors.push(i + 1 - size - size);
            else neighbors.push(i - (size - 1));

            // Bottom left corner
            if (bottom && left) neighbors.push(size - 1);
            else if (bottom && !left) neighbors.push(i - (size*size - size) - 1);
            else if (!bottom && left) neighbors.push(i + size + size - 1);
            else neighbors.push(i + size - 1);

            // Bottom right corner
            if (bottom && right) neighbors.push(0);
            if (bottom && !right) neighbors.push(i - (size*size - size) + 1);
            if (!bottom && right) neighbors.push(i + 1);
            else neighbors.push(i + size + 1);
        }

        else{
            neighbors = [
                i + size,
                i - size
            ];
            if (((i + 1 ) % size) != 0) {
                neighbors.push(i + 1);
                neighbors.push(i - (size - 1));
                neighbors.push(i + size + 1);
            }

            if ((i % size) != 0){
                neighbors.push(i - 1);
                neighbors.push(i - size - 1);
                neighbors.push(i + size - 1);
            }
        }

        if (i == 0) console.log(neighbors);
        return neighbors;
    }

    async function updateSize(){
        clearTiles();
        tiles = [];

        for (let i = 0; i < size; i++){
            for (let j = 0; j < size; j++){
                tiles.push({
                    x: j,
                    y: i,
                    state: "off"
                });
            }
        }
        await tick();
    }


    /**
     * 
     * @param {boolean} recursive
     */
    async function updateBoard(recursive){
        if (recursive) play = true;
        /**
		 * @type {{ x: number; y: number; state: string; }[]}
		 */
        let newTiles = []

        for (let i = 0; i < size*size; i++){
            let neighborStates = new Map();
            stateNames.forEach(e => {
                neighborStates.set(e, 0);
            })

            getNeighbors(i).forEach((e) => {
                if (e >= 0 && e < size*size){
                    let currState = tiles[e].state;
                    neighborStates.set(currState, neighborStates.get(currState) + 1);
                }
            });

            newTiles[i] = tiles[i];
            rulesArr.forEach((e) => {
                if (tiles[i].state === e.sFrom && e.nums.includes(neighborStates.get(e.sNeighbor))){
                    newTiles[i] = {
                        x: tiles[i].x,
                        y: tiles[i].y,
                        state: e.sTo
                    }
                }
            })
        }

        if (JSON.stringify(tiles) != JSON.stringify(newTiles)){
            tiles = newTiles;
            await tick();
            if (exitPlay){
                play = false;
                exitPlay = false;
            }
            else if (recursive){
                setTimeout(() => updateBoard(recursive), speed);
            }
        }
    }



	function addState() {
		stateNames = [...stateNames, "new"];
        statesArr = [...statesArr, {name: "new", color: "#ffffff"}]
	}

    function addRule() {
        rulesArr = [...rulesArr, {id: id++, sFrom: "off", sTo: "off", sNeighbor: "off", nums: []}]
    }

    function swapRule() {
        
    }

    /**
	 * @param {number} id
	 */
    async function removeRule(id) {
        /**
		 * @type {{ id: number; sFrom: string; sTo: string; sNeighbor: string; nums: number[]; }[]}
		 */
        let newRulesArr = [];
        console.log(id);

        rulesArr.forEach((e) => {
            if (e.id != id){
                newRulesArr.push(e);
            }
        });

        rulesArr = newRulesArr;
        console.log(rulesArr);
    }
</script>

<div class="board" style="grid-template-columns: repeat({size}, 0fr)" >
    {#each tiles as tile}
        <Tile x={tile.x} y={tile.y} state={tile.state} color={statesArr.find(e => e.name === tile.state)?.color} on:coords={handleClick}
            style={ tile.x === size/2 ? "border-color: #004400" : tile.y === size/2 ? "border-color: #440000" : "" }
        />
    {/each}
</div>
<div class="controls">
    <!-- MAIN CONTROLS -->
    <button on:click={() => updateBoard(true)} disabled={play}>
        Play
    </button>
    <button on:click={() => updateBoard(false)} disabled={play}>
        Step
    </button>
    <button on:click={clearTiles} >
        Clear
    </button>
    <button on:click={() => exitPlay = true} disabled={!play}>
        Pause
    </button>
    Size
    <input type="number" min="5" max="70" bind:value={size} on:change={updateSize}/>
    Speed
    <input type="range" min="10" max="1000" bind:value={speed} />
    Loop
    <input type="checkbox" bind:checked={loop}/>
    
    <!-- STATE CONTROLS -->
    <div class="state-controls">
        {#each statesArr as s}
            <input type="radio" value={s.name} bind:group={selectedState}/>
            <State bind:name={s.name} bind:color={s.color}/>
            <br />
        {/each}
        <button on:click={addState}>Add state</button>
    </div>

    <!-- RULE CONTROLS -->
    <div class="rule-controls">
        {#each rulesArr as r, i}
            <span class="rule-group" id="rules{i}">
                <button on:click={() => removeRule(r.id)}>
                    X
                </button>
                <Rule id={r.id} bind:sFrom={r.sFrom} bind:sTo={r.sTo} bind:sNeighbor={r.sNeighbor} bind:sOptions={stateNames} bind:nums={r.nums}/>
            </span>
        {/each}
        <button on:click={addRule}>Add rule</button>
    </div>
</div>


<style>
    .board{
        display: grid;
        float: left;
    }
    .controls{
        float: right;
    }

    .state-controls{
        margin: 20px 0px;
    }

    .rule-group button {
        float:left;
    }
</style>