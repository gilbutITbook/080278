<!-- 6.12.  하위 컴포넌트 데이터 바인딩 1/2 - App.svelte -->

<script>
    import { onMount } from "svelte";
    import List from "./List.svelte"; // List 컴포넌트 임포트
    onMount(async () => {
        todoInput.focus();      
    });

/* 1. 변수 선언하기 */
    let todos = []; // 할 일을 저장하는 배열
    let todoInput;  // this 바인딩용 변수
    let todo = "";  // 텍스트 바인딩용 변수
 
/* 3. 함수 구현 */
    const add = () => {     /* 할 일 추가 함수 */
        if(todo.replaceAll(" ", "")==""){
            alert("값을 입력하세요"); 
            todoInput.focus();
        }else{
            todos.push(todo);
            todos = todos;
            todo = "";
            todoInput.focus();
        }
    }
    const remove = () => {  /* 전부 삭제 함수 */
        todos = [];
        todoInput.focus();
    }
</script>

<!-- 2. HTML 블록 작성 -->
<input type=text bind:this={todoInput} bind:value={todo}>
<!-- add 함수와 연결된 추가 버튼 -->
<button on:click={add}>추가</button>

<List list_todos = {todos}/>

<!-- remove 함수와 바인딩 된 전부 삭제 버튼 -->
<button on:click={remove}>전부 삭제</button>
