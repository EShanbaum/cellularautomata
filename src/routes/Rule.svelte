<script>
    /**
     * @type {number}
    */
    export let id;


    /**
     * @type {string[]}
     */
    export let sOptions;

    /**
     * @type {string}
     */
    export let sFrom;

    /**
     * @type {string}
     */
    export let sTo;

    /**
     * @type {string}
    */

    export let sNeighbor;

    /**
     * @type {number[]}
     */
    export let nums = [];
</script>

<div class="rule">
    <div>
        <select bind:value={sFrom}>
            {#each sOptions as s}
                <option value={s}>{s}</option>
            {/each}
        </select>
        &rarr;
        <select bind:value={sTo}>
            {#each sOptions as s}
                <option value={s}>{s}</option>
            {/each}
        </select>
    </div>

    <div class="check"> 
        {#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as num}
            <label>
                <input 
                    type="checkbox"
                    value={num}
                    bind:group={nums}
                />
                <br />
                <p>{num}</p>
            </label>
        {/each}
        <select bind:value={sNeighbor}>
            {#each sOptions as s}
                <option value={s}>{s}</option>
            {/each}
        </select>
    </div>
</div>


<style>
    .rule{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 15px;
    }
    label{
        display: inline-block;
        vertical-align: middle;
    }
    label p{
        text-align: center;
        margin-top: 4px;
    }

    select{
        border-radius: 2px;
        font-size: 12pt;
    }

    .check{
        margin-top: 12px;
    }


</style>