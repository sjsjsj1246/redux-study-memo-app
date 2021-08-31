## dependencies

- axios: 프로미스 기반 HTTP Client
- immutable: 임뮤터블 데이터 관리를 위한 도구
- open-color: 색상 라이브러리
- react-click-outside: 컴포넌트 바깥 클릭을 감지해주는 라이브러리
- react-icons: SVG 아이콘 세트
- react-immutable-proptypes: immutable 을 위한 proptypes
- redux, react-redux, redux-actions: 리덕스 관련
- redux-pender: 비동기 리덕스 액션 관리 라이브러리
- react-textarea-autosize: 자동으로 리사이징되는 textarea 컴포넌트
- react-transition-group: 애니메이션을 위한 리액트 라이브러리
- styled-components: JS 내부에서 컴포넌트 스타일링을 도와주는 라이브러리
- 
- cross-env: 환경변수를 모든 운영체제에서 호환되는 형태로 설정해주는 라이브러리axios: 프로미스 기반 - HTTP Client

## 정리

스니펫 설정

rexp
```json
{
	"Re-export module as": {
		"prefix": "rexp",
		"body": [
			"export { default as $1 } from './$1';"
		],
		"description": "Re-exports the ES6 module"
	},
}
```
