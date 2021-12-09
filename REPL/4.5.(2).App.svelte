<!-- 4.5. {#each}로 JSON 객체 다루기, 다차원 배열 표시하기 - 다차원 배열 표시하기 -->

<script>
    // 배열을 요소로 갖는 2차원 배열 선언
    let emailCard = [
        ["_id", "a1"] ,
        ["name", "둘리"] ,
        ["email", "d2@mail.com"] ,
        ["age", 10]
    ];
</script>

<main>
    <!-- 2차원 배열의 요소(하위 배열) 개수만큼 실행 -->
    {#each emailCard as [key, value], idx}     <!-- 하위 배열 각 요소의 이름을 지어줌 -->
        <p>{idx}번째 키: {key}의 값은 {value}</p> <!-- 요소의 이름을 사용하여 출력 -->
    {/each}
</main>
