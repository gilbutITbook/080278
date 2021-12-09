<!-- 13.4.  트랜지션 이벤트 정의하기 -->

<script>
  // fly 사용 선언
  import { fly } from "svelte/transition"; 

  let visible = true; // 토글을 위한 변수 선언
  let status = "이벤트 기다리는 중.."; // 상태 출력을 위한 변수
</script>

<p>이벤트 상태: {status}</p> <!-- 이벤트 상태 출력 -->

<label>
  <!-- 클릭 이벤트 처리 -> show 토글 -->
  <input type="checkbox" bind:checked={visible}>
  visible
</label>

{#if visible} <!-- visible 값에 따라 랜더링 -->
  <!-- 이벤트 처리 함수 안에서 현재 상태를 업데이트 -->
  <p
      transition:fly="{{ y: 200, duration: 2000 }}"
      on:introstart="{() => status = '등장 시작'}"
      on:introend="{() => status = '등장했어요'}"
      on:outrostart="{() => status = '퇴장 시작'}"
      on:outroend="{() => status = '퇴장했어요'}"
  >
      트랜지션 이벤트 처리하기
  </p>
{/if}
