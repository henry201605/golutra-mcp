import type { CommandContextInput, RuntimeContextSnapshot } from "./types.js";
export declare function resolveDefaultCliPath(env: NodeJS.ProcessEnv, options?: {
    platform?: NodeJS.Platform;
    homeDirectory?: string;
    pathExists?: (candidatePath: string) => boolean;
}): string;
/**
 * Walk up from `startDir` looking for a directory that contains `.golutra/`.
 * Returns the first match, or `undefined` if the filesystem root is reached.
 */
export declare function discoverWorkspacePath(startDir: string, pathExists?: (p: string) => boolean): string | undefined;
export declare function createInitialContext(env: NodeJS.ProcessEnv): RuntimeContextSnapshot;
export declare class ContextStore {
    private readonly initialContext;
    private context;
    constructor(initialContext: RuntimeContextSnapshot);
    getSnapshot(): RuntimeContextSnapshot;
    reset(): RuntimeContextSnapshot;
    update(nextValues: CommandContextInput): RuntimeContextSnapshot;
    resolveCommandContext(nextValues?: CommandContextInput): RuntimeContextSnapshot;
    requireWorkspacePath(nextValues?: CommandContextInput): string;
}
