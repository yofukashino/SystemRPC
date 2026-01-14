import systemInfo from "systeminformation";
import os from "node:os";

export default async (): Promise<string> => {
  switch (os.platform()) {
    case "linux": {
      return "linux";
    }
    case "darwin": {
      return "mac";
    }
    case "win32": {
      const osInfo = await systemInfo.osInfo();

      if (osInfo.distro.includes("Windows 10")) return "windows10";

      if (osInfo.distro.includes("Windows 11")) return "windows11";

      return "windows";
    }
    default: {
      return "unknown";
    }
  }
};
