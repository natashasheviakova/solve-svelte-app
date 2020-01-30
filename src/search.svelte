<script>
  export let className
  export let placeholder
  export let inputClassName
  import cn from 'classnames';
  import Icon from 'svelte-icon'
  import search from './images/search-icon.svg';
</script>

 <div class={cn(className, 'self-center')}>
    <div class='relative'>
    <div class='search-icon absolute left-0 ml-3 pin-y-center mt-6 h-5 w-5'>
      <Icon data={search} width='20' height='20' viewBox='0 0 20 20' />
    </div>
    <input
        data-testid='profile-search'
        placeholder={placeholder}
        class={` ${inputClassName} h-10 pl-10 rounded-sm transition transition-width`}
        value=''
    />
    </div>
</div>