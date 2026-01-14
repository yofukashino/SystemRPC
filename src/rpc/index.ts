import DiscordRPC from "discord-rpc";
import { clientId } from "@config";
import Events from "@Events";
import Utils from "@Utils";
export { configPath } from "@config";

export const RPC: { active: boolean; server: DiscordRPC.Client } = {
  active: true,
  server: new DiscordRPC.Client({ transport: "ipc" }),
};

export const start = async (tries: number): Promise<void> => {
  Utils.fixFlatpakRPC();
  try {
    if (!RPC.active) RPC.server = new DiscordRPC.Client({ transport: "ipc" });
    Events.registerEvents();
    await RPC.server.login({ clientId });
  } catch {
    Utils.logger.loginFailed(tries);
    await new Promise<void>((resolve) => {
      setTimeout(async () => {
        RPC.server?.destroy?.().catch(() => {});
        RPC.active = false;
        await start(tries <= 5 ? tries : 5);
        resolve();
      }, ((tries <= 5 ? tries : 5) + 1) * 10000);
    });
    return;
  }
  Utils.logger.loginSuccess(RPC.server.application?.name);
};

void start(0);
