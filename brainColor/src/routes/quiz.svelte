<script>
    import { goto } from "$app/navigation";          // 화면 이동을 위한 goto 함수 사용 선언
    import { score, quizList } from "$lib/store.js"; // 스토어 변수 사용 선언

    // 문제를 풀고 있는 중인지 여부를 저장, false: 게임 설명 모드 / true: 문제 풀기 모드
    let isRunning = false;

    // list 변수 선언, 스토어 quizList 값으로 할당
    let list = $quizList; 

    // 현재 퀴즈의 list 순번을 저장, 초깃값은 -1
    let idx = -1;

    // 현재 퀴즈의 문제와 정답을 저장함, 최초에는 공백문제
    let current = null;

    // 현재 문제의 진행 상태, 보너스 점수
    let bonus = 100;

    // 누적 점수는 스토어 변수를 사용함
    $score = 0;

    // timer 핸들러, 보너스 점수를 제어할 타이머를 저장
    let timer;

    // 화면에 영어를 한글로 변환 시 필요한 객체 선언
    let kolor =  {
        red   : "빨강",
        orange: "주황",
        yellow: "노랑",
        purple: "보라",
        green : "초록",
        black : "검정",
        blue  : "파랑",
        brown : "갈색",
        gray  : "회색",
        pink  : "분홍",
    }

    // 시작하기
    function start(){
        list.sort(()=>Math.random()-0.5); // list에 있는 문제를 랜덤으로 섞음
        alert("준비됐나요?");
        $score = 0;             // 누적 점수를 0으로 초기화
        next();                 // 문제 출제 시작!
        isRunning = true;       // 모드를 문제 풀기로 변경
    }

    // 문제를 출제하는 함수
    function next(){
        idx = idx + 1;
        if(idx==list.length){    // 더 이상 문제가 없으면
            stop();              // stop 호출
        }else{                   // 문제가 남아 있으면
            current = list[idx]; // list에서 새로운 문제 꺼냄
            current.choice.sort(()=>Math.random()-0.5); // 선택지를 랜덤으로 섞음
            current = current;   // 리액티비티를 위한 할당 
            resetProgress();     // 프로그레스 리셋 함수 호출
        }
    }

    // 프로그레스 동작 함수, 보너스 점수 계산
    function resetProgress(){
        clearInterval(timer);         // 이전 타이머 초기화 
        bonus = 100;                  // 보너스 100점으로 시작
        timer = setInterval(function(){
            bonus = bonus - 1;        // 보너스를 1점씩 감소 시킴
            if(bonus==0){             // 보너스 점수가 0이 되면 
                clearInterval(timer); // 타이머 초기화
            }                    
        },40)                         // 1점 감소 주기 40밀리 초
     }

    // 멈추기, 그만하기
    function stop(){
        idx = -1;             // 초깃값으로 변경
        clearInterval(timer); // 타이머 해제
        current = null;       // 초깃값으로 변경
        isRunning = false;    // 초깃값으로 변경
        alert("수고하였어요. 총 점수는"+$score+"입니다.");
        goto("/save");        // 점수 저장 화면으로 이동
    }

    // 홈으로
    function goHome(){
        goto("/");
    }

</script>

<svelte:head>
    <title>게임 하기</title>
</svelte:head>

<!-- 화면 영역-->
{#if !isRunning}
    <!-- 게임 설명 모드 -->
    <h1 style="text-align:center">게임하는 방법</h1>
    <p>
        <b>1. 문제로 주어진 텍스트에 배경색이 [없을] 경우</b><br>
        -> 문제의 텍스트와 선택지의 글자색이 같은 것을 고릅니다<br><br>
        
        <b>2. 문제로 주어진 텍스트에 배경색이 [있을] 경우</b><br>
        => 문제의 배경색과 선택지의 텍스트가 같은 것을 고릅니다<br><br>

        tip: 빨리 맞출수록 점수가 많아요!! 늦게 맞춰도 점수는 있으니 진행바에 쫄지 마세요.<br><br>
        준비되었나요? 이제 시작 버튼을 누르고 도전!!
    </p>
{:else}
    <!-- 문제 풀기 모드 구현 -->
    <!-- 총 점수, 보너스, 현재 문제 번호 -->
    <p>총 점수: {$score}</p>
    <div style="width:100%">
        <progress style="width:100%" value={bonus} max="100"></progress>
    </div>
    <p></p>
    <p>{idx+1} 번 문제!</p>

    <!-- 문제와 선택지 -->
    {#if idx%2==0}
        <!-- [색깔 찾기] -->
        <div style="color:{current.question.color};background-color:white;" 
             class="question">
             {kolor[current.question.text]}
        </div>
        {#each current.choice as item}
            <button style="color:{item.color};background-color:white;" 
                    class="choice"
                    on:click={()=>{
                    $score = $score 
                          + ( current.question.text==item.color ? 10 + bonus: 0 );
                    next();
            }}>{kolor[item.text]}</button>
        {/each}
    {:else}
        <!-- [텍스트 찾기] -->
        <div style="color:white;background-color:{current.question.color};" 
             class="question">
             {kolor[current.question.text]}
        </div>
        <p></p>
        {#each current.choice as item}
            <button style="color:white;background-color:{item.color};"
                    class="choice"
                    on:click={()=>{
                    $score = $score 
                          + ( current.question.color==item.text ? 10 + bonus: 0 );
                    next();
            }}>{kolor[item.text]}</button>
        {/each}
    {/if}
{/if}

<!-- 하단 버튼 영역 -->
<p style="text-align:center;">
    {#if isRunning} <!-- 게임 중이면 그만하기 버튼 보이기 -->
    <button style="width:45%;height:60px;font-weight:bold;font-size:30px"
            on:click={stop}>그만하기</button>
    {:else} <!-- 게임 중이 아니면 시작 버튼 보이기 -->
    <button style="width:45%;height:60px;font-weight:bold;font-size:30px"
            on:click={start}>시작</button>
    {/if}
    <button style="width:45%;height:60px;font-weight:bold;font-size:30px"
            on:click={goHome}>홈으로</button>
</p>

<style>
    .question {
        margin: 0 auto;                  /* 텍스트 가운데 정렬 */
        text-align:center;
        text-shadow: 1px 1px 1px #000; /* 텍스트 테두리로 배경색과 분리되어 보이게 함 */
        font-weight:bold;                /* 볼드체 */
        font-size:60px;                  /* 폰트 크기 */
        width:150px;                     /* div 크기 */
    }
    .choice {
        text-shadow: 1px 1px 1px #000; /* 텍스트 테두리로 배경색과 분리되어 보이게 함 */
        width:50%;                       /* 버튼 가로 길이(상대적) */
        height:150px;                    /* 버튼 세로 길이 */
        font-weight:bold;                /* 볼드체 */
        font-size:50px;                  /* 텍스트 크기 */
    }
</style>
