import styles from "./Profile.module.scss";

export const Profile = (): JSX.Element => {
  return (
    <div className={styles.wrapperProfile}>
      Profile
      <div>{/* <ProfileInformation user={user}/> */}</div>
    </div>
  );
};
