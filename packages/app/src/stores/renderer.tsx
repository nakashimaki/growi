import { Key, SWRResponse } from 'swr';
import useSWRImmutable from 'swr/immutable';

import { RendererSettings } from '~/interfaces/services/renderer';
import GrowiRenderer, {
  generateViewRenderer, generatePreviewRenderer, generateCommentPreviewRenderer, generateOthersRenderer, RendererGenerator,
} from '~/services/renderer/growi-renderer';
import { useStaticSWR } from '~/stores/use-static-swr';

import { useCurrentPagePath, useGrowiRendererConfig } from './context';

export const useRendererSettings = (initialData?: RendererSettings): SWRResponse<RendererSettings, Error> => {
  return useStaticSWR('rendererSettings', initialData);
};

// The base hook with common processes
const _useRendererBase = (rendererId: string, generator: RendererGenerator): SWRResponse<GrowiRenderer, Error> => {
  const { data: rendererSettings } = useRendererSettings();
  const { data: currentPath } = useCurrentPagePath();
  const { data: growiRendererConfig } = useGrowiRendererConfig();

  const isAllDataValid = rendererSettings != null && currentPath != null && growiRendererConfig != null;

  const key = isAllDataValid
    ? [rendererId, rendererSettings, growiRendererConfig, currentPath]
    : null;

  const swrResult = useSWRImmutable(key);

  // use mutate because fallbackData does not work
  // see: https://github.com/weseek/growi/commit/5038473e8d6028c9c91310e374a7b5f48b921a15
  if (isAllDataValid && swrResult.data == null) {
    swrResult.mutate(generator(growiRendererConfig, rendererSettings, currentPath));
  }

  return swrResult;
};

export const useViewRenderer = (): SWRResponse<GrowiRenderer, Error> => {
  const key = 'viewRenderer';

  return _useRendererBase(key, generateViewRenderer);
};

export const usePreviewRenderer = (): SWRResponse<GrowiRenderer, Error> => {
  const key = 'previewRenderer';

  return _useRendererBase(key, generatePreviewRenderer);
};

export const useCommentPreviewRenderer = (): SWRResponse<GrowiRenderer, Error> => {
  const key = 'commentPreviewRenderer';

  return _useRendererBase(key, generateCommentPreviewRenderer);
};

export const useSearchResultRenderer = (): SWRResponse<GrowiRenderer, Error> => {
  const key = 'searchResultRenderer';

  return _useRendererBase(key, generateOthersRenderer);
};

export const useTimelineRenderer = (): SWRResponse<GrowiRenderer, Error> => {
  const key = 'timelineRenderer';

  return _useRendererBase(key, generateOthersRenderer);
};

export const useDraftRenderer = (): SWRResponse<GrowiRenderer, Error> => {
  const key = 'draftRenderer';

  return _useRendererBase(key, generateOthersRenderer);
};

export const useCustomSidebarRenderer = (): SWRResponse<GrowiRenderer, Error> => {
  const key: Key = 'customSidebarRenderer';

  return _useRendererBase(key, generateOthersRenderer);
};
