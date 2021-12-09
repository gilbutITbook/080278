<!-- 6.5. textarea 바인딩하기 -->

<script>
    import marked from "marked"; // 마크다운 임포트
    let markdown = "# 타이틀 \n\n- 리스트1\n- 리스트2\n- 리스트3"; // 변수 선언
  </script>
  
  <!-- 마크다운 텍스트에어리어 선언하기 -->
  <textarea bind:value={markdown} placeholder="내용 입력"/>
  <!-- 마크다운을 HTML로 변환하고 돔에 디스플레이 하기 -->
  <div class="preview">{@html marked(markdown)}</div>
  
  <style>
      textarea {
          height: 40%;
          width: 100%;
          margin: 0;
          border: none;
      }
      .preview {
          height: 60%;
          padding: 20px;
          border-top: solid 2px gray;
      }
  </style>
  