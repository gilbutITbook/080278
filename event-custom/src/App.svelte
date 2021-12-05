<script>
    // SearchButton 컴포넌트 임포트
    import SearchButton from "./SearchButton.svelte";

	//이벤트 포워딩 컴포넌트 임포트
    import Contents from "./Contents.svelte"; 

	// 돔 이벤트 포워딩 컴포넌트 임포트
    import SimpleButton from "./SimpleButton.svelte"; 

    let searchText = ""; // 하위 컴포넌트 데이터를 저장하고 출력할 변수 선언
    const customSearch = (event) => {
        searchText = event.detail.text; // 하위 컴포넌트 데이터를 꺼내서 searchText로 저장
    }
    const simple = (event) => { // SimpleButton 이벤트 처리 함수
        alert("simple~!");
    }
</script>

<!-- 하위 컴포넌트의 커스텀 이벤트 다루기 -->
<p>
    <!-- 커스텀 이벤트 searchClicked의 이벤트 처리를 customSearch 함수로 연결 -->
    <SearchButton on:searchClicked={customSearch}/>
    <!-- 하위 컴포넌트에서 받은 데이터를 출력 -->
    <br>{searchText==""?"검색어를 입력 후 Search 버튼을 클릭하세요":"검색어: " + searchText}
</p>

<!-- 이벤트 포워딩 -->
<p>
    <!-- 하위 컴포넌트 SearchButton에서 발생한 이벤트를 customSearch로 연결 -->
    <Contents on:searchClicked={customSearch}/>
    <!-- 하위 컴포넌트 SearchButton에서 받은 데이터를 출력 -->
    <br><br>{searchText==""?"검색어를 입력 후 Search 버튼을 클릭하세요":"검색어: " + searchText}
</p>

<!-- 돔 이벤트 포워딩 -->
<p>
    <!-- 컴포넌트 내부 버튼의 이벤트 처리를 simple 함수로 연결 -->
    <SimpleButton on:click={simple}/>
</p>
