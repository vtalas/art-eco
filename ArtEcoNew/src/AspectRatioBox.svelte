

<div class="aspect-ratio-box">
    <div class="aspect-ratio-box-inside">
        <slot/>
    </div>
</div>

<style>
    .aspect-ratio-box {
        height: 0;
        overflow: hidden;
        padding-top: 56.25%; /* 16:9 */
        padding-top: 100%;
        background: white;
        position: relative;
    }

    .aspect-ratio-box-inside {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color:rebeccapurple;
    }


</style>
