<script>
  import { onMount } from "svelte";
  import isElectron from "is-electron";

  /// Used to have comms with electorn ///

  // onMount(()=> {
  // 	if(isElectron()){

  // 		window.ipcRenderer.on('asynchronous-reply', (event, arg) => {
  // 			console.log(arg) // prints "pong"
  // 		})
  // 		window.ipcRenderer.send('asynchronous-message', 'ping')
  // 		window.ipcRenderer.on('pong', (event, arg) => {
  // 			console.log(arg)
  // 		})
  // 		// window.ipcRenderer.send('ping')
  // 	}
  // })
</script>

<svelte:head>
  <title>ParaLog</title>
</svelte:head>
