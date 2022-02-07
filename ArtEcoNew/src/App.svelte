<script>

    //TODO v.talas
    /*

    - index view => gallery view

     */

    // copy(Array.from(document.getElementsByTagName('img')).map((i, item) => {
    //
    //     return {
    //         src: i.getAttribute('src'),
    //         attrs: {}
    //     };
    //
    // }).filter(item => item.src.includes('.jpg')))
    const items = [
        {
            "src": "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__480.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2021/08/20/14/53/monastery-6560623__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921297__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2016/11/24/20/30/architecture-1857175__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2014/09/24/16/28/bricks-459299__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2018/04/28/10/55/architecture-3357028__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2014/01/18/10/14/vaulted-cellar-247391__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg",
            "attrs": {}
        },
        {
            "src": "https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798__340.jpg",
            "attrs": {}
        }
    ]

    const galleries = [
        { name: 'Byt policistky', items },
        { name: 'Asdljflskdjjf ', items },
        { name: 'Bsdljflskdjjf ', items }
    ]


    import { fade, fly } from 'svelte/transition';

    export let name;

    let text = 'edit me';

    let indexView = true;
    let tile = 'Mezi stavarinou a umenim';

    import Top from './top.svelte';
    import Layout from './layout.svelte';
    import FluidBox from './fluidBox.svelte';
    import FluidRow from './fluidRow.svelte';
    import GalleryLayout from './GaleryLayout.svelte';

    let w, h;
    $: small = w < 800

    function handleMessage(event) {

        const { name } = event.detail;
        indexView = !name;

        if (indexView) {
            tile = 'Mezi stavarinou a umenim'
        } else {
            tile = name
        }

        console.log(event.detail);
    }

</script>

<Layout>

    <div class="section header" bind:clientWidth={w} bind:clientHeight={h}>
        <Top/>
    </div>

    <FluidRow>
        <FluidBox size=".5">
            <h1>{tile}</h1>
            <p>
                Relizace staveb a interiérů s důrazem na dokolanou preciznost provedení. Loeoadslflkj alksdflj laskdflkj
                kadskfljlas
            </p>
        </FluidBox>
        <FluidBox size=".5">ss</FluidBox>
    </FluidRow>
    <FluidRow>
        <GalleryLayout
                galleries="{galleries}"
                on:message="{handleMessage}"
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

    <div style="font-size: 14px">     {w}x{h} {small}  </div>

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
