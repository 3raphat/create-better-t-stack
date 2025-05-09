import { cancel, isCancel, multiselect } from "@clack/prompts";
import pc from "picocolors";
import { DEFAULT_CONFIG } from "../constants";
import type { ProjectAddons, ProjectFrontend } from "../types";

export async function getAddonsChoice(
	addons?: ProjectAddons[],
	frontends?: ProjectFrontend[],
): Promise<ProjectAddons[]> {
	if (addons !== undefined) return addons;

	const hasCompatibleWebFrontend =
		frontends?.includes("react-router") ||
		frontends?.includes("tanstack-router");

	const addonOptions = [
		{
			value: "turborepo" as const,
			label: "Turborepo (Recommended)",
			hint: "Optimize builds for monorepos",
		},
		{
			value: "starlight" as const,
			label: "Starlight",
			hint: "Add Astro Starlight documentation site",
		},
		{
			value: "biome" as const,
			label: "Biome",
			hint: "Add Biome for linting and formatting",
		},
		{
			value: "husky" as const,
			label: "Husky",
			hint: "Add Git hooks with Husky, lint-staged (requires Biome)",
		},
	];

	const webAddonOptions = [
		{
			value: "pwa" as const,
			label: "PWA (Progressive Web App)",
			hint: "Make your app installable and work offline",
		},
		{
			value: "tauri" as const,
			label: "Tauri Desktop App",
			hint: "Build native desktop apps from your web frontend",
		},
	];

	const options = hasCompatibleWebFrontend
		? [...addonOptions, ...webAddonOptions]
		: addonOptions;

	const initialValues = DEFAULT_CONFIG.addons.filter(
		(addon) =>
			hasCompatibleWebFrontend || (addon !== "pwa" && addon !== "tauri"),
	);

	const response = await multiselect<ProjectAddons>({
		message: "Select addons",
		options,
		initialValues,
		required: false,
	});

	if (isCancel(response)) {
		cancel(pc.red("Operation cancelled"));
		process.exit(0);
	}

	if (response.includes("husky") && !response.includes("biome")) {
		response.push("biome");
	}

	return response;
}
