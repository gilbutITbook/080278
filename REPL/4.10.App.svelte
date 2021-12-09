<!-- 4.10.  {@html}로 돔에 HTML 엘리먼트 생성하기 -->

<script>
    //게시글 형태의 JSON 정의
    var post = {
        title: "가장 빨리 만나는 스벨트",
        content: "<span style='color:red'>스벨트</span>는 정말 <b>재미있어요</b>"
    }
</script>

<div>
    <h1>{post.title}</h1> <!-- 일반 출력 -->
    {@html post.content}  <!-- {@html} 표현식 사용하여 출력 -->
</div>
