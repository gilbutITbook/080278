<script>
    // 클릭 횟수 저장 변수
    let count = 0 
    // 버튼 이벤트 처리 함수
    const search = (event) => {
        console.log(event.target); // 이벤트 대상을 출력
        count = count + 1; 
    }
</script>

<button on:click={search}>
    Search ({count}) <!-- 클릭 횟수를 버튼에 표시 -->
</button>

<!-- 인라인으로 이벤트 처리하기  -->
<button on:click={(event) =>{ 
    console.log(event.target); 
    count = count + 1; 
}}>
Search Inline ({count})
</button>

<!-- 이벤트 제한자 사용하기  -->
<button on:click|once={search}> <!-- 한 번만 호출되는 once -->
    Search Once ({count})
</button>
