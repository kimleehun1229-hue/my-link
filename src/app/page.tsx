import React from "react";

export default function Home() {
  const links = [
    {
      title: "인스타그램 · 일상 & 감성 사진",
      url: "https://instagram.com",
      icon: "🪷",
      desc: "맑고 은은한 일상의 순간들",
    },
    {
      title: "생각이 머무는 블로그",
      url: "https://velog.io",
      icon: "🍃",
      desc: "기록하고 사유하는 이야기",
    },
    {
      title: "연못 속 작은 음악 플레이리스트",
      url: "https://youtube.com",
      icon: "🫧",
      desc: "차분하고 포근한 잔잔한 음악",
    },
    {
      title: "익명 방명록 & 편지 보내기",
      url: "mailto:contact@example.com",
      icon: "✉️",
      desc: "언제든 따뜻한 인사를 남겨주세요",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf7f5] text-zinc-800 selection:bg-pink-100 selection:text-pink-700 dark:bg-[#101714] dark:text-zinc-100 flex flex-col items-center justify-center px-4 py-16">
      {/* 연꽃 코어 앰비언트 배경 블러 (연녹색 & 연분홍 오브) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/50 blur-[100px] dark:bg-emerald-900/25" />
      <div className="pointer-events-none absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-pink-200/60 blur-[110px] dark:bg-rose-950/30" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-emerald-100/60 blur-[120px] dark:bg-teal-950/25" />
      <div className="pointer-events-none absolute top-2/3 -left-20 h-80 w-80 rounded-full bg-pink-100/50 blur-[100px] dark:bg-pink-950/20" />

      {/* 중앙 메인 카드 */}
      <main className="relative z-10 w-full max-w-md rounded-3xl border border-white/70 bg-white/60 p-7 shadow-[0_8px_32px_rgba(215,227,219,0.4)] backdrop-blur-xl transition-all duration-300 dark:border-emerald-900/30 dark:bg-zinc-900/50 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:p-9">
        {/* 상단 무드 뱃지 */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/70 bg-pink-50/80 px-3.5 py-1 text-xs font-medium tracking-wide text-rose-600 shadow-sm backdrop-blur-sm dark:border-pink-800/40 dark:bg-pink-950/40 dark:text-pink-300">
            <span className="text-[13px]">🪷</span> Lotuscore Mood
          </span>
        </div>

        {/* 프로필 아바타 (연꽃 수채화 그라데이션 링) */}
        <div className="mt-5 flex justify-center">
          <div className="relative">
            {/* 은은한 외곽 글로우 링 */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-200 via-pink-200 to-rose-200 opacity-80 blur-sm dark:from-emerald-700/50 dark:via-pink-700/50 dark:to-rose-600/50" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#d6ede0] via-[#fae6ec] to-[#fce4ec] shadow-inner dark:from-[#1b3327] dark:via-[#36222b] dark:to-[#381c25]">
              <span className="text-4xl filter drop-shadow-sm select-none animate-pulse">
                🪷
              </span>
            </div>
            {/* 귀여운 장식 연잎 이모지 */}
            <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm border border-emerald-100 text-sm dark:bg-zinc-800 dark:border-zinc-700">
              🍃
            </div>
          </div>
        </div>

        {/* 프로필 정보 */}
        <div className="mt-5 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 flex items-center justify-center gap-1.5">
            연우 <span className="text-xs font-normal text-emerald-600 dark:text-emerald-400">蓮</span>
          </h1>
          <p className="mt-1 text-xs text-zinc-400 tracking-wider">
            @lotus.bloom
          </p>
          <div className="mt-2.5 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50/90 px-2.5 py-0.5 text-xs text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40">
              🌿 연한 녹색
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-pink-50/90 px-2.5 py-0.5 text-xs text-pink-700 border border-pink-200/60 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/40">
              🌸 연한 분홍색
            </span>
          </div>
        </div>

        {/* 한 줄 소개글 */}
        <p className="mt-4 text-center text-xs sm:text-sm leading-relaxed text-zinc-600 break-keep dark:text-zinc-300/90 font-light">
          기술과 코드로 더 나은 사용자 경험과 가치를 만들어가는 개발자입니다. 💻✨<br />
          새로운 기술을 탐구하고 효율적인 문제 해결 과정을 즐깁니다.
        </p>

        {/* 링크 버튼 목록 */}
        <div className="mt-7 flex flex-col gap-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-[0_2px_12px_rgba(235,210,220,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-gradient-to-r hover:from-emerald-50/70 hover:to-pink-50/70 hover:shadow-[0_6px_20px_rgba(244,196,211,0.4)] dark:border-zinc-800 dark:bg-zinc-800/50 dark:hover:border-pink-900/50 dark:hover:from-emerald-950/30 dark:hover:to-pink-950/30"
            >
              {/* 아이콘 원 */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-100/70 to-pink-100/70 text-lg shadow-sm group-hover:scale-105 transition-transform duration-300 dark:from-emerald-900/50 dark:to-pink-900/50">
                {link.icon}
              </div>

              {/* 텍스트 영역 */}
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-sm font-medium text-zinc-800 group-hover:text-rose-700 transition-colors dark:text-zinc-200 dark:group-hover:text-pink-300 truncate">
                  {link.title}
                </span>
                <span className="text-[11px] text-zinc-400 dark:text-zinc-400 truncate">
                  {link.desc}
                </span>
              </div>

              {/* 우측 얇은 화살표 */}
              <div className="ml-auto text-zinc-300 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all text-xs">
                →
              </div>
            </a>
          ))}
        </div>

        {/* 하단 미니 데코레이션 */}
        <div className="mt-8 pt-4 border-t border-pink-100/50 dark:border-zinc-800 flex items-center justify-center gap-1.5 text-[11px] text-zinc-400">
          <span>🪷</span>
          <span className="tracking-widest uppercase font-light text-[10px]">
            Blooming in Serenity
          </span>
          <span>🫧</span>
        </div>
      </main>

      {/* 푸터 카피라이트 */}
      <footer className="relative z-10 mt-6 text-center text-xs text-zinc-400/80 dark:text-zinc-500 font-light">
        © 2026 마이링크 · <span className="hover:text-pink-500 transition-colors">Lotuscore Edition</span>
      </footer>
    </div>
  );
}
