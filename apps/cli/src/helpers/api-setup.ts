import * as path from "node:path";
import fs from "fs-extra";
import type { ProjectConfig } from "../types";
import { addPackageDependency } from "../utils/add-package-deps";

export async function setupApi(config: ProjectConfig): Promise<void> {
	const { api, projectName } = config;
	const projectDir = path.resolve(process.cwd(), projectName);
	const webDir = path.join(projectDir, "apps/web");
	const serverDir = path.join(projectDir, "apps/server");
	const webDirExists = await fs.pathExists(webDir);

	if (api === "orpc") {
		if (webDirExists) {
			await addPackageDependency({
				dependencies: ["@orpc/react-query", "@orpc/server", "@orpc/client"],
				projectDir: webDir,
			});
		}
		await addPackageDependency({
			dependencies: ["@orpc/server", "@orpc/client"],
			projectDir: serverDir,
		});
	}

	if (api === "trpc") {
		if (webDirExists) {
			await addPackageDependency({
				dependencies: [
					"@trpc/tanstack-react-query",
					"@trpc/server",
					"@trpc/client",
				],
				projectDir: webDir,
			});
		}
		await addPackageDependency({
			dependencies: ["@trpc/server", "@trpc/client"],
			projectDir: serverDir,
		});
	}
}
