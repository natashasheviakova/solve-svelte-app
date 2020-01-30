<script>
	export let className;
	import cn from 'classnames';
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
	<div className='mx-3 h-full justify-center hidden lg:flex lg:flex-col'>
		<div
		className='text-grey-light text-right text-sm'
		data-testid='profile-username'
		>
		Petrovich
		</div>
		<div
		className='text-grey-dark text-right text-xs font-light'
		data-testid='profile-companyname'
		>
		Vodka Ltd
		</div>
	</div>
	</a>
</div>

