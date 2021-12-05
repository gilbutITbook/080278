import { MongoClient } from "mongodb"; // mongodb 임포트
import { nanoid } from "nanoid";       // 랜덤 문자열 발생시켜주는 nanoid 추가

import { connectionString } from "$lib/dbURL.js"; // dbURL 추가
const uri = connectionString;                     // 문자열 꺼내기

export async function get(request){
    const client = new MongoClient(uri);         // client 객체 생성
    let scoreList = [];                          // 결과 저장 배열
    try {
        await client.connect();                  // db 연결
        const db = client.db("brainColor");      // brainColor 데이터베이스로 이동
       
        /* 데이터 가져오기 처리 코드 작성하기 */
        scoreList = await db.collection("score")     // 조회 대상 컬렉션
                            .find()                  // 조회 함수
                            .sort( { score: -1 } )   // sort 옵션 
                            .limit(10)               // 10건만 가져오기
                            .toArray();              // 배열로 변환        
        return {
            status:200,
            body: {
                list: scoreList
            }
        }
    } catch (e){
        return {
            status:500,
            body: {
                list: [],
                msg: e.message
            }
        }
    } finally {
        await client.close();
        console.log("데이터베이스 Close");
    }
}

export async function put(request){
    const client = new MongoClient(uri);         // client 객체 생성
    let rtn = {};                                // 결과 저장 객체
    let score = JSON.parse(request.body);        // request body를 객체로 변환

    /* 입력 형식 체크 */
    if(!score.name || !score.score){
        console.log(score);
        throw "잘못된 형식입니다.";
    }
    score["_id"] = nanoid();

    try {
        await client.connect();                  // 데이터베이스 연결
        const db = client.db("brainColor");      // brainColor 데이터베이스로 이동
       
        /* 데이터 저장하기 코드 작성하기 */
        rtn = await db.collection("score").insertOne(score); // db insert

        return {
            status:200,
            body: {
                result: rtn
            }
        }

    } catch (e){
        return {
            status:500,
            body: {
                msg: e.message
            }
        }
    } finally {
        await client.close();
        console.log("데이터베이스 Close");
    }
}
