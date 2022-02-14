<script>
    import { createEventDispatcher } from 'svelte';
    import FluidBox from './fluidBox.svelte';
    import { fade, fly, slide } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    export let galleries = [];
    export let selectedGallery = '';

    const onGalleryClick = function(evt, name) {
        dispatch('gallery-click', { name });
    }

    const delay = 400
</script>

<FluidBox size=".5">

    {#if selectedGallery}

        {#each galleries[0].items as item}
            <div class="box" in:fade="{{delay}}"><img src="{item.src}"/></div>
        {/each}

    {:else}
        {#each galleries as gallery}
            <div class="box" in:fade="{{delay}}"
                 on:click={(evt)=> onGalleryClick(evt, gallery.name)}>{gallery.name}</div>
        {/each}
    {/if}


</FluidBox>

<style>
    .box {
        width: calc(100% - 10px);
        height: 180px;
        background-color: #999999;
        margin: 5px;
        overflow: hidden;
    }
</style>
