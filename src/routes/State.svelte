<script>
    /**
     * @type {string}
     */
    export let name;

    /**
     * @type {string}
     */
    export let color;
</script>

<div>
    <input type="color" bind:value={color}/>
    <input type="text" bind:value={name}/>
</div>

<style>
    div{
        display: inline-block;
    }
    input{
        border-radius: 2px;
        font-weight: bold;
        font-size: 12pt;
    }
</style>