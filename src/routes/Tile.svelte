<script>
    import { createEventDispatcher } from "svelte";

    /**
	 * @type {string}
	 */
     export let state = "off";
     
     /**
      * @type {number}
     */

    export let x = 0;

    /**
     * @type {number}
    */

    export let y = 0;

    export let style = "";

    export let color = "#000000";

    const dispatch = createEventDispatcher();

    function updateState(){
        dispatch("coords", { x, y });
    }
</script>

<div on:click={updateState} style="{style}; background-color: {color}">
    
</div>

<style>
    div{
        width: 15px;
        height: 15px;
        border-width: 1px;
        border-color: #2A2A2A;
        border-style: solid;
    }
</style>