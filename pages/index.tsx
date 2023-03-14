import type { GetServerSidePropsContext, NextPage } from "next";
import Navigation from "../components/navigation";
import { DiscordGuild } from "../responses/discord-guild";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { http } from "../responses/http";
import { Session } from "next-auth";
import getBotUrl, { BotUrls } from "../utils/url";

function Home({guilds}: {guilds: DiscordGuild[]}) {
  return (
    <>
      <div className="h-full">
      {guilds.map(guild => <div key={guild.id}>{guild.name}</div>)}
      </div>
    </>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const userId = session?.token.sub;
  const guilds = await BotUrls.getGuilds(userId);

  return {
    props: {
      guilds: guilds
    },
  }
}

export default Home;
