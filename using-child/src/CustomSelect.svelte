<!-- 스크립트 블록 -->
<script>
    // 초기 선택, 강제 선택을 위한 변수
    export let choice = "";

    // 과일 배열 list 정의, export 선언 추가
    export let list = [
        { code: "apple", desc: "사과" },
        { code: "kiwi", desc: "키위" },
        { code: "mango", desc: "망고" },
        { code: "strawberry", desc: "딸기" }
    ];
</script>

<!-- HTML 블록 -->
<!-- main -->
<select bind:value={choice}> <!-- 과일 select 박스 -->
    <option value="">선택하세요</option>
    {#each list as item}
       <option value={item.code}>{item.desc}</option>
    {/each}
</select>
<!-- /main -->
<!-- 스타일 블록 -->
<style>
</style>
