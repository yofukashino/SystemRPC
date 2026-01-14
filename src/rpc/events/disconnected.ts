import { RPC, start } from "@rpc";
import Utils from "@Utils";

export default (interval: NodeJS.Timeout): void => {
  RPC?.server.on("disconnected", () => {
    RPC.active = false;
    void RPC.server.destroy();
    if (interval) clearInterval(interval);
    Utils.logger.connectionClosed();
    const reconnectInterval = setInterval(async () => {
      try {
        await start(0);
        clearInterval(reconnectInterval);
      } catch {
        console.clear();
        Utils.logger.connectionClosed();
      }
    }, 1.5 * 10000);
  });
};
