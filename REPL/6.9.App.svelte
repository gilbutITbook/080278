<!-- 6.9.  Media의 속성값 바인딩하기 -->
<!-- 스크립트 블록 -->
<script>
    let paused = true;    // 정지, 시작 여부 기본값은 정지
    let currentTime = 0;  // 플레이어 최초 시작 시간
    let duration;         // 영상의 총 길이
    let volume = 0.5;     // 볼륨
    let muted = false;    // 소리 꺼짐
    let playbackRate = 1; // 재생 속도, 기본이 1

    function format(seconds) {
        if (isNaN(seconds)) return "...";
        let minutes = Math.floor(seconds / 60);    // 분
        seconds = Math.floor(seconds % 60);        // 분을 제외한 나머지 초
        if (seconds < 10) seconds = '0' + seconds; // 초가 1자리 일경우 앞에 0을 붙임
        return `${minutes}:${seconds}`;
    }
</script>

<!-- video 엘리먼트 영역 -->
<video
    src="https://ppillip.github.io/github.io/unity2d.mp4"
    bind:paused
    bind:currentTime
    bind:duration
    bind:volume
    bind:muted
    bind:playbackRate>
    <track kind="captions"/>
</video>

<!-- 컨트롤러 영역 -->
<div class="controller">
    <!-- 프로그레스 바 -->
    <input class="progress" type=range bind:value={currentTime} min=0 max={duration} step=0.001/>

    <div class="time">
        <span>{format(currentTime)}</span><!-- 진행 시간 -->
        <span>{format(duration)}</span>   <!-- 전체 시간 -->
    </div>
    <br/>

    <!-- 제어 패널 -->
    <div class="controls">
        <!-- 시작 / 정지 버튼 -->
        <button on:click={()=>{paused = !paused;}}>{#if paused} 시작 {:else} 정지 {/if}</button>
        <!-- 재생 속도 조절 -->
        <select bind:value={playbackRate}>
            <option value={0.25}>0.25배속</option>
            <option value={0.5}>0.5배속</option>
            <option value={1}>1배속</option>
            <option value={2}>2배속</option>
            <option value={3}>3배속</option>
        </select>

        <!-- 건너뛰기 기능 버튼 -->
        <button on:click={()=>{currentTime = currentTime - 5}}> &lt; 5초 </button>
        <button on:click={()=>{currentTime = currentTime + 5}}> 5초 &gt; </button>

        <!-- 소리 끄기 버튼 -->
        <button on:click={()=>{muted = !muted;}}>{#if muted} 소리켜기 {:else} 쉿! {/if}</button>

        <!-- 볼륨 조절 -->
        <input type=range bind:value={volume} min=0 max=1 step=0.01 /> 볼륨: {volume}
    </div>
</div>

<!-- 스타일 블록 -->
<style>
    video, .controller, .progress, .controls {
        width: 100%;
    }
    
    .time {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .controls>input {
        vertical-align:middle;        
    }
</style>
