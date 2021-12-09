<!-- 4.9. {#key 표현식} 하위 컴포넌트 {/key} 2/2 -->

<script>
    // 라이프 사이클 함수 임포트 및 사용 선언
    import {afterUpdate, beforeUpdate, onDestroy, onMount} from "svelte";
    onMount(() => console.log("Component 생성됨")); //컴포넌트 생성 시 동작 정의
    onDestroy(() => console.log("Component 파괴됨")); //컴포넌트 파괴 시 동작 정의

    export let name; 
</script>

<p>
    hello {name}
</p>
