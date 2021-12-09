// 1. writable 스토어 꺼내기
import { writable } from "svelte/store";

// 2. 사용자 정의 스토어 만드는 함수 구현
function createCount() {

    // 2.1 writable 풀어 헤치기
    const cnt = writable(1);
    
    // 2.2 새로운 객체 형태로 재조합 (increment / decrement / reset 추가) 후 반환
    return {
        subscribe: cnt.subscribe,                 // 기본 subscribe 사용
        set      : cnt.set,                       // 기본 set 사용
        update   : cnt.update,                    // 기본 set 사용
        increment: ()  => cnt.update(n => n + 1), // update를 사용한 확장 기능 increment 구현
        decrement: ()  => cnt.update(n => n - 1), // update를 사용한 확장 기능 decrement 구현
        reset    : ()  => cnt.set(1)              // set을 사용한 확장 기능 reset 구현
    };
}

// 3. export 
export const count = createCount();
