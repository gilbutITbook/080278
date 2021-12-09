<!-- 4.4. {#each} 루프 안에서 인덱스 사용하기 - each를 활용한 select box 예 -->

<script>
    let colors = ["빨강", "노랑", "파랑", "보라"]; // 반복 출력할 배열
</script>

<main>
    <ul>
        <!-- 배열의 요소 개수만큼 반복 실행 -->
        {#each colors as color, idx}  <!-- 반복 횟수 변수 idx 선언 -->
            <li>{idx}: {color}</li>   <!-- 배열의 요소를 li로 출력 -->
        {/each}
    </ul>
</main>
