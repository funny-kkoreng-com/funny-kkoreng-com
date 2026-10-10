import Image from "next/image";
import { PROJECTS } from "../projects";
import logo from "./icon.png";

export default function Home() {
  return (
    <main>
      <Image className="logo" src={logo} alt="" width={120} priority />
      <h1>
        funny<span>.</span>kkoreng<span>.</span>com
      </h1>
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
    </main>
  );
}
