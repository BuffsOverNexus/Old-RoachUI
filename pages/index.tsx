import type { NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Navigation from "../components/navigation";
import useSWR, { Fetcher } from "swr";
import { DiscordGuild } from "../responses/discord-guild";

const Home: NextPage = () => {
  const { data } = useSession();
  // @ts-ignore
  const url = `https://bot-dev.roach.buffsovernexus.com/discord/guilds?userId=${data?.token.sub}`;
  const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());
  const guilds = useSWR<DiscordGuild[]>(url, fetcher).data;
  console.log(guilds);

  console.log(data);

  return (
    <>
      <Navigation></Navigation>
      <div className="h-full">
        <ul>
          {guilds?.map((guild) => (
            <li key={guild.id}>{guild.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
