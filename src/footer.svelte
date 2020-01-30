<script>
  export let className;
  import cn from 'classnames';
</script>

 <footer class={cn('bg-grey-lightest text-center w-full py-6', className)}><slot/></footer>

