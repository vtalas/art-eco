<script>
    export let attrs;

    let widthRatio = 16;
    let heightRatio = 9;

    if (attrs && attrs.ratio) {
        const parts = attrs.ratio.split(':')
        widthRatio = parseInt(parts[0]);
        heightRatio = parseInt(parts[1]);
    }
</script>


<div class="aspect-ratio-box" style="padding-top: {(heightRatio / widthRatio) * 100 }%">
    <div class="aspect-ratio-box-inside">
        <slot/>
    </div>
</div>

<style>
    .aspect-ratio-box {
        height: 0;
        overflow: hidden;
        background: white;
        position: relative;
    }

    .aspect-ratio-box-inside {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rebeccapurple;
    }

</style>
