<!-- 4.3. {#each ...}를 사용해 배열 표시하기 -->

<script>
    let colors = ["빨강", "노랑", "파랑", "보라"]; // 반복 출력할 배열
</script>

<main>
    <ul>
        <!-- 배열의 요소 개수만큼 반복 실행 -->
        {#each colors as color} 
            <li>{color}</li>    <!-- 배열의 요소를 li로 출력 -->
        {/each}
    </ul>
</main>
