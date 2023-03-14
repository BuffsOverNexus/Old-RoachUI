
import { useSession } from "next-auth/react";

const ExamplePage = ({guilds}: {guilds: GuildResponse[]}) => {
    return (
        <>
        
        </>
    );
  };

export async function getServerSideProps() {
    const response = await fetch('https://bot-dev.roach.buffsovernexus.com/discord/guilds?userId=736798101930508361');
    const guilds = await response.json();
  
    return { 
        props: {
            guilds
        } 
    };
  };

export default ExamplePage;
