<script>
  import { onMount } from "svelte";
  import isElectron from "is-electron";
  import Card from "../components/card";

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

  let items = [
    {
      title: "Basic",
      price: 9.99,
      items: ["Upload GPX or FIT data to server"],
    },
    {
      title: "Premium",
      price: 30.99,
      items: ["Real time flight logging", "Full featured app", "lorem"],
    },
  ];
</script>

<svelte:head>
  <title>ParaLog</title>
</svelte:head>

<div>
  <div class="flex flex-wrap">
    {#each items as data,i}
      <!-- content here -->
      <Card {data} {i}/>
    {/each}
  </div>
</div>
