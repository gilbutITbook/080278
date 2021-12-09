<!-- 13.3.  in/out 사용하기 -->

<script>
  // fade와 fly 사용 선언
  import { fade, fly } from "svelte/transition";
  let visible = true; // 토글을 위한 변수 선언
</script>

<label>
  <input type="checkbox" bind:checked={visible}>
  visible
</label>

{#if visible} <!-- visible 값에 따라 랜더링 -->
  <p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
      아래서 날아 들어오고, 조용히 사라져라!
  </p>
{/if}
