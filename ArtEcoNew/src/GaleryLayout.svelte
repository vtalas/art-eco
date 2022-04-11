<script>
    import { createEventDispatcher } from 'svelte';
    import { fade, fly, slide } from 'svelte/transition';
    import AspectRatioBox from './AspectRatioBox.svelte';

    const dispatch = createEventDispatcher();

    export let galleries = [];
    export let selectedGallery = '';

    const onGalleryClick = function(evt, name) {
        dispatch('gallery-click', { name });
    }
    const delay = 400
    //TODO v.talas box-image - temp height 100% - use proper image ratio
</script>


{#if selectedGallery}

    {#each galleries[0].items as item, index}
        <div class="box" in:fade="{{delay: delay +(index * 100)}}"><img src="{item.src}" alt="xx"/></div>
    {/each}

{:else}
    {#each galleries as gallery}

        <div class="box" in:fade="{{delay}}"

             on:click={(evt)=> onGalleryClick(evt, gallery.name)}>

            <AspectRatioBox attrs="{gallery.items[0].attrs}">
                <img class="box-image" src="{gallery.items[0].src}" alt="xxx"/>
                <div class="hidden-content">{gallery.name}</div>
            </AspectRatioBox>

        </div>
    {/each}
{/if}

<style>
    .box {
        background-color: #999999;
        margin-bottom: 5px;
        overflow: hidden;
        position: relative;
    }

    .hidden-content {
        position: absolute;
        top: 20%;
        left: 20%;
        color: #ae1b22;
        font-size: 200%;
    }

    .box-image {
        /*position: absolute;*/
        /*top: 0;*/
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
