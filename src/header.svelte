<script>
  import Logo from './logo';
  import Search from './search';
  import Menu from './menu';
  import ProfileDropdown from './profileDropdown';
</script>

<header class='z-50 bg-black-darker px-6 items-center w-full flex flex-wrap shadow-md'>
  <div class='flex order-first flex-grow md:flex-grow-0 h-16'>

  <a class='items-center order-first flex-none hidden sm:flex w-24 mr-6 h-16' href='/'>
    <Logo />
  </a>

  <Search
    className='flex-grow self-center mr-3 h-16 lg:w-72'
    placeholder='Search for email address'
    inputClassName='bg-grey-darkest text-white outline-none w-full my-2 h-12'
  />
  </div>
  <Menu className='flex items-center flex-grow h-16 w-full md:w-auto order-last md:order-2' />
  <ProfileDropdown className='flex-none items-center h-16 order-2 md:order-last' />
</header>
