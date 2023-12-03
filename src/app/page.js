import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">🎄Advent of 2023</h1>
      <p className="mt-4">
        I have been participating in coding or design-related advent calendars
        for several years. This year, I am following React Holiday 2023 and
        Advent of CSS 2023. You can find the code for both of these in this
        repository, which is a simple Next.js app.
      </p>
      <p className="mt-4 text-sm text-neutral-500">
        Developed with ☕ and 🫶 by{" "}
        <Link href="https://www.instagram.com/yoomarvin">
          Marvin Messenzehl
        </Link>
        <br />
        No AI used in this project.
      </p>
      <h2 className="mt-8 text-lg font-semibold">🔗 Useful Links</h2>
      <ul className="mt-4 list-disc">
        <li>
          <Link href="https://www.adventofcss.com/">🎨 Advent of CSS 2023</Link>
        </li>
        <li>
          <Link href="https://react.holiday/">⚛️ React Holiday</Link>
        </li>
        <li>
          <Link href="#">👨‍💻 GitHub Repository</Link>
        </li>
      </ul>
    </main>
  );
}
