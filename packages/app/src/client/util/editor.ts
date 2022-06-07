import EditorContainer from '~/client/services/EditorContainer';

type OptionsToSave = {
  isSlackEnabled: boolean;
  slackChannels: string;
  grant: number;
  pageTags: string[] | null;
  grantUserGroupId?: string | null;
  grantUserGroupName?: string | null;
};

// TODO: Remove editorContainer upon migration to SWR
export const getOptionsToSave = (
    isSlackEnabled: boolean,
    slackChannels: string,
    grant: number,
    grantUserGroupId: string | null | undefined,
    grantUserGroupName: string | null | undefined,
    editorContainer: EditorContainer,
): OptionsToSave => {
  const optionsToSave = editorContainer.getCurrentOptionsToSave();
  return {
    ...optionsToSave,
    isSlackEnabled,
    slackChannels,
    grant,
    grantUserGroupId,
    grantUserGroupName,
  };
};
