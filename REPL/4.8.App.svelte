<!-- 4.8. {#key 표현식} HTML {/key} -->

<script>
    let name = 'world'; 
</script>

<input type=text bind:value={name}> <!-- 1. name을 변경하기 위한 코드 -->

<p>{Date()}</p> <!-- 2. 비교용 시각 -->

{#key name}
    <p>{Date()}</p> <!-- 3. 렌더링될 때 시각을 확인하기 위한 코드 -->
    <h1>Hello {name}!</h1> 
{/key}
