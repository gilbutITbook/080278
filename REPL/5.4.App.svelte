<!-- 5.4. 할당을 통한 트리거 만들기 -->

<script>
    // 반응형 변수 선언 후 값 할당
    let count = 10;
    // count 값의 변화 감지와 그에 따른 동작 코드, '이 아니라 `(백틱)를 사용하는 데 주의
    $: console.log(`count는 ${count}입니다`);
    function addCount() {
        count = count + 1;   // 트리거!!
    }
</script>
<!-- 버튼의 클릭 이벤트를 addCount 함수와 연결 -->
<button on:click={addCount}>카운트는 {count}입니다</button>
