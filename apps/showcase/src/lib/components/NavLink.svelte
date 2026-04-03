<script lang="ts">
  export let href: string
  export let active = false
  export let label: string
  export let onNavigate: (path: string) => void

  function handleClick(event: MouseEvent) {
    event.preventDefault()
    onNavigate(href)
  }
</script>

<a
  {href}
  on:click={handleClick}
  class={`rounded-full px-4 py-2 text-sm font-medium transition ${
    active
      ? 'bg-white/12 text-white shadow-lg shadow-slate-950/30'
      : 'text-slate-300 hover:bg-white/8 hover:text-white'
  }`}
>
  {label}
</a>
