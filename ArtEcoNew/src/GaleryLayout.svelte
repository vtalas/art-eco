<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    import FluidBox from './fluidBox.svelte';

    export let galleries = []

    let selectedGallery = '';

    const onGalleryClick = function(evt, name) {
        dispatch('message', { name })
        selectedGallery = name
    }
</script>

<FluidBox size=".5">

    <div  on:click={(evt)=> onGalleryClick(evt, false)}>CLOSE</div>
    {#each galleries as gallery}
        <div class="box" on:click={(evt)=> onGalleryClick(evt, gallery.name)}>---- {gallery.name}</div>
    {/each}

</FluidBox>

<FluidBox size=".5">
    <div class="box">----</div>
    <div class="box">----</div>
    <div class="box">----</div>
</FluidBox>

<style>

    .box {
        width: calc(100% - 10px);
        height: 180px;
        background-color: #999999;
        margin: 5px;
    }

</style>
