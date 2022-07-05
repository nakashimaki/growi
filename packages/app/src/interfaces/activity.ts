import { Ref } from './common';
import { HasObjectId } from './has-object-id';
import { IUser } from './user';

// Model
const MODEL_PAGE = 'Page';
const MODEL_COMMENT = 'Comment';

// Action
const ACTION_UNSETTLED = 'UNSETTLED';
const ACTION_USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
const ACTION_USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const ACTION_USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
const ACTION_USER_LOGOUT = 'USER_LOGOUT';
const ACTION_USER_PERSONAL_SETTINGS_UPDATE = 'USER_PERSONAL_SETTINGS_UPDATE';
const ACTION_USER_IMAGE_TYPE_UPDATE = 'USER_IMAGE_TYPE_UPDATE';
const ACTION_USER_LDAP_ACCOUNT_ASSOCIATE = 'USER_LDAP_ACCOUNT_ASSOCIATE';
const ACTION_USER_LDAP_ACCOUNT_DISCONNECT = 'USER_LDAP_ACCOUNT_DISCONNECT';
const ACTION_USER_PASSWORD_UPDATE = 'USER_PASSWORD_UPDATE';
const ACTION_USER_API_TOKEN_UPDATE = 'USER_API_TOKEN_UPDATE';
const ACTION_USER_EDITOR_SETTINGS_UPDATE = 'USER_EDITOR_SETTINGS_UPDATE';
const ACTION_USER_IN_APP_NOTIFICATION_SETTINGS_UPDATE = 'USER_IN_APP_NOTIFICATION_SETTINGS_UPDATE';
const ACTION_PAGE_VIEW = 'PAGE_VIEW';
const ACTION_PAGE_USER_HOME_VIEW = 'PAGE_USER_HOME_VIEW';
const ACTION_PAGE_NOT_FOUND = 'PAGE_NOT_FOUND';
const ACTION_PAGE_FORBIDDEN = 'PAGE_FORBIDDEN';
const ACTION_PAGE_NOT_CREATABLE = 'PAGE_NOT_CREATABLE';
const ACTION_PAGE_LIKE = 'PAGE_LIKE';
const ACTION_PAGE_UNLIKE = 'PAGE_UNLIKE';
const ACTION_PAGE_BOOKMARK = 'PAGE_BOOKMARK';
const ACTION_PAGE_UNBOOKMARK = 'PAGE_UNBOOKMARK';
const ACTION_PAGE_CREATE = 'PAGE_CREATE';
const ACTION_PAGE_UPDATE = 'PAGE_UPDATE';
const ACTION_PAGE_RENAME = 'PAGE_RENAME';
const ACTION_PAGE_DUPLICATE = 'PAGE_DUPLICATE';
const ACTION_PAGE_DELETE = 'PAGE_DELETE';
const ACTION_PAGE_DELETE_COMPLETELY = 'PAGE_DELETE_COMPLETELY';
const ACTION_PAGE_REVERT = 'PAGE_REVERT';
const ACTION_PAGE_EMPTY_TRASH = 'PAGE_EMPTY_TRASH';
const ACTION_PAGE_SUBSCRIBE = 'PAGE_SUBSCRIBE';
const ACTION_PAGE_UNSUBSCRIBE = 'PAGE_UNSUBSCRIBE';
const ACTION_PAGE_EXPORT = 'PAGE_EXPORT';
const ACTION_TAG_UPDATE = 'TAG_UPDATE';
const ACTION_IN_APP_NOTIFICATION_ALL_STATUSES_OPEN = 'IN_APP_NOTIFICATION_ALL_STATUSES_OPEN';
const ACTION_COMMENT_CREATE = 'COMMENT_CREATE';
const ACTION_COMMENT_UPDATE = 'COMMENT_UPDATE';
const ACTION_COMMENT_REMOVE = 'COMMENT_REMOVE';
const ACTION_SHARE_LINK_CREATE = 'SHARE_LINK_CREATE';
const ACTION_SHARE_LINK_DELETE = 'SHARE_LINK_DELETE';
const ACTION_SHARE_LINK_DELETE_BY_PAGE = 'SHARE_LINK_DELETE_BY_PAGE';
const ACTION_SHARE_LINK_ALL_DELETE = 'SHARE_LINK_ALL_DELETE';
const ACTION_SHARE_LINK_PAGE_VIEW = 'SHARE_LINK_PAGE_VIEW';
const ACTION_SHARE_LINK_EXPIRED_PAGE_VIEW = 'SHARE_LINK_EXPIRED_PAGE_VIEW';
const ACTION_SHARE_LINK_NOT_FOUND = 'SHARE_LINK_NOT_FOUND';
const ACTION_ATTACHMENT_ADD = 'ATTACHMENT_ADD';
const ACTION_ATTACHMENT_REMOVE = 'ATTACHMENT_REMOVE';
const ACTION_ATTACHMENT_DOWNLOAD = 'ACTION_ATTACHMENT_DOWNLOAD';
const ACTION_ADMIN_APP_SETTINGS_UPDATE = 'ADMIN_APP_SETTING_UPDATE';
const ACTION_ADMIN_SITE_URL_UPDATE = 'ADMIN_SITE_URL_UPDATE';
const ACTION_ADMIN_MAIL_SMTP_UPDATE = 'ADMIN_MAIL_SMTP_UPDATE';
const ACTION_ADMIN_MAIL_SES_UPDATE = 'ADMIN_MAIL_SES_UPDATE';
const ACTION_ADMIN_MAIL_TEST_SUBMIT = 'ADMIN_MAIL_TEST_SUBMIT ';
const ACTION_ADMIN_FILE_UPLOAD_CONFIG_UPDATE = 'ADMIN_FILE_UPLOAD_CONFIG_UPDATE';
const ACTION_ADMIN_PLUGIN_UPDATE = 'ADMIN_PLUGIN_UPDATE';
const ACTION_ADMIN_MAINTENANCEMODE_ENABLED = 'ADMIN_MAINTENANCEMODE_ENABLED';
const ACTION_ADMIN_MAINTENANCEMODE_DISABLED = 'ADMIN_MAINTENANCEMODE_DISABLED';
const ACTION_ADMIN_SECURITY_SETTINGS_UPDATE = 'ADMIN_SECURITY_SETTINGS_UPDATE';
const ACTION_ADMIN_PERMIT_SHARE_LINK = 'ADMIN_PERMIT_SHARE_LINK';
const ACTION_ADMIN_REJECT_SHARE_LINK = 'ADMIN_REJECT_SHARE_LINK';
const ACTION_ADMIN_AUTH_ID_PASS_ENABLED = 'ADMIN_AUTH_ID_PASS_ENABLED';
const ACTION_ADMIN_AUTH_ID_PASS_DISABLED = 'ADMIN_AUTH_ID_PASS_DISABLED';
const ACTION_ADMIN_AUTH_ID_PASS_UPDATE = 'ADMIN_AUTH_ID_PASS_UPDATE';
const ACTION_ADMIN_AUTH_LDAP_ENABLED = 'ADMIN_AUTH_LDAP_ENABLED';
const ACTION_ADMIN_AUTH_LDAP_DISABLED = 'ADMIN_AUTH_LDAP_DISABLED';
const ACTION_ADMIN_AUTH_LDAP_UPDATE = 'ADMIN_AUTH_LDAP_UPDATE';
const ACTION_ADMIN_AUTH_SAML_ENABLED = 'ADMIN_AUTH_SAML_ENABLED';
const ACTION_ADMIN_AUTH_SAML_DISABLED = 'ADMIN_AUTH_SAML_DISABLED';
const ACTION_ADMIN_AUTH_SAML_UPDATE = 'ADMIN_AUTH_SAML_UPDATE';
const ACTION_ADMIN_AUTH_OIDC_ENABLED = 'ADMIN_AUTH_OIDC_ENABLED';
const ACTION_ADMIN_AUTH_OIDC_DISABLED = 'ADMIN_AUTH_OIDC_DISABLED';
const ACTION_ADMIN_AUTH_OIDC_UPDATE = 'ADMIN_AUTH_OIDC_UPDATE';
const ACTION_ADMIN_AUTH_BASIC_ENABLED = 'ADMIN_AUTH_BASIC_ENABLED';
const ACTION_ADMIN_AUTH_BASIC_DISABLED = 'ADMIN_AUTH_BASIC_DISABLED';
const ACTION_ADMIN_AUTH_BASIC_UPDATE = 'ADMIN_AUTH_BASIC_UPDATE';
const ACTION_ADMIN_AUTH_GOOGLE_ENABLED = 'ADMIN_AUTH_GOOGLE_ENABLED';
const ACTION_ADMIN_AUTH_GOOGLE_DISABLED = 'ADMIN_AUTH_GOOGLE_DISABLED';
const ACTION_ADMIN_AUTH_GOOGLE_UPDATE = 'ADMIN_AUTH_GOOGLE_UPDATE';
const ACTION_ADMIN_AUTH_GITHUB_ENABLED = 'ADMIN_AUTH_GITHUB_ENABLED';
const ACTION_ADMIN_AUTH_GITHUB_DISABLED = 'ADMIN_AUTH_GITHUB_DISABLED';
const ACTION_ADMIN_AUTH_GITHUB_UPDATE = 'ADMIN_AUTH_GITHUB_UPDATE';
const ACTION_ADMIN_AUTH_TWITTER_ENABLED = 'ADMIN_AUTH_TWITTER_ENABLED';
const ACTION_ADMIN_AUTH_TWITTER_DISABLED = 'ADMIN_AUTH_TWITTER_DISABLED';
const ACTION_ADMIN_AUTH_TWITTER_UPDATE = 'ADMIN_AUTH_TWITTER_UPDATE';
const ACTION_ADMIN_LINE_BREAK_UPDATE = 'ADMIN_LINE_BREAK_UPDATE';
const ACTION_ADMIN_LAYOUT_UPDATE = 'ADMIN_LAYOUT_UPDATE';
const ACTION_ADMIN_THEME_UPDATE = 'ADMIN_THEME_UPDATE';
const ACTION_ADMIN_FUNCTION_UPDATE = 'ADMIN_FUNCTION_UPDATE';
const ACTION_ADMIN_CODE_HIGHLIGHT_UPDATE = 'ADMIN_CODE_HIGHLIGHT_UPDATE';
const ACTION_ADMIN_CUSTOM_TITLE_UPDATE = 'ADMIN_CUSTOM_TITLE_UPDATE';
const ACTION_ADMIN_CUSTOM_HTML_HEADER_UPDATE = 'ADMIN_CUSTOM_HTML_HEADER_UPDATE';
const ACTION_ADMIN_CUSTOM_CSS_UPDATE = 'ADMIN_CUSTOM_CSS_UPDATE';
const ACTION_ADMIN_CUSTOM_SCRIPT_UPDATE = 'ADMIN_CUSTOM_SCRIPT_UPDATE';
const ACTION_ADMIN_ARCHIVE_DATA_UPLOAD = 'ADMIN_ARCHIVE_DATA_UPLOAD';
const ACTION_ADMIN_ARCHIVE_DATA_CREATE = 'ADMIN_ARCHIVE_DATA_CREATE';
const ACTION_ADMIN_USER_NOTIFICATION_SETTINGS_ADD = 'ADMIN_USER_NOTIFICATION_SETTINGS_ADD';
const ACTION_ADMIN_SLACK_WORKSPACE_CREATE = 'ADMIN_SLACK_WORKSPACE_CREATE';
const ACTION_ADMIN_SLACK_CONFIGURATION_SETTING_UPDATE = 'ADMIN_SLACK_CONFIGURATION_SETTING_UPDATE';
const ACTION_ADMIN_USERS_INVITE = 'ADMIN_USERS_INVITE';
const ACTION_ADMIN_USER_GROUP_CREATE = 'ADMIN_USER_GROUP_CREATE';
const ACTION_ADMIN_USER_GROUP_UPDATE = 'ADMIN_USER_GROUP_UPDATE';
const ACTION_ADMIN_USER_GROUP_DELETE = 'ADMIN_USER_GROUP_DELETE';
const ACTION_ADMIN_USER_GROUP_ADD_USER = 'ADMIN_USER_GROUP_ADD_USER';
const ACTION_ADMIN_SEARCH_INDICES_NORMALIZE = 'ADMIN_SEARCH_INDICES_NORMALIZE';
const ACTION_ADMIN_SEARCH_INDICES_REBUILD = 'ADMIN_SEARCH_INDICES_REBUILD';


export const SupportedTargetModel = {
  MODEL_PAGE,
} as const;

export const SupportedEventModel = {
  MODEL_COMMENT,
} as const;

export const SupportedActionCategory = {
  PAGE: 'Page',
  COMMENT: 'Comment',
  TAG: 'Tag',
  ATTACHMENT: 'Attachment',
  SHARE_LINK: 'ShareLink',
  IN_APP_NOTIFICATION: 'InAppNotification',
  USER: 'User',
  ADMIN: 'Admin',
} as const;

export const SupportedAction = {
  ACTION_UNSETTLED,
  ACTION_USER_REGISTRATION_SUCCESS,
  ACTION_USER_LOGIN_SUCCESS,
  ACTION_USER_LOGIN_FAILURE,
  ACTION_USER_LOGOUT,
  ACTION_USER_PERSONAL_SETTINGS_UPDATE,
  ACTION_USER_IMAGE_TYPE_UPDATE,
  ACTION_USER_LDAP_ACCOUNT_ASSOCIATE,
  ACTION_USER_LDAP_ACCOUNT_DISCONNECT,
  ACTION_USER_PASSWORD_UPDATE,
  ACTION_USER_API_TOKEN_UPDATE,
  ACTION_USER_EDITOR_SETTINGS_UPDATE,
  ACTION_USER_IN_APP_NOTIFICATION_SETTINGS_UPDATE,
  ACTION_PAGE_VIEW,
  ACTION_PAGE_USER_HOME_VIEW,
  ACTION_PAGE_FORBIDDEN,
  ACTION_PAGE_NOT_FOUND,
  ACTION_PAGE_NOT_CREATABLE,
  ACTION_PAGE_LIKE,
  ACTION_PAGE_UNLIKE,
  ACTION_PAGE_BOOKMARK,
  ACTION_PAGE_UNBOOKMARK,
  ACTION_PAGE_CREATE,
  ACTION_PAGE_UPDATE,
  ACTION_PAGE_RENAME,
  ACTION_PAGE_DUPLICATE,
  ACTION_PAGE_DELETE,
  ACTION_PAGE_DELETE_COMPLETELY,
  ACTION_PAGE_REVERT,
  ACTION_PAGE_EMPTY_TRASH,
  ACTION_PAGE_SUBSCRIBE,
  ACTION_PAGE_UNSUBSCRIBE,
  ACTION_PAGE_EXPORT,
  ACTION_TAG_UPDATE,
  ACTION_IN_APP_NOTIFICATION_ALL_STATUSES_OPEN,
  ACTION_COMMENT_CREATE,
  ACTION_COMMENT_UPDATE,
  ACTION_COMMENT_REMOVE,
  ACTION_SHARE_LINK_CREATE,
  ACTION_SHARE_LINK_DELETE,
  ACTION_SHARE_LINK_DELETE_BY_PAGE,
  ACTION_SHARE_LINK_ALL_DELETE,
  ACTION_SHARE_LINK_PAGE_VIEW,
  ACTION_SHARE_LINK_EXPIRED_PAGE_VIEW,
  ACTION_SHARE_LINK_NOT_FOUND,
  ACTION_ATTACHMENT_ADD,
  ACTION_ATTACHMENT_REMOVE,
  ACTION_ATTACHMENT_DOWNLOAD,
  ACTION_ADMIN_APP_SETTINGS_UPDATE,
  ACTION_ADMIN_SITE_URL_UPDATE,
  ACTION_ADMIN_MAIL_SMTP_UPDATE,
  ACTION_ADMIN_MAIL_SES_UPDATE,
  ACTION_ADMIN_MAIL_TEST_SUBMIT,
  ACTION_ADMIN_FILE_UPLOAD_CONFIG_UPDATE,
  ACTION_ADMIN_PLUGIN_UPDATE,
  ACTION_ADMIN_MAINTENANCEMODE_ENABLED,
  ACTION_ADMIN_MAINTENANCEMODE_DISABLED,
  ACTION_ADMIN_SECURITY_SETTINGS_UPDATE,
  ACTION_ADMIN_PERMIT_SHARE_LINK,
  ACTION_ADMIN_REJECT_SHARE_LINK,
  ACTION_ADMIN_AUTH_ID_PASS_ENABLED,
  ACTION_ADMIN_AUTH_ID_PASS_DISABLED,
  ACTION_ADMIN_AUTH_ID_PASS_UPDATE,
  ACTION_ADMIN_AUTH_LDAP_ENABLED,
  ACTION_ADMIN_AUTH_LDAP_DISABLED,
  ACTION_ADMIN_AUTH_LDAP_UPDATE,
  ACTION_ADMIN_AUTH_SAML_ENABLED,
  ACTION_ADMIN_AUTH_SAML_DISABLED,
  ACTION_ADMIN_AUTH_SAML_UPDATE,
  ACTION_ADMIN_AUTH_OIDC_ENABLED,
  ACTION_ADMIN_AUTH_OIDC_DISABLED,
  ACTION_ADMIN_AUTH_OIDC_UPDATE,
  ACTION_ADMIN_AUTH_BASIC_ENABLED,
  ACTION_ADMIN_AUTH_BASIC_DISABLED,
  ACTION_ADMIN_AUTH_BASIC_UPDATE,
  ACTION_ADMIN_AUTH_GOOGLE_ENABLED,
  ACTION_ADMIN_AUTH_GOOGLE_DISABLED,
  ACTION_ADMIN_AUTH_GOOGLE_UPDATE,
  ACTION_ADMIN_AUTH_GITHUB_ENABLED,
  ACTION_ADMIN_AUTH_GITHUB_DISABLED,
  ACTION_ADMIN_AUTH_GITHUB_UPDATE,
  ACTION_ADMIN_AUTH_TWITTER_ENABLED,
  ACTION_ADMIN_AUTH_TWITTER_DISABLED,
  ACTION_ADMIN_AUTH_TWITTER_UPDATE,
  ACTION_ADMIN_LINE_BREAK_UPDATE,
  ACTION_ADMIN_LAYOUT_UPDATE,
  ACTION_ADMIN_THEME_UPDATE,
  ACTION_ADMIN_FUNCTION_UPDATE,
  ACTION_ADMIN_CODE_HIGHLIGHT_UPDATE,
  ACTION_ADMIN_CUSTOM_TITLE_UPDATE,
  ACTION_ADMIN_CUSTOM_HTML_HEADER_UPDATE,
  ACTION_ADMIN_CUSTOM_CSS_UPDATE,
  ACTION_ADMIN_CUSTOM_SCRIPT_UPDATE,
  ACTION_ADMIN_ARCHIVE_DATA_UPLOAD,
  ACTION_ADMIN_ARCHIVE_DATA_CREATE,
  ACTION_ADMIN_USER_NOTIFICATION_SETTINGS_ADD,
  ACTION_ADMIN_SLACK_WORKSPACE_CREATE,
  ACTION_ADMIN_SLACK_CONFIGURATION_SETTING_UPDATE,
  ACTION_ADMIN_USERS_INVITE,
  ACTION_ADMIN_USER_GROUP_CREATE,
  ACTION_ADMIN_USER_GROUP_UPDATE,
  ACTION_ADMIN_USER_GROUP_DELETE,
  ACTION_ADMIN_USER_GROUP_ADD_USER,
  ACTION_ADMIN_SEARCH_INDICES_NORMALIZE,
  ACTION_ADMIN_SEARCH_INDICES_REBUILD,
} as const;

// Action required for notification
export const EssentialActionGroup = {
  ACTION_PAGE_LIKE,
  ACTION_PAGE_BOOKMARK,
  ACTION_PAGE_UPDATE,
  ACTION_PAGE_RENAME,
  ACTION_PAGE_DUPLICATE,
  ACTION_PAGE_DELETE,
  ACTION_PAGE_DELETE_COMPLETELY,
  ACTION_PAGE_REVERT,
  ACTION_COMMENT_CREATE,
} as const;

export const ActionGroupSize = {
  Small: 'SMALL',
  Medium: 'MEDIUM',
  Large: 'LARGE',
} as const;

export const SmallActionGroup = {
  ACTION_USER_LOGIN_SUCCESS,
  ACTION_USER_LOGIN_FAILURE,
  ACTION_USER_LOGOUT,
  ACTION_PAGE_CREATE,
  ACTION_PAGE_DELETE,
} as const;

// SmallActionGroup + Action by all General Users - PAGE_VIEW
export const MediumActionGroup = {
  ...SmallActionGroup,
  ACTION_USER_REGISTRATION_SUCCESS,
  ACTION_USER_PERSONAL_SETTINGS_UPDATE,
  ACTION_USER_IMAGE_TYPE_UPDATE,
  ACTION_USER_LDAP_ACCOUNT_ASSOCIATE,
  ACTION_USER_LDAP_ACCOUNT_DISCONNECT,
  ACTION_USER_PASSWORD_UPDATE,
  ACTION_USER_API_TOKEN_UPDATE,
  ACTION_USER_EDITOR_SETTINGS_UPDATE,
  ACTION_USER_IN_APP_NOTIFICATION_SETTINGS_UPDATE,
  ACTION_PAGE_LIKE,
  ACTION_PAGE_UNLIKE,
  ACTION_PAGE_BOOKMARK,
  ACTION_PAGE_UNBOOKMARK,
  ACTION_PAGE_CREATE,
  ACTION_PAGE_UPDATE,
  ACTION_PAGE_RENAME,
  ACTION_PAGE_DUPLICATE,
  ACTION_PAGE_DELETE,
  ACTION_PAGE_DELETE_COMPLETELY,
  ACTION_PAGE_REVERT,
  ACTION_PAGE_EMPTY_TRASH,
  ACTION_PAGE_SUBSCRIBE,
  ACTION_PAGE_UNSUBSCRIBE,
  ACTION_PAGE_EXPORT,
  ACTION_TAG_UPDATE,
  ACTION_IN_APP_NOTIFICATION_ALL_STATUSES_OPEN,
  ACTION_COMMENT_CREATE,
  ACTION_COMMENT_UPDATE,
  ACTION_COMMENT_REMOVE,
  ACTION_SHARE_LINK_CREATE,
  ACTION_SHARE_LINK_DELETE,
  ACTION_SHARE_LINK_DELETE_BY_PAGE,
  ACTION_ATTACHMENT_ADD,
  ACTION_ATTACHMENT_REMOVE,
  ACTION_ATTACHMENT_DOWNLOAD,
} as const;

// MediumActionGroup + All Actions by Admin Users - PAGE_VIEW
export const LargeActionGroup = {
  ...MediumActionGroup,
  ACTION_SHARE_LINK_ALL_DELETE,
  ACTION_ADMIN_APP_SETTINGS_UPDATE,
  ACTION_ADMIN_SITE_URL_UPDATE,
  ACTION_ADMIN_MAIL_SMTP_UPDATE,
  ACTION_ADMIN_MAIL_SES_UPDATE,
  ACTION_ADMIN_MAIL_TEST_SUBMIT,
  ACTION_ADMIN_FILE_UPLOAD_CONFIG_UPDATE,
  ACTION_ADMIN_PLUGIN_UPDATE,
  ACTION_ADMIN_MAINTENANCEMODE_ENABLED,
  ACTION_ADMIN_MAINTENANCEMODE_DISABLED,
  ACTION_ADMIN_SECURITY_SETTINGS_UPDATE,
  ACTION_ADMIN_PERMIT_SHARE_LINK,
  ACTION_ADMIN_REJECT_SHARE_LINK,
  ACTION_ADMIN_AUTH_ID_PASS_ENABLED,
  ACTION_ADMIN_AUTH_ID_PASS_DISABLED,
  ACTION_ADMIN_AUTH_ID_PASS_UPDATE,
  ACTION_ADMIN_AUTH_LDAP_ENABLED,
  ACTION_ADMIN_AUTH_LDAP_DISABLED,
  ACTION_ADMIN_AUTH_LDAP_UPDATE,
  ACTION_ADMIN_AUTH_SAML_ENABLED,
  ACTION_ADMIN_AUTH_SAML_DISABLED,
  ACTION_ADMIN_AUTH_SAML_UPDATE,
  ACTION_ADMIN_AUTH_OIDC_ENABLED,
  ACTION_ADMIN_AUTH_OIDC_DISABLED,
  ACTION_ADMIN_AUTH_OIDC_UPDATE,
  ACTION_ADMIN_AUTH_BASIC_ENABLED,
  ACTION_ADMIN_AUTH_BASIC_DISABLED,
  ACTION_ADMIN_AUTH_BASIC_UPDATE,
  ACTION_ADMIN_AUTH_GOOGLE_ENABLED,
  ACTION_ADMIN_AUTH_GOOGLE_DISABLED,
  ACTION_ADMIN_AUTH_GOOGLE_UPDATE,
  ACTION_ADMIN_AUTH_GITHUB_ENABLED,
  ACTION_ADMIN_AUTH_GITHUB_DISABLED,
  ACTION_ADMIN_AUTH_GITHUB_UPDATE,
  ACTION_ADMIN_AUTH_TWITTER_ENABLED,
  ACTION_ADMIN_AUTH_TWITTER_DISABLED,
  ACTION_ADMIN_AUTH_TWITTER_UPDATE,
  ACTION_ADMIN_LINE_BREAK_UPDATE,
  ACTION_ADMIN_LAYOUT_UPDATE,
  ACTION_ADMIN_THEME_UPDATE,
  ACTION_ADMIN_FUNCTION_UPDATE,
  ACTION_ADMIN_CODE_HIGHLIGHT_UPDATE,
  ACTION_ADMIN_CUSTOM_TITLE_UPDATE,
  ACTION_ADMIN_CUSTOM_HTML_HEADER_UPDATE,
  ACTION_ADMIN_CUSTOM_CSS_UPDATE,
  ACTION_ADMIN_CUSTOM_SCRIPT_UPDATE,
  ACTION_ADMIN_ARCHIVE_DATA_UPLOAD,
  ACTION_ADMIN_ARCHIVE_DATA_CREATE,
  ACTION_ADMIN_USER_NOTIFICATION_SETTINGS_ADD,
  ACTION_ADMIN_SLACK_WORKSPACE_CREATE,
  ACTION_ADMIN_SLACK_CONFIGURATION_SETTING_UPDATE,
  ACTION_ADMIN_USERS_INVITE,
  ACTION_ADMIN_USER_GROUP_CREATE,
  ACTION_ADMIN_USER_GROUP_UPDATE,
  ACTION_ADMIN_USER_GROUP_DELETE,
  ACTION_ADMIN_USER_GROUP_ADD_USER,
  ACTION_ADMIN_SEARCH_INDICES_NORMALIZE,
  ACTION_ADMIN_SEARCH_INDICES_REBUILD,
} as const;


/*
 * Array
 */
export const AllSupportedTargetModels = Object.values(SupportedTargetModel);
export const AllSupportedEventModels = Object.values(SupportedEventModel);
export const AllSupportedActions = Object.values(SupportedAction);
export const AllEssentialActions = Object.values(EssentialActionGroup);
export const AllSmallGroupActions = Object.values(SmallActionGroup);
export const AllMediumGroupActions = Object.values(MediumActionGroup);
export const AllLargeGroupActions = Object.values(LargeActionGroup);

// Action categories（for SelectActionDropdown.tsx）
const pageRegExp = new RegExp(`^${SupportedActionCategory.PAGE.toUpperCase()}_`);
const commentRegExp = new RegExp(`^${SupportedActionCategory.COMMENT.toUpperCase()}_`);
const tagRegExp = new RegExp(`^${SupportedActionCategory.TAG.toUpperCase()}_`);
const attachmentRegExp = RegExp(`^${SupportedActionCategory.ATTACHMENT.toUpperCase()}_`);
const shareLinkRegExp = RegExp(`^${SupportedActionCategory.SHARE_LINK.toUpperCase()}_`);
const inAppNotificationRegExp = RegExp(`^${SupportedActionCategory.IN_APP_NOTIFICATION.toUpperCase()}_`);
const userRegExp = new RegExp(`^${SupportedActionCategory.USER.toUpperCase()}_`);
const adminRegExp = new RegExp(`^${SupportedActionCategory.ADMIN.toUpperCase()}_`);

export const PageActions = AllSupportedActions.filter(action => action.match(pageRegExp));
export const CommentActions = AllSupportedActions.filter(action => action.match(commentRegExp));
export const TagActions = AllSupportedActions.filter(action => action.match(tagRegExp));
export const AttachmentActions = AllSupportedActions.filter(action => action.match(attachmentRegExp));
export const ShareLinkActions = AllSupportedActions.filter(action => action.match(shareLinkRegExp));
export const InAppNotificationActions = AllSupportedActions.filter(action => action.match(inAppNotificationRegExp));
export const UserActions = AllSupportedActions.filter(action => action.match(userRegExp));
export const AdminActions = AllSupportedActions.filter(action => action.match(adminRegExp));

/*
 * Type
 */
export type SupportedTargetModelType = typeof SupportedTargetModel[keyof typeof SupportedTargetModel];
export type SupportedEventModelType = typeof SupportedEventModel[keyof typeof SupportedEventModel];
export type SupportedActionType = typeof SupportedAction[keyof typeof SupportedAction];
export type SupportedActionCategoryType = typeof SupportedActionCategory[keyof typeof SupportedActionCategory]

export type ISnapshot = Partial<Pick<IUser, 'username'>>

export type IActivity = {
  user?: Ref<IUser>
  ip?: string
  endpoint?: string
  targetModel?: SupportedTargetModelType
  target?: string
  eventModel?: SupportedEventModelType
  event?: string
  action: SupportedActionType
  createdAt: Date
  snapshot?: ISnapshot
}

export type IActivityHasId = IActivity & HasObjectId;

export type ISearchFilter = {
  usernames?: string[]
  dates?: {startDate: string | null, endDate: string | null}
  actions?: SupportedActionType[]
}
