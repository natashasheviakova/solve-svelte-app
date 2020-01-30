<script>
  import { curRoute } from './store';
  import cn from 'classnames';
  export let page;
  export let className;
  function redirectTo(event){
    // change current router path
    curRoute.set(event.target.pathname);
    // push the path into web browser history API
    window.history.pushState({path: page.path}, '', window.location.origin + page.path);
  }
</script>

<style>
  a {
    padding: 1.3rem;
    color: #fff;
  }

  .menu-item{
    position: relative;
  }

  .menu-item:hover::after,
  .menu-item-active::after {
    bottom: 0;
    display: block;
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    right: 0;
  }
  .menu-item:hover::after,
  .menu-item-active::after {
    background-color: theme('colors.teal-light');
  }

</style>

<a class={cn('text-white', className)} href={page.path} on:click|preventDefault={redirectTo}>{page.name}</a>