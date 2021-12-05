<script>
    // 카테고리 데이터를 props로 선언
    export let category;
</script>

<ul>
    <li>
        <!-- 카테고리 정보 표시 (기본 기능)-->
        {category.name}
        <!-- 하위 카테고리가 있을 경우 (종료 조건)-->
        {#if category.sub}
            ({category.sub.length})
            {#each category.sub as item}
                    <!-- 리스트 데이터에서 추출하여 재귀 함수 호출 -->
                    <svelte:self category={item}/>
            {/each}
        {/if}
    </li>
</ul>
