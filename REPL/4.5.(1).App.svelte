<!-- 4.5. {#each}로 JSON 객체 다루기, 다차원 배열 표시하기 - Object.entries와 each를 사용해 JSON 내용 표시하기 -->

<script>
    // JSON 객체 선언
    let emailCard = { _id: "a1", name: "둘리", email: "d2@mail.com", age: 10};

    // 콘솔에서 Object.entries 호출 결과 보기
    console.log(Object.entries(emailCard)); 
</script>

<main>
    <!-- Object.entries의 반환값(배열)으로 반복 실행 -->
    {#each Object.entries(emailCard) as [key, value], idx}
        <p>{idx}번째 키: {key}의 값은 {value}</p> <!-- 키와 값 출력 -->
    {/each}
</main>
