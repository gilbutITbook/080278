<!-- 6.2. input에 숫자 값 바인딩하기 -->

<script>
    let name = "world";
    let size = 30; // 크기 바인딩 변수
</script>

<main>
    <!-- range의 값을 size 변수와 양방향 바인딩 -->
    <input type="range" bind:value={size} min=0 max=100><br/>

    <!-- numer의 값을 size 변수와 양방향 바인딩 -->
    <input type="number" bind:value={size} min=0 max=100><br/>

    <!--h1의 폰트 크기를 size 변수와 양방향 바인딩 -->
    <h1 style="font-size:{size}px;"> Hello {name}! </h1> 
</main>
