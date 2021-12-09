<!-- 6.3. 체크 박스 바인딩하기 -->

<script>
    let editable = false; // 보기/수정 모드 바인딩 변수
    let favorite = "스벨트";
</script>

<main>
    <input type=checkbox bind:checked={editable}> 수정하려면 체크하세요
    <!-- editable 변수와 바인딩 -->
    {#if editable} <!-- true일 때 동작 -->
        <p> 수정 모드: <input bind:value={favorite}> </p>
    {:else}        <!-- false일 때 동작 -->
        <p> 보기 모드: {favorite} </p>
    {/if}   
</main>
