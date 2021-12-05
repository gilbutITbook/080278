<script>
    import { spring } from "svelte/motion";
    // 원(circle)의  위치 좌표에 바인딩할 스토어
    let coords = spring({ x: 50, y: 50 }, {
        stiffness: 0.1,  // (따라오는 속도): 느림 0 <-> 1 빠름
        damping  : 0.5,  // (멀어지는 거리): 넓음 0 <-> 1 좁음
        precision: 0.3   // (튕겨지는 횟수): 많음 0 <-> 1 적음
    });
    // 원의 r(지름)값과 바인딩할 스토어 생성 
    let size = spring(10);
    // coords.subscribe(v=>console.log(v.x, v.y));
</script>

<style>
    svg { width: 100%; height: 100%; margin: -8px;  } /* 원이 올라갈 svg 스타일 */
    circle { fill: #080808 } /* 원의 색상 */
</style>

<!-- 마우스 움직임 : 좌표 , 업, 다운 이벤트 발생 시 -->
<svg
    on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY})}"
    on:mousedown="{() => size.set(30)}"
    on:mouseup="{() => size.set(10)}"
>
    <!-- 원의 좌표와 크기를 coords와 size로 바인딩 -->
    <circle cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>
