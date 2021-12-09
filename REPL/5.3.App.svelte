<!-- 5.3. 센서 생성과 동작 정의 -->

<script>
    // 반응형 변수 선언 후 값 할당
    let count = 10;
    // count 값의 변화 감지와 그에 따른 동작 코드, '이 아니라 `(백틱)를 사용하는 데 주의
    $: console.log(`count는 ${count}입니다`);
</script>
