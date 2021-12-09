<!-- 5.7. JSON 객체의 변화 감지하기 -->

<script>
    // 원본 JSON 객체 정의
    let man = {
          age: "10",
          name: { first: "승현", last: "박" }
    };
    let name = man.name; // name으로 man.name 복사

    function assignment() {
        man.name.last = "park";  // 원본 JSON 객체의 last 값을 "박"에서 "park"으로 변경
        console.log(name.last);  // 복사본의 값이 변경되었는지 확인
        name = name;             // 할당 트리거로 감지 코드 동작
    }
</script>
  
<p>man.name.last: {man.name.last}</p> <!-- 원본 JSON 객체 man 으로 접근한 last의 값 출력 -->
<p>name.last: {name.last}</p>         <!-- 참조 변수 name 으로 접근한 last의 값 출력-->
<button on:click={assignment}>할당</button> <!-- 동작 확인 트리거 -->
