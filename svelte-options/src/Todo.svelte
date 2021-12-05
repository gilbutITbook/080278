<svelte:options immutable={true} accessors={true}/> <!-- accessors 옵션 추가 -->

<script>
    import { afterUpdate } from "svelte";
    export let todo;
    export let count = 0; //export 선언으로 변경

    // 컴포넌트 업데이트 확인용
    afterUpdate(() => {
        count++;
    });
</script>

<p>[{todo.done}] {todo.text} ({count})</p>
