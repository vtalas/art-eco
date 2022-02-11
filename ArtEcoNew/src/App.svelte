<script>

    import { fade, fly } from 'svelte/transition';

    let indexView = true;

    export let defaultTitle;
    export let galleries;
    export let selectedGallery;

    import Top from './top.svelte';
    import Layout from './layout.svelte';
    import FluidBox from './fluidBox.svelte';
    import FluidRow from './fluidRow.svelte';
    import GalleryLayout from './GaleryLayout.svelte';

    let w, h;
    $: small = w < 800
    let title = defaultTitle;

    function onGalleryClick(event) {

        const { name } = event.detail;
        selectedGallery = name;
        indexView = !name;
        updateTitle(name);
    }

    function navigateHome() {
        indexView = false;
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
            <h1>{title}</h1>
            <p>
                Relizace staveb a interiérů s důrazem na dokolanou preciznost provedení. Loeoadslflkj alksdflj laskdflkj
                kadskfljlas
            </p>
        </FluidBox>
        <FluidBox size=".5">ss</FluidBox>
    </FluidRow>
    <FluidRow>
        <GalleryLayout
                selectedGallery="{selectedGallery}"
                galleries="{galleries}"
                on:gallery-click="{onGalleryClick}"
        ></GalleryLayout>
    </FluidRow>

    {#if indexView}
        <div class="title">sluzby</div>

        <FluidRow>
            {#if !small}
                <FluidBox size=".1">a</FluidBox>
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
                <FluidBox size=".1">a</FluidBox>
            {/if}
        </FluidRow>
        <div class="title">team</div>
        <FluidRow>
            {#if !small}
                <FluidBox size=".1">a</FluidBox>
            {/if}
            <FluidBox size="{small ? 'auto' : 0.5}">
                <div class="kkk">AAAA teamsdkfljalksj ljkdslkfj lksjdflkj ldskjflksdjf</div>
            </FluidBox>
            <FluidBox size="{small ? 'auto' : 0.5}">
                <div class="kkk">AAAA teamsdkfljalksj ljkdslkfj lksjdflkj ldskjflksdjf</div>
            </FluidBox>
            {#if !small}
                <FluidBox size=".1">a</FluidBox>
            {/if}
        </FluidRow>
        <FluidRow>
            {#if !small}
                <FluidBox size=".1">a</FluidBox>
            {/if}
            <FluidBox size="{small ? 'auto' : 0.5}">
                <div class="kkk">AAAA teamsdkfljalksj ljkdslkfj lksjdflkj ldskjflksdjf</div>
            </FluidBox>
            <FluidBox size="{small ? 'auto' : 0.5}">
                <div class="kkk">AAAA teamsdkfljalksj ljkdslkfj lksjdflkj ldskjflksdjf</div>
            </FluidBox>
            {#if !small}
                <FluidBox size=".1">a</FluidBox>
            {/if}
        </FluidRow>
        <div class="title">kontakt</div>
        <FluidRow>
            <FluidBox size=".1">.</FluidBox>
            <FluidBox size=".3">xx</FluidBox>
            <FluidBox size=".3">xx</FluidBox>
            <FluidBox size=".3">xx</FluidBox>
            <FluidBox size=".1">.</FluidBox>
        </FluidRow>
    {/if}

    <div style="font-size: 14px">
        {w}x{h} {small}
    </div>

    {#if indexView}
        <p transition:fade>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to
            build
            Svelte apps.</p>
        <p transition:fly="{{ y: 200, duration: 2000 }}">
            Flies in and out
        </p>
        <p in:fly="{{ y: 200, duration: 2000, intro: true }}" out:fade>
            Flies in, fades out
        </p>
    {/if}

</Layout>

<style>

    .kkk {
        padding: 30px;
    }

    .title {
        text-align: center;
    }

    .section.header {
        display: flex;
        align-items: center;
        padding: 1rem 0;
    }

</style>
