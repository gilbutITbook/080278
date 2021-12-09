<!-- 4.6. Promise와 {#await ...} 블록 사용하기 -->

<script>
    // async 함수 정의
    async function promiseFunc(){
        const result = new Promise((resolve, reject) => {
            // 비동기 함수 setTimeout 실행 부분
            setTimeout(()=>{
                //resolve("Hello Universe~!"); // 1초 후 실행
                reject(new Error("reject입니다")); // reject 테스트
            },1000);
        });
        const rtn = await result; // resolve 호출 때 까지 기다림
        return rtn;
    }
	    let myPromise = promiseFunc(); // 1. 최초 호출하기 
</script>

<!-- 2. 버튼 만들어 호출하기 -->
<button on:click={() => myPromise = promiseFunc() }> async 함수 호출하기 </button>

<main>
    <!-- 3. 비동기 함수 결과로 바꾸기 -->
    {#await myPromise}
        <h1>잠시만 기다리세요.. </h1>
    {:then res}
        <h1>{res}</h1>
    {:catch error}
        <h1>Error: {error.message}</h1>
    {/await}
</main>
