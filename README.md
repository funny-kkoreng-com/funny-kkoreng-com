# funny-kkoreng-com

`funny.kkoreng.com` 도메인을 담당하는 프로젝트. 각 경로를 개별 Vercel 프로젝트로 rewrite 한다.

```
funny.kkoreng.com/                  → 이 프로젝트의 index.html (프로젝트 목록)
funny.kkoreng.com/<project-name>/*  → <project-name>.vercel.app/<project-name>/*
```

## 새 프로젝트 추가하기

1. 새 Next.js 프로젝트의 `next.config.ts`에 `basePath: "/<project-name>"` 설정
2. 그 프로젝트를 Vercel에 배포 (예: `<project-name>.vercel.app`)
3. 이 저장소의 `vercel.json`에 rewrite 두 줄 추가

   ```json
   { "source": "/<project-name>", "destination": "https://<project-name>.vercel.app/<project-name>" },
   { "source": "/<project-name>/:path*", "destination": "https://<project-name>.vercel.app/<project-name>/:path*" }
   ```

4. `index.html`의 `PROJECTS` 배열에 카드 추가
5. 커밋 & 푸시 → Vercel이 자동 배포

> `basePath`, rewrite 경로, Vercel 주소의 이름이 정확히 같아야 한다. 다르면 JS/CSS가 404가 난다.

## 최초 설정

- Vercel에서 이 저장소를 Import (Framework Preset: **Other**, 빌드 설정 없음)
- 프로젝트 Settings → Domains 에 `funny.kkoreng.com` 추가
- kkoreng.com DNS에 `CNAME funny → cname.vercel-dns.com` 추가
