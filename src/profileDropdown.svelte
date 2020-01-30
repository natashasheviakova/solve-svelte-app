<script>
  export let className;
  import cn from 'classnames';
  import Icon from 'svelte-icon'
  import profile from './images/profile-icon.svg';
</script>

<style>
  .dropdown {
    transition: background-color 0.3s linear, color 0.1s linear;
    user-select: none;
  }
</style>

<div class={cn('relative', className)}>
  <a
    href='/'
    class={cn(
      'dropdown flex flex-row h-full cursor-pointer hover:text-white'
    )}
  >
  <div class='mx-3 h-full justify-center hidden lg:flex lg:flex-col'>
    <div
      class='text-grey-light text-right text-sm text-white'
      data-testid='profile-username'
      >
      Petrovich
    </div>
    <div
      class=' text-right text-xs font-light text-white'
      data-testid='profile-companyname'
    >
      Vodka Ltd
    </div>
  </div>
  <div class='mt-3'>
    <Icon data={profile} width='36' height='36' viewBox='0 0 36 36' />
  </div>
  </a>
</div>

