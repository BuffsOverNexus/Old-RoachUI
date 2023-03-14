import { DiscordGuild } from "../responses/discord-guild";
import { http } from "../responses/http";


export default function getBotUrl() {
    return process.env.BOT_URL;
}

export class BotUrls {
    
    public static async getGuilds(userId: string): Promise<DiscordGuild[]> {
       return http<DiscordGuild[]>(`${ getBotUrl() }/discord/guilds?userId=${userId}`);
    }

    public static getGuildEmotes(guildId: string) {
        return `${ getBotUrl() }/discord/emotes?guildId=${guildId}`;
    }

    public static getGuildChannels(guildId: string) {
        return `${ getBotUrl() }/discord/channels?guildId=${guildId}`;
    }

    public static getGuildRoles(guildId: string) {
        return `${ getBotUrl() }/discord/roles?guildId=${guildId}`;
    }

    public static getCreateRole(guildId: string, roleName: string) {
        return `${ getBotUrl() }/discord/role?guildId=${guildId}&roleName=${roleName}`;
    }
}