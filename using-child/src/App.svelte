<!-- 스크립트 블록 -->
<script>
    import CustomSelect from "./CustomSelect.svelte";
    
    // 개발자 A의 코드
    // 개발자 B의 코드
	let fruit = "apple";
    // 개발자 C의 코드
    let color = "yellow";
    let colorList = [
        { code:" red",    desc: "빨강" },
        { code: "yellow", desc: "노랑" },
        { code: "green",  desc: "초록" },
        { code: "orange", desc: "주황" } 
    ]; 
    // spread
    let param = {   
        choice: "yellow",
        list: [
                    { code: "red", desc: "빨강" },
                    { code: "yellow", desc: "노랑" },
                    { code: "green", desc: "초록" },
                    { code: "orange", desc: "주황" }
                ]
    };
</script>

<!-- HTML 블록 -->
<main>
    <ul>
        <!-- 개발자 A의 HTML 코드 -->
        <li>개발자 A: <CustomSelect/> </li>
        <!-- 개발자 B의 HTML 코드 -->
        <li>개발자 B: <CustomSelect bind:choice={fruit}/> - {fruit} 선택됨 </li>
        <!-- 개발자 C의 HTML 코드 -->
        <li>개발자 C: <CustomSelect list={colorList} bind:choice={color}/> - {color} 선택됨
        </li>
        <li>spread: <CustomSelect {...param}/> - { param.choice } 선택됨 </li>		
	</ul>
</main>