<!-- 5.6. 배열의 변화 감지하기 -->

<script>
    // 배열 선언 후 할당
    let colors = ["빨강", "주황", "노랑", "초록"];
  
    // 센서의 감지와 그에 따라 동작(Reactive Statements)할 코드
    $: console.log("log.1: ", colors);

    function assignment() {
        colors.pop(); //배열의 색상을 한개 지움
        colors = colors; // 할당 트리거로 감지 코드가 동작 예상됨
        console.log("log.2: ", colors); //지워진 상태를 콘솔에 출력
    }
</script>
  
<p>{colors.join(", ")} 모두 {colors.length} 개의 색이 있습니다.</p>
<button on:click={assignment}>할당</button>
