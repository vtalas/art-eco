<script>

    import { fade, fly, slide } from 'svelte/transition';

    let indexView = true;

    export let defaultTitle;
    export let galleries;
    export let selectedGallery;

    import Top from './top.svelte';
    import Layout from './layout.svelte';
    import FluidBox from './fluidBox.svelte';
    import FluidRow from './fluidRow.svelte';
    import GalleryLayout from './GaleryLayout.svelte';
    import SpacerTitle from './SpacerTitle.svelte';

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

    let titleVisible = true

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
        ></GalleryLayout>
    </FluidRow>

    {#if indexView}
        <SpacerTitle title="SLUŽBY"></SpacerTitle>

        <FluidRow>
            {#if !small}
                <FluidBox size=".1">&nbsp;</FluidBox>
            {/if}

            <FluidBox size="{small ? 'auto' : 0.6}">
                <p>Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom
                    tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu
                    hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko
                    daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky,
                    které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky
                    nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné
                    stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky.</p>
            </FluidBox>
            <FluidBox size="{small ? 'auto' : 0.2}">
                <ul>
                    <li>sldfljksdf</li>
                    <li>sldfljksdf</li>
                    <li>sldfljksdf</li>
                    <li>sldfljksdf</li>
                </ul>
            </FluidBox>
            {#if !small}
                <FluidBox size=".1">&nbsp;</FluidBox>
            {/if}
        </FluidRow>
        <SpacerTitle title="TEAM"></SpacerTitle>
        <FluidRow>
            {#if !small}
                <FluidBox size=".1">&nbsp;</FluidBox>
            {/if}
            <FluidBox size="{small ? 'auto' : 0.5}">
                <div class="kkk">AAAA teamsdkfljalksj ljkdslkfj lksjdflkj ldskjflksdjf</div>
            </FluidBox>
            <FluidBox size="{small ? 'auto' : 0.5}">
                <div class="kkk">AAAA teamsdkfljalksj ljkdslkfj lksjdflkj ldskjflksdjf</div>
            </FluidBox>
            {#if !small}
                <FluidBox size=".1">&nbsp;</FluidBox>
            {/if}
        </FluidRow>
        <FluidRow>
            {#if !small}
                <FluidBox size=".1">&nbsp;</FluidBox>
            {/if}
            <FluidBox size="{small ? 'auto' : 0.5}">
                <div class="kkk">AAAA teamsdkfljalksj ljkdslkfj lksjdflkj ldskjflksdjf</div>
            </FluidBox>
            <FluidBox size="{small ? 'auto' : 0.5}">
                <div class="kkk">AAAA teamsdkfljalksj ljkdslkfj lksjdflkj ldskjflksdjf</div>
            </FluidBox>
            {#if !small}
                <FluidBox size=".1">&nbsp;</FluidBox>
            {/if}
        </FluidRow>
        <SpacerTitle title="KONTAKT"></SpacerTitle>
        <FluidRow>
            <FluidBox size=".1">&nbsp;</FluidBox>
            <FluidBox size=".3">xx</FluidBox>
            <FluidBox size=".3">xx</FluidBox>
            <FluidBox size=".3">xx</FluidBox>
            <FluidBox size=".1">&nbsp;</FluidBox>
            <FluidBox size=".1">&nbsp;</FluidBox>
        </FluidRow>
    {/if}

    <div style="font-size: 14px">
        {w}x{h} {small}
    </div>

</Layout>

<style>

    .kkk {
        padding: 30px;
    }

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
