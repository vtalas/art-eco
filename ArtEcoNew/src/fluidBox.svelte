<script>
    export let size = '100';
    export let minWidth = '250px';
    //TODO v.talas , 'min-width':{minWidth} style flud-box
</script>
<style>
    .fluid-box {
        display: inline-block;
        margin: 0;
        padding: 0;
        position: relative;

        min-width: 250px;
    }
</style>

<div class="fluid-box" style="flex: {size}">
    <slot/>
</div>


