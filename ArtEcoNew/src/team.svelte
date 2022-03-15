<script>
    import SpacerTitle from './SpacerTitle.svelte';
    import FluidBox from './fluidBox.svelte';
    import FluidRow from './fluidRow.svelte';

    export let small = false;
    export let i18n;

</script>
<style>
    .kkk {
        padding: 30px;
    }
</style>

<SpacerTitle title="{i18n.TEAM}"/>
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
