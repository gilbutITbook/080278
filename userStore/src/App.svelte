<script>
    // 1. count 꺼내기
    import { count } from "./store.js";
    import { onDestroy } from "svelte";

	import { get } from "svelte/store";  //get 함수 꺼내기   
    console.log( get(count) );           // 호출 결괏값 출력

    // 2. 버튼 활성/비활성 값 선언
    let disabledD = false; 
    let disabledI = false; 

    // 3. count 구독 구현, count의 값이 100이상 1이하 disable
    const unsub = count.subscribe((v) => {
        disabledI = v>=100 ? true: false;
        disabledD = v<=1 ? true: false;
    })

    // 4. 구독 종료 구현
    onDestroy(unsub);
</script>

<main>
    <!-- 5. 기존 예제와 동일 -->
    <section>
        <h1>카운트는 {$count}입니다</h1>
        <input type=range bind:value={$count} step=1 min=1 max=100>
    </section>

    <!-- 6. 버튼 클릭 이벤트와 count.decrement / count.increment 바인딩 -->
    <section>
        <button disabled={disabledD} on:click={count.decrement}>카운드 감소</button>
        <button disabled={disabledI} on:click={count.increment}>카운드 증가</button> 
    </section>
</main>
