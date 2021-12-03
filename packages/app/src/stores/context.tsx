import { Key, SWRResponse } from 'swr';
import useSWRImmutable from 'swr/immutable';

import { pagePathUtils } from '@growi/core';

import { IUser } from '../interfaces/user';

import { useStaticSWR } from './use-static-swr';

type Nullable<T> = T | null;

export const useCurrentUser = (initialData?: IUser): SWRResponse<Nullable<IUser>, Error> => {
  return useStaticSWR<Nullable<IUser>, Error>('currentUser', initialData ?? null);
};

export const useRevisionId = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('revisionId', initialData ?? null);
};

export const useCurrentPagePath = (initialData?: Nullable<string>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('currentPagePath', initialData ?? null);
};

export const useIsSharedUser = (): SWRResponse<boolean, Error> => {
  const { data: currentUser } = useCurrentUser();
  const { data: currentPagePath } = useCurrentPagePath();

  const isLoading = currentUser === undefined || currentPagePath === undefined;

  const key = isLoading ? null : 'isSharedUser';
  const value = !isLoading && currentUser == null && pagePathUtils.isSharedPage(currentPagePath as string);

  return useStaticSWR(key, value);
};

export const usePageId = (initialData?: Nullable<string>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('pageId', initialData ?? null);
};

export const useRevisionCreatedAt = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('revisionCreatedAt', initialData ?? null);
};

export const useCreatedAt = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('createdAt', initialData ?? null);
};

export const useUpdatedAt = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('updatedAt', initialData ?? null);
};

export const useDeletedAt = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('deletedAt', initialData ?? null);
};

export const useIsUserPage = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('isUserPage', initialData ?? null);
};

export const useIsTrashPage = (initialData?: Nullable<boolean>): SWRResponse<Nullable<boolean>, Error> => {
  return useStaticSWR<Nullable<boolean>, Error>('isTrashPage', initialData ?? null);
};

export const useIsDeleted = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('isDeleted', initialData ?? null);
};

export const useIsDeletable = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('isDeletable', initialData ?? null);
};

export const useIsNotCreatable = (initialData?: Nullable<boolean>): SWRResponse<Nullable<boolean>, Error> => {
  return useStaticSWR<Nullable<boolean>, Error>('isNotCreatable', initialData ?? null);
};

export const useIsAbleToDeleteCompletely = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('isAbleToDeleteCompletely', initialData ?? null);
};

export const useIsPageExist = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('isPageExist', initialData ?? null);
};

export const usePageUser = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('pageUser', initialData ?? null);
};

export const useHasChildren = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('hasChildren', initialData ?? null);
};

export const useTemplateTagData = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('templateTagData', initialData ?? null);
};

export const useShareLinksNumber = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('shareLinksNumber', initialData ?? null);
};

export const useShareLinkId = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('shareLinkId', initialData ?? null);
};

export const useRevisionIdHackmdSynced = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('revisionIdHackmdSynced', initialData ?? null);
};

export const useLastUpdateUsername = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('lastUpdateUsername', initialData ?? null);
};

export const useDeleteUsername = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('deleteUsername', initialData ?? null);
};

export const usePageIdOnHackmd = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('pageIdOnHackmd', initialData ?? null);
};

export const useHasDraftOnHackmd = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('hasDraftOnHackmd', initialData ?? null);
};

export const useCreator = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('creator', initialData ?? null);
};

export const useRevisionAuthor = (initialData?: Nullable<any>): SWRResponse<Nullable<any>, Error> => {
  return useStaticSWR<Nullable<any>, Error>('revisionAuthor', initialData ?? null);
};
