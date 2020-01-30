<script>
  import { onDestroy } from 'svelte';
  import { curRoute } from './store';
  import router from './router';
  let component;
  const unsubscribe = curRoute.subscribe(value => {
    component = router.filter(r => r.path === $curRoute)[0].component;
  })
  onDestroy(unsubscribe);
</script>

<div class="flex-grow w-full mx-auto mt-0 max-w-container px-6">
  <div class='my-3'>
    <svelte:component this={component} />
  </div>
</div>