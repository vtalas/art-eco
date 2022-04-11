<script>
    let gap = '5px';
</script>

<style>
    .wrapper {
        width: 100%;
        position: relative;
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
    }

</style>

<div class="wrapper" style="gap:{gap}">
    <slot></slot>
</div>
