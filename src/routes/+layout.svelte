<script lang="ts">
  import clsx from "clsx";

  import "@fontsource-variable/nunito-sans";
  import "../app.css";

  let { children } = $props();
</script>

{#snippet link(href: string, text: string)}
  <a
    {href}
    class={clsx(
      "text-stone-600",
      "hover:text-stone-300",
      "duration-300",
      "ease-in-out",
    )}
  >
    {text}
  </a>
{/snippet}

<header class="py-4 mt-24">
  <nav class={clsx("flex", "gap-4", "max-w-2xl", "mx-auto", "px-4")}>
    {@render link("/", "home")}
    {@render link("/blog", "blog")}
  </nav>
</header>

{@render children()}
