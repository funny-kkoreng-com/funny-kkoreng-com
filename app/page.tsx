import Image from "next/image";
import { PROJECTS } from "../projects";
import logo from "./icon.png";

export default function Home() {
  return (
    <main>
      <Image className="logo" src={logo} alt="" width={120} priority />
      <h1>
        funny<span>.</span>kkoreng
      </h1>
      <p className="lead">쓸데없이 웃긴 실험실 🧪</p>
      <div className="grid">
        {PROJECTS.map((p) => (
          // 다른 앱(zone)으로 가는 링크라서 next/link 대신 <a>
          <a key={p.path} className="card" href={p.path}>
            <div className="emoji">{p.emoji}</div>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <div className="path">{p.path}</div>
          </a>
        ))}
      </div>
      <footer>새 프로젝트는 계속 추가됩니다.</footer>
    </main>
  );
}
