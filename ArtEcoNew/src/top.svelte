<style>
    .logo {
        width: 120px;
    }

    .claim {
        margin-left: auto;
    }

    .burger {
        width: 40px;
        background-color: #999999;
        text-align: center;
    }

</style>


<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

</script>


<img class="logo" src="/assets/barevne_pozitivni.svg" alt="" on:click={()=>dispatch('logo-click')}/>
<span class="claim">volejte +420 123456 789</span>
<span class="burger">|||</span>
