<script>
    import SpacerTitle from './SpacerTitle.svelte';
    import FluidBox from './fluidBox.svelte';
    import FluidRow from './fluidRow.svelte';

    export let small = false
</script>


<SpacerTitle title="SLUŽBY" />

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
