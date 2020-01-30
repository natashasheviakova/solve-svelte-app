<script>
  export let className
  export let placeholder
  export let inputClassName
  import cn from 'classnames';
</script>

<styles>
</styles>

 <div class={cn(className, 'self-center')}>
    <div class='relative'>
    <input
        data-testid='profile-search'
        placeholder={placeholder}
        class={` ${inputClassName} h-10 pl-10 rounded-sm transition transition-width`}
        value=''
    />
    </div>
</div>