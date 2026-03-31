import { h as createActionsProxy, p as pipelineSymbol, j as AstroError, k as ActionCalledFromServerError } from './entrypoint_CZyKt9aM.mjs';

const actions = createActionsProxy({
  handleAction: async (param, path, context) => {
    const pipeline = context ? Reflect.get(context, pipelineSymbol) : void 0;
    if (!pipeline) {
      throw new AstroError(ActionCalledFromServerError);
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
});

export { actions as a };
