<script>
    // svelte를 임포트 하고 createEventDispatcher 함수를 꺼냄
    import {createEventDispatcher} from "svelte"; 
    const dispatch = createEventDispatcher();  // dispatch 함수 생성하기

    let searchText = ""; //input 박스와 바인딩
    
    // Search 버튼 이벤트 처리 함수
    function searchEventHandler(){ 
        // 커스텀 이벤트 searchClicked 발생
        dispatch("searchClicked",{
            text: searchText // 커스텀 이벤트에 데이터를 실어 보내기
        });
        console.log("클릭 이벤트 발생");
        searchText = ""; // input 박스 초기화
    }
</script>

<input type="text" bind:value={searchText}> <!-- searchText와 바인딩된 input 박스 -->

<button on:click={searchEventHandler}> Search </button> <!-- 클릭하면 searchEventHandler 함수가 호출됨 -->
