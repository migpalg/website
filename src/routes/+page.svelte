<script>
  import { clsx } from "clsx";
</script>

<div class={clsx("max-w-2xl", "mx-auto", "my-24", "px-4")}>
  <h1
    class={clsx(
      "text-6xl",
      "md:text-8xl",
      "font-black",
      "font-display",
      "mb-4",
      "relative",
      "overflow-hidden",
    )}
  >
    Hello<span class="text-emerald-500">!</span>
  </h1>
  <p class={clsx("font-sans", "text-lg", "text-stone-300")}>
    I'm <b>Miguel</b>, a Senior Full-Stack engineer.
  </p>
</div>
