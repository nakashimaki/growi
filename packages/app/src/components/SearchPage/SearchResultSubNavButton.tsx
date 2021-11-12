import React, {
  FC, useState, useEffect,
} from 'react';
import AppContainer from '../../client/services/AppContainer';
import { withUnstatedContainers } from '../UnstatedUtils';

import LikeButtons from '../LikeButtons';
import PageManagement from '../Page/PageManagement';
import { apiv3Get } from '../../client/util/apiv3-client';


type PageReactionButtonsProps = {
  appContainer: AppContainer,
  pageId: string,
}

const PageReactionButtons : React.FC<PageReactionButtonsProps> = (props: PageReactionButtonsProps) => {
  const { appContainer, pageId } = props;
  const LikeButtonsTypeAny : any = LikeButtons;

  const [sumOflikers, setSumOfLikers] = useState(0);
  const [likers, setLikers] = useState<string[]>([]);
  const [isLiked, setIsLiked] = useState(true);

  // component did mount
  useEffect(() => {
    const f = async() => {
      const {
        data: { likerIds, sumOfLikers, isLiked },
      } = await apiv3Get('/page/info', { pageId });

      setSumOfLikers(sumOfLikers);
      setLikers(likerIds);
      setIsLiked(isLiked);
    };
    f();
  }, []);

  const onChangeInvoked = () => {
    setSumOfLikers(sumOflikers => (isLiked ? sumOflikers - 1 : sumOflikers + 1));
    setLikers(likerIds => (isLiked ? likerIds.filter(id => id !== appContainer.currentUserId) : [...likerIds, appContainer.currentUserId]));
    setIsLiked(isLiked => !isLiked);
  };
  return (
    <>
      <span>
        <LikeButtonsTypeAny
          onChangeInvoked={onChangeInvoked}
          pageId={pageId}
          likers={likers}
          sumOfLikers={sumOflikers}
          isLiked={isLiked}
        >
        </LikeButtonsTypeAny>
      </span>
      <span>
        {/*
          TODO:
          once 80335 is done, merge 77543 branch(parent of 80335) into 77524.
          (pageContainer dependencies in bookmark, delete modal, rename etc are removed)
          then place BookMarkButton here
          TASK: https://estoc.weseek.co.jp/redmine/issues/81076
        */}
        {/* <BookmarkButton></BookmarkButton> */}
      </span>
    </>
  );
};

type Props = {
  appContainer: AppContainer,
  isCompactMode: boolean,

  pageId: string,
}

const SearchResultSubNavButton : FC<Props> = (props: Props) => {
  const {
    appContainer, isCompactMode, pageId,
  } = props;
  return (
    <>
      <PageReactionButtons appContainer={appContainer} pageId={pageId}></PageReactionButtons>
      {/*
        TODO :
        once 80335 is done, merge 77543 branch(parent of 80335) into 77524.
        (pageContainer dependencies in bookmark, delete modal, rename etc are removed)
        then place PageManagement here.
        TASK: https://estoc.weseek.co.jp/redmine/issues/81076
        CONDITION :isAbleToShowPageManagement = !isNotFoundPage && !isTrashPage && !isSharedUser
      */}
      {/* if (CONDITION) then PageManagement */}
    </>
  );
};

const SearchResultSubNavButtonWrapper = withUnstatedContainers(SearchResultSubNavButton, [AppContainer]);

export default SearchResultSubNavButtonWrapper;
