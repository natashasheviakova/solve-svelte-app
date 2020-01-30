<script>
  export let className;
  import cn from 'classnames';
</script>

<style>
</style>
 <footer class={cn('bg-grey-lightest text-center w-full py-6', className)}><slot/></footer>

