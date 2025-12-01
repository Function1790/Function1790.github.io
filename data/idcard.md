# 임시 학생증
<desc>개발 기간|2023-08-27 ~ 2023-09-07</desc>
<desc>프레임워크|Express, Flask</desc>
<desc>프로젝트 유형|사이드 프로젝트</desc>
<desc>역할|백엔드, 프론트엔드</desc>
<desc>소스코드|<a>https://github.com/Function1790/Temporary-Student-Card-Service</a></desc>
## 소개
이 프로젝트는 학생증을 분실했거나 재발급이 번거로운 학생들을 위해 모바일 웹 기반 임시학생증 발급 시스템을 개발한 프로젝트 입니다. 바코드의 생성 원리를 탐구하고, 실제 학생증에 쓰이는 Code128 바코드를 출력하는 **API 서버(Flask)**와 이를 이용해 임시학생증을 보여주는 **웹 서버(Express)**를 각각 구축하였습니다. 사용자는 이름과 학번으로 로그인하면, 개인 고유번호를 기반으로 생성된 바코드가 포함된 모바일 학생증을 확인할 수 있습니다. 이를 통해 급식 인증이나 도서관 이용 등 학생증이 필요한 활동을 간편하게 처리할 수 있도록 하였습니다.

## 기술
---
- Express
- Flask
- Creating Barcode Image
- Small MSA Deployment
- Json-based Database
- Analyzing and Generalizing Student ID Data
- Deploy with Cloudtype