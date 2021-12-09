<!-- 13.1.  트랜지션 지시자 -->

<script>
    // 트랜지션 함수 사용 선언
    import { blur, fade, fly, scale, slide } from "svelte/transition";
    // 토글을 위한 변수 선언
    let show = true;
</script>

<!-- 클릭 이벤트 처리 -> show 토글 -->
<button on:click={() => show = !show}>
Toggle
</button>
{#if show} <!-- show 의 값이 true 일때 랜더링 -->
    <h1 transition:fade>fade는 점점 사라집니다</h1>
    <h1 transition:blur>blur는 뿌옇게...</h1>
    <h1 transition:fly>fly는 날아다녀요</h1>
    <h1 transition:slide>slide 커튼처럼</h1>
    <h1 transition:scale>멀어지며 작아지는 scale</h1>
{/if}