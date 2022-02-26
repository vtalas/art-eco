<style>
    .main {
        width: 100%;
        max-width: 1168px;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
        /*border: 1px solid darkred;*/
    }

    @media only screen and (max-height: 1200px) {

        .main {
            max-width: 960px;
        }
    }

    @media only screen and (max-height: 800px) {

        .main {
            max-width: 680px;
        }
    }

    @media only screen and  (max-height: 640px) {

        .main {
            max-width: 440px;
        }
    }

</style>

<div class="main">
    <slot/>
</div>
