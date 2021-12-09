<!-- 6.12.  하위 컴포넌트 데이터 바인딩 2/2 - List.svelte -->

<script>
    export let list_todos = []; // 외부와 연결된 할 일 배열
</script>

<ul><!-- 할 일 리스트 -->
    {#each list_todos as item}
        <li>{item}</li>
    {/each}
</ul>
