// funny.kkoreng.com/<path> 아래에 붙는 프로젝트 목록.
// 새 프로젝트를 추가하면 여기에 한 줄만 추가하면 된다 (rewrite와 첫 화면 카드가 같이 생김).
export type Project = {
  path: string; // 프로젝트의 basePath와 같아야 함
  origin: string; // 그 프로젝트의 Vercel 기본 주소
  emoji: string;
  title: string;
  desc: string;
};

export const PROJECTS: Project[] = [
  {
    path: "/shine-my-bald",
    origin: "https://shine-my-bald.vercel.app",
    emoji: "✨",
    title: "대머리 광택 시뮬레이터",
    desc: "카메라 속 아저씨 머리를 손으로 문지르면 점점 반짝반짝. 너무 문지르면 태양이 됩니다.",
  },
];
