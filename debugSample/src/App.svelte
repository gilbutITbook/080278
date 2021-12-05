<script>
    export let name = "world"; 
    
    console.log(name);   // 1. 일반 디버깅 코드

    $:console.log(name); // 2. 리액티브 디버깅 코드
</script>

<input type=text bind:value={name}>
<!-- {@debug name} --> <!-- name 값 확인 -->
<h1>Hello {name}!</h1> 
