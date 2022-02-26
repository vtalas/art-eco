<script>

    export let title;


</script>


<div class="spacer-title">
    <div class="spacer-title-line"></div>
    <span class="spacer-title-text">{title}</span>
</div>

<style>
    .spacer-title {
        text-align: center;
        color: #1E1E1C;
        position: relative;
    }

    .spacer-title-text {
        display: inline-block;
        position: relative;
        padding-left: 10px;
        padding-right: 10px;
        background-color: white;
    }

    .spacer-title-line {
        border-bottom: 1px solid #e5e5e5;
        position: absolute;
        width: 100%;
        top: 50%;
    }
</style>

