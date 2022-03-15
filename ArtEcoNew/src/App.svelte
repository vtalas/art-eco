<script>

    import { fade, fly, slide } from 'svelte/transition';

    let indexView = true;

    export let defaultTitle;
    export let galleries;
    export let selectedGallery;
    export let i18n

    import Top from './top.svelte';
    import Layout from './layout.svelte';
    import FluidBox from './fluidBox.svelte';
    import FluidRow from './fluidRow.svelte';
    import GalleryLayout from './GaleryLayout.svelte';

    import Service from './service.svelte';
    import Kontakt from './kontakt.svelte';
    import Team from './team.svelte';

    let w, h;
    $: small = w < 800
    $: indexViewObserver = indexView
    let title = defaultTitle;

    function onGalleryClick(event) {

        const { name } = event.detail;
        selectedGallery = name;
        indexView = !name;
        updateTitle(name);
    }

    function navigateHome() {
        indexView = true;
        selectedGallery = '';
        updateTitle();
    }

    function updateTitle(name = defaultTitle) {
        title = name;
    }

</script>

<Layout>

    <div class="section header" bind:clientWidth={w} bind:clientHeight={h}>
        <Top on:logo-click={navigateHome}/>
    </div>

    <FluidRow>
        <FluidBox size=".5">
            {#key title}
                <h1 class="{indexView ? 'title-index-view': 'title'}"
                    in:fly="{{ delay: 300, y: 50, duration: 800 }}"
                    out:fly="{{ y: -20, duration: 200 }}">
                    {title}
                </h1>
            {/key}
            {#if indexView}
                <p out:fade="{{ duration: 20 }}"
                   in:fade="{{ delay: 1000}}"
                   class="{indexView ? 'title-text-index-view': 'title-text'}">
                    Relaizace staveb a interiérů s důrazem na dokolanou preciznost provedení. Loeoadslflkj alksdflj
                    laskdflkj
                    kadskfljlas
                    kadskfljlas
                </p>
            {/if}
        </FluidBox>
        <FluidBox size=".5">&nbsp;</FluidBox>
    </FluidRow>
    <FluidRow>
        <GalleryLayout
                selectedGallery="{selectedGallery}"
                galleries="{galleries}"
                on:gallery-click="{onGalleryClick}"
        />
    </FluidRow>

    {#if indexView}

        <Service small="{small}" i18n="{i18n}"/>
        <Team small="{small}" i18n="{i18n}"/>
        <Kontakt small="{small}" i18n="{i18n}"/>

    {/if}

    <div style="font-size: 14px">
        {w}x{h} {small}
    </div>

</Layout>

<style>

    .title, .title-text {
        color: black;
    }

    .title-index-view, .title-text-index-view {
        color: #EB5C3B;
    }

    .section.header {
        display: flex;
        align-items: center;
        padding: 1rem 0;
    }

</style>
