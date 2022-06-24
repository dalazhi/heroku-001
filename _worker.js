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
      const SingleDay = 'dalazhi-vm01.herokuapp.com'
      const DoubleDay = 'dalazhi-vm02.herokuapp.com'
      let host = ''
      let nd = new Date();
      if (nd.getDate()%2) {
          host = SingleDay
      } else {
          host = DoubleDay
      }
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname=host;
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
