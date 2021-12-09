<!-- 14.  애니메이션 -->

<script>
  import {flip} from "svelte/animate"; // flip 사용 선언
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 카드 번호 배열 
  // 섞기 버튼 이벤트 처리 함수
  function shuffle(){
      // 카드 번호 배열을 섞음
      numbers = numbers.sort(()=> 0.5 - Math.random());
  }
</script>

<button on:click={shuffle}> 섞기 </button> <!-- 클릭 시 카드를 섞음 -->
<div>
  <!-- 버튼에 flip 효과를 적용 -->
  {#each numbers as number (number)}
     <button animate:flip>{number}</button>
  {/each}
</div>
