<!-- 4.9. {#key 표현식} 하위 컴포넌트 {/key} 1/2 -->

<script>
    import Component from "./Component.svelte"; // 1. 하위 컴포넌트 임포트하기
    let name = "world"; 
</script>

<input type=text bind:value={name}>


{#key name} 
     <!-- <Component name={name}/> --> <!-- 2. 컴포넌트 인스턴스 생성하기 -->
{/key}
<Component name={name}/> <!-- 3. #key 블록 밖에서 컴포넌트 인스턴스 생성하기 -->
