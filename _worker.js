/*export default {
async fetch(request, env) {
const cars = [
"dalazhi-vm.herokuapp.com",
"dalazhi-vm01.herokuapp.com",
"dalazhi-vm02.herokuapp.com",
"dalazhi-vm03.herokuapp.com"
]; 
*/
export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="dalazhi-vm.herokuapp.com";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };

