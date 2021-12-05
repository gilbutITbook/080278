<script>
    // SearchButton 컴포넌트 임포트
    import SearchButton from "./SearchButton.svelte";
    // svelte를 임포트 하고 createEventDispatcher 함수를 꺼냄
    import {createEventDispatcher} from "svelte"; 
    // dispatch 함수 생성하기
    const dispatch = createEventDispatcher();  
  
    function forward(event) {
      //이벤트 명, 데이터 모두 SearchButton과 같은 형태로 넘겨줍니다
      dispatch("searchClicked", event.detail); 
    }
</script>
<h2>Contents</h2>
<!-- SearchButton 커스텀 이벤트 searchClicked의 이벤트 처리를 forward 함수로 연결 -->
<SearchButton on:searchClicked={forward}/>
