import styles from "../../styles/formStyles.module.css";

export default function CreateUserForm({ createUserFunction }) {
  return (
    <div className={styles.formWrapper}>
      <h2>Create User Form</h2>
      <form onSubmit={(e) => createUserFunction(e)}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}