import fs from "fs";
import path from "path";
import os from "os";
import Utils from "@Utils";

export default () => {
  const XDG_RUNTIME_DIR = process.env.XDG_RUNTIME_DIR || path.join(os.tmpdir(), "runtime-user");
  const sourceDirs = ["app/com.discordapp.Discord", "app/com.discordapp.DiscordCanary"];
  const socketNames = Array.from({ length: 10 }, (_, i) => `discord-ipc-${i}`);
  for (const socketName of socketNames) {
    const target = path.join(XDG_RUNTIME_DIR, socketName);

    try {
      fs.statSync(target).isSocket();
      return;
    } catch {
      Utils.logger.flatpakFix();
    }

    sourceDirs.some((dir) => {
      const source = path.join(XDG_RUNTIME_DIR, dir, socketName);
      if (fs.existsSync(source)) {
        try {
          fs.symlinkSync(source, target, "file");
        } catch (err) {
          console.error(`Failed to link ${target} → ${source}:`, err);
        }
        return true; // stop at first successful source
      }
      return false;
    });
  }
};
