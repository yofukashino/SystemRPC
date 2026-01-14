import fs from "fs";
import path from "path";
import os from "os";
import defaultConfig from "@config-default";

function getPlatformConfigDir(): string {
  const { platform } = process;

  if (platform === "win32") {
    return path.join(
      process.env.APPDATA || path.join(os.homedir(), "AppData", "Roaming"),
      "SystemRPC",
    );
  }

  if (platform === "darwin") {
    return path.join(os.homedir(), "Library", "Application Support", "SystemRPC");
  }

  // Default for Linux and Unix
  const xdg = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
  return path.join(xdg, "SystemRPC");
}

function ensureConfig(): string {
  const configDir = getPlatformConfigDir();
  const configPath = path.join(configDir, "config.json");

  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

  if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2), "utf-8");
  }

  return configPath;
}

export const configPath = ensureConfig();

const config: typeof defaultConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));
export const { clientId, largeImage, smallImage, buttons, timestamp, interval } = config;
export default config;
