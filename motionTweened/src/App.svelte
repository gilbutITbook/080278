<script>
    // tweened 사용 선언
    import { tweened } from "svelte/motion";
    // easing 효과 중 cubicIn 사용 선언
    import { cubicIn } from "svelte/easing";
    // tweened를 통하여 progress 스토어 생성, duration 옵션 사용
    const progress = tweened(0, {
        duration: 1000
    });

   // cubicIn 옵션 설정을 추가하여 스토어 생성
   const progress2 = tweened(0, {
        duration: 1000,
        easing: cubicIn // cubicIn 옵션 설정
    });

    // 스토어의 값이 변하는 추이를 보기 위해 로그 출력
    progress.subscribe(v=>console.log(v));
</script>

<style>
    progress { width: 100%; }
</style>
<progress value={$progress}></progress> <!-- 프로그레스 바 -->
<progress value={$progress2}></progress><!-- cubicIn 예제 프로그레스바 -->
<button on:click="{() => { // 0으로 움직이게 하는 버튼
    $progress=0;
    $progress2=0; // cubicIn 설정된 스토어 값 변경
}}">0%</button>
<button on:click="{() => { // 0.5로 움직이게 하는 버튼
    progress.set(0.5);
    progress2.set(0.5); // cubicIn 설정된 스토어 값 변경
}}">50%</button>
<button on:click="{() => { // 1로 움직이게 하는 버튼
    progress.set(1);
    progress2.set(1); // cubicIn 설정된 스토어 값 변경
}}">100%</button>
