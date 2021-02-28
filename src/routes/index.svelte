<script context="module">
  export function preload({ params, query }) {
  return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
  return { posts };
  });
}
</script>

<script>
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Functions are coming...');
    
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(json => console.log(json))
  });

  export let posts
</script>

<h1>We are live!</h1>

<figure>
  <img alt='Borat' src='yeah.png'>
  <figcaption>Let's go!</figcaption>
</figure>

<p><strong>You can edit me in /src/routes/index.svelte!</strong></p>

<h2>Recent posts</h2>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li><a rel='prefetch' href='/blog/{post.slug}'>{post.title}</a></li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  h1, figure, p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
