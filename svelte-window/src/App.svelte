<script>
    // window 속성 바인딩용 변수
    let innerWidth;
    let innerHeight;

    // 이벤트 처리 함수
    function handleKeydown(event) {
        alert(event.key + "키를 누르셨군요");
    }
</script>

<!-- window 객체에 창 크기 속성, 키 다운 이벤트를 바인딩함 -->
<svelte:window bind:innerWidth bind:innerHeight on:keydown={handleKeydown}/>

<!-- 속성값 바인딩 결과 출력 -->
<p>innerWidth:{innerWidth}</p>
<p>innerHeight:{innerHeight}</p>
