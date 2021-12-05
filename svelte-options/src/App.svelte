<script>
    import Todo from "./Todo.svelte";
    //할일목록 배열
    let todos = [
        { id: 1, done: "완료", text: "세차하기" },
        { id: 2, done: "진행", text: "정원 산책" },
        { id: 3, done: "진행", text: "잔디 깍기" }
    ];
    let refObj; // Todo의 this를 저장할 변수	
</script>

<button on:click={()=>{
    refObj.count = 100; // 직접 수정해봅니다
}}>Todo props 접근하기</button>

<h2>Accessors 테스트</h2>
<Todo todo={todos[0]} bind:this={refObj}/> <!-- 인스턴스의 this를 바인딩 -->

<button on:click={()=>{
    todos[1] = { id: 2, done: "완료", text: "정원 산책" }; //done을 "진행"에서 "완료"로 바꿈
    todos = todos; //명시적 할당
}}>정원 산책 완료 </button>

<h2>Immutable 테스트</h2>
{#each todos as todo}
    <Todo bind:todo={todo}/>
{/each}
