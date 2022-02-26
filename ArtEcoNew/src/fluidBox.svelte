<script>
    export let size = '100'
</script>
<style>
    .fluid-box {
        /*background-color: lightcyan;*/
        display: inline-block;
        margin: 0; padding: 0;
        position: relative;
        /*font-size: 14px;*/
    }
</style>

<div class="fluid-box" style="flex: {size}" >
    <slot/>
</div>


