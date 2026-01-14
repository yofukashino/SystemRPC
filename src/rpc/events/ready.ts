import { RPC } from "@rpc";
import Utils from "@Utils";
import { interval } from "@config";
import disconnected from "./disconnected";
export default (): void => {
  RPC.server.on("ready", async () => {
    RPC.active = true;
    Utils.logger.logAuth(RPC.server.user?.username);
    await Utils.setActivity();
    const internal = setInterval(async () => {
      await Utils.setActivity();
    }, interval);
    disconnected(internal);
  });
};
