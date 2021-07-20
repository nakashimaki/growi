import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AppContainer from '../../../services/AppContainer';
import { withUnstatedContainers } from '../../UnstatedUtils';
import CustomBotWithoutProxySettingsAccordion, { botInstallationStep } from './CustomBotWithoutProxySettingsAccordion';
import CustomBotWithoutProxyConnectionStatus from './CustomBotWithoutProxyConnectionStatus';

const CustomBotWithoutProxySettings = (props) => {
  const { appContainer, connectionStatuses } = props;
  const { t } = useTranslation();
  const [siteName, setSiteName] = useState('');

  useEffect(() => {
    const siteName = appContainer.config.crowi.title;
    setSiteName(siteName);
  }, [appContainer]);

  const workspaceName = connectionStatuses[props.slackBotToken]?.workspaceName;

  return (
    <>
      <h2 className="admin-setting-header">{t('admin:slack_integration.custom_bot_without_proxy_integration')}
        <i
          className="fa fa-external-link btn-link ml-2"
          aria-hidden="true"
          onClick={() => window.open('https://docs.growi.org/en/admin-guide/management-cookbook/slack-integration/#custom-bot-without-proxy', '_blank')}
        />
      </h2>

      <CustomBotWithoutProxyConnectionStatus
        siteName={siteName}
        connectionStatuses={connectionStatuses}
      />

      <h2 className="admin-setting-header">{t('admin:slack_integration.integration_procedure')}</h2>

      <div className="px-3">
        <div className="my-3 d-flex align-items-center justify-content-between">
          <h2 id={props.slackBotToken || 'settings-accordions'}>
            {(workspaceName != null) ? `${workspaceName} Work Space` : 'Settings'}
          </h2>
        </div>
        <CustomBotWithoutProxySettingsAccordion
          activeStep={botInstallationStep.CREATE_BOT}
          slackBotTokenEnv={props.slackBotTokenEnv}
          slackBotToken={props.slackBotToken}
          slackSigningSecretEnv={props.slackSigningSecretEnv}
          slackSigningSecret={props.slackSigningSecret}
          onTestConnectionInvoked={props.onTestConnectionInvoked}
          onUpdatedSecretToken={props.onUpdatedSecretToken}
        />
      </div>
    </>
  );
};

const CustomBotWithoutProxySettingsWrapper = withUnstatedContainers(CustomBotWithoutProxySettings, [AppContainer]);

CustomBotWithoutProxySettings.propTypes = {
  appContainer: PropTypes.instanceOf(AppContainer).isRequired,

  slackSigningSecret: PropTypes.string,
  slackSigningSecretEnv: PropTypes.string,
  slackBotToken: PropTypes.string,
  slackBotTokenEnv: PropTypes.string,

  onUpdatedSecretToken: PropTypes.func.isRequired,
  onTestConnectionInvoked: PropTypes.func.isRequired,
  connectionStatuses: PropTypes.object.isRequired,
};

export default CustomBotWithoutProxySettingsWrapper;
