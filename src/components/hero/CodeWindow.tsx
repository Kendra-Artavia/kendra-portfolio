import { Folder, GitBranch, Search, Settings } from "lucide-react";

function Keyword({ children }: { children: string }) {
  return <span className="text-[#E7A8C6]">{children}</span>;
}

function Name({ children }: { children: string }) {
  return <span className="text-[#F7F2F4]">{children}</span>;
}

function Punct({ children }: { children: string }) {
  return <span className="text-[#C3B0BA]">{children}</span>;
}

function Str({ children }: { children: string }) {
  return <span className="text-[#F6C3D8]">{children}</span>;
}

export function CodeWindow() {
  return (
    <div className="shadow-editor overflow-hidden rounded-[22px] bg-[#16111A] ring-1 ring-white/10">
      <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="size-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-white/45">App.kt</span>
      </div>
      <div className="flex min-h-[268px]">
        <div className="flex w-11 shrink-0 flex-col items-center gap-3.5 border-r border-white/6 bg-[#120E16] py-3.5 text-white/35">
          <Folder size={15} strokeWidth={1.75} />
          <Search size={15} strokeWidth={1.75} />
          <GitBranch size={15} strokeWidth={1.75} />
          <Settings size={15} strokeWidth={1.75} className="mt-auto" />
        </div>
        <pre className="px-4 py-3.5 font-mono text-[12.5px] leading-[1.7] whitespace-pre">
          <code>
            <Keyword>fun </Keyword>
            <Name>main</Name>
            <Punct>{"() {"}</Punct>
            {"\n  "}
            <Keyword>val </Keyword>
            <span className="text-[#D9CCD3]">app = </span>
            <Name>PhotoBinder</Name>
            <Punct>()</Punct>
            {"\n  "}
            <span className="text-[#D9CCD3]">app.</span>
            <Name>run</Name>
            <Punct>()</Punct>
            {"\n"}
            <Punct>{"}"}</Punct>
            {"\n\n"}
            <Keyword>class </Keyword>
            <Name>PhotoBinder</Name>
            <Punct>{" {"}</Punct>
            {"\n  "}
            <Keyword>fun </Keyword>
            <Name>run</Name>
            <Punct>{"() {"}</Punct>
            {"\n    "}
            <Name>println</Name>
            <Punct>(</Punct>
            <Str>{'"Turning memories'}</Str>
            {"\n    "}
            <Str>{'into something special ♡"'}</Str>
            <Punct>)</Punct>
            {"\n  "}
            <Punct>{"}"}</Punct>
            {"\n"}
            <Punct>{"}"}</Punct>
          </code>
        </pre>
      </div>
    </div>
  );
}
