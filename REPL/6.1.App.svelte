<!-- 6.1. 텍스트 / 텍스트 입력 값 바인딩하기 -->

<script>
    let name = "world";
</script>

<main>
    <!-- 스크립트 변수 name을 HTML input 값으로 바인딩 -->
    <input type="text" value="{name}"> 
    <!-- 스크립트 변수 name을 HTML h1의 텍스트로 바인딩 -->
    <h1>Hello {name}!</h1> 
</main>
