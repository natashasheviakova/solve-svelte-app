<script>
  let name = 'Neil Capel';
  function handleClick() {
		name = 'upgrade Neil Capel'
	}
</script>

<div class='rounded border border-solid border-grey-light'>
  <table class='w-full rounded-sm'>
    <thead class='bg-grey-lightest border-b border-solid border-grey-light'>
      <tr>
        <th class="p-3 text-left">Name</th>
        <th class="p-3 text-left">Email</th>
        <th class="p-3 text-left">First Seen</th>
        <th class="p-3 text-left">Last Seen</th>
        <th class="p-3 text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-blue-lightest">
        <td class="p-3">
          {name}
        </td>
        <td class="p-3"><a href="/">neil@solvedata.io</a></td>
        <td class="p-3"><a href="/">2020-01-06</a></td>
        <td class="p-3"><a href="/">2020-01-06</a></td>
        <td class="p-3"><button on:click|once={handleClick}>Change name</button><div>
    </tbody>
  </table>
</div>