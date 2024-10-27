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

    /**
     * @type {boolean}
     */
    export let gridLines = true;

    const dispatch = createEventDispatcher();

    function updateState(){
        dispatch("coords", { x, y });
    }
</script>

<div on:click={updateState} style="{style}; background-color: {color}; border: {gridLines? '1px solid #2a2a2a' : 'none'}; --tile-width: {gridLines? 15 : 17}px; --tile-sm-width: {gridLines? 12: 14}px">
    
</div>

<style>
    div{
        width: var(--tile-width);
        height: var(--tile-width);
    }

    @media only screen and (max-width: 1470px){
        div{
            width: var(--tile-sm-width);
            height: var(--tile-sm-width);
        }
    }
</style>