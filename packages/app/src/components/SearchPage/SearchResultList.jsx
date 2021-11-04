import React from 'react';
import PropTypes from 'prop-types';
import SearchResultListItem from './SearchResultListItem';

class SearchResultList extends React.Component {

  render() {
    const { selectedPage } = this.props;
    const selectedPageId = selectedPage != null && selectedPage.id != null ? selectedPage.id : '';
    return this.props.pages.map((page) => {
      // TODO : send cetain  length of body (revisionBody) from elastisearch by adding some settings to the query and
      //         when keyword is not in page content, display revisionBody.
      // TASK : https://estoc.weseek.co.jp/redmine/issues/79606
      return (
        <SearchResultListItem
          key={page._id}
          page={page}
          selectedPageId={selectedPageId}
          onClickInvoked={this.props.onClickInvoked}
          noLink
        />
      );
    });
  }

}

SearchResultList.propTypes = {
  pages: PropTypes.array.isRequired,
  deletionMode: PropTypes.bool.isRequired,
  selectedPage: PropTypes.object,
  selectedPages: PropTypes.array.isRequired,
  onClickInvoked: PropTypes.func,
  onChangeInvoked: PropTypes.func,
};

export default SearchResultList;
