<script>
    export let showArtist;

</script>
<div class="overlay"  on:click={() => showArtist = ""}>
    <div class="modal">
        <div class="cover" style="background-image:url({showArtist.imgUrl})">
        </div>
        <p>{showArtist.bio}</p>
        <ul>
            {#each showArtist.social as network}
                <li><a href="{network.url}">{network.name}</a></li>
            {/each}
        </ul>

    </div>
   
</div>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .modal {
        width: 40%;
        height: max-content;
        background: white;
    }

    .cover {
        text-align: left;
        padding: 15px;
        height: 400px;
        background-position: top;
        background-size: cover;
        box-shadow: 0 0 200px rgba(0,0,0,0.5) inset;
    }

    p {
        margin: 0;
        padding: 15px;
        text-align: left;
        color: black;
        font-size: 1.3em;
        font-weight: 600;
    }
    ul {
        display: flex;
        justify-content: space-around;
        margin-bottom: 15px;
    }
    li {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.8em;
        color: black;
        list-style: none;
    }
    li a {
        text-decoration: none;
        color: black;
    }
</style>