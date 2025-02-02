<script lang="ts">
    import { onMount } from 'svelte';
  
    let value: string = $state('');
  
    onMount(() => {
      document.getElementById('calendar')?.addEventListener('uk-calendar:change', (e) => {
        // @ts-ignore
        value = e.detail.value;
      });
    });
  </script>
  
  <div class="uk-container mt-20 grid grid-cols-2 gap-4">
    <div>
      <div class="uk-h3">Form</div>
      <div class="mt-4">
        <uk-calendar id="calendar"></uk-calendar>
      </div>
    </div>
    <div>
      <div class="uk-h3">Result</div>
      {#if value}
        The date is: {value}
      {/if}
    </div>
  </div>