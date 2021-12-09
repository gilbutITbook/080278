<!-- 13.2.  파라미터 이용하기 -->

<script>
    // circIn 효과 사용 서언
    import { circIn } from "svelte/easing";
    // 트랜지션 함수 사용 선언
    import { blur, fade, fly, scale, slide } from "svelte/transition";
    // 토글을 위한 변수 선언
    let show = true;
    // fly에 설정할 옵션을 저장한 변수 선언
    let options = {duration: 1000, easing: circIn};
</script>
   
  <!-- 클릭 이벤트 처리 -> show 토글 -->
  <button on:click={() => show = !show}>
    Toggle
  </button>
  {#if show}
    <h1 transition:fade={options}>fade는 점점 사라집니다</h1>
    <h1 transition:blur={options}>blur는 뿌옇게...</h1>
    <!-- fly에 추가 옵션을 줌 -->
    <h1 transition:fly={{...options, x: 150}}>fly는 날아다녀요</h1>
    <h1 transition:slide={{options}}>slide 커튼처럼</h1>
    <h1 transition:scale={options}>멀어지며 작아지는 scale</h1>
  {/if}
