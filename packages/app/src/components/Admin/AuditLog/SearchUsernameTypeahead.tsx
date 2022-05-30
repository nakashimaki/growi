import React, {
  FC, Fragment, useState, useCallback,
} from 'react';

import { AsyncTypeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';

import { useSWRxUsernames } from '~/stores/user';


const Categories = {
  activeUser: 'Active User',
  inactiveUser: 'Inactive User',
  activitySnapshotUser: 'Activity Snapshot User',
} as const;

type CategorieType = typeof Categories[keyof typeof Categories]

type UserDataType = {
  username: string
  category: CategorieType
}

type Props = {
  onChange: (text: string[]) => void
}

export const SearchUsernameTypeahead: FC<Props> = (props: Props) => {
  const { onChange } = props;

  /*
   * State
   */
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  /*
   * Fetch
   */
  const requestOptions = { isIncludeActiveUser: true, isIncludeInactiveUser: true, isIncludeActivitySnapshotUser: true };
  const { data: usernameData, error } = useSWRxUsernames(searchKeyword, 0, 5, requestOptions);
  const activeUsernames = usernameData?.activeUser?.usernames != null ? usernameData.activeUser.usernames : [];
  const inactiveUsernames = usernameData?.inactiveUser?.usernames != null ? usernameData.inactiveUser.usernames : [];
  const activitySnapshotUsernames = usernameData?.activitySnapshotUser?.usernames != null ? usernameData.activitySnapshotUser.usernames : [];
  const isLoading = usernameData === undefined && error == null;

  const allUser: UserDataType[] = [];
  const pushToAllUser = (usernames: string[], category: CategorieType) => {
    usernames.forEach(username => allUser.push({ username, category }));
  };
  pushToAllUser(activeUsernames, Categories.activeUser);
  pushToAllUser(inactiveUsernames, Categories.inactiveUser);
  pushToAllUser(activitySnapshotUsernames, Categories.activitySnapshotUser);

  /*
   * Functions
   */
  const changeHandler = useCallback((userData: UserDataType[]) => {
    if (onChange != null) {
      const usernames = userData.map(user => user.username);
      onChange(usernames);
    }
  }, [onChange]);

  const searchHandler = useCallback((text: string) => {
    setSearchKeyword(text);
  }, []);

  const renderMenu = useCallback((allUser: UserDataType[], menuProps) => {
    if (allUser == null || allUser.length === 0) {
      return <></>;
    }

    let index = 0;
    const items = Object.values(Categories).map((category) => {
      const userData = allUser.filter(user => user.category === category);
      return (
        <Fragment key={category}>
          {index !== 0 && <Menu.Divider />}
          <Menu.Header>{category}</Menu.Header>
          {userData.map((user) => {
            const item = (
              <MenuItem key={index} option={user} position={index}>
                {user.username}
              </MenuItem>
            );
            index++;
            return item;
          })}
        </Fragment>
      );
    });

    return (
      <Menu {...menuProps}>{items}</Menu>
    );
  }, []);

  return (
    <div className="input-group mr-2">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="icon-people"></i>
        </span>
      </div>
      <AsyncTypeahead
        id="auditlog-username-typeahead-asynctypeahead"
        multiple
        delay={400}
        placeholder="username"
        labelKey={option => `${option.username}`}
        caseSensitive={false}
        isLoading={isLoading}
        minLength={0}
        options={allUser}
        onSearch={searchHandler}
        onChange={changeHandler}
        renderMenu={renderMenu}
      />
    </div>
  );
};
