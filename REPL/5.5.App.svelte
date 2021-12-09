<!-- 5.5. 센서의 사용하는 네가지 패턴 -->

<script>
    // 반응형 변수 선언 후 값 할당
    let count = 0;
    // count 값의 변화 감지와 그에 따른 동작 코드, '이 아니라 `(백틱)를 사용하는 데 주의
    // $: console.log(`count는 ${count}입니다`);
    // 센서 1번. 한 줄 구문에 반응형 변수가 있을 때 
    $: console.log("1. 한 줄 구문: ", count);
    
    // 센서 2번. 코드 블록 안에 반응형 변수가 있을 때
    $: {
        count;
        console.log("2. 코드 블록: count가 변경됨");
    };
    
    // 센서 3번. if 조건에 반응형 변수가 있을 때
    $: if(count>0) {
        console.log("3. if 조건: count가 0보다 크다");       
    }
    
    // 센서 4번. for loop 안에 반응형 변수가 있을 때 루프 실행 
    $: for(let i = 0; i < 4; i++) {
        count;
        console.log("4. for loop 안에 count 값 변경됨 for: ", i); 
    }
    
    function addCount() {
        count = count + 1;   // 트리거!!
    }
</script>

<!-- 버튼의 클릭 이벤트를 addCount 함수와 연결 -->
<button on:click={addCount}>카운트는 {count}입니다</button>
