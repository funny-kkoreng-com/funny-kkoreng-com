# funny-kkoreng-com

`funny.kkoreng.com` 도메인을 담당하는 Next.js 앱. 첫 화면에 프로젝트 목록을 보여주고,
각 경로를 개별 Vercel 프로젝트로 rewrite 한다 (Next.js multi-zones).

```
funny.kkoreng.com/                  → 이 앱 (프로젝트 목록)
funny.kkoreng.com/<project-name>/*  → <project-name>.vercel.app/<project-name>/*
```

## 새 프로젝트 추가하기

1. 새 Next.js 프로젝트의 `next.config.ts`에 `basePath: "/<project-name>"` 설정
2. 그 프로젝트를 Vercel에 배포하고 기본 주소 확인 (예: `https://<project-name>.vercel.app`)
3. 이 저장소의 `projects.ts`에 한 줄 추가 → rewrite와 첫 화면 카드가 같이 생김
4. 커밋 & 푸시 → Vercel이 자동 배포

> `basePath`, `projects.ts`의 `path`, Vercel 주소가 서로 맞아야 한다. 안 맞으면 JS/CSS가 404가 난다.

## 최초 설정

- Vercel에서 이 저장소를 Import (Next.js 자동 인식, 설정 그대로)
- 프로젝트 Settings → Domains 에 `funny.kkoreng.com` 추가
- kkoreng.com DNS에 Vercel이 안내하는 레코드 추가 (보통 `CNAME funny → cname.vercel-dns.com`)
