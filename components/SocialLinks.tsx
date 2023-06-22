import {
  GITHUB_COLOR,
  GithubIcon,
  LINKEDIN_COLOR,
  LinkedinIcon,
  TWITTER_COLOR,
  TwitterIcon,
} from "./Icons"

export default function SocialLinks() {
  return (
    <>
      <div className="flex justify-center gap-3 font-bold">
        <a
          href="https://github.com/PKLJack"
          className="flex items-center gap-2 rounded-md bg-neutral-700 px-3 py-2 text-white hover:bg-neutral-800 hover:shadow-lg"
        >
          <GithubIcon fill={GITHUB_COLOR} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/pui-kit-li-793555177/"
          className="flex items-center gap-2 rounded-md bg-neutral-700 px-3 py-2 text-white hover:bg-neutral-800 hover:shadow-lg"
        >
          <LinkedinIcon fill={LINKEDIN_COLOR} />
          LinkedIn
        </a>
        <a
          href="https://twitter.com/PKL_Jack"
          className="flex items-center gap-2 rounded-md bg-neutral-700 px-3 py-2 text-white hover:bg-neutral-800 hover:shadow-lg"
        >
          <TwitterIcon fill={TWITTER_COLOR} />
          Twitter
        </a>
      </div>
    </>
  )
}
