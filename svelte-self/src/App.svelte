<script>
    // 카테고리 컴포넌트 임포트
    import Category from "./Category.svelte";
    // 카테고리 데이터 category를 정의함
    let category = {
        name: "취급상품",
        sub: [
            {
                name: "컴퓨터",
                sub: [
                        {name: "테스크탑"}
                       ,{name: "노트북"}
                ]
            },
            {
                name: "식품관",
                sub: [
                        {
                            name: "과일",
                            sub: [{name: "수박"}, {name: "바나나"},
                                  {name: "키위"}, {name: "딸기"}]
                        },
                        {
                            name: "야채",
                            sub: [
                                    {name: "당근"}, {name: "호박"}
                                ]
                        }
                    ]
            }
            ,{name: "특가상품"}
        ]
    };
</script>
    
<Category category={category}/>
