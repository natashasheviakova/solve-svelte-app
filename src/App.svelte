<script>
  import Tailwindcss from './Tailwindcss';
  import Header from "./header";
  import Footer from "./footer";
  import Route from './route';
</script>

<Tailwindcss />

<style>
  #root {
    min-height: 100vh;
      min-width: 100vw;
  }
</style>

<div id='root'>
  <div class='min-h-screen flex flex-col'>
    <Header />
    <Route />
    <Footer>© Solve Data Inc</Footer>
  </div>
</div>
