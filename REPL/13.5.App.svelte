<!-- 13.5.  로컬 트랜지션 -->

<script>
  // fade 사용 선언
  import { fade } from "svelte/transition";
  let grandparent = true; // 할아버지, 할머니 #if 블록 토글 변수
  let parent = true; // 부모님 #if 블록 토글 변수
</script>

<p><input type="checkbox" bind:checked={grandparent}>할아버지, 할머니</p>
<p><input type="checkbox" bind:checked={parent}>부모님</p>
{#if grandparent} <!-- 할아버지, 할머니 -->
  {#if parent}  <!-- 부모님 -->
      <p transition:fade> 형 - 어른 말씀 잘 들음 </p>
      <p transition:fade|local> 동생 - 부모님 말만 듣는 local </p>
  {/if}
{/if}
