import React from 'react';
import PropTypes from 'prop-types';


import { withTranslation } from 'react-i18next';

import { withUnstatedContainers } from './UnstatedUtils';

import AppContainer from '../services/AppContainer';

const ShareLinkList = (props) => {

  const { t } = props;
  function deleteLinkHandler(shareLinkId) {
    if (props.onClickDeleteButton == null) {
      return;
    }
    props.onClickDeleteButton(shareLinkId);
  }

  function renderShareLinks() {
    return (
      <>
        {props.shareLinks.map(shareLink => (
          <tr key={shareLink._id}>
            <td>{shareLink._id}</td>
            <td>{shareLink.expiredAt}</td>
            <td>{shareLink.description}</td>
            <td>
              <button className="btn btn-outline-warning" type="button" onClick={() => deleteLinkHandler(shareLink._id)}>
                <i className="icon-trash"></i>{t('Delete')}
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>{t('share_links.Share Link')}</th>
            <th>{t('share_links.expire')}</th>
            <th>{t('share_links.description')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {renderShareLinks()}
        </tbody>
      </table>
    </div>
  );
};

const ShareLinkListWrapper = withUnstatedContainers(ShareLinkList, [AppContainer]);

ShareLinkList.propTypes = {
  t: PropTypes.func.isRequired, //  i18next
  appContainer: PropTypes.instanceOf(AppContainer).isRequired,

  shareLinks: PropTypes.array.isRequired,
  onClickDeleteButton: PropTypes.func,
};

export default withTranslation()(ShareLinkListWrapper);
