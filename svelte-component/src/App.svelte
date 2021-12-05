<script>
    // 선택적으로 랜더링하게 될 컴포넌트를 임포트
    import Read from "./Read.svelte";
    import Write from "./Write.svelte";
    import Modify from "./Modify.svelte";
    
    // 랜더링할 수 있는 컴포넌트를 배열로 저장하는 변수
    const modes = [
        { mode: "읽기", component: Read   },
        { mode: "쓰기", component: Write  },
        { mode: "수정", component: Modify },
    ];

    // current의 값을 기준으로 컴포넌트를 랜더링, 기본 값을 mode의 0번째 요소로 설정
    let current = modes[0]; 
    let text = "가장 빨리 만나는 스벨트";
</script>

<!-- 셀렉트 박스의 선택에 따라 current 변수의 값을 modes 배열의 요소로 설정 -->
<select bind:value={current}>
    {#each modes as mode}
        <option value={mode}>{mode.mode}</option>
    {/each}
</select>

<!-- this와 스크립트 블록의 current.component를 바인딩, content와 text와 바인딩 -->
<svelte:component this={current.component} content={text}/>
