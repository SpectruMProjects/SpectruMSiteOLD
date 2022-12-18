import { CardPage } from "components";

import styles from "./Profile.module.scss";

export const Profile = (): JSX.Element => {
  return (
    <CardPage className={styles.wrapperProfile}>
      Profile
      <div>{/* <ProfileInformation user={user}/> */}</div>
    </CardPage>
  );
};
