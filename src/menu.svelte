<script>
  import cn from 'classnames';
  import Link from './link';
  export let className;

  const menuItems = [
  {
    url: '/',
    text: 'Profiles'
  },
  {
    url: '/transactions',
    text: 'Transactions'
  },
  {
    url: '/query-engine',
    text: 'Query Engine'
  },
  {
    url: '/access-control',
    text: 'Access Control'
  }
];
</script>

<ul class={cn('reset-list my-0 x-5 p-0', className)}>
  {#each menuItems as menu}
    <li class='inline-block'>
      <Link page={{path: menu.url, name: menu.text}} className='menu-item px-5 inline-block align-middle lh-16 relative text-greisher hover:text-white' />
    </li>
  {/each}
</ul>