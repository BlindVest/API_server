import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './api/Router'

const app: express.Application = express()
dotenv.config({ path: '../.env' })
const port = process.env.PORT || 3000
const corsOptions: object = {
  origin: '*'
}

const urlencodedOptions: object = {
  extended: true
}

app.use(router)
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded(urlencodedOptions))
app.set('trust proxy', true)

app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]', ` Server on  : ${port}`)
})

// 서버는 chul0721.iptime.org:8080 으로 열렸습니다 ㄹㅇㅋㅋ mireu.iptime.org?
// 저 미르 따라서 이거 해놓은거임
// 아접속은 당연히 안되죠
// 아 맞다 윈도우 초기화해서 방화벽 생겼겠구나
// 다시 열었으니까 이제 될듯ㅇㅇ
// ㄴㄴ 맥으로 할땐 됐었음 심지어 80도 아니라 8080인데 아될게 뭐가있음 히히
// 맥으로 웹소켓까지 열었는데 아 ㅋㅋ
// 아 맥 귀찮아
// ㄴㄴ 라쉐랑 ㄴ상관
// 아 맥 키기 귀찮다고요 헤헿ㅎㅎ
// 안해 시발 그냥 맥 킬게요 
// http://allpgs.iptime.org/ 이거 접속 되는 분 구해요
// 3000으로 새로 열었더니 네트워크 에러 나고 난리남 ㅋㅋㅋㅋ
// 뭐임? 불안하게 왜 그럼 아닠 내부 ip ㄷ
// 작업용 org 새로 파려고요 admin으로 님들 초대함
// http://192-168-75-169.dev-server.kro.kr/ 이거 되는 사람? 안됨 ㅅㅂㅋㅋㅋㅋㅋㅋㅋㅋ