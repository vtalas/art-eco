<script>
    import { createEventDispatcher } from 'svelte';
    import FluidBox from './fluidBox.svelte';

    const dispatch = createEventDispatcher();

    export let galleries = [];
    export let selectedGallery = '';

    const onGalleryClick = function(evt, name) {
        dispatch('gallery-click', { name });
    }
</script>

<FluidBox size=".5">

    {#if selectedGallery}
        skjdfjkdskfhds
    {:else}
        <div on:click={(evt)=> onGalleryClick(evt, false)}>CLOSE</div>
        {#each galleries as gallery}
            <div class="box" on:click={(evt)=> onGalleryClick(evt, gallery.name)}>{gallery.name}</div>
        {/each}
    {/if}


</FluidBox>

<style>
    .box {
        width: calc(100% - 10px);
        height: 180px;
        background-color: #999999;
        margin: 5px;
    }
</style>
