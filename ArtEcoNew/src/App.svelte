<script>

    import { fade, fly } from 'svelte/transition';

    export let name;

    let text = 'edit me';

    let visible = true;
    let tile = 'Mezi stavarinou a umenim'
    const toggle = function() {
        visible = !visible
        if (visible) {
            tile = 'Mezi stavarinou a umenim'
        } else {
            tile = 'Byt policistky'
        }
    }

    import Top from './top.svelte';
    import Layout from './layout.svelte';
    import FluidBox from './fluidBox.svelte';
    import FluidRow from './fluidRow.svelte';

    let w, h;
    $: small = w < 800
</script>

<Layout>

    {w}x{h} {small}
    <div class="section header" bind:clientWidth={w} bind:clientHeight={h}>
        <Top/>
    </div>

    <FluidRow>
        <FluidBox size=".5">
            <h1>{tile}</h1>
        </FluidBox>
        <FluidBox size=".5">ss</FluidBox>
    </FluidRow>

    {#if visible}
        <div class="title">sluzby</div>

        <FluidRow>
            {#if !small}
                <FluidBox size=".1">a</FluidBox>
            {/if}

            <FluidBox size="{small ? 'auto' : 0.6}">
                <p>dlksfjldk jlakjskdlfj ajsdlfj; lkasjf lkasjdfl;k asdjf l;kjsdlkfj </p>
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

    <h1 on:click={toggle}>Hello {name}!</h1>

    {#if visible}
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
