<script>
    // 컴포넌트 임포트
    import Hoverable from "./Hoverable.svelte";
</script>

<Hoverable>
    <!-- let:으로 hovered props 사용을 선언 -->
    <h2 slot="user" let:hovered={isFocused} class:hovered={isFocused}>
        홍길동{#if isFocused}님 반갑습니다!!{/if}
    </h2>
</Hoverable>
<Hoverable>
    <!-- let:으로 hovered props 사용을 선언 -->
    <h2 slot="user" let:hovered class:hovered> <!-- 생략해서 사용, 같은 결과 -->
        김길동{#if hovered}님 오랜만이어요!!{/if}
    </h2>
</Hoverable>

<style>
    .hovered {
        font-style: italic;
        color:brown;
    }
</style>
