<script>
    import SpacerTitle from './SpacerTitle.svelte';
    import FluidBox from './fluidBox.svelte';
    import FluidRow from './fluidRow.svelte';

    export let small = false
    export let i18n

</script>
<SpacerTitle title="{i18n.CONTACT}"/>
<FluidRow>
    <FluidBox size=".1">&nbsp;</FluidBox>
    <FluidBox size=".3">xx</FluidBox>
    <FluidBox size=".3">xx</FluidBox>
    <FluidBox size=".3">xx</FluidBox>
    <FluidBox size=".1">&nbsp;</FluidBox>
    <FluidBox size=".1">&nbsp;</FluidBox>
</FluidRow>
